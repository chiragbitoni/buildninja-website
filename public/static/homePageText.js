import { paths } from "./paths";

export const heroSectionText = {
  title1: "Self-Hosted CI/CD ",
  title2: "That Just Works Out of the Box",
  subtitle:
    "Growing teams waste time on complex CI/CD tools and per-seat pricing",
  subtitle2: "Start free up to 3 agents • $199/month unlimited as you scale",
  subtitle3: "Deploy in minutes. Ship features, not infrastructure.",
  primaryButton: "Install BuildNinja Free",
  secondaryButton: "See the 3-Minute Demo",
};

export const secondSectionText = {
  title1: "Deploy with Confidence ",
  title2: "Without the Complexity",
  subtitle: "Powerful features that let you ship code, not fix pipelines.",
  featuresCard: [
    {
      title: "See What Happened Without the Detective Work",
      desc: "Track every build with detailed logs and duration analytics in one clean interface, no hunting through scattered settings or plugin outputs.",
      icon: paths.icons.buildHistory,
      img: "/resources/Home/SecondSectionImages/BuildHistory.png",
      hover: "Click to preview ",
    },
    {
      title: "Own Your Infrastructure Without the Headache",
      desc: "Monitor all your build agents in real-time with full visibility and control, see status, capacity, and health without complexity.",
      icon: paths.icons.agentManagement,
      img: "/resources/Home/SecondSectionImages/Agents.png",
      hover: "Click to preview ",
    },
    {
      title: "Know When Builds Complete Automatically",
      desc: "Get instant email alerts for build success or failure, included out of the box. No complex setup, no additional costs.",
      icon: paths.icons.notification,
      img: "/resources/Home/SecondSectionImages/Triggers.png",
      hover: "Click to preview ",
    },
    {
      title: "Change Settings With Confidence",
      desc: "Manage VCS, build steps, and artifacts in one place. Simple, clear configuration without the fear of breaking everything.",
      icon: paths.icons.configurationDetails,
      img: "/resources/Home/SecondSectionImages/BuildConfiguration.png",
      hover: "Click to preview ",
    },
  ],
};
export const thirdSectionText = {
  title: "The Simple Self-Hosted Plan",
  card1Title: "Pull and Run",
  card1Step: "STEP 1",
  card1command: "docker pull buildninja/buildninja ",
  card1Requirements: "Requirements: Mongo DB",
  card1Text: "Deploy in minutes, not weeks of complex setup.",
  card2Title: "Connect Your Code",
  card2Step: "STEP 2",
  card2Text: "Works with GitHub, GitLab, Bitbucket - no vendor lock-in",
  card3Title: "Configure Your Build Process",
  card3Step: "STEP 3",
  card3Text: "Set up builds, triggers, and notifications - no complexity",
  card4Title: "Deploy and Scale",
  card4Step: "STEP 4",
  card4Text: "Ship confidently with $199/month unlimited users.",
};
export const fourthSectionText = {
  title1: "Powerful Features,",
  title2: "Without the Maintenance Burden",
  subtitle: "All the capabilities you need, none of the plugin chaos.",
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
      image: "/resources/Home/FeatureImages/image1.png",
    },
    {
      title: "Everything in One Place",
      description:
        "Configure your entire build process from a single, intuitive interface. VCS settings, build steps, artifacts. All organized logically so you know exactly where everything is.",
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
      image: "/resources/Home/FeatureImages/image2.png",
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
      image: "/resources/Home/FeatureImages/image3.png",
    },
    {
      title: "Complete Visibility Into Your Build Capacity",
      description:
        "See which agents are online, idle, or running builds at a glance. Manage your entire build infrastructure from one dashboard, no SSH needed, no guesswork.",
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
      image: "/resources/Home/FeatureImages/image4.png",
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
      image: "/resources/Home/FeatureImages/image5.png",
    },
  ],
};
export const fifthSectionText = {
  title: "We Understand Your CI/CD Pain",
  subTitle:
    "We understand how frustrating it is when CI/CD tools break right before critical releases. ",
  subTitle2:
    "We believe deploying code shouldn't require a PhD in DevOps. ",
  subTitle3:
    "We know how expensive per-seat licensing gets as your team grows. ",
  subTitle4:
    "We've seen how cloud vendor lock-in limits your infrastructure choices.",
  subHeading1: "Built by ",
  subHeading2: "India",
  cards: [
    {
      icon: paths.icons.twentyFivePlus,
      text: "25+ years into developer tools (GrapeCity)",
    },

    {
      icon: paths.icons.customerStars,
      boldText: "Trusted partner to global enterprises ",
      text: "Delivering software excellence worldwide ",
    },
    {
      icon: paths.icons.singleBinary,
      boldText: "Self-contained deployment <br/>",
      text: "No plugin dependency chaos",
    },
    {
      icon: paths.icons.predictablePricing,
      boldText: "Predictable pricing <br/>",
      text: "$199/month unlimited users, not per-seat",
    },
    {
      icon: paths.icons.infrastructure,
      boldText: "Your infrastructure <br/>",
      text: "Complete control without vendor lock-in",
    },
  ],
  secondTitle: "Business Hours Support",
  thirdTitle: "Expert support from actual engineers, not chatbots.",
};

export const sixthSectionText = {
  title: "Don't Let Your CI/CD Tool Become Your Biggest Bottleneck",
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
      description: "Paying escalating per-seat costs as your team grows",
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
    "Become productive teams shipping features instead of fixing pipelines.",
  subTitle2:
    "Deploy with confidence in critical moments. Budget predictably without per-seat growth taxation.",
  subTitle3:
    "Own your infrastructure with self-hosted control. Lead your competition deploying faster with reliable tools.",
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
    title: "The Flow",
    description:
      "Our rule: if a new engineer can't understand it in 5 minutes, it's too complex. We use BuildNinja to deploy BuildNinja. We only sell what we trust with our own production.",
  },
  problem: {
    icon: paths.icons.problem,
    title: "The Friction",
    description:
      "CI/CD tools that promise simplicity but deliver complexity. Deployments that feel like gambling. Your team deserves better than debugging pipelines instead of shipping features.",
  },
  result: {
    icon: paths.icons.result,
    title: "The Velocity",
    description:
      "Ship features confidently, multiple times daily. No YAML headaches. No DevOps PhD required. Just reliable deployments so you can build software customers love.",
  },
};
export const ninthSectionText = {
  title: "Stop Fighting Your CI/CD Tool. Start Shipping Code.",
  subtitle:
    "Built by the GrapeCity India team with 25 years of enterprise deployment experience.",
  subtitle2: "Get your CI/CD build process running in under 5 minutes.",
  subtitle3: "Free for 3 agents, $199/month unlimited as you scale.",
  primaryButton: "Try BuildNinja Free",
  secondaryButton: "See the 3-Minute Demo",
  secondTitle: "Risk-Free Guarantee",
  list: [
    "30-day free trial License, no credit card required",
    "Cancel anytime, keep full control of your setup",
    "Deploy in minutes with Docker and test on your infrastructure",
    "Direct support from our engineering team",
  ],
};
