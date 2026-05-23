import Link from "next/link";
import { partnerServices } from "../lib/partner-content";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";
import AnimatedSection from "../components/AnimatedSection";

export const metadata = generatePageMetadata({
  title: "Partner Programs for Medical Practices",
  description:
    "Join Regenerative Revival's partner network. Stem cell, Wharton's Jelly, exosome, and regenerative medicine partnership programs with turnkey support, training, and revenue sharing for clinics nationwide.",
  path: "/partners",
});

export default function PartnersHubPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Partner Programs — Regenerative Revival",
          description:
            "B2B partnership programs for medical practices that want to offer regenerative medicine.",
          url: "/partners",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "Partner Programs", url: "https://www.regenerativerevival.com/partners" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Partner Programs", href: "/partners" }]} />

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-16">
          <AnimatedSection y={20}>
            <span className="inline-block rounded-full bg-primary/20 border border-primary/30 px-4 py-1 text-xs font-semibold text-primary-light uppercase tracking-wider mb-4">
              For Medical Practices
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Add Regenerative Medicine to{" "}
              <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
                Your Practice
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl">
              Turnkey partnership programs for clinics, hospitals, and healthcare
              businesses. Premium products, hands-on training, marketing support,
              and revenue sharing with zero upfront cost.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner programs grid */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {partnerServices.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/partners/${s.slug}`}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all block h-full"
                >
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                    {s.name}
                  </h2>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    {s.description}
                  </p>
                  <span className="text-sm font-semibold text-primary group-hover:underline">
                    See partner locations →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What partners get */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              What Our Partners Get
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Premium Products", body: "FDA-compliant tissue products and biologics from accredited tissue banks." },
              { title: "Clinical Training", body: "Hands-on staff training on protocols, technique, and patient management." },
              { title: "Marketing Support", body: "Patient education materials, local SEO assets, and lead-gen support." },
              { title: "Revenue Sharing", body: "Aligned incentives — we win when your practice wins. Zero upfront risk." },
            ].map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08}>
                <div className="bg-cream rounded-2xl p-6 border border-gray-100 h-full">
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <AnimatedSection>
        <section className="bg-cream py-12 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to discuss partnership?
            </h2>
            <p className="text-gray-600 mb-6">
              Speak with our partnership team about the right program for your
              practice.
            </p>
            <Link
              href="/partner-with-us"
              className="inline-flex items-center rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
            >
              Apply to Partner
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
