"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  { q: "What is stem cell therapy?", a: "Stem cell therapy is a form of regenerative medicine that utilizes the body's stem cells to repair and regenerate damaged tissues. It's a non-invasive approach that harnesses your body's natural healing capabilities." },
  { q: "How does Wharton's Jelly enhance stem cell therapy?", a: "Wharton's Jelly contains a high concentration of mesenchymal stem cells (MSCs) and growth factors, which significantly enhance the body's natural healing processes. These cells are younger and more potent than adult-derived stem cells." },
  { q: "Is stem cell therapy safe?", a: "Yes, stem cell therapy using Wharton's Jelly has a strong safety profile and is less likely to trigger an immune response. All our products come from accredited tissue banks and undergo rigorous testing." },
  { q: "What conditions can stem cell therapy address?", a: "Stem cell therapy can be used to relieve a variety of conditions, including sports injuries, chronic pain, osteoarthritis, degenerative diseases, joint pain, and soft tissue damage." },
  { q: "What can I expect during my consultation?", a: "During your consultation, our team will review your medical history, discuss your specific health concerns, and develop a personalized treatment plan tailored to your needs." },
  { q: "When will I see results?", a: "Many patients experience improvements within a few weeks, with ongoing progress over several months as the stem cells continue to promote tissue repair and regeneration." },
  { q: "How do I become a business partner?", a: "We offer a turnkey JV partnership with revenue sharing for medical practices and businesses. Contact us through the partner inquiry form and our team will walk you through the process." },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group relative rounded-2xl overflow-hidden bg-white/60 backdrop-blur-2xl border transition-all duration-300 ${
        open
          ? "border-primary/20 shadow-[0_8px_32px_rgba(107,63,160,0.08)]"
          : "border-white/80 shadow-[0_4px_16px_rgba(107,63,160,0.04)] hover:shadow-[0_8px_24px_rgba(107,63,160,0.08)]"
      }`}
    >
      {/* Glass shine */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />

      <button onClick={() => setOpen(!open)} className="relative flex w-full items-center justify-between p-6 text-left" aria-expanded={open}>
        <span className="text-base font-semibold text-gray-900 pr-4">{faq.q}</span>
        <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shrink-0 transition-all duration-300 ${open ? "bg-primary/15 rotate-180" : ""}`}>
          <ChevronDown className="h-4 w-4 text-primary" />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
            <div className="relative px-6 pb-6">
              <div className="h-px bg-gradient-to-r from-primary/10 via-primary/5 to-transparent mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
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
    <section id="faq" className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient orbs */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-sage/40 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">
            <MessageCircle className="h-4 w-4" />
            FAQ
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">Everything you need to know about our treatments and partnerships.</p>
        </motion.div>
        {inView && (
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}