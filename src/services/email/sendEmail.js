export async function sendSupportEmail({ name, email, subject, message }) {
  const API_URL = process.env.NEXT_PUBLIC_EMAIL_WITH_CC_API_URL;

  const htmlContent = `
    <h3>New Support Request</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `;

  const payload = {
    toEmails: [process.env.NEXT_PUBLIC_SUPPORT_EMAIL_ID],
    toCCs: [process.env.NEXT_PUBLIC_SUPPORT_CC_EMAIL_ID],
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
