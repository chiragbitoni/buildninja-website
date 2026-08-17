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

    // Firefox ignores in-place href mutation of an existing link element,
    // so remove the old elements and re-append fresh ones.
    links.forEach(link => {
      link.remove();
    });

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = faviconHref;
    document.head.appendChild(link);

    const shortcut = document.createElement("link");
    shortcut.rel = "shortcut icon";
    shortcut.href = faviconHref;
    document.head.appendChild(shortcut);
  }, [resolvedTheme]);

  return null;
}
