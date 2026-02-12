const escapeHtml = (val) =>
  String(val || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const cleanArray = (arr = []) =>
  arr.filter((v) => v && typeof v === "string" && v.trim() !== "");

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

  const rawCCs = [process.env.NEXT_PUBLIC_SUPPORT_CC_EMAIL_ID, email];

  // Filter out null, undefined, empty strings, and whitespace-only strings
  const toCCs = rawCCs.filter((cc) => cc && cc.trim() !== "");

  const payload = {
    toEmails: [process.env.NEXT_PUBLIC_SUPPORT_EMAIL_ID],
    toCCs,
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

export async function sendLeadEmail({
  name,
  phone,
  email,
  company,
  teamSize,
  utmSource,
  utmMedium,
  utmCampaign,
}) {
  try {
    const API_URL = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Email/withcc`;

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeTeamSize = escapeHtml(teamSize);
    const safeUtmSource = escapeHtml(utmSource || "unknown");
    const safeUtmMedium = escapeHtml(utmMedium || "unknown");
    const safeUtmCampaign = escapeHtml(utmCampaign || "unknown");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
        <table width="100%" cellpadding="0" cellspacing="0"
          style="max-width:600px; margin:auto; background:#ffffff;
          border-radius:8px; border:1px solid #e5e7eb;">

          <tr>
            <td style="background:#111827; color:#ffffff;
              padding:16px 20px; font-size:18px; font-weight:bold;">
              New Demo / Lead Request
            </td>
          </tr>

          <tr>
            <td style="padding:20px;">
              <table width="100%" cellpadding="8" cellspacing="0"
                style="border-collapse:collapse; font-size:14px;">

                ${row("Name", safeName)}
                ${row("Email", safeEmail)}
                ${row("Phone", safePhone)}
                ${row("Company", safeCompany)}
                ${row("Team Size", safeTeamSize)}

              </table>

              <div style="margin:24px 0; border-top:1px solid #e5e7eb;"></div>

              <table width="100%" cellpadding="8" cellspacing="0"
                style="border-collapse:collapse; font-size:14px;">

                <tr>
                  <td colspan="2"
                    style="font-weight:bold; padding-bottom:8px;">
                    Lead Source
                  </td>
                </tr>

                ${row("Source", safeUtmSource)}
                ${row("Medium", safeUtmMedium)}
                ${row("Campaign", safeUtmCampaign)}

              </table>
            </td>
          </tr>
        </table>
      </div>
    `;

    const toEmails = cleanArray([process.env.NEXT_PUBLIC_SALES_EMAIL_ID]);

    const toCCs = cleanArray([process.env.NEXT_PUBLIC_SALES_CC_EMAIL_ID]);

    const payload = {
      toEmails,
      toCCs,
      subject: `New Lead: ${safeName} (${safeCompany})`,
      htmlContent,
    };

    const res = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_EMAIL_API_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok) {
      return {
        success: false,
        message: data?.message || "Failed to send lead email",
      };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/* =====================================================
   TABLE ROW HELPER
===================================================== */

function row(label, value) {
  return `
    <tr>
      <td style="
        background:#f9fafb;
        font-weight:bold;
        width:40%;
        border:1px solid #e5e7eb;">
        ${label}
      </td>
      <td style="border:1px solid #e5e7eb;">
        ${value}
      </td>
    </tr>
  `;
}
