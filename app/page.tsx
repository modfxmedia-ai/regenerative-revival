import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import About from "./components/About";
import Treatments from "./components/Treatments";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <About />
      <Treatments />
      <WhyChooseUs />
      <Partners />
      <FAQ />
      <Blog />
      <Contact />
    </>
  );
}
