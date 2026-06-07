import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name, email, organisation, phone,
      eventDate, eventLocation, audienceSize,
      format, budget, keynote, message, referral,
    } = body;

    // Validate required fields
    // eventDate is optional on the form — do not require it here
    if (!name || !email || !organisation || !eventLocation || !format || !budget) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const html = `
<div style="font-family: sans-serif; max-width: 600px; color: #222;">
  <h2 style="color: #B8860B; margin-bottom: 4px;">New Booking Enquiry</h2>
  <p style="color: #888; margin-top: 0; font-size: 13px;">${new Date().toUTCString()}</p>

  <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 40%; color: #666;">Name</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">${name}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Organisation</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">${organisation}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Phone</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || "—"}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Event Date</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${eventDate}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Location</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${eventLocation}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Audience Size</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${audienceSize || "—"}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Format</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${format}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Budget</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${budget}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Keynote Interest</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${keynote || "—"}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Referral</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${referral || "—"}</td></tr>
  </table>

  ${message ? `<div style="margin-top: 20px;"><p style="color: #666; margin-bottom: 6px;">Message</p><p style="background: #f9f9f9; padding: 12px; border-radius: 6px; margin: 0;">${message}</p></div>` : ""}

  <p style="margin-top: 28px; font-size: 12px; color: #aaa;">Sent from yossighinsberg.com booking form</p>
</div>`;

    const { error } = await resend.emails.send({
      from: "Yossi Ghinsberg <hello@yossighinsberg.com>",
      to: ["ghinsberg@gmail.com"],
      replyTo: email,
      subject: `Booking Enquiry — ${name}, ${organisation}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to process enquiry" }, { status: 500 });
  }
}
