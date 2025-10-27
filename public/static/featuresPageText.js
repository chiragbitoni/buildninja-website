import { paths } from "./paths";

export const heroSectionText = {
  title: "Powerful Features to Supercharge Your CI/CD",
  subtitle:
    "From automated builds to enterprise-grade security, everything you need to build, test, and deploy with confidence.",
};

export const secondSectionText = {
  cards: [
    {
      icon: paths.icons.thunderBlack,
      title: "Automated Builds",
      description:
        "Automatically triggers builds based on scheduled time and date.",
    },
    {
      icon: paths.icons.versioning,
      title: "Version Control Integration",
      description:
        "Integrates with Git, GitHub, GitLab, Bitbucket, and others to automate build, test, and deployment workflows.",
    },
    {
      icon: paths.icons.artifactBox,
      title: "Artifact Management",
      description:
        "Stores build outputs for future deployment or distribution.",
    },
    {
      icon: paths.icons.cds,
      title: "Containerized Deployment Support",
      description:
        "Deploy and configure servers and agents on Kubernetes for scalable operations, or use Docker for local setups. Flexible infrastructure management.",
    },
    {
      icon: paths.icons.globe,
      title: "Multi-Environment Support",
      description:
        "Manage deployments across dev, staging, and production with environment-specific logic, secrets, and conditions.",
    },
    {
      icon: paths.icons.crossPlatform,
      title: "Cross-Platform Configuration",
      description: "Seamless setup across Windows, Linux, and macOS.",
    },
    {
      icon: paths.icons.users,
      title: "Agent Management",
      description:
        "Manage build agents: authorize, enable/disable, refresh, reset, filter by OS or status.",
    },
    {
      icon: paths.icons.gear,
      title: "Agent Requirements Configuration",
      description:
        "Specify agent capabilities to ensure builds run on appropriate agents.",
    },
    {
      icon: paths.icons.chart,
      title: "Interactive Dashboard",
      description:
        "View and filter build metrics with customizable time ranges and auto-refresh.",
    },
    {
      icon: paths.icons.clock,
      title: "Real-Time Logs & Reports",
      description:
        "Live logs and dashboards for monitoring builds and deployments.",
    },
    {
      icon: paths.icons.email,
      title: "Email Notification System",
      description:
        "Alerts for key events (registrations, password resets, approvals, build results, agent disconnections). Supports SMTP configuration.",
    },
    {
      icon: paths.icons.puzzlePiece,
      title: "Plugin & Integration Support",
      description:
        "Works with third-party tools like Docker, Kubernetes, and more.",
    },
    {
      icon: paths.icons.shield,
      title: "Single Sign-On (SSO) Support",
      description:
        "Supports multiple SSO providers for streamlined authentication.",
    },
  ],
};

export const thirdSectionText = {
  title: "Ready to streamline your deployments?",
  description: "Start your free trial and experience CI/CD that just works.",
  button1: "Start Free Trial",
  button2: "Request a Demo",
};
