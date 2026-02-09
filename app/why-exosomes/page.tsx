import ExosomesHero from "./components/ExosomesHero";
import WhatAreExosomes from "./components/WhatAreExosomes";
import ExosomeBenefits from "./components/ExosomeBenefits";
import ExosomesCTA from "./components/ExosomesCTA";

export const metadata = {
  title: "Why Exosomes? | Regenerative Revival",
  description:
    "Discover the power of stem cell exosomes — nano-sized vesicles that carry therapeutic signals to damaged tissues for regeneration and healing.",
};

export default function WhyExosomesPage() {
  return (
    <>
      <ExosomesHero />
      <WhatAreExosomes />
      <ExosomeBenefits />
      <ExosomesCTA />
    </>
  );
}
