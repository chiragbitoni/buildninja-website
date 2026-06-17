import LegalContent from "@/components/Legal/LegalContent";
import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: "Terms of Service | BuildNinja",
  description: "Read BuildNinja's Terms and Conditions outlining the rules, responsibilities, and policies governing the use of our website, products, and services.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | BuildNinja",
    description: "Read BuildNinja's Terms and Conditions outlining the rules, responsibilities, and policies governing the use of our website, products, and services.",
    url: "https://buildninja.grapehub.io/terms-of-service",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function TermsOfServicePage() {
  const content = await fetchGrapeHubPage("terms-of-service");

  const termsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://buildninja.grapehub.io" },
          { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://buildninja.grapehub.io/terms-of-service" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://buildninja.grapehub.io/terms-of-service",
        name: "Terms of Service | BuildNinja",
        description: "Read BuildNinja's Terms and Conditions outlining the rules, responsibilities, and policies governing the use of our website, products, and services.",
        publisher: { "@id": "https://buildninja.grapehub.io/#organization" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }} />
      <LegalContent 
        title="Terms of Service"
        description="The rules and guidelines for using the BuildNinja platform, products, and services. Clear, transparent, and fair."
        badge="Legal Documents"
        htmlContent={content}
      />
    </>
  );
}
