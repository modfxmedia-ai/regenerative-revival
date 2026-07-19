import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Radio, Layers, Target, TrendingUp } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ComplianceDisclaimer from "../components/ComplianceDisclaimer";
import QuizCTA from "../components/QuizCTA";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  medicalWebPageSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "../lib/schema";

/**
 * Primary keyword: "exosome therapy"
 * Secondary: "exosome stem cell therapy", "what are exosomes"
 */
export const metadata = generatePageMetadata({
  title: "Exosome Therapy - Science & Benefits",
  description:
    "Exosomes amplify stem cell therapy by carrying regenerative signals to damaged tissue. Add-on to Wharton's Jelly protocols.",
  path: "/why-exosomes",
});

const faqs = [
  {
    question: "What are exosomes and how do they work?",
    answer:
      "Exosomes are nano-sized extracellular vesicles (30–150 nanometers) secreted by cells - including mesenchymal stem cells. They carry proteins, lipids, and RNA that act as molecular signals, instructing recipient cells to reduce inflammation, repair tissue, and regenerate. Think of them as the messaging system that tells your body what to do.",
  },
  {
    question: "Are exosomes the same as stem cells?",
    answer:
      "No. Stem cells are living cells that can differentiate and divide. Exosomes are cell-free vesicles - they carry the signaling molecules that stem cells produce, without the cells themselves. This makes them easier to standardize, store, and administer, with a lower risk of immune reaction.",
  },
  {
    question: "What conditions can exosome therapy address?",
    answer:
      "Exosome therapy is used alongside stem cell protocols for joint degeneration, soft-tissue injuries, chronic inflammation, and recovery optimization. It is not a standalone therapy for systemic diseases.",
  },
  {
    question: "How are exosomes administered?",
    answer:
      "Exosomes are typically administered via targeted injection to the affected area, often in combination with Wharton's Jelly MSC therapy. The procedure is performed by a licensed nurse practitioner in your home.",
  },
  {
    question: "Is exosome therapy FDA-approved?",
    answer:
      "Exosome therapy for musculoskeletal conditions is not FDA-approved as a finished drug product. It is administered as part of a physician-supervised regenerative protocol. All products we use are sourced from AATB-accredited tissue banks and tested for safety and potency.",
  },
];

const mechanisms = [
  {
    icon: Radio,
    title: "Cell-to-cell communication",
    desc: "Exosomes carry microRNA, proteins, and lipids that reprogram recipient cells - turning down inflammatory pathways and turning up repair signals. They are the body's native messaging system, amplified.",
  },
  {
    icon: Layers,
    title: "Paracrine signaling at scale",
    desc: "A single MSC secretes thousands of exosomes. When delivered therapeutically, they flood the target tissue with regenerative signals - far more than the cells themselves could produce in situ.",
  },
  {
    icon: Target,
    title: "Targeted delivery",
    desc: "Exosomes are injected directly into the affected joint or tissue. Their nano-scale size allows them to penetrate cell membranes and reach intracellular targets that larger molecules cannot.",
  },
  {
    icon: TrendingUp,
    title: "Amplifies stem cell outcomes",
    desc: "When used alongside Wharton's Jelly MSC therapy, exosomes extend the regenerative signal - continuing to instruct tissue repair long after the initial therapy.",
  },
];

export default function WhyExosomesPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "Exosome Therapy - The Signaling Layer of Regenerative Medicine",
          description:
            "Exosomes are nano-sized vesicles that carry regenerative signals. Learn how exosome therapy amplifies stem cell therapy.",
          url: "/why-exosomes",
          medicalConditions: ["Tissue Damage", "Chronic Inflammation", "Joint Degeneration", "Sports Injuries"],
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Exosome Therapy",
          description: "Exosome therapy for tissue repair and regeneration, delivered alongside Wharton's Jelly MSC protocols.",
          url: "/why-exosomes",
          serviceType: "Regenerative Medicine",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          { name: "Why Exosomes?", url: "https://regenerativerevival.com/why-exosomes" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ label: "Why Exosomes?", href: "/why-exosomes" }]} />

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] pt-20 flex items-end overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image
            src="/Why Exosomes Page&Contact page-_Ready to Explore Exosome Therapy__ And background image on contact pagesection.jpeg"
            alt="Exosome therapy regenerative medicine"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/70 to-[#021E3C]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/80 via-[#021E3C]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#345691]/25 mix-blend-multiply" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#71A7F5]/15 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28 pt-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">Regenerative Medicine · Cell Signaling</span>
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] font-normal text-[2.75rem] sm:text-5xl lg:text-[4.5rem] text-white leading-[1.02] tracking-[-0.02em]">
              Exosomes - the{" "}
              <span className="text-[#6762AF] font-semibold">
                signaling layer
              </span>{" "}
              that drives repair
            </h1>
            <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
              Stem cells don&apos;t repair tissue directly. They send signals. Exosomes are those signals - nano-sized vesicles packed with the molecular instructions that tell your body to reduce inflammation, rebuild tissue, and regenerate. Here&apos;s why they matter.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/consult-router"
                className="group inline-flex h-13 py-3.5 items-center gap-2 rounded-full bg-white px-7 text-[14px] font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all"
              >
                Take The 2-Minute Quiz
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/whartons-jelly"
                className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 transition-all"
              >
                Where They Come From: Wharton&apos;s Jelly →
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71A7F5]/30 to-transparent" />
      </section>

      {/* ── What are exosomes ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">The Science</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                What are exosomes, and why do they matter?
              </h2>
              <div className="mt-6 space-y-5 text-[15px] text-[#4A4F66] leading-[1.75]">
                <p>
                  For decades, researchers assumed stem cells repaired tissue by differentiating into new cells - replacing damaged cartilage with new cartilage, damaged muscle with new muscle. The reality is more elegant: stem cells primarily work by secreting signals that instruct the body&apos;s own cells to repair themselves.
                </p>
                <p>
                  Exosomes are the primary vehicle for those signals. They are nano-sized vesicles (30–150 nanometers) that bud off from cell membranes and carry a cargo of microRNA, proteins, and lipids. When they fuse with a recipient cell, they deliver their payload - reprogramming the cell&apos;s behavior.
                </p>
                <p>
                  In the context of regenerative medicine, MSC-derived exosomes carry anti-inflammatory signals, pro-regenerative growth factors, and RNA sequences that activate tissue repair pathways. They are, in effect, the active ingredient in stem cell therapy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_24px_64px_-12px_rgba(52,86,145,0.25)]">
                <Image
                  src="/news/imgi_22_stem-cells-for-optimized-healing-980x551.jpg"
                  alt="Exosome signaling in regenerative medicine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/25 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2rem] pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-[0_16px_40px_-8px_rgba(26,31,48,0.2)] border border-[#F1ECF8]">
                <div className="font-[family-name:var(--font-poppins)] text-4xl text-[#345691]">30–150</div>
                <div className="text-[11px] text-[#4A4F66] mt-1 leading-snug">Nanometers - smaller<br />than a virus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How they work ── */}
      <section className="bg-[#F1ECF8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Mechanism</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Four ways exosomes drive regeneration
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {mechanisms.map((m) => (
              <div key={m.title} className="bg-white rounded-[20px] p-7 border border-white hover:border-[#6762AF]/20 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] transition-all duration-500">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1ECF8] border border-[#6762AF]/10 mb-5">
                  <m.icon className="h-5 w-5 text-[#6762AF]" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[19px] text-[#1A1F30] mb-3">{m.title}</h3>
                <p className="text-[13.5px] text-[#4A4F66] leading-[1.65]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exosomes + Wharton's Jelly ── */}
      <section className="bg-[#1A1F30] py-20 lg:py-28">
        <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#71A7F5]">Combined Protocol</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl lg:text-[3rem] text-white leading-[1.05] tracking-[-0.02em]">
                Exosomes + Wharton&apos;s Jelly - why we use both
              </h2>
              <div className="mt-6 space-y-5 text-[15px] text-white/65 leading-[1.75]">
                <p>
                  Wharton&apos;s Jelly MSCs are living cells that engraft in the target tissue and continue producing regenerative signals for weeks. Exosomes are the concentrated signaling payload - they act immediately, flooding the tissue with repair instructions from the moment of injection.
                </p>
                <p>
                  Used together, they create a two-phase regenerative response: exosomes provide the immediate signal burst, while MSCs sustain the regenerative environment over time. This is why our combined protocols consistently outperform either therapy alone.
                </p>
              </div>
              <ul className="mt-7 flex flex-col gap-3">
                {[
                  "Immediate signaling from exosomes",
                  "Sustained regeneration from MSCs",
                  "Reduced inflammation from both",
                  "Single in-home session",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-white/80">
                    <CheckCircle className="h-4 w-4 text-[#71A7F5] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/consult-router"
                className="mt-9 group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.3)] transition-all"
              >
                See if you qualify
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-[0_24px_64px_-12px_rgba(0,0,0,0.5)]">
                <Image
                  src="/news/imgi_18_growth-factors-980x551.jpg"
                  alt="Exosome and stem cell combined therapy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/40 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            Exosome therapy questions answered
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-[#F1ECF8] pb-6">
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[18px] text-[#1A1F30] mb-3">{faq.question}</h3>
                <p className="text-[14px] text-[#4A4F66] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuizCTA />
      <ComplianceDisclaimer variant="regen_consult_only" />
    </>
  );
}
