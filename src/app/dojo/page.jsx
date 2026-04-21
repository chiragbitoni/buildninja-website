import DojoClient from "./DojoClient";

export const metadata = {
  title: "Interactive CI/CD Sandbox & Playground | Dojo",
  description: "Master BuildNinja in our interactive Dojo. Experiment with build pipelines, configurations, and CI/CD workflows in a safe sandbox environment.",
  keywords: ["CI/CD sandbox", "DevOps playground", "build pipeline testing", "CI/CD tutorial", "BuildNinja Dojo", "test CI/CD workflows", "interactive DevOps learning"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/dojo",
  },
};

export default function DojoPage() {
  return <DojoClient />;
}
