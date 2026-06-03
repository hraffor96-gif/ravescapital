import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Raves Capital <contact@ravescapital.com>",
      to: ["hraffor96@gmail.com"],
      reply_to: email,
      subject: `New Inquiry from ${name} — Raves Capital`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F5F3EF; padding: 48px;">
          <div style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #B8922A; margin-bottom: 32px;">
            Raves Capital — New Inquiry
          </div>
          <h2 style="font-size: 24px; font-weight: 300; margin-bottom: 32px; color: #F5F3EF;">
            ${name}
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 0.5px solid rgba(184,146,42,0.2); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #B8922A; width: 120px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 0.5px solid rgba(184,146,42,0.2); font-size: 13px; color: #C8C4BC;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 0.5px solid rgba(184,146,42,0.2); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #B8922A;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 0.5px solid rgba(184,146,42,0.2); font-size: 13px; color: #C8C4BC;">${phone || "Not provided"}</td>
            </tr>
          </table>
          <div style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #B8922A; margin-bottom: 12px;">Message</div>
          <p style="font-size: 13px; line-height: 1.9; color: #C8C4BC; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
          <div style="margin-top: 48px; padding-top: 24px; border-top: 0.5px solid rgba(184,146,42,0.2); font-size: 10px; color: #6B6B6B; letter-spacing: 0.1em;">
            RAVES CAPITAL HOLDINGS LLC — ravescapital.com
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
