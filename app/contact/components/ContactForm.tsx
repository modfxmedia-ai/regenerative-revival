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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact-form" ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F1ECF8]/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EAEFF7]/60 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Get in Touch</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
            Get in touch with{" "}
            <span className="text-[#6762AF]">Regenerative Revival</span>
          </h2>
          <p className="mt-5 text-base text-[#4A4F66]">
            We&apos;re here to help you start your journey towards a pain-free life. Contact us today and take the first step towards improved health and wellness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form - left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <FormCard />
          </motion.div>

          {/* Sidebar - right side */}
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


// Full intake form hosted in Tyria (frm_cf7dade5). This is the complete form
// with gender, state, pain areas, favorite activities, "what led you," and the
// "team member" selector that routes each lead to the proper rep. Embedding the
// real Tyria form (rather than posting a subset of fields through /api/leads)
// keeps rep-assignment native and captures every question.
const CONTACT_FORM_SRC =
  "https://www.tyriacore.app/forms/frm_cf7dade5-7e28-419f-a82e-ce232bd0012a?workspaceId=ws_962d7611-e9b4-4990-9ddc-89bf7c899735&embed=1";

function FormCard() {
  return (
    <div className="relative bg-white rounded-[20px] p-6 sm:p-8 border border-[#F1ECF8] shadow-[0_8px_40px_-12px_rgba(88,53,99,0.12)]">
      <div className="relative mb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1ECF8] border border-[#6762AF]/10">
            <Send className="h-5 w-5 text-[#6762AF]" />
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-[#1A1F30]">Send Us a Message</h3>
            <p className="text-[13px] text-[#4A4F66]">Fill out the form and we&apos;ll get back to you shortly</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#F1ECF8] bg-white">
        <iframe
          src={CONTACT_FORM_SRC}
          title="Contact Regenerative Revival"
          className="block w-full border-0"
          style={{ minHeight: 1100 }}
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-[11px] text-[#7A7F95] text-center leading-relaxed">
        By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message from Regenerative Revival and/or Seth Berge Inc. Message frequency may vary. Message &amp; data rates may apply. Reply STOP to opt out. See our{" "}
        <a href="/privacy-policy" className="text-[#6762AF] hover:underline">Privacy Policy</a>.
      </p>
    </div>
  );
}


function ContactInfo() {
  const items = [
    { icon: Phone, label: "Phone", value: "612-453-3182", href: "tel:+16124533182" },
    { icon: Mail, label: "Email", value: "info@regenerativerevival.com", href: "mailto:info@regenerativerevival.com" },
    { icon: MapPin, label: "Service Area", value: "Nationwide - All 50 States" },
    { icon: Clock, label: "Hours", value: "Mon–Fri: 9AM–6PM EST" },
  ];

  return (
    <div className="relative bg-white rounded-[20px] p-7 border border-[#F1ECF8] shadow-[0_4px_24px_-8px_rgba(88,53,99,0.1)]">
      <div className="relative rounded-xl overflow-hidden mb-6 h-28">
        <img src="/About Page & contact page-_Our Guarantee.jpeg" alt="Regenerative Revival team" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/70 to-[#1A1F30]/20" />
        <div className="absolute bottom-3 left-4 z-10">
          <p className="text-white font-semibold text-[13px]">Contact Information</p>
          <p className="text-white/60 text-[11px]">We&apos;re here to help</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1ECF8] border border-[#6762AF]/10 shrink-0">
              <item.icon className="h-4 w-4 text-[#6762AF]" />
            </div>
            <div>
              <p className="text-[10px] text-[#7A7F95] uppercase tracking-wider mb-0.5">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-[#1A1F30] font-medium hover:text-[#6762AF] transition-colors text-[13px]">{item.value}</a>
              ) : (
                <p className="text-[#1A1F30] font-medium text-[13px]">{item.value}</p>
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
    "Learn about therapy options",
    "Get pricing information",
    "Discuss partnership opportunities",
    "Ask about concierge services",
  ];
  return (
    <div className="relative bg-[#F4EFFA] rounded-[20px] p-7 border border-[#6762AF]/10">
      <h3 className="text-[14px] font-semibold text-[#1A1F30] mb-4">Reasons to Reach Out</h3>
      <div className="flex flex-col gap-3">
        {reasons.map((reason) => (
          <div key={reason} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6762AF] shrink-0" />
            <span className="text-[13px] text-[#4A4F66]">{reason}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="tel:+16124533182"
          className="group flex h-11 items-center justify-center gap-2 rounded-full bg-[#021E3C] text-[13px] font-semibold text-white transition-all hover:bg-[#345691] hover:shadow-[0_8px_24px_-8px_rgba(2,30,60,0.5)]"
        >
          <Phone className="h-3.5 w-3.5" />
          Call Us Directly
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function QuickResponse() {
  return (
    <div className="relative bg-gradient-to-br from-[#6762AF] to-[#583563] rounded-[20px] p-7 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="relative h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center mb-4 border border-white/20">
        <Zap className="h-5 w-5 text-white" />
      </div>
      <h3 className="relative text-[16px] font-semibold text-white mb-2">Quick Response</h3>
      <p className="relative text-[13px] text-white/80 leading-relaxed">
        We typically respond within 24 hours. For urgent inquiries, call us directly.
      </p>
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
    <div className="bg-white rounded-[20px] p-7 border border-[#F1ECF8] shadow-[0_4px_24px_-8px_rgba(88,53,99,0.08)]">
      <h3 className="text-[11px] font-semibold text-[#7A7F95] uppercase tracking-[0.18em] mb-4">Trusted &amp; Certified</h3>
      <div className="grid grid-cols-2 gap-2.5">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 rounded-xl bg-[#F4EFFA] border border-[#6762AF]/10 py-3 px-3">
            <b.icon className="h-3.5 w-3.5 text-[#6762AF] shrink-0" />
            <span className="text-[11px] font-medium text-[#4A4F66]">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
