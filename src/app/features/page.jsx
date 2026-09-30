import { siteUrl } from "@/lib/site-url";
import { pages } from "../../components/MarketingSite/app/content";
import { ContentPage } from "../../components/MarketingSite/app/markdown";

export const metadata = {
  title: "Powerful CI/CD Features for Modern Engineering | Features",
  description: "Explore BuildNinja's features: Git triggers and Git changes visualization with commit graphs, self-hosted agents, real-time logs, and seamless integration with GitHub, GitLab, and Bitbucket.",
  keywords: ["CI/CD features", "build automation capabilities", "Git trigger", "Git changes", "commit graphs", "self-hosted agents", "DevOps integrations", "multi-cloud deployment", "GitHub integration", "GitLab integration", "Bitbucket integration", "real-time build logs"],
  alternates: {
    canonical: siteUrl("/features"),
  },
  openGraph: {
    title: "Powerful CI/CD Features for Modern Engineering | Features",
    description: "Explore BuildNinja's features: Git triggers and Git changes visualization with commit graphs, self-hosted agents, real-time logs, and seamless integration with GitHub, GitLab, and Bitbucket.",
    url: siteUrl("/features"),
    siteName: "BuildNinja",
    images: [
      {
        url: siteUrl("/resources/BuildNinja.png"),
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Platform Features",
      },
    ],
    type: "website",
  },
};

export default function Features() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": siteUrl("/features#softwareapplication"),
    "name": "BuildNinja",
    "operatingSystem": "Windows, Linux, macOS, Docker, Kubernetes",
    "applicationCategory": "DeveloperApplication",
    "description": "Experience lightning-fast, secure, and fully automated self-hosted CI/CD platform. The ultimate self-hosted alternative to Jenkins, GitLab CI, and GitHub Actions.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContentPage page={pages.features} route="features" />
    </>
  );
}
