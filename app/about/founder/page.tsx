import { ArrowUpRight, MapPin, Users2, Building2, Stethoscope } from "lucide-react";
import Image from "next/image";
import { generatePageMetadata } from "../../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema } from "../../lib/schema";

export const metadata = generatePageMetadata({
  title: "About Seth Berge - Founder",
  description:
    "Seth Berge founded Regenerative Revival to make concierge regenerative medicine and longevity care available outside the clinic walls.",
  path: "/about/founder",
});

const stats = [
  { icon: Users2, value: "10,000+", label: "Patients Connected" },
  { icon: Stethoscope, value: "100+", label: "Licensed Practitioners" },
  { icon: MapPin, value: "50", label: "States Covered" },
  { icon: Building2, value: "Since 2018", label: "Industry Leader" },
];

export default function FounderPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ title: "About Seth Berge - Founder", description: "The founder story behind Regenerative Revival.", url: "/about/founder" })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://regenerativerevival.com" },
        { name: "About", url: "https://regenerativerevival.com/about" },
        { name: "Founder", url: "https://regenerativerevival.com/about/founder" },
      ])} />

      {/* === Hero === */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image src="/headshots/1.jpg" alt="Seth Berge - Founder of Regenerative Revival" fill className="object-cover" style={{ objectPosition: "center 15%" }} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/60 to-[#021E3C]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/80 via-[#021E3C]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#583563]/15 mix-blend-multiply" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#6762AF]/20 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28 pt-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">Founder</span>
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] font-normal text-[3rem] sm:text-6xl lg:text-[5rem] text-white leading-[1.02] tracking-[-0.02em]">
              Seth <span className="text-[#6762AF] font-semibold">Berge</span>
            </h1>
            <p className="mt-5 text-base lg:text-lg text-white/65 max-w-xl leading-relaxed">
              Founder, Regenerative Revival. Building the concierge medical brand for people who refuse to treat aging as inevitable.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      </section>

      {/* === Stats strip === */}
      <section className="bg-[#1A1F30] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="h-4 w-4 text-[#71A7F5] shrink-0" />
                <div>
                  <div className="text-[17px] font-semibold text-white">{s.value}</div>
                  <div className="text-[11px] text-white/45">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Story === */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 lg:py-24">
          <div className="space-y-10">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Why Regenerative Revival Exists</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.1] tracking-[-0.02em]">
                The industry split in two. <span className="text-[#6762AF]">We built the bridge.</span>
              </h2>
              <div className="mt-6 space-y-5 text-[15px] text-[#4A4F66] leading-[1.75]">
                <p>
                  Seth Berge founded Regenerative Revival after watching the regenerative medicine industry split in two: white-glove clinics that locked the best protocols behind in-person-only access, and commodity telehealth brands that ship one drug in a box and call it care.
                </p>
                <p>
                  Regenerative Revival is built to be neither. We deliver concierge regenerative therapies in your home, and we extend the same physician-led team into telehealth for hormones, peptides, GLP-1, and NAD+. One team, one chart, one plan - for the best decade of your life.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#6762AF]/20 to-transparent" />

            <div>
              <h2 className="font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.1] tracking-[-0.02em]">
                The dinner-seminar <span className="text-[#6762AF]">model</span>
              </h2>
              <div className="mt-6 space-y-5 text-[15px] text-[#4A4F66] leading-[1.75]">
                <p>
                  Most of our patients meet us first at a private dinner seminar. That&apos;s where Seth and our clinical team walk through what regenerative medicine can and can&apos;t do - without the sales pressure of a clinic appointment. The website is built to extend that experience, not replace it.
                </p>
                <p>
                  Since 2018, Seth has connected thousands of patients with experienced providers offering the best regenerative medicine products on the market. He has built strong relationships with top tissue manufacturers and has access to over 100 trained and licensed practitioners - including PAs, MDs, and DOs - across all 50 states.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#6762AF]/20 to-transparent" />

            {/* TODO: Replace with final founder copy from Lydia (ModFX) at content freeze */}
            <div className="rounded-2xl bg-[#F1ECF8]/60 border border-[#6762AF]/10 px-6 py-5">
              <p className="text-[13px] text-[#4A4F66] leading-relaxed">
                <strong className="text-[#1A1F30] not-italic">Note:</strong> Final founder biography pending from ModFX. This placeholder will be replaced at content freeze (Week 3).
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/consult-router"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#021E3C] px-7 text-sm font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.6)] transition-all duration-300"
              >
                Take The 2-Minute Quiz
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/about"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[#6762AF]/20 bg-white px-7 text-sm font-medium text-[#1A1F30] hover:border-[#6762AF]/40 hover:bg-[#F1ECF8]/60 transition-all"
              >
                Meet The Team →
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
