import { baseEmailTemplate } from "./baseTemplate";

function row(label, value) {
  return `
    <tr>
      <td style="background:#f9fafb; font-weight:bold; width:40%; border:1px solid #e5e7eb;">
        ${label}
      </td>
      <td style="border:1px solid #e5e7eb;">
        ${value}
      </td>
    </tr>
  `;
}

export function leadTemplate(data) {
  const content = `
    <table width="100%" cellpadding="8" cellspacing="0"
      style="border-collapse:collapse; font-size:14px;">

      ${row("Name", data.name)}
      ${row("Email", data.email)}
      ${row("Phone", data.phone)}
      ${row("Company", data.company)}
      ${row("Team Size", data.teamSize)}

    </table>

    <div style="margin:24px 0; border-top:1px solid #e5e7eb;"></div>

    <table width="100%" cellpadding="8" cellspacing="0"
      style="border-collapse:collapse; font-size:14px;">

      <tr>
        <td colspan="2" style="font-weight:bold; padding-bottom:8px;">
          Lead Source
        </td>
      </tr>

      ${row("Source", data.utmSource)}
      ${row("Medium", data.utmMedium)}
      ${row("Campaign", data.utmCampaign)}

    </table>
  `;

  return baseEmailTemplate({
    title: "New Demo / Lead Request",
    content,
  });
}
