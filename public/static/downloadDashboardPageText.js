import { paths } from "./paths";

export const downloadDashboardData = {
  breadcrumb: "Documentation / Installers",
  title: "Download Installers",

  // Mirrors API shape
  latest: {
    windows: {
      title: "Windows Installers",
      serverName: "BuildNinjaServer.exe",
      serverVersion: "Version 2025.2.0.15",
      agentName: "BuildNinjaAgent.exe",
      agentVersion: "Version 2025.2.0.10",
      serverDownloadUrl: "/api/installers/download/BuildNinjaServer_2025.2.0.15.exe",
      agentDownloadUrl: "/api/installers/download/BuildNinjaAgent_2025.2.0.10.exe",
      releasedOn: "2025-11-25T10:20:50Z"
    }
  },

  history: [  ],

  docker: {
    title: "Docker Commands",
    serverLabel: "Server Image",
    serverCmd: "docker pull grapehub/buildninja-server:latest",
    agentLabel: "Agent Image",
    agentCmd: "docker pull grapehub/buildninja-agent:latest"
  },

  systemRequirements: {
    title: "System Requirements",
    mongoRequired: "MongoDB 4.4+ required",
    mongoDownload: "Download MongoDB",
    rows: [
      { comp: "Server CPU", spec: "2+ cores" },
      { comp: "Server RAM", spec: "4GB" },
      { comp: "Server Storage", spec: "10GB" },
      { comp: "Agent CPU", spec: "2+ cores" },
      { comp: "Agent RAM", spec: "2GB" },
      { comp: "Agent Storage", spec: "5GB" }
    ]
  },

  support: {
    title: "Support Resources",
    cards: [
      {
        title: "Installation Documentation",
        desc: "Comprehensive guides for all installation methods",
        btn: "View Documentation",
        link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`
      },
      {
        title: "Contact Support",
        desc: "Direct assistance from our support team",
        btn: "Get Support",
        router: "/support"
      }
    ]
  }
};
