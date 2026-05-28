import PricingPage from "./PricingPage";
import { pricingSeventhText } from "../../../public/static/pricingPageText";

export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: { absolute: "CI/CD Software Pricing | Scalable DevOps Plans" },
  description: "View transparent pricing for BuildNinja's self-hosted CI/CD platform. Choose from Solo, Shogun, and Enterprise plans tailored to supercharge your DevOps pipelines.",
  keywords: ["CI/CD pricing", "DevOps software cost", "BuildNinja pricing", "enterprise CI/CD plans", "self-hosted DevOps pricing", "continuous integration cost"],
=======
  title: "Simple & Transparent Pricing for Teams | Pricing",
  description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
  keywords: ["CI/CD pricing", "DevOps tools cost", "BuildNinja pricing", "self-hosted CI/CD free", "enterprise CI/CD plans", "DevOps budget"],
>>>>>>> dojo-banner
=======
  title: { absolute: "CI/CD Software Pricing | Scalable DevOps Plans" },
  description: "View transparent pricing for BuildNinja's self-hosted CI/CD platform. Choose from Solo, Shogun, and Enterprise plans tailored to supercharge your DevOps pipelines.",
  keywords: ["CI/CD pricing", "DevOps software cost", "BuildNinja pricing", "enterprise CI/CD plans", "self-hosted DevOps pricing", "continuous integration cost"],
>>>>>>> 626eba93133d1b9c50d7dc0c5356d0da54429c82
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
