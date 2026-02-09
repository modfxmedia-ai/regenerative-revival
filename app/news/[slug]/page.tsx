import { notFound } from "next/navigation";
import { articles } from "../data";
import ArticleContent from "./ArticleContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Regenerative Revival`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const idx = articles.findIndex((a) => a.slug === slug);
  const related = articles.filter((_, i) => i !== idx).slice(0, 3);

  return <ArticleContent article={article} related={related} />;
}
