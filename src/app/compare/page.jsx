import React from 'react';
import ComparePortal from '@/components/compare-portal/ComparePortal';

export const metadata = {
  title: 'CI/CD Platform Comparisons: BuildNinja vs Alternatives',
  description: 'Honest, feature-by-feature comparisons between BuildNinja and popular CI/CD tools: GitHub Actions, CircleCI, and Jenkins. See which tool wins on TCO, setup speed, and maintenance.',
  alternates: {
    canonical: 'https://buildninja.grapehub.io/compare',
  },
  openGraph: {
    title: 'CI/CD Platform Comparisons: BuildNinja vs Alternatives',
    description: 'Detailed comparisons between BuildNinja and leading CI/CD tools: GitHub Actions, CircleCI, and Jenkins. Learn how self-hosted builds stack up against SaaS pricing.',
    url: 'https://buildninja.grapehub.io/compare',
    siteName: 'BuildNinja',
    type: 'website',
  }
};

export default function ComparePage() {
  return (
    <>
      <ComparePortal />
    </>
  );
}
