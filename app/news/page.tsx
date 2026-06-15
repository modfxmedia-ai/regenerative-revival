import NewsHero from "./components/NewsHero";
import NewsList from "./components/NewsList";
import Breadcrumbs from "../components/Breadcrumbs";
import QuizCTA from "../components/QuizCTA";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "News",
  description: "Stay up to date with the latest news, insights, and articles on regenerative medicine, stem cell therapy, and Wharton's Jelly treatments.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ title: "News & Insights", description: "Latest news, insights, and articles on regenerative medicine, stem cell therapy, and Wharton's Jelly treatments.", url: "/news" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "News", url: "https://www.regenerativerevival.com/news" }])} />
      <Breadcrumbs items={[{ label: "News", href: "/news" }]} />
      <NewsHero />
      <NewsList />
      <QuizCTA />
    </>
  );
}
