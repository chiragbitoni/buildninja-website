// /public/static/downloadAccessHeroText.js
export const downloadAccessHeroText = {
  heading: "Thank you! Your downloads are ready.",
  subHeading: "Choose your preferred installation method below",

  windows: {
    title: "Windows Installers",
    serverName: "BuildNinjaServer.exe",
    serverVersion: "Version 2025.2.0.11",
    agentName: "BuildNinjaAgent.exe",
    agentVersion: "Version 2025.2.0.3",
    downloadBtn: "Download"
  },

  docker: {
    title: "Docker",
    serverLabel: "Pull BuildNinja Server",
    serverCmd: "docker pull grapehub/buildninja-server:latest",
    agentLabel: "Pull BuildNinja Agent",
    agentCmd: "docker pull grapehub/buildninja-agent:latest",
  },

  nextSteps: {
    title: "Next Steps",
    step1Title: "Download MongoDB 4.4+ (required)",
    step1Link: "Get MongoDB",
    step2Title: "Install BuildNinja",
    step2Desc: "Run the installer or deploy using Docker",
    step3Title: "Trial starts automatically",
    step3Desc: "Your 30-day trial begins when you first launch BuildNinja",
  },

  bottomLinks: {
    guide: "Installation Guide",
    guideDesc: "Step-by-step instructions for all platforms",
    guideButton: "View Guide",
    docs: "Documentation Home",
    docsDesc: "Complete reference and tutorials",
    docsButton: "Read Docs",
    support: "Support Resources",
    supportDesc: "Get help from our community",
    supportButton: "Get Support",
  }
};
