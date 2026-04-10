import PricingPage from "./PricingPage";

export const metadata = {
  title: { absolute: "CI/CD Software Pricing | Scalable DevOps Plans" },
  description: "View transparent pricing for BuildNinja's self-hosted CI/CD platform. Choose from Solo, Shogun, and Enterprise plans tailored to supercharge your DevOps pipelines.",
  keywords: ["CI/CD pricing", "DevOps software cost", "BuildNinja pricing", "enterprise CI/CD plans", "self-hosted DevOps pricing", "continuous integration cost"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/pricing",
  },
};

export default function Pricing() {
  return ( <PricingPage />
  );
}