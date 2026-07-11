"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, X, Send, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/app/lib/submit-lead";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

type Goal =
  | "regen"           // joint pain, injury recovery, regenerative therapy
  | "weight"          // GLP-1 weight loss
  | "hormones"        // TRT / HRT
  | "longevity"       // NAD+, peptides
  | "unsure";

type Delivery =
  | "in_home"         // wants concierge in-home (forces regen path)
  | "telehealth"      // happy with telehealth
  | "either";

interface RouteResult {
  path: "regen" | "telehealth";
  destination: string;       // URL we send the user to
  message: string;
}

function routeAnswer(goal: Goal, delivery: Delivery): RouteResult {
  // Regen path: any concierge / in-home desire OR explicit regen goal
  if (goal === "regen" || delivery === "in_home") {
    return {
      path: "regen",
      destination: "/contact?path=regen",
      message:
        "Based on your answers, the best fit is our Regenerative Therapy concierge consult.",
    };
  }

  // Telehealth path mapping by goal
  const telehealthDest: Record<Goal, string> = {
    regen: "/contact?path=regen",
    weight: "/hormones-peptides/sublingual-semaglutide",
    hormones: "/hormones",
    longevity: "/nad",
    unsure: "/peptides",
  };

  return {
    path: "telehealth",
    destination: telehealthDest[goal],
    message:
      "Based on your answers, we'll start you in our telehealth catalog so a licensed clinician can review you online.",
  };
}

export default function ConsultRouter() {
  const router = useRouter();
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [delivery, setDelivery] = useState<Delivery | null>(null);
  const [result, setResult] = useState<RouteResult | null>(null);
  const [showModal, setShowModal] = useState(false);

  const onSelectGoal = (g: Goal) => {
    setGoal(g);
    setStep(1);
  };

  const onSelectDelivery = (d: Delivery) => {
    setDelivery(d);
    if (!goal) return;
    const r = routeAnswer(goal, d);
    setResult(r);
    setStep(2);
    setShowModal(true);

    // Track the quiz decision as a Google Analytics event — real, anonymous
    // path analytics with no lead/CRM/email noise. Guarded so it no-ops if GA
    // hasn't loaded (ad blockers, SSR, etc.).
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "quiz_router_decision", {
        goal,
        delivery: d,
        path: r.path,
        destination: r.destination,
      });
    }
  };

  const onProceed = () => {
    if (!result) return;
    router.push(result.destination);
  };

  const reset = () => {
    setStep(0);
    setGoal(null);
    setDelivery(null);
    setResult(null);
    setShowModal(false);
  };

  return (
    <main className="min-h-screen bg-secondary text-white">
      <section className="mx-auto max-w-3xl px-6 lg:px-8 pt-32 pb-20">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  step >= i ? "bg-primary-light" : "bg-white/15"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-xs uppercase tracking-widest text-white/50">
            Step {Math.min(step + 1, 3)} of 3
          </p>
        </div>

        {step === 0 && (
          <div>
            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
              What brings you here today?
            </h1>
            <p className="mt-4 text-white/70">
              We&apos;ll point you to the right starting point in under 2
              minutes.
            </p>

            <div className="mt-10 grid gap-3">
              {(
                [
                  ["regen", "Joint pain, injury, or chronic issue I want regenerative therapy for"],
                  ["weight", "Sustainable weight loss (GLP-1 like Semaglutide / Tirzepatide)"],
                  ["hormones", "Hormone optimization (TRT, HRT, peptides)"],
                  ["longevity", "Energy, recovery, and longevity (NAD+, peptides)"],
                  ["unsure", "I'm not sure yet — help me figure it out"],
                ] as [Goal, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => onSelectGoal(value)}
                  className="text-left flex items-center justify-between px-6 py-5 rounded-lg border border-white/15 bg-white/5 hover:border-primary-light hover:bg-white/10 transition-colors"
                >
                  <span className="text-base">{label}</span>
                  <ArrowRight className="h-4 w-4 text-primary-light" />
                </button>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/services" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                Just want to browse? View all treatments &rarr;
              </Link>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
              How would you like care delivered?
            </h1>
            <p className="mt-4 text-white/70">
              We offer both concierge in-home regenerative care and
              physician-led telehealth.
            </p>

            <div className="mt-10 grid gap-3">
              {(
                [
                  ["in_home", "In-home concierge visit with a clinician"],
                  ["telehealth", "Telehealth — video / phone consults work for me"],
                  ["either", "Either is fine — recommend what's best"],
                ] as [Delivery, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => onSelectDelivery(value)}
                  className="text-left flex items-center justify-between px-6 py-5 rounded-lg border border-white/15 bg-white/5 hover:border-primary-light hover:bg-white/10 transition-colors"
                >
                  <span className="text-base">{label}</span>
                  <ArrowRight className="h-4 w-4 text-primary-light" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && result && (
          <div>
            <p className="text-sm uppercase tracking-widest text-primary-light mb-3">
              Recommended path
            </p>
            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
              {result.path === "regen"
                ? "Regenerative Therapy Consult"
                : "Telehealth Catalog"}
            </h1>
            <p className="mt-6 text-white/80 text-lg">{result.message}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center text-white/70 hover:text-white px-6 py-3 font-medium transition-colors"
              >
                Start over
              </button>
            </div>

            <p className="mt-12 text-xs text-white/40 max-w-md">
              Note: this is a routing tool, not a medical recommendation. A
              licensed clinician will determine the right protocol for you
              during your consult.
            </p>
          </div>
        )}
{/* Capture modal — auto-opens when result is ready */}
        {showModal && result && (
          <ConsultModal
            result={result}
            goal={goal}
            delivery={delivery}
            onClose={() => setShowModal(false)}
            onSuccess={() => router.push(result.destination)}
          />
        )}
      </section>
    </main>
  );
}

// ─── Capture Modal ────────────────────────────────────────────────────────────

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
  if (/^[01]/.test(areaCode) || /^.11$/.test(areaCode)) return "Enter a valid US area code";
  return null;
}

function validateEmail(value: string): string | null {
  if (!value.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Enter a valid email address";
  return null;
}

interface ConsultModalProps {
  result: RouteResult;
  goal: Goal | null;
  delivery: Delivery | null;
  onClose: () => void;
  onSuccess: () => void;
}

function ConsultModal({ result, goal, delivery, onClose, onSuccess }: ConsultModalProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputClass = "w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-primary-light/60 focus:outline-none focus:ring-2 focus:ring-primary-light/20 transition-all";
  const errorInputClass = "border-red-400/60 focus:border-red-400 focus:ring-red-400/20";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    const firstName = (data.get("firstName") as string) || "";
    const lastName = (data.get("lastName") as string) || "";
    const fnErr = validateName(firstName, "First name");
    if (fnErr) newErrors.firstName = fnErr;
    const lnErr = validateName(lastName, "Last name");
    if (lnErr) newErrors.lastName = lnErr;

    const phoneErr = validatePhone((data.get("phone") as string) || "");
    if (phoneErr) newErrors.phone = phoneErr;
    const emailErr = validateEmail((data.get("email") as string) || "");
    if (emailErr) newErrors.email = emailErr;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);

    const contextNote = `Quiz path: ${result.path} | Goal: ${goal ?? "unknown"} | Delivery: ${delivery ?? "unknown"} | Routed to: ${result.destination}`;
    const userMessage = ((data.get("message") as string) || "").trim();

    const submitResult = await submitLead({
      firstName,
      lastName,
      email: (data.get("email") as string).trim(),
      phone: (data.get("phone") as string).trim(),
      message: userMessage ? `${userMessage}\n\n[${contextNote}]` : `[${contextNote}]`,
      inquiryType: result.path === "regen" ? "regenerative-therapy" : "telehealth",
      source: "consult-router",
    });

    setSubmitting(false);

    if (submitResult.success) {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "quiz_lead_captured", {
          goal,
          delivery,
          path: result.path,
          destination: result.destination,
        });
      }
      setSubmitted(true);
      setTimeout(onSuccess, 2000);
    } else {
      setErrors({ form: submitResult.error || "Something went wrong. Please try again." });
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={submitted ? undefined : onClose}
      />

      {/* Card */}
      <div className="relative w-full max-w-lg bg-secondary border border-white/10 rounded-2xl shadow-2xl p-8 sm:p-10 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        {!submitted && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-white" />
          </button>
        )}

        {submitted ? (
          <div className="text-center py-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 border border-primary-light/30 mx-auto mb-5">
              <CheckCircle2 className="h-8 w-8 text-primary-light" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">You&apos;re all set!</h3>
            <p className="text-white/60">We&apos;ve got your info. Taking you to your next step now&hellip;</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-primary-light mb-1">One last step</p>
              <h2 id="consult-modal-title" className="text-2xl font-semibold text-white">
                Where should we send your consult details?
              </h2>
              <p className="mt-2 text-sm text-white/50">
                A clinician will reach out to confirm your {result.path === "regen" ? "in-home consult" : "telehealth intake"} within one business day.
              </p>
            </div>

            {errors.form && (
              <p className="text-sm text-red-400 mb-4 rounded-lg bg-red-400/10 border border-red-400/20 px-4 py-3">{errors.form}</p>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cr-firstName" className="block text-xs font-medium text-white/70 mb-1.5">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="cr-firstName" name="firstName" type="text" required autoComplete="given-name"
                    placeholder="Jane"
                    className={`${inputClass} ${errors.firstName ? errorInputClass : ""}`}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="cr-lastName" className="block text-xs font-medium text-white/70 mb-1.5">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="cr-lastName" name="lastName" type="text" required autoComplete="family-name"
                    placeholder="Smith"
                    className={`${inputClass} ${errors.lastName ? errorInputClass : ""}`}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="cr-email" className="block text-xs font-medium text-white/70 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="cr-email" name="email" type="email" required autoComplete="email"
                  placeholder="jane@example.com"
                  className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="cr-phone" className="block text-xs font-medium text-white/70 mb-1.5">
                  Phone <span className="text-red-400">*</span>
                </label>
                <input
                  id="cr-phone" name="phone" type="tel" required autoComplete="tel"
                  placeholder="(555) 123-4567"
                  className={`${inputClass} ${errors.phone ? errorInputClass : ""}`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="cr-message" className="block text-xs font-medium text-white/70 mb-1.5">
                  Anything else we should know? <span className="text-white/30">(optional)</span>
                </label>
                <textarea
                  id="cr-message" name="message" rows={3}
                  placeholder="Tell us a bit about your situation, condition, or questions..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-1"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Sending..." : "Send My Info"}
              </button>

              <p className="text-[10px] text-white/30 text-center leading-relaxed">
                By submitting you consent to be contacted by SMS and/or phone by Regenerative Revival and/or Seth Berge Inc. Message &amp; data rates may apply. Reply STOP to opt out.{" "}
                <a href="/privacy-policy" className="text-white/50 hover:text-white/80 underline">Privacy Policy</a>.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
