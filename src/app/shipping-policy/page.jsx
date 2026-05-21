import LegalContent from "@/components/Legal/LegalContent";
import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: "Shipping Policy | BuildNinja",
  description: "Learn about BuildNinja's shipping and delivery policy for digital products and services, including timelines, access details, and support information.",
  alternates: {
    canonical: "https://buildninja.grapehub.io/shipping-policy",
  },
  openGraph: {
    title: "Shipping Policy | BuildNinja",
    description: "Learn about BuildNinja's shipping and delivery policy for digital products and services, including timelines, access details, and support information.",
    url: "https://buildninja.grapehub.io/shipping-policy",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function ShippingPolicyPage() {
  const content = await fetchGrapeHubPage("shipping-policy");
  
  return (
    <LegalContent 
      title="Shipping Policy"
      description="Details regarding the digital delivery and activation terms of BuildNinja software and services."
      badge="Legal Documents"
      htmlContent={content}
    />
  );
}
