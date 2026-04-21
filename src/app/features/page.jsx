import FeaturesPage from "./FeaturePage";

export const metadata = {
  title: "Powerful CI/CD Features for Modern Engineering | Features",
  description: "Explore BuildNinja's features: self-hosted agents, real-time logs, multi-cloud deployments, and seamless integration with GitHub, GitLab, and Bitbucket.",
  keywords: ["CI/CD features", "build automation capabilities", "self-hosted agents", "DevOps integrations", "multi-cloud deployment", "GitHub integration", "GitLab integration", "Bitbucket integration", "real-time build logs"],
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
