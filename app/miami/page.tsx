import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Trophy,
  Users,
  Home as HomeIcon,
  Activity,
  ShieldCheck,
  Dna,
  Sparkles,
  Plane,
  Clock,
} from "lucide-react";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema } from "../lib/schema";
import LpLeadForm from "../components/LpLeadForm";

export const metadata = generatePageMetadata({
  title: "Got Stem Cells? - Miami Air & Sea Show Special",
  description:
    "Exclusive Miami Air & Sea Show offer: $500 off your first stem cell therapy. Concierge regenerative medicine delivered to your home or office.",
  path: "/miami",
});

const audiences = [
  { icon: Trophy, label: "Athletes" },
  { icon: Activity, label: "Active Seniors" },
  { icon: Sparkles, label: "Healthy Aging" },
  { icon: ShieldCheck, label: "Veterans" },
];

const offerings = [
  {
    icon: Activity,
    title: "Sports Injuries & Joint Pain",
    desc: "Targeted therapy for osteoarthritis, chronic pain, and athletic injuries.",
  },
  {
    icon: ShieldCheck,
    title: "Chronic Pain Management",
    desc: "Non-invasive alternatives to traditional pain management approaches.",
  },
  {
    icon: Dna,
    title: "Degenerative Diseases",
    desc: "Mesenchymal stem cells and growth factors that promote tissue repair.",
  },
  {
    icon: Sparkles,
    title: "Vitality & Recovery",
    desc: "Restore energy, reduce inflammation, and accelerate healing naturally.",
  },
];

const whoWeAre = [
  {
    icon: Trophy,
    title: "Since 2018",
    desc: "Connecting thousands of patients with licensed practitioners across all 50 states.",
  },
  {
    icon: Users,
    title: "100+ Licensed Practitioners",
    desc: "Network of trained PAs, MDs, and DOs ready to provide personalized care.",
  },
  {
    icon: HomeIcon,
    title: "Concierge Service",
    desc: "Therapy delivered to your home or office anywhere in the United States.",
  },
];

export default function MiamiPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Got Stem Cells? - Miami Air & Sea Show Special",
          description:
            "Exclusive Miami Air & Sea Show offer: $500 off your first stem cell therapy. Concierge regenerative medicine delivered to your home or office.",
          url: "/miami",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          { name: "Miami", url: "https://regenerativerevival.com/miami" },
        ])}
      />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image
            src="/2149611219.jpg"
            alt="Miami skyline and ocean"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/80 to-[#021E3C]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/80 via-transparent to-transparent" />
        </div>
        <div className="absolute -right-20 top-1/4 h-[520px] w-[520px] rounded-full bg-[#0EA5E9]/30 blur-[160px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/40 bg-[#0EA5E9]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7DD3FC]">
              <Plane className="h-3.5 w-3.5" /> Miami Air &amp; Sea Show Exclusive
            </div>
            <Image
              src="/lp/miami/gsc-logo.png"
              alt="Got Stem Cells?"
              width={560}
              height={190}
              priority
              className="h-auto w-[280px] sm:w-[360px] lg:w-[440px]"
            />
            <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/80 lg:text-xl">
              Advanced stem cell therapy delivered to your home or office. Ease
              pain, restore vitality, and renew your body from within.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#offer"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#0EA5E9] px-8 text-[15px] font-semibold text-white shadow-lg shadow-[#0EA5E9]/30 transition-all hover:bg-[#0284C7]"
              >
                Get $500 OFF - Contact Us Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <div className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#0EA5E9]/40 px-7 text-[14px] font-semibold text-[#7DD3FC]">
                <Clock className="h-4 w-4" /> Limited Time - Offer Ends May 24th
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted by Legends ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0284C7]">
              Trusted by Legends
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              See why athletes and veterans choose stem cell therapy
            </h2>
            <p className="mt-4 text-[15px] text-[#4A4F66]">
              For peak performance and recovery.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative aspect-video overflow-hidden rounded-[2rem] shadow-[0_24px_64px_-12px_rgba(2,132,199,0.25)]">
              <Image
                src="/lp/miami/brett-favre.webp"
                alt="NFL Hall of Famer Brett Favre shares his stem cell therapy experience"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-[18px] font-semibold text-white">
                  NFL Hall of Famer Brett Favre
                </div>
                <div className="text-[13px] text-white/70">
                  Shares his stem cell therapy experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="bg-[#F0F9FF] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0284C7]">
              Who We Are
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Connecting thousands of patients with licensed practitioners
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A4F66]">
              Regenerative Revival educates clients on advanced wellness
              protocols using Wharton&apos;s Jelly stem cells and exosomes from
              umbilical cord tissue. We connect you with licensed practitioners
              who deliver personalized therapy plans right to your location - 
              making cutting-edge regenerative therapy accessible and
              affordable.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whoWeAre.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[#CFE9FB] bg-white p-7 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0F2FE]">
                  <c.icon className="h-5 w-5 text-[#0EA5E9]" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold text-[#1A1F30]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#4A4F66]">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted by athletes/seniors/veterans ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Trusted by Athletes, Seniors, Veterans &amp; Active Individuals
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A4F66]">
              From professional athletes to weekend warriors, our stem cell
              therapy helps people stay active and pain-free. Whether you&apos;re
              recovering from injury, managing chronic pain, or looking to
              enhance performance, our personalized therapies deliver results
              where you need them most.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[#CFE9FB] bg-[#F0F9FF] p-6"
              >
                <a.icon className="h-6 w-6 text-[#0EA5E9]" />
                <span className="text-[14px] font-semibold text-[#1A1F30]">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="bg-[#F0F9FF] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0284C7]">
              What We Offer
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Comprehensive stem cell therapies
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A4F66]">
              Not ready for surgery? Stem cell therapy offers a less invasive
              alternative with no lengthy recovery time. Get back to doing what
              you love, naturally.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="flex gap-5 rounded-2xl border border-[#CFE9FB] bg-white p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE]">
                  <o.icon className="h-5 w-5 text-[#0EA5E9]" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-[#1A1F30]">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#4A4F66]">
                    {o.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] italic leading-relaxed text-[#4A4F66]">
            &ldquo;Safe, effective therapies with minimal immune rejection risk.
            Perfect for active individuals, athletes, veterans, and anyone
            seeking natural healing.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Offer + form ── */}
      <section id="offer" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0284C7]">
                Exclusive Miami Offer
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
                Air Show Weekend Special - Get $500 OFF Your First Therapy
              </h2>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-1.5 text-[13px] font-semibold text-[#0284C7]">
                Offer Ends May 24th, 2026
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "FREE initial consultation to assess your health goals",
                  "Personalized therapy plan with licensed practitioners",
                  "Concierge service delivered to your home or office",
                  "Save $500 on your first stem cell therapy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5E9]" />
                    <span className="text-[15px] text-[#1A1F30]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[12px] leading-relaxed text-[#7A7F95]">
                *Offer expires Saturday, May 24, 2026 at 11:59 PM EST. Cannot be
                combined with other offers. Exclusive to visitors from the Miami
                Air &amp; Sea Show.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#F0F9FF] p-8 lg:p-10">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-[#1A1F30]">
                Claim Your $500 Discount
              </h3>
              <p className="mt-2 text-[14px] text-[#4A4F66]">
                Free initial consultation included. Our team will reach out
                within 24 hours to discuss your personalized therapy plan.
              </p>
              <div className="mt-6">
                <LpLeadForm
                  source="miami-air-sea-show"
                  subject="Miami Air & Sea Show - $500 Off Request"
                  buttonText="Claim $500 OFF"
                  showMessage
                  accentClass="bg-[#0EA5E9] hover:bg-[#0284C7]"
                  accentTextClass="text-white"
                  successTitle="You've claimed your offer!"
                  successMessage="Our team will reach out within 24 hours to discuss your personalized therapy plan and schedule your concierge service."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA / footer note ── */}
      <section className="bg-[#021E3C] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-[family-name:var(--font-poppins)] text-[1.75rem] font-normal leading-[1.1] tracking-[-0.02em] text-white sm:text-3xl">
            Transforming lives through regenerative medicine
          </h2>
          <Link
            href="#offer"
            className="group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-[#0EA5E9] px-8 text-[15px] font-semibold text-white shadow-lg shadow-[#0EA5E9]/30 transition-all hover:bg-[#0284C7]"
          >
            Contact Us Now - Claim $500 OFF
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <p className="mx-auto mt-10 max-w-2xl text-[11px] leading-relaxed text-white/40">
            These statements have not been evaluated by the FDA. This is not
            intended to diagnose, treat, cure, or prevent any disease. This
            offer is exclusive to visitors from the Miami Air &amp; Sea Show.
          </p>
        </div>
      </section>
    </>
  );
}
