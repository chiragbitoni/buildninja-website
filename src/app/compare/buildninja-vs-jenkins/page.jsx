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

export default function CompareJenkinsPage() {
  return (
    <>
        <Hero />
        <VerdictBanner />
        <MetricsBars />
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0' }} />
        <ComparisonTable />
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0' }} />
        <DeepDiveCards />
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0' }} />
        <DecisionGuide />
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0' }} />
        <MigrationGuide />
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0' }} />
        <FAQ />
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0' }} />
        <ExploreLinks />
        <CTABanner />
    </>
  );
}
