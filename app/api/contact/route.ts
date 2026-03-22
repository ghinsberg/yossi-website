import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, organisation, phone, eventDate, eventLocation, audienceSize, format, budget, keynote, message, referral } = body;

    // Validate required fields
    if (!name || !email || !organisation || !eventDate || !eventLocation || !format || !budget) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log the enquiry (in production, replace with SMTP / email service)
    console.log("New booking enquiry received:", {
      name,
      email,
      organisation,
      phone,
      eventDate,
      eventLocation,
      audienceSize,
      format,
      budget,
      keynote,
      message,
      referral,
      timestamp: new Date().toISOString(),
    });

    // TODO: Add email sending via SMTP (e.g. nodemailer, Resend, SendGrid)
    // when proper credentials are available. For now, the form data is logged
    // and the client receives a success response.

    return NextResponse.json(
      { success: true, message: "Enquiry received successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
