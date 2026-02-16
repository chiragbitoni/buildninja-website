import { baseEmailTemplate } from "./baseTemplate";

export function supportConfirmationTemplate({ name, message }) {
  const content = `
    <p style="font-size:14px; color:#374151;">
      Hello ${name},
    </p>

    <p style="font-size:14px; color:#4b5563;">
      We have received your support request. Our team will review it and get back to you shortly.
    </p>

    <div style="margin:20px 0; padding:15px; background:#f3f4f6; border-radius:6px;">
      ${message.replace(/\n/g, "<br>")}
    </div>

    <p style="font-size:13px; color:#6b7280;">
      Our support team will contact you soon.
    </p>
  `;

  return baseEmailTemplate({
    title: "Support Request Confirmation",
    content,
  });
}
