export function baseEmailTemplate({ title, content }) {
  const year = new Date().getFullYear();

  const LOGO_URL =
    "https://buildninja.grapehub.io/resources/BuildNinjaDark.png";

  return `
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    <table width="100%" cellpadding="0" cellspacing="0"
      style="max-width:600px; margin:auto; background:#ffffff;
      border-radius:10px; border:1px solid #e5e7eb; overflow:hidden;">

      <!-- HEADER -->
      <tr>
        <td style="background:#111827; padding:24px; text-align:center;">
          
          <!-- LOGO -->
          <a href="https://buildninja.grapehub.io/" target="_blank">
            <img 
              src="${LOGO_URL}" 
              alt="BuildNinja Logo"
              width="160"
              style="display:block; margin:0 auto; border:0;"
            />
          </a>

        </td>
      </tr>

      ${
        title
          ? `
        <tr>
          <td style="padding:20px 24px 0;">
            <h2 style="margin:0; font-size:18px; color:#111827;">
              ${title}
            </h2>
          </td>
        </tr>
      `
          : ""
      }

      <!-- BODY -->
      <tr>
        <td style="padding:20px 24px;">
          ${content}
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="
          background:#f9fafb;
          padding:16px 24px;
          font-size:12px;
          color:#6b7280;
          text-align:center;
        ">
          © ${year} BuildNinja. All rights reserved.<br/>
          <a href="https://buildninja.grapehub.io/"
            style="color:#2563eb; text-decoration:none;">
            Visit Website
          </a>
        </td>
      </tr>

    </table>
  </div>
  `;
}
