import { supportConfirmationTemplate } from "@/templates/email/supportTemplate";
import { contactConfirmationTemplate } from "@/templates/email/contactTemplate";
import { leadTemplate } from "@/templates/email/leadTemplate";
import { partnershipTemplate } from "@/templates/email/partnershipTemplate";
import { getCookie, setCookie } from "@/lib/tracking/cookies";
const getSessionId = () => {
  let sessionId = getCookie("gh_session_id");

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    setCookie("gh_session_id", sessionId);
  }

  return sessionId;
}
const parseEmailList = (value) =>
  String(value || "")
    .split(",")
    .map((email) => email.trim())
    .filter((email) => email.length > 0);

const escapeHtml = (val) =>
  String(val || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const LEAD_API = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/leads`;
export const normalizePhone = (phone, defaultCountryCode = "+91") => {
  if (!phone) return null;

  let cleaned = phone.replace(/[^\d+]/g, "");

  // already international
  if (cleaned.startsWith("+")) return cleaned;

  // remove leading zero
  if (cleaned.startsWith("0")) {
    cleaned = cleaned.substring(1);
  }

  return defaultCountryCode + cleaned;
};
export const normalizeTeamSize = (value) => {
  if (!value) return null;

  return value
    .replace("–", "-")   // fix en dash
    .replace("+", "plus") // optional (DB safe)
    .trim();
};
export async function sendSupportEmail({ name, email, subject, message }) {
  const API_URL = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Email/withcc`;
  const htmlContent = supportConfirmationTemplate({
    name: escapeHtml(name),
    message: escapeHtml(message),
  });

  const supportCCs = parseEmailList(
    process.env.NEXT_PUBLIC_SUPPORT_CC_EMAIL_ID,
  );
  const sessionId = getSessionId();

  let utm = {};
  try {
    const raw = getCookie("gh_utm");
    if (raw) utm = JSON.parse(raw);
  } catch { }
  const toCCs = [
    ...supportCCs,
    ...(email ? [email.trim()] : []), // add user email to CC
  ];

  const toEmails = parseEmailList(process.env.NEXT_PUBLIC_SUPPORT_EMAIL_ID);
  const payload = {
    toEmails,
    toCCs,
    subject,
    htmlContent,
  };
  try {
    const leadRes = await fetch(LEAD_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        formType: "support",
        sessionId,
        formData: {
          name,
          subject,
          message,
        },
        utm,
      }),
    });
  } catch (e) {
    console.warn("Lead tracking failed", e);
  }
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

// New function for Contact form submissions
export async function sendContactEmail({ name, email, subject, message }) {
  const API_URL = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Email/withcc`;
  const htmlContent = supportConfirmationTemplate({
    name: escapeHtml(name),
    message: escapeHtml(message),
  });

  const supportCCs = parseEmailList(
    process.env.NEXT_PUBLIC_CONTACT_CC_EMAIL_ID,
  );
  const sessionId = getSessionId();

  let utm = {};
  try {
    const raw = getCookie("gh_utm");
    if (raw) utm = JSON.parse(raw);
  } catch { }
  const toCCs = [
    ...supportCCs,
    ...(email ? [email.trim()] : []), // add user email to CC
  ];

  const toEmails = parseEmailList(process.env.NEXT_PUBLIC_CONTACT_EMAIL_ID);
  const payload = {
    toEmails,
    toCCs,
    subject,
    htmlContent,
  };
  try {
    const leadRes = await fetch(LEAD_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        formType: "contact",
        sessionId,
        formData: {
          name,
          subject,
          message,
        },
        utm,
      }),
    });
  } catch (e) {
    console.warn("Lead tracking failed", e);
  }
  try {
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

    if (res.status === 401) {
      return { success: false, message: "Unauthorized" };
    }
    const text = await res.text();
    if (!text) return { success: false };
    const data = JSON.parse(text);
    if (!res.ok) {
      return { success: false, message: data.message || "Failed to send email" };
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
}) {
  try {
    const API_URL = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Email`;

    const safeName = escapeHtml(name);
    const normalizedPhone = normalizePhone(phone);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeTeamSize = escapeHtml(teamSize);
    const sessionId = getSessionId();
    const toEmails = parseEmailList(process.env.NEXT_PUBLIC_SALES_EMAIL_ID);

    const toCCs = parseEmailList(process.env.NEXT_PUBLIC_SUPPORT_CC_EMAIL_ID);

    let utm = {};
    try {
      const raw = getCookie("gh_utm");
      if (raw) utm = JSON.parse(raw);
    } catch { }
    const safeUtmSource = escapeHtml(utm.source || "unknown");
    const safeUtmMedium = escapeHtml(utm.medium || "unknown");
    const safeUtmCampaign = escapeHtml(utm.campaign || "unknown");
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

    const payload = {
      toEmails,
      toCCs,
      subject: `New Lead: ${safeName} (${safeCompany})`,
      htmlContent,
    };

    try {
      const leadRes = await fetch(LEAD_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          formType: "landing",
          sessionId,
          formData: {
            name,
            phone: normalizedPhone,
            company,
            teamSize: normalizeTeamSize(teamSize),
          },
          utm
        }),
      })
    } catch (e) {
      console.warn("Lead tracking failed", e);
    }
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

export async function sendPartnershipEmail({
  name,
  email,
  phone,
  partnershipType,
}) {
  try {
    const sessionId = getSessionId();

    let utm = {};
    try {
      const raw = getCookie("gh_utm");
      if (raw) utm = JSON.parse(raw);
    } catch { }
    const API_URL = `${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Email`;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const normalizedPhone = normalizePhone(phone);

    const safePhone = escapeHtml(phone);
    const safePartnershipType = escapeHtml(partnershipType);
    const safeUtmSource = escapeHtml(utm.source || "unknown");
    const safeUtmMedium = escapeHtml(utm.medium || "unknown");
    const safeUtmCampaign = escapeHtml(utm.campaign || "unknown");
    const safeUtmContent = escapeHtml(utm.content || "unknown");
    const htmlContent = partnershipTemplate({
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      partnershipType: safePartnershipType,
      utmSource: safeUtmSource,
      utmMedium: safeUtmMedium,
      utmCampaign: safeUtmCampaign,
      utmContent: safeUtmContent,
    });

    const toEmails = parseEmailList(
      process.env.NEXT_PUBLIC_PARTNERSHIP_EMAIL_ID,
    );

    const payload = {
      toEmails,
      subject: `New Partnership Inquiry – ${safePartnershipType}`,
      htmlContent,
    };
    try {
      const leadRes = await fetch(LEAD_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          formType: "partners",
          sessionId,
          formData: {
            name,
            phone: normalizedPhone,
            partnershipType,
          },
          utm,
        }),
      });
    } catch (e) {
      console.warn("Lead tracking failed", e);
    }
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_EMAIL_API_ACCESS_TOKEN}`,
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok) {
      return {
        success: false,
        message: data?.message || "Failed to send partnership email",
      };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, message: err.message };
  }
}
