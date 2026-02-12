import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import About from "./components/About";
import Treatments from "./components/Treatments";
import WhartonsJellyPower from "./components/WhartonsJellyPower";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { JsonLd, webPageSchema, faqSchema } from "./lib/schema";

const homeFaqs = [
  { question: "What is stem cell therapy?", answer: "Stem cell therapy is a form of regenerative medicine that utilizes the body's stem cells to repair and regenerate damaged tissues. It's a non-invasive approach that harnesses your body's natural healing capabilities." },
  { question: "How does Wharton's Jelly enhance stem cell therapy?", answer: "Wharton's Jelly contains a high concentration of mesenchymal stem cells (MSCs) and growth factors, which significantly enhance the body's natural healing processes. These cells are younger and more potent than adult-derived stem cells." },
  { question: "Is stem cell therapy safe?", answer: "Yes, stem cell therapy using Wharton's Jelly has a strong safety profile and is less likely to trigger an immune response. All our products come from accredited tissue banks and undergo rigorous testing." },
  { question: "What conditions can stem cell therapy address?", answer: "Stem cell therapy can be used to relieve a variety of conditions, including sports injuries, chronic pain, osteoarthritis, degenerative diseases, joint pain, and soft tissue damage." },
  { question: "What can I expect during my consultation?", answer: "During your consultation, our team will review your medical history, discuss your specific health concerns, and develop a personalized treatment plan tailored to your needs." },
  { question: "When will I see results?", answer: "Many patients experience improvements within a few weeks, with ongoing progress over several months as the stem cells continue to promote tissue repair and regeneration." },
  { question: "How do I become a business partner?", answer: "We offer a turnkey JV partnership with revenue sharing for medical practices and businesses. Contact us through the partner inquiry form and our team will walk you through the process." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={webPageSchema({ title: "Advanced Stem Cell Therapy & Regenerative Medicine", description: "Reviving health through cutting-edge regenerative medicine. Wharton's Jelly stem cell therapy for pain relief, tissue repair, and total body renewal.", url: "/" })} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ValueProps />
      <About />
      <Treatments />
      <WhartonsJellyPower />
      <WhyChooseUs />
      <Partners />
      <FAQ />
      <Blog />
      <Contact />
    </>
  );
}
