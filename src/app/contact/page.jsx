import { siteUrl } from "@/lib/site-url";
import { pages } from "../../components/MarketingSite/app/content";
import { ContentPage } from "../../components/MarketingSite/app/markdown";

export const metadata = {
  title: { absolute: "Contact Us | BuildNinja" },
  description: "Have questions or need assistance? Contact the BuildNinja team at GrapeCity India for inquiries, sales, and support.",
  alternates: {
    canonical: siteUrl("/contact"),
  },
  openGraph: {
    title: "Contact Us | BuildNinja",
    description: "Have questions or need assistance? Contact the BuildNinja team at GrapeCity India for inquiries, sales, and support.",
    url: siteUrl("/contact"),
    siteName: "BuildNinja",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContentPage page={pages.contact} route="contact" />;
}
