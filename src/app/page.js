import HomePage from "./HomePage";

export const metadata = {
  title: { absolute: "Self-Hosted CI/CD & DevOps Automation Tool | BuildNinja" },
  description: "BuildNinja is a powerful, self-hosted CI/CD DevOps platform. Automate your CI/CD pipelines, integrate with GitHub, GitLab, and Bitbucket. The best Jenkins alternative for seamless deployments.",
  keywords: ["self-hosted CI/CD", "DevOps platform", "CI/CD tool", "Jenkins alternative", "pipeline automation", "continuous integration", "continuous deployment", "GitHub integration", "GitLab integration"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/",
  },
};

export default function Home() {
  return <HomePage />;
}
