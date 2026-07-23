import React from 'react';
import Hero from '@/components/compare-circleci/Hero';
import SnapshotStats from '@/components/compare-circleci/SnapshotStats';
import VerdictCards from '@/components/compare-circleci/VerdictCards';
import ComparisonTable from '@/components/compare-circleci/ComparisonTable';
import CostCalculator from '@/components/compare-circleci/CostCalculator';
import CodeComparison from '@/components/compare-circleci/CodeComparison';
import MigrationGuide from '@/components/compare-circleci/MigrationGuide';
import FAQ from '@/components/compare-circleci/FAQ';
import Recommendation from '@/components/compare-circleci/Recommendation';
import ExploreLinks from '@/components/compare-circleci/ExploreLinks';
import CTABanner from '@/components/compare-circleci/CTABanner';

export const metadata = {
  title: 'BuildNinja vs CircleCI: Full Comparison - Self-Hosted CI/CD vs SaaS',
  description: 'BuildNinja vs CircleCI - honest feature comparison. See why teams switch from CircleCI to BuildNinja: unlimited builds, no seat pricing, self-hosted CI/CD, and full data sovereignty.',
  alternates: {
    canonical: 'https://buildninja.grapehub.io/compare/buildninja-vs-circleci',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is BuildNinja a free CircleCI alternative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BuildNinja can be self-hosted without per-user limits, build-minute quotas, or credit-based billing. Unlike traditional CI/CD platforms that charge based on usage, BuildNinja gives you full control over how and where you run your CI/CD infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "Does BuildNinja support self-hosted deployment without Kubernetes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BuildNinja can be deployed with a simple Docker-based setup and does not require Kubernetes. This makes it straightforward to get started and maintain compared to solutions that depend on more complex deployment environments."
      }
    },
    {
      "@type": "Question",
      "name": "How does BuildNinja pricing compare to CircleCI for growing teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CircleCI uses a usage-based pricing model that scales with build activity and team growth. BuildNinja uses a self-hosted approach that avoids build-minute quotas and credit-based billing. As teams grow, many organizations prefer BuildNinja because costs are not directly tied to CI/CD usage."
      }
    },
    {
      "@type": "Question",
      "name": "Can I migrate from CircleCI to BuildNinja without rewriting all my pipelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most CircleCI pipelines translate to BuildNinja YAML with minimal changes - both use YAML-based pipeline definitions with similar structural concepts (jobs, steps, environments). The main difference is BuildNinja doesn't use orbs; integrations are configured directly in pipeline YAML or via webhooks. Most teams complete migration of a standard setup in 1-3 hours. Complex multi-workflow setups may take 1-2 days."
      }
    },
    {
      "@type": "Question",
      "name": "What integrations does BuildNinja support vs CircleCI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNinja supports GitHub, GitLab, Bitbucket, Docker, Kubernetes, AWS, Azure, SSH-based deployments, MSBuild, VSTest, and webhook-based notifications. CircleCI has a larger ecosystem via its orbs marketplace (1,000+ integrations). For the vast majority of teams - running Git-based workflows with standard cloud deployments - BuildNinja covers all required integrations."
      }
    },
    {
      "@type": "Question",
      "name": "Is BuildNinja open source?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNinja uses an open-core model: the core CI/CD engine is available to self-host for free with no license cost. Advanced features (SSO, multi-tenant management, enterprise audit logs, and the upcoming AI Intelligence module) are part of the commercial Growth Edition. CircleCI is a fully proprietary SaaS product with no open-source component."
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

export default function CompareCircleCIPage() {
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
      {/* <SnapshotStats /> */}
      <VerdictCards />
      <ComparisonTable />
      {/* <CostCalculator /> */}
      {/* <CodeComparison /> */}
      <MigrationGuide />
      <Recommendation />
      <FAQ />
      {/* <ExploreLinks /> */}
      <CTABanner />
    </div>
  );
}
