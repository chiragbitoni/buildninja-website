import React from 'react';
import Hero from '@/components/compare-teamcity/Hero';
import VerdictCards from '@/components/compare-teamcity/VerdictCards';
import ComparisonTable from '@/components/compare-teamcity/ComparisonTable';
import ChoiceCards from '@/components/compare-teamcity/ChoiceCards';
import PainPoints from '@/components/compare-teamcity/PainPoints';
import MigrationGuide from '@/components/compare-teamcity/MigrationGuide';
import FAQ from '@/components/compare-teamcity/FAQ';
import CTABanner from '@/components/compare-teamcity/CTABanner';

export const metadata = {
  title: 'BuildNinja vs TeamCity: Self-Hosted CI/CD Comparison',
  description: 'Honest comparison of BuildNinja vs TeamCity. Side-by-side pricing, features, Windows/.NET support, and real user pain points. See why growing teams are switching to BuildNinja.',
  alternates: {
    canonical: 'https://buildninja.grapehub.io/compare/buildninja-vs-teamcity',
  },
  openGraph: {
    title: 'BuildNinja vs TeamCity: Self-Hosted CI/CD Comparison',
    description: 'Honest comparison of BuildNinja vs TeamCity. Side-by-side pricing, features, Windows/.NET support, and real user pain points. See why growing teams are switching to BuildNinja.',
    url: 'https://buildninja.grapehub.io/compare/buildninja-vs-teamcity',
    images: ['https://buildninja.grapehub.io/resources/BuildNinja.png'],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can BuildNinja replace TeamCity for .NET and Windows builds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BuildNinja has native MSBuild compilation and VSTest execution built in with no plugin installation required. Windows agents run on any modern Windows Server or desktop machine."
      }
    },
    {
      "@type": "Question",
      "name": "TeamCity Professional is also free - why choose BuildNinja?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TeamCity Professional caps you at 3 agents and 100 configurations. BuildNinja Growth Edition has no caps - unlimited agents, configurations, and users - Free."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to set up BuildNinja vs TeamCity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNinja deploys in under 5 minutes via one Docker command. TeamCity full enterprise setup typically takes several hours to a full day."
      }
    },
    {
      "@type": "Question",
      "name": "How does BuildNinja compare to TeamCity on pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNinja Growth Edition is free. TeamCity Enterprise starts at $2,399/year and includes 3 build agents. Additional build agents cost $359/year each. A 25-developer team spends approximately $469–529/month depending on infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "Does BuildNinja support build chains like TeamCity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Full build chain support with DAG-based pipeline dependencies is on the BuildNinja roadmap for v1.2.0. Currently, multi-stage pipelines with sequential and parallel steps are fully supported."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a migration guide from TeamCity to BuildNinja?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most TeamCity-to-BuildNinja migrations complete in a few hours to a couple of days. The process includes deploying BuildNinja alongside TeamCity, migrating low-risk projects first, then decommissioning TeamCity once validated."
      }
    }
  ]
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

export default function CompareTeamCityPage() {
  return (
    <div className="compare-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Hero />
      <VerdictCards />
      <ComparisonTable />
      <PainPoints />
      <ChoiceCards />
      <MigrationGuide />
      <FAQ />
      <CTABanner />
    </div>
  );
}
