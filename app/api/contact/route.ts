import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { resolveAgent } from "@/data/he/agents";
import {
  EMAIL_FROM,
  buildEnglishEmailHtml,
  buildHebrewEmailHtml,
  recipientsFor,
  subjectFor,
  validateEnquiry,
} from "@/lib/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation, recipients, subject and the email bodies are pure functions
    // in lib/contact.ts (unit tested). Recipients never come from the request:
    // the Hebrew agent is resolved server side from a tag that must match a
    // known agent.
    const result = validateEnquiry(body);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }
    const { site, data } = result;
    const agent = site === "he" ? resolveAgent(data.agentTag) : null;

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: recipientsFor(site, agent),
      ...(site === "he"
        ? data.email ? { replyTo: data.email } : {}
        : { replyTo: data.email }),
      subject: subjectFor(site, data, agent),
      html: site === "he" ? buildHebrewEmailHtml(data, agent!) : buildEnglishEmailHtml(data),
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
