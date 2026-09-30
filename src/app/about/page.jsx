import { siteUrl } from "@/lib/site-url";
import { pages } from "../../components/MarketingSite/app/content";
import { ContentPage } from "../../components/MarketingSite/app/markdown";

export const metadata = {
  title: { absolute: "About Us | BuildNinja" },
  description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
  alternates: {
    canonical: siteUrl("/about"),
  },
  openGraph: {
    title: "About Us | BuildNinja",
    description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
    url: siteUrl("/about"),
    siteName: "BuildNinja",
    type: "website",
  },
};

export default function AboutPage() {
  return <ContentPage page={pages.about} route="about" />;
}
