"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Phone, ArrowRight, ExternalLink, Shield, Star, Sparkles } from "lucide-react";
import type { Location } from "../../../lib/locations";
import type { Treatment } from "../../../lib/treatments";
import HeroContactForm from "../../../components/HeroContactForm";

interface Props {
  treatment: Treatment;
  location: Location;
  intro: string;
  sections: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
  govLinks: { title: string; url: string }[];
  nearby: Location[];
  relatedTreatments: Treatment[];
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
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
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
                {treatment.name} in{" "}
                <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
                  {location.city}, {location.stateAbbr}
                </span>
              </h1>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                {treatment.description} Serving {location.city} and the{" "}
                {location.metro} area.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Book Free Consultation{" "}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] px-7 text-base font-semibold text-white transition-all hover:bg-white/[0.12]"
                >
                  <Phone className="h-4 w-4" /> Call ({location.areaCode})
                  123-4567
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

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, i) => (
        <section
          key={i}
          className={`py-20 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {section.heading}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </div>
        </section>
      ))}

      {/* Conditions */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Conditions We Treat in {location.city}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {treatment.medicalConditions.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 rounded-xl bg-primary/5 border border-primary/10 px-4 py-3"
              >
                <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-medium text-gray-800">{c}</span>
              </div>
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

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started in {location.city}?
          </h2>
          <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how{" "}
            {treatment.name.toLowerCase()} can help you live pain-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30"
            >
              Book Free Consultation{" "}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+15551234567"
              className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/[0.06] border border-white/[0.1] px-7 text-base font-semibold text-white transition-all hover:bg-white/[0.12]"
            >
              <Phone className="h-4 w-4" /> ({location.areaCode}) 123-4567
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
