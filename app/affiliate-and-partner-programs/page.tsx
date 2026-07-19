import {
  ArrowUpRight,
  Share2,
  Building2,
  Stethoscope,
  Users,
  Syringe,
  FileSignature,
  DollarSign,
  PenLine,
  Wallet,
  AlertTriangle,
} from "lucide-react";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Affiliate and Partner Programs",
  description:
    "Regenerative Revival partner programs - the simple version. Find your partner type and open the right agreement form.",
  path: "/affiliate-and-partner-programs",
  noIndex: true,
});

const PDF_BASE =
  "https://65iosdxq0lyc5cm9.public.blob.vercel-storage.com/affiliate/";

const partners = [
  {
    icon: Share2,
    color: "#5B56A6",
    tint: "#ECEBF8",
    title: "Social Affiliates",
    who: "Influencers and creators who post about us online.",
    earn: "A cut when someone they send becomes a patient.",
    pdf: "RR_Affiliate_Agreement_Combined.pdf",
  },
  {
    icon: Building2,
    color: "#2F5390",
    tint: "#E5EDF9",
    title: "Clinics & Gyms",
    who: "A clinic or gym that sends us their people.",
    earn: "A referral fee on each sale.",
    pdf: "RR_Referral_Agreement_Facility.pdf",
  },
  {
    icon: Stethoscope,
    color: "#1F7D63",
    tint: "#E1F2EC",
    title: "Doctors & Providers",
    who: "A licensed provider, like a chiropractor, who refers patients.",
    earn: "A set fee for each patient they refer.",
    note: "Check with legal first",
    pdf: "RR_Referral_Agreement_Provider.pdf",
  },
  {
    icon: Users,
    color: "#AC761F",
    tint: "#F8EEDA",
    title: "Our Reps (Reggie & Jared)",
    who: "Our own team who find and manage partner deals.",
    earn: "An extra cut, called an override, on the deals they run.",
    pdf: "RR_BizDev_Rep_Agreement.pdf",
  },
  {
    icon: Syringe,
    color: "#8E3F7E",
    tint: "#F5E6F1",
    title: "Peptide Reps",
    who: "People who share our peptide program using their own code.",
    earn: "Money every month while their client stays signed up.",
    pdf: "RR_Affiliate_Agreement_Peptide.pdf",
  },
];

const steps = [
  {
    icon: FileSignature,
    num: "1",
    title: "Pick the form",
    desc: "Match the color above to the partner.",
  },
  {
    icon: DollarSign,
    num: "2",
    title: "Add the pay rate",
    desc: "It goes on the last page (Exhibit A).",
  },
  {
    icon: PenLine,
    num: "3",
    title: "Sign and save it",
    desc: "Get a signed copy and a W-9.",
  },
  {
    icon: Wallet,
    num: "4",
    title: "Set up and pay",
    desc: "Make their tracking link, pay after the sale is final.",
  },
];

const reminders = [
  'Never say "heal" or "cure."',
  "Never promise results.",
  'Always say "not everyone is a fit."',
  "Send all medical questions to our team.",
];

export default function AffiliatePartnerProgramsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Affiliate and Partner Programs",
          description:
            "Regenerative Revival partner programs - the simple version.",
          url: "/affiliate-and-partner-programs",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          {
            name: "Affiliate and Partner Programs",
            url: "https://regenerativerevival.com/affiliate-and-partner-programs",
          },
        ])}
      />

      {/* ── Hero ── */}
      <section className="bg-[#021E3C] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Regenerative Revival · Internal Use
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-poppins)] text-[2.5rem] font-normal leading-[1.04] tracking-[-0.02em] text-white sm:text-5xl">
            Our Partner Programs,{" "}
            <span className="font-semibold text-[#8B86D4]">
              the simple version
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/70">
            We work with people who help bring us new patients. Each kind of
            partner has its own short agreement. Find the partner below, then tap
            the colored button to open the right form. Each color is one kind of
            partner - the color matches its button.
          </p>
        </div>
      </section>

      {/* ── Partner types ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl border-2 bg-white p-7 transition-all hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.15)]"
                style={{ borderColor: p.color }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: p.tint }}
                >
                  <p.icon className="h-5 w-5" style={{ color: p.color }} />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-[#1A1F30]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#4A4F66]">
                  {p.who}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-[#4A4F66]">
                  <span className="font-semibold text-[#1A1F30]">
                    They earn:
                  </span>{" "}
                  {p.earn}
                </p>
                {p.note && (
                  <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#E4572E]">
                    <AlertTriangle className="h-3.5 w-3.5" /> {p.note}
                  </p>
                )}
                <a
                  href={`${PDF_BASE}${p.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[14px] font-semibold text-white transition-all"
                  style={{ backgroundColor: p.color }}
                >
                  Open the form
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            ))}
          </div>

          {/* Need more detail */}
          <div className="mt-14 rounded-2xl border border-[#EDE8F7] bg-[#F7F5FC] p-8">
            <h2 className="text-[18px] font-semibold text-[#1A1F30]">
              Need more detail?
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`${PDF_BASE}RR_Partnership_Affiliate_Master_Summary.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#6762AF]/30 bg-white px-5 py-2.5 text-[14px] font-medium text-[#6762AF] hover:bg-[#F1ECF8]"
              >
                The Full Playbook (all the details)
              </a>
              <a
                href={`${PDF_BASE}RR_Affiliate_Partner_Onboarding_SOP.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#6762AF]/30 bg-white px-5 py-2.5 text-[14px] font-medium text-[#6762AF] hover:bg-[#F1ECF8]"
              >
                Setup Steps (how to set up a partner)
              </a>
              <a
                href={`${PDF_BASE}RR_Affiliate_Agreement_StemCell.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#6762AF]/30 bg-white px-5 py-2.5 text-[14px] font-medium text-[#6762AF] hover:bg-[#F1ECF8]"
              >
                Affiliate form: stem cells only
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── How a deal works ── */}
      <section className="bg-[#F7F5FC] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
            How a deal works
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-[#EDE8F7] bg-white p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6762AF] text-[14px] font-semibold text-white">
                    {s.num}
                  </span>
                  <s.icon className="h-5 w-5 text-[#6762AF]" />
                </div>
                <h3 className="mt-4 text-[16px] font-semibold text-[#1A1F30]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#4A4F66]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Always remember ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-[2rem] border-2 border-[#E4572E]/30 bg-[#FDEDE8] p-8 lg:p-10">
            <h2 className="flex items-center gap-3 font-[family-name:var(--font-poppins)] text-[1.75rem] font-semibold text-[#1A1F30]">
              <AlertTriangle className="h-6 w-6 text-[#E4572E]" /> Always
              remember
            </h2>
            <ul className="mt-6 space-y-3">
              {reminders.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-[15px] text-[#1A1F30]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E4572E]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-center text-[13px] text-[#7A7F95]">
            Regenerative Revival, internal use. Questions? Ask Lydia.
          </p>
        </div>
      </section>
    </>
  );
}
