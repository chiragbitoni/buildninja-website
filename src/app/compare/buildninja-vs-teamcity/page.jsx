import { pages } from "../../../components/MarketingSite/app/content";
import { ContentPage } from "../../../components/MarketingSite/app/markdown";
import { siteUrl } from "@/lib/site-url";

const route = "compare/buildninja-vs-teamcity";
const page = pages[route];
const canonical = siteUrl(`/${route}`);

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

export default function CompareTeamCityPage() {
  return (
    <div className="compare-page">
      <ContentPage page={page} route={route} />
    </div>
  );
}
