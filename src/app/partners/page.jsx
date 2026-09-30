import { siteUrl } from "@/lib/site-url";
import { pages } from "../../components/MarketingSite/app/content";
import { ContentPage } from "../../components/MarketingSite/app/markdown";

export const metadata = {
  title: { absolute: "BuildNinja Partner Program | Partners" },
  description: "Join the BuildNinja ecosystem. Collaborate with us to build better CI/CD experiences and empower engineering teams worldwide.",
  keywords: ["DevOps partner program", "CI/CD partnership", "BuildNinja affiliates", "technology partners", "GrapeHub partnerships"],
  alternates: {
    canonical: siteUrl("/partners"),
  },
  openGraph: {
    title: "BuildNinja Partner Program | Partners",
    description: "Join the BuildNinja ecosystem. Collaborate with us to build better CI/CD experiences and empower engineering teams worldwide.",
    url: siteUrl("/partners"),
    siteName: "BuildNinja",
    images: [
      {
        url: siteUrl("/resources/BuildNinja.png"),
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Partners",
      },
    ],
    type: "website",
  },
};

export default function Partners() {
  return <ContentPage page={pages.partners} route="partners" />;
}
