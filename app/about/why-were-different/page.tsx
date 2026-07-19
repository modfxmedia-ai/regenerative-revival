"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  FlaskConical,
  Users,
  Heart,
  BookOpen,
  Zap,
  MapPin,
  Award,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuizCTA from "@/app/components/QuizCTA";

const differentiators = [
  {
    icon: FlaskConical,
    title: "Premium-Grade Source Material",
    body:
      "We use only Wharton's Jelly MSCs from accredited, FDA-compliant tissue banks - not from your own body. Neonatal tissue is younger, more active, and clinically outperforms adult-derived cells. No compromise, no shortcuts.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Assurance",
    body:
      "Every product we work with is independently tested for sterility, viability, and potency before it ever reaches a patient. Our tissue bank partners maintain ISO-certified processes and full chain-of-custody documentation.",
  },
  {
    icon: Users,
    title: "Licensed Practitioner Network",
    body:
      "We don't sell you a product and send you home. You're matched with a licensed, vetted provider in our nationwide network who administers your protocol under proper medical oversight - the way it should be done.",
  },
  {
    icon: Heart,
    title: "Truly Personalized Protocols",
    body:
      "Your biology is unique. We build each protocol around your specific health history, goals, and response profile. Generic one-size-fits-all programs exist elsewhere - they don't exist here.",
  },
  {
    icon: BookOpen,
    title: "Education-First Approach",
    body:
      "We never sell you something you don't understand. Before any protocol, you'll know exactly what's going into your body, why, and what to expect. An informed patient is an empowered patient - and that leads to better outcomes.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Regenerative Protocols",
    body:
      "We stay at the leading edge of regenerative science - not because it's trendy, but because our patients deserve the most effective options available. Our medical advisory team continuously reviews emerging research.",
  },
  {
    icon: MapPin,
    title: "Nationwide Access",
    body:
      "Whether you're in a major metropolitan area or a smaller market, our growing network of partner providers means world-class regenerative care is closer than you think. We coordinate everything so you don't have to.",
  },
  {
    icon: Award,
    title: "Proven, Documented Outcomes",
    body:
      "We track results. Thousands of clients have experienced measurable improvements in pain, mobility, energy, and quality of life. Real outcomes - not just anecdotes - guide everything we refine about our process.",
  },
];

const comparisonPoints = [
  { them: "Lab-derived synthetic compounds", us: "Living Wharton's Jelly MSCs from neonatal tissue" },
  { them: "Off-the-shelf, one-size programs", us: "Personalized protocol built around your biology" },
  { them: "No medical oversight or follow-up", us: "Licensed practitioner-administered with follow-up care" },
  { them: "Opaque sourcing, minimal testing", us: "Accredited tissue banks, independently verified" },
  { them: "Sales pitch first, education never", us: "Education-first, no pressure, full transparency" },
  { them: "Single location or online-only", us: "Nationwide network of vetted partner providers" },
];

function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 bg-secondary overflow-hidden">
      {/* Background video */}
      <video
        src="/AdobeStock_706285885.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        aria-hidden
      />
      <div className="absolute inset-0 bg-secondary/80" />
      {/* Ambient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5"
        >
          About Us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Why Regenerative Revival{" "}
          <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
            Is Different
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-xl text-white/55 leading-relaxed"
        >
          Regenerative medicine is full of big promises and thin evidence. We built Regenerative
          Revival to be the exception - rigorous sourcing, licensed practitioners, personalized
          protocols, and a commitment to your education every step of the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/consult-router"
            className="inline-flex h-12 items-center rounded-full bg-primary px-8 text-sm font-semibold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            Take The 2-Minute Quiz
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="/why-stem-cells"
            className="inline-flex h-12 items-center rounded-full border border-white/20 px-8 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            Learn the Science
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">
            Our Principles
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Eight Reasons the Bar Is{" "}
            <span className="gradient-text">Set Higher Here</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
            From source to protocol to follow-up, here&apos;s exactly what makes our approach
            different - and why it matters for your outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl p-6 border border-primary/10 bg-primary/[0.035] hover:bg-primary/[0.05] hover:border-primary/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-md shadow-primary/20 mb-5 group-hover:scale-105 transition-transform duration-300"
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-secondary overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5">
            Side by Side
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
            How We Stack Up
          </h2>
          <p className="mt-5 text-lg text-white/50 max-w-2xl mx-auto">
            Most alternatives cut corners somewhere. Here&apos;s an honest look at what separates
            us from the rest.
          </p>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-4 px-6"
        >
          <div className="text-center">
            <span className="text-sm font-semibold text-white/40 uppercase tracking-widest">
              The Typical Alternative
            </span>
          </div>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-light uppercase tracking-widest">
              <Star className="h-3.5 w-3.5 fill-current" />
              Regenerative Revival
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {comparisonPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Them */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-4 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-red-400/60 shrink-0" />
                <p className="text-sm text-white/40 leading-relaxed">{point.them}</p>
              </div>
              {/* Us */}
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.07] px-6 py-4 flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-primary-light shrink-0" />
                <p className="text-sm text-white/80 font-medium leading-relaxed">{point.us}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">
            Ready to Start?
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Experience the{" "}
            <span className="gradient-text">Regenerative Revival Difference</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your free consultation is a real conversation - not a sales call. Come with questions.
            Leave with clarity.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/consult-router"
              className="inline-flex h-13 items-center rounded-full bg-primary px-10 py-3 text-base font-semibold text-white hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25 transition-all"
            >
              Take The 2-Minute Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/testimonials"
              className="inline-flex h-13 items-center rounded-full border border-gray-200 px-10 py-3 text-base font-semibold text-gray-700 hover:border-primary/30 hover:text-primary transition-all"
            >
              Read Real Stories
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function WhyWereDifferentPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "About", href: "/about" },
          { label: "Why We're Different", href: "/about/why-were-different" },
        ]}
      />
      <HeroSection />
      <DifferentiatorsSection />
      <ComparisonSection />
      <QuizCTA />
    </>
  );
}

