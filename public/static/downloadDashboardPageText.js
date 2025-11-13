export const downloadDashboardData = {
  breadcrumb: "Documentation / Installers",
  title: "Download Installers",

  versionsInfo: {
    title:"Current Release",
    serverLabel: "Server Version",
    agentLabel: "Agent Version",
    releaseLabel: "Release Date",

    server: "2025.2.0.11",
    agent: "2025.2.0.3",
    releaseDate: "October 29, 2025",
    windownInstallerTitle: "Windows Installers",
    winServerExe: "BuildNinjaServer.exe",
    winAgentExe: "BuildNinjaAgent.exe",

    docker: {
      serverLabel: "Server Image",
      serverCmd: "docker pull grapehub/buildninja-server:latest",

      agentLabel: "Agent Image",
      agentCmd: "docker pull grapehub/buildninja-agent:latest",
    }
  },

  methods: {
    title: "Installation Methods",

    windows: {
      steps: [
        "Download BuildNinjaServer.exe",
        "Download BuildNinjaAgent.exe",
        "Installation order: Server first, then Agent"
      ],
      button: "Download Windows"
    },

    docker: {
      steps: [
        "Pull Server image",
        "Pull Agent image",
        "Download docker-compose.yml"
      ],
      button: "View Docker Setup"
    },

    kubernetes: {
      steps: [
        "No pre-packaged download",
        "View YAML manifests and deployment instructions"
      ],
      button: "Kubernetes Setup Guide"
    }
  },

  previousVersions: {
    title: "Previous Versions",
    list: [
      { server: "2025.1.0.8", agent: "2025.1.0.2", released: "September 15, 2025" },
      { server: "2025.0.5.8", agent: "2025.0.5.1", released: "August 22, 2025" },
      { server: "2024.12.3.4", agent: "2024.12.3.1", released: "July 18, 2025" }
    ],
    loadMore: "Load More Versions"
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
        btn: "View Documentation"
      },
      {
        title: "Community Forum",
        desc: "Get help from the BuildNinja community",
        btn: "Visit Forum"
      },
      {
        title: "Contact Support",
        desc: "Direct assistance from our support team",
        btn: "Get Support"
      }
    ]
  }
};
