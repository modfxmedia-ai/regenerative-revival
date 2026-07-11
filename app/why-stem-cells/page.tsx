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

/**
 * Primary keyword: "stem cell therapy" (4,400 vol)
 * Secondary: "benefits of stem cell therapy" (720 vol), "stem cell therapy success rate" (880 vol)
 */
export const metadata = generatePageMetadata({
  title: "How Stem Cell Therapy Works",
  description:
    "Stem cell therapy delivers MSCs to damaged tissue — reducing inflammation and supporting natural repair. See the science behind Wharton's Jelly.",
  path: "/why-stem-cells",
});

export default function WhyStemCellsPage() {
  return (
    <>
      <JsonLd data={medicalWebPageSchema({ title: "Why Stem Cells?", description: "Discover the power of Wharton's Jelly stem cells for tissue regeneration, healing, and repair.", url: "/why-stem-cells", medicalConditions: ["Osteoarthritis", "Sports Injuries", "Degenerative Diseases", "Joint Pain", "Chronic Pain"] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://regenerativerevival.com" }, { name: "Why Stem Cells?", url: "https://regenerativerevival.com/why-stem-cells" }])} />
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
