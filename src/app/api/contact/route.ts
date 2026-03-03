import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

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

    // ── 1. Save to Supabase (server-side only — service role key never sent to browser) ──
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const { error: dbError } = await supabase.from('contact_submissions').insert({
        name,
        email,
        company: company || null,
        message,
        is_demo: demo === true,
      })
      if (dbError) {
        // Non-fatal — log and continue to send email
        console.error('Supabase insert error:', dbError.message)
      }
    } else {
      console.warn('Supabase env vars not set — skipping DB save.')
    }

    // ── 2. Send email via Resend ─────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY
    if (!resendKey) {
      console.warn('RESEND_API_KEY not set — email not sent.')
      return NextResponse.json({ success: true, warn: 'Email not sent — API key missing.' })
    }

    const resend = new Resend(resendKey)

    await resend.emails.send({
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

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
