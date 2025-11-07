import { paths } from "./paths";

export const heroSectionText = {
  title1: "Self-Hosted CI/CD That Just Works",
  title2: "Out of the Box",
  subtitle:
    "You know how growing engineering teams waste time maintaining complex CI/CD tools or paying high per-seat costs just to deploy code? BuildNinja provides self-hosted CI/CD that just works out of the box — deploy in minutes with Docker for $199/month unlimited users — so you can focus on shipping features with predictable costs and complete infrastructure control.",
  primaryButton: "Start Your 30–Day Free Trial",
  secondaryButton: "See the 5-Minute Demo",
};

export const secondSectionText = {
  title1: "Deploy with Confidence ",
  title2: "Without the Complexity",
  subtitle: "Powerful features that let you ship code, not fix pipelines",
  featuresCard: [
    {
      title: "See What Happened Without the Detective Work",
      desc: "Track every build with detailed logs and duration analytics in one clean interface—no hunting through scattered settings or plugin outputs.",
      icon: paths.icons.buildHistory,
      img: "/resources/Home/SecondSectionImages/image2.png",
      hover: "Click to preview ",
    },
    {
      title: "Own Your Infrastructure Without the Headache",
      desc: "Monitor all your build agents in real-time with full visibility and control—see status, capacity, and health without complexity.",
      icon: paths.icons.agentManagement,
      img: "/resources/Home/SecondSectionImages/image2.png",
      hover: "Click to preview ",
    },
    {
      title: "Know When Builds Complete—Automatically",
      desc: "Get instant email alerts for build success or failure, included out of the box. No complex setup, no additional costs.",
      icon: paths.icons.notification,
      img: "/resources/Home/SecondSectionImages/image2.png",
      hover: "Click to preview ",
    },
    {
      title: "Change Settings With Confidence",
      desc: "Manage VCS, build steps, and artifacts in one place. Simple, clear configuration without the fear of breaking everything.",
      icon: paths.icons.configurationDetails,
      img: "/resources/Home/SecondSectionImages/image2.png",
      hover: "Click to preview ",
    },
  ],
};
export const thirdSectionText = {
  title: "The Simple Self-Hosted Plan",
  card1Title: "Pull and Run",
  card1Step: "STEP 1",
  card1command: "docker pull buildninja/buildninja ",
  card1Text:
    "Deploy in minutes, not weeks of complex setup",
  card2Title: "Connect Your Code",
  card2Step: "STEP 2",
  card2Text: "Works with GitHub, GitLab, Bitbucket — no vendor lock-in",
  card3Title: "Deploy with Confidence",
  card3Step: "STEP 3",
  card3Text: "Built-in reliability without complexity or escalating costs",
  card4Title: "Scale Predictably",
  card4Step: "STEP 4",
  card4Text: "$199/month unlimited users as you grow",
};
export const fourthSectionText = {
  title1: "Powerful Features,",
  title2: "Without the Maintenance Burden",
  subtitle: "All the capabilities you need, none of the plugin chaos",
  featuresCard: [
    {
      title: "Find Issues Fast When They Happen",
      description:
        "Track every build with detailed logs and duration analytics in one clean interface. Identify problems in seconds so you can ship with confidence, not anxiety.",
      list: [
        {
          title: "Find what you need fast",
          desc: "Filter builds by date range and status",
        },
        {
          title: "See exactly what happened",
          desc: "See exactly what happened – View detailed execution logs",
        },
        {
          title: "Spot problems before they escalate",
          desc: "Track build duration trends",
        },
        {
          title: "Get answers immediately",
          desc: "Quick access to build details",
        },
      ],
      image: "/resources/Home/FeatureImages/image1.jpg",
    },
    {
      title: "Everything in One Place",
      description:
        "Configure your entire pipeline from a single, intuitive interface. VCS settings, build steps, artifacts—all organized logically so you know exactly where everything is.",
      list: [
        {
          title: " No scattered settings",
          desc: "General settings and project metadata",
        },
        {
          title: "Source control that makes sense",
          desc: "VCS configuration",
        },
        {
          title: "Clear build steps",
          desc: "Build execution management",
        },
        {
          title: "Simple artifact handling",
          desc: "Artifact and output settings",
        },
      ],
      image: "/resources/Home/FeatureImages/image2.jpg",
    },
    {
      title: "Automate Builds That Actually Run",
      description:
        "Schedule custom, daily, or weekly builds with clear visibility into what runs when. No cryptic syntax, just reliable automation with full transparency.",
      list: [
        {
          title: "Find triggers instantly",
          desc: "Search, filter, and organize effortlessly.",
        },
        {
          title: "Flexible scheduling",
          desc: "Support for custom, daily, and weekly schedules.",
        },
        {
          title: "Know what's coming",
          desc: "Real-time status and next-run visibility.",
        },
        {
          title: "Simple configuration",
          desc: "One-click trigger and agent parameter management.",
        },
      ],
      image: "/resources/Home/FeatureImages/image3.jpg",
    },
    {
      title: "Complete Visibility Into Your Build Capacity",
      description:
        "See which agents are online, idle, or running builds at a glance. Manage your entire build infrastructure from one dashboard—no SSH needed, no guesswork.",
      list: [
        {
          title: "Always know agent status",
          desc: "Real-time visibility (Online, Offline, Idle, Unauthorized).",
        },
        {
          title: "Find what you need",
          desc: "Filter by OS and connection status.",
        },
        {
          title: "Complete agent information",
          desc: "API URL, version, and OS details.",
        },
        {
          title: "Quick actions",
          desc: "One-click configuration and control.",
        },
      ],
      image: "/resources/Home/FeatureImages/image4.jpg",
    },
    {
      title: "Stay Informed Without Constant Monitoring",
      description:
        "Configure exactly which events trigger notifications so your whole team stays in the loop. Get notified when it matters, not overwhelmed with noise.",
      list: [
        {
          title: "Get notified when it matters",
          desc: "Email notifications for key events.",
        },
        {
          title: "Make notifications yours",
          desc: "Customizable templates.",
        },
        {
          title: "Choose what you hear about",
          desc: "Success and failure triggers.",
        },
        {
          title: "Keep the team informed",
          desc: "Multi-recipient support.",
        },
      ],
      image: "/resources/Home/FeatureImages/image5.jpg",
    },
  ],
};
export const fifthSectionText = {
  title: "We Understand Your CI/CD Pain",
  subTitle:
    "We understand how frustrating it is when CI/CD tools break right before critical releases. Like you, we believe deploying code shouldn't require a PhD in DevOps. We know how expensive per-seat licensing gets as your team grows. We've seen how cloud vendor lock-in limits your infrastructure choices.",
  cards: [
    {
      icon: paths.icons.rocket,
      text: "25+ years building developer tools (GrapeCity)",
    },
    {
      icon: paths.icons.fiveHundredPlus,
      text: "Japanese engineering culture of reliability",
    },
    {
      icon: paths.icons.nintyNine,
      text: "Thousands of enterprise customers worldwide",
    },
    {
      icon: paths.icons.integration,
      text: "Single binary simplicity – No plugin dependency chaos",
    },
    {
      icon: paths.icons.integration,
      text: "Predictable pricing – $199/month unlimited users, not per-seat",
    },
    {
      icon: paths.icons.integration,
      text: "Your infrastructure – Complete control without vendor lock-in",
    },
  ],
  secondTitle: "24/7",
  thirdTitle: "Expert support from actual engineers, not chatbots",
};

export const sixthSectionText = {
  title: "Don't Let Your CI/CD Tool Become Your Biggest Bottleneck",
  subTitle: "What You Avoid with BuildNinja",
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
        "Paying escalating per-seat costs as your team grows",
    },
    {
      icon: "stopWatch.svg",
      description:
        "Missing deadlines because your deployment pipeline is unreliable",
    },
  ],
};

export const seventhSectionText = {
  title: "Ship Features, Not Pipeline Fixes",
  subTitle:
    "Become productive teams shipping features instead of fixing pipelines. Deploy with confidence in critical moments. Budget predictably without per-seat growth taxation. Own your infrastructure with self-hosted control. Lead your competition deploying faster with reliable tools.",
  card1: {
    title: "Free",
    description: "Up to 3 Agents",
  },
  card2: {
    title: "5min",
    description: "Setup Time",
  },
  card3: {
    title: "$199/mo",
    description: "Unlimited Scale",
  },
  card4: {
    title: "Self-Hosted",
    description: "Your Control",
  },
};
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
      "We were tired of CI/CD tools that promised simplicity but delivered complexity — plugin dependency chaos, expensive per-seat licensing, and cloud vendor lock-in. Every deployment was a gamble, every configuration change a potential disaster.",
  },
  result: {
    icon: paths.icons.result,
    title: "The Result",
    description:
      "A CI/CD platform that works the way engineers think. No YAML wizardry required. No PhD in DevOps necessary. Just reliable, fast deployments that let you focus on building great software.",
  },
};
export const ninthSectionText = {
  title: "Stop Fighting Your CI/CD Tool. Start Shipping Code.",
  subtitle:
    "Built by engineers who've deployed thousands of applications at GrapeCity. Get your CI/CD pipeline running in under 5 minutes — free for 3 agents, $199/month unlimited as you scale",
  primaryButton: "Start Your 30-Day Free Trial",
  secondaryButton: "See the 5-Minute Demo",
  secondTitle: "Risk-Free Guarantee",
  list: [
    "30-day free trial, no credit card required",
    "Cancel anytime, keep full control of your setup",
    "Deploy in minutes with Docker—test on your infrastructure",
    "Direct support from our engineering team",
  ],
};
