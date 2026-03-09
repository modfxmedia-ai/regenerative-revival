"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

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