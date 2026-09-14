import HomePage from "./HomePage";
import { homeFaqs } from "../../public/static/homePageText";
import { fetchActivePlansForBuild } from "@/services/plans/plans";

export const metadata = {
  title: { absolute: "Build Ninja | Self-Hosted CI/CD Platform for Seamless DevOps" },
  description: "Experience lightning-fast, secure, and fully automated CI/CD with BuildNinja. The ultimate self-hosted alternative to Jenkins, GitLab CI, and GitHub Actions.",
  keywords: ["CI/CD platform", "self-hosted CI/CD", "DevOps tools", "continuous integration", "continuous deployment", "Jenkins alternative", "GitLab CI alternative", "GitHub Actions alternative", "build automation", "Git trigger", "Git changes", "commit graph visualization", "automated build triggers", "GrapeHub"],
  alternates: {
    canonical: "https://www.buildninja.io/",
  },
  openGraph: {
    title: "Build Ninja | Self-Hosted CI/CD Platform for Seamless DevOps",
    description: "Experience lightning-fast, secure, and fully automated CI/CD with BuildNinja. The ultimate self-hosted alternative to Jenkins, GitLab CI, and GitHub Actions.",
    url: "https://www.buildninja.io/",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://www.buildninja.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Platform",
      },
    ],
    type: "website",
  },
};

export default async function Home() {
  const plansData = await fetchActivePlansForBuild();
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePage plansData={plansData} />
    </>
  );
}

