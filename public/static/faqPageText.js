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
                      answer:(<><strong>Server</strong>: Minimum 2-core CPU (x64/AMD64), 4GB RAM, 20GB storage. 
                Recommended: 4+ cores, 8-16GB RAM, 100GB+ SSD. Requires MongoDB and Docker.<p></p>
                <br></br><strong>Build Agents</strong>: Minimum 2-core CPU, 2GB RAM, 10GB storage. 
                Recommended: 4+ cores, 4-8GB RAM, 50GB+ storage. Supports Windows 10/11, Linux, 
                and macOS. See complete system requirements for network, browser compatibility, 
                and additional tools</>)
           
        },
        {
          question: "Do I need a license to use BuildNinja?",
          answer:
            "Yes, all installations require a license key. The Solo plan is free and includes a license for single-user setups with up to 3 concurrent builds. When you download BuildNinja, your license key is automatically sent to your email within 5 minutes.",
        },
        {
          question: "Can I migrate from another CI/CD tool to BuildNinja?",
          answer:
            "Yes! BuildNinja integrates with Git, GitHub, GitLab, Bitbucket, and other version control systems. You can import your existing repositories and configure build workflows using our intuitive interface. Our documentation includes migration guides from popular CI/CD platforms.",
        },
        {
          question: "Is there Docker support?",
          answer:
            "Absolutely! BuildNinja offers official Docker images with multi-architecture support (x64, ARM). You can deploy via Docker Compose or Kubernetes. The containerized version supports environment-based configuration and is production-ready.",
        },
      ],
    },
    {
      catrgory: "Pricing & Plans",
      faqs: [
        {
          question: "How much does BuildNinja cost?",
          answer:
            "BuildNinja offers two plans: Solo (Free) – perfect for individual developers, includes 1 user, 3 concurrent builds, and essential features. Shogun (₹16,999/month) – designed for teams, includes 10 users, 3 concurrent builds (with option to add more at ₹2,399/build/month), SSO support, priority support, and all features.",
        },
        {
          question: "Is the Solo plan really free forever?",
          answer:
            "Yes! The Solo plan is completely free with no time limits or hidden costs. It includes everything a solo developer needs: automated builds, version control integration, artifact management, real-time logs, and email notifications.",
        },
        {
          question: "What happens if I need more concurrent builds?",
          answer:
            "For the Shogun plan, the first 3 concurrent builds are included. You can add additional concurrent builds at ₹2,399 per build per month. Use our interactive pricing calculator on the Pricing page to estimate costs based on your team's needs.",
        },
        {
          question: "Can I upgrade from Solo to Shogun?",
          answer:
            "Yes, you can upgrade at any time. Your existing projects and configurations will be preserved. Simply switch to the Shogun plan from your dashboard, and you'll immediately gain access to team features, SSO, and additional build capacity.",
        },
        {
          question: "Do you offer annual billing or discounts?",
          answer:
            "Currently, pricing is on a monthly subscription basis. For enterprise customers with specific needs or large-scale deployments, please contact our sales team for custom pricing and volume discounts.",
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
            "BuildNinja integrates with Git, GitHub, GitLab, Bitbucket, and other popular version control systems. You can configure webhooks for automatic build triggers on commits, pull requests, or scheduled intervals.",
        },
        {
          question: "Can I deploy to multiple environments?",
          answer:
            "Yes! BuildNinja supports multi-environment deployments with environment-specific configurations. Manage separate pipelines for development, staging, and production, each with their own secrets, conditions, and deployment logic.",
        },
        {
          question: "How does agent management work?",
          answer:
            "BuildNinja includes comprehensive agent management capabilities. You can authorize agents, enable/disable them, refresh configurations, reset status, and filter by operating system or status. Agents can run on Windows, Linux, or macOS, and you control which builds run on which agents based on requirements.",
        },
        {
          question: "Does BuildNinja support Kubernetes?",
          answer:
            "Yes! BuildNinja supports containerized deployments on Kubernetes for scalable operations. You can deploy build agents as pods, manage them through the dashboard, and leverage Kubernetes' orchestration capabilities for your CI/CD workflows.",
        },
        {
          question: "What kind of notifications does BuildNinja send?",
          answer:
            "BuildNinja includes a comprehensive email notification system that alerts you about key events: user registrations, password resets, approval requests, build results (success/failure), and agent disconnections. Notifications are configurable via SMTP settings.",
        },
        {
          question: "Can I see real-time build logs?",
          answer:
            "Absolutely! BuildNinja provides real-time logs and interactive dashboards for monitoring builds and deployments. View live progress, filter by time ranges, set up auto-refresh, and access detailed build metrics – all from a single interface.",
        },
        {
          question: "Does BuildNinja support plugins?",
          answer:
            "Yes, BuildNinja supports plugin and integration capabilities, working seamlessly with third-party tools like Docker, Kubernetes, and various deployment platforms. Everything you need is built-in, but extensibility is available when needed.",
        },
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
            "Yes, the Shogun plan includes SSO support with multiple providers (available on the Shogun plan). This enables streamlined authentication and centralized user management for your organization.",
        },
        {
          question: "How are secrets and credentials managed?",
          answer:
            "BuildNinja provides secure secret management for environment-specific credentials. Secrets are encrypted at rest and can be scoped to specific environments, preventing accidental exposure across development, staging, and production.",
        },
        {
          question: "Can I control user permissions and access?",
          answer:
            "Yes, BuildNinja includes role-based access control. The Shogun plan supports up to 10 users, and you can manage permissions, project access, and approval workflows through the dashboard.",
        },
        {
          question: "Is BuildNinja compliant with industry standards?",
          answer:
            "Since BuildNinja is deployed on your infrastructure, compliance depends on your deployment environment. We provide the tools for audit logs, access controls, and secure configurations to help you meet your specific compliance requirements (SOC 2, ISO 27001, GDPR, etc.).",
        },
      ],
    },
    {
      catrgory: "",
      faqs: [
        {
          question: "What support is included?",
          answer:
            "The Solo plan includes community support through our forums and comprehensive documentation. The Shogun plan includes priority email support with faster response times and dedicated assistance from our engineering team.",
        },
        {
          question: "Where can I find documentation?",
          answer:
            "Comprehensive documentation is available on our website, including installation guides, configuration references, API documentation, and best practices. The docs cover all features and include practical examples.",
        },
        {
          question: "What if I encounter a bug or issue?",
          answer:
            "Report issues through our support channels. Solo plan users can post in the community forum, while Shogun plan users get priority support via email. We actively monitor all channels and provide regular updates and patches.",
        },
        {
          question: "Do you offer onboarding or training?",
          answer:
            "Yes! We provide setup assistance documentation, video tutorials, and configuration examples. Enterprise customers can request dedicated onboarding sessions and custom training for their teams.",
        },
        {
          question: "Can I get help with custom integrations?",
          answer:
            "Absolutely! While BuildNinja works with most standard tools out of the box, our support team can help with custom integrations. Enterprise customers with the Shogun plan receive priority assistance for complex deployment scenarios.",
        },
        {
          question: "How often is BuildNinja updated?",
          answer:
            "We release regular updates with new features, performance improvements, and security patches. Updates are announced via email, and you can choose when to upgrade based on your release schedule.",
        },
      ],
    },
  ],
};

export const fourthSectionText = {
  title: "Still Need Help?",
  subTitle: "Explore additional resources or get in touch with our team",
  cards: [
    {icon: paths.icons.documentWhite,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      buttonText: "View Docs",
       link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`
    },
    {icon:paths.icons.emailWhite,
      title: "Email Support",
      description: "Get help from our support team",
      buttonText: "Contact Us",
      router: "/support"
    },
    {
      icon: paths.icons.searchWhite,
      title: "Search Docs",
      description: "Find answers quickly in our knowledge base",
      buttonText: "Search",
       link: `${process.env.NEXT_PUBLIC_DOCUMENTATION_URL}/docs/overview`
    },
  ],
};

export const fifthSectionText = {
  title: "Ready to streamline your deployments?",
  description: "Start your free trial and experience CI/CD that just works.",
  button1: "Start Free Trial",
  button2: "Request Demo",
};