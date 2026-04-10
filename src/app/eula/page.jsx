import EulaHero from "../../components/EULA/Sections/EulaHero/EulaHero";
import EulaContent from "../../components/EULA/Sections/EulaContent/EulaContent";

export const metadata = {
    title: { absolute: "End User License Agreement | BuildNinja CI/CD" },
    description: "Read the End User License Agreement (EULA) for BuildNinja. Understand the terms, software licensing, and usage policies for our self-hosted CI/CD platform.",
    keywords: ["BuildNinja EULA", "CI/CD software license", "DevOps tool terms of service", "end user license agreement"],
    alternates: {
        canonical: "https://buildninja.grapehub.io/eula",
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