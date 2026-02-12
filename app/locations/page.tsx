import Link from "next/link";
import { locations } from "../lib/locations";
import { treatments } from "../lib/treatments";
import { partnerServices } from "../lib/partner-content";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = generatePageMetadata({
  title: "Locations",
  description: "Find stem cell therapy, regenerative medicine, and Wharton's Jelly treatments near you. Serving over 90 cities across the United States.",
  path: "/locations",
});

export default function LocationsPage() {
  // Group locations by state
  const byState: Record<string, typeof locations> = {};
  for (const loc of locations) {
    const key = loc.state;
    if (!byState[key]) byState[key] = [];
    byState[key].push(loc);
  }
  const sortedStates = Object.keys(byState).sort();

  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Locations — Regenerative Revival",
          description:
            "Find regenerative medicine treatments near you across 90+ US cities.",
          url: "/locations",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Locations",
            url: "https://www.regenerativerevival.com/locations",
          },
        ])}
      />
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Find Treatment{" "}
            <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
              Near You
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl">
            Regenerative Revival serves over 90 cities across the United States
            with advanced stem cell therapy, Wharton&apos;s Jelly treatments,
            exosome therapy, and more.
          </p>
        </div>
      </section>

      {/* Treatments quick nav */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Browse by Treatment
          </h2>
          <div className="flex flex-wrap gap-2">
            {treatments.map((t) => (
              <span
                key={t.slug}
                className="inline-flex items-center rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {t.name}
              </span>
            ))}
            {partnerServices.map((s) => (
              <span
                key={s.slug}
                className="inline-flex items-center rounded-full bg-secondary/5 border border-secondary/10 px-4 py-2 text-sm font-medium text-secondary"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Locations by State */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {sortedStates.map((state) => (
            <div key={state} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                {state}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {byState[state].map((loc) => (
                  <div
                    key={loc.slug}
                    className="rounded-2xl bg-white border border-gray-100 p-5 hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {loc.city}, {loc.stateAbbr}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      {treatments.slice(0, 3).map((t) => (
                        <Link
                          key={t.slug}
                          href={`/treatments/${t.slug}/${loc.slug}`}
                          className="text-xs text-primary hover:text-primary-dark transition-colors"
                        >
                          {t.name} →
                        </Link>
                      ))}
                      <Link
                        href={`/partners/stem-cell-provider/${loc.slug}`}
                        className="text-xs text-secondary hover:text-secondary/80 transition-colors"
                      >
                        Partner Program →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
