import { notFound } from "next/navigation";
import { pages } from "../../components/MarketingSite/app/content";
import { ContentPage } from "../../components/MarketingSite/app/markdown";
import { LegalPage, legalPages } from "../../components/MarketingSite/app/legal-page";

const existingRoutes = new Set([
  "about",
  "blog",
  "compare",
  "compare/buildninja-vs-circleci",
  "compare/buildninja-vs-github-actions",
  "compare/buildninja-vs-jenkins",
  "compare/buildninja-vs-teamcity",
  "contact",
  "dojo",
  "eula",
  "faq",
  "features",
  "install",
  "landing-page",
  "partners",
  "pricing",
  "privacy-policy",
  "refund-and-cancellation-policy",
  "support",
  "terms-of-service",
]);

const staticRoutes = [
  ...Object.keys(pages).filter((route) => !existingRoutes.has(route)),
  ...Object.keys(legalPages).filter((route) => !existingRoutes.has(route)),
];

export function generateStaticParams() {
  return staticRoutes.map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = slug.join("/");
  const page = pages[route];
  const legalPage = legalPages[route];
  const record = page || legalPage;

  if (!record) return {};

  const pageTitle = (page?.seo || legalPage.seo).trim();
  const title = pageTitle.endsWith("| BuildNinja")
    ? pageTitle
    : `${pageTitle} | BuildNinja`;
  const description = record.description;
  const canonical = `https://www.buildninja.io/${route}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: "BuildNinja", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function MarketingPage({ params }) {
  const { slug } = await params;
  const route = slug.join("/");
  const page = pages[route];
  if (page) return <ContentPage page={page} route={route} />;
  if (legalPages[route]) return <LegalPage route={route} />;
  notFound();
}
