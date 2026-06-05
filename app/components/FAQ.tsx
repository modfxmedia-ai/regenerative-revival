"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is stem cell therapy?", a: "Stem cell therapy uses mesenchymal stem cells (MSCs) — sourced externally from ethically donated umbilical cord tissue, not from your own body — to support your body's natural repair processes. These cells are introduced via injection or IV and work by signaling the body to reduce inflammation and promote tissue regeneration." },
  { q: "Why Wharton's Jelly MSCs specifically?", a: "Wharton's Jelly, found in umbilical cord tissue, is one of the richest known sources of high-quality MSCs. Because these cells come from newborn tissue, they're younger, more active, and carry a lower risk of immune rejection than adult-derived cells. It's simply a better starting point." },
  { q: "Is this safe?", a: "Yes. Our protocols use rigorously tested, FDA-compliant products sourced from accredited tissue banks. Wharton's Jelly-derived MSCs are well-tolerated by most people and do not require immunosuppressants. That said, every client goes through a screening process — this isn't a one-size-fits-all approach." },
  { q: "What kinds of wellness goals do people come to you for?", a: "People come to us for all sorts of reasons — joint discomfort, post-injury recovery, fatigue, inflammation, longevity, and performance. We don't make specific medical claims, but we work with each client to understand their goals and match them with the right protocol and provider." },
  { q: "What happens during a consultation?", a: "Your consultation is a conversation, not a sales pitch. We go over your health history, listen to what you're dealing with, and walk you through which protocols might make sense. From there, you're connected to a licensed practitioner who handles the clinical side." },
  { q: "How soon do people notice a difference?", a: "It really depends on the person and the protocol. Some clients notice changes within a few weeks; for others it unfolds over several months as the regenerative process continues. We'll set realistic expectations from the start." },
  { q: "How do I become a business partner?", a: "We offer a turnkey JV partnership with revenue sharing for medical practices and businesses. Contact us through the partner inquiry form and our team will walk you through the process." },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group border-b border-[#F1ECF8] transition-colors duration-300 ${
        open ? "border-[#6762AF]/30" : "hover:border-[#6762AF]/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-7 text-left"
        aria-expanded={open}
      >
        <span className="lux-display text-lg lg:text-2xl text-[#1A1F30] pr-6 group-hover:text-[#583563] transition-colors duration-300">
          {faq.q}
        </span>
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full border shrink-0 transition-all duration-300 ${
            open
              ? "bg-[#1A1F30] border-[#1A1F30] text-white rotate-180"
              : "border-[#6762AF]/30 text-[#6762AF] group-hover:border-[#6762AF] group-hover:bg-[#F1ECF8]"
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-12 text-base text-[#4A4F66] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-28 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#F1ECF8]/60 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#EAEFF7]/80 blur-[100px] pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 lux-display text-4xl lg:text-5xl text-[#1A1F30] leading-[1.05]">
              Frequently asked <span className="text-[#6762AF] font-semibold">questions</span>
            </h2>
            <p className="mt-6 text-sm text-[#4A4F66] leading-relaxed">
              Everything you need to know about our treatments and partnerships. Still have questions?{" "}
              <a href="/contact" className="text-[#6762AF] underline-offset-2 hover:underline font-medium">
                Get in touch.
              </a>
            </p>
          </motion.div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            {inView && faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
