import FeaturesPage from "./FeaturePage";

export const metadata = {
  title: { absolute: "CI/CD Features & DevOps Pipeline Capabilities" },
  description: "Explore BuildNinja's extensive CI/CD features: pipeline automation, real-time collaboration, zero-downtime deployments, and secure self-hosting tailored for enterprise DevOps teams.",
  keywords: ["CI/CD features", "DevOps capabilities", "pipeline automation", "zero-downtime deployment", "enterprise CI/CD", "secure release management"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/features",
  },
};

export default function Features() {
  return (
    <div >
      <FeaturesPage />
    </div>
  );
}