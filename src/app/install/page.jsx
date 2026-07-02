import DownloadPage from "./InstallPage";

export const metadata = {
  title: "Download & Install BuildNinja on Your Own Servers | Install",
  description: "Get started with BuildNinja in minutes. Follow our easy installation guide for Linux, Docker, and self-hosted environments.",
  keywords: ["install CI/CD server", "download BuildNinja", "self-hosted CI/CD setup", "Docker CI/CD installation", "Linux build server", "deploy continuous integration server"],
  alternates: {
    canonical: "https://buildninja.grapehub.io/install",
  },
  openGraph: {
    title: "Download & Install BuildNinja on Your Own Servers | Install",
    description: "Get started with BuildNinja in minutes. Follow our easy installation guide for Linux, Docker, and self-hosted environments.",
    url: "https://buildninja.grapehub.io/install",
    siteName: "BuildNinja",
    images: [
      {
        url: "https://buildninja.grapehub.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja CI/CD Platform Installation",
      },
    ],
    type: "website",
  },
};

export default function Download() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://buildninja.grapehub.io/install#howto",
    "name": "How to Install BuildNinja",
    "description": "Learn how to deploy and configure the BuildNinja self-hosted CI/CD platform on your own infrastructure using the Windows Installer or Docker.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check Requirements",
        "text": "Ensure your system meets the minimum requirements: 2 CPU cores, 4 GB RAM, and 10 GB free space on Windows, Linux, or macOS."
      },
      {
        "@type": "HowToStep",
        "name": "Get License Key",
        "text": "Sign up on the install page with your email to receive your free Growth Edition license key."
      },
      {
        "@type": "HowToStep",
        "name": "Run the Installer or Docker Command",
        "text": "Download and run the Windows Installer for native Windows service setup, or pull and run the official Docker image using 'docker pull grapehub/buildninja'."
      },
      {
        "@type": "HowToStep",
        "name": "Configure and Launch",
        "text": "Configure VCS integrations (GitHub, GitLab, Bitbucket), add build steps, and start running continuous integration builds."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DownloadPage />
    </>
  );
}
