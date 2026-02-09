import StemCellsHero from "./components/StemCellsHero";
import WhyWhartonsJelly from "./components/WhyWhartonsJelly";
import StemCellBenefits from "./components/StemCellBenefits";
import StemCellApplications from "./components/StemCellApplications";
import ConditionsTreated from "./components/ConditionsTreated";
import StemCellsCTA from "./components/StemCellsCTA";

export const metadata = {
  title: "Why Stem Cells? | Regenerative Revival",
  description:
    "Discover the power of Wharton's Jelly stem cells — a rich source of mesenchymal stem cells for tissue regeneration, healing, and repair.",
};

export default function WhyStemCellsPage() {
  return (
    <>
      <StemCellsHero />
      <WhyWhartonsJelly />
      <StemCellBenefits />
      <StemCellApplications />
      <ConditionsTreated />
      <StemCellsCTA />
    </>
  );
}
