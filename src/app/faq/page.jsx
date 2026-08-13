import FaqPage from "./FAQPage";
import { thirdSectionText } from "../../../public/static/faqPageText";
import {
  fetchActivePlansForBuild,
  findFreePlan,
  describeFreePlanFeatures,
  describeShogunBilling,
} from "@/services/plans/plans";

const FREE_FEATURES_TOKEN = "{{freePlanFeatures}}";
const ANNUAL_BILLING_TOKEN = "{{annualBilling}}";

export const metadata = {
    title: "Frequently Asked Questions | FAQ",
    description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
    keywords: ["BuildNinja FAQ", "CI/CD questions", "self-hosted DevOps FAQ", "build server security", "enterprise CI/CD answers"],
    alternates: {
        canonical: "https://buildninja.grapehub.io/faq",
    },
    openGraph: {
        title: "Frequently Asked Questions | FAQ",
        description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
        url: "https://buildninja.grapehub.io/faq",
        siteName: "BuildNinja",
        images: [
            {
                url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
                width: 1200,
                height: 630,
                alt: "BuildNinja CI/CD FAQ",
            },
        ],
        type: "website",
    },
};

export default async function Faq() {
  // Fetched at build time (server-side) so FAQ schema text is filled with
  // live plan data, not a raw token.
  const plansData = await fetchActivePlansForBuild();
  const bnPlans = plansData?.byProduct?.BuildNinja || [];
  const freePlanText =
    describeFreePlanFeatures(findFreePlan(bnPlans)) ??
    "all the core features";
  const annualBillingText =
    describeShogunBilling(bnPlans) ??
    "Annual and multi-year Shogun plans are available at a discount compared to monthly billing.";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://buildninja.grapehub.io/faq#faqpage",
    "mainEntity": thirdSectionText.faqs.flatMap(category =>
        category.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
              .replace(FREE_FEATURES_TOKEN, freePlanText)
              .replace(ANNUAL_BILLING_TOKEN, annualBillingText)
              .replace(/<[^>]*>/g, "")
          }
        }))
      )
  };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <FaqPage />
        </>
    );
}
