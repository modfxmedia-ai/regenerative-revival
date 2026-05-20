import Link from "next/link";
import { ArrowRight, ShieldCheck, Network, BookOpen, Wallet } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "For Providers",
  description:
    "NPs, PAs, and clinics: partner with Regenerative Revival to deliver concierge regenerative medicine and telehealth under Arora Health Group's clinical umbrella.",
  path: "/for-providers",
  cta: "Apply to Partner",
});

const benefits = [
  {
    icon: ShieldCheck,
    title: "Clinical Umbrella",
    body:
      "Operate under Arora Health Group's multi-state licensure. We handle the clinical infrastructure so you can focus on patient care.",
  },
  {
    icon: Network,
    title: "Wizlo Telehealth Stack",
    body:
      "Plug into a fully white-labeled telehealth platform with intake, e-Rx, compounding pharmacy partners, and patient portal — already built.",
  },
  {
    icon: BookOpen,
    title: "Protocols & Training",
    body:
      "Access vetted protocols across regenerative medicine, peptides, hormone optimization, GLP-1, and NAD+. Continuing education included.",
  },
  {
    icon: Wallet,
    title: "Concierge Economics",
    body:
      "Premium concierge pricing model — not commodity telehealth. Built around in-person dinner seminars, referrals, and high-retention programs.",
  },
];

export default function ForProvidersPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "For Providers",
          description:
            "Partner with Regenerative Revival to deliver concierge regenerative medicine and telehealth.",
          url: "/for-providers",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "For Providers",
            url: "https://www.regenerativerevival.com/for-providers",
          },
        ])}
      />

      <Breadcrumbs items={[{ label: "For Providers", href: "/for-providers" }]} />

      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-sm uppercase tracking-widest text-primary-light mb-4">
            For NPs, PAs, and Clinics
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight max-w-3xl">
            Build a Concierge Practice — Without Building the Infrastructure.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Regenerative Revival partners with licensed clinicians to deliver
            in-home regenerative therapies and physician-led telehealth under
            Arora Health Group. We bring the platform, protocols, and
            compounding pharmacy network. You bring the patient relationship.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact?path=provider"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Apply to Partner <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/concierge-care-model"
              className="inline-flex items-center text-white/80 hover:text-white px-6 py-3 font-medium transition-colors"
            >
              How The Model Works
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-lg border border-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <b.icon className="h-8 w-8 text-primary mb-4" />
                <h2 className="text-xl font-semibold text-secondary">
                  {b.title}
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-semibold">
            Interested in partnering?
          </h2>
          <p className="mt-4 text-white/80">
            Tell us a little about your practice and we&apos;ll set up a
            15-minute intro.
          </p>
          <Link
            href="/contact?path=provider"
            className="mt-8 inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Apply to Partner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
