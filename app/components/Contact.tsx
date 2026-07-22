"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, MapPin, Phone, Mail, Sparkles, ShieldCheck, Award, Lock } from "lucide-react";
import { submitLead } from "@/app/lib/submit-lead";
import AppointmentBooking from "@/app/components/AppointmentBooking";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [inquiryType, setInquiryType] = useState("patient");

  return (
    <section id="contact" className="relative py-28 lg:py-32 bg-[#1A1F30] overflow-hidden">
      {/* Aurora */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#6762AF]/20 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#345691]/30 blur-[140px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 lux-grid opacity-30 pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="eyebrow text-[#71A7F5]">Get Started</span>
          <h2 className="mt-4 lux-display text-4xl sm:text-5xl lg:text-[3.75rem] text-white leading-[1.05]">
            Get in touch with <span className="text-[#6762AF] font-semibold">Regenerative Revival</span>
          </h2>
          <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed">
            Whether you&apos;re a patient seeking care or a business looking to partner - we&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <FormCard inquiryType={inquiryType} setInquiryType={setInquiryType} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <ContactInfo />
            <QuickResponse />
            <TrustBadges />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormCard({
  inquiryType,
  setInquiryType,
}: {
  inquiryType: string;
  setInquiryType: (v: string) => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [lead, setLead] = useState<{
    leadId?: string | null;
    clientId?: string | null;
    prospectId?: string | null;
    name: string;
    email: string;
  }>({
    name: "",
    email: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setFormError("");
    setSubmitting(true);

    const firstName = ((data.get("firstName") as string) || "").trim();
    const lastName = ((data.get("lastName") as string) || "").trim();
    const email = ((data.get("email") as string) || "").trim();

    const result = await submitLead({
      firstName,
      lastName,
      email,
      phone: ((data.get("phone") as string) || "").trim(),
      message: ((data.get("message") as string) || "").trim(),
      inquiryType,
      source: "homepage-contact",
    });

    setSubmitting(false);
    if (result.success) {
      setLead({
        leadId: result.leadId,
        clientId: result.clientId,
        prospectId: result.prospectId,
        name: `${firstName} ${lastName}`.trim(),
        email,
      });
      setSubmitted(true);
      form.reset();
    } else {
      setFormError(result.error || "Something went wrong. Please try again.");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[1.75rem] bg-white/[0.05] backdrop-blur-2xl border border-white/10 p-8 lg:p-10">
        <div className="text-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#71A7F5]/15 border border-[#71A7F5]/30 mx-auto mb-5">
            <Sparkles className="h-7 w-7 text-[#71A7F5]" />
          </div>
          <h3 className="lux-display text-3xl text-white mb-3">
            Thank <span className="text-[#6762AF] font-semibold">you</span>
          </h3>
          <p className="text-white/60">Choose a time below to book your consultation.</p>
        </div>
        <AppointmentBooking leadId={lead.leadId} clientId={lead.clientId} prospectId={lead.prospectId} name={lead.name} email={lead.email} />
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:border-[#71A7F5]/60 focus:outline-none focus:ring-2 focus:ring-[#71A7F5]/20 transition-all";

  return (
    <div className="relative rounded-[1.75rem] bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-8 lg:p-10 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#6762AF]/60 to-transparent" />

      {/* Tab toggle */}
      <div className="relative flex gap-1.5 mb-8 p-1 rounded-full bg-white/5 border border-white/10 w-fit">
        <button
          onClick={() => setInquiryType("patient")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            inquiryType === "patient"
              ? "bg-white text-[#1A1F30] shadow-lg"
              : "text-white/50 hover:text-white"
          }`}
        >
          I&apos;m a Patient
        </button>
        <button
          onClick={() => setInquiryType("business")}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            inquiryType === "business"
              ? "bg-white text-[#1A1F30] shadow-lg"
              : "text-white/50 hover:text-white"
          }`}
        >
          I&apos;m a Provider
        </button>
      </div>

      {formError && <p className="text-sm text-red-400 mb-4">{formError}</p>}

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">First Name</label>
            <input id="firstName" name="firstName" type="text" className={inputCls} placeholder="John" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Last Name</label>
            <input id="lastName" name="lastName" type="text" className={inputCls} placeholder="Doe" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Email</label>
          <input id="email" name="email" type="email" className={inputCls} placeholder="john@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Phone</label>
          <input id="phone" name="phone" type="tel" className={inputCls} placeholder="(555) 123-4567" />
        </div>
        {inquiryType === "business" && (
          <div>
            <label htmlFor="company" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Practice / Company</label>
            <input id="company" name="company" type="text" className={inputCls} placeholder="Your practice name" />
          </div>
        )}
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">
            {inquiryType === "patient" ? "Tell us about your condition" : "Tell us about your practice"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputCls} resize-none`}
            placeholder={inquiryType === "patient" ? "Describe your symptoms..." : "Tell us about your practice..."}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="group flex h-14 items-center justify-center gap-2 rounded-full bg-white text-[#1A1F30] text-sm font-semibold transition-all duration-300 hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : inquiryType === "patient" ? "Request Consultation" : "Submit Partnership Inquiry"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <p className="text-[11px] text-white/30 text-center leading-relaxed">
          By submitting this form you consent to be contacted by SMS and email. Reply STOP to opt out.
        </p>
      </form>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="rounded-[1.75rem] bg-white/[0.04] backdrop-blur-xl border border-white/10 p-7">
      <h3 className="lux-display text-2xl text-white mb-6">
        Contact <span className="text-[#6762AF] font-semibold">information</span>
      </h3>
      <div className="flex flex-col gap-5">
        <InfoRow
          icon={<Phone className="h-4 w-4 text-[#71A7F5]" />}
          label="Phone"
          value="612-453-3182"
          href="tel:+16124533182"
        />
        <InfoRow
          icon={<Mail className="h-4 w-4 text-[#71A7F5]" />}
          label="Email"
          value="info@regenerativerevival.com"
          href="mailto:info@regenerativerevival.com"
        />
        <InfoRow
          icon={<MapPin className="h-4 w-4 text-[#71A7F5]" />}
          label="Service Area"
          value="50 States · Nationwide"
        />
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <a href={href} className="block hover:text-white transition-colors">
        {children}
      </a>
    ) : (
      <div>{children}</div>
    );
  return (
    <Wrapper>
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 shrink-0">{icon}</div>
        <div>
          <p className="text-[11px] text-white/40 uppercase tracking-wider mb-0.5">{label}</p>
          <p className="text-sm text-white/85 font-medium">{value}</p>
        </div>
      </div>
    </Wrapper>
  );
}

function QuickResponse() {
  return (
    <div className="relative rounded-[1.75rem] bg-gradient-to-br from-[#6762AF] to-[#583563] p-7 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      <div className="relative">
        <div className="h-12 w-12 rounded-2xl bg-white/15 flex items-center justify-center mb-4 border border-white/20">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <h3 className="lux-display text-xl text-white mb-2">Quick response</h3>
        <p className="text-sm text-white/80 leading-relaxed">We typically respond within 24 hours. For urgent inquiries, call us directly.</p>
      </div>
    </div>
  );
}

function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, label: "AATB Accredited" },
    { icon: Award, label: "FDA Compliant" },
    { icon: Lock, label: "HIPAA Secure" },
    { icon: Award, label: "Board Certified" },
  ];
  return (
    <div className="rounded-[1.75rem] bg-white/[0.04] backdrop-blur-xl border border-white/10 p-7">
      <h3 className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.18em] mb-5">Trusted By</h3>
      <div className="grid grid-cols-2 gap-2.5">
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 py-3 px-3"
          >
            <b.icon className="h-3.5 w-3.5 text-[#71A7F5] shrink-0" />
            <span className="text-[11px] font-medium text-white/70">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
