import PricingPage from "./PricingPage";
import { pricingSeventhText } from "../../../public/static/pricingPageText";

export const metadata = {
  title: "Simple & Transparent Pricing for Teams | Pricing",
  description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
  keywords: ["CI/CD pricing", "DevOps tools cost", "BuildNinja pricing", "self-hosted CI/CD free", "enterprise CI/CD plans", "DevOps budget"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/pricing",
  },
};

export default function Pricing() {
  // Generate Pricing Page FAQ Schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pricingSeventhText.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, "") // strip HTML tags
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PricingPage />
    </>
  );
}
