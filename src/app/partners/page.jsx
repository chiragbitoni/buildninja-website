import PartnerPage from "./PartnerPage";

export const metadata = {
  title: "BuildNinja Partner Program | Partners",
  description: "Join the BuildNinja ecosystem. Collaborate with us to build better CI/CD experiences and empower engineering teams worldwide.",
  keywords: ["DevOps partner program", "CI/CD partnership", "BuildNinja affiliates", "technology partners", "GrapeHub partnerships"],
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
