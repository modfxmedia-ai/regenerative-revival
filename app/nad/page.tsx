import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ComplianceDisclaimer from "../components/ComplianceDisclaimer";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  medicalWebPageSchema,
  productListSchema,
} from "../lib/schema";
import { getProductsByHub } from "../lib/products";

export const metadata = generatePageMetadata({
  title: "NAD+ & Supplements",
  description:
    "Clinician-supervised NAD+ therapy and longevity supplements. Support cellular energy, mitochondrial function, and healthy aging.",
  path: "/nad",
  cta: "Take The Quiz",
});

export default function NadHubPage() {
  const items = getProductsByHub("nad");

  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "NAD+ & Supplements",
          description:
            "Clinician-supervised NAD+ therapy and longevity supplements.",
          url: "/nad",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "NAD+ & Supplements",
            url: "https://www.regenerativerevival.com/nad",
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

      <Breadcrumbs items={[{ label: "NAD+ & Supplements", href: "/nad" }]} />

      {/* Hero */}
      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-sm uppercase tracking-widest text-primary-light mb-4">
            Longevity · Cellular Energy
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight max-w-3xl">
            Fuel the Cells That Run You.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            NAD+ is a coenzyme central to mitochondrial energy production and
            DNA repair. Levels decline with age. Our clinicians build
            personalized NAD+ protocols designed to support energy, clarity,
            and cellular longevity.
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
              See Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-secondary">
              Available Programs
            </h2>
            <p className="mt-4 text-gray-600">
              Each program is reviewed by a licensed clinician and shipped from
              a licensed compounding pharmacy.
            </p>
          </div>

          {items.length === 0 ? (
            <p className="text-gray-500">
              Programs coming soon. Take the quiz to be notified.
            </p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/nad/${p.slug}`}
                    className="group block h-full border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {p.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {p.form.toUpperCase()}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <ComplianceDisclaimer variant="compounded_rx" />
    </>
  );
}
