import HomePage from "./HomePage";
import { homeFaqs } from "../../public/static/homePageText";

export const metadata = {
  title: "Build Ninja | Self-Hosted CI/CD Platform for Seamless DevOps",
  description: "Experience lightning-fast, secure, and fully automated CI/CD with BuildNinja. The ultimate self-hosted alternative to Jenkins, GitLab CI, and GitHub Actions.",
  keywords: ["CI/CD platform", "self-hosted CI/CD", "DevOps tools", "continuous integration", "continuous deployment", "Jenkins alternative", "GitLab CI alternative", "GitHub Actions alternative", "build automation", "GrapeHub"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/",
  },
  openGraph: {
    title: "Build Ninja | Self-Hosted CI/CD Platform for Seamless DevOps",
    description: "Experience lightning-fast, secure, and fully automated CI/CD with BuildNinja. The ultimate self-hosted alternative to Jenkins, GitLab CI, and GitHub Actions.",
    url: "https://buildninja.grapehub.io/",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Platform",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <HomePage />
    </>
  );
}

