import { siteUrl } from "@/lib/site-url";

export function generateBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : siteUrl(item.url),
    })),
  };
}
