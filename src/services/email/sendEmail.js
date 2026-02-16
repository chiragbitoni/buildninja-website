import { supportConfirmationTemplate } from "@/templates/email/supportTemplate";
import { leadTemplate } from "@/templates/email/leadTemplate";

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
  const htmlContent = supportConfirmationTemplate({
    name: escapeHtml(name),
    message: escapeHtml(message),
  });

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
      // credentials: "include", // send HttpOnly cookie
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

    const htmlContent = leadTemplate({
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      company: safeCompany,
      teamSize: safeTeamSize,
      utmSource: safeUtmSource,
      utmMedium: safeUtmMedium,
      utmCampaign: safeUtmCampaign,
    });

    const toEmails = cleanArray([process.env.NEXT_PUBLIC_SALES_EMAIL_ID]);

    const rawCCs = [process.env.NEXT_PUBLIC_SUPPORT_CC_EMAIL_ID];
    const toCCs = rawCCs.filter((cc) => cc && cc.trim() !== "");

    const payload = {
      toEmails,
      toCCs,
      subject: `New Lead: ${safeName} (${safeCompany})`,
      htmlContent,
    };

    const res = await fetch(API_URL, {
      method: "POST",
      // credentials: "include",
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
