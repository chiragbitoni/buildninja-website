import FeaturesPage from "./FeaturePage";

export const metadata = {
  title: "Powerful CI/CD Features for Modern Engineering | Features",
  description: "Explore BuildNinja's features: self-hosted agents, real-time logs, multi-cloud deployments, and seamless integration with GitHub, GitLab, and Bitbucket.",
  keywords: ["CI/CD features", "build automation capabilities", "self-hosted agents", "DevOps integrations", "multi-cloud deployment", "GitHub integration", "GitLab integration", "Bitbucket integration", "real-time build logs"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/features",
  },
  openGraph: {
    title: "Powerful CI/CD Features for Modern Engineering | Features",
    description: "Explore BuildNinja's features: self-hosted agents, real-time logs, multi-cloud deployments, and seamless integration with GitHub, GitLab, and Bitbucket.",
    url: "https://buildninja.grapehub.io/features",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
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
    "@id": "https://buildninja.grapehub.io/features#softwareapplication",
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
      <div>
        <FeaturesPage />
      </div>
    </>
  );
}
