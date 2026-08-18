import { fetchGrapeHubPage } from "@/services/grapehub/fetchPage";
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact Us | BuildNinja",
  description: "Have questions or need assistance? Contact the BuildNinja team at GrapeCity India for inquiries, sales, and support.",
  alternates: {
    canonical: "https://www.buildninja.io/contact",
  },
  openGraph: {
    title: "Contact Us | BuildNinja",
    description: "Have questions or need assistance? Contact the BuildNinja team at GrapeCity India for inquiries, sales, and support.",
    url: "https://www.buildninja.io/contact",
    siteName: "BuildNinja",
    type: "website",
  },
};

export default async function ContactPage() {
  const grapehubContactHtml = await fetchGrapeHubPage("contact");
  return <ContactPageClient grapehubContactHtml={grapehubContactHtml} />;
}
