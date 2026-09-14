import { FAQPage as MarketingFAQPage } from "../../components/MarketingSite/app/faq-page";
import { fetchActivePlansForBuild } from "@/services/plans/plans";

export const metadata = {
    title: "Frequently Asked Questions | FAQ",
    description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
    keywords: ["BuildNinja FAQ", "CI/CD questions", "self-hosted DevOps FAQ", "build server security", "enterprise CI/CD answers"],
    alternates: {
        canonical: "https://www.buildninja.io/faq",
    },
    openGraph: {
        title: "Frequently Asked Questions | FAQ",
        description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
        url: "https://www.buildninja.io/faq",
        siteName: "BuildNinja",
        images: [
            {
                url: "https://www.buildninja.io/resources/BuildNinja.png",
                width: 1200,
                height: 630,
                alt: "BuildNinja CI/CD FAQ",
            },
        ],
        type: "website",
    },
};

export default async function Faq() {
  const plansData = await fetchActivePlansForBuild();
  return <MarketingFAQPage plansData={plansData} />;
}
