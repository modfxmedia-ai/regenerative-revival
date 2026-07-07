"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
                onClick={onProceed}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Continue <ArrowRight className="h-4 w-4" />
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
      </section>
    </main>
  );
}
