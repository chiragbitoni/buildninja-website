import SupportPage from "./Supportpage";

export const metadata = {
  title: "BuildNinja Support & Technical Assistance | Support",
  description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
  keywords: ["BuildNinja support", "CI/CD technical assistance", "DevOps help", "build automation documentation", "continuous integration support"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/support",
  },
  openGraph: {
    title: "BuildNinja Support & Technical Assistance | Support",
    description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
    url: "https://buildninja.grapehub.io/support",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Support",
      },
    ],
    type: "website",
  },
};

export default function Support() {
  const supportSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://buildninja.grapehub.io" },
          { "@type": "ListItem", position: 2, name: "Support", item: "https://buildninja.grapehub.io/support" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://buildninja.grapehub.io/support",
        name: "BuildNinja Support & Technical Assistance",
        description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
        publisher: { "@id": "https://buildninja.grapehub.io/#organization" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(supportSchema) }} />
      <SupportPage />
    </>
  );
}
