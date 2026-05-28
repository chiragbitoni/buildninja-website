import LegalContent from "@/components/Legal/LegalContent";
import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: "About Us | BuildNinja",
  description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/about",
  },
  openGraph: {
    title: "About Us | BuildNinja",
    description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
    url: "https://buildninja.grapehub.io/about",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function AboutPage() {
  const content = await fetchGrapeHubPage("about");
  
  return (
    <LegalContent 
      title="About Us"
      description="Learn about our mission, our history of software excellence, and our dedication to developer empowerment."
      badge="Company Information"
      htmlContent={content}
    />
  );
}
