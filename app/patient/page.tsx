import {
  Play,
  ArrowRight,
  Stethoscope,
  Leaf,
  Clock,
  Target,
  Pill,
  Activity,
  Shield,
  Zap,
  UserCheck,
  LineChart,
} from "lucide-react";
import { ImageWithFallback } from "./_components/ImageWithFallback";
import { ASSETS, BOOKING_URL } from "./config";

export default function PatientHomePage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-white sm:min-h-[700px]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={ASSETS.hero}
            alt="Active patient"
            className="h-full w-full scale-x-[-1] object-cover object-[30%_center] lg:object-left"
          />
        </div>

        {/* Gradient Overlay for White Blend */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/95 via-white/80 to-white/40 lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-transparent"></div>

        {/* Content */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-32 pt-32 lg:px-8 lg:pb-40 lg:pt-40">
          <div className="max-w-2xl">
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 lg:mb-8">
              Advanced Regenerative Care
            </div>
            <h1 className="mb-8 text-5xl font-semibold leading-[1.05] tracking-tighter text-slate-900 sm:text-6xl lg:text-7xl">
              Restoring mobility. <br className="hidden sm:block" />
              Redefining recovery.
            </h1>
            <p className="mb-10 max-w-lg text-xl font-medium leading-relaxed text-slate-600 lg:mb-12">
              Harness the power of next-generation cellular therapies to repair
              tissue, reduce inflammation, and return to the active life you
              love.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={BOOKING_URL}
                className="inline-flex h-auto w-full items-center justify-center rounded-xl bg-blue-600 px-10 py-7 text-base font-medium text-white shadow-[0_8px_30px_rgb(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] sm:w-auto"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK BANNER */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Part of the Integrated Care Network
          </p>
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
            <ImageWithFallback
              src={ASSETS.aroraLogo}
              className="h-7 object-contain opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              alt="Arora Health Group"
            />
            <span className="hidden text-2xl font-light text-slate-200 md:block">
              |
            </span>
            <ImageWithFallback
              src={ASSETS.rrLogo}
              className="h-12 object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              alt="Regenerative Revival"
            />
          </div>
        </div>
      </section>

      {/* VIDEO FEATURE */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div className="order-2 aspect-square overflow-hidden rounded-3xl lg:order-1 lg:aspect-[4/3]">
              <video
                className="h-full w-full scale-[1.02] object-cover"
                controls
                preload="metadata"
              >
                <source src={ASSETS.brettFavreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="order-1 max-w-lg lg:order-2">
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-blue-600">
                <Play className="ml-1 h-5 w-5" />
              </div>
              <h2 className="mb-8 text-4xl font-semibold leading-tight tracking-tighter text-slate-900 lg:text-5xl">
                Brett Favre&apos;s Recovery Story
              </h2>
              <p className="mb-10 text-lg font-medium leading-relaxed text-slate-500">
                Hall of Fame quarterback Brett Favre shares his experience with
                regenerative medicine, explaining how it helps him manage pain
                and maintain peak performance long after his career on the
                field.
              </p>
              <a
                href={BOOKING_URL}
                className="group inline-flex items-center gap-3 font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Watch full interview
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE SCIENCE */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 flex flex-col gap-16 lg:flex-row lg:gap-24">
            <div className="lg:w-1/3">
              <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                The Science
              </div>
              <h2 className="text-4xl font-semibold leading-tight tracking-tighter text-slate-900 lg:text-5xl">
                Cellular <br /> Regeneration
              </h2>
            </div>
            <div className="lg:w-2/3 lg:pt-8">
              <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-500">
                Stem cells and exosomes are powerful biological tools that
                support your body&apos;s natural healing processes. These
                therapies are utilized to address chronic pain, inflammation,
                and tissue degeneration.
              </p>
            </div>
          </div>

          <div className="grid gap-16 md:grid-cols-2 lg:gap-20">
            <div className="group flex flex-col">
              <div className="mb-10 aspect-[4/3] overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src={ASSETS.cells1}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Stem cells"
                />
              </div>
              <h3 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900">
                Stem Cells (Wharton&apos;s Jelly)
              </h3>
              <p className="text-lg leading-relaxed text-slate-500">
                Rich in mesenchymal stem cells (MSCs), growth factors, and
                hyaluronic acid. They provide structural support and the
                essential building blocks for tissue repair in joints and soft
                tissue.
              </p>
            </div>

            <div className="group flex flex-col">
              <div className="mb-10 aspect-[4/3] overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src={ASSETS.cells2}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Exosomes"
                />
              </div>
              <h3 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900">
                Exosomes (50 Billion)
              </h3>
              <p className="text-lg leading-relaxed text-slate-500">
                Nano-sized cellular messengers that communicate with your
                body&apos;s cells to support healing, dramatically reduce
                inflammation, and promote regeneration systemically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PEPTIDE BANNER */}
      <section className="bg-blue-600 px-6 py-24">
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <div className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
            Optimize. Recover. Thrive.
          </div>
          <h2 className="mb-8 text-4xl font-semibold leading-tight tracking-tighter lg:text-6xl">
            Medical Grade Peptide Programs
          </h2>
          <p className="mb-12 text-xl font-medium leading-relaxed text-blue-100/90">
            Coming Soon.
          </p>
          <span className="inline-flex items-center gap-3 rounded-xl bg-white/15 px-10 py-5 font-semibold text-white ring-1 ring-inset ring-white/30">
            Coming Soon
          </span>
        </div>
      </section>

      {/* 10 REASONS */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-24 max-w-3xl text-center">
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Why Cellular Therapy
            </div>
            <h2 className="mb-8 text-4xl font-semibold tracking-tighter text-slate-900 lg:text-5xl">
              10 Reasons to Choose Regenerative Medicine
            </h2>
            <p className="text-xl font-medium leading-relaxed text-slate-500">
              Patients choose our therapies for a variety of compelling reasons,
              from avoiding invasive surgeries to achieving a higher quality of
              life without daily pain.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Avoid Surgery", desc: "A minimally invasive alternative to joint replacement.", icon: Stethoscope },
              { title: "Natural Healing", desc: "Harnesses your body's own repair mechanisms.", icon: Leaf },
              { title: "Zero Downtime", desc: "Outpatient procedures with immediate return home.", icon: Clock },
              { title: "Targeted Relief", desc: "Direct application to the source of your pain.", icon: Target },
              { title: "Reduce Meds", desc: "Decrease reliance on chronic pain medication.", icon: Pill },
              { title: "Systemic Health", desc: "Lowers full-body inflammation and oxidative stress.", icon: Activity },
              { title: "High Safety", desc: "FDA-compliant labs and highly screened materials.", icon: Shield },
              { title: "Quick Procedure", desc: "Treatments typically take less than an hour.", icon: Zap },
              { title: "Personalized", desc: "Protocols tailored to your specific condition.", icon: UserCheck },
              { title: "Lasting Results", desc: "Addresses root causes rather than masking symptoms.", icon: LineChart },
            ].map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="group">
                  <div className="mb-6 text-blue-600 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-slate-900">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                Patient Outcomes
              </div>
              <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-slate-900 lg:text-5xl">
                Conditions We Support
              </h2>
              <p className="text-xl font-medium leading-relaxed text-slate-500">
                Regenerative medicine offers versatile, non-surgical support for
                a wide range of orthopedic and systemic conditions.
              </p>
            </div>
            <a
              href={BOOKING_URL}
              className="hidden h-auto items-center justify-center rounded-xl border border-slate-200 bg-transparent px-6 py-6 text-base font-medium text-slate-700 transition-all hover:bg-slate-50 md:inline-flex"
            >
              View All Conditions
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Osteoarthritis", desc: "Support for knees, hips, shoulders, and hands suffering from cartilage degeneration and joint stiffness." },
              { title: "Sports Injuries", desc: "Accelerated recovery protocols for tendon tears, ligament damage, and chronic muscle strains." },
              { title: "Back & Neck Pain", desc: "Non-surgical, targeted approaches to disc degeneration, sciatica, and spinal inflammation." },
              { title: "Autoimmune Conditions", desc: "Systemic exosome therapy to help modulate the immune response and reduce flare-ups." },
              { title: "Neuropathy", desc: "Addressing chronic nerve pain and damage at the cellular level for improved sensation." },
              { title: "Systemic Wellness", desc: "Proactive anti-aging support, brain fog reduction, and overall vitality enhancement." },
            ].map((cond, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-slate-200 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {cond.title}
                </h3>
                <p className="leading-relaxed text-slate-500">{cond.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT APPROACHES */}
      <section className="border-t border-slate-100 bg-slate-50 px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">
              Treatment Approaches
            </h2>
            <p className="text-lg leading-relaxed text-slate-500">
              We offer targeted and systemic therapies based on your specific
              wellness goals and medical needs. Both approaches are safely
              administered in our clinic.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* BioFusion */}
            <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-slate-300 md:flex-row">
              <div className="h-48 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 md:w-48">
                <ImageWithFallback
                  src={ASSETS.cells3}
                  className="h-full w-full object-cover"
                  alt="Joint Injection"
                />
              </div>
              <div className="flex-1 py-2">
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                  Targeted Relief
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  BioFusion Joint Injection
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-500">
                  A dual-modality regenerative formula combining
                  high-concentration MSCs with exosomes for targeted joint and
                  soft tissue repair.
                </p>
                <div className="text-sm font-medium text-slate-700">
                  Best for:{" "}
                  <span className="font-normal text-slate-500">
                    Osteoarthritis, knee/shoulder pain, athletic injuries.
                  </span>
                </div>
              </div>
            </div>

            {/* IV Infusion */}
            <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-slate-300 md:flex-row">
              <div className="h-48 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 md:w-48">
                <ImageWithFallback
                  src={ASSETS.cells4}
                  className="h-full w-full object-cover"
                  alt="IV Infusion"
                />
              </div>
              <div className="flex-1 py-2">
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Systemic Support
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  Exosome IV Infusion
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-500">
                  Full-body delivery of 50 billion nano-sized exosomes to
                  systematically reduce inflammation and support overall
                  cellular health.
                </p>
                <div className="text-sm font-medium text-slate-700">
                  Best for:{" "}
                  <span className="font-normal text-slate-500">
                    Systemic inflammation, autoimmune support, anti-aging.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white lg:text-4xl">
            Ready to explore your options?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-slate-400">
            Schedule a brief consultation with our medical team to determine if
            regenerative therapies are right for you.
          </p>
          <a
            href={BOOKING_URL}
            className="inline-flex h-auto items-center justify-center rounded-xl bg-white px-8 py-6 text-base font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-50"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
