import PartnerPage from "./PartnerPage";


export const metadata = {
  title: { absolute: "CI/CD Partner Program | BuildNinja DevOps Network" },
  description: "Join the BuildNinja Partner Program. Collaborate with an industry-leading CI/CD and DevOps automation platform to deliver high-performance tools to developers worldwide.",
  keywords: ["CI/CD partner program", "DevOps reseller", "technology partnerships", "BuildNinja partners", "DevOps workflow integration", "enterprise CI/CD partnership"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/partner-page",
  },
};

export default function Partners() {
  return <PartnerPage />;
}
