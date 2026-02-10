import WJHero from "./components/WJHero";
import WhatIsWJ from "./components/WhatIsWJ";
import WJBenefits from "./components/WJBenefits";
import WJApplications from "./components/WJApplications";
import WJCTA from "./components/WJCTA";

export const metadata = {
  title: "Wharton's Jelly | Regenerative Revival",
  description:
    "Discover Wharton's Jelly — a gelatinous substance from the umbilical cord rich in mesenchymal stem cells, growth factors, and anti-inflammatory properties.",
};

export default function WhartonsJellyPage() {
  return (
    <>
      <WJHero />
      <WhatIsWJ />
      <WJBenefits />
      <WJApplications />
      <WJCTA />
    </>
  );
}
