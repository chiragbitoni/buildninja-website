import LegalContent from "@/components/Legal/LegalContent";
import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: "Privacy Policy | BuildNinja",
  description: "Read BuildNinja's Privacy Policy to understand how we collect, use, and protect your personal information while ensuring transparency and data security.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | BuildNinja",
    description: "Read BuildNinja's Privacy Policy to understand how we collect, use, and protect your personal information while ensuring transparency and data security.",
    url: "https://buildninja.grapehub.io/privacy-policy",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function PrivacyPolicyPage() {
  const content = await fetchGrapeHubPage("privacy-policy");

  const privacySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://buildninja.grapehub.io" },
          { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://buildninja.grapehub.io/privacy-policy" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://buildninja.grapehub.io/privacy-policy",
        name: "Privacy Policy | BuildNinja",
        description: "Read BuildNinja's Privacy Policy to understand how we collect, use, and protect your personal information while ensuring transparency and data security.",
        publisher: { "@id": "https://buildninja.grapehub.io/#organization" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }} />
      <LegalContent 
        title="Privacy Policy"
        description="Your privacy is extremely important to us. Learn how we handle, protect, and respect your personal information."
        badge="Legal Documents"
        htmlContent={content}
      />
    </>
  );
}
