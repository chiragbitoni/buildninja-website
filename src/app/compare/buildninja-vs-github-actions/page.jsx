import { pages } from "../../../components/MarketingSite/app/content";
import { ContentPage } from "../../../components/MarketingSite/app/markdown";

const route = "compare/buildninja-vs-github-actions";
const page = pages[route];
const canonical = `https://www.buildninja.io/${route}`;

export const metadata = {
  title: { absolute: page.seo },
  description: page.description,
  alternates: { canonical },
  openGraph: {
    title: page.seo,
    description: page.description,
    url: canonical,
    siteName: "BuildNinja",
    type: "website",
  },
};

export default function BuildNinjaVsGitHubActions() {
  return <ContentPage page={page} route={route} />;
}
