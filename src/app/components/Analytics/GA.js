'use client';
import Script from "next/script";

export default function GA() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-9X1F3VV7QE`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9X1F3VV7QE');
        `}
      </Script>
    </>
  );
}
