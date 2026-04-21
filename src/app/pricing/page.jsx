import PricingPage from "./PricingPage";

export const metadata = {
  title: "Simple & Transparent Pricing for Teams | Pricing",
  description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
  keywords: ["CI/CD pricing", "DevOps tools cost", "BuildNinja pricing", "self-hosted CI/CD free", "enterprise CI/CD plans", "DevOps budget"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/pricing",
  },
};

export default function Pricing() {
  return ( <PricingPage />
  );
}
