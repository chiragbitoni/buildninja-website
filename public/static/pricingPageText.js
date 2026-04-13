import { paths } from "./paths";

export const heroSectionText = {
  title: "CI/CD That Just Works – Pick Your Plan",
  subtitle:
    "Transparent pricing designed for teams who want to deploy, not debug. Every feature built to solve real problems.",
  toggleSwitch: {
    option1: "Monthly",
    option2: "Annual",
    savings: "Save up to ₹1,13,989/year",
  },
};

// ===========================
// 🇮🇳 INDIA PRICING STRUCTURE
// ===========================
export const secondSectionTextIndia = {
  monthCards: {
    soloEditionCard: {
      highlight: "START WITH CONFIDENCE",
      edition: "Free Edition",
      price: "Free Forever",
      priceDescription: "Forever free, no credit card required",
      ideal:
        "Ideal for: Individual developers and small growing teams (up to 10 users)",
      list1: [
        "Up to 10 users",
        "Unlimited build agents - Connect as many machines as you want",
        "Execute up to 3 builds concurrently - Run 3 builds at the same time",
      ],
      listCard: {
        title: "Additional concurrent build slot",
        list: [
          { price: "Scalable as you grow" },
          { price: "Contact us for additional slots" },
        ],
      },
      list2: [
        "Docker support included",
        "30-day build history",
        "Up to 100 projects",
        "Up to 100 configurations",
        "Standard Email support",
      ],
      buttonText: "Get Started",
      buttonText2: "Schedule a Demo",
      ctaText: "No strings attached. Free Edition stays free forever.",
    },
  },
};


export const secondSectionEnterpriseCardText = {
  highlight: "ENTERPRISE",
  title: "Enterprise Edition",
  price: "Custom",
  ideal: "Ideal for: Large organizations and complex deployment environments",
  description:
    "Need custom deployment, dedicated support, SLA guarantees, or special compliance requirements? We'll create a tailored solution.",
  list1: [
    "Unlimited users & projects",
    "Unlimited concurrent builds",
    "Unlimited build agents",
    "Perpetual build history",
  ],
  list2: [
    "Dedicated 24/7 priority support",
    "Custom deployment (K8s / Air-gapped)",
    "Professional migration assistance",
    "Custom SLAs & compliance support",
    "All 5 SSO providers included",
  ],
  buttonText: "Contact Support",
  buttonText2: "Schedule a Demo",
  responseTimeText: "Response within 24 hours",
};
// ===========================
//  WORLDWIDE PRICING STRUCTURE
// ===========================
export const secondSectionTextGlobal = {
  monthCards: {
    soloEditionCard: {
      highlight: "START WITH CONFIDENCE",
      edition: "Free Edition",
      price: "Free Forever",
      priceDescription: "Forever free, no credit card required",
      ideal:
        "Ideal for: Individual developers and small growing teams (up to 10 users)",
      list1: [
        "Up to 10 users",
        "Unlimited build agents - Connect as many machines as you want",
        "Execute up to 3 builds concurrently - Run 3 builds at the same time",
      ],
      listCard: {
        title: "Additional concurrent build slot",
        list: [
          { price: "Scalable as you grow" },
          { price: "Contact us for additional slots" },
        ],
      },
      list2: [
        "Docker support included",
        "30-day build history",
        "Up to 100 projects",
        "Up to 100 configurations",
        "Standard Email support",],
      buttonText: "Get Started",
      buttonText2: "Schedule a Demo",
      ctaText: "No strings attached. Free Edition stays free forever.",
    },
  },
};


// pricingFourthText.js

export const pricingFourthText = {
  title:
    "Pricing That Makes Sense <span class='pricingFourthpinkColorText'>as You Grow</span>",
  subtitle: "Simple, transparent, and predictable for teams of any size.",

  problemTitle: "The Problem",
  problemTag: "Legacy Pricing",
  problemDesc:
    "Most CI/CD tools <strong>punish team growth</strong> with escalating per-seat costs. You're forced to choose between expensive cloud platforms that bill per user or complex self-hosted setups that drain DevOps time. Either way, <strong>costs become unpredictable.</strong>",

  cards: [
    {
      icon: paths.icons.usersPink,
      alt: "BuildNinja Pink Users Icon",
      title: "No Per-Seat Taxation",
      tag: "Scale Freely",
      desc: "Pay for your infrastructure scale, not your team size. Add 10 developers or 100, your BuildNinja cost stays the same.",
      link: "Learn more →",
      id: "pricing-for-teams",
    },
    {
      icon: paths.icons.serverPink,
      alt: "BuildNinja Pink Server Icon",
      title: "Self-Hosted Freedom",
      tag: "Full Control",
      desc: "Run on your infrastructure with complete control. No vendor lock-in, no data sovereignty concerns, no surprise cloud bills.",
      link: "Learn more →",
      id: "infrastructure-needed",
    },
    {
      icon: paths.icons.calculatorPink,
      alt: "BuildNinja Pink Calculator Icon",
      title: "Simple, Transparent Pricing",
      tag: "Predictable",
      // region-based text will override this in Fourth.js
      desc: "Free for up to 3 concurrent builds. Simple, transparent, and predictable for teams of any size.",
      link: "Learn more →",
      id: "what-is-concurrent-agent",
    },
    {
      icon: paths.icons.headphonesPink,
      alt: "BuildNinja Pink Headphone Icon",
      title: "Professional Support Included",
      tag: "Partnership",
      desc: "Annual, 2-year, and 3-year plans include free migration assistance for 3 projects,4 hours of professional services, not upsells, but true partnership.",
      link: "Learn more →",
      id: "professional-services",
    },
    {
      icon: paths.icons.syncPink,
      alt: "BuildNinja Pink Sync Icon",
      title: "Risk-Free Switching",
      tag: "Migration Assistance",
      desc: "We make it easy to leave your current platform. Free migration help for 10 projects, license credits for unused time, and professional onboarding. We remove barriers that keep teams stuck on expensive tools.",
      badges: ["Migration Support", "License Credits", "Zero Risk"],
      // id: ""
    },
  ],
};

// pricingFourthText.js

export const pricingFifthText = {
  title: "Every Feature Built to Solve Real Problems",

  columns: [
    {
      title: "Core Platform Features",
      sections: [
        {
          heading: "Self-Hosted Deployment & Data Control",
          list: [
            "Run on your infrastructure",
            "Complete data sovereignty",
            "No cloud vendor lock-in",
            "Build Parameters for secure credential storage",
            "Project & configuration-level secrets",
          ],
        },
        {
          heading: "Docker Container Support",
          list: [
            "Deploy in minutes with docker pull",
            "Self-contained deployment",
            "Multi-platform agents (Windows, Linux, & MacOS)",
            "Execute commands on remote servers via SSH Runner",
          ],
        },
        {
          heading: "Version Control Integration",
          list: [
            "Native Git support (no plugins required)",
            "Intelligent repository caching for faster builds",
            "GitHub, GitLab, Bitbucket support",
            "No vendor lock-in",
            "Works with your existing workflow",
          ],
        },
        {
          heading: "Monitoring & Analytics",
          list: [
            "Real-time build visibility",
            "Detailed execution logs",
            "Build duration trends",
          ],
        },
        {
          heading: "Smart Notifications & Email Templates",
          list: [
            "Customizable email templates",
            "Brand your build notifications",
            "Customizable triggers",
            "Multi-recipient support",
          ],
        },
      ],
    },
    {
      title: "Enterprise Security Features",
      sections: [
        {
          heading: "User Administration",
          list: [
            "Approve or reject user registration requests",
            "Block/unblock users and reset passwords",
            "Export logs for compliance and monitoring",
            "Role-Based Access Control (RBAC)",
            "Granular project & system-level permissions",
          ],
        },
        {
          heading: "SSO Integrations",
          list: [
            "Free: 1 provider (choose your primary)",
          ],
        },
        {
          heading: "Data Sovereignty",
          list: [
            "Self-hosted deployment",
            "Your infrastructure, your control",
            "No data leaving your network",
          ],
        },
      ],
    },
  ],
};

// SixthText.js
export const pricingSixthText = {
  headline: "Early Adopter Program for first 100 Customers",
  subheadline: "LIMITED TIME",
  features: [
    { title: "Price lock guarantee for multi-year plans" },
    { title: "Priority feature requests, influence our roadmap" },
    { title: "Direct access to BuildNinja engineering team" },
    { title: "Founding customer recognition" },
  ],
  spotsRemaining: "Spots remaining",
  footer:
    "Lock in today's pricing forever. Join engineering teams building with BuildNinja from day one.",
};

export const pricingSeventhText = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "How do I scale beyond 3 concurrent builds?",
      answer:
        "The Free Edition includes 3 concurrent build slots. If your team needs more capacity, please contact us for Enterprise orchestration. We provide tailored licensing for large-scale build environments.",
    },
    {
      question: "Is the Free Edition really free forever?",
      answer:
        "Yes. No credit card, no time limit, no surprise bills. Up to 3 concurrent builds forever.",
    },
    {
      question: "What's the difference between build agents and concurrent builds?",
      answer:
        "Build agents are the machines you connect (unlimited). Concurrent builds are the number of builds running at the exact same time (3 included for free, unlimited for Enterprise).",
    },
    {
      question: "Can I try before committing to Enterprise?",
      answer:
        "Yes! The Free Edition includes all core functionality so you can start immediately. For specialized enterprise requirements, contact our team for a personalized demonstration.",
    },
    {
      question: "Can I cancel my Enterprise plan?",
      answer:
        "Yes. Since BuildNinja is self-hosted, you always maintain full control of your infrastructure and data, even if you decide to stop using our premium orchestration services.",
    },
  ],
  button: "View Complete FAQ →",
};
export const pricingEighthText = {
  title: "DevOps Made Simple. Get Started.",
  subtitle:
    "Join engineering teams who’ve eliminated per-seat cost anxiety and deployed confidently with BuildNinja. <br/>Get your CI/CD build process running in under 5 minutes.",
  enterprise: {
    title: "Enterprise Edition",
    description: "Built for teams requiring high availability, custom SLAs, and dedicated priority support.",
    buttonText: "Contact Support",
  },
  free: {
    title: "Free Edition",
    buttonText: "Get Started",
  },
  features: [
    "Free forever - Free Edition",
    "Enterprise Grade Scale",
    "Full Platform Access",
    "5-minute setup",
    "Self-hosted control",
    "Direct support",
  ],
};
