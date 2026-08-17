import { paths } from "./paths";

export const heroSectionText = {
  highlight: "HELP CENTER",
  title: "Frequently Asked Questions",
  subTitle:
    "Everything you need to know about BuildNinja. Can't find what you're looking for? Reach out to our support team.",
};

export const secondSectionText = {
  content:
    "Get clear answers about BuildNinja's features, setup, pricing, and support.",
};

export const thirdSectionText = {
  faqs: [
    {
      category: "General",
      faqs: [
        {
          id: "what-is-buildninja",
          question: "What is BuildNinja?",
          answer:
            "BuildNinja is a comprehensive CI/CD tool designed for engineering teams who want to deploy without debugging complex toolchains. It offers automated builds, version control integration, containerized deployment support, and real-time monitoring across multiple environments.",
        },
        {
          id: "who-is-buildninja-for",
          question: "Who is BuildNinja for?",
          answer:
            "BuildNinja is designed for engineering teams of all sizes – from solo developers to large enterprises. Whether you're a startup looking for simple CI/CD or an enterprise needing advanced features like SSO, multi-environment support, and dedicated agents, BuildNinja scales with your needs.",
        },
        {
          id: "cloud-or-self-hosted",
          question: "Is BuildNinja cloud-based or self-hosted?",
          answer:
            "BuildNinja offers on-premise deployment, giving you full control over your infrastructure. You can install it on Windows servers, deploy via Docker containers, or set up on Kubernetes for scalable operations. Your code, data, and builds stay on your infrastructure.",
        },
        {
          id: "what-makes-buildninja-different",
          question: "What makes BuildNinja different from other CI/CD tools?",
          answer:
            "BuildNinja eliminates the complexity of traditional CI/CD tools. Instead of spending days debugging configurations, you get a pre-configured solution that works out of the box. With built-in agent management, real-time dashboards, and comprehensive email notifications, everything you need is included – no plugins hunting required.",
        },
        {
          id: "what-is-native-git-support",
          question: "What is Native Git support in BuildNinja?",
          answer:
            "Native Git support allows BuildNinja to handle Git operations directly on the server instead of relying only on external SSH or HTTPS workflows. This improves reliability, enables caching, and enhances overall Git performance.",
        },
        {
          id: "what-are-build-parameters",
          question: "What are Build Parameters in BuildNinja?",
          answer:
            "Build Parameters are reusable variables that control how a build executes. They eliminate hardcoded values, improve security, and allow flexible configuration across projects and build configurations with support for inheritance and runtime input.",
        },
        {
          id: "what-roles-are-available-in-rbac",
          question: "What roles are available in RBAC?",
          answer:
            "BuildNinja provides predefined roles such as Viewer, Executor, Editor, and Manager to control user access at the project and build configuration level. These roles define the actions users can perform, including viewing configurations, running builds, modifying settings, and managing members.",
        },
      ],
    },

    {
      category: "Installation & Setup",
      faqs: [
        {
          id: "installation-time",
          question: "How long does it take to install BuildNinja?",
          answer:
            "Installation typically takes under 15 minutes. For Windows, download the executable and run the installer wizard. For Docker deployments, pull the official image and configure environment variables. Our installation guide provides step-by-step instructions for all platforms.",
        },
        {
          id: "system-requirements",
          question: "What are the System Requirements?",
          answer: `Server Requirements:
- Minimum: 2-core CPU (x64/AMD64), 4GB RAM, 20GB storage
- Recommended: 4+ cores, 8-16GB RAM, 100GB+ SSD
- Requires MongoDB and Docker

Build Agents:
- Minimum: 2-core CPU, 2GB RAM, 10GB storage
- Recommended: 4+ cores, 4-8GB RAM, 50GB+ storage
- Supports Windows 10/11, Linux, & MacOS

See complete system requirements for network, browser compatibility, and additional tools.`,
        },
        {
          id: "license-needed",
          question: "Do I need a license to use BuildNinja?",
          answer: `<ul>
<li><strong>Growth Edition (free):</strong> Register and generate your free license key - no credit card needed. The key is valid for the license term; you can claim it multiple times - whenever the term expires, simply generate a new free Growth key. Includes {{freePlanFeatures}}.</li>
<li><strong>Shogun Edition (paid):</strong> Purchase and generate your license key. Shogun is designed for teams - includes unlimited users, unlimited builds, projects, and configurations, 5 SSO providers, email support, and all features.</li>
</ul>
<p>Activate your license through: My Accounts > Settings > Manage License (online or offline activation available).</p>`,
        },
        {
          id: "infrastructure-needed",
          question: "What infrastructure do I need for BuildNinja?",
          answer: `<p>BuildNinja runs on your infrastructure - whether that's existing on-premise servers, AWS, Azure, GCP, or any Docker-compatible environment. Minimum requirements: 2-core CPU, 4GB RAM for the server, and 2GB RAM per build agent.</p>
<p>The key advantage: you control your infrastructure costs with no per-minute build charges, no data egress fees, and no surprise cloud bills. Use existing servers at zero additional cost, or deploy on cloud infrastructure you already manage.</p>
<p>See complete system requirements in our documentation.</p>`,
        },
        {
          id: "docker-support",
          question: "Is there Docker support?",
          answer:
            "Yes! BuildNinja offers official Docker images. Deploy via Docker Compose or Kubernetes with environment-based configuration",
        },
        {
          id: "does-buildninja-support-macos",
          question: "Does BuildNinja support macOS?",
          answer:
            "Yes. BuildNinja supports running both Server and Agents on macOS, with full support on Apple Silicon (M-series) systems. Older macOS versions may work on Apple Silicon, but Intel-based Macs are not fully supported.",
        },
        {
          id: "what-is-included-in-the-installer",
          question: "What is included in the BuildNinja installer?",
          answer: `<p>The BuildNinja installer is a unified installer that supports installing:</p>
<ul>
<li>The Server only</li>
<li>The Agent only</li>
<li>Both the Server and the Agent on the same system</li>
</ul>
<p>When installing the Server, the installer can automatically install MongoDB locally if it is not already present. If a remote MongoDB URL is provided, MongoDB is not installed by the installer. The installer also allows you to choose a custom installation directory.</p>`,
        },
        {
          id: "install-server-and-agent-same-machine",
          question: "Can I install both Server and Agent on the same machine?",
          answer:
            "Yes. The unified installer supports installing and running both the Server and the Agent on the same machine. This setup is commonly used for evaluation, development, or small-scale deployments.",
        },
        {
          id: "need-to-install-mongodb-separately",
          question: "Do I need to install MongoDB separately?",
          answer:
            "Not always. When installing the Server using the unified installer, MongoDB is installed automatically if a local MongoDB instance is not detected. If you choose to connect to a remote MongoDB instance, you must ensure that MongoDB is already installed and accessible at the provided URL.",
        },
        {
          id: "use-binary-files-instead-of-installer",
          question: "Can I still use binary files instead of the installer?",
          answer:
            "Yes. BuildNinja provides standalone binary files for both the Server and the Agent on Windows. This method requires manual configuration using environment variables and is recommended for advanced, customized, or automated deployments.",
        },
      ],
    },

    {
      category: "Pricing & Plans",
      faqs: [
        {
          id: "pricing-overview",
          question: "How much does BuildNinja cost?",
          answer: `BuildNinja offers two plans: <strong>Growth (Free)</strong> - perfect for individual developers, includes {{freePlanFeatures}}. <strong>Shogun</strong> - designed for teams, includes unlimited users and unlimited builds (no per-seat or per-build costs), 5 SSO providers, email support, and all features.`,
        },
        {
          id: "pricing-for-teams",
          question: "How does pricing work for growing teams?",
          answer: `<p>BuildNinja charges based on plan limits, not team size. Shogun Edition includes unlimited users and unlimited builds. Add your 11th, 50th, or 500th developer - your price stays the same.</p>
<p>Growth Edition supports {{freePlanFeatures}}. You only pay for infrastructure capacity, never per developer.</p>`,
        },
        {
          id: "solo-plan-free",
          question: "Is the Growth Edition plan really free forever?",
          answer:
            "Yes! The Growth Edition plan is completely free, no credit card or hidden costs. Your free license key is valid for the license term - when it expires, simply generate a new free key. It includes everything an individual developer needs: automated builds, version control integration, artifact management, real-time logs, and email notifications.",
        },
        {
          id: "payment-methods",
          question: "What payment methods do you accept?",
          answer:
            "Growth and Shogun plans are paid online with major credit cards and debit cards. All payments are processed securely, and invoices are generated automatically for each payment. Enterprise plans are purchased by contacting sales at sales@grapecity.global.",
        },
        {
          id: "upgrade-growth-to-shogun",
          question: "Can I upgrade from Growth to Shogun?",
          answer:
            "Yes, you can upgrade at any time. Your existing projects and configurations will be preserved. Simply switch to the Shogun plan from your dashboard, and you'll immediately gain access to team features, SSO, and additional build capacity.",
        },
        {
          id: "annual-billing",
          question: "Do you offer annual billing or discounts?",
          answer: `{{annualBilling}} As an early adopter benefit, the first 100 customers receive price lock guarantees on multi-year plans.`,
        },
      ],
    },

    {
      category: "Features & Capabilities",
      faqs: [
        {
          id: "vcs-support",
          question: "What version control systems does BuildNinja support?",
          answer:
            "BuildNinja supports all Git-based version control systems including GitHub, GitLab, Bitbucket",
        },
        {
          id: "git-trigger",
          question: "Does BuildNinja support Git triggers?",
          answer:
            "Yes. BuildNinja 1.2.0 introduces Git Trigger, which automatically starts builds on Git events such as pushes and merges. You can filter by branch patterns, commit types, commit message patterns, polling intervals, and allowed authors, with support for custom VCS configurations across multiple repositories.",
        },
        {
          id: "git-changes-visualization",
          question: "Can I see the commits included in a build?",
          answer:
            "Yes. The Git Changes tab in Build Details shows a visual commit graph of every commit between builds, with commit metadata, author tooltips, and copyable commit IDs. Build History also previews commit counts, recent commits, and associated branches for each build.",
        },
        {
          id: "run-build-branch-commit",
          question: "Can I run a build against a specific branch or commit?",
          answer:
            "Yes. The Run Build modal supports selecting VCS branches or running builds against a specific commit ID. Commit IDs override branch selection, enabling precise, reproducible builds across multiple repositories.",
        },
        {
          id: "agent-management",
          question: "How does agent management work?",
          answer: `<p>BuildNinja provides a centralized management interface for all your build agents. When a new agent registers with the server, it appears in an unauthorized state - you must explicitly authorize it before it can execute builds.</p>
<p>Once authorized, you can enable/disable agents, refresh configurations, reset status, delete agents, and filter by operating system or status. Agents support Windows, Linux, & MacOS, giving you flexibility to match build requirements with the right platform.</p>`,
        },
        {
          id: "kubernetes-support",
          question: "Does BuildNinja support Kubernetes?",
          answer:
            "Yes! BuildNinja is fully compatible with Kubernetes deployments. Both the BuildNinja Server and Agents can be deployed as containerized workloads using Kubernetes manifests. This enables scalable, high-availability CI/CD infrastructure with automated orchestration across multiple environments. Our documentation includes complete Kubernetes deployment guides with sample manifests for server and agent configurations.",
        },
        {
          id: "notifications",
          question: "What kind of notifications does BuildNinja send?",
          answer: `<p>BuildNinja sends email notifications for build events configured at the build configuration level. You can set up notifications for build success, failure, or completion with customizable recipients (To, CC, BCC), email templates, subject lines, and trigger conditions.</p>
<p>Multiple notifications can be configured for different events within the same build configuration. Administrators configure the system-wide SMTP notifier, while project users create notification rules using that configuration.</p>`,
        },
        {
          id: "real-time-logs",
          question: "Can I see real-time build logs?",
          answer: `<p>Yes! BuildNinja provides detailed execution logs with timestamped, step-by-step records of your build process. You can search logs using keywords, filter by category (VCS, Runner, or System), and export complete logs as CSV files for offline analysis.</p>
<p>Build results include an Overview tab showing trigger information and duration, an Execution Logs tab for detailed build steps, a Git Changes tab with commit graphs between builds, and an Artifacts tab for generated files.</p>
<p>Note: Logs are limited to 16 MiB per build.</p>`,
        },
        {
          id: "does-native-git-support-caching",
          question: "Does Native Git support caching?",
          answer:
            "Yes. Native Git support includes server-side caching, which improves clone performance and reduces redundant network operations.",
        },
        {
          id: "which-shells-does-script-runner-support",
          question: "Which shells does Script Runner support?",
          answer:
            "Script Runner supports multiple script types, including Bash, Shell (sh), Zsh, Command Prompt, PowerShell, and PowerShell 7.",
        },
        {
          id: "can-i-use-ssh-runner-for-deployments",
          question: "Can I use SSH Runner for deployments?",
          answer:
            "Yes. SSH Runner can be used for secure remote command execution, including deployment-related tasks, provided required keys and permissions are configured.",
        },
        {
          id: "how-do-build-parameters-work-in-build-steps",
          question: "How do Build Parameters work in build steps?",
          answer:
            "Build Parameters can be referenced inside build steps using placeholders or exposed as standard environment variables. This allows dynamic configuration of scripts and commands without hardcoding values, while keeping sensitive data protected when marked as secure.",
        },
        {
          id: "how-does-rbac-affect-build-configurations",
          question: "How does RBAC affect build configurations?",
          answer:
            "RBAC controls who can view, edit, manage members, or execute build configurations by assigning roles through the Members tab at the project or configuration level.",
        },
      ],
    },

    {
      category: "Security & Compliance",
      faqs: [
        {
          id: "data-security",
          question: "Is my data secure with BuildNinja?",
          answer:
            "Yes! Since BuildNinja is self-hosted, all your code, data, and builds remain on your infrastructure. You have complete control over security, access controls, and compliance requirements. We never access your data.",
        },
        {
          id: "sso-support",
          question: "Does BuildNinja support Single Sign-On (SSO)?",
          answer: `<p>Yes! BuildNinja supports SSO integration with five major identity providers: Microsoft (Azure AD), GitHub, GitLab, Google, and Bitbucket.</p>
<p>Growth Edition includes any 1 SSO provider of your choice, while Shogun Edition includes all 5 providers: Microsoft (Azure AD), GitHub, GitLab, Google, and Bitbucket. SSO streamlines user authentication, increases security, and improves user experience by eliminating the need for multiple passwords.</p>
<p>Administrators can configure SSO through the Settings panel with Client ID, Client Secret, Auth URL, and Token Endpoint configuration.</p>`,
        },
        {
          id: "industry-compliance",
          question: "Is BuildNinja compliant with industry standards?",
          answer:
            "BuildNinja is a self-hosted platform deployed entirely on your infrastructure, giving you complete control over data sovereignty and compliance requirements. Since it runs in your environment, compliance with standards like SOC 2, ISO 27001, or GDPR depends on your deployment infrastructure and organizational policies. BuildNinja provides SSO integration and user management controls to support your security framework.",
        },
        {
          id: "how-are-secrets-and-credentials-managed",
          question: "How are secrets and credentials managed?",
          answer:
            "Secrets are stored securely and are masked in logs. Access to secrets is controlled using RBAC and scoped permissions at the project or configuration level.",
        },
        {
          id: "can-i-control-user-permissions-and-access",
          question: "Can I control user permissions and access?",
          answer:
            "Yes, BuildNinja provides administrator-level user management capabilities. Administrators can approve or reject user registration requests, reset passwords, block or unblock users, and export audit logs for compliance. Growth Edition supports up to 10 users, while Shogun Edition supports unlimited users. In addition, BuildNinja supports RBAC, allowing administrators to assign granular roles such as Viewer, Executor, Editor, and Manager to control user permissions at the project and build configuration level.",
        },
        {
          id: "can-permission-changes-affect-running-builds",
          question: "Can permission changes affect running builds?",
          answer:
            "Permission changes take effect immediately for user actions in the UI, but they do not interrupt builds that are already running.",
        },
      ],
    },

    {
      category: "Support & Resources",
      faqs: [
        {
          id: "support-included",
          question: "What support is included?",
          answer:
            "BuildNinja support is provided via email and comprehensive documentation.",
        },
        {
          id: "documentation",
          question: "Where can I find documentation?",
          answer:
            "Comprehensive documentation is available on our website, including installation guides, configuration references and best practices. The docs cover all features and include practical examples.",
        },
        {
          id: "reporting-bugs",
          question: "What if I encounter a bug or issue?",
          answer: `You can report issues by submitting a support ticket through our <a class="faqThirdPinkText" href="/support">support portal</a> or by emailing <a class="faqThirdPinkText" href="mailto:buildninja@grapecity.global">buildninja@grapecity.global</a>. We actively work on resolving reported issues and provide regular updates and patches.`,
        },
        {
          id: "update-frequency",
          question: "How often is BuildNinja updated?",
          answer:
            "Updates are regularly published to Docker Hub and announced on our blog. Since BuildNinja is self-hosted, you have full control over when to upgrade and can update on your own schedule.",
        },
      ],
    },
  ],
};

export const fourthSectionText = {
  title: "Still Need Help?",
  subTitle: "Explore additional resources or get in touch with our team",
  cards: [
    {
      icon: paths.icons.documentWhite,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      buttonText: "View Docs",
      link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`,
    },
    {
      icon: paths.icons.emailWhite,
      title: "Email Support",
      description: "Get help from our support team",
      buttonText: "Contact Us",
      router: "/support",
    },
    {
      icon: paths.icons.searchWhite,
      title: "Search Docs",
      description: "Find answers quickly in our knowledge base",
      buttonText: "Search",
      link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`,
    },
  ],
};

export const fifthSectionText = {
  title: "Ready to streamline your deployments?",
  description: "Download the Growth Edition and experience CI/CD that just works.",
  button1: "Download Now",
  button2: "Request Demo",
};
