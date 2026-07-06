"use client";

import { useState } from "react";
import { ArrowUpRight, Shield } from "lucide-react";
import { submitLead } from "@/app/lib/submit-lead";

export default function HeroContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const name = ((data.get("name") as string) || "").trim();
    if (!name) newErrors.name = "Name is required";
    else if (name.split(/\s+/).length < 2) newErrors.name = "Enter your full name";

    const phone = ((data.get("phone") as string) || "").replace(/\D/g, "");
    if (!phone) newErrors.phone = "Phone is required";
    else if (phone.length < 10) newErrors.phone = "Enter a valid phone number";

    const email = ((data.get("email") as string) || "").trim();
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      const nameParts = name.split(/\s+/);
      const result = await submitLead({
        firstName: nameParts[0],
        lastName: nameParts.slice(1).join(" "),
        email,
        phone: (data.get("phone") as string).trim(),
        source: "hero-form",
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

  const inputClass =
    "w-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#71A7F5]/50 focus:outline-none focus:ring-2 focus:ring-[#71A7F5]/20 transition-all";
  const errorClass = "border-red-400/60 focus:border-red-400 focus:ring-red-400/20";

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#71A7F5]/20 border border-[#71A7F5]/30 mx-auto mb-4">
          <ArrowUpRight className="h-6 w-6 text-[#71A7F5]" />
        </div>
        <h3 className="lux-display text-2xl text-white mb-2">
          Thank <span className="text-[#6762AF] font-semibold">you</span>
        </h3>
        <p className="text-sm text-white/50">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6 lg:p-8">
      <h3 className="lux-display text-xl text-white mb-1">
        Free <span className="text-[#6762AF] font-semibold">Consultation</span>
      </h3>
      <p className="text-sm text-white/40 mb-6">Get a personalized care plan</p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {errors.form && <p className="text-xs text-red-400">{errors.form}</p>}
        <div>
          <input name="name" type="text" placeholder="Full Name" className={`${inputClass} ${errors.name ? errorClass : ""}`} aria-label="Full Name" />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <input name="phone" type="tel" placeholder="Phone Number" className={`${inputClass} ${errors.phone ? errorClass : ""}`} aria-label="Phone Number" />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
        </div>
        <div>
          <input name="email" type="email" placeholder="Email Address" className={`${inputClass} ${errors.email ? errorClass : ""}`} aria-label="Email Address" />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-[#1A1F30] transition-all hover:bg-[#F1ECF8] hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Request Consultation"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <div className="flex items-center justify-center gap-2 text-xs text-white/30">
          <Shield className="h-3 w-3" />
          <span>HIPAA Secure · No obligation</span>
        </div>
      </form>
    </div>
  );
}
