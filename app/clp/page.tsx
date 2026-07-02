import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Ban,
  Leaf,
  Clock,
  Target,
  Pill,
  HeartPulse,
  ShieldCheck,
  Timer,
  Fingerprint,
  TrendingUp,
  Bone,
  Zap,
  Activity,
  Brain,
  Sparkles,
  Flame,
  Footprints,
  Hand,
  CheckCircle2,
} from "lucide-react";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema } from "../lib/schema";
import LpLeadForm from "../components/LpLeadForm";

export const metadata = generatePageMetadata({
  title: "Advanced Regenerative Care — Restoring Mobility, Redefining Recovery",
  description:
    "Next-generation stem cell and exosome therapies to repair tissue, reduce inflammation, and return to an active, pain-free life. Physician-supervised, integrated care.",
  path: "/clp",
  noIndex: true,
});

const reasons = [
  { icon: Ban, title: "Avoid Surgery", desc: "A minimally invasive alternative to joint replacement." },
  { icon: Leaf, title: "Natural Healing", desc: "Harnesses your body's own repair mechanisms." },
  { icon: Clock, title: "Zero Downtime", desc: "Outpatient procedures with immediate return home." },
  { icon: Target, title: "Targeted Relief", desc: "Direct application to the source of your pain." },
  { icon: Pill, title: "Reduce Meds", desc: "Decrease reliance on chronic pain medication." },
  { icon: HeartPulse, title: "Systemic Health", desc: "Lowers full-body inflammation and oxidative stress." },
  { icon: ShieldCheck, title: "High Safety", desc: "FDA-compliant labs and highly screened materials." },
  { icon: Timer, title: "Quick Procedure", desc: "Treatments typically take less than an hour." },
  { icon: Fingerprint, title: "Personalized", desc: "Protocols tailored to your specific condition." },
  { icon: TrendingUp, title: "Lasting Results", desc: "Addresses root causes rather than masking symptoms." },
];

const conditions = [
  { icon: Bone, title: "Osteoarthritis", desc: "Support for knees, hips, shoulders, and hands suffering from cartilage degeneration and joint stiffness." },
  { icon: Zap, title: "Sports Injuries", desc: "Accelerated recovery protocols for tendon tears, ligament damage, and chronic muscle strains." },
  { icon: Activity, title: "Back & Neck Pain", desc: "Non-surgical, targeted approaches to disc degeneration, sciatica, and spinal inflammation." },
  { icon: ShieldCheck, title: "Autoimmune Conditions", desc: "Systemic exosome therapy to help modulate the immune response and reduce flare-ups." },
  { icon: Brain, title: "Neuropathy", desc: "Addressing chronic nerve pain and damage at the cellular level for improved sensation." },
  { icon: Sparkles, title: "Systemic Wellness", desc: "Proactive anti-aging support, brain fog reduction, and overall vitality enhancement." },
  { icon: Flame, title: "Tendonitis", desc: "Direct treatment to inflamed tendons in the elbow, wrist, and ankle to accelerate tissue repair." },
  { icon: Footprints, title: "Plantar Fasciitis", desc: "Targeted application to the foot to relieve chronic heel pain and promote ligament healing." },
  { icon: Hand, title: "Rheumatoid Arthritis", desc: "Systemic and localized cellular support aimed at reducing joint swelling and autoimmune activity." },
];

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Peptides", href: "#peptides" },
  { label: "Login", href: "#consult" },
];

export default function ClpPage() {
  return (
    <div id="top" className="bg-white font-serif text-[#0F172A]">
      <JsonLd
        data={webPageSchema({
          title:
            "Advanced Regenerative Care — Restoring Mobility, Redefining Recovery",
          description:
            "Next-generation stem cell and exosome therapies to repair tissue, reduce inflammation, and return to an active, pain-free life.",
          url: "/clp",
        })}
      />

      {/* ── Custom white-label nav ── */}
      <header className="sticky top-0 z-50 border-b border-[#0F172A]/10 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex h-11 w-32 items-center justify-center rounded-lg border-2 border-dashed border-[#0F172A]/25 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F172A]/40">
            Add Logo
          </div>
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[14px] font-medium tracking-wide text-[#0F172A]/70 transition-colors hover:text-[#2563EB]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#consult"
            className="rounded-full bg-[#0F172A] px-6 py-2.5 font-sans text-[13px] font-semibold text-white transition-colors hover:bg-[#2563EB]"
          >
            Consult
          </a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-[#2563EB]">
              Advanced Regenerative Care
            </span>
            <h1 className="mt-5 text-[3rem] font-semibold leading-[1.02] tracking-[-0.02em] text-[#0F172A] sm:text-[3.75rem] lg:text-[4.25rem]">
              Restoring mobility.
              <br />
              <span className="text-[#2563EB]">Redefining recovery.</span>
            </h1>
            <p className="mt-7 max-w-lg font-sans text-[17px] leading-[1.7] text-[#475569]">
              Harness the power of next-generation cellular therapies to repair
              tissue, reduce inflammation, and return to the active life you
              love.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#consult"
                className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-8 py-4 font-sans text-[15px] font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-transform hover:-translate-y-0.5"
              >
                Book Consultation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-10 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#94A3B8]">
              Part of the Integrated Care Network
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.35)]">
              <Image
                src="/lp/clp/hero.jpeg"
                alt="Active patient enjoying a pain-free life after regenerative therapy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
              <div className="font-sans text-[2rem] font-bold leading-none text-[#2563EB]">
                50B
              </div>
              <div className="mt-1 font-sans text-[12px] font-medium text-[#475569]">
                Exosomes per infusion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brett Favre story ── */}
      <section className="bg-[#0F172A] py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative aspect-video overflow-hidden rounded-3xl">
            <Image
              src="/lp/miami/brett-favre.webp"
              alt="Brett Favre's regenerative medicine recovery story"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-[#2563EB] text-[#2563EB]" />
              </div>
            </div>
          </div>
          <div>
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-[#60A5FA]">
              Patient Spotlight
            </span>
            <h2 className="mt-4 text-[2rem] font-semibold leading-tight text-white sm:text-[2.5rem]">
              Brett Favre&apos;s Recovery Story
            </h2>
            <p className="mt-5 font-sans text-[16px] leading-[1.7] text-white/70">
              Hall of Fame quarterback Brett Favre shares his experience with
              regenerative medicine, explaining how it helps him manage pain and
              maintain peak performance long after his career on the field.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Science ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-[#2563EB]">
              The Science
            </span>
            <h2 className="mt-4 text-[2.25rem] font-semibold leading-[1.05] text-[#0F172A] sm:text-[2.75rem]">
              Cellular Regeneration
            </h2>
            <p className="mt-5 font-sans text-[16px] leading-[1.7] text-[#475569]">
              Stem cells and exosomes are powerful biological tools that support
              your body&apos;s natural healing processes. These therapies are
              utilized to address chronic pain, inflammation, and tissue
              degeneration.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-[#0F172A]/8 bg-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/lp/clp/stem-cells.jpeg"
                  alt="Wharton's Jelly stem cells"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-[1.5rem] font-semibold text-[#0F172A]">
                  Stem Cells (Wharton&apos;s Jelly)
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-[#475569]">
                  Rich in mesenchymal stem cells (MSCs), growth factors, and
                  hyaluronic acid. They provide structural support and the
                  essential building blocks for tissue repair in joints and soft
                  tissue.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-[#0F172A]/8 bg-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/lp/clp/exosomes.jpeg"
                  alt="Exosomes"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-[1.5rem] font-semibold text-[#0F172A]">
                  Exosomes (50 Billion)
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-[#475569]">
                  Nano-sized cellular messengers that communicate with your
                  body&apos;s cells to support healing, dramatically reduce
                  inflammation, and promote regeneration systemically.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Peptides ── */}
      <section
        id="peptides"
        className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Optimize. Recover. Thrive.
          </span>
          <h2 className="mt-4 text-[2.25rem] font-semibold leading-tight text-white sm:text-[2.75rem]">
            Medical Grade Peptide Programs
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-[16px] leading-[1.7] text-white/80">
            Concierge care delivered right to your door. Our pharmacy-grade
            peptide therapies are prescribed and supervised by our licensed
            medical team.
          </p>
          <a
            href="#consult"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-[15px] font-semibold text-[#2563EB] transition-transform hover:-translate-y-0.5"
          >
            Explore All 20+ Peptides
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ── 10 Reasons ── */}
      <section className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-[#2563EB]">
              Why Cellular Therapy
            </span>
            <h2 className="mt-4 text-[2.25rem] font-semibold leading-[1.05] text-[#0F172A] sm:text-[2.75rem]">
              10 Reasons to Choose Regenerative Medicine
            </h2>
            <p className="mt-5 font-sans text-[16px] leading-[1.7] text-[#475569]">
              Patients choose our therapies for a variety of compelling reasons,
              from avoiding invasive surgeries to achieving a higher quality of
              life without daily pain.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#0F172A]/8 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/10">
                  <Icon className="h-5 w-5 text-[#2563EB]" />
                </div>
                <h3 className="mt-4 text-[1.05rem] font-semibold text-[#0F172A]">
                  {title}
                </h3>
                <p className="mt-2 font-sans text-[13px] leading-[1.6] text-[#475569]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conditions ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-[#2563EB]">
              Patient Outcomes
            </span>
            <h2 className="mt-4 text-[2.25rem] font-semibold leading-[1.05] text-[#0F172A] sm:text-[2.75rem]">
              Conditions We Support
            </h2>
            <p className="mt-5 font-sans text-[16px] leading-[1.7] text-[#475569]">
              Regenerative medicine offers versatile, non-surgical support for a
              wide range of orthopedic and systemic conditions.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#0F172A]/8 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10">
                  <Icon className="h-6 w-6 text-[#2563EB]" />
                </div>
                <h3 className="mt-5 text-[1.25rem] font-semibold text-[#0F172A]">
                  {title}
                </h3>
                <p className="mt-2 font-sans text-[14px] leading-[1.6] text-[#475569]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Treatment approaches ── */}
      <section className="bg-[#F8FAFC] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[2.25rem] font-semibold leading-[1.05] text-[#0F172A] sm:text-[2.75rem]">
              Treatment Approaches
            </h2>
            <p className="mt-5 font-sans text-[16px] leading-[1.7] text-[#475569]">
              We offer targeted and systemic therapies based on your specific
              wellness goals and medical needs. Both approaches are safely
              administered in our clinic.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/lp/clp/joint-injection.jpeg"
                  alt="BioFusion joint injection"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
                  Targeted Relief
                </span>
                <h3 className="mt-3 text-[1.5rem] font-semibold text-[#0F172A]">
                  BioFusion Joint Injection
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-[#475569]">
                  A dual-modality regenerative formula combining
                  high-concentration MSCs with exosomes for targeted joint and
                  soft tissue repair.
                </p>
                <p className="mt-4 font-sans text-[13px] font-medium text-[#0F172A]">
                  Best for:{" "}
                  <span className="text-[#475569]">
                    Osteoarthritis, knee/shoulder pain, athletic injuries.
                  </span>
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/lp/clp/iv-infusion.jpeg"
                  alt="Exosome IV infusion"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
                  Systemic Support
                </span>
                <h3 className="mt-3 text-[1.5rem] font-semibold text-[#0F172A]">
                  Exosome IV Infusion
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-[#475569]">
                  Full-body delivery of 50 billion nano-sized exosomes to
                  systematically reduce inflammation and support overall
                  cellular health.
                </p>
                <p className="mt-4 font-sans text-[13px] font-medium text-[#0F172A]">
                  Best for:{" "}
                  <span className="text-[#475569]">
                    Systemic inflammation, autoimmune support, anti-aging.
                  </span>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Consult CTA + form ── */}
      <section id="consult" className="bg-[#0F172A] py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-[2.25rem] font-semibold leading-[1.05] text-white sm:text-[2.75rem]">
              Ready to explore your options?
            </h2>
            <p className="mt-5 font-sans text-[16px] leading-[1.7] text-white/70">
              Schedule a brief consultation with our medical team to determine
              if regenerative therapies are right for you.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "No-obligation consultation",
                "Physician-supervised protocols",
                "Personalized treatment plan",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-sans text-[15px] text-white/80"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#60A5FA]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white p-8 font-sans lg:p-10">
            <h3 className="text-[1.5rem] font-semibold text-[#0F172A]">
              Schedule Consultation
            </h3>
            <p className="mt-2 text-[14px] text-[#475569]">
              Complete the form and our medical team will reach out to confirm
              your appointment.
            </p>
            <div className="mt-6">
              <LpLeadForm
                source="clp-consult"
                subject="Regenerative Care — Consultation Request"
                buttonText="Book My Consultation"
                showMessage
                messagePlaceholder="Tell us briefly what you'd like help with"
                accentClass="bg-[#2563EB] hover:bg-[#1E40AF]"
                accentTextClass="text-white"
                successTitle="Request received!"
                successMessage="Thank you. Our medical team will reach out shortly to schedule your consultation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── White-label footer ── */}
      <footer className="bg-[#0B1120] py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex h-11 w-40 items-center justify-center rounded-lg border-2 border-dashed border-white/20 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Add Logo Here
              </div>
              <p className="mt-5 font-sans text-[14px] leading-[1.7] text-white/60">
                Advanced regenerative medicine therapies helping you live a more
                active, pain-free life.
              </p>
            </div>
            <div className="font-sans">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Clinic Info
              </h4>
              <address className="mt-4 space-y-1 text-[14px] not-italic text-white/70">
                <p>123 Medical Plaza</p>
                <p>City, ST 75201</p>
                <p>(555) 123-4567</p>
                <p>info@clinic.example</p>
              </address>
            </div>
            <div className="font-sans">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Patient Links
              </h4>
              <ul className="mt-4 space-y-2 text-[14px] text-white/70">
                <li>
                  <a href="#top" className="hover:text-white">
                    Our Therapies
                  </a>
                </li>
                <li>
                  <a href="#consult" className="hover:text-white">
                    Patient FAQ
                  </a>
                </li>
                <li>
                  <a href="#consult" className="hover:text-white">
                    Book Consult
                  </a>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    Provider Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 font-sans">
            <p className="text-[13px] text-white/50">
              © 2026 Your Clinic Name. All rights reserved.
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-white/40">
              Exosome and stem cell therapies are emerging regenerative
              modalities and are not FDA-approved to diagnose, treat, cure, or
              prevent any specific disease. Results vary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
