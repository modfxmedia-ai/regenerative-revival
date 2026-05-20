import Link from "next/link";
import { MapPin, ArrowRight, Truck, Home as HomeIcon } from "lucide-react";
import { locations } from "../lib/locations";
import { treatments } from "../lib/treatments";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  webPageSchema,
  breadcrumbSchema,
  organizationSchema,
} from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = generatePageMetadata({
  title: "Service Areas — In-Home Regenerative Medicine Nationwide",
  description:
    "Regenerative Revival delivers concierge in-home stem cell, Wharton's Jelly, and exosome therapy across 100+ US cities — plus nationwide telehealth for peptides, hormones, and NAD+.",
  path: "/locations",
});

// Slugify state name for anchor IDs
const stateSlug = (state: string) =>
  state.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

// V2 priority treatments featured on every city card.
// Pulled from treatments.ts — keep these 4 in sync with the catalog hubs.
const FEATURED_TREATMENT_SLUGS = [
  "stem-cell-therapy",
  "whartons-jelly-treatment",
  "concierge-regenerative-medicine",
  "peptide-therapy",
];

export default function LocationsPage() {
  // Group locations by state
  const byState: Record<string, typeof locations> = {};
  for (const loc of locations) {
    if (!byState[loc.state]) byState[loc.state] = [];
    byState[loc.state].push(loc);
  }
  const sortedStates = Object.keys(byState).sort();

  const featuredTreatments = FEATURED_TREATMENT_SLUGS.map((slug) =>
    treatments.find((t) => t.slug === slug)
  ).filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={webPageSchema({
          title:
            "Service Areas — In-Home Regenerative Medicine & Nationwide Telehealth",
          description:
            "Find Regenerative Revival in your city. Concierge in-home regenerative medicine across 100+ US cities and nationwide telehealth for peptides, hormones, and NAD+.",
          url: "/locations",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Service Areas",
            url: "https://www.regenerativerevival.com/locations",
          },
        ])}
      />
      <Breadcrumbs items={[{ label: "Service Areas", href: "/locations" }]} />

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
            Service Areas
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-4xl">
            Concierge regenerative medicine{" "}
            <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
              in your city
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
            White-glove, in-home regenerative medicine across {locations.length}+ U.S. cities — plus
            nationwide telehealth for peptides, hormones, and NAD+. Find your nearest service area
            below, or take the 2-question quiz to be routed to the right program.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/consult-router"
              className="inline-flex items-center gap-2 rounded-full bg-white text-secondary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Take the 2-Question Quiz
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/concierge-care-model"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              How concierge works
            </Link>
          </div>
        </div>
      </section>

      {/* Two-track delivery model */}
      <section className="py-12 bg-cream border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <HomeIcon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">
                In-Home Concierge — {locations.length}+ Cities
              </h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Stem cell therapy, Wharton&apos;s Jelly, exosomes, PRP, and full regenerative
              protocols delivered in your home by a licensed clinician under Arora Health Group
              clinical oversight.
            </p>
            <Link
              href="#service-areas"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Browse cities ↓
            </Link>
          </div>
          <div className="rounded-2xl bg-white border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">
                Nationwide Telehealth — All 50 States
              </h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Compounded peptides, GLP-1 weight loss, hormone optimization, and NAD+ therapy
              prescribed via physician-led telehealth and shipped from a U.S. compounding pharmacy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/hormones-peptides"
                className="text-sm font-semibold text-secondary hover:text-secondary/80"
              >
                Hormones &amp; Peptides →
              </Link>
              <Link
                href="/nad"
                className="text-sm font-semibold text-secondary hover:text-secondary/80"
              >
                NAD+ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments quick nav — equity passes to /treatments/[slug] hubs */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Browse by Treatment
          </h2>
          <div className="flex flex-wrap gap-2">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="inline-flex items-center rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* State A-Z jump nav (sticky) */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap pt-1">
              Jump to State:
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {sortedStates.map((state) => (
                <a
                  key={state}
                  href={`#${stateSlug(state)}`}
                  className="text-xs font-medium text-gray-600 hover:text-primary px-2 py-1 rounded hover:bg-primary/5 transition-colors"
                >
                  {byState[state][0].stateAbbr}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations by State */}
      <section id="service-areas" className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {sortedStates.map((state) => (
            <div
              key={state}
              id={stateSlug(state)}
              className="mb-12 last:mb-0 scroll-mt-32"
            >
              <div className="flex items-baseline justify-between mb-6 border-b border-gray-200 pb-3">
                <h2 className="text-2xl font-bold text-gray-900">{state}</h2>
                <span className="text-sm text-gray-500">
                  {byState[state].length}{" "}
                  {byState[state].length === 1 ? "city" : "cities"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {byState[state].map((loc) => (
                  <div
                    key={loc.slug}
                    className="rounded-2xl bg-white border border-gray-100 p-5 hover:shadow-lg hover:border-primary/20 transition-all"
                  >
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 leading-tight">
                          {loc.city}, {loc.stateAbbr}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">{loc.metro}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 mt-3 pt-3 border-t border-gray-50">
                      {featuredTreatments.map((t) => (
                        <Link
                          key={t.slug}
                          href={`/treatments/${t.slug}/${loc.slug}`}
                          className="text-xs text-gray-600 hover:text-primary transition-colors flex items-center justify-between group"
                        >
                          <span>{t.shortName}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                      <Link
                        href={`/treatments/stem-cell-therapy/${loc.slug}`}
                        className="text-xs font-semibold text-primary hover:text-primary-dark mt-1"
                      >
                        View all {treatments.length} treatments →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Don&apos;t see your city?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We&apos;re expanding concierge coverage every month. Nationwide telehealth for
            peptides, hormones, and NAD+ ships to all 50 states today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/consult-router"
              className="inline-flex items-center gap-2 rounded-full bg-white text-secondary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Take the Quiz
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Request a Service Area
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
