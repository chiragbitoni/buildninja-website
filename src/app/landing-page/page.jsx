import LandingPage from "./LandingPage";

export const metadata = {
  title: "DevOps Made Simple - BuildNinja | Landing Page",
  description: "Experience the speed and security of BuildNinja self-hosted CI/CD platform. Standardize your build pipelines and optimize your release cycles today.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/landing-page",
  },
  openGraph: {
    title: "DevOps Made Simple - BuildNinja | Landing Page",
    description: "Experience the speed and security of BuildNinja self-hosted CI/CD platform. Standardize your build pipelines and optimize your release cycles today.",
    url: "https://buildninja.grapehub.io/landing-page",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Landing Page",
      },
    ],
    type: "website",
  },
};

export default function Landing() {
  const landingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://buildninja.grapehub.io" },
          { "@type": "ListItem", position: 2, name: "Landing Page", item: "https://buildninja.grapehub.io/landing-page" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://buildninja.grapehub.io/landing-page",
        name: "DevOps Made Simple - BuildNinja",
        description: "Experience the speed and security of BuildNinja self-hosted CI/CD platform. Standardize your build pipelines and optimize your release cycles today.",
        publisher: { "@id": "https://buildninja.grapehub.io/#organization" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingSchema) }} />
      <LandingPage />
    </>
  );
}
