"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  MapPin,
  Phone,
  ArrowRight,
  Building2,
  TrendingUp,
  Package,
  Headphones,
} from "lucide-react";
import type { Location } from "../../../lib/locations";
import type { PartnerService } from "../../../lib/partner-content";
import HeroContactForm from "../../../components/HeroContactForm";

const benefitImages = [
  "/AdobeStock_1877540011.jpeg",
  "/AdobeStock_1862763747.jpeg",
  "/AdobeStock_1848700749.png",
  "/AdobeStock_1877540011.jpeg",
];

interface Props {
  service: PartnerService;
  location: Location;
  intro: string;
  benefits: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
  nearby: Location[];
  relatedServices: PartnerService[];
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

const perks = [
  {
    icon: TrendingUp,
    title: "Revenue Share",
    desc: "Competitive back-end revenue sharing with zero upfront product costs",
  },
  {
    icon: Package,
    title: "Premium Supply",
    desc: "FDA-compliant products from AATB-accredited tissue banks",
  },
  {
    icon: Headphones,
    title: "Full Support",
    desc: "Training, marketing materials, and ongoing clinical support",
  },
  {
    icon: Building2,
    title: "Turnkey Setup",
    desc: "We handle compliance, logistics, and protocol development",
  },
];

export default function PartnerPageContent({
  service,
  location,
  intro,
  benefits,
  faqs,
  nearby,
  relatedServices,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-20">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.08] px-5 py-2.5 mb-6">
                <Building2 className="h-4 w-4 text-primary-light" />
                <span className="text-sm font-medium text-white/70">
                  For Medical Practices & Businesses
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight">
                {service.name} in{" "}
                <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
                  {location.city}, {location.stateAbbr}
                </span>
              </h1>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                {service.description} JV partnership with revenue sharing for{" "}
                {location.metro} area practices.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Become a Partner{" "}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:+15551234567"
                  className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] px-7 text-base font-semibold text-white transition-all hover:bg-white/[0.12]"
                >
                  <Phone className="h-4 w-4" /> ({location.areaCode}) 123-4567
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/10 shrink-0">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro with image */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 mb-6">
                Partnership Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {service.name} in {location.city}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{intro}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about/imgi_72_HERO-PRESENTER.jpg"
                alt={`${service.name} partnership`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — alternating image/text */}
      {benefits.map((section, i) => {
        const imageLeft = i % 2 === 0;
        const img = benefitImages[i % benefitImages.length];
        return (
          <section
            key={i}
            className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
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

      {/* FAQs */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Partnership FAQ for {location.city} Practices
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Common questions from {location.metro} area healthcare providers.
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
            Ready to Partner in {location.city}?
          </h2>
          <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
            Join our network of medical partners and start offering cutting-edge
            regenerative treatments with full support and shared revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30"
            >
              Start Partnership{" "}
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

      {/* Nearby */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {service.shortName} Partnerships in Nearby Cities
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {nearby.map((city) => (
              <Link
                key={city.slug}
                href={`/partners/${service.slug}/${city.slug}`}
                className="group block rounded-2xl bg-cream border border-gray-100 p-5 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {city.city}, {city.stateAbbr}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {service.shortName} · {city.metro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Partnership Programs in {location.city}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/partners/${s.slug}/${location.slug}`}
                className="group block rounded-2xl bg-white border border-gray-100 p-6 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {s.name}
                </span>
                <p className="text-xs text-gray-500 mt-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
