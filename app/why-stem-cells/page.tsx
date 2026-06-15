import StemCellsHero from "./components/StemCellsHero";
import WhyWhartonsJelly from "./components/WhyWhartonsJelly";
import StemCellBenefits from "./components/StemCellBenefits";
import StemCellApplications from "./components/StemCellApplications";
import ConditionsTreated from "./components/ConditionsTreated";
import StemCellsCTA from "./components/StemCellsCTA";
import QuizCTA from "../components/QuizCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, medicalWebPageSchema, breadcrumbSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Why Stem Cells?",
  description: "Discover the power of Wharton's Jelly stem cells — a rich source of mesenchymal stem cells for tissue regeneration, healing, and repair.",
  path: "/why-stem-cells",
});

export default function WhyStemCellsPage() {
  return (
    <>
      <JsonLd data={medicalWebPageSchema({ title: "Why Stem Cells?", description: "Discover the power of Wharton's Jelly stem cells for tissue regeneration, healing, and repair.", url: "/why-stem-cells", medicalConditions: ["Osteoarthritis", "Sports Injuries", "Degenerative Diseases", "Joint Pain", "Chronic Pain"] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "Why Stem Cells?", url: "https://www.regenerativerevival.com/why-stem-cells" }])} />
      <Breadcrumbs items={[{ label: "Why Stem Cells?", href: "/why-stem-cells" }]} />
      <StemCellsHero />
      <WhyWhartonsJelly />
      <StemCellBenefits />
      <StemCellApplications />
      <ConditionsTreated />
      <StemCellsCTA />
      <QuizCTA />
    </>
  );
}
