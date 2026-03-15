"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function DynamicFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // We target both rel="icon" and rel="shortcut icon" if present
    const links = document.querySelectorAll("link[rel*='icon']");
    const faviconHref = resolvedTheme === "dark" 
      ? "/resources/Favicon/faviconWhite.png" 
      : "/resources/Favicon/favicon.png";

    links.forEach(link => {
      link.href = faviconHref;
    });

    // If no icon link exists, create one
    if (links.length === 0) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = faviconHref;
      document.head.appendChild(link);
    }
  }, [resolvedTheme]);

  return null;
}
