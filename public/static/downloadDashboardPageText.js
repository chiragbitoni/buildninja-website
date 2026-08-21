import { paths } from "./paths";

export const downloadDashboardData = {
  breadcrumb: "Documentation / Installers",
  title: "Download Installers",

  latest: {
    windows: {
      title: "Windows Installer",
      name: "BuildNinja_Installer.exe",
      version: "",
      downloadUrl: "/api/installers/download/BuildNinja_latest.exe",
      releasedOn: "",
    },

    linux: {
      title: "Linux Distributables",
      serverName: "BuildNinja_server_linux",
      serverVersion: "",
      serverDownloadUrl: "/api/installers/download/bn_server_linux_latest",
      agentName: "BuildNinja_agent_linux",
      agentVersion: "",
      agentDownloadUrl: "/api/installers/download/bn_agent_linux_latest",
      releasedOn: "",
    },

    mac: {
      title: "macOS Distributables",
      serverName: "BuildNinja_server_mac",
      serverVersion: "",
      serverDownloadUrl: "/api/installers/download/bn_server_mac_latest",
      agentName: "BuildNinja_agent_mac",
      agentVersion: "",
      agentDownloadUrl: "/api/installers/download/bn_agent_mac_latest",
      releasedOn: "",
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
      { comp: "Server Storage", spec: "20GB" },
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

  license: {
    title: "Activate Your Instance",
    desc: "Download complete? Get your free license key to activate BuildNinja and start automating your builds.",
    btn: "Get Your Free License Key",
    link: "/install/license", // Assuming this is the path
  },
};
