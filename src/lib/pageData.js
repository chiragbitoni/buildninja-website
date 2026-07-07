export const BASE_URL = "https://buildninja.grapehub.io";

export const pageDataMap = {
  "/": {
    breadcrumb: "Home",
  },
  "/about": {
    breadcrumb: "About",
    schemaType: "AboutPage",
    name: "About BuildNinja",
    description: "At BuildNinja, we bring together technology, creativity, and collaboration to build powerful DevOps, CI/CD, and software solutions.",
  },
  "/contact": {
    breadcrumb: "Contact",
    schemaType: "ContactPage",
    name: "Contact BuildNinja",
    description: "Have questions or need assistance? Contact the BuildNinja team at GrapeCity India for inquiries, sales, and support.",
  },
  "/dojo": {
    breadcrumb: "Dojo",
    schemaType: "WebApplication",
    name: "BuildNinja Dojo",
    description: "Master BuildNinja in our interactive Dojo. Experiment with build pipelines, configurations, and CI/CD workflows in a safe sandbox environment.",
    extra: {
      operatingSystem: "Windows, Linux, macOS",
      applicationCategory: "DeveloperApplication",
    },
  },
  "/eula": {
    breadcrumb: "EULA",
    schemaType: "WebPage",
    name: "EULA | BuildNinja",
    description: "BuildNinja End User License Agreement (EULA). Read about our licensing terms, usage rights, and data protection policies.",
  },
  "/faq": {
    breadcrumb: "FAQ",
    schemaType: "FAQPage",
    name: "Frequently Asked Questions | FAQ",
    description: "Find answers to common questions about BuildNinja CI/CD, installation, pricing, security, and enterprise features.",
  },
  "/features": {
    breadcrumb: "Features",
    schemaType: "SoftwareApplication",
    name: "BuildNinja",
    description: "Experience lightning-fast, secure, and fully automated self-hosted CI/CD platform. The ultimate self-hosted alternative to Jenkins, GitLab CI, and GitHub Actions.",
  },
  "/install": {
    breadcrumb: "Install",
    schemaType: "HowTo",
    name: "How to Install BuildNinja",
    description: "Learn how to deploy and configure the BuildNinja self-hosted CI/CD platform on your own infrastructure using the Windows Installer or Docker.",
  },
  "/landing-page": {
    breadcrumb: "Landing Page",
    schemaType: "WebPage",
    name: "DevOps Made Simple - BuildNinja",
    description: "Experience the speed and security of BuildNinja self-hosted CI/CD platform. Standardize your build pipelines and optimize your release cycles today.",
  },
  "/partners": {
    breadcrumb: "Partners",
    schemaType: "WebPage",
    name: "BuildNinja Partner Program",
    description: "Join the BuildNinja ecosystem. Collaborate with us to build better CI/CD experiences and empower engineering teams worldwide.",
  },
  "/pricing": {
    breadcrumb: "Pricing",
    schemaType: "FAQPage",
    name: "Simple & Transparent Pricing for Teams | Pricing",
    description: "Choose the best plan for your DevOps needs. From free community editions to advanced enterprise features, BuildNinja scales with your team.",
  },
  "/privacy-policy": {
    breadcrumb: "Privacy Policy",
    schemaType: "WebPage",
    name: "Privacy Policy | BuildNinja",
    description: "Read BuildNinja's Privacy Policy to understand how we collect, use, and protect your personal information while ensuring transparency and data security.",
  },
  "/refund-and-cancellation-policy": {
    breadcrumb: "Refund and Cancellation Policy",
    schemaType: "WebPage",
    name: "Refund and Cancellation Policy | BuildNinja",
    description: "Read BuildNinja's Refund and Cancellation Policy outlining the terms for service withdrawal, refund eligibility, and customer support assistance.",
  },
  "/support": {
    breadcrumb: "Support",
    schemaType: "WebPage",
    name: "BuildNinja Support & Technical Assistance",
    description: "Need help? Access our documentation, join the community, or contact our technical support team for BuildNinja CI/CD assistance.",
  },
  "/terms-of-service": {
    breadcrumb: "Terms of Service",
    schemaType: "WebPage",
    name: "Terms of Service | BuildNinja",
    description: "Read BuildNinja's Terms and Conditions outlining the rules, responsibilities, and policies governing the use of our website, products, and services.",
  },
  "/blog": {
    breadcrumb: "Blog",
    schemaType: "Blog",
    name: "BuildNinja Blog",
    description: "Explore CI/CD guides, DevOps insights, tutorials, and product updates on the BuildNinja blog.",
  },
  "/compare": {
    breadcrumb: "Compare",
    schemaType: "WebPage",
    name: "BuildNinja vs Alternatives",
    description: "See how BuildNinja compares to other CI/CD tools including Jenkins, GitHub Actions, CircleCI, and TeamCity.",
  },
  "/compare/buildninja-vs-circleci": {
    breadcrumb: "BuildNinja vs CircleCI",
    schemaType: "WebPage",
    name: "BuildNinja vs CircleCI — CI/CD Comparison",
    description: "Compare BuildNinja and CircleCI across features, pricing, self-hosting, security, and performance for your CI/CD pipeline.",
  },
  "/compare/buildninja-vs-github-actions": {
    breadcrumb: "BuildNinja vs GitHub Actions",
    schemaType: "WebPage",
    name: "BuildNinja vs GitHub Actions — CI/CD Comparison",
    description: "Compare BuildNinja and GitHub Actions across self-hosting, performance, security, and pricing for your CI/CD needs.",
  },
  "/compare/buildninja-vs-jenkins": {
    breadcrumb: "BuildNinja vs Jenkins",
    schemaType: "WebPage",
    name: "BuildNinja vs Jenkins — CI/CD Comparison",
    description: "Compare BuildNinja and Jenkins across setup, scalability, security, plugins, and total cost of ownership.",
  },
  "/compare/buildninja-vs-teamcity": {
    breadcrumb: "BuildNinja vs TeamCity",
    schemaType: "WebPage",
    name: "BuildNinja vs TeamCity — CI/CD Comparison",
    description: "Evaluate BuildNinja and TeamCity on architecture, build performance, licensing, and enterprise features.",
  },
};

export function resolveBreadcrumb(pathname) {
  if (pathname === "/") return [{ name: "Home", url: "/" }];
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", url: "/" }];
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    const entry = pageDataMap[acc];
    if (entry) {
      items.push({ name: entry.breadcrumb, url: acc });
    } else {
      const name = seg.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      items.push({ name, url: acc });
    }
  }
  return items;
}
