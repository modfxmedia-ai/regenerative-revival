import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, faqSchema } from "../lib/schema";
import PlayingOverseasClient from "./PlayingOverseasClient";

export const metadata = generatePageMetadata({
  title: "Playing Overseas × Regenerative Revival — Elite Athlete Recovery",
  description:
    "Priority stem cell and exosome therapy for professional athletes playing overseas. Concierge delivery by licensed specialists across all 50 states. Free consultation.",
  path: "/playing-overseas",
});

const faqItems = [
  {
    question: "What exactly are Wharton's Jelly stem cells and exosomes?",
    answer:
      "Wharton's Jelly stem cells are harvested from the umbilical cord tissue of healthy, consented donors. They are immune-privileged and generally well-tolerated by the body. Exosomes are signaling vesicles that carry molecules designed to support tissue repair. Individual results vary.",
  },
  {
    question: "Is stem cell and exosome therapy safe?",
    answer:
      "Regenerative Revival therapies are administered by licensed practitioners — MDs, DOs, and NPs — in partnership with Arora Health Group under physician oversight. Individual results vary and candidacy is assessed case by case. Not everyone qualifies for care.",
  },
  {
    question: "How is therapy delivered?",
    answer:
      "Regenerative Revival operates on a concierge model — a licensed specialist comes directly to you. We have 100+ licensed practitioners across all 50 US states. International delivery is assessed on a case-by-case basis.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Individual results vary based on the condition and the patient's overall health. Some patients report changes within days to weeks; others experience gradual progression over months. Outcomes are not guaranteed.",
  },
  {
    question: "How is this different from cortisone or PRP?",
    answer:
      "Cortisone is anti-inflammatory but does not address underlying tissue damage. PRP uses your own blood platelets. Stem cell and exosome therapy is designed to go further, introducing signaling molecules intended to support tissue regeneration at the source.",
  },
  {
    question: "Is the free consultation really no cost?",
    answer:
      "Yes — completely. As a Playing Overseas partner, you receive priority access to a complimentary initial consultation with no obligation.",
  },
];

export default function PlayingOverseasPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Playing Overseas × Regenerative Revival",
          description:
            "Priority stem cell and exosome therapy for professional athletes playing overseas.",
          url: "/playing-overseas",
        })}
      />
      <JsonLd data={faqSchema(faqItems)} />
      <PlayingOverseasClient />
    </>
  );
}
