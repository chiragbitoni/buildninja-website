import { paths } from "./paths";

export const heroSectionText = {
  title: "CI/CD That Just Works – Pick Your Plan",
  subtitle:
    "Transparent pricing designed for teams who want to deploy, not debug. Every feature built to solve real problems.",
  toggleSwitch: {
    option1: "Free",
    option2: "Enterprise",
    savings: "Predictable Infrastructure Costs",
  },
};

// ===========================
// 🇮🇳 INDIA PRICING STRUCTURE
// ===========================
export const secondSectionTextIndia = {
  monthCards: {
    soloEditionCard: {
      highlight: "FREE",
      edition: "Growth Edition",
      price: "",
      priceDescription: "No credit card required",
      ideal:
        "Ideal for: Teams of all sizes, from startups to enterprises",
      list1: [
        "Unlimited users - No per-seat costs as you grow",
        "Unlimited projects - No artificial limits",
        "Unlimited configurations - Scale without restrictions",
      ],
      list2: [
        "Unlimited concurrent builds - Run as many as your infra supports",
        "Unlimited build agents - Connect as many machines as you want",
        "Perpetual build history - Complete audit trail forever",
        "Microsoft, GitHub, GitLab, Bitbucket, and Google",
        "Email support - Direct engineering team access",
      ],
      buttonText: "Get Started",
      buttonText2: "Schedule a Demo",
      ctaText: "No strings attached. BuildNinja Growth Edition.",
    },
  },
};


export const secondSectionEnterpriseCardText = {
  highlight: "ENTERPRISE",
  title: "Enterprise Customers with Special Needs?",
  price: "",
  ideal: "Ideal for: Large organizations and complex deployment environments",
  description:
    "We'll create a tailored solution that fits your organization's unique needs, including custom architecture and concierge onboarding.",
  list1: [
    "Custom Deployment (K8s / Air-gapped)",
    "Dedicated 24/7 Email Support",
    "Tailored Organizational SLAs",
  ],
  list2: [
    "Special Compliance Requirements",
    "Concierge Onboarding & Migration",
    "Advanced Strategic User Management",
  ],
  buttonText: "Contact Us",
  responseTimeText: "Response within 24 hours",
};
// ===========================
//  WORLDWIDE PRICING STRUCTURE
// ===========================
export const secondSectionTextGlobal = {
  monthCards: {
    soloEditionCard: {
      highlight: "FREE",
      edition: "Growth Edition",
      price: "",
      priceDescription: "No credit card required",
      ideal:
        "Ideal for: Teams of all sizes, from startups to enterprises",
      list1: [
        "Unlimited users - No per-seat costs as you grow",
        "Unlimited projects - No artificial limits",
        "Unlimited configurations - Scale without restrictions",
      ],
      list2: [
        "Unlimited concurrent builds - Run as many as your infra supports",
        "Unlimited build agents - Connect as many machines as you want",
        "Perpetual build history - Complete audit trail forever",
        "All 5 SSO providers - Microsoft, GitHub, GitLab, Bitbucket, and Google",
        "Email support - Direct engineering team access",
      ],
      buttonText: "Get Your Free Key",
      buttonText2: "Schedule a Demo",
      ctaText: "No strings attached. BuildNinja Growth Edition.",
    },
  },
};


// pricingFourthText.js

export const pricingFourthText = {
  title:
    "Pricing That Makes Sense <span class='pricingFourthpinkColorText'>as You Grow</span>",
  subtitle: "Simple, transparent, and predictable for teams of any size.",

  problemTitle: "The Problem",
  problemTag: "LEGACY PRICING",
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
      badges: [],
      // id: ""
      icon: paths.icons.calculatorPink,
      alt: "BuildNinja Pink Calculator Icon",
      title: "Simple, Transparent Pricing",
      tag: "Predictable",
      // region-based text will override this in Fourth.js
      desc: "Unlimited users, projects, and configurations. Scale your build orchestration as much as your infrastructure allows with zero per-seat costs.",
      link: "Learn more →",
      id: "what-is-concurrent-agent",
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
            "Included for all: Microsoft, GitHub, GitLab, Bitbucket, and Google",
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
    { title: "Price lock guarantee for your orchestration plan" },
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
      question: "How do I scale my build capacity?",
      answer:
        "The Growth Edition has no artificial limits on concurrent builds. You can run as many builds simultaneously as your infrastructure supports. We don't throttle your scale.",
    },
    {
      question: "Is the Growth Edition really free?",
      answer:
        "Yes. No credit card, no time limit, no surprise bills. BuildNinja Growth Edition gives you unlimited access to the core platform.",
    },
    {
      question: "What's the difference between build agents and concurrent builds?",
      answer:
        "Build agents are the machines you connect. Concurrent builds are the number of builds running at the exact same time. Both are unlimited in the BuildNinja Growth Edition.",
    },
    {
      question: "Can I try before committing to Enterprise?",
      answer:
        "Yes! The Growth Edition includes all core functionality so you can start immediately. For specialized enterprise requirements, contact our team for a personalized demonstration.",
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
    buttonText: "Contact Us",
  },
  free: {
    title: "Growth Edition",
    description: "Deploy your own CI/CD in minutes. No credit card, no seat limits, no expiry - free.",
    buttonText: "Get Your Free Key",
  },
  features: [
    "Growth Edition",
    "Full Platform Access",
    "5-minute setup",
    "Self-hosted control",
    "Direct support",
  ],
};


