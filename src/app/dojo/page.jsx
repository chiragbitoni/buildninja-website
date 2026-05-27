import DojoClient from "./DojoClient";

export const metadata = {
  title: "Interactive CI/CD Sandbox & Playground | Dojo",
  description: "Master BuildNinja in our interactive Dojo. Experiment with build pipelines, configurations, and CI/CD workflows in a safe sandbox environment.",
  keywords: ["CI/CD sandbox", "DevOps playground", "build pipeline testing", "CI/CD tutorial", "BuildNinja Dojo", "test CI/CD workflows", "interactive DevOps learning"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/dojo",
  },
  openGraph: {
    title: "Interactive CI/CD Sandbox & Playground | Dojo",
    description: "Master BuildNinja in our interactive Dojo. Experiment with build pipelines, configurations, and CI/CD workflows in a safe sandbox environment.",
    url: "https://buildninja.grapehub.io/dojo",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Dojo Sandbox",
      },
    ],
    type: "website",
  },
};

export default function DojoPage() {
  return <DojoClient />;
}
