import React from 'react';

// Page components
import Hero from '@/components/compare-github-actions/Hero';
import PricingReality from '@/components/compare-github-actions/PricingReality';
import StructuralWins from '@/components/compare-github-actions/StructuralWins';
import ComparisonTable from '@/components/compare-github-actions/ComparisonTable';
import MidCTA from '@/components/compare-github-actions/MidCTA';
import CostCalculator from '@/components/compare-github-actions/CostCalculator';
import CodeComparison from '@/components/compare-github-actions/CodeComparison';
import MigrationGuide from '@/components/compare-github-actions/MigrationGuide';
import Recommendation from '@/components/compare-github-actions/Recommendation';
import FAQ from '@/components/compare-github-actions/FAQ';
import RelatedPages from '@/components/compare-github-actions/RelatedPages';
import CTABanner from '@/components/compare-github-actions/CTABanner';

export const metadata = {
  title: 'BuildNinja vs GitHub Actions | Comparison',
  description: 'An honest, detailed comparison between BuildNinja and GitHub Actions. See how unlimited self-hosted builds compare against GitHub per-minute pricing.',
  alternates: {
    canonical: 'https://buildninja.grapehub.io/compare/buildninja-vs-github-actions',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is BuildNinja a free GitHub Actions alternative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BuildNinja is self-hosted and free with unlimited builds. GitHub Actions gives 2,000 free minutes/month for private repos, then charges $0.006-$0.048/min depending on runner type. For active teams exceeding that threshold, BuildNinja eliminates per-minute billing entirely - you pay only for your server infrastructure (typically $6-50/month depending on team size)."
      }
    },
    {
      "@type": "Question",
      "name": "Is GitHub Actions free for self-hosted runners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. GitHub Actions self-hosted runner usage is free for both public and private repositories. However, you still need a paid GitHub plan for private repos (Team at $4/user/mo or Enterprise at $21/user/mo) and workflows are tied to GitHub repositories only. BuildNinja has no per-seat fees, works with any Git provider, and is free to self-host with unlimited builds."
      }
    },
    {
      "@type": "Question",
      "name": "Can I still use GitHub as my repository with BuildNinja?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes - and this is a key point. BuildNinja only replaces the CI/CD execution layer. Your code stays on GitHub. Pull requests, Issues, code review, GitHub Pages, and everything else remain unchanged. BuildNinja connects via OAuth and posts build status checks back to GitHub PRs, so the developer experience looks the same - builds just run faster, cheaper, and on your own infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "How long does migrating from GitHub Actions to BuildNinja take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most teams complete migration in 1-2 hours. The conceptual model is similar: both use YAML pipeline definitions with stages/jobs, environment variables, caching, and artifacts. The main difference is BuildNinja uses standard Docker images instead of marketplace actions, so steps like actions/checkout and actions/setup-node are replaced with native Docker image + run commands."
      }
    },
    {
      "@type": "Question",
      "name": "Does BuildNinja support macOS builds like GitHub Actions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNinja currently runs on Linux via Docker containers. macOS builds - which GitHub Actions supports via its macOS runner fleet - are not currently supported in BuildNinja's self-hosted model, as macOS virtualisation requires Apple hardware. If macOS builds are critical to your pipeline (iOS apps, for example), GitHub Actions remains the simpler path for that specific workflow."
      }
    },
    {
      "@type": "Question",
      "name": "Is BuildNinja open source?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNinja uses an open-core model. The core CI/CD engine is free to self-host with no license fees. Advanced features - SSO, multi-tenant management, enterprise audit logs, and the upcoming AI Intelligence module - are part of the commercial Growth Edition. GitHub Actions is proprietary, closed-source, and exclusively available as part of GitHub's platform."
      }
    },
    {
      "@type": "Question",
      "name": "How does BuildNinja handle GitHub pull request status checks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuildNinja posts build status back to GitHub pull requests automatically when connected via OAuth. Each pipeline run posts a 'BuildNinja CI' check status to the PR - passing or failing - which can be configured as a required check in your branch protection rules. Developers see build results directly in the GitHub PR interface, as they would with GitHub Actions."
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

export default function BuildNinjaVsGitHubActions() {
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
      <PricingReality />
      <StructuralWins />
      <ComparisonTable />
      <MidCTA />
      <CostCalculator />
      {/* <CodeComparison /> */}
      <MigrationGuide />
      <Recommendation />
      <FAQ />
      {/* <RelatedPages /> */}
      <CTABanner />
    </div>
  );
}
