import Link from "next/link";
import { notFound } from "next/navigation";
import { partnerServices, getPartnerServiceBySlug } from "../../lib/partner-content";
import { locations } from "../../lib/locations";
import { generatePageMetadata } from "../../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../../lib/schema";
import Breadcrumbs from "../../components/Breadcrumbs";
import AnimatedSection from "../../components/AnimatedSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return partnerServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getPartnerServiceBySlug(slug);
  if (!service) {
    return { title: "Partner Program Not Found | Regenerative Revival" };
  }
  return generatePageMetadata({
    title: `${service.name} Locations`,
    description: `Become a ${service.name.toLowerCase()} partner in your area. ${service.description}`,
    path: `/partners/${slug}`,
  });
}

export default async function PartnerLocationsPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getPartnerServiceBySlug(slug);
  if (!service) notFound();

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
          title: `${service.name} — Partner Locations`,
          description: service.description,
          url: `/partners/${slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "Partner Programs", url: "https://www.regenerativerevival.com/partners" },
          { name: service.name, url: `https://www.regenerativerevival.com/partners/${slug}` },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Partner Programs", href: "/partners" },
          { label: service.name, href: `/partners/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-16">
          <AnimatedSection y={20}>
            <span className="inline-block rounded-full bg-primary/20 border border-primary/30 px-4 py-1 text-xs font-semibold text-primary-light uppercase tracking-wider mb-4">
              B2B Partnership
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              {service.name}{" "}
              <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
                by Region
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-3xl leading-relaxed">
              {service.description}
            </p>
            <p className="mt-4 text-base text-white/40 max-w-3xl">
              Select your metro area below to see partnership opportunities for
              your practice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Locations grouped by state */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              {service.shortName} Opportunities by Metro
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
                      href={`/partners/${slug}/${loc.slug}`}
                      className="group bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {loc.city}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {loc.stateAbbr} · {loc.metro}
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
              Don&apos;t see your metro?
            </h2>
            <p className="text-gray-600 mb-6">
              Tell us about your practice and we&apos;ll explore building a{" "}
              {service.shortName.toLowerCase()} partnership in your area.
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
