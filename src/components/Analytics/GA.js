"use client";

import Script from "next/script";

function parseIds(value) {
  return (value || "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

export default function GoogleAnalytics({ GA_ID }) {
  const ids = parseIds(GA_ID);
  if (ids.length === 0) return null;

  const configCalls = ids
    .map(
      (id) =>
        `gtag('config', '${id}', { page_path: window.location.pathname });`
    )
    .join("\n");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`}
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configCalls}
        `}
      </Script>
    </>
  );
}
