import { baseEmailTemplate } from "./baseTemplate";

export function contactConfirmationTemplate({ name, email, subject, message }) {
  const content = `
    <p style="font-size:14px; color:#374151;">
      Hello ${name},
    </p>
    <p style="font-size:14px; color:#4b5563;">
      Thank you for reaching out to us regarding "${subject}". We have received your message and will get back to you soon.
    </p>
    <div style="margin:20px 0; padding:15px; background:#f3f4f6; border-radius:6px;">
      ${message.replace(/\n/g, "<br>")}
    </div>
    <p style="font-size:13px; color:#6b7280;">
      Your email: ${email}
    </p>
  `;

  return baseEmailTemplate({
    title: "Contact Request Confirmation",
    content,
  });
}
