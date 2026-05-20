import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { generatePageMetadata } from "../../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema } from "../../lib/schema";

export const metadata = generatePageMetadata({
  title: "About Seth Berge — Founder",
  description:
    "Seth Berge founded Regenerative Revival to make concierge regenerative medicine and longevity care available outside the clinic walls.",
  path: "/about/founder",
});

export default function FounderPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "About Seth Berge — Founder",
          description:
            "The founder story behind Regenerative Revival.",
          url: "/about/founder",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "About", url: "https://www.regenerativerevival.com/about" },
          {
            name: "Founder",
            url: "https://www.regenerativerevival.com/about/founder",
          },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: "About", href: "/about" },
          { label: "Founder", href: "/about/founder" },
        ]}
      />

      <section className="bg-secondary text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-sm uppercase tracking-widest text-primary-light mb-4">
            Founder
          </p>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
            Seth Berge
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Founder, Regenerative Revival. Building the concierge medical brand
            for people who refuse to treat aging as inevitable.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16 prose prose-lg text-gray-700">
          {/* TODO: Final founder copy pending from Lydia (ModFX). Placeholder
              draft below — replace at content freeze (end of Week 3). */}
          <h2 className="text-3xl font-semibold text-secondary">
            Why Regenerative Revival exists
          </h2>
          <p>
            Seth Berge founded Regenerative Revival after watching the
            regenerative medicine industry split in two: white-glove clinics
            that locked the best protocols behind in-person-only access, and
            commodity telehealth brands that ship one drug in a box and call it
            care.
          </p>
          <p>
            Regenerative Revival is built to be neither. We deliver concierge
            regenerative therapies in your home, and we extend the same
            physician-led team into telehealth for hormones, peptides, GLP-1,
            and NAD+. One team, one chart, one plan — for the best decade of
            your life.
          </p>

          <h2 className="text-3xl font-semibold text-secondary mt-12">
            The dinner-seminar model
          </h2>
          <p>
            Most of our patients meet us first at a private dinner seminar.
            That&apos;s where Seth and our clinical team walk through what
            regenerative medicine can and can&apos;t do — without the sales
            pressure of a clinic appointment. The website is built to extend
            that experience, not replace it.
          </p>

          <div className="mt-10 not-prose flex flex-wrap gap-4">
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
