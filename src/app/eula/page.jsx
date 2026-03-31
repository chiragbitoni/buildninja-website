import EulaHero from "../../components/EULA/Sections/EulaHero/EulaHero";
import EulaContent from "../../components/EULA/Sections/EulaContent/EulaContent";

export const metadata = {
    title: "EULA | BuildNinja",
    description: "BuildNinja End User License Agreement (EULA). Read about our licensing terms, usage rights, and data protection policies.",
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