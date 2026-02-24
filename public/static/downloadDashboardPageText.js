import { paths } from "./paths";

export const downloadDashboardData = {
  breadcrumb: "Documentation / Installers",
  title: "Download Installers",

  latest: {
    windows: {
      title: "Window Installer",
      name: "BuildNinja_Installer_2026.1.1.7.exe",
      version: "2026.1.1.7",
      downloadUrl: "/api/installers/download/BuildNinja_2026.1.1.7.exe",
      releasedOn: "2026-02-21T17:20:25Z",
    },

    linux: {
      title: "Linux Distributables",
      serverName: "BuildNinja_server_linux_1.1.0-rc",
      serverVersion: "1.1.0-rc",
      serverDownloadUrl: "/api/installers/download/bn_server_linux_1.1.0-rc",
      agentName: "BuildNinja_agent_linux_1.1.0-rc",
      agentVersion: "1.1.0-rc",
      agentDownloadUrl: "/api/installers/download/bn_agent_linux_1.1.0-rc",
      releasedOn: "2026-02-21T17:38:58Z",
    },

    mac: {
      title: "Mac Distributables",
      serverName: "BuildNinja_server_mac_1.1.0-rc",
      serverVersion: "1.1.0-rc",
      serverDownloadUrl: "/api/installers/download/bn_server_mac_1.1.0-rc",
      agentName: "BuildNinja_agent_mac_1.1.0-rc",
      agentVersion: "1.1.0-rc",
      agentDownloadUrl: "/api/installers/download/bn_agent_mac_1.1.0-rc",
      releasedOn: "2026-02-21T17:39:07Z",
    },
  },

  history: [],

  docker: {
    title: "Docker Commands",
    serverLabel: "Server Image",
    serverCmd: "docker pull grapehub/buildninja-server:latest",
    agentLabel: "Agent Image",
    agentCmd: "docker pull grapehub/buildninja-agent:latest",
  },

  systemRequirements: {
    title: "System Requirements",
    mongoRequired: "MongoDB",
    mongoDownload: "",
    mongoNote:
      "Included in Windows installer. Required separately for Linux and Mac.",
    rows: [
      { comp: "Server CPU", spec: "2+ cores" },
      { comp: "Server RAM", spec: "4GB" },
      { comp: "Server Storage", spec: "10GB" },
      { comp: "Agent CPU", spec: "2+ cores" },
      { comp: "Agent RAM", spec: "2GB" },
      { comp: "Agent Storage", spec: "5GB" },
    ],
  },

  support: {
    title: "Support Resources",
    cards: [
      {
        title: "Installation Documentation",
        desc: "Comprehensive guides for all installation methods",
        btn: "View Documentation",
        link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`,
      },
      {
        title: "Contact Support",
        desc: "Direct assistance from our support team",
        btn: "Get Support",
        router: "/support",
      },
    ],
  },
};
