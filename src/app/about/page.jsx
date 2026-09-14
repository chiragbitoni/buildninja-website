import { pages } from "../../components/MarketingSite/app/content";
import { ContentPage } from "../../components/MarketingSite/app/markdown";

export const metadata = {
  title: { absolute: "About Us | BuildNinja" },
  description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
  alternates: {
    canonical: "https://www.buildninja.io/about",
  },
  openGraph: {
    title: "About Us | BuildNinja",
    description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
    url: "https://www.buildninja.io/about",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default function AboutPage() {
  return <ContentPage page={pages.about} route="about" />;
}
