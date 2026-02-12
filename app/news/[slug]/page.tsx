import { notFound } from "next/navigation";
import { articles } from "../data";
import ArticleContent from "./ArticleContent";
import Breadcrumbs from "../../components/Breadcrumbs";
import { generatePageMetadata } from "../../lib/seo";
import { JsonLd, articleSchema, breadcrumbSchema } from "../../lib/schema";

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
  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    ogImage: article.image,
    ogType: "article",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const idx = articles.findIndex((a) => a.slug === slug);
  const related = articles.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema({ title: article.title, description: article.excerpt, slug: article.slug, image: article.image, datePublished: new Date(article.date).toISOString(), category: article.category })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "News", url: "https://www.regenerativerevival.com/news" }, { name: article.title, url: `https://www.regenerativerevival.com/news/${article.slug}` }])} />
      <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: article.title, href: `/news/${article.slug}` }]} />
      <ArticleContent article={article} related={related} />
    </>
  );
}
