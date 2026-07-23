import PartnerPage from "./PartnerPage";

export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: { absolute: "CI/CD Partner Program | BuildNinja DevOps Network" },
  description: "Join the BuildNinja Partner Program. Collaborate with an industry-leading CI/CD and DevOps automation platform to deliver high-performance tools to developers worldwide.",
  keywords: ["CI/CD partner program", "DevOps reseller", "technology partnerships", "BuildNinja partners", "DevOps workflow integration", "enterprise CI/CD partnership"],
=======
  title: "BuildNinja Partner Program | Partners",
  description: "Join the BuildNinja ecosystem. Collaborate with us to build better CI/CD experiences and empower engineering teams worldwide.",
  keywords: ["DevOps partner program", "CI/CD partnership", "BuildNinja affiliates", "technology partners", "GrapeHub partnerships"],
>>>>>>> dojo-banner
=======
  title: { absolute: "CI/CD Partner Program | BuildNinja DevOps Network" },
  description: "Join the BuildNinja Partner Program. Collaborate with an industry-leading CI/CD and DevOps automation platform to deliver high-performance tools to developers worldwide.",
  keywords: ["CI/CD partner program", "DevOps reseller", "technology partnerships", "BuildNinja partners", "DevOps workflow integration", "enterprise CI/CD partnership"],
>>>>>>> 626eba93133d1b9c50d7dc0c5356d0da54429c82
  alternates: {
    canonical: "https://buildninja.grapehub.io/partners",
  },
  openGraph: {
    title: "BuildNinja Partner Program | Partners",
    description: "Join the BuildNinja ecosystem. Collaborate with us to build better CI/CD experiences and empower engineering teams worldwide.",
    url: "https://buildninja.grapehub.io/partners",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Partners",
      },
    ],
    type: "website",
  },
};

export default function Partners() {
  return <PartnerPage />;
}
