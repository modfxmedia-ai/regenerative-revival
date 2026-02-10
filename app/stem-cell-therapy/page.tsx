import StemTherapyHero from "./components/StemTherapyHero";
import HowItWorks from "./components/HowItWorks";
import TherapyBenefits from "./components/TherapyBenefits";
import WhoCanBenefit from "./components/WhoCanBenefit";
import StemTherapyCTA from "./components/StemTherapyCTA";

export const metadata = {
  title: "Stem Cell Therapy | Regenerative Revival",
  description:
    "Advanced stem cell therapy using mesenchymal stem cells to promote healing, reduce inflammation, and restore damaged tissues for lasting pain relief.",
};

export default function StemCellTherapyPage() {
  return (
    <>
      <StemTherapyHero />
      <HowItWorks />
      <TherapyBenefits />
      <WhoCanBenefit />
      <StemTherapyCTA />
    </>
  );
}
