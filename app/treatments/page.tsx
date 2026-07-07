import Link from "next/link";
import { treatments } from "../lib/treatments";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";
import AnimatedSection from "../components/AnimatedSection";

export const metadata = generatePageMetadata({
  title: "Stem Cell Therapies & Regenerative Medicine",
  description:
    "Explore the full range of regenerative medicine therapies at Regenerative Revival — stem cell therapy, Wharton's Jelly, exosome therapy, PRP, and more — available across 100+ US cities.",
  path: "/treatments",
});

export default function TreatmentsHubPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Therapies — Regenerative Revival",
          description:
            "Browse our complete catalog of regenerative medicine therapies and stem cell programs.",
          url: "/treatments",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "Therapies", url: "https://www.regenerativerevival.com/treatments" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Therapies", href: "/treatments" }]} />

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-16">
          <AnimatedSection y={20}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Regenerative{" "}
              <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
                Therapies
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl">
              Cutting-edge stem cell and regenerative therapies designed to relieve
              chronic pain, repair damaged tissue, and restore your body&apos;s
              natural healing — without surgery.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Treatment grid */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t, i) => (
              <AnimatedSection key={t.slug} delay={i * 0.05}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all h-full flex flex-col"
                >
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                    {t.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                    {t.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {t.medicalConditions.slice(0, 3).map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center rounded-full bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    See locations →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <AnimatedSection>
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Not sure which therapy is right for you?
            </h2>
            <p className="text-gray-600 mb-6">
              Take the quiz and we&apos;ll help you find the right fit.
            </p>
            <Link
              href="/consult-router"
              className="inline-flex items-center rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
            >
              Take The 2-Minute Quiz
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
