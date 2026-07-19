import Link from "next/link";
import { notFound } from "next/navigation";
import { treatments, getTreatmentBySlug } from "../../lib/treatments";
import { locations } from "../../lib/locations";
import { generatePageMetadata } from "../../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../../lib/schema";
import Breadcrumbs from "../../components/Breadcrumbs";
import AnimatedSection from "../../components/AnimatedSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) {
    return { title: "Treatment Not Found | Regenerative Revival" };
  }
  return generatePageMetadata({
    title: `${treatment.name} Locations`,
    description: `Find ${treatment.name.toLowerCase()} near you. ${treatment.description} Available across 100+ US cities.`,
    path: `/treatments/${slug}`,
  });
}

export default async function TreatmentLocationsPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

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
          title: `${treatment.name} - Find Locations`,
          description: treatment.description,
          url: `/treatments/${slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          { name: "Treatments", url: "https://regenerativerevival.com/treatments" },
          { name: treatment.name, url: `https://regenerativerevival.com/treatments/${slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Treatments", href: "/treatments" },
          { label: treatment.name, href: `/treatments/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-16">
          <AnimatedSection y={20}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              {treatment.name}{" "}
              <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
                Locations
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl leading-relaxed">
              {treatment.description}
            </p>
            <p className="mt-4 text-base text-white/40 max-w-3xl">
              Select your city below to view {treatment.name.toLowerCase()}{" "}
              options and take the 2-minute quiz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Medical conditions treated */}
      {treatment.medicalConditions.length > 0 && (
        <AnimatedSection>
          <section className="py-10 bg-white border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Conditions Treated
              </h2>
              <div className="flex flex-wrap gap-2">
                {treatment.medicalConditions.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Locations grouped by state */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Find {treatment.shortName} Near You
            </h2>
          </AnimatedSection>
          {sortedStates.map((state, i) => (
            <AnimatedSection key={state} delay={Math.min(i * 0.03, 0.3)}>
              <div className="mb-12 last:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  {state}
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {byState[state].map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/treatments/${slug}/${loc.slug}`}
                      className="group bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {loc.city}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {loc.stateAbbr} · {loc.population}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <AnimatedSection>
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Don&apos;t see your city?
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re expanding fast. Get in touch and we&apos;ll match you
              with a {treatment.shortName.toLowerCase()} provider near you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
