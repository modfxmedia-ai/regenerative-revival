"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/app/lib/submit-lead";

interface LpLeadFormProps {
  /** Lead source tag surfaced in the team email / CRM. */
  source: string;
  /** Optional subject line appended to the lead note. */
  subject?: string;
  /** CTA button label. */
  buttonText?: string;
  /** Show a free-text message textarea. */
  showMessage?: boolean;
  /** Message field placeholder. */
  messagePlaceholder?: string;
  /** Tailwind background class for the submit button + accents. */
  accentClass?: string;
  /** Tailwind text color used on the button label. */
  accentTextClass?: string;
  /** Success headline. */
  successTitle?: string;
  /** Success body copy. */
  successMessage?: string;
  /** Consent / disclaimer line under the button. */
  consent?: string;
  /** Optional labeled dropdown; its value is prepended to the lead message. */
  selectField?: {
    label: string;
    options: string[];
    defaultValue?: string;
  };
}

export default function LpLeadForm({
  source,
  subject,
  buttonText = "Request My Free Consultation",
  showMessage = false,
  messagePlaceholder = "Tell us a bit about what you're dealing with (optional)",
  accentClass = "bg-[#6762AF] hover:bg-[#565099]",
  accentTextClass = "text-white",
  successTitle = "You're all set!",
  successMessage = "We've received your request. A member of our team will reach out within 24 hours.",
  consent = "By submitting, you consent to be contacted by phone, SMS, or email. Message & data rates may apply. Reply STOP to opt out.",
  selectField,
}: LpLeadFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = ((data.get("firstName") as string) || "").trim();
    const lastName = ((data.get("lastName") as string) || "").trim();
    const email = ((data.get("email") as string) || "").trim();
    const phone = ((data.get("phone") as string) || "").trim();
    let message = ((data.get("message") as string) || "").trim();
    if (selectField) {
      const selectValue = ((data.get("lpSelect") as string) || "").trim();
      if (selectValue) {
        message = `${selectField.label}: ${selectValue}${message ? `\n${message}` : ""}`;
      }
    }

    const newErrors: Record<string, string> = {};
    if (!firstName) newErrors.firstName = "First name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email";
    if (!phone) newErrors.phone = "Phone is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    const result = await submitLead({
      firstName,
      lastName,
      email,
      phone,
      message: message || undefined,
      subject,
      source,
    });
    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      form.reset();
    } else {
      setErrors({ form: result.error || "Something went wrong. Please try again." });
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-[0_8px_40px_-12px_rgba(88,53,99,0.18)] border border-[#F1ECF8]">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F1ECF8]">
          <CheckCircle2 className="h-7 w-7 text-[#6762AF]" />
        </div>
        <h3 className="text-xl font-semibold text-[#1A1F30]">{successTitle}</h3>
        <p className="mt-2 text-[#4A4F66]">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            name="firstName"
            placeholder="First name*"
            className="w-full rounded-xl border border-[#E5E0F0] bg-white px-4 py-3 text-[#1A1F30] placeholder:text-[#9A9FB5] focus:border-[#6762AF] focus:outline-none focus:ring-2 focus:ring-[#6762AF]/20"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
          )}
        </div>
        <div>
          <input
            name="lastName"
            placeholder="Last name"
            className="w-full rounded-xl border border-[#E5E0F0] bg-white px-4 py-3 text-[#1A1F30] placeholder:text-[#9A9FB5] focus:border-[#6762AF] focus:outline-none focus:ring-2 focus:ring-[#6762AF]/20"
          />
        </div>
      </div>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Email address*"
          className="w-full rounded-xl border border-[#E5E0F0] bg-white px-4 py-3 text-[#1A1F30] placeholder:text-[#9A9FB5] focus:border-[#6762AF] focus:outline-none focus:ring-2 focus:ring-[#6762AF]/20"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <input
          name="phone"
          type="tel"
          placeholder="Phone number*"
          className="w-full rounded-xl border border-[#E5E0F0] bg-white px-4 py-3 text-[#1A1F30] placeholder:text-[#9A9FB5] focus:border-[#6762AF] focus:outline-none focus:ring-2 focus:ring-[#6762AF]/20"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>
      {selectField && (
        <div>
          <label className="mb-1.5 block text-[13px] font-medium text-[#4A4F66]">
            {selectField.label}
          </label>
          <select
            name="lpSelect"
            defaultValue={selectField.defaultValue ?? selectField.options[0]}
            className="w-full rounded-xl border border-[#E5E0F0] bg-white px-4 py-3 text-[#1A1F30] focus:border-[#6762AF] focus:outline-none focus:ring-2 focus:ring-[#6762AF]/20"
          >
            {selectField.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}
      {showMessage && (
        <textarea
          name="message"
          rows={3}
          placeholder={messagePlaceholder}
          className="w-full rounded-xl border border-[#E5E0F0] bg-white px-4 py-3 text-[#1A1F30] placeholder:text-[#9A9FB5] focus:border-[#6762AF] focus:outline-none focus:ring-2 focus:ring-[#6762AF]/20"
        />
      )}
      {errors.form && <p className="text-sm text-red-600">{errors.form}</p>}
      <button
        type="submit"
        disabled={submitting}
        className={`group inline-flex h-13 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all disabled:opacity-60 ${accentClass} ${accentTextClass}`}
      >
        {submitting ? "Sending..." : buttonText}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
      <p className="text-[11px] leading-relaxed text-[#7A7F95]">{consent}</p>
    </form>
  );
}
