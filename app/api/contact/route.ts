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
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      referrer, landing_path,
    } = body;

    // Validate required fields
    // eventDate is optional on the form — do not require it here
    if (!name || !email || !organisation || !eventLocation || !format || !budget) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Subject-line attribution prefix — makes Yossi's inbox sortable by channel
    // at a glance. LinkedIn is the priority channel right now per STRATEGY_v1.
    const channelTag = utm_source
      ? `[${(utm_source as string).toUpperCase()}] `
      : "";

    // Build a UTM section for the email body — only show if there's a real
    // capture, otherwise the email is the same as before for direct visitors.
    const utmBlock = utm_source
      ? `
  <table style="width:100%; border-collapse: collapse; margin-top: 20px; background: #fff8e1; padding: 8px;">
    <tr><td colspan="2" style="padding: 8px; color: #B8860B; font-weight: 600; border-bottom: 1px solid #f0e0a0;">📍 Attribution (where they came from)</td></tr>
    <tr><td style="padding: 8px 0 8px 12px; width: 40%; color: #666;">Source</td><td style="padding: 8px 0; font-weight: 600;">${utm_source}</td></tr>
    ${utm_medium ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Medium</td><td style="padding: 8px 0;">${utm_medium}</td></tr>` : ""}
    ${utm_campaign ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Campaign</td><td style="padding: 8px 0;">${utm_campaign}</td></tr>` : ""}
    ${utm_content ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Content variant</td><td style="padding: 8px 0;">${utm_content}</td></tr>` : ""}
    ${utm_term ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Term</td><td style="padding: 8px 0;">${utm_term}</td></tr>` : ""}
    ${referrer ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Referrer</td><td style="padding: 8px 0; font-size: 12px; color: #888;">${referrer}</td></tr>` : ""}
    ${landing_path ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Landed on</td><td style="padding: 8px 0; font-size: 12px;">${landing_path}</td></tr>` : ""}
  </table>`
      : "";

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
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Referral (self-reported)</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${referral || "—"}</td></tr>
  </table>

  ${utmBlock}

  ${message ? `<div style="margin-top: 20px;"><p style="color: #666; margin-bottom: 6px;">Message</p><p style="background: #f9f9f9; padding: 12px; border-radius: 6px; margin: 0;">${message}</p></div>` : ""}

  <p style="margin-top: 28px; font-size: 12px; color: #aaa;">Sent from yossighinsberg.com booking form</p>
</div>`;

    const { error } = await resend.emails.send({
      from: "Yossi Ghinsberg <hello@yossighinsberg.com>",
      to: ["ghinsberg@gmail.com"],
      replyTo: email,
      subject: `${channelTag}Booking Enquiry — ${name}, ${organisation}`,
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
