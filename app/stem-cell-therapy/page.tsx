import StemTherapyHero from "./components/StemTherapyHero";
import HowItWorks from "./components/HowItWorks";
import TherapyBenefits from "./components/TherapyBenefits";
import WhoCanBenefit from "./components/WhoCanBenefit";
import StemTherapyCTA from "./components/StemTherapyCTA";
import QuizCTA from "../components/QuizCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import ComplianceDisclaimer from "../components/ComplianceDisclaimer";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  medicalWebPageSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  howToSchema,
} from "../lib/schema";

/**
 * Primary keyword: "stem cell therapy" (4,400 vol)
 * Secondary: "price of stem cell therapy" (5,400 vol, $8 CPC)
 * Secondary: "benefits of stem cell therapy" (720 vol)
 * Secondary: "back pain stem cell therapy" (2,400 vol)
 * Secondary: "arthritis stem cell therapy" (1,000 vol)
 * Note: "stem cell therapy near me" shows 0 vol — Google suppressed (FDA sensitivity)
 *       The programmatic /treatments/[slug]/[location] pages handle local intent.
 */

export const metadata = generatePageMetadata({
  title: "Stem Cell Therapy — In-Home Concierge Regenerative Medicine",
  description:
    "Wharton's Jelly stem cell therapy delivered in your home by a licensed nurse practitioner. Physician-led, FDA-compliant, available nationwide. Book a free consultation.",
  path: "/stem-cell-therapy",
});

const faqs = [
  {
    question: "How much does stem cell therapy cost?",
    answer:
      "Because every program is personalized to your condition, the protocol, and the number of areas addressed, pricing is determined individually. We walk you through clear, transparent pricing during your consultation — no surprises.",
  },
  {
    question: "What is the success rate of stem cell therapy?",
    answer:
      "Clinical outcomes vary by condition and patient. Many people with musculoskeletal conditions like osteoarthritis and soft-tissue injuries report meaningful improvement in pain and function. We set realistic, individualized expectations during your consultation.",
  },
  {
    question: "What are the benefits of stem cell therapy?",
    answer:
      "Key benefits include reduced inflammation, accelerated tissue repair, improved joint function, and long-lasting results by addressing root causes rather than masking symptoms. Wharton's Jelly MSCs carry a low rejection risk and do not require immunosuppressants.",
  },
  {
    question: "Can stem cell therapy help with back pain?",
    answer:
      "Yes. Stem cell therapy for back pain targets disc degeneration, facet joint inflammation, and soft-tissue damage. Our licensed practitioners assess candidacy during your consultation and will tell you honestly if you're not a fit.",
  },
  {
    question: "Is stem cell therapy safe?",
    answer:
      "Our protocols use rigorously tested, FDA-compliant Wharton's Jelly MSCs from AATB-accredited tissue banks. The therapy is well-tolerated by most patients and does not require immunosuppressants. Every patient goes through a clinical screening process.",
  },
];

export default function StemCellTherapyPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "Stem Cell Therapy — In-Home Concierge Regenerative Medicine",
          description:
            "Wharton's Jelly stem cell therapy delivered in your home by a licensed nurse practitioner. Physician-led, FDA-compliant, available nationwide.",
          url: "/stem-cell-therapy",
          medicalConditions: [
            "Osteoarthritis",
            "Chronic Back Pain",
            "Sports Injuries",
            "Joint Degeneration",
            "Rotator Cuff Tears",
            "Knee Pain",
            "Soft Tissue Injuries",
          ],
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Wharton's Jelly Stem Cell Therapy",
          description:
            "In-home concierge stem cell therapy using Wharton's Jelly MSCs. Delivered by a licensed nurse practitioner under physician oversight.",
          url: "/stem-cell-therapy",
          serviceType: "Regenerative Medicine",
          areaServed: "United States",
        })}
      />
      <JsonLd
        data={howToSchema({
          name: "How to Get Stem Cell Therapy at Home",
          description: "The 4-step process for receiving in-home concierge stem cell therapy through Regenerative Revival.",
          steps: [
            { name: "Consultation & Assessment", text: "Book a free consultation. Our licensed practitioners assess your condition and determine if stem cell therapy is right for you." },
            { name: "Treatment Planning", text: "A personalized treatment plan is created targeting the root cause of your condition." },
            { name: "In-Home Administration", text: "A licensed nurse practitioner delivers the treatment in your home. No clinic visit required." },
            { name: "Follow-Up & Support", text: "Ongoing support and follow-up care to ensure optimal results." },
          ],
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "Stem Cell Therapy", url: "https://www.regenerativerevival.com/stem-cell-therapy" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ label: "Stem Cell Therapy", href: "/stem-cell-therapy" }]} />
      <StemTherapyHero />
      <HowItWorks />
      <TherapyBenefits />
      <WhoCanBenefit />

      {/* ── FAQ section ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            Stem cell therapy questions answered
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

      {/* <StemTherapyCTA /> */}
      <QuizCTA />
      <ComplianceDisclaimer variant="regen_consult_only" />
    </>
  );
}
