import LegalContent from "@/components/Legal/LegalContent";
import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: "Terms of Service | BuildNinja",
  description: "Read BuildNinja's Terms and Conditions outlining the rules, responsibilities, and policies governing the use of our website, products, and services.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | BuildNinja",
    description: "Read BuildNinja's Terms and Conditions outlining the rules, responsibilities, and policies governing the use of our website, products, and services.",
    url: "https://buildninja.grapehub.io/terms-of-service",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function TermsOfServicePage() {
  const content = await fetchGrapeHubPage("terms-of-service");
  return (
    <LegalContent 
      title="Terms of Service"
      description="The rules and guidelines for using the BuildNinja platform, products, and services. Clear, transparent, and fair."
      badge="Legal Documents"
      htmlContent={content}
    />
  );
}
