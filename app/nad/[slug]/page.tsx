import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";
import ComplianceDisclaimer from "../../components/ComplianceDisclaimer";
import { generatePageMetadata } from "../../lib/seo";
import { JsonLd, breadcrumbSchema, productSchema } from "../../lib/schema";
import { getProductBySlug, products } from "../../lib/products";

export function generateStaticParams() {
  return products
    .filter((p) => p.hub === "nad")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return generatePageMetadata({
      title: "Program Not Found",
      description: "This program is unavailable.",
      path: `/nad/${slug}`,
      noIndex: true,
    });
  }
  return generatePageMetadata({
    title: product.seoName ?? product.name,
    description: product.shortDescription,
    path: `/nad/${product.slug}`,
    cta: "Start Intake",
  });
}

export default async function NadProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.hub !== "nad") notFound();

  const primaryWizloUrl = product.doses[0]?.wizloUrl ?? "/consult-router";

  return (
    <>
      <JsonLd
        data={productSchema({
          name: product.name,
          slug: product.slug,
          hub: product.hub,
          description: product.shortDescription,
          category: product.category,
          priceFrom: product.priceFrom,
          prescriptionOnly: product.disclaimerKey === "compounded_rx",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "NAD+ & Supplements",
            url: "https://www.regenerativerevival.com/nad",
          },
          {
            name: product.name,
            url: `https://www.regenerativerevival.com/nad/${product.slug}`,
          },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: "NAD+ & Supplements", href: "/nad" },
          { label: product.name, href: `/nad/${product.slug}` },
        ]}
      />

      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary-light mb-3">
              Longevity Program
            </p>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              {product.name}
            </h1>
            <p className="mt-6 text-white/70">{product.shortDescription}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={primaryWizloUrl}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Take The 2-Minute Quiz <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/consult-router"
                className="inline-flex items-center text-white/80 hover:text-white px-6 py-3 font-medium transition-colors"
              >
                Talk to a Provider First
              </Link>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h2 className="text-sm uppercase tracking-widest text-primary-light mb-4">
              Key Benefits
            </h2>
            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/90">
                  <Check className="h-5 w-5 text-primary-light shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 prose prose-lg text-gray-700">
          <h2 className="text-3xl font-semibold text-secondary">
            How {product.name} Works
          </h2>
          <p>{product.longDescription}</p>
        </div>
      </section>

      <ComplianceDisclaimer
        variant={product.disclaimerKey === "supplement" ? "supplement" : "compounded_rx"}
      />
    </>
  );
}
