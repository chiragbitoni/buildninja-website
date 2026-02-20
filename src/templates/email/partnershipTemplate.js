import { baseEmailTemplate } from "./baseTemplate";

function row(label, value) {
  return `
    <tr>
      <td style="background:#f9fafb; font-weight:bold; width:40%; border:1px solid #e5e7eb;">
        ${label}
      </td>
      <td style="border:1px solid #e5e7eb;">
        ${value || "—"}
      </td>
    </tr>
  `;
}

export function partnershipTemplate({
  name,
  email,
  phone,
  partnershipType,
  utmSource,
  utmMedium,
  utmCampaign,
  utmContent,
}) {
  const content = `
    <table width="100%" cellpadding="8" cellspacing="0"
      style="border-collapse:collapse; font-size:14px;">

      ${row("Name", name)}
      ${row("Email", `<a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">${email}</a>`)}
      ${phone ? row("Phone", phone) : ""}
      ${row("Partnership Type", partnershipType)}

    </table>

    <div style="margin:24px 0; border-top:1px solid #e5e7eb;"></div>

    <table width="100%" cellpadding="8" cellspacing="0"
      style="border-collapse:collapse; font-size:14px;">

      <tr>
        <td colspan="2" style="font-weight:bold; padding-bottom:8px;">
          Lead Source
        </td>
      </tr>

      ${row("Source", utmSource)}
      ${row("Medium", utmMedium)}
      ${row("Campaign", utmCampaign)}
      ${row("Content", utmContent)}

    </table>
  `;

  return baseEmailTemplate({
    title: "New Partnership Inquiry",
    content,
  });
}