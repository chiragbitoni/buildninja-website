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
      price: "FREE",
      priceDescription: "Forever free, no credit card required",
      ideal: "Ideal for: Individual developers and small growing teams (up to 10 users)",
      list1: [
        "Up to 10 users",
        "3 concurrent agents — Run 3 builds simultaneously",
        "Unlimited build agents — Connect as many machines as you want",
      ],
      listCard: {
        title: "Additional concurrent capacity (per agent)",
        list: [
          "₹2,199/month",
          "₹16,999/year (save ₹9,389)",
          "₹26,999/2-year (save ₹24,777)",
          "₹37,999/3-year (save ₹39,565)",
        ],
      },
      list2: [
        "Docker support included",
        "30-day build history",
        "Up to 100 projects",
        "Up to 100 configurations",
        "Community support",
        "1 SSO provider integration (choose: Microsoft, GitHub, GitLab, Bitbucket, or Google)",
        "30-day grace period to test everything",
      ],
      buttonText: "Download Free",
      ctaText: "No strings attached. Solo Edition stays free forever.",
    },

    shogunEditionCard: {
      highlight: "MOST POPULAR",
      edition: "Shogun Edition",
      price: "₹16,999/month",
      ideal:
        "Ideal for: Enterprise organizations and growing teams who need unlimited scale without per-seat cost anxiety",
      list: [
        "<strong>Unlimited users</strong> — No per-seat costs as you grow",
        "<strong>Unlimited projects</strong> — No artificial limits",
        "<strong>Unlimited configurations</strong> — Scale without restrictions",
        "<strong>Unlimited concurrent agents</strong> — Run as many builds simultaneously as your infrastructure supports",
        "<strong>Unlimited build agents</strong> — Connect as many machines as you want",
        "<strong>Perpetual build history</strong> — Complete audit trail forever",
        "<strong>All 5 SSO providers</strong> — Microsoft, GitHub, GitLab, Bitbucket, and Google",
        "<strong>Priority business support</strong> — Direct engineering team access",
      ],
      buttonText: "Start 30-Day Trial",
      ctaText: "Full Shogun access during trial. No credit card required.",
    },
  },

  // Annual Plan
  annualCard: {
    highlight: "MOST POPULAR",
    edition: "Shogun Edition",
    price: "₹1,36,999/year",
    description: "(₹11,416/month equivalent)",
    savings: "SAVE ₹67,989/year",
    ideal: "Ideal for: Enterprise organizations and growing teams who need unlimited scale without per-seat cost anxiety",
    list: [
      "<strong>Unlimited users</strong> — No per-seat costs as you grow",
      "<strong>Unlimited projects</strong> — No artificial limits",
      "<strong>Unlimited configurations</strong> — Scale without restrictions",
      "<strong>Unlimited concurrent agents</strong> — Run as many builds simultaneously as your infrastructure supports",
      "<strong>Unlimited build agents</strong> — Connect as many machines as you want",
      "<strong>Perpetual build history</strong> — Complete audit trail forever",
      "<strong>All 5 SSO providers</strong> — Microsoft, GitHub, GitLab, Bitbucket, and Google",
      "<strong>Priority business support</strong> — Direct engineering team access",
    ],
    buttonText: "Start 30-Day Trial",
    ctaText: "Full Shogun access during trial. No credit card required.",
  },

  // Multi-year plans
  multiYearCards: {
    twoYear: {
      highlight: "BEST VALUE",
      edition: "Shogun Edition — 2-Year Upfront",
      price: "₹2,19,999 (₹9,166/month)",
      description: "Billed upfront for 2 years",
      savings: "SAVE ₹1,04,989/year",
      buttonText: "Start 30-Day Trial",
      ctaText: "Full Shogun access during trial. No credit card required.",
    },
    threeYear: {
      highlight: "MAXIMUM SAVINGS",
      edition: "Shogun Edition — 3-Year Upfront",
      price: "₹2,74,999 (₹7,638/month)",
      description: "Billed upfront for 3 years",
      savings: "SAVE ₹1,13,989/year",
      buttonText: "Start 30-Day Trial",
      ctaText: "Full Shogun access during trial. No credit card required.",
    },
  },
};

// ===========================
// 🌍 WORLDWIDE PRICING STRUCTURE
// ===========================
export const secondSectionTextGlobal = {
  monthCards: {
    soloEditionCard: {
      highlight: "START WITH CONFIDENCE",
      edition: "Solo Edition",
      price: "FREE",
      priceDescription: "Forever free, no credit card required",
      ideal: "Ideal for: Individual developers and small growing teams (up to 10 users)",
      list1: [
        "Up to 10 users",
        "3 concurrent agents — Run 3 builds simultaneously",
        "Unlimited build agents — Connect as many machines as you want",
      ],
      listCard: {
        title: "Additional concurrent capacity (per agent)",
        list: [
          "$29/month",
          "$249/year (save $99)",
          "$429/2-year (save $269)",
          "$599/3-year (save $449)",
        ],
      },
      list2: [
        "Docker support included",
        "30-day build history",
        "Up to 100 projects",
        "Up to 100 configurations",
        "Community support",
        "1 SSO provider integration (choose: Microsoft, GitHub, GitLab, Bitbucket, or Google)",
        "30-day grace period to test everything",
      ],
      buttonText: "Download Free",
      ctaText: "No strings attached. Solo Edition stays free forever.",
    },

    shogunEditionCard: {
      highlight: "MOST POPULAR",
      edition: "Shogun Edition",
      price: "$199/month",
      ideal:
        "Ideal for: Enterprise organizations and growing teams who need unlimited scale without per-seat cost anxiety",
      list: [
        "<strong>Unlimited users</strong> — No per-seat costs as you grow",
        "<strong>Unlimited projects</strong> — No artificial limits",
        "<strong>Unlimited configurations</strong> — Scale without restrictions",
        "<strong>Unlimited concurrent agents</strong> — Run as many builds simultaneously as your infrastructure supports",
        "<strong>Unlimited build agents</strong> — Connect as many machines as you want",
        "<strong>Perpetual build history</strong> — Complete audit trail forever",
        "<strong>All 5 SSO providers</strong> — Microsoft, GitHub, GitLab, Bitbucket, and Google",
        "<strong>Priority business support</strong> — Direct engineering team access",
      ],
      buttonText: "Start 30-Day Trial",
      ctaText: "Full Shogun access during trial. No credit card required.",
    },
  },

  // Annual Plan
  annualCard: {
    highlight: "MOST POPULAR",
    edition: "Shogun Edition",
    price: "$2,388/year ($199/month)",
    description: "Annual billing — SAVE $592/year",
    savings: "SAVE $592/year",
    ideal: "Ideal for: Enterprise organizations and growing teams who need unlimited scale without per-seat cost anxiety",
    list: [
      "<strong>Unlimited users</strong> — No per-seat costs as you grow",
      "<strong>Unlimited projects</strong> — No artificial limits",
      "<strong>Unlimited configurations</strong> — Scale without restrictions",
      "<strong>Unlimited concurrent agents</strong> — Run as many builds simultaneously as your infrastructure supports",
      "<strong>Unlimited build agents</strong> — Connect as many machines as you want",
      "<strong>Perpetual build history</strong> — Complete audit trail forever",
      "<strong>All 5 SSO providers</strong> — Microsoft, GitHub, GitLab, Bitbucket, and Google",
      "<strong>Priority business support</strong> — Direct engineering team access",
    ],
    buttonText: "Start 30-Day Trial",
    ctaText: "Full Shogun access during trial. No credit card required.",
  },

  // Multi-year Plans
  multiYearCards: {
    twoYear: {
      highlight: "BEST VALUE",
      edition: "Shogun Edition — 2-Year Upfront",
      price: "$4,200 ($175/month)",
      description: "Billed upfront for 2 years",
      savings: "SAVE $1,272/year",
      buttonText: "Start 30-Day Trial",
      ctaText: "Full Shogun access during trial. No credit card required.",
    },
    threeYear: {
      highlight: "MAXIMUM SAVINGS",
      edition: "Shogun Edition — 3-Year Upfront",
      price: "$5,700 ($158/month)",
      description: "Billed upfront for 3 years",
      savings: "SAVE $1,764/year",
      buttonText: "Start 30-Day Trial",
      ctaText: "Full Shogun access during trial. No credit card required.",
    },
  },
};


// pricingFourthText.js

export const pricingFourthText = {
  title: "Pricing That Makes Sense <span class='pricingFourthpinkColorText'>as You Grow</span>",
  subtitle: "Simple, transparent, and predictable for teams of any size.",

  problemTitle: "The Problem",
  problemTag: "Legacy Pricing",
  problemDesc:
    "Most CI/CD tools <strong>punish team growth</strong> with escalating per-seat costs. You're forced to choose between expensive cloud platforms that bill per user or complex self-hosted setups that drain DevOps time. Either way, <strong>costs become unpredictable.</strong>",

  cards: [
    {
      icon: paths.icons.usersPink,
      title: "No Per-Seat Taxation",
      tag: "Scale Freely",
      desc:
        "Pay for your infrastructure scale, not your team size. Add 10 developers or 100, your BuildNinja cost stays the same.",
      link: "Learn more →",
    },
    {
      icon: paths.icons.serverPink,
      title: "Self-Hosted Freedom",
      tag: "Full Control",
      desc:
        "Run on your infrastructure with complete control. No vendor lock-in, no data sovereignty concerns, no surprise cloud bills.",
      link: "Learn more →",
    },
    {
      icon: paths.icons.calculatorPink,
      title: "Simple, Transparent Pricing",
      tag: "Predictable",
      // region-based text will override this in Fourth.js
      desc:
        "Free up to 3 concurrent agents. ₹16,999/month unlimited users beyond that. No hidden costs, no complex calculations.",
      link: "Learn more →",
    },
    {
      icon: paths.icons.headphonesPink,
      title: "Professional Support Included",
      tag: "Partnership",
      desc:
        "Annual, 2-year, and 3-year plans include free migration assistance for 10 projects, 20 hours of professional services, and license buyout credits, not upsells, but true partnership.",
      link: "Learn more →",
    },
    {
      icon: paths.icons.syncPink,
      title: "Risk-Free Switching",
      tag: "30-Day Demo",
      desc:
        "We make it easy to leave your current platform. Free migration help for 10 projects, license credits for unused time, and a 30-day demo to validate everything works. We remove barriers that keep teams stuck on expensive tools.",
      badges: ["Migration Support", "License Credits", "Zero Risk Trial"],
    },
  ],
};





















export const thirdSectionText = {
  heading: "Feature Comparision",
  tableHeaders: ["Feature", "Solo Edition", "Shogun Edition"],
  tableData: [
    { feature: "Monthly Price", solo: "FREE", shogun: "₹11,416" },
    { feature: "Annual Price", solo: "FREE", shogun: "₹11,416" },
    { feature: "Users", solo: "Up to 10", shogun: "Unlimited" },
    { feature: "Build Agents", solo: "Unlimited", shogun: "Unlimited" },
    { feature: "Concurrent Agents", solo: "3", shogun: "Unlimited" },
    { feature: "Additional Agents", solo: "₹2,199/month", shogun: "Included" },
    { feature: "Projects", solo: "Up to 100", shogun: "Unlimited" },
    { feature: "Build History", solo: "30 days", shogun: "Perpetual" },
    {
      feature: "SSO Integrations",
      solo: "1 provider",
      shogun: "All 5 providers",
    },
    {
      feature: "Support",
      solo: "Community",
      shogun: "Priority business hours",
    },
    {
      feature: "Migration Help",
      solo: "Self-service",
      shogun: "Free assistance (annual)",
    },
    {
      feature: "Professional Services",
      solo: "-",
      shogun: "20 hours (annual)",
    },
    { feature: "License Buyout", solo: "-", shogun: "25% credit (annual)" },
  ],
};

export const fourthSectionText = {
  title: "All Features Included",
  columns: [
    {
      heading: "Core Platform",
      features: [
        "Self-hosted deployment & data control",
        "Docker container support",
        "Multi-platform agents",
        "GitHub/GitLab/Bitbucket integration",
        "Monitoring & analytics",
        "Email/Slack/Teams notifications",
      ],
    },
    {
      heading: "Enterprise Security",
      features: [
        "Role-based access control",
        "SSO integrations",
        "Audit logs",
        "Data sovereignty",
      ],
    },
  ],
};

export const fifthSectionText = {
  highlight: "Limited Time: First 1,000 Customers",
  heading: "Early Adopter Program",
  list: [
    "Price lock guarantee for multi-year plans",
    "Priority feature requests",
    "Direct access to BuildNinja engineering team",
  ],
  progressBarHeading: "Spots remaining:"
};

export const sixthSectionText = {
  title: "Licensing & Evaluation",
  card1Title: "30-Day Grace Period",
  card1Text: "Download immediately, no license key for first 30 days",
  card2Title: "Try Shogun Risk-Free",
  card2Text: "Full access to all Shogun features during trial period",
  card3Title: "Try Shogun Risk-Free",
  card3Text: "Solo Edition stays free forever, no strings attached",
}

export const seventhSectionText = {
  title: "Ready to stop wasting time on broken CI/CD?",
  button1: "Download Free (Solo Edition)",
  button2: "Start 30 Day Trial (Shogun Edition)",
  description: "Risk-free promise: 30-day evaluation, cancel anytime, data export guaranteed"
}