import EulaHero from "../../components/EULA/Sections/EulaHero/EulaHero";
import EulaContent from "../../components/EULA/Sections/EulaContent/EulaContent";

export const metadata = {
    title: "EULA | BuildNinja",
    description: "BuildNinja End User License Agreement (EULA). Read about our licensing terms, usage rights, and data protection policies.",
    keywords: ["BuildNinja EULA", "software license agreement", "CI/CD terms of use", "DevOps software licensing", "data protection policies"],
    alternates: {
        canonical: "https://buildninja.grapehub.io/eula",
    },
    openGraph: {
        title: "EULA | BuildNinja",
        description: "BuildNinja End User License Agreement (EULA). Read about our licensing terms, usage rights, and data protection policies.",
        url: "https://buildninja.grapehub.io/eula",
        siteName: "BuildNinja",
        images: [
            {
                url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
                width: 1200,
                height: 630,
                alt: "BuildNinja CI/CD EULA",
            },
        ],
        type: "website",
    },
};

export default function EULA() {
    return (
        <main>
            <EulaHero />
            <EulaContent />
        </main>
    );
}
