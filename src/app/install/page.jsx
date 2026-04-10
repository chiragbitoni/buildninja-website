import DownloadPage from "./InstallPage";

export const metadata = {
  title: { absolute: "Download & Install BuildNinja | Self-Hosted CI/CD Setup" },
  description: "Get started with BuildNinja. Download and securely install your self-hosted CI/CD platform in minutes. Seamless DevOps integration for modern engineering teams.",
  keywords: ["install BuildNinja", "download CI/CD tool", "CI/CD setup", "self-hosted DevOps installation", "on-premise CI/CD download", "DevOps pipeline setup"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/install",
  },
};

export default function Download() {
  return <DownloadPage />;
}
