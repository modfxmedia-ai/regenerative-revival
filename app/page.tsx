import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Treatments from "./components/Treatments";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Treatments />
      <WhyChooseUs />
      <Partners />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
