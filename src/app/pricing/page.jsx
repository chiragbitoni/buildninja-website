import PricingPage from "./PricingPage";
import { pricingSeventhText } from "../../../public/static/pricingPageText";
import {
  fetchActivePlansForBuild,
  findPaidMonthlyPlan,
  findFreePlan,
  describeFreePlanFeatures,
} from "@/services/plans/plans";
import { env } from "@/lib/config/env";
import { formatUsd } from "@/lib/utils";

const PAID_PRICE_TOKEN = "{{paidPlanMonthlyPrice}}";
const FREE_FEATURES_TOKEN = "{{freePlanFeatures}}";

export const metadata = {
  title: "BuildNinja - Self-Hosted CI/CD, Free to Start",
  description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
  keywords: ["CI/CD pricing", "DevOps tools cost", "BuildNinja pricing", "self-hosted CI/CD free", "enterprise CI/CD plans", "DevOps budget"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/pricing",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "BuildNinja - Self-Hosted CI/CD, Free to Start",
    description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
    url: "https://buildninja.grapehub.io/pricing",
    siteName: "BuildNinja",
    locale: "en_US",
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
  twitter: {
    card: "summary_large_image",
    title: "BuildNinja - Self-Hosted CI/CD, Free to Start",
    description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
    images: ["https://buildninja.grapehub.io/resources/BuildNinja.png"],
  },
};

export default async function Pricing() {
  // Fetched at build time (server-side). Throws on failure so the build
  // fails at the pipeline instead of shipping a pricing page without plans.
  const plansData = await fetchActivePlansForBuild();

  const bnPlans = plansData?.byProduct?.BuildNinja || [];
  const paidMonthly = findPaidMonthlyPlan(bnPlans);
  const paidPriceText = paidMonthly ? `${formatUsd(paidMonthly.price)}/month` : "no per-seat costs";
  const freePlanText = describeFreePlanFeatures(findFreePlan(bnPlans)) ?? "all the core features";

  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://buildninja.grapehub.io/pricing#faqpage",
    "mainEntity": pricingSeventhText.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
          .replace(PAID_PRICE_TOKEN, paidPriceText)
          .replace(FREE_FEATURES_TOKEN, freePlanText)
          .replace(/<[^>]*>/g, "")
      }
    }))
  };

  const byName = {};
  bnPlans.forEach((plan) => {
    const key = plan.name.trim();
    (byName[key] = byName[key] || []).push(plan);
  });

  const productSchemas = Object.entries(byName).map(([name, plans]) => ({
    "@type": "Product",
    "@id": `https://buildninja.grapehub.io/pricing#product-${name.toLowerCase().replace(/\s+/g, "-")}`,
    "name": `${name} Edition`,
    "image": "https://buildninja.grapehub.io/resources/BuildNinja.png",
    "description": `${name} Edition - self-hosted CI/CD by BuildNinja. No per-seat pricing${name === "Growth" ? " - 10 build agents" : " - unlimited build agents"} on your own infrastructure.`,
    "brand": { "@type": "Brand", "name": "BuildNinja" },
    "offers": plans.map((plan) => ({
      "@type": "Offer",
      "name": `${name} Edition (${plan.billingCycle})`,
      "price": Number(plan.price).toFixed(2),
      "priceCurrency": ["USD", "INR"].includes(plan.currency) ? plan.currency : "USD",
      "availability": "https://schema.org/InStock",
      "url": `${env.MY_ACCOUNT}/order?planId=${plan.id}`,
    })),
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [faqSchema, ...productSchemas],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricingPage plansData={plansData} />
    </>
  );
}
