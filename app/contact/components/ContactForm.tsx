"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
import { submitLead } from "@/app/lib/submit-lead";

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
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
          <h2 className="mt-4 font-[family-name:var(--font-fraunces)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
            Get in touch with{" "}
            <em className="italic text-[#6762AF]">Regenerative Revival</em>
          </h2>
          <p className="mt-5 text-base text-[#4A4F66]">
            We&apos;re here to help you start your journey towards a pain-free life. Contact us today and take the first step towards improved health and wellness.
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validateName(value: string, field: string): string | null {
    const trimmed = value.trim();
    if (!trimmed) return `${field} is required`;
    if (trimmed.length < 2) return `${field} must be at least 2 characters`;
    if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) return `${field} contains invalid characters`;
    return null;
  }

  function validatePhone(value: string): string | null {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "Phone number is required";
    if (digits.length < 10 || digits.length > 11) return "Enter a valid 10-digit phone number";
    const areaCode = digits.length === 11 ? digits.slice(1, 4) : digits.slice(0, 3);
    // Reject invalid area codes (0xx, 1xx, x11 except 911)
    if (/^[01]/.test(areaCode) || /^.11$/.test(areaCode)) return "Enter a valid US area code";
    return null;
  }

  function validateEmail(value: string): string | null {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Enter a valid email address";
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const firstName = (data.get("firstName") as string) || "";
    const lastName = (data.get("lastName") as string) || "";
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const nameParts = fullName.split(/\s+/).filter(Boolean);

    const fnErr = validateName(firstName, "First name");
    if (fnErr) newErrors.firstName = fnErr;
    const lnErr = validateName(lastName, "Last name");
    if (lnErr) newErrors.lastName = lnErr;
    if (!fnErr && !lnErr && nameParts.length < 2) newErrors.lastName = "Please enter your full name (first and last)";

    const phoneErr = validatePhone((data.get("phone") as string) || "");
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateEmail((data.get("email") as string) || "");
    if (emailErr) newErrors.email = emailErr;

    const message = ((data.get("message") as string) || "").trim();
    if (!message) newErrors.message = "Message is required";
    if (message && message.length < 10) newErrors.message = "Please provide more detail in your message";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      // TODO (when paid ads launch): capture marketing attribution per SEO
      // playbook §11.3 / §12.4 — read utm_*, gclid, fbclid, msclkid, ttclid,
      // li_fat_id from URL params (persist across pages via sessionStorage)
      // plus landing_page + document.referrer. Pass them to submitLead so the
      // /api/leads route can surface them in the team email. Without this,
      // paid leads attribute to "direct" and Google Ads / Meta can't import
      // conversions back to optimize ad spend.
      const result = await submitLead({
        firstName,
        lastName,
        email: (data.get("email") as string).trim(),
        phone: (data.get("phone") as string).trim(),
        message,
        subject: (data.get("subject") as string) || undefined,
        source: "contact-page",
      });
      setSubmitting(false);
      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setErrors({ form: result.error || "Something went wrong. Please try again." });
      }
    }
  }

  const inputClass = "w-full rounded-xl bg-[#F4EFFA]/60 border px-4 py-3.5 text-sm text-[#1A1F30] placeholder-[#7A7F95] focus:border-[#6762AF]/40 focus:outline-none focus:ring-2 focus:ring-[#6762AF]/10 transition-all";
  const errorInputClass = "border-red-300 focus:border-red-400 focus:ring-red-100";
  const normalInputClass = "border-[#F1ECF8]";

  if (submitted) {
    return (
      <div className="relative bg-white rounded-[20px] p-8 sm:p-10 border border-[#F1ECF8] shadow-[0_8px_40px_-12px_rgba(88,53,99,0.15)] text-center py-20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1ECF8] border border-[#6762AF]/20 mx-auto mb-5">
          <Send className="h-7 w-7 text-[#6762AF]" />
        </div>
        <h3 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#1A1F30] mb-2">Thank You!</h3>
        <p className="text-[#4A4F66]">We&apos;ve received your message and will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-[20px] p-8 sm:p-10 border border-[#F1ECF8] shadow-[0_8px_40px_-12px_rgba(88,53,99,0.12)]">
      <div className="relative mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1ECF8] border border-[#6762AF]/10">
            <Send className="h-5 w-5 text-[#6762AF]" />
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-[#1A1F30]">Send Us a Message</h3>
            <p className="text-[13px] text-[#4A4F66]">Fill out the form and we&apos;ll get back to you shortly</p>
          </div>
        </div>
      </div>

      {errors.form && <p className="text-sm text-red-500 mb-4">{errors.form}</p>}

      <form className="relative flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-firstName" className="block text-sm font-medium text-gray-900 mb-2 font-sans">
              First Name <span className="text-red-400">*</span>
            </label>
            <input id="contact-firstName" name="firstName" type="text" required className={`${inputClass} ${errors.firstName ? errorInputClass : normalInputClass}`} placeholder="John" />
            {errors.firstName && <p className="mt-1 text-xs text-red-500 font-sans">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="contact-lastName" className="block text-sm font-medium text-gray-900 mb-2 font-sans">
              Last Name <span className="text-red-400">*</span>
            </label>
            <input id="contact-lastName" name="lastName" type="text" required className={`${inputClass} ${errors.lastName ? errorInputClass : normalInputClass}`} placeholder="Doe" />
            {errors.lastName && <p className="mt-1 text-xs text-red-500 font-sans">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-900 mb-2 font-sans">
            Email <span className="text-red-400">*</span>
          </label>
          <input id="contact-email" name="email" type="email" required className={`${inputClass} ${errors.email ? errorInputClass : normalInputClass}`} placeholder="john@example.com" />
          {errors.email && <p className="mt-1 text-xs text-red-500 font-sans">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-900 mb-2 font-sans">
            Phone <span className="text-red-400">*</span>
          </label>
          <input id="contact-phone" name="phone" type="tel" required className={`${inputClass} ${errors.phone ? errorInputClass : normalInputClass}`} placeholder="(555) 123-4567" />
          {errors.phone && <p className="mt-1 text-xs text-red-500 font-sans">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-900 mb-2 font-sans">Subject</label>
          <select id="contact-subject" name="subject" className={`${inputClass} ${normalInputClass}`}>
            <option value="">Select a topic...</option>
            <option value="consultation">Schedule a Consultation</option>
            <option value="treatment">Treatment Information</option>
            <option value="pricing">Pricing &amp; Insurance</option>
            <option value="partnership">Business Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-900 mb-2 font-sans">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea id="contact-message" name="message" rows={5} required className={`${inputClass} resize-none ${errors.message ? errorInputClass : normalInputClass}`} placeholder="Tell us about your health concerns, questions, or how we can help you..." />
          {errors.message && <p className="mt-1 text-xs text-red-500 font-sans">{errors.message}</p>}
        </div>

        <button type="submit" disabled={submitting} className="group flex h-13 py-3.5 items-center justify-center gap-2 rounded-full bg-[#021E3C] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.6)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
          <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          {submitting ? "Sending..." : "Send Message"}
        </button>

        <p className="text-[11px] text-[#7A7F95] text-center leading-relaxed">
          By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message from Regenerative Revival and/or Seth Berge Inc. Message frequency may vary. Message &amp; data rates may apply. Reply STOP to opt out. See our{" "}
          <a href="/privacy-policy" className="text-[#6762AF] hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}


function ContactInfo() {
  const items = [
    { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, label: "Email", value: "info@regenerativerevival.com", href: "mailto:info@regenerativerevival.com" },
    { icon: MapPin, label: "Service Area", value: "Nationwide — All 50 States" },
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
    "Learn about treatment options",
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
          href="tel:+15551234567"
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
      <div className="relative mt-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-[#71A7F5] text-[#71A7F5]" />
        ))}
        <span className="ml-2 text-[13px] font-bold text-white">4.9</span>
        <span className="text-[11px] text-white/60 ml-1">(500+ reviews)</span>
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
