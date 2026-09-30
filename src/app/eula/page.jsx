import { siteUrl } from "@/lib/site-url";
import { LegalPage } from "../../components/MarketingSite/app/legal-page";

export const metadata = {
    title: { absolute: "EULA | BuildNinja" },
    description: "BuildNinja End User License Agreement (EULA). Read about our licensing terms, usage rights, and data protection policies.",
    keywords: ["BuildNinja EULA", "software license agreement", "CI/CD terms of use", "DevOps software licensing", "data protection policies"],
    alternates: {
        canonical: siteUrl("/eula"),
    },
    openGraph: {
        title: "EULA | BuildNinja",
        description: "BuildNinja End User License Agreement (EULA). Read about our licensing terms, usage rights, and data protection policies.",
        url: siteUrl("/eula"),
        siteName: "BuildNinja",
        images: [
            {
                url: siteUrl("/resources/BuildNinja.png"),
                width: 1200,
                height: 630,
                alt: "BuildNinja CI/CD EULA",
            },
        ],
        type: "website",
    },
};

export default function EULA() {
    return <LegalPage route="eula" />;
}
