import HomePage from "./HomePage";
import { homeFaqs } from "../../public/static/homePageText";

export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: { absolute: "Self-Hosted CI/CD & DevOps Automation Tool | BuildNinja" },
  description: "BuildNinja is a powerful, self-hosted CI/CD DevOps platform. Automate your CI/CD pipelines, integrate with GitHub, GitLab, and Bitbucket. The best Jenkins alternative for seamless deployments.",
  keywords: ["self-hosted CI/CD", "DevOps platform", "CI/CD tool", "Jenkins alternative", "pipeline automation", "continuous integration", "continuous deployment", "GitHub integration", "GitLab integration"],
=======
  title: "Build Ninja | Self-Hosted CI/CD Platform for Seamless DevOps",
  description: "Experience lightning-fast, secure, and fully automated CI/CD with BuildNinja. The ultimate self-hosted alternative to Jenkins, GitLab CI, and GitHub Actions.",
  keywords: ["CI/CD platform", "self-hosted CI/CD", "DevOps tools", "continuous integration", "continuous deployment", "Jenkins alternative", "GitLab CI alternative", "GitHub Actions alternative", "build automation", "GrapeHub"],
>>>>>>> dojo-banner
=======
  title: { absolute: "Self-Hosted CI/CD & DevOps Automation Tool | BuildNinja" },
  description: "BuildNinja is a powerful, self-hosted CI/CD DevOps platform. Automate your CI/CD pipelines, integrate with GitHub, GitLab, and Bitbucket. The best Jenkins alternative for seamless deployments.",
  keywords: ["self-hosted CI/CD", "DevOps platform", "CI/CD tool", "Jenkins alternative", "pipeline automation", "continuous integration", "continuous deployment", "GitHub integration", "GitLab integration"],
>>>>>>> 626eba93133d1b9c50d7dc0c5356d0da54429c82
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
  // Generate Home Page FAQ Schema dynamically
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

  // Generate SoftwareApplication Schema
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

