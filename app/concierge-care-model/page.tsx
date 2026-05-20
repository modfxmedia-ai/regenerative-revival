import Link from "next/link";
import { ArrowRight, Home, Stethoscope, Users } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, breadcrumbSchema, medicalWebPageSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Concierge Care Model",
  description:
    "How Regenerative Revival delivers regenerative medicine and telehealth under one physician-led roof — in your home or online, with one patient record.",
  path: "/concierge-care-model",
});

const pillars = [
  {
    icon: Stethoscope,
    title: "Physician-Led, NP-Delivered",
    body: "Every patient is overseen by Dr. Sean Arora and Arora Health Group. Nurse Practitioners deliver day-to-day care, with physician oversight on every clinical decision.",
  },
  {
    icon: Home,
    title: "In-Home Concierge for Regenerative",
    body: "Our regenerative therapies — including Wharton's Jelly stem cell treatment — are delivered in your home by a licensed clinician. No clinic visit, no waiting room.",
  },
  {
    icon: Users,
    title: "One Plan, One Patient Record",
    body: "Whether you start with regenerative therapy, hormones, peptides, or NAD+, your full history lives in one chart. Programs are coordinated, not siloed.",
  },
];

export default function ConciergeCareModelPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "Concierge Care Model",
          description:
            "How Regenerative Revival delivers concierge regenerative medicine plus telehealth under one physician-led roof.",
          url: "/concierge-care-model",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Concierge Care Model",
            url: "https://www.regenerativerevival.com/concierge-care-model",
          },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: "Concierge Care Model", href: "/concierge-care-model" },
        ]}
      />

      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-sm uppercase tracking-widest text-primary-light mb-4">
            How We Work
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight max-w-3xl">
            One Medical Team. One Plan. The Best Decade of Your Life.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Regenerative Revival is a concierge medical brand operating under
            Arora Health Group. We combine in-home regenerative therapies with
            physician-led telehealth — under one chart, one plan, and one team
            that knows you.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <p.icon className="h-8 w-8 text-primary mb-4" />
                <h2 className="text-xl font-semibold text-secondary">
                  {p.title}
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondary">
            Why This Model Matters
          </h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-700">
            <p>
              Most telehealth brands sell you a single product. Most concierge
              clinics only do one thing. The result for patients: a folder of
              disconnected providers, prescriptions, and protocols that
              don&apos;t talk to each other.
            </p>
            <p>
              We built Regenerative Revival to be the opposite. Every program —
              regenerative therapy, GLP-1, peptides, hormone optimization,
              NAD+ — runs through the same clinical team, the same chart, and
              the same long-term plan.
            </p>
            <p>
              That&apos;s how a weight-loss protocol can be coordinated with a
              joint regeneration plan, or how an NAD+ program can plug into a
              peptide stack — without three different providers second-guessing
              each other.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/consult-router"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Take The 2-Minute Quiz <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center text-secondary hover:text-primary px-6 py-3 font-medium transition-colors"
            >
              Meet The Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
