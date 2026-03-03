import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Build mailto URL as fallback (no server-side Resend key required for static deploy)
    const subject = encodeURIComponent(`PerfMonk Contact: ${name} from ${company || 'N/A'}`)
    const bodyText = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`
    )

    // If RESEND_API_KEY is configured, use Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'PerfMonk Contact <noreply@perfmonk.in>',
        to: ['perfmonk@perfmonk.in'],
        replyTo: email,
        subject: `Contact from ${name} (${company || 'N/A'})`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
      })

      return NextResponse.json({ success: true })
    }

    // Fallback: return mailto URL for client to open
    return NextResponse.json({
      success: true,
      fallback: true,
      mailto: `mailto:perfmonk@perfmonk.in?subject=${subject}&body=${bodyText}`,
    })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
