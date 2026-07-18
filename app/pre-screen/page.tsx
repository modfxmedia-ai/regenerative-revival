import {
  CheckCircle2,
  Phone,
  ShieldCheck,
  Lock,
  Clock,
  Mail,
  Building2,
  Globe,
} from "lucide-react";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Pre-Screening Survey — See If You're a Candidate",
  description:
    "Complete a short, confidential pre-screening survey and our team will follow up to see if regenerative medicine may be right for you.",
  path: "/pre-screen",
  noIndex: true,
});

// Tyria Core pre-screening form for self-generated (non-seminar) prospects.
// The base form URL is below. Once the embed token is generated, append it as:
//   &eventContextToken=<token>&embed=1
// Example (see /dell-webb-rsvp for the pattern).
const PRE_SCREEN_FORM_SRC =
  "https://www.tyriacore.app/forms/frm_6aaacad8-5889-426c-96e4-f58b91cc277e?workspaceId=ws_962d7611-e9b4-4990-9ddc-89bf7c899735&embed=1";

const PHONE = "612-453-3182";

const reassurances = [
  {
    icon: Clock,
    title: "Takes about 2 minutes",
    desc: "A few quick questions about your health goals and history.",
  },
  {
    icon: Lock,
    title: "Private & confidential",
    desc: "Your information is only used to determine candidacy and follow up.",
  },
  {
    icon: ShieldCheck,
    title: "Physician-guided",
    desc: "Every candidate is reviewed by our licensed medical team.",
  },
];

const conditions = [
  "Knee, Hip & Shoulder Pain",
  "Arthritis & Chronic Conditions",
  "Sports & Cartilage Injuries",
  "Back & Neck Pain",
  "Neuropathy",
  "Autoimmune Conditions",
];

export default function PreScreenPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Pre-Screening Survey — See If You're a Candidate",
          description:
            "Complete a short, confidential pre-screening survey and our team will follow up to see if regenerative medicine may be right for you.",
          url: "/pre-screen",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          {
            name: "Pre-Screening Survey",
            url: "https://regenerativerevival.com/pre-screen",
          },
        ])}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#021E3C]">
        <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#6762AF]/25 blur-[150px]" />
        <div className="absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-[#345691]/25 blur-[130px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-8 lg:pt-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
              Confidential Pre-Screening
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] text-[2.5rem] font-normal leading-[1.04] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.75rem]">
              See if you&apos;re a candidate for{" "}
              <span className="font-semibold text-[#8B86D4]">
                regenerative medicine
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65">
              Answer a few quick questions below and our care team will review
              your responses, then reach out to walk you through your options.
              No obligation — just a clear next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white/70">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#8B86D4]" /> Physician-guided
              </span>
              <span className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#8B86D4]" /> Confidential
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8B86D4]" /> No obligation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Survey + form ── */}
      <section id="survey" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
                Start Here
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
                Complete your pre-screening survey
              </h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-[#4A4F66]">
                This short survey helps our team understand your goals and
                history so we can determine whether you may be a candidate and
                connect you with the right specialist.
              </p>

              <div className="mt-8 space-y-4">
                {reassurances.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-2xl border border-[#EDE8F7] bg-[#F7F5FC] p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#6762AF]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#1A1F30]">
                        {title}
                      </p>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#4A4F66]">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#EDE8F7] bg-white p-6">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#345691]">
                  Commonly explored for
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {conditions.map((c) => (
                    <div key={c} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#6762AF]" />
                      <span className="text-[14px] text-[#1A1F30]">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#F7F5FC] p-6 sm:p-8 lg:p-10">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-[#1A1F30]">
                Your pre-screening survey
              </h3>
              <p className="mt-2 text-[14px] text-[#4A4F66]">
                Complete the form and our team will review your responses and
                follow up with next steps.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-[#EDE8F7] bg-white">
                <iframe
                  src={PRE_SCREEN_FORM_SRC}
                  title="Pre-Screening Survey"
                  className="block w-full border-0"
                  style={{ minHeight: 820 }}
                  loading="lazy"
                />
              </div>
              <p className="mt-5 text-center text-[12px] leading-relaxed text-[#7A7F95]">
                Not everyone is a candidate. Eligibility is determined during a
                private consultation with our medical team.
              </p>
              <p className="mt-4 text-center text-[13px] text-[#4A4F66]">
                Prefer to talk to someone? Call us at{" "}
                <a
                  href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
                  className="font-semibold text-[#6762AF]"
                >
                  {PHONE}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact + disclaimer ── */}
      <section className="bg-[#021E3C] py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <Building2 className="h-4 w-4" /> Office
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-white/75">
                10000 Hwy 55, STE 200
                <br />
                Plymouth, MN
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <Mail className="h-4 w-4" /> Email
              </div>
              <a
                href="mailto:info@regenerativerevival.com"
                className="mt-3 block text-[14px] text-white/75 hover:text-white"
              >
                info@regenerativerevival.com
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <Phone className="h-4 w-4" /> Phone
              </div>
              <a
                href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
                className="mt-3 block text-[14px] text-white/75 hover:text-white"
              >
                {PHONE}
              </a>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-2 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.2em] text-white/40">
            <Globe className="h-4 w-4" /> regenerativerevival.com
          </div>
        </div>
      </section>
    </>
  );
}
