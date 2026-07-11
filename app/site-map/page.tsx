import Link from "next/link";
import { articles } from "../news/data";
import { locations } from "../lib/locations";
import { treatments } from "../lib/treatments";
import { partnerServices } from "../lib/partner-content";
import { products } from "../lib/products";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";

const SITE_URL = "https://regenerativerevival.com";

export const metadata = generatePageMetadata({
  title: "Site Map — Every Page on Regenerative Revival",
  description:
    "Browse the complete directory of Regenerative Revival pages — treatments, locations, hormone and peptide programs, NAD+, partner services, and articles.",
  path: "/site-map",
});

// ── Static / hub pages (kept in parity with app/sitemap.ts) ──
const corePages: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Founder", href: "/about/founder" },
  { label: "Why We're Different", href: "/about/why-were-different" },
  { label: "Contact", href: "/contact" },
  { label: "News & Articles", href: "/news" },
];

const regenerativePages: { label: string; href: string }[] = [
  { label: "Stem Cell Therapy", href: "/stem-cell-therapy" },
  { label: "Wharton's Jelly", href: "/whartons-jelly" },
  { label: "Why Exosomes", href: "/why-exosomes" },
  { label: "Why Stem Cells", href: "/why-stem-cells" },
  { label: "Concierge Care Model", href: "/concierge-care-model" },
  { label: "Services", href: "/services" },
];

const telehealthPages: { label: string; href: string }[] = [
  { label: "Hormones", href: "/hormones" },
  { label: "Peptides", href: "/peptides" },
  { label: "NAD+ & Supplements", href: "/nad" },
];

const programmaticHubs: { label: string; href: string }[] = [
  { label: "Treatments", href: "/treatments" },
  { label: "Locations", href: "/locations" },
  { label: "Partners", href: "/partners" },
];

const businessPages: { label: string; href: string }[] = [
  { label: "For Providers", href: "/for-providers" },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Testimonials", href: "/testimonials" },
];

const legalPages: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteMapPage() {
  const hpProducts = products.filter((p) => p.hub === "hormones-peptides");
  const nadProducts = products.filter((p) => p.hub === "nad");

  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Site Map — Regenerative Revival",
          description:
            "Complete directory of every page on Regenerative Revival.",
          url: "/site-map",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Site Map", url: `${SITE_URL}/site-map` },
        ])}
      />
      <Breadcrumbs items={[{ label: "Site Map", href: "/site-map" }]} />

      {/* Hero */}
      <section className="bg-secondary pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Site Map
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl">
            Every page on Regenerative Revival, in one place. Browse treatments,
            service areas, programs, partner services, and articles.
          </p>
        </div>
      </section>

      <section className="py-14 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-14">
          {/* Top-level pages */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <LinkGroup title="Main Pages" links={corePages} />
            <LinkGroup title="Regenerative Medicine" links={regenerativePages} />
            <LinkGroup title="Telehealth" links={telehealthPages} />
            <LinkGroup title="Browse By" links={programmaticHubs} />
            <LinkGroup title="For Business" links={businessPages} />
            <LinkGroup title="Legal" links={legalPages} />
          </div>

          {/* Hormones & Peptides products */}
          {hpProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Hormone & Peptide Programs
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                {hpProducts.length} programs
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {hpProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/hormones-peptides/${p.slug}`}
                    className="text-sm text-gray-600 hover:text-primary hover:underline"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* NAD+ products */}
          {nadProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                NAD+ & Supplement Programs
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                {nadProducts.length} programs
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {nadProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/nad/${p.slug}`}
                    className="text-sm text-gray-600 hover:text-primary hover:underline"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Treatments × Locations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Treatments by Location
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              {treatments.length} treatments across {locations.length} cities
            </p>
            <div className="space-y-8">
              {treatments.map((t) => (
                <div key={t.slug}>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    <Link
                      href={`/treatments/${t.slug}`}
                      className="hover:text-primary hover:underline"
                    >
                      {t.name}
                    </Link>
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1.5">
                    {locations.map((l) => (
                      <Link
                        key={l.slug}
                        href={`/treatments/${t.slug}/${l.slug}`}
                        className="text-[13px] text-gray-500 hover:text-primary hover:underline"
                      >
                        {l.city}, {l.stateAbbr}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner services × Locations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Partner Services by Location
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              {partnerServices.length} services across {locations.length} cities
            </p>
            <div className="space-y-8">
              {partnerServices.map((s) => (
                <div key={s.slug}>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    <Link
                      href={`/partners/${s.slug}`}
                      className="hover:text-primary hover:underline"
                    >
                      {s.name}
                    </Link>
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1.5">
                    {locations.map((l) => (
                      <Link
                        key={l.slug}
                        href={`/partners/${s.slug}/${l.slug}`}
                        className="text-[13px] text-gray-500 hover:text-primary hover:underline"
                      >
                        {l.city}, {l.stateAbbr}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News articles */}
          {articles.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Articles
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                {articles.length} articles
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {articles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/news/${a.slug}`}
                    className="text-sm text-gray-600 hover:text-primary hover:underline"
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
