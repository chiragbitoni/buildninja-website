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
    OS: "Windows 10/11, Linux",
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
  subTitle:
    "Need dedicated setup assistance? Our team can help with custom deployments, integrations, and enterprise configurations.",
  buttonText: "Contact Enterprise Team",
};

export const installFormText = {
  title: "Get BuildNinja Solo Edition",
  description:
    "Fill out the form below to download BuildNinja and receive your license key.",
  formFields: {
    firstName: "First Name*",
    lastName: "Last Name*",
    businessEmail: "Business Email*",
    companyName: "Company Name*",
    jobTitle: "Job Title",
    companySize: "Company Size",
    industry: "Industry",
    country: "Country",
    updates: "I’d like to receive product updates and tips via email",
  },
  windows: {
    icon: paths.icons.crossPlatformWhite,
    title: "Windows Executable",
    subtitle: "Easy setup for Windows environments",
    featuresTitle: "What you get:",
    features: [
      "Pre-configured executable installer",
      "Automatic Windows service setup",
      "Built-in configuration wizard",
      "Desktop management interface",
    ],
    button: "Download for Windows",
  },
  docker: {
    icon: paths.icons.server,
    title: "Docker Container",
    subtitle: "For containerized deployments",
    featuresTitle: "What you get:",
    features: [
      "Official Docker image",
      "Multi-architecture support (x64, ARM)",
      "Environment-based configuration",
      "Ready for Kubernetes/Docker Compose",
    ],
    button: "Get Docker Command",
  },
};
