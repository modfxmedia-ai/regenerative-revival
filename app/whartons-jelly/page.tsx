import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, ShieldCheck, Microscope, Zap, Heart } from "lucide-react";
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
 * Primary keyword: "wharton's jelly" / "wharton's jelly stem cells"
 * Secondary: "umbilical cord stem cell therapy" / "MSC therapy"
 * Content brief: authentic, clinical, no AI fluff
 */

export const metadata = generatePageMetadata({
  title: "Wharton's Jelly Stem Cell Therapy",
  description:
    "Wharton's Jelly MSCs - younger, more potent than bone marrow or fat cells. In-home stem cell therapy, physician-supervised, nationwide.",
  path: "/whartons-jelly",
});

const faqs = [
  {
    question: "What is Wharton's Jelly and why is it used in stem cell therapy?",
    answer:
      "Wharton's Jelly is the gelatinous connective tissue inside the umbilical cord. It contains one of the highest concentrations of mesenchymal stem cells (MSCs) found in the human body. Because these cells come from newborn tissue, they are younger, more proliferative, and carry a lower immune rejection risk than adult-derived stem cells.",
  },
  {
    question: "How is Wharton's Jelly different from bone marrow or fat-derived stem cells?",
    answer:
      "Bone marrow and adipose (fat) stem cells are autologous - taken from your own body. They decline in quality and quantity with age. Wharton's Jelly MSCs are allogeneic (donor-sourced) from ethically donated umbilical cords, meaning they are younger, more potent, and available in consistent, high-quality supply without a painful harvest procedure.",
  },
  {
    question: "Is Wharton's Jelly therapy safe?",
    answer:
      "Yes. Wharton's Jelly MSCs are immune-privileged - they express low levels of MHC class II antigens, which means the body rarely mounts a rejection response. All products we use are sourced from AATB-accredited tissue banks and tested for sterility, viability, and potency before use.",
  },
  {
    question: "What conditions can Wharton's Jelly stem cell therapy address?",
    answer:
      "Our protocols focus on musculoskeletal conditions: osteoarthritis, joint degeneration, soft-tissue injuries, tendon and ligament damage, and chronic inflammation. We do not address systemic diseases or conditions outside our clinical scope.",
  },
  {
    question: "How is Wharton's Jelly therapy administered?",
    answer:
      "Therapy is delivered via targeted injection to the affected area by a licensed nurse practitioner in your home. No surgery, no clinic visit, no general anesthesia. Most sessions take 30–60 minutes.",
  },
];

const differentiators = [
  {
    icon: Microscope,
    title: "Highest MSC concentration",
    desc: "Wharton's Jelly contains 10–100× more MSCs per gram than bone marrow aspirate. More cells means more signaling, more anti-inflammatory activity, and more regenerative potential per therapy.",
  },
  {
    icon: Zap,
    title: "Younger, more potent cells",
    desc: "Neonatal MSCs divide faster, secrete more growth factors, and have longer telomeres than adult-derived cells. Age matters in regenerative medicine - and Wharton's Jelly starts at day zero.",
  },
  {
    icon: ShieldCheck,
    title: "Immune-privileged - no rejection drugs",
    desc: "Wharton's Jelly MSCs express low MHC class II antigens. The immune system tolerates them without immunosuppressants - a significant safety advantage over other allogeneic therapies.",
  },
  {
    icon: Heart,
    title: "Ethically sourced, rigorously tested",
    desc: "All tissue is donated by consenting mothers after healthy, full-term births. Every lot is tested for sterility, viability, potency, and freedom from communicable disease before release.",
  },
];

export default function WhartonsJellyPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "Wharton's Jelly Stem Cell Therapy",
          description:
            "Wharton's Jelly is the gold standard source for mesenchymal stem cells. Umbilical cord-derived MSCs for joint pain, tissue repair, and regenerative medicine.",
          url: "/whartons-jelly",
          medicalConditions: [
            "Osteoarthritis",
            "Joint Degeneration",
            "Soft Tissue Injuries",
            "Tendon Damage",
            "Chronic Inflammation",
          ],
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Wharton's Jelly Stem Cell Therapy",
          description:
            "In-home concierge Wharton's Jelly MSC therapy for joint pain and tissue repair.",
          url: "/whartons-jelly",
          serviceType: "Regenerative Medicine",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          { name: "Wharton's Jelly", url: "https://regenerativerevival.com/whartons-jelly" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ label: "Wharton's Jelly", href: "/whartons-jelly" }]} />

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] pt-20 flex items-end overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image
            src="/news/imgi_5_whartons-jelly-1080x675.jpg"
            alt="Wharton's Jelly stem cell therapy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/70 to-[#021E3C]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/80 via-[#021E3C]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#583563]/20 mix-blend-multiply" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#6762AF]/20 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28 pt-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">Regenerative Medicine · Source Science</span>
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] font-normal text-[2.75rem] sm:text-5xl lg:text-[4.5rem] text-white leading-[1.02] tracking-[-0.02em]">
              Wharton&apos;s Jelly - {" "}
              <span className="text-[#6762AF] font-semibold">
                the gold standard
              </span>{" "}
              in stem cell therapy
            </h1>
            <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
              Not all stem cells are equal. Wharton&apos;s Jelly - the gelatinous tissue inside the umbilical cord - contains the youngest, most potent mesenchymal stem cells available. Here&apos;s why it matters, and why we use nothing else.
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
                href="/stem-cell-therapy"
                className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 transition-all"
              >
                The Therapy That Uses Them: Stem Cell Therapy →
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      </section>

      {/* ── What is Wharton's Jelly ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">The Source</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                What is Wharton&apos;s Jelly, exactly?
              </h2>
              <div className="mt-6 space-y-5 text-[15px] text-[#4A4F66] leading-[1.75]">
                <p>
                  Wharton&apos;s Jelly is the gelatinous connective tissue that surrounds the blood vessels inside the umbilical cord. It was first described by English physician Thomas Wharton in 1656 - but its significance in regenerative medicine wasn&apos;t understood until the early 2000s, when researchers discovered it contains an exceptionally high density of mesenchymal stem cells (MSCs).
                </p>
                <p>
                  These MSCs are the same type of cell found in bone marrow and adipose tissue - but with a critical difference: they come from neonatal tissue. That means they&apos;re younger, divide faster, secrete more growth factors, and carry a lower immune rejection risk than cells harvested from adult donors.
                </p>
                <p>
                  The umbilical cord is discarded after birth. By collecting it from consenting mothers after healthy, full-term deliveries, we access one of the most potent regenerative sources in the human body - without any harm to mother or child.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_24px_64px_-12px_rgba(88,53,99,0.2)]">
                <Image
                  src="/news/imgi_23_benefits-of-whartons-jelly-980x551.jpg"
                  alt="Wharton's Jelly mesenchymal stem cells"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/25 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2rem] pointer-events-none" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-[0_16px_40px_-8px_rgba(26,31,48,0.2)] border border-[#F1ECF8]">
                <div className="font-[family-name:var(--font-poppins)] text-4xl text-[#6762AF]">10–100×</div>
                <div className="text-[11px] text-[#4A4F66] mt-1 leading-snug">More MSCs per gram<br />vs bone marrow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Wharton's Jelly wins ── */}
      <section className="bg-[#F1ECF8] py-20 lg:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Why It Matters</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Why Wharton&apos;s Jelly outperforms every other MSC source
            </h2>
            <p className="mt-5 text-base text-[#4A4F66]">
              The regenerative medicine field has tested bone marrow, adipose tissue, dental pulp, and placenta. Wharton&apos;s Jelly consistently produces the highest-quality MSCs across every meaningful metric.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-[20px] p-7 border border-white hover:border-[#6762AF]/20 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] transition-all duration-500">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1ECF8] border border-[#6762AF]/10 mb-5">
                  <d.icon className="h-5 w-5 text-[#6762AF]" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[19px] text-[#1A1F30] mb-3">{d.title}</h3>
                <p className="text-[13.5px] text-[#4A4F66] leading-[1.65]">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it's delivered ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-[0_24px_64px_-12px_rgba(88,53,99,0.2)]">
                <Image
                  src="/2149230689.jpg"
                  alt="In-home stem cell therapy delivery"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Delivery</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                Delivered in your home by a licensed clinician
              </h2>
              <div className="mt-6 space-y-5 text-[15px] text-[#4A4F66] leading-[1.75]">
                <p>
                  We don&apos;t run a clinic. We come to you. A licensed nurse practitioner - operating under Dr. Sean Arora and Arora Health Group - delivers your Wharton&apos;s Jelly treatment in your home, office, or hotel room.
                </p>
                <p>
                  The treatment itself is a targeted injection to the affected joint or tissue. Most sessions take 30–60 minutes. There&apos;s no general anesthesia, no surgical prep, and no recovery room. You can return to light activity the same day.
                </p>
              </div>
              <ul className="mt-7 flex flex-col gap-3">
                {[
                  "No clinic visit - we come to you",
                  "Licensed NP under physician oversight",
                  "Targeted injection to affected area",
                  "30–60 minute session",
                  "Available in all 50 states",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-[#1A1F30]/85">
                    <CheckCircle className="h-4 w-4 text-[#6762AF] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/consult-router"
                className="mt-9 group inline-flex h-12 items-center gap-2 rounded-full bg-[#021E3C] px-7 text-sm font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.6)] transition-all duration-300"
              >
                See if you qualify
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F1ECF8] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            Wharton&apos;s Jelly questions answered
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-[#6762AF]/15 pb-6">
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
