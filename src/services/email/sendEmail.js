export async function sendSupportEmail({ name, email, subject, message }) {
  const API_URL = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Email/withcc`;

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f7f7f7;">
    <div style="
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      padding: 20px 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    ">
      <h2 style="color: #4a4a4a; margin-bottom: 10px;">Hello ${name},</h2>

      <p style="font-size: 15px; color: #555;">
        We have received your support request. Our team will review it and get back to you shortly.
      </p>

      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

      <h3 style="color: #333; margin-bottom: 8px;">Your Message</h3>
      <p style="font-size: 15px; color: #444; line-height: 1.6;">
        ${message.replace(/\n/g, "<br>")}
      </p>

      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

      <p style="font-size: 13px; color: #777;">
        This email is just a confirmation. Our support team will contact you soon.
      </p>

      <p style="font-size: 13px; color: #999; margin-top: 20px;">
        — BuildNinja Support Team
      </p>
    </div>
  </div>
`;

  const payload = {
    toEmails: [process.env.NEXT_PUBLIC_SUPPORT_EMAIL_ID],
    toCCs: [process.env.NEXT_PUBLIC_SUPPORT_CC_EMAIL_ID, email],
    subject,
    htmlContent,
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      credentials: "include", // send HttpOnly cookie
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_EMAIL_API_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    // 401 → no token
    if (res.status === 401) {
      return { success: false, message: "Unauthorized" };
    }

    const text = await res.text();
    if (!text) return { success: false };

    const data = JSON.parse(text);

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Failed to send email",
      };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, message: err.message };
  }
}
