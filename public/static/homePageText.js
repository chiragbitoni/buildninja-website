import { paths } from "./paths";

export const heroSectionText = {
  title1: "CI/CD That Just Works",
  title2: "Out of the Box",
  subtitle:
    "Stop wrestling with complex deployment pipelines. BuildNinja gives you production-ready CI/CD in minutes, not months. Deploy with confidence, scale with ease.",
  primaryButton: "Start Your 30–Day Free Trial",
  secondaryButton: "See the 5-Minute Demo",
};

export const secondSectionText = {
  title1: "Everything You Need to",
  title2: "Ship Faster",
  subtitle:
    "Powerful features designed to streamline your development workflow",
  featuresCard: [
    {
      title: "Build History",
      desc: "View and manage past builds, check statuses, and analyze duration.",
      icon: paths.icons.buildHistory,
      img: "/resources/Home/SecondSectionImages/image2.png",
      hover: "Click to preview ",
    },
    {
      title: "Agent Management",
      desc: "Monitor and manage your build agents, including activity status and last communication.",
      icon: paths.icons.agentManagement,
      img: "/resources/Home/SecondSectionImages/image2.png",
      hover: "Click to preview ",
    },
    {
      title: "Notifications",
      desc: "Set up email notifications for build success, failure, or other triggers.",
      icon: paths.icons.notification,
      img: "/resources/Home/SecondSectionImages/image2.png",
      hover: "Click to preview ",
    },
    {
      title: "Configuration Details",
      desc: "Access and modify project configurations easily — from VCS settings to artifacts.",
      icon: paths.icons.configurationDetails,
      img: "/resources/Home/SecondSectionImages/image2.png",
      hover: "Click to preview ",
    },
  ],
};
export const thirdSectionText = {
  title: "The Simple Setup Plan",
  card1Title: "Connect Your Repo",
  card1Step: "STEP 1",
  card1Text: "Link your GitHub, GitLab, or Bitbucket repository with one click",
  card2Title: "Auto-Configure Pipeline",
  card2Step: "STEP 2",
  card2Text:
    "BuildNinja detects your stack and creates optimized CI/CD pipelines",
  card3Title: "Deploy with Confidence",
  card3Step: "STEP 3",
  card3Text:
    "Push to deploy with automatic testing, staging, and production rollouts",
};
export const fourthSectionText = {
  title1: "Powerful Features,",
  title2: "Simple Interface",
  subtitle:
    "Dive deep into the features that make BuildNinja the ultimate CI/CD platform",
  featuresCard: [
    {
      title: "Comprehensive Build History",
      description:
        "Track every build with detailed execution logs, duration analytics, and status monitoring. Quickly identify issues and patterns to optimize your pipeline.",
      list: [
        "Filter builds by data range and status",
        "View detailed execution logs",
        "Track build duration trends",
        "Quick access to build details",
      ],
      image: "/resources/Home/FeatureImages/image1.jpg",
    },
    {
      title: "Build Configurations",
      description:
        "Centralize and manage all your build settings in one place. From VCS integration to artifact management, configure every aspect of your build pipeline with ease.",
      list: [
        "General settings and project metadata",
        "VCS source control configuration",
        "Build execution steps management",
        "Artifact and output settings",
      ],
      image: "/resources/Home/FeatureImages/image2.jpg",
    },
    {
      title: "Automate Builds with the Triggers Dashboard",
      description:
        "The Triggers Dashboard in BuildNinja gives you complete control over when and how your builds run. Configure custom or recurring schedules, view next run times, and manage trigger statuses — all from a single, intuitive interface.",
      list: [
        "Search, filter, and organize triggers effortlessly",
        "Support for custom, daily, and weekly schedules",
        "Real-time status and next-run visibility",
        "Configure agent-sOne-click trigger management and configurationpecific parameters",
      ],
      image: "/resources/Home/FeatureImages/image3.jpg",
    },
    {
      title:
        "Monitor and control build agents across your infrastructure with ease.",
      description:
        "The Agents Dashboard in BuildNinja provides a unified view of all connected build agents — showing their status, OS type, version, authorization, and activity history. Quickly identify offline or unauthorized agents, track running builds, and manage agent configurations seamlessly.",
      list: [
        "Real-time agent status (Online, Offline, Idle, Unauthorized)",
        "Filter by OS and connection status",
        "Detailed agent metadata including API URL, version, and OS info",
        "One-click access to configuration and action controls",
      ],
      image: "/resources/Home/FeatureImages/image4.jpg",
    },
    {
      title: "Smart Notifications",
      description:
        "Stay informed with intelligent email notifications. Configure custom triggers for build events and receive timely updates on your project status.",
      list: [
        "Email notifications for key events",
        "Customizable notification templates",
        "Success and failure triggers",
        "Multi-recipient support",
      ],
      image: "/resources/Home/FeatureImages/image5.jpg",
    },
  ],
};
export const fifthSectionText = {
  title: "Why Teams Trust BuildNinja",
  subTitle:
    "We understand the frustration of deployment anxiety. We know what it's like when your CI/CD tool becomes the bottleneck. We recognize that your time should be spent building, not troubleshooting.",
  cards: [
    {
      icon: paths.icons.rocket,
      text: "Built by engineers who've ",
      text2: "deployed ",
      text3: "thousands of applications",
    },
    {
      icon: paths.icons.fiveHundredPlus,
      text: "Trusted by 500+ engineering teams across startups to enterprise",
    },
    {
      icon: paths.icons.nintyNine,
      text: "99.9% uptime SLA with automatic failover and redundancy",
    },
    {
      icon: paths.icons.integration,
      text: "Integration with  popular development tools and platforms",
    },
  ],
  secondTitle: "24/7",
  thirdTitle: "Expert support from actual engineers, not chatbots",
};

export const sixthSectionText = {
  title: "What You Avoid with BuildNinja",
  list1: [
    {
      description:
        "Spending weeks configuring Jenkins or other complex CI/CD tools",
      icon: "calendar.svg",
    },
    {
      icon: "box.svg",
      description:
        "Dealing with deployment failures during critical business moments",
    },
    {
      icon: "bug.svg",
      description:
        "Losing customers due to slow feature delivery and buggy releases",
    },
  ],
  list2: [
    {
      icon: "fire.svg",
      description:
        "Burning out your best engineers on infrastructure instead of innovation",
    },
    {
      icon: "service.svg",
      description:
        "Paying enterprise prices for tools that require constant maintenance",
    },
    {
      icon: "stopWatch.svg",
      description:
        "Missing deadlines because your deployment pipeline is unreliable",
    },
  ],
};

export const seventhSectionText = {
  title: "Your Team's Success Story",
  subTitle:
    "Optimize your engineering workflow to deploy 10x faster with automated pipelines, enabling bulletproof shipping confidence and eliminating deployment anxiety through comprehensive testing and immediate rollback. This strategic shift allows your team to scale without infrastructure headaches, freeing up focus for building innovative features instead of maintaining complex deployment tools.",
  card1: {
    title: "10x",
    description: "Faster Deployments",
  },
  card2: {
    title: "5min",
    description: "Average Setup Time",
  },
  card3: {
    title: "99.9%",
    description: "Uptime SLA",
  },
  card4: {
    title: "0",
    description: "Failed Deployments",
  },
};
export const ninthSectionText = {
  title: "Ready to Focus on Code Instead of Tools?",
  subtitle:
    "Join 500+ engineering teams who've eliminated deployment anxiety and shipped 10x faster with BuildNinja. Get your CI/CD pipeline running in under 5 minutes.",
  primaryButton: "Start Free Trial",
  secondaryButton: "See the 5-Minute Demo",
  secondTitle: "Risk-Free Guarantee",
  list: [
    "30-day free trial, no credit card required",
    "Cancel anytime, keep your deployments running",
    "Migration support from our engineering team",
    "99.9% uptime SLA with automatic compensation",
  ],
};
// export const secondSectionText = {
//   title: "For Engineering Teams Who Want to Deploy, Not Debug",
//   secondaryTitle: "Focus on Building, Not Maintaining",
//   subtitle1: "BuildNinja",
//   subtitle2:
//     " takes care of the complexity of CI/CD, so your team can concentrate on what matters most",
//   subtitle3: "—shipping features",
//   subtitle4: " that delight users and driving",
//   subtitle5: " real business",
//   subtitle6: " results.",
//   thirdTitle: "Stop Wasting Developer Time on Broken CI/CD Tools",
//   externalProblems: {
//     title: "External Problems",
//     problems: [
//       "Deployment failures at the worst possible moment",
//       "Complex configuration that breaks when you need it most",
//       "Vendor lock-in with proprietary tools",
//       "Unpredictable costs that spike during peak usage",
//     ],
//   },
//   internalProblems: {
//     title: "Internal Problems",
//     problems: [
//       "Developers spending 40% of time on DevOps instead of features",
//       "Knowledge silos where only one person knows the pipeline",
//       "Inconsistent environments causing production bugs",
//       "Endless meetings about infrastructure instead of product",
//     ],
//   },
//   philosophicalProblems: {
//     title: "Philosophical Problems",
//     problems: [
//       "CI/CD shouldn't require a PhD in DevOps",
//       "Simple deployments shouldn't cost enterprise prices",
//       "Teams deserve tools that work, not endless troubleshooting",
//       "Building software should be about solving problems, not fighting tools",
//     ],
//   },
// };

// export const thirdSectionText = {
//     leftCell: {
//     title: "We Get It",
//     list: [
//       "We understand the frustration of deployment anxiety.",
//       "We know what it's like when your CI/CD tool becomes the bottleneck.",
//       "We've felt the pain of complex configurations that break at 2 AM.",
//       "We recognize that your time should be spent building, not troubleshooting.",
//     ],
//   },
//   rightCell: {
//     title: "Why Teams Trust BuildNinja",
//     list: [
//       "Built by engineers who've deployed thousands of applications",
//       "Trusted by 500+ engineering teams across startups to enterprise",
//       "Integration with  popular development tools and platforms",
//       "24/7 expert support from actual engineers, not chatbots",
//     ],
//   },
// }

export const eighthSectionText = {
  title: "Built by Engineers Who Use Their Own Tools",
  approach: {
    icon: paths.icons.approach,
    title: "Our Approach",
    description:
      "We built BuildNinja with a simple philosophy: if it's not simple enough for a new engineer to understand in 5 minutes, it's too complex. We eat our own dog food—BuildNinja deploys itself.",
  },
  problem: {
    icon: paths.icons.problem,
    title: "The Problem",
    description:
      "We were tired of CI/CD tools that promised simplicity but delivered complexity. Every deployment was a gamble, every configuration change a potential disaster.",
  },
  result: {
    icon: paths.icons.result,
    title: "The Result",
    description:
      "A CI/CD platform that works the way engineers think. No YAML wizardry required. No PhD in DevOps necessary. Just reliable, fast deployments that let you focus on building great software.",
  },
};


