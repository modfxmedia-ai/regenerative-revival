import ServicesHero from "./components/ServicesHero";
import WhatIsWhartonsJelly from "./components/WhatIsWhartonsJelly";
import WhyConsider from "./components/WhyConsider";
import VideoSection from "./components/VideoSection";
import ServicesCTA from "./components/ServicesCTA";
import QuizCTA from "../components/QuizCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, medicalWebPageSchema, breadcrumbSchema } from "../lib/schema";

/**
 * Primary keyword: "regenerative medicine services"
 * Secondary: stem cells, peptides, NAD+, hormones, exosome therapy
 */
export const metadata = generatePageMetadata({
  title: "Regenerative Medicine Services",
  description:
    "Stem cells, peptides, NAD+, hormones, and exosome therapy from a physician-led team. In-home or telehealth, available nationwide.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={medicalWebPageSchema({ title: "Services", description: "Advanced stem cell therapy services using Wharton's Jelly for chronic pain management.", url: "/services", medicalConditions: ["Chronic Pain", "Osteoarthritis", "Sports Injuries", "Joint Pain", "Tissue Degeneration"] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://regenerativerevival.com" }, { name: "Services", url: "https://regenerativerevival.com/services" }])} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <ServicesHero />
      <WhatIsWhartonsJelly />
      <WhyConsider />
      <VideoSection />
      <ServicesCTA />
      <QuizCTA />
    </>
  );
}
