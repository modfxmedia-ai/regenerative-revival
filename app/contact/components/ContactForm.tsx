"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  Lock,
  Zap,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sage/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            Get in Touch
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Get in Touch with{" "}
            <span className="gradient-text">Regenerative Revival</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 font-sans">
            We&apos;re here to help you start your journey towards a pain-free
            life. Contact us today and take the first step towards improved
            health and wellness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form — left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <FormCard />
          </motion.div>

          {/* Sidebar — right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <ContactInfo />
            <WhyReachOut />
            <QuickResponse />
            <TrustBadges />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function FormCard() {
  return (
    <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-white/80 shadow-[0_8px_40px_rgba(107,63,160,0.06)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />

      {/* Form header with image */}
      <div className="relative mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10">
            <Send className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Send Us a Message
            </h3>
            <p className="text-sm text-gray-500 font-sans">
              Fill out the form and we&apos;ll get back to you shortly
            </p>
          </div>
        </div>
      </div>

      <form
        className="relative flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-firstName"
              className="block text-sm font-medium text-gray-900 mb-2 font-sans"
            >
              First Name <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-firstName"
              type="text"
              required
              className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="contact-lastName"
              className="block text-sm font-medium text-gray-900 mb-2 font-sans"
            >
              Last Name <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-lastName"
              type="text"
              required
              className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-gray-900 mb-2 font-sans"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-medium text-gray-900 mb-2 font-sans"
          >
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-medium text-gray-900 mb-2 font-sans"
          >
            Subject
          </label>
          <select
            id="contact-subject"
            className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3.5 text-sm text-gray-900 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
          >
            <option value="">Select a topic...</option>
            <option value="consultation">Schedule a Consultation</option>
            <option value="treatment">Treatment Information</option>
            <option value="pricing">Pricing &amp; Insurance</option>
            <option value="partnership">Business Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-gray-900 mb-2 font-sans"
          >
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            required
            className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none font-sans"
            placeholder="Tell us about your health concerns, questions, or how we can help you..."
          />
        </div>

        <button
          type="submit"
          className="group flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary text-base font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 font-sans"
        >
          <Send className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          Send Message
        </button>

        <p className="text-xs text-gray-400 text-center leading-relaxed font-sans">
          By providing a telephone number and submitting the form you are
          consenting to be contacted by SMS text message from Regenerative
          Revival and/or Seth Berge Inc. Message frequency may vary. Message
          &amp; data rates may apply. Reply STOP to opt out of further
          messaging. Reply HELP for more information. See our{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}


function ContactInfo() {
  const items = [
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@regenerativerevival.com",
      href: "mailto:info@regenerativerevival.com",
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Nationwide — All 50 States",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon–Fri: 9AM–6PM EST",
    },
  ];

  return (
    <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-8 border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />

      {/* Mini image banner */}
      <div className="relative rounded-xl overflow-hidden mb-6 h-32">
        <img
          src="/about/imgi_74_doctor-and-patient.jpg"
          alt="Regenerative Revival team"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-secondary/20" />
        <div className="absolute bottom-3 left-4 z-10">
          <p className="text-white font-semibold text-sm">Contact Information</p>
          <p className="text-white/60 text-xs font-sans">
            We&apos;re here to help
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 shrink-0">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-sans">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-900 font-medium hover:text-primary transition-colors text-sm font-sans"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-900 font-medium text-sm font-sans">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyReachOut() {
  const reasons = [
    "Schedule a free consultation",
    "Learn about treatment options",
    "Get pricing information",
    "Discuss partnership opportunities",
    "Ask about concierge services",
  ];

  return (
    <div className="relative bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] backdrop-blur-2xl rounded-3xl p-8 border border-primary/10 shadow-[0_4px_24px_rgba(107,63,160,0.04)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <h3 className="relative text-base font-semibold text-gray-900 mb-4">
        Reasons to Reach Out
      </h3>
      <div className="relative flex flex-col gap-3">
        {reasons.map((reason) => (
          <div key={reason} className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
            <span className="text-sm text-gray-600 font-sans">{reason}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-6">
        <a
          href="tel:+15551234567"
          className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 font-sans"
        >
          <Phone className="h-4 w-4" />
          Call Us Directly
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function QuickResponse() {
  return (
    <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-8 text-center border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <div className="relative h-14 w-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 flex items-center justify-center mb-4">
        <Zap className="h-7 w-7 text-primary" />
      </div>
      <h3 className="relative text-lg font-semibold text-gray-900 mb-2">
        Quick Response
      </h3>
      <p className="relative text-sm text-gray-600 font-sans">
        We typically respond within 24 hours. For urgent inquiries, call us
        directly.
      </p>
      <div className="relative mt-4 flex items-center justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
          />
        ))}
        <span className="ml-2 text-sm font-bold text-gray-900 font-sans">
          4.9
        </span>
        <span className="text-xs text-gray-400 font-sans ml-1">
          (500+ reviews)
        </span>
      </div>
    </div>
  );
}

function TrustBadges() {
  const badges = [
    { icon: Shield, label: "AATB Accredited" },
    { icon: Award, label: "FDA Compliant" },
    { icon: Lock, label: "HIPAA Secure" },
    { icon: Award, label: "Board Certified" },
  ];
  return (
    <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-8 border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <h3 className="relative text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 font-sans">
        Trusted &amp; Certified
      </h3>
      <div className="relative grid grid-cols-2 gap-3">
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-2 rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 py-3 px-3 shadow-[0_2px_8px_rgba(107,63,160,0.03)]"
          >
            <b.icon className="h-4 w-4 text-primary/60 shrink-0" />
            <span className="text-xs font-medium text-gray-600 font-sans">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
