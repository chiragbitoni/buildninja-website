import { pages } from "../../components/MarketingSite/app/content";
import { ContentPage } from "../../components/MarketingSite/app/markdown";
import { fetchGrapeHubBlogPosts } from "@/services/grapehub/fetchPage";

export const metadata = {
  title: { absolute: "Blog | BuildNinja – CI/CD Insights & DevOps Tutorials" },
  description:
    "Explore the latest articles, tutorials, and insights from the BuildNinja team - covering CI/CD pipelines, self-hosted DevOps, and software delivery best practices.",
  alternates: {
    canonical: "https://www.buildninja.io/blog",
  },
  openGraph: {
    title: "Blog | BuildNinja – CI/CD Insights & DevOps Tutorials",
    description:
      "Explore the latest articles, tutorials, and insights from the BuildNinja team - covering CI/CD pipelines, self-hosted DevOps, and software delivery best practices.",
    url: "https://www.buildninja.io/blog",
    siteName: "BuildNinja",
    type: "website",
    images: [
      {
        url: "https://www.buildninja.io/resources/BuildNinja.png",
        width: 1200,
        height: 630,
        alt: "BuildNinja Blog",
      },
    ],
  },
};

export default async function BlogPage() {
  const posts = await fetchGrapeHubBlogPosts();
  const latestPosts = [...posts].sort(
    (a, b) => new Date(b.firstPublishedDate) - new Date(a.firstPublishedDate),
  );

  return <ContentPage page={pages.blog} route="blog" blogPosts={latestPosts} />;
}
