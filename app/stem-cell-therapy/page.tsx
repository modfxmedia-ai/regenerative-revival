import StemTherapyHero from "./components/StemTherapyHero";
import HowItWorks from "./components/HowItWorks";
import TherapyBenefits from "./components/TherapyBenefits";
import WhoCanBenefit from "./components/WhoCanBenefit";
import StemTherapyCTA from "./components/StemTherapyCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, medicalWebPageSchema, breadcrumbSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Stem Cell Therapy",
  description: "Advanced stem cell therapy using mesenchymal stem cells to promote healing, reduce inflammation, and restore damaged tissues for lasting pain relief.",
  path: "/stem-cell-therapy",
  cta: "Get Started",
});

export default function StemCellTherapyPage() {
  return (
    <>
      <JsonLd data={medicalWebPageSchema({ title: "Stem Cell Therapy", description: "Advanced stem cell therapy using mesenchymal stem cells to promote healing, reduce inflammation, and restore damaged tissues.", url: "/stem-cell-therapy", medicalConditions: ["Chronic Pain", "Osteoarthritis", "Sports Injuries", "Tissue Damage", "Joint Degeneration"] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "Stem Cell Therapy", url: "https://www.regenerativerevival.com/stem-cell-therapy" }])} />
      <Breadcrumbs items={[{ label: "Stem Cell Therapy", href: "/stem-cell-therapy" }]} />
      <StemTherapyHero />
      <HowItWorks />
      <TherapyBenefits />
      <WhoCanBenefit />
      <StemTherapyCTA />
    </>
  );
}
