import ExosomesHero from "./components/ExosomesHero";
import WhatAreExosomes from "./components/WhatAreExosomes";
import ExosomeBenefits from "./components/ExosomeBenefits";
import ExosomesCTA from "./components/ExosomesCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, medicalWebPageSchema, breadcrumbSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Why Exosomes?",
  description: "Discover the power of stem cell exosomes — nano-sized vesicles that carry therapeutic signals to damaged tissues for regeneration and healing.",
  path: "/why-exosomes",
});

export default function WhyExosomesPage() {
  return (
    <>
      <JsonLd data={medicalWebPageSchema({ title: "Why Exosomes?", description: "Discover the power of stem cell exosomes for regeneration and healing.", url: "/why-exosomes", medicalConditions: ["Tissue Damage", "Inflammation", "Chronic Pain"] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "Why Exosomes?", url: "https://www.regenerativerevival.com/why-exosomes" }])} />
      <Breadcrumbs items={[{ label: "Why Exosomes?", href: "/why-exosomes" }]} />
      <ExosomesHero />
      <WhatAreExosomes />
      <ExosomeBenefits />
      <ExosomesCTA />
    </>
  );
}
