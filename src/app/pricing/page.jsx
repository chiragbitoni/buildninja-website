import PricingPage from "./PricingPage";
import { pricingSeventhText } from "../../../public/static/pricingPageText";

export const metadata = {
  title: "Simple & Transparent Pricing for Teams | Pricing",
  description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
  keywords: ["CI/CD pricing", "DevOps tools cost", "BuildNinja pricing", "self-hosted CI/CD free", "enterprise CI/CD plans", "DevOps budget"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/pricing",
  },
  openGraph: {
    title: "Simple & Transparent Pricing for Teams | Pricing",
    description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
    url: "https://buildninja.grapehub.io/pricing",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Pricing Plans",
      },
    ],
    type: "website",
  },
};

export default function Pricing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://buildninja.grapehub.io/pricing#faqpage",
    "mainEntity": pricingSeventhText.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, "")
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricingPage />
    </>
  );
}
