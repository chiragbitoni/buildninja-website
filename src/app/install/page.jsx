import DownloadPage from "./InstallPage";

export const metadata = {
  title: "Download & Install BuildNinja on Your Own Servers | Install",
  description: "Get started with BuildNinja in minutes. Follow our easy installation guide for Linux, Docker, and self-hosted environments.",
  keywords: ["install CI/CD server", "download BuildNinja", "self-hosted CI/CD setup", "Docker CI/CD installation", "Linux build server", "deploy continuous integration server"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/install",
  },
};

export default function Download() {
  return <DownloadPage />;
}
