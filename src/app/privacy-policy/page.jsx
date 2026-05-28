import LegalContent from "@/components/Legal/LegalContent";
import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: "Privacy Policy | BuildNinja",
  description: "Read BuildNinja's Privacy Policy to understand how we collect, use, and protect your personal information while ensuring transparency and data security.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | BuildNinja",
    description: "Read BuildNinja's Privacy Policy to understand how we collect, use, and protect your personal information while ensuring transparency and data security.",
    url: "https://buildninja.grapehub.io/privacy-policy",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function PrivacyPolicyPage() {
  const content = await fetchGrapeHubPage("privacy-policy");
  
  return (
    <LegalContent 
      title="Privacy Policy"
      description="Your privacy is extremely important to us. Learn how we handle, protect, and respect your personal information."
      badge="Legal Documents"
      htmlContent={content}
    />
  );
}
