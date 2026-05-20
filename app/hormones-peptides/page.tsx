import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  medicalWebPageSchema,
  productListSchema,
} from "../lib/schema";
import { getProductsByHub } from "../lib/products";

export const metadata = generatePageMetadata({
  title: "Hormones & Peptides",
  description:
    "Physician-prescribed peptides, GLP-1 weight management, and hormone optimization — delivered through telehealth with licensed clinician oversight.",
  path: "/hormones-peptides",
  cta: "Take The Quiz",
});

export default function HormonesPeptidesPage() {
  const items = getProductsByHub("hormones-peptides");

  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "Hormones & Peptides",
          description:
            "Physician-prescribed peptides, GLP-1 weight management, and hormone optimization through telehealth.",
          url: "/hormones-peptides",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Hormones & Peptides",
            url: "https://www.regenerativerevival.com/hormones-peptides",
          },
        ])}
      />
      <JsonLd
        data={productListSchema(
          items.map((p) => ({
            name: p.name,
            slug: p.slug,
            hub: p.hub,
            description: p.shortDescription,
          })),
        )}
      />

      <Breadcrumbs
        items={[{ label: "Hormones & Peptides", href: "/hormones-peptides" }]}
      />

      {/* Hero */}
      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-sm uppercase tracking-widest text-primary-light mb-4">
            Telehealth · Physician-Prescribed
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight max-w-3xl">
            Hormones, Peptides & GLP-1 — Delivered.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Compounded medications and peptide protocols prescribed and
            monitored by licensed clinicians. One medical team, one patient
            record, one plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/consult-router"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Take The 2-Minute Quiz <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#catalog"
              className="inline-flex items-center text-white/80 hover:text-white px-6 py-3 font-medium transition-colors"
            >
              Browse the Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-secondary">
              Catalog
            </h2>
            <p className="mt-4 text-gray-600">
              Every product is reviewed by a licensed clinician and shipped from
              a licensed compounding pharmacy. Click any product to learn more
              and begin your intake.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/hormones-peptides/${p.slug}`}
                  className="group block h-full border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                      {p.category === "glp1"
                        ? "GLP-1"
                        : p.category === "peptide"
                          ? "Peptide"
                          : p.category === "capsule"
                            ? "Oral"
                            : p.category}
                    </span>
                    <span className="text-xs text-gray-400 uppercase">
                      {p.form}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {p.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    {p.priceFrom !== undefined ? (
                      <span className="text-sm text-gray-700">
                        From{" "}
                        <span className="font-semibold text-secondary">
                          ${p.priceFrom}
                        </span>
                        /mo
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">
                        Consult required
                      </span>
                    )}
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {items.length === 0 && (
            <p className="text-gray-500">
              Catalog is loading. Check back shortly.
            </p>
          )}
        </div>
      </section>

      {/* Compliance footer band */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-10">
          <p className="text-xs text-gray-500 leading-relaxed">
            Compounded medications are not FDA-approved drugs. They are prepared
            by licensed compounding pharmacies based on a clinician&apos;s
            prescription for an individual patient. Individual results vary. A
            medical evaluation is required to determine if any therapy is
            appropriate for you.
          </p>
        </div>
      </section>
    </>
  );
}
