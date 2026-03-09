import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Treatments from "./components/Treatments";
import WhartonsJellyPower from "./components/WhartonsJellyPower";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { JsonLd, webPageSchema, faqSchema } from "./lib/schema";

const homeFaqs = [
  { question: "What is stem cell therapy?", answer: "Stem cell therapy uses mesenchymal stem cells (MSCs) — sourced externally from ethically donated umbilical cord tissue, not from your own body — to support your body's natural repair processes. These cells are introduced via injection or IV and work by signaling the body to reduce inflammation and promote tissue regeneration." },
  { question: "Why Wharton's Jelly MSCs specifically?", answer: "Wharton's Jelly, found in umbilical cord tissue, is one of the richest known sources of high-quality MSCs. Because these cells come from newborn tissue, they're younger, more active, and carry a lower risk of immune rejection than adult-derived cells. It's simply a better starting point." },
  { question: "Is this safe?", answer: "Yes. Our protocols use rigorously tested, FDA-compliant products sourced from accredited tissue banks. Wharton's Jelly-derived MSCs are well-tolerated by most people and do not require immunosuppressants. That said, every client goes through a screening process — this isn't a one-size-fits-all approach." },
  { question: "What kinds of wellness goals do people come to you for?", answer: "People come to us for all sorts of reasons — joint discomfort, post-injury recovery, fatigue, inflammation, longevity, and performance. We don't make specific medical claims, but we work with each client to understand their goals and match them with the right protocol and provider." },
  { question: "What happens during a consultation?", answer: "Your consultation is a conversation, not a sales pitch. We go over your health history, listen to what you're dealing with, and walk you through which protocols might make sense. From there, you're connected to a licensed practitioner who handles the clinical side." },
  { question: "How soon do people notice a difference?", answer: "It really depends on the person and the protocol. Some clients notice changes within a few weeks; for others it unfolds over several months as the regenerative process continues. We'll set realistic expectations from the start." },
  { question: "Do you work with gyms, clinics, or other health professionals?", answer: "Yes — we have a dedicated B2B partnership program for gyms, recovery centers, physical therapists, and health influencers. Visit our Partner With Us page for details on revenue sharing, onboarding, and how it works." },
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
      <FAQ />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}
