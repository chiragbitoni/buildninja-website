import React from 'react';
import NavBar from '../../../components/Nav/NavBar';
import Footer from '../../../components/Footer/Footer';
import Hero from '../../../components/compare-jenkins/Hero';
import VerdictBanner from '../../../components/compare-jenkins/VerdictBanner';
import MetricsBars from '../../../components/compare-jenkins/MetricsBars';
import ComparisonTable from '../../../components/compare-jenkins/ComparisonTable';
import DeepDiveCards from '../../../components/compare-jenkins/DeepDiveCards';
import DecisionGuide from '../../../components/compare-jenkins/DecisionGuide';
import MigrationGuide from '../../../components/compare-jenkins/MigrationGuide';
import FAQ from '../../../components/compare-jenkins/FAQ';
import ExploreLinks from '../../../components/compare-jenkins/ExploreLinks';
import CTABanner from '../../../components/compare-jenkins/CTABanner';

export const metadata = {
  title: 'BuildNinja vs Jenkins: Honest Comparison [2025] | Jenkins Alternative',
  description: 'BuildNinja vs Jenkins: A feature-by-feature comparison of CI/CD platforms. See how BuildNinja\'s modern self-hosted solution stacks up against Jenkins for build automation, ease of setup, and total cost.',
  keywords: 'buildninja vs jenkins, jenkins alternative, ci cd pipeline tools, best ci cd platform, self hosted ci cd, jenkins replacement, continuous integration tools, devops pipeline, build automation tools, jenkins alternative open source, tools like jenkins, similar to jenkins, jenkins competitor',
  openGraph: {
    title: 'BuildNinja vs Jenkins: Feature-by-Feature Comparison [2025]',
    description: 'Honest comparison of BuildNinja vs Jenkins. See which CI/CD tool wins on setup time, maintenance, scalability, and total cost of ownership.',
    url: 'https://buildninja.grapehub.io/compare/buildninja-vs-jenkins',
    images: ['https://buildninja.grapehub.io/resources/BuildNinja.png']
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is BuildNinja really free for unlimited users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BuildNinja's core self-hosted edition supports unlimited users, unlimited projects, and unlimited builds at no per-seat cost. A paid Growth Edition exists for teams that want additional support SLAs and enterprise features, but the free tier is genuinely full-featured for most teams."
      }
    },
    {
      "@type": "Question",
      "name": "Can BuildNinja replace Jenkins for complex enterprise pipelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most CI/CD workflows - build, test, static analysis, Docker publish, deploy - yes. If your Jenkins setup relies heavily on niche plugins (mainframe deployment, SAP integration, etc.) or extremely complex Groovy scripting, you should evaluate BuildNinja carefully in a proof-of-concept before committing to migration."
      }
    },
    {
      "@type": "Question",
      "name": "Does BuildNinja work with GitHub Actions or GitLab CI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNinja is a separate self-hosted CI/CD platform - not a wrapper around GitHub Actions or GitLab CI. It connects to your GitHub, GitLab, or Bitbucket repos but runs builds on your own infrastructure, giving you full control over compute costs and data."
      }
    },
    {
      "@type": "Question",
      "name": "How does BuildNinja handle secrets and credentials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Since BuildNinja is self-hosted, your secrets never leave your own infrastructure. Credentials are stored encrypted on your servers. There's no third-party cloud that can access your build environment or secrets."
      }
    },
    {
      "@type": "Question",
      "name": "What does the migration from Jenkins look like in practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most teams run BuildNinja in parallel with Jenkins for 1-2 weeks. You replicate your key pipelines, validate outputs match, then cut over webhooks and decommission Jenkins. For standard pipelines, the actual migration work takes 1-3 days. Complex enterprise setups with hundreds of jobs may take 1-2 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Is Jenkins being discontinued?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Jenkins is actively maintained as of 2025 and has a large, healthy open-source community. It's not going away. However, it's also not receiving significant UI/UX modernization or new architectural features - it's in maintenance mode for its core architecture. The cloud-native CI/CD world has largely moved on to newer platforms."
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

export default function CompareJenkinsPage() {
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
      <VerdictBanner />
      <MetricsBars />
      <ComparisonTable />
      <DeepDiveCards />
      <DecisionGuide />
      <MigrationGuide />
      <FAQ />
      {/* <ExploreLinks /> */}
      <CTABanner />
    </div>
  );
}
