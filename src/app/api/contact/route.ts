import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { appendToGoogleSheet } from '@/lib/google-sheets'

// ── Firestore admin init (once per lambda) ───────────────────────────────────
// FIREBASE_SERVICE_ACCOUNT holds the service-account JSON (Firebase Console →
// Project Settings → Service accounts → Generate new private key). Server-side
// only — never exposed to the browser.
function db() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT
  if (!raw) return null
  if (!getApps().length) {
    initializeApp({ credential: cert(JSON.parse(raw)) })
  }
  return getFirestore()
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, message, demo } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // ── 1. Save to Firestore (non-fatal — email is the primary alert) ──────────
    try {
      const store = db()
      if (store) {
        await store.collection('contact_submissions').add({
          name,
          email,
          company: company || null,
          message,
          is_demo: demo === true,
          created_at: new Date(),
        })
      } else {
        console.warn('FIREBASE_SERVICE_ACCOUNT not set — skipping Firestore save.')
      }
    } catch (dbErr) {
      // Don't fail the request if storage hiccups — still send the email.
      console.error('Firestore write error:', dbErr)
    }

    // ── 2. Append to Google Sheet (non-fatal) ──────────────────────────────────
    try {
      await appendToGoogleSheet({ name, email, company, message, demo })
    } catch (sheetErr) {
      console.error('Google Sheets append error:', sheetErr)
    }

    // ── 3. Send email via Resend ─────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      console.warn('RESEND_API_KEY not set — email not sent.')
      return NextResponse.json({ error: 'Email is not configured.' }, { status: 500 })
    }

    const resend = new Resend(resendKey)

    const { data, error } = await resend.emails.send({
      from: 'PerfMonk Contact <noreply@perfmonk.in>',
      to: ['perfmonk@perfmonk.in'],
      replyTo: email,
      subject: `${demo ? '[Demo Request] ' : ''}Contact from ${name}${company ? ` · ${company}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
          <h2 style="margin-bottom:4px">${demo ? '🗓 Demo Request' : '✉️ New Contact'}</h2>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:12px 0"/>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#666;width:100px">Name</td><td style="padding:6px 0"><strong>${name}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:6px 0;color:#666">Company</td><td style="padding:6px 0">${company}</td></tr>` : ''}
            <tr><td style="padding:6px 0;color:#666">Demo?</td><td style="padding:6px 0">${demo ? 'Yes' : 'No'}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:12px 0"/>
          <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px;font-size:14px">${message}</p>
          <p style="color:#999;font-size:12px;margin-top:16px">Sent via perfmonk.in contact form</p>
        </div>
      `,
    })

    // Resend does NOT throw on API errors — it returns { error }. Surface it so a
    // misconfig can't masquerade as success (and you actually get your alert).
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Email could not be sent.' }, { status: 502 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
