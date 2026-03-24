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
      edition: "Solo Edition",
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
          { price: "₹2,199/month" },
          { price: "₹16,999/year ", saving: "(SAVE 36%)" },
          { price: "₹25,999/2-year ", saving: "(SAVE 51%)" },
          { price: "₹34,999/3-year ", saving: "(SAVE 56%)" },
        ],
      },
      list2: [
        "Docker support included",
        "30-day build history",
        "Up to 100 projects",
        "Up to 100 configurations",
        "Standard Email support",
        "1 SSO provider integration (choose: Microsoft, GitHub, GitLab, Bitbucket, or Google)",
      ],
      buttonText: "Get Your Free Key",
      buttonText2: "Start with Trial License",
      ctaText: "No strings attached. Solo Edition stays free forever.",
    },

    shogunEditionCard: {
      highlight: "MOST POPULAR",
      edition: "Shogun Edition",
      price: "₹17,499/month",
      ideal:
        "Ideal for: Enterprise organizations and growing teams who need unlimited scale without per-seat cost anxiety",
      list: [
        "<strong>Unlimited users</strong> - No per-seat costs as you grow",
        "<strong>Unlimited projects</strong> - No artificial limits",
        "<strong>Unlimited configurations</strong> - Scale without restrictions",
        "<strong>Unlimited concurrent builds</strong> - Run as many builds simultaneously as your infrastructure supports",
        "<strong>Unlimited build agents</strong> - Connect as many machines as you want",
        "<strong>Perpetual build history</strong> - Complete audit trail forever",
        "<strong>All 5 SSO providers</strong> - Microsoft, GitHub, GitLab, Bitbucket, and Google",
        "<strong>Priority business support</strong> - Direct engineering team access",
      ],
      buttonText: "Start with Trial License",
      ctaText: "No credit card. No commitment.",
    },
  },

  // Annual Plan
  annualCard: {
    highlight: "MOST POPULAR",
    edition: "Shogun Edition",
    price: "₹1,39,999/year",
    description: "(₹11,666/month equivalent)",
    savings: "SAVE 33%",
    ideal:
      "Ideal for: Enterprise organizations and growing teams who need unlimited scale without per-seat cost anxiety",
    list: [
      "<strong>Unlimited users</strong> - No per-seat costs as you grow",
      "<strong>Unlimited projects</strong> - No artificial limits",
      "<strong>Unlimited configurations</strong> - Scale without restrictions",
      "<strong>Unlimited concurrent builds</strong> - Run as many builds simultaneously as your infrastructure supports",
      "<strong>Unlimited build agents</strong> - Connect as many machines as you want",
      "<strong>Perpetual build history</strong> - Complete audit trail forever",
      "<strong>All 5 SSO providers</strong> - Microsoft, GitHub, GitLab, Bitbucket, and Google",
      "<strong>Priority business support</strong> - Direct engineering team access",
    ],
    buttonText: "Start with Trial License",
    ctaText: "No credit card. No commitment.",
  },

  // Multi-year plans
  multiYearCards: {
    twoYear: {
      highlight: "BEST VALUE",
      edition: "Shogun Edition - 2-Year Upfront",
      price: "₹2,19,999 ",
      description: "(₹9,166/month equivalent)",
      savings: "SAVE 48%",
      buttonText: "Start with Trial License",
      ctaText: "No credit card. No commitment.",
    },
    threeYear: {
      highlight: "MAXIMUM SAVINGS",
      edition: "Shogun Edition - 3-Year Upfront",
      price: "₹2,79,999",
      description: "(₹7,777/month) equivalent",
      savings: "SAVE 56%",
      buttonText: "Start with Trial License",
      ctaText: "No credit card. No commitment.",
    },
  },
};

export const secondSectionEnterpriseCardText = {
  highlight: "ENTERPRISE",
  title: "Enterprise Customers with Special Needs?",
  description:
    "Need custom deployment, dedicated support, SLA guarantees, or special compliance requirements? We'll create a tailored solution that fits your organization's unique needs.",
  buttonText: "Contact Us for Custom Pricing",
  responseTimeText: "Response within 24 hours",
};
// ===========================
//  WORLDWIDE PRICING STRUCTURE
// ===========================
export const secondSectionTextGlobal = {
  monthCards: {
    soloEditionCard: {
      highlight: "START WITH CONFIDENCE",
      edition: "Solo Edition",
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
          { price: "$25/month" },
          { price: "$199/year ", saving: "(SAVE 34%)" },
          { price: "$299/2-year ", saving: "(SAVE 50%)" },
          { price: "$399/3-year ", saving: "(SAVE 56%)" },
        ],
      },
      list2: [
        "Docker support included",
        "30-day build history",
        "Up to 100 projects",
        "Up to 100 configurations",
        "Standard Email support",
        "Any 1 SSO provider integration (choose: Microsoft, GitHub, GitLab, Bitbucket, or Google)",
      ],
      buttonText: "Get Your Free Key",
      buttonText2: "Start with Trial License",
      ctaText: "No strings attached. Solo Edition stays free forever.",
    },

    shogunEditionCard: {
      highlight: "MOST POPULAR",
      edition: "Shogun Edition",
      price: "$199/month",
      ideal:
        "Ideal for: Enterprise organizations and growing teams who need unlimited scale without per-seat cost anxiety",
      list: [
        "<strong>Unlimited users</strong> - No per-seat costs as you grow",
        "<strong>Unlimited projects</strong> - No artificial limits",
        "<strong>Unlimited configurations</strong> - Scale without restrictions",
        "<strong>Unlimited concurrent builds</strong> - Run as many builds simultaneously as your infrastructure supports",
        "<strong>Unlimited build agents</strong> - Connect as many machines as you want",
        "<strong>Perpetual build history</strong> - Complete audit trail forever",
        "<strong>All 5 SSO providers</strong> - Microsoft, GitHub, GitLab, Bitbucket, and Google",
        "<strong>Priority business support</strong> - Direct engineering team access",
      ],
      buttonText: "Start with Trial License",
      ctaText: "No credit card. No commitment.",
    },
  },

  // Annual Plan
  annualCard: {
    highlight: "MOST POPULAR",
    edition: "Shogun Edition",
    price: "$1,599/year",
    description: "($133/month) equivalent",
    savings: "SAVE 33%",
    ideal:
      "Ideal for: Enterprise organizations and growing teams who need unlimited scale without per-seat cost anxiety",
    list: [
      "<strong>Unlimited users</strong> - No per-seat costs as you grow",
      "<strong>Unlimited projects</strong> - No artificial limits",
      "<strong>Unlimited configurations</strong> - Scale without restrictions",
      "<strong>Unlimited concurrent builds</strong> - Run as many builds simultaneously as your infrastructure supports",
      "<strong>Unlimited build agents</strong> - Connect as many machines as you want",
      "<strong>Perpetual build history</strong> - Complete audit trail forever",
      "<strong>All 5 SSO providers</strong> - Microsoft, GitHub, GitLab, Bitbucket, and Google",
      "<strong>Priority business support</strong> - Direct engineering team access",
    ],
    buttonText: "Start with Trial License",
    ctaText: "No credit card. No commitment.",
  },

  // Multi-year Plans
  multiYearCards: {
    twoYear: {
      highlight: "BEST VALUE",
      edition: "Shogun Edition - 2-Year Upfront",
      price: "$2,499",
      description: "($104/month equivalent)",
      savings: "SAVE 48%",
      buttonText: "Start with Trial License",
      ctaText: "No credit card. No commitment.",
    },
    threeYear: {
      highlight: "MAXIMUM SAVINGS",
      edition: "Shogun Edition - 3-Year Upfront",
      price: "$3,199",
      description: "($89/month equivalent)",
      savings: "SAVE 55%",
      buttonText: "Start with Trial License",
      ctaText: "No credit card. No commitment.",
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
      alt: "Grapecity Pink Users Icon",
      title: "No Per-Seat Taxation",
      tag: "Scale Freely",
      desc: "Pay for your infrastructure scale, not your team size. Add 10 developers or 100, your BuildNinja cost stays the same.",
      link: "Learn more →",
      id: "pricing-for-teams",
    },
    {
      icon: paths.icons.serverPink,
      alt: "Grapecity Pink Server Icon",
      title: "Self-Hosted Freedom",
      tag: "Full Control",
      desc: "Run on your infrastructure with complete control. No vendor lock-in, no data sovereignty concerns, no surprise cloud bills.",
      link: "Learn more →",
      id: "infrastructure-needed",
    },
    {
      icon: paths.icons.calculatorPink,
      alt: "Grapecity Pink Calculator Icon",
      title: "Simple, Transparent Pricing",
      tag: "Predictable",
      // region-based text will override this in Fourth.js
      desc: "Free up to 3 concurrent builds. ₹17,499/month unlimited users beyond that. No hidden costs, no complex calculations.",
      link: "Learn more →",
      id: "what-is-concurrent-agent",
    },
    {
      icon: paths.icons.headphonesPink,
      alt: "Grapecity Pink Headphone Icon",
      title: "Professional Support Included",
      tag: "Partnership",
      desc: "Annual, 2-year, and 3-year plans include free migration assistance for 3 projects,4 hours of professional services, not upsells, but true partnership.",
      link: "Learn more →",
      id: "professional-services",
    },
    {
      icon: paths.icons.syncPink,
      alt: "Grapecity Pink Sync Icon",
      title: "Risk-Free Switching",
      tag: "30-Day Demo",
      desc: "We make it easy to leave your current platform. Free migration help for 10 projects, license credits for unused time, and a 30-day demo to validate everything works. We remove barriers that keep teams stuck on expensive tools.",
      badges: ["Migration Support", "License Credits", "Zero Risk Trial"],
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
            "Solo: 1 provider (choose your primary)",
            "Shogun: All 5 providers (Microsoft, <br/>Azure AD, Google, GitHub, GitLab)",
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
  india: {
    title: "Quick FAQ",
    faqs: [
      {
        question: "What happens when my team grows?",
        answer:
          "Nothing to your BuildNinja price. Add 10 or 100 developers, still ₹17,499/month for unlimited users.",
      },
      {
        question: "Is the free Solo Edition really free forever?",
        answer:
          "Yes. No credit card, no time limit, no surprise bills. Up to 10 users with 3 concurrent builds forever.",
      },
      {
        question:
          "What's the difference between build agents and concurrent builds?",
        answer:
          "Build agents = machines you connect (unlimited). Concurrent builds = builds running at the same time (3 in Solo, unlimited in Shogun).",
      },
      {
        question: "Can I try before buying?",
        answer:
          "Yes! All new users get a 30-day trial license that supports up to 10 users, 10 projects, and 3 concurrent builds. No credit card required.",
      },
      {
        question: "What if I need to cancel?",
        answer:
          "Cancel anytime. You keep full control of your self-hosted setup and all your data.",
      },
    ],
    button: "View Complete FAQ →",
  },

  global: {
    title: "Quick FAQ",
    faqs: [
      {
        question: "What happens when my team grows?",
        answer:
          "Nothing to your BuildNinja price. Add 10 or 100 developers, still $199/month for unlimited users.",
      },
      {
        question: "Is the free Solo Edition really free forever?",
        answer:
          "Yes. No credit card, no time limit, no surprise bills. Up to 10 users with 3 concurrent builds forever.",
      },
      {
        question:
          "What's the difference between build agents and concurrent builds?",
        answer:
          "Build agents = machines you connect (unlimited). Concurrent builds = builds running at the same time (3 in Solo, unlimited in Shogun).",
      },
      {
        question: "Can I try before buying?",
        answer:
          "Yes! All new users get a 30-day trial license that supports up to 10 users, 10 projects, and 3 concurrent builds. No credit card required.",
      },
      {
        question: "What if I need to cancel?",
        answer:
          "Cancel anytime. You keep full control of your self-hosted setup and all your data.",
      },
    ],
    button: "View Complete FAQ →",
  },
};
export const pricingEighthText = {
  title: "Stop Paying Per-Seat. Start Shipping Code.",
  subtitle:
    "Join engineering teams who’ve eliminated per-seat cost anxiety and deployed confidently with BuildNinja. <br/>Get your CI/CD build process running in under 5 minutes.",
  solo: {
    title: "Solo Edition",
    description: "No strings attached. Solo Edition stays free forever.",
    buttonText: "Get Your Free Key",
  },
  shogun: {
    title: "Shogun Edition",
    description: "No credit card. No commitment.",
    buttonText: "Start with Trial License",
  },
  features: [
    "Free forever - Solo Edition",
    "₹17,499/month unlimited",
    " 30-day trial license",
    "5-minute setup",
    "Self-hosted control",
    "Direct support",
  ],
};
