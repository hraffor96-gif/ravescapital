import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, company, email, country, phone, type, sector, message } = body

    if (!name || !email || !type || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
        <h2 style="color: #000; border-bottom: 1px solid #eee; padding-bottom: 10px;">
          New Inquiry — Raves Capital
        </h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px 0; color:#666; width:140px;">Name</td><td style="padding:8px 0; font-weight:bold;">${name}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Company</td><td style="padding:8px 0;">${company || '—'}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Email</td><td style="padding:8px 0;">${email}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Country</td><td style="padding:8px 0;">${country}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Phone</td><td style="padding:8px 0;">${phone || '—'}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Inquiry Type</td><td style="padding:8px 0;">${type}</td></tr>
          <tr><td style="padding:8px 0; color:#666;">Sector</td><td style="padding:8px 0;">${sector || '—'}</td></tr>
        </table>
        <div style="margin-top:16px; padding:16px; background:#f9f9f9; border-left:3px solid #000;">
          <p style="margin:0; white-space:pre-wrap;">${message}</p>
        </div>
        <p style="color:#999; font-size:12px; margin-top:20px;">Sent from ravescapital.com contact form</p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Raves Capital Contact <noreply@ravescapital.com>',
        to: ['hraffor96@gmail.com'],
        reply_to: email,
        subject: `[Raves Capital] ${type} — ${name}`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
