import { paths } from "./paths";

export const heroSectionText = {
  highlight: "ON-PREMISE DEPLOYMENT",
  title: "Install BuildNinja on Your Infrastructure",
  subTitle:
    "Deploy CI/CD that you control. Keep your code, data, and builds on your infrastructure. Get started in minutes with our simple installation process.",
};
export const secondSectionText = {
  title: "Instant setup. Infinite flexibility.",
  subTitle:
    "Whether you prefer native Windows environments or containerized workflows, our installer and Docker image make deployment effortless and consistent.",
};

export const thirdSectionText = {
  title: "System Requirements",
  card1Icon: paths.icons.minimumRequirements,
  card2Icon: paths.icons.thunder,
  card1: {
    title: "Minimum Requirements",
    CPU: "2 cores (x64/ARM64)",
    RAM: "4 GB",
    Storage: "10 GB free space",
    OS: "Windows 10/11, Linux, macOS",
    Network: "Internet connection required",
  },
  card2: {
    title: "Recommended",
    CPU: "4+ cores",
    RAM: "8+ GB",
    Storage: "50+ GB SSD",
    Docker: "Latest version",
    SSL: "Valid certificate for production",
  },
};

export const fourthSectionText = {
  cards: [
    {
      icon: paths.icons.shield,
      title: "Installation Guide",
      description: "Step-by-step setup instructions for all platforms",
      buttonText: "View Guide",
    },
    {
      icon: paths.icons.globeWhite,
      title: "Configuration Docs",
      description: "Complete configuration reference and examples",
      buttonText: "Read Docs",
    },
    {
      icon: paths.icons.emailWhite,
      title: "Email Support",
      description: "Get help from our support team via email",
      buttonText: "Contact Support",
    },
  ],
};

export const fifthSectionText = {
    title: "Enterprise Support Available",
    subTitle: "Need dedicated setup assistance? Our team can help with custom deployments, integrations, and enterprise configurations.",
    buttonText: "Contact Enterprise Team"
}
