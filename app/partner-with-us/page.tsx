"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Dumbbell,
  HeartPulse,
  UserCheck,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
  BarChart3,
  Handshake,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Dumbbell,
    title: "Gyms & Fitness Centers",
    desc:
      "Offer members a powerful recovery and performance edge. Integrate regenerative protocols as a premium upsell - zero clinical infrastructure required on your end.",
    ideal: ["High-performance gyms", "CrossFit & functional fitness", "Recovery-focused studios"],
  },
  {
    icon: HeartPulse,
    title: "Recovery Centers",
    desc:
      "Complement your existing modalities - cryotherapy, hyperbaric, IV therapy - with stem cell protocols that deepen outcomes and drive premium revenue.",
    ideal: ["Cryo & recovery lounges", "Longevity clinics", "Anti-aging centers"],
  },
  {
    icon: UserCheck,
    title: "Physical Therapists & Chiropractors",
    desc:
      "Accelerate patient outcomes by pairing hands-on care with regenerative protocols. Your patients plateau less. Your practice differentiates instantly.",
    ideal: ["Private PT practices", "Sports medicine clinics", "Chiropractic offices"],
  },
  {
    icon: Megaphone,
    title: "Influencers & Affiliates",
    desc:
      "Have an audience in health, fitness, biohacking, or longevity? Earn meaningful revenue by introducing your followers to a product and brand they'll genuinely love.",
    ideal: ["Health & wellness creators", "Biohacking communities", "Longevity-focused media"],
  },
];

const benefits = [
  { icon: DollarSign, text: "Generous revenue share - industry-leading JV structure" },
  { icon: BarChart3, text: "Turnkey systems: training, marketing collateral, onboarding" },
  { icon: Shield, text: "We handle all compliance, sourcing, and clinical protocols" },
  { icon: Zap, text: "Dedicated partner success manager from day one" },
  { icon: TrendingUp, text: "Proven demand - this market is growing fast and we're ahead of it" },
  { icon: Handshake, text: "Long-term partnership focus - not a one-and-done transaction" },
];

const howItWorks = [
  {
    step: "01",
    title: "Apply to Partner",
    desc: "Fill out our short partner inquiry form. We review within 48 hours.",
  },
  {
    step: "02",
    title: "Discovery Call",
    desc: "We get on a call to understand your business, goals, and ideal fit.",
  },
  {
    step: "03",
    title: "Partnership Agreement",
    desc: "We finalize terms, revenue structure, and your onboarding timeline.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    desc: "Go live with full support - marketing assets, training, and a dedicated success manager.",
  },
];

const faqs = [
  {
    q: "Do I need a medical license to partner with you?",
    a: "No. We pair you with licensed practitioners in our network who handle all clinical administration. Your role is referral and education - we handle the medical side.",
  },
  {
    q: "How is revenue structured?",
    a: "We operate on a turnkey JV model with revenue sharing. Exact terms are discussed during the discovery call and depend on your business type and volume expectations.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most partners are fully onboarded within 2–3 weeks of signing. We have a proven playbook that makes the process fast and friction-free.",
  },
  {
    q: "What marketing support do you provide?",
    a: "We provide co-branded materials, landing pages, email sequences, and social content - all compliant and ready to deploy. You don't have to build anything from scratch.",
  },
];

export default function PartnerWithUsPage() {
  const benefitsRef = useRef(null);
  const howRef = useRef(null);
  const typesRef = useRef(null);
  const faqRef = useRef(null);

  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const howInView = useInView(howRef, { once: true, margin: "-80px" });
  const typesInView = useInView(typesRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-28 bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/[0.06] rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5"
          >
            <Handshake className="h-3.5 w-3.5" />
            B2B Partnerships
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            Partner With{" "}
            <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
              Regenerative Revival
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-xl text-white/55 leading-relaxed"
          >
            Are you a gym, recovery center, physical therapist, or health influencer? Our turnkey
            partnership program lets you bring world-class regenerative medicine to your audience
 - with full revenue share and zero clinical complexity on your end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#apply"
              className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-sm font-semibold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Apply to Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center rounded-full border border-white/20 px-8 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "4 Types", label: "of partners we work with" },
              { value: "2–3 Wks", label: "average onboarding time" },
              { value: "Turnkey", label: "marketing & systems provided" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner types */}
      <section ref={typesRef} className="py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={typesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">
              Who We Work With
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Built for{" "}
              <span className="gradient-text">Health & Wellness Leaders</span>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-500">
              If you serve an audience that cares about recovery, performance, and longevity - we
              built this for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {partnerTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={typesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-3xl border border-primary/10 bg-primary/[0.035] p-8 hover:bg-primary/[0.05] hover:border-primary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/20 mb-6 group-hover:scale-105 transition-transform duration-300"
                >
                  <type.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{type.desc}</p>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    Ideal For
                  </p>
                  {type.ideal.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-28 bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5">
                Partnership Benefits
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-white">
                What You Get When{" "}
                <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  You Partner With Us
                </span>
              </h2>
              <p className="mt-5 text-lg text-white/50 leading-relaxed">
                We built this to be genuinely turnkey. You focus on your audience - we handle the
                rest.
              </p>
              <a
                href="#apply"
                className="mt-10 inline-flex h-12 items-center rounded-full bg-primary px-8 text-sm font-semibold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <div className="flex flex-col gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: 30, scale: 0.97 }}
                  animate={benefitsInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-6 py-5 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/15 shrink-0">
                    <b.icon className="h-5 w-5 text-primary-light" />
                  </div>
                  <p className="text-base text-white/80 font-medium leading-relaxed">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" ref={howRef} className="py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">
              The Process
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              How to Become a <span className="gradient-text">Partner</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(107,63,160,0.04)] hover:shadow-[0_12px_40px_rgba(107,63,160,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Connector line */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-6 h-px bg-gradient-to-r from-primary/20 to-transparent translate-x-6 z-10" />
                )}
                <span className="text-5xl font-black text-primary/10 leading-none mb-4 block">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-24 bg-gray-50 overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">
              Common Questions
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-900">
              Partnership FAQs
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
              >
                <h3 className="text-base font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Apply form */}
      <section id="apply" className="py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(155,109,215,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(155,109,215,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5">
              <Handshake className="h-3.5 w-3.5" />
              Get Started
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Apply to Partner with{" "}
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Regenerative Revival
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/50 max-w-2xl mx-auto">
              Tell us about your business and we&apos;ll be in touch within 48 hours to schedule a
              discovery call.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-white/60 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white placeholder-white/25 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white/60 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white placeholder-white/25 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white placeholder-white/25 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="jane@yourbusiness.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white/60 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white placeholder-white/25 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-white/60 mb-2">
                  Business / Organization
                </label>
                <input
                  type="text"
                  className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white placeholder-white/25 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Name of your gym, clinic, or brand"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-white/60 mb-2">
                  Partner Type
                </label>
                <select className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition">
                  <option value="">Select your partnership type</option>
                  <option value="gym">Gym / Fitness Center</option>
                  <option value="recovery">Recovery Center</option>
                  <option value="pt">Physical Therapist / Chiropractor</option>
                  <option value="influencer">Influencer / Affiliate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-white/60 mb-2">
                  Tell Us About Your Business
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                  placeholder="Brief overview - audience size, location, current offerings..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full h-14 rounded-full bg-primary text-base font-semibold text-white hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
            >
              Submit Partnership Application
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="mt-4 text-xs text-white/30 text-center">
              We review every application. You&apos;ll hear from us within 48 business hours.
            </p>
          </motion.form>
        </div>
      </section>
    </>
  );
}

