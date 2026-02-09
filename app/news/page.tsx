import NewsHero from "./components/NewsHero";
import NewsList from "./components/NewsList";

export const metadata = {
  title: "News | Regenerative Revival",
  description:
    "Stay up to date with the latest news, insights, and articles on regenerative medicine, stem cell therapy, and Wharton's Jelly treatments.",
};

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsList />
    </>
  );
}
