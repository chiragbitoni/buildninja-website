import { pages } from "../../components/MarketingSite/app/content";
import { ContentPage } from "../../components/MarketingSite/app/markdown";

export const metadata = {
  title: { absolute: "BuildNinja Support & Technical Assistance | Support" },
  description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
  keywords: ["BuildNinja support", "CI/CD technical assistance", "DevOps help", "build automation documentation", "continuous integration support"],
  alternates: {
    canonical: "https://www.buildninja.io/support",
  },
  openGraph: {
    title: "BuildNinja Support & Technical Assistance | Support",
    description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
    url: "https://www.buildninja.io/support",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://www.buildninja.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Support",
      },
    ],
    type: "website",
  },
};

export default function Support() {
  return <ContentPage page={pages.support} route="support" />;
}
