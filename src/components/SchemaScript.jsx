"use client";

import { usePathname } from "next/navigation";
import { pageDataMap, resolveBreadcrumb } from "@/lib/pageData";
import { siteUrl } from "@/lib/site-url";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";

export default function SchemaScript() {
  const pathname = usePathname();
  const data = pageDataMap[pathname];
  if (!data) return null;

  const graph = [generateBreadcrumbSchema(resolveBreadcrumb(pathname))];

  if (data.name) {
    graph.push({
      "@type": data.schemaType || "WebPage",
      "@id": siteUrl(pathname),
      name: data.name,
      description: data.description,
      publisher: { "@id": siteUrl("/#organization") },
      ...(data.extra || {}),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
