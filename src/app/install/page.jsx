import { siteUrl } from "@/lib/site-url";
import { InstallPage as MarketingInstallPage } from "../../components/MarketingSite/app/install-page";
import { fetchInstallersForBuild } from "@/services/auth/installers";

export const metadata = {
  title: { absolute: "Download & Install BuildNinja on Your Own Servers | Install" },
  description: "Get started with BuildNinja in minutes. Follow our easy installation guide for Linux, Docker, and self-hosted environments.",
  keywords: ["install CI/CD server", "download BuildNinja", "self-hosted CI/CD setup", "Docker CI/CD installation", "Linux build server", "deploy continuous integration server"],
  alternates: {
    canonical: siteUrl("/install"),
  },
  openGraph: {
    title: "Download & Install BuildNinja on Your Own Servers | Install",
    description: "Get started with BuildNinja in minutes. Follow our easy installation guide for Linux, Docker, and self-hosted environments.",
    url: siteUrl("/install"),
    siteName: "BuildNinja",
    images: [
      {
        url: siteUrl("/resources/BuildNinja.png"),
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Platform Installation",
      },
    ],
    type: "website",
  },
};

export default async function Download() {
  // Fetched at build time (server-side) so the installer list is baked into
  // the static page - no runtime wait for users. Throws (aborts the build)
  // if the installer API is unreachable, mirroring the plans fetch pattern.
  const installers = await fetchInstallersForBuild();

  return <MarketingInstallPage installers={installers} />;
}
