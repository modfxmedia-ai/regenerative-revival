import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Play,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import AnimatedSection from "../components/AnimatedSection";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  medicalWebPageSchema,
  serviceSchema,
  webPageSchema,
} from "../lib/schema";
import OndaProLeadForm from "./OndaProLeadForm";

export const metadata = generatePageMetadata({
  title: "ONDA Pro Body Contouring in Las Vegas",
  description:
    "Meet ONDA Pro at Revival Health & Wellness in Las Vegas. Non-invasive body contouring for the appearance of stubborn fat, loose skin, and cellulite. Book your free consultation.",
  path: "/onda-pro",
});

const locations = [
  {
    name: "Southwest",
    address: "7220 S. Cimarron Rd., Suite 140",
    city: "Las Vegas, NV 89113",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=7220+S.+Cimarron+Rd.+Suite+140+Las+Vegas+NV+89113",
  },
  {
    name: "Northwest",
    address: "2585 Box Canyon Dr., Suite 150",
    city: "Las Vegas, NV 89128",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=2585+Box+Canyon+Dr.+Suite+150+Las+Vegas+NV+89128",
  },
];

const facebookReels = [
  {
    href: "https://www.facebook.com/share/r/1fNfU8iunC/",
    label: "ONDA Pro reel 1",
  },
  {
    href: "https://www.facebook.com/share/r/1DWTDWH14D/",
    label: "ONDA Pro reel 2",
  },
  {
    href: "https://www.facebook.com/share/r/1DZwwtHr3C/",
    label: "ONDA Pro reel 3",
  },
  {
    href: "https://www.facebook.com/share/r/1DJe46k4i5/",
    label: "ONDA Pro reel 4",
  },
  {
    href: "https://www.facebook.com/share/r/1HdgQLt8S7/",
    label: "ONDA Pro reel 5",
  },
];

const focusAreas = [
  {
    eyebrow: "Under the chin",
    title: "A more defined profile doesn’t have to begin with surgery",
    body: "For women interested in the appearance of the area beneath the chin, the next step starts with a conversation—not a commitment. Our team will assess your goals and explain whether ONDA Pro is a suitable option. You deserve clear answers before choosing a treatment.",
  },
  {
    eyebrow: "Upper arms & targeted areas",
    title: "Body contouring should have a target. And a plan.",
    body: "For women near their goal weight who want to explore targeted contouring, the right treatment starts with understanding the specific area—not promising a number on a measuring tape. Our team will assess your goals and explain whether ONDA Pro is a suitable choice for your upper arms or other treatment areas. Make your next step an informed one.",
  },
  {
    eyebrow: "Loose upper-arm skin",
    title: "Put non-surgical skin tightening on your radar",
    body: "For women exploring treatment for the appearance of loose upper-arm skin, ONDA Pro offers a non-invasive option worth discussing. Come tell us what you’d like to address. Our team will assess the area, explain what treatment involves, and help set realistic expectations. Your goals deserve more than a one-size-fits-all recommendation.",
  },
];

export default function OndaProPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "ONDA Pro Body Contouring in Las Vegas | Revival Health & Wellness",
          description:
            "Meet ONDA Pro at Revival Health & Wellness in Las Vegas. Non-invasive body contouring for the appearance of stubborn fat, loose skin, and cellulite.",
          url: "/onda-pro",
        })}
      />
      <JsonLd
        data={medicalWebPageSchema({
          title: "ONDA Pro Body Contouring in Las Vegas",
          description:
            "Non-invasive ONDA Pro body contouring consultations at Revival Health & Wellness locations in Las Vegas.",
          url: "/onda-pro",
          medicalAudience: "Patient",
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "ONDA Pro Body Contouring",
          description:
            "Non-invasive body contouring consultations with ONDA Pro at Revival Health & Wellness in Las Vegas.",
          url: "/onda-pro",
          serviceType: "Non-invasive Body Contouring",
          areaServed: "Las Vegas, Nevada",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          {
            name: "ONDA Pro",
            url: "https://regenerativerevival.com/onda-pro",
          },
        ])}
      />

      <Breadcrumbs items={[{ label: "ONDA Pro", href: "/onda-pro" }]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1A1F30] to-[#21253C]">
        <div className="pointer-events-none absolute inset-0 lux-grid opacity-25" />
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#6762AF]/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#345691]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#71A7F5]">
              Revival Health &amp; Wellness · Las Vegas
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] text-[2.15rem] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.5rem]">
              LAS VEGAS LADIES—THE NEXT BIG THING IN BODY CONTOURING HAS ARRIVED.
            </h1>
            <p className="mt-6 text-lg font-semibold text-[#8985C5] sm:text-xl">
              Meet ONDA Pro at Revival Health &amp; Wellness.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
              Stubborn fat. Loose skin. The appearance of cellulite. Different
              concerns—and a treatment designed to address them together.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              ONDA Pro offers a non-invasive approach to body contouring, so
              exploring smoother-looking skin doesn’t have to start with surgery.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              Come meet our team, talk about your goals, and find out whether
              ONDA Pro is right for you.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#book"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#1A1F30] transition-all hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)]"
              >
                <Sparkles className="h-4 w-4 text-[#6762AF]" />
                Book Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#book"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[14px] font-medium text-white/85 transition-all hover:bg-white/10"
              >
                Book Your FREE Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Offer band ── */}
      <section className="bg-[#6762AF]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-6 sm:flex-row sm:items-center lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[14px]">
            LIMITED TIME NEW PATIENT OFFER — Book Your FREE Consultation.
          </p>
          <Link
            href="#book"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-[13px] font-semibold text-[#1A1F30] transition-all hover:bg-[#F1ECF8]"
          >
            Book Now
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Focus areas ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
              Treatment conversations
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Clear answers before you choose
            </h2>
          </div>

          <div className="flex flex-col gap-10 lg:gap-12">
            {focusAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 0.08}>
                <article
                  className={`grid items-center gap-8 rounded-[1.75rem] border border-[#F1ECF8] bg-[#F4EFFA]/60 p-8 lg:grid-cols-12 lg:gap-12 lg:p-12 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6762AF]">
                      {area.eyebrow}
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-[1.55rem] font-normal leading-[1.15] tracking-[-0.02em] text-[#1A1F30] sm:text-[1.85rem]">
                      {area.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-[15px] leading-relaxed text-[#4A4F66] lg:text-base">
                      {area.body}
                    </p>
                    <Link
                      href="#book"
                      className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#6762AF] transition-all hover:gap-2.5"
                    >
                      Book Your FREE Consultation
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="bg-[#F1ECF8] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
              Las Vegas locations
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Visit Revival Health &amp; Wellness
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((loc) => (
              <a
                key={loc.name}
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.5rem] border border-[#6762AF]/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-[#6762AF]/25 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.16)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6762AF]/10 text-[#6762AF]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-[1.35rem] font-semibold text-[#1A1F30]">
                  {loc.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4A4F66]">
                  {loc.address}
                  <br />
                  {loc.city}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#6762AF] transition-all group-hover:gap-2.5">
                  Open in Maps
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof / Facebook reels ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
              See ONDA Pro
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Watch recent Facebook reels
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A4F66]">
              See how the team introduces ONDA Pro and what a consultation
              conversation looks like.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {facebookReels.map((reel, index) => (
              <a
                key={reel.href}
                href={reel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[180px] flex-col justify-between rounded-[1.25rem] border border-[#F1ECF8] bg-gradient-to-br from-[#1A1F30] to-[#21253C] p-5 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(26,31,48,0.35)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-[#6762AF]">
                  <Play className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white">
                    {reel.label}
                  </p>
                  <p className="mt-1 text-[12px] text-white/50">
                    Reel {index + 1} · Watch on Facebook
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book form ── */}
      <section id="book" className="scroll-mt-24 bg-[#F1ECF8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
                Limited-time new patient offer
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
                Book Your FREE Consultation
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[#4A4F66]">
                Come meet our team at Revival Health &amp; Wellness in Las Vegas,
                talk about your goals, and find out whether ONDA Pro is right for
                you. No commitment—just clear answers.
              </p>

              <div className="relative mt-10 overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/about/imgi_73_doctor-and-patient2.jpg"
                  alt="Consultation at Revival Health & Wellness"
                  width={900}
                  height={700}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#6762AF]/10 bg-white p-6 shadow-[0_24px_64px_-24px_rgba(88,53,99,0.2)] sm:p-8">
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-semibold text-[#1A1F30]">
                Start your consultation request
              </h3>
              <p className="mt-2 text-[14px] text-[#4A4F66]">
                Complete the form below and our team will follow up.
              </p>
              <div className="mt-6">
                <OndaProLeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#1A1F30] py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-[family-name:var(--font-poppins)] text-[1.75rem] font-normal leading-[1.1] tracking-[-0.02em] text-white sm:text-3xl">
            Click Book Now and take the first step.
          </h2>
          <Link
            href="#book"
            className="group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-[15px] font-semibold text-[#1A1F30] transition-all hover:bg-[#F1ECF8]"
          >
            Book Now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <p className="mx-auto mt-10 max-w-2xl text-[11px] leading-relaxed text-white/40">
            ONDA Pro is a non-invasive body contouring option. Individual results
            vary. A consultation is required to determine whether treatment is
            appropriate for you. This page is for informational purposes and does
            not guarantee outcomes.
          </p>
        </div>
      </section>
    </>
  );
}
