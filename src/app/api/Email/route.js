import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const cookieStore = cookies();
    const cookieToken = cookieStore.get("buildNinjaAccess")?.value;
    const accessToken = cookieToken || process.env.EMAIL_API_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: "Missing access token" },
        { status: 401 }
      );
    }

    // Build email payload internally (NOT from client)
    const payload = {
      toEmails: [process.env.SUPPORT_EMAIL_ID],
      toCCs: [process.env.SUPPORT_CC_EMAIL_ID],
      subject: subject || "Support Request",

      htmlContent: `
        <h3>New Support Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    const emailRes = await fetch(process.env.EMAIL_WITH_CC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await emailRes.json();

    if (!emailRes.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });

  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
