import LegalContent from "@/components/Legal/LegalContent";
import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: "About Us | BuildNinja",
  description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
  alternates: {
    canonical: "https://www.buildninja.io/about",
  },
  openGraph: {
    title: "About Us | BuildNinja",
    description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
    url: "https://www.buildninja.io/about",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function AboutPage() {
  const content = await fetchGrapeHubPage("about", { stripHeading: "About Us" });
  const buildNinjaHistory = `
    <p class="wixui-rich-text__text"><strong>2025</strong></p>
    <p class="wixui-rich-text__text">Channeled two decades of engineering services experience into building BuildNinja — a self-hosted CI/CD platform offering developers an alternative to per-seat and per-build-minute pricing, with unlimited pipelines and single-command Docker deployment.</p>
  `;
  return (
    <LegalContent 
      title="About Us"
      description="Learn about our mission, our history of software excellence, and our dedication to developer empowerment."
      badge="Company Information"
      htmlContent={content + buildNinjaHistory}
    />
  );
}
