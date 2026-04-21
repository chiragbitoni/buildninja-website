import HomePage from "./HomePage";

export const metadata = {
  title: "Build Ninja | Self-Hosted CI/CD Platform for Seamless DevOps",
  description: "Experience lightning-fast, secure, and fully automated CI/CD with BuildNinja. The ultimate self-hosted alternative to Jenkins, GitLab CI, and GitHub Actions.",
  keywords: ["CI/CD platform", "self-hosted CI/CD", "DevOps tools", "continuous integration", "continuous deployment", "Jenkins alternative", "GitLab CI alternative", "GitHub Actions alternative", "build automation", "GrapeHub"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/",
  },
};

export default function Home() {
  return <HomePage />;
}
