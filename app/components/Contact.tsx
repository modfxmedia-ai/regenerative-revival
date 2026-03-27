"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Phone, Mail, Zap, Shield, Award, Lock } from "lucide-react";
import { submitLead } from "@/app/lib/submit-lead";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [inquiryType, setInquiryType] = useState("patient");

  return (
    <section id="contact" className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sage/40 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">Get Started</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Get in Touch with <span className="gradient-text">Regenerative Revival</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Whether you&apos;re a patient seeking treatment or a business looking to partner, we&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3">
            <FormCard inquiryType={inquiryType} setInquiryType={setInquiryType} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-2 flex flex-col gap-5">
            <ContactInfo />
            <QuickResponse />
            <TrustBadges />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function FormCard({ inquiryType, setInquiryType }: { inquiryType: string; setInquiryType: (v: string) => void }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setFormError("");
    setSubmitting(true);

    const result = await submitLead({
      firstName: ((data.get("firstName") as string) || "").trim(),
      lastName: ((data.get("lastName") as string) || "").trim(),
      email: ((data.get("email") as string) || "").trim(),
      phone: ((data.get("phone") as string) || "").trim(),
      message: ((data.get("message") as string) || "").trim(),
      inquiryType,
      source: "homepage-contact",
    });

    setSubmitting(false);
    if (result.success) {
      setSubmitted(true);
      form.reset();
    } else {
      setFormError(result.error || "Something went wrong. Please try again.");
    }
  }

  if (submitted) {
    return (
      <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-white/80 shadow-[0_8px_40px_rgba(107,63,160,0.06)] text-center py-20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 border border-green-400/20 mx-auto mb-5">
          <Send className="h-7 w-7 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">We&apos;ve received your message and will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-white/80 shadow-[0_8px_40px_rgba(107,63,160,0.06)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative flex gap-1.5 mb-8 p-1 rounded-full bg-gray-100/80 backdrop-blur-sm w-fit border border-gray-200/50">
        <button onClick={() => setInquiryType("patient")} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${inquiryType === "patient" ? "bg-white text-primary shadow-[0_2px_12px_rgba(107,63,160,0.15)] border border-primary/10" : "text-gray-500 hover:text-gray-900"}`}>
          I&apos;m a Patient
        </button>
        <button onClick={() => setInquiryType("business")} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${inquiryType === "business" ? "bg-white text-gold shadow-[0_2px_12px_rgba(201,168,76,0.15)] border border-gold/10" : "text-gray-500 hover:text-gray-900"}`}>
          I&apos;m a Business
        </button>
      </div>

      {formError && <p className="relative text-sm text-red-500 mb-4">{formError}</p>}

      <form className="relative flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
            <input id="firstName" type="text" className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all" placeholder="John" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
            <input id="lastName" type="text" className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Doe" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email</label>
          <input id="email" type="email" className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all" placeholder="john@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
          <input id="phone" type="tel" className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all" placeholder="(555) 123-4567" />
        </div>
        {inquiryType === "business" && (
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">Practice / Company Name</label>
            <input id="company" type="text" className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Your practice name" />
          </div>
        )}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            {inquiryType === "patient" ? "Tell us about your condition" : "Tell us about your business needs"}
          </label>
          <textarea id="message" rows={4} className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none" placeholder={inquiryType === "patient" ? "Describe your symptoms..." : "Tell us about your practice..."} />
        </div>
        <button type="submit" disabled={submitting} className={`group flex h-14 items-center justify-center gap-2 rounded-2xl text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed ${inquiryType === "patient" ? "bg-primary hover:bg-primary-dark hover:shadow-primary/20" : "bg-gold hover:bg-gold-light hover:shadow-gold/20"}`}>
          <Send className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
          {submitting ? "Sending..." : inquiryType === "patient" ? "Request Consultation" : "Submit Partnership Inquiry"}
        </button>
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          By submitting this form you consent to be contacted by SMS and email. Message &amp; data rates may apply. Reply STOP to opt out.
        </p>
      </form>
    </div>
  );
}


function ContactInfo() {
  return (
    <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl p-8 border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <h3 className="relative text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
      <div className="relative flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <a href="tel:+15551234567" className="text-gray-900 font-medium hover:text-primary transition-colors">(555) 123-4567</a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <a href="mailto:info@regenerativerevival.com" className="text-gray-900 font-medium hover:text-primary transition-colors">info@regenerativerevival.com</a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-gray-900 font-medium">Nationwide Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickResponse() {
  return (
    <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl p-8 text-center border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <div className="relative h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 flex items-center justify-center mb-4">
        <Zap className="h-7 w-7 text-primary" />
      </div>
      <h3 className="relative text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
      <p className="relative text-sm text-gray-600">We typically respond within 24 hours. For urgent inquiries, call us directly.</p>
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
    <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl p-8 border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <h3 className="relative text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Trusted By</h3>
      <div className="relative grid grid-cols-2 gap-3">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 rounded-xl bg-white/70 backdrop-blur-sm border border-white/80 py-3 px-3 shadow-[0_2px_8px_rgba(107,63,160,0.03)]">
            <b.icon className="h-4 w-4 text-primary/60 shrink-0" />
            <span className="text-xs font-medium text-gray-600">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}