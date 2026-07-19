"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  MapPin,
  Phone,
  ArrowRight,
  ExternalLink,
  Shield,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import type { Location } from "../../../lib/locations";
import type { Treatment } from "../../../lib/treatments";
import HeroContactForm from "../../../components/HeroContactForm";

const sectionImages = [
  "/2149040261.jpg",
  "/2149230689.jpg",
  "/2149374070.jpg",
  "/2148882109.jpg",
  "/2149611219.jpg",
  "/about/imgi_71_HERO-STEM-CELL.jpg",
];

interface Props {
  treatment: Treatment;
  location: Location;
  intro: string;
  sections: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
  govLinks: { title: string; url: string }[];
  nearby: Location[];
  relatedTreatments: Treatment[];
  // v2 OOPSEO pillars
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: { heading: string; points: string[] };
  keywordBody: string[];
  authorityBlock: { heading: string; body: string };
  contextBlock: string[];
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-white/60 backdrop-blur-2xl border transition-all duration-300 ${open ? "border-primary/20 shadow-[0_8px_32px_rgba(107,63,160,0.08)]" : "border-white/80 shadow-[0_4px_16px_rgba(107,63,160,0.04)]"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900 pr-4">
          {faq.question}
        </span>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0 transition-all duration-300 ${open ? "rotate-180" : ""}`}
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="h-px bg-gradient-to-r from-primary/10 via-primary/5 to-transparent mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function TreatmentPageContent({
  treatment,
  location,
  intro,
  sections,
  faqs,
  govLinks,
  nearby,
  relatedTreatments,
  heroHeadline,
  heroSubheadline,
  painPoints,
  keywordBody,
  authorityBlock,
  contextBlock,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-20">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-4 w-4 text-primary-light" />
                <span className="text-sm font-medium text-white/50">
                  {location.city}, {location.stateAbbr} · {location.metro}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight">
                {heroHeadline}
              </h1>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                {heroSubheadline}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Talk to a Provider{" "}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:+16124533182"
                  className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] px-7 text-base font-semibold text-white transition-all hover:bg-white/[0.12]"
                >
                  <Phone className="h-4 w-4" /> Call 612-453-3182
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-white">
                    4.9
                  </span>
                </div>
                <span className="h-3.5 w-px bg-white/15" />
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Shield className="h-4 w-4 text-primary-light" /> FDA
                  Compliant
                </div>
                <span className="h-3.5 w-px bg-white/15" />
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Sparkles className="h-4 w-4 text-primary-light" /> AATB
                  Accredited
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points - Pillar 3 */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            {painPoints.heading}
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {painPoints.points.map((point, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/[0.05] border border-white/[0.08] p-6"
              >
                <div className="h-1 w-8 rounded-full bg-primary mb-4" />
                <p className="text-sm text-white/70 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro with image */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 mb-6">
                About This Treatment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {treatment.name} in {location.city}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{intro}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about/imgi_74_doctor-and-patient.jpg"
                alt={`${treatment.name} consultation`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections - alternating image/text layout */}
      {sections.map((section, i) => {
        const imageLeft = i % 2 === 0;
        const img = sectionImages[i % sectionImages.length];
        return (
          <section
            key={i}
            className={`py-20 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${imageLeft ? "" : "direction-rtl"}`}
              >
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  <Image
                    src={img}
                    alt={section.heading}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    {section.heading}
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Keyword Body Copy - Pillar 5 (semantic depth) */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-6">
            {keywordBody.map((paragraph, i) => (
              <p key={i} className="text-base text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions - with visual grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 mb-6">
                Wellness Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Wellness Areas We Support in {location.city}
              </h2>
              <p className="text-gray-500 mb-8">
                Our {treatment.shortName.toLowerCase()} protocols support a
                wide range of wellness goals. Find out if you&apos;re a candidate.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {treatment.medicalConditions.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 rounded-xl bg-primary/5 border border-primary/10 px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-800">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about/imgi_73_doctor-and-patient2.jpg"
                alt={`Conditions treated with ${treatment.shortName}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Authority Block - Pillar 8 */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            Why Regenerative Revival
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            {authorityBlock.heading}
          </h2>
          <p className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
            {authorityBlock.body}
          </p>
        </div>
      </section>

      {/* Context / Patient Education Block */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            What {location.city} Patients Need to Know
          </h2>
          <div className="space-y-6">
            {contextBlock.map((paragraph, i) => (
              <p key={i} className="text-base text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions About {treatment.name} in {location.city}
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Everything you need to know about{" "}
            {treatment.shortName.toLowerCase()} treatments in the{" "}
            {location.metro} area.
          </p>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA with background image */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/about/imgi_71_HERO-STEM-CELL.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-secondary/90" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Talk to a Provider About {treatment.name} in {location.city}
          </h2>
          <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
            A licensed clinician will review your case and walk you through
            whether {treatment.shortName.toLowerCase()} is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30"
            >
              Talk to a Provider{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+16124533182"
              className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/[0.06] border border-white/[0.1] px-7 text-base font-semibold text-white transition-all hover:bg-white/[0.12]"
            >
              <Phone className="h-4 w-4" /> 612-453-3182
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {treatment.name} in Nearby Cities
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {nearby.map((city) => (
              <Link
                key={city.slug}
                href={`/treatments/${treatment.slug}/${city.slug}`}
                className="group block rounded-2xl bg-cream border border-gray-100 p-5 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {city.city}, {city.stateAbbr}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {treatment.name} · {city.metro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Treatments in {location.city}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedTreatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}/${location.slug}`}
                className="group block rounded-2xl bg-white border border-gray-100 p-5 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {t.name}
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  {t.shortName} in {location.city}, {location.stateAbbr}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gov Resources */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Authoritative Resources
          </h3>
          <div className="flex flex-col gap-2">
            {govLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" /> {link.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
