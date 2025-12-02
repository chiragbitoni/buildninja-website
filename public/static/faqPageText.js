import { paths } from "./paths";

export const heroSectionText = {
  highlight: "HELP CENTER",
  title: "Frequently Asked Questions",
  subTitle:
    "Everything you need to know about BuildNinja. Can't find what you're looking for? Reach out to our support team.",
};

export const secondSectionText = {
  content:
    "Get clear answers about BuildNinja’s features, setup, pricing, and support.",
};

export const thirdSectionText = {
  faqs: [
    {
      catrgory: "General",
      faqs: [
        {
          question: "What is BuildNinja?",
          answer:
            "BuildNinja is a comprehensive CI/CD tool designed for engineering teams who want to deploy without debugging complex toolchains. It offers automated builds, version control integration, containerized deployment support, and real-time monitoring across multiple environments.",
        },
        {
          question: "Who is BuildNinja for?",
          answer:
            "BuildNinja is designed for engineering teams of all sizes – from solo developers to large enterprises. Whether you're a startup looking for simple CI/CD or an enterprise needing advanced features like SSO, multi-environment support, and dedicated agents, BuildNinja scales with your needs.",
        },
        {
          question: "Is BuildNinja cloud-based or self-hosted?",
          answer:
            "BuildNinja offers on-premise deployment, giving you full control over your infrastructure. You can install it on Windows servers, deploy via Docker containers, or set up on Kubernetes for scalable operations. Your code, data, and builds stay on your infrastructure.",
        },
        {
          question: "What makes BuildNinja different from other CI/CD tools?",
          answer:
            "BuildNinja eliminates the complexity of traditional CI/CD tools. Instead of spending days debugging configurations, you get a pre-configured solution that works out of the box. With built-in agent management, real-time dashboards, and comprehensive email notifications, everything you need is included – no plugins hunting required.",
        },
      ],
    },
    {
      catrgory: "Installation & Setup",
      faqs: [
        {
          question: "How long does it take to install BuildNinja?",
          answer:
            "Installation typically takes 10-15 minutes. For Windows, download the executable and run the installer wizard. For Docker deployments, pull the official image and configure environment variables. Our installation guide provides step-by-step instructions for all platforms.",
        },
        {
          question: "What are the System Requirements?",
          answer: `
            **Server Requirements/strong  
            - Minimum: 2-core CPU (x64/AMD64), 4GB RAM, 20GB storage  
            - Recommended: 4+ cores, 8–16GB RAM, 100GB+ SSD  
            - Requires MongoDB and Docker  

            **Build Agents/strong
            - Minimum: 2-core CPU, 2GB RAM, 10GB storage  
            - Recommended: 4+ cores, 4–8GB RAM, 50GB+ storage  
            - Supports Windows 10/11, and Linux.

            See complete system requirements for network, browser compatibility, and additional tools.
            `,
        },
        {
          question: "Do I need a license to use BuildNinja?",
          answer: `<p>
Your first download includes a trial license (30 days, 10 users, 3 concurrent builds) — no license key needed.

After the trial, acquire a license through the BuildNinja License Portal:

- **Solo Edition (Free forever):/strong Register and generate your free license key  
- **Shogun Edition ($199/month):/strong Purchase and generate your license key  

Activate your license through Settings > Manage License (online or offline activation available).</p>
`,
        },

        {
          question: "Can I migrate from another CI/CD tool to BuildNinja?",
          answer:
            "Yes! BuildNinja integrates with Git, GitHub, GitLab, Bitbucket, and other version control systems. Import your repositories and configure workflows through our intuitive interface. For migration assistance, contact support at hello@grapehub.io",
        },
        {
          question: "Is there Docker support?",
          answer:
            "Yes! BuildNinja offers official Docker images. Deploy via Docker Compose or Kubernetes with environment-based configuration",
        },
      ],
    },
    {
      catrgory: "Pricing & Plans",
      faqs: [
        {
          question: "How much does BuildNinja cost?",
          answer:
            `BuildNinja offers two plans: 

            **Solo (Free)/strong – perfect for individual developers, includes 1 user, 3 concurrent builds, and essential features. 
            **Shogun (
            $199/month)/strong – designed for teams, includes 10 users, 3 concurrent builds (with option to add more at $25/build/month), SSO support, priority support, and all features.`,
        },
        {
          question: "Is the Solo plan really free forever?",
          answer:
            "Yes! The Solo plan is completely free with no time limits or hidden costs. It includes everything a solo developer needs: automated builds, version control integration, artifact management, real-time logs, and email notifications.",
        },
        {
          question: "What happens if I need more concurrent builds?",
          answer:
            "For the Shogun plan, the first 3 concurrent builds are included. You can add additional concurrent builds at $25 per build per month. ",
        },
        {
          question: "Can I upgrade from Solo to Shogun?",
          answer:
            "Yes, you can upgrade at any time. Your existing projects and configurations will be preserved. Simply switch to the Shogun plan from your dashboard, and you'll immediately gain access to team features, SSO, and additional build capacity.",
        },
        {
          question: "Do you offer annual billing or discounts?",
          answer:
            "Yes! Annual billing saves you 33% compared to monthly - just $133/month (billed annually at $1,599) versus $199/month. We also offer multi-year plans with even greater savings: 2-year upfront at $107/month (save $1,218) and 3-year upfront at $89/month (save $1,320). As an early adopter benefit, the first 100 customers receive price lock guarantees on multi-year plans, plus free migration assistance and 20 hours of professional services with annual subscriptions.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit cards, debit cards, and bank transfers for enterprise customers. All payments are processed securely, and invoices are sent via email for each billing cycle.",
        },
      ],
    },
    {
      catrgory: "Features & Capabilities",
      faqs: [
        {
          question: "What version control systems does BuildNinja support?",
          answer:
            "BuildNinja supports all Git-based version control systems including GitHub, GitLab, Bitbucket",
        },
        {
          question: "How does agent management work?",
          answer:
            "BuildNinja provides a centralized management interface for all your build agents. When a new agent registers with the server, it appears in an unauthorized state - you must explicitly authorize it before it can execute builds. Once authorized, you can enable/disable agents, refresh configurations, reset status, delete agents, and filter by operating system or status. Agents support Windows and Linux, giving you flexibility to match build requirements with the right platform.",
        },
        {
          question: "Does BuildNinja support Kubernetes?",
          answer:
            "Yes! BuildNinja is fully compatible with Kubernetes deployments. Both the BuildNinja Server and Agents can be deployed as containerized workloads using Kubernetes manifests. This enables scalable, high-availability CI/CD infrastructure with automated orchestration across multiple environments. Our documentation includes complete Kubernetes deployment guides with sample manifests for server and agent configurations.",
        },
        {
          question: "What kind of notifications does BuildNinja send?",
          answer:
            "BuildNinja sends email notifications for build events configured at the build configuration level. You can set up notifications for build success, failure, or completion with customizable recipients (To, CC, BCC), email templates, subject lines, and trigger conditions. Multiple notifications can be configured for different events within the same build configuration. Administrators configure the system-wide SMTP notifier, while project users create notification rules using that configuration.",
        },
        {
          question: "Can I see real-time build logs?",
          answer:
            "Yes! BuildNinja provides detailed execution logs with timestamped, step-by-step records of your build process. You can search logs using keywords, filter by category (VCS, Runner, or System), and export complete logs as CSV files for offline analysis. Build results include an Overview tab showing trigger information and duration, an Execution Logs tab for detailed build steps, and an Artifacts tab for generated files. Note that logs are limited to 16 MiB per build.",
        }

      ],
    },
    {
      catrgory: "Security & Compliance",
      faqs: [
        {
          question: "Is my data secure with BuildNinja?",
          answer:
            "Yes! Since BuildNinja is self-hosted, all your code, data, and builds remain on your infrastructure. You have complete control over security, access controls, and compliance requirements. We never access your data.",
        },
        {
          question: "Does BuildNinja support Single Sign-On (SSO)?",
          answer:
            "Yes! BuildNinja supports SSO integration with five major identity providers: Microsoft (Azure AD), GitHub, GitLab, Google, and Bitbucket. Solo Edition includes 1 SSO provider, while Shogun Edition includes all 5 providers. SSO streamlines user authentication, increases security, and improves user experience by eliminating the need for multiple passwords. Administrators can configure SSO through the Settings panel with Client ID, Client Secret, Auth URL, and Token Endpoint configuration.",
        },
        {
          question: "How are secrets and credentials managed?",
          answer:
            "A dedicated secrets management feature is currently in development and will be available in an upcoming release. In the meantime, please contact our team to discuss your specific security and credential management requirements.",
        },
        {
          question: "Can I control user permissions and access?",
          answer:
            "Yes, BuildNinja provides administrator-level user management capabilities. Administrators can approve or reject user registration requests, reset passwords, block or unblock users, and export audit logs for compliance. Solo Edition supports up to 10 users, while Shogun Edition supports unlimited users. Role-based access control (RBAC) is planned for a future release.",
        },
        {
          question: "Is BuildNinja compliant with industry standards?",
          answer:
            "BuildNinja is a self-hosted platform deployed entirely on your infrastructure, giving you complete control over data sovereignty and compliance requirements. Since it runs in your environment, compliance with standards like SOC 2, ISO 27001, or GDPR depends on your deployment infrastructure and organizational policies. BuildNinja provides SSO integration and user management controls to support your security framework.",
        },
      ],
    },
    {
      catrgory: "",
      faqs: [
        {
          question: "What support is included?",
          answer:
            "Solo Edition includes community support and comprehensive documentation. Shogun Edition includes priority email support during business hours. Annual Shogun plans also include free migration assistance and 20 hours of professional services to help with setup and configuration.",
        },
        {
          question: "Where can I find documentation?",
          answer:
            "Comprehensive documentation is available on our website, including installation guides, configuration references and best practices. The docs cover all features and include practical examples.",
        },
        {
          question: "What if I encounter a bug or issue?",
          answer:
            "You can report issues by submitting a support ticket through our portal or by emailing hello@grapehub.io. Solo Edition users receive community support, while Shogun Edition users receive priority support during business hours. We actively work on resolving reported issues and provide regular updates and patches.",
        },
        {
          question: "How often is BuildNinja updated?",
          answer:
            "Updates are regularly published to Docker Hub and announced on our blog. Since BuildNinja is self-hosted, you have full control over when to upgrade and can update on your own schedule.",
        }
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
  description: "Start your free trial and experience CI/CD that just works.",
  button1: "Start Free Trial",
  button2: "Request Demo",
};
