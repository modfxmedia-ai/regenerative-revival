import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";
import { generatePageMetadata } from "../../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  productSchema,
} from "../../lib/schema";
import {
  getAllProductSlugs,
  getProductBySlug,
  productDisclaimers,
  products,
} from "../../lib/products";

// SSG: pre-render one page per product at build time
export function generateStaticParams() {
  return products
    .filter((p) => p.hub === "hormones-peptides")
    .map((p) => ({ slug: p.slug }));
}

// Per-product metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return generatePageMetadata({
      title: "Product Not Found",
      description: "This product is unavailable.",
      path: `/hormones-peptides/${slug}`,
      noIndex: true,
    });
  }
  return generatePageMetadata({
    title: product.seoName ?? product.name,
    description: product.shortDescription,
    path: `/hormones-peptides/${product.slug}`,
    cta: "Start Intake",
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.hub !== "hormones-peptides") {
    notFound();
  }

  const primaryWizloUrl = product.doses[0]?.wizloUrl ?? "/consult-router";
  const disclaimer = productDisclaimers[product.disclaimerKey];

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
          image: product.image,
          prescriptionOnly: product.disclaimerKey === "compounded_rx",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Hormones & Peptides",
            url: "https://www.regenerativerevival.com/hormones-peptides",
          },
          {
            name: product.name,
            url: `https://www.regenerativerevival.com/hormones-peptides/${product.slug}`,
          },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: "Hormones & Peptides", href: "/hormones-peptides" },
          {
            label: product.name,
            href: `/hormones-peptides/${product.slug}`,
          },
        ]}
      />

      {/* Product header */}
      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary-light mb-3">
              {product.category === "glp1"
                ? "GLP-1 Weight Management"
                : product.category === "nad"
                  ? "Longevity"
                  : product.category === "capsule"
                    ? "Oral Therapy"
                    : "Peptide Therapy"}
            </p>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              {product.name}
            </h1>
            {product.priceFrom !== undefined && (
              <p className="mt-6 text-lg text-white/80">
                Programs starting at{" "}
                <span className="text-white font-semibold">
                  ${product.priceFrom}/month
                </span>{" "}
                — includes provider consult, prescription, and shipping.
              </p>
            )}
            <p className="mt-4 text-white/70">{product.shortDescription}</p>

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

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
              {product.status === "active"
                ? "In Stock · Ships in 3–5 Business Days"
                : product.status === "coming_soon"
                  ? "Coming Soon"
                  : "Consult Required"}
            </div>
          </div>

          {/* Benefits panel */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
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

      {/* Long description + dosing */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-semibold text-secondary">
                How {product.name} Works
              </h2>
              <p>{product.longDescription}</p>

              {product.indications && product.indications.length > 0 && (
                <>
                  <h3 className="text-2xl font-semibold text-secondary mt-10">
                    Who It&apos;s For
                  </h3>
                  <ul>
                    {product.indications.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </>
              )}

              <h3 className="text-2xl font-semibold text-secondary mt-10">
                What This Program Is Not
              </h3>
              <ul>
                <li>Not a quick fix. Sustainable results take time.</li>
                <li>
                  Not for everyone. Your provider will tell you honestly if
                  another path is a better fit.
                </li>
                <li>
                  Not a pill mill. Every prescription requires a clinical
                  evaluation.
                </li>
              </ul>
            </div>

            {/* Dose sidebar */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                  Available Doses
                </h3>
                <ul className="space-y-2">
                  {product.doses.map((d) => (
                    <li key={d.label}>
                      <a
                        href={d.wizloUrl}
                        className="flex items-center justify-between px-4 py-3 rounded-md bg-white border border-gray-200 hover:border-primary hover:text-primary transition-colors group"
                      >
                        <span className="text-sm font-medium text-secondary group-hover:text-primary">
                          {d.label}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  Dose selection is finalized by your prescribing clinician
                  during your consult.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-semibold">
            Not sure where to start? Take the 2-minute quiz.
          </h2>
          <p className="mt-4 text-white/80">
            Find out which of our programs fits your goals.
          </p>
          <a
            href={primaryWizloUrl}
            className="mt-8 inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Take The 2-Minute Quiz <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-10">
          <p className="text-xs text-gray-500 leading-relaxed">{disclaimer}</p>
        </div>
      </section>
    </>
  );
}
