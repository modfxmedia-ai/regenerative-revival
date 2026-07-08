import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Phone,
  CalendarDays,
  Clock,
  MapPin,
  Utensils,
  ShieldCheck,
  Mail,
  Building2,
  Globe,
} from "lucide-react";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema } from "../lib/schema";
import RsvpButton, { RSVP_FORM_SRC } from "./RsvpButton";

export const metadata = generatePageMetadata({
  title: "Dell Webb RSVP — Free Regenerative Medicine Dinner Seminar",
  description:
    "Reserve your free seat and complimentary dinner at our educational stem cell therapy seminar. No surgery, no drugs, no long recovery. Seats are limited.",
  path: "/dell-webb-rsvp",
  noIndex: true,
});

const conditions = [
  "Knee, Hip & Shoulder Pain",
  "Arthritis & Chronic Conditions",
  "Sports & Cartilage Injuries",
  "Back & Neck Pain",
  "Neuropathy",
  "Autoimmune Conditions",
];

const PHONE = "(941) 212-0131";

export default function DellWebbRsvpPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Dell Webb RSVP — Free Regenerative Medicine Dinner Seminar",
          description:
            "Reserve your free seat and complimentary dinner at our educational stem cell therapy seminar.",
          url: "/dell-webb-rsvp",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Dell Webb RSVP",
            url: "https://www.regenerativerevival.com/dell-webb-rsvp",
          },
        ])}
      />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image
            src="/lp/dell-webb/seminar.jpeg"
            alt="Regenerative medicine educational dinner seminar"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/85 to-[#021E3C]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C] via-[#021E3C]/50 to-transparent" />
        </div>
        <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#6762AF]/25 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
              Exclusive Educational Event
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] text-[2.5rem] font-normal leading-[1.04] tracking-[-0.02em] text-white sm:text-5xl lg:text-[4rem]">
              Advancements in stem cell therapy{" "}
              <span className="font-semibold text-[#8B86D4]">
                have come a long way
              </span>
            </h1>
            <p className="mt-6 text-lg font-medium text-white/80">
              No Surgery. No Drugs. No Long Recovery.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              Discover how state-of-the-art regenerative medicine may help
              support pain relief, mobility, and quality of life for adults
              right here in North Carolina.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white/70">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#8B86D4]" /> Physician-guided
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8B86D4]" /> Education-first
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8B86D4]" /> No obligation
              </span>
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <RsvpButton
                className="group inline-flex h-13 items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#021E3C] transition-all hover:bg-[#F1ECF8]"
              >
                Reserve my FREE seat &amp; dinner
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </RsvpButton>
              <a
                href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white"
              >
                <Phone className="h-4 w-4" /> Questions? Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Chronic pain stops here ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
                Relieve Chronic Pain
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl lg:text-[3rem]">
                Get back to living!
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-[#4A4F66]">
                <p className="font-medium text-[#1A1F30]">
                  Arthritis. Back pain. Shoulder injuries. Stiff knees.
                </p>
                <p>
                  For years, many have thought their only options were surgery
                  or lifelong medication.
                </p>
                <p className="font-serif text-[1.4rem] font-bold text-[#6762AF] sm:text-[1.75rem]">
                  That ends now.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <RsvpButton
                  className="group inline-flex h-13 items-center gap-2 rounded-full bg-[#6762AF] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#565099]"
                >
                  Don&apos;t miss out — register today
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </RsvpButton>
                <a
                  href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#6762AF]"
                >
                  <Phone className="h-4 w-4" /> {PHONE}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_24px_64px_-12px_rgba(88,53,99,0.2)]">
              <Image
                src="/lp/dell-webb/dinner.webp"
                alt="Complimentary dinner seminar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/25 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Chronic pain stops here (dark) ── */}
      <section className="bg-gradient-to-br from-[#345691] to-[#021E3C] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3rem]">
            Chronic pain stops here
          </h2>
          <p className="mt-6 font-serif text-[1.15rem] font-bold text-[#C5DBF7] sm:text-[1.5rem]">
            Arthritis. Back pain. Shoulder injuries. Stiff knees.
          </p>
          <div className="mt-6 space-y-5 text-[15px] leading-[1.75] text-white/75">
            <p>
              For years, the only way you thought you could access stem cell
              therapy was by spending thousands to travel overseas.
            </p>
            <p className="font-serif text-[1.4rem] font-bold text-[#8B86D4] sm:text-[1.75rem]">
              That ends now.
            </p>
            <p>
              Join us for a complimentary dinner seminar where you&apos;ll learn
              how U.S.-based regenerative therapies are being used by people
              across the country.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why attend ── */}
      <section className="bg-[#F7F5FC] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
              A Complimentary Dinner Seminar
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Why attend this FREE dinner seminar?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A4F66]">
              Discover why so many people across the country are exploring these
              therapies, with more than five years of growing interest. Learn
              how regenerative medicine may support people dealing with:
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 rounded-2xl border border-[#EDE8F7] bg-white p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#6762AF]" />
                <span className="text-[14px] font-medium text-[#1A1F30]">
                  {c}
                </span>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2 text-[15px] font-medium text-[#1A1F30]">
              <Utensils className="h-5 w-5 text-[#6762AF]" /> Enjoy a
              complimentary dinner while getting your questions answered.
            </div>
            <p className="text-[14px] text-[#4A4F66]">
              No pressure, no obligation. This is an educational event.
            </p>
          </div>
        </div>
      </section>

      {/* ── RSVP + form ── */}
      <section id="rsvp" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
                Seats are limited
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
                RSVP today
              </h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-[#4A4F66]">
                Bring your spouse and up to four friends. Discover how
                regenerative medicine may help you get back to a more active,
                comfortable retirement.
              </p>

              <div className="mt-8 space-y-4 rounded-2xl border border-[#EDE8F7] bg-[#F7F5FC] p-7">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#345691]">
                  About this event
                </h3>
                <p className="text-[14px] leading-relaxed text-[#4A4F66]">
                  An educational dinner seminar exploring the latest advances in
                  stem cell therapy and regenerative medicine.
                </p>
                <div className="flex items-center gap-3 text-[15px] text-[#1A1F30]">
                  <CalendarDays className="h-5 w-5 text-[#6762AF]" />
                  <span>
                    Date: <span className="text-[#7A7F95]">To be announced</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[15px] text-[#1A1F30]">
                  <Clock className="h-5 w-5 text-[#6762AF]" />
                  <span>
                    Time: <span className="text-[#7A7F95]">To be announced</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[15px] text-[#1A1F30]">
                  <MapPin className="h-5 w-5 text-[#6762AF]" />
                  <span>
                    Venue:{" "}
                    <span className="text-[#7A7F95]">To be announced</span>
                  </span>
                </div>
                <p className="text-[12px] text-[#7A7F95]">
                  Event date, time, and venue will be confirmed with you after
                  you reserve your seats.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#F7F5FC] p-8 lg:p-10">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-[#1A1F30]">
                Reserve your seats
              </h3>
              <p className="mt-2 text-[14px] text-[#4A4F66]">
                Complete the form and our team will confirm your reservation and
                the event details.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-[#EDE8F7] bg-white">
                <iframe
                  src={RSVP_FORM_SRC}
                  title="RSVP Form"
                  className="block w-full border-0"
                  style={{ minHeight: 760 }}
                  loading="lazy"
                />
              </div>
              <p className="mt-5 text-center text-[12px] leading-relaxed text-[#7A7F95]">
                Not everyone is a candidate. Eligibility is determined during a
                private consultation. This is an educational event and carries
                no cost or obligation.
              </p>
              <p className="mt-4 text-center text-[13px] text-[#4A4F66]">
                Prefer to RSVP by phone? Call us at{" "}
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

      {/* ── About / contact + disclaimer ── */}
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
                <Globe className="h-4 w-4" /> Website
              </div>
              <a
                href="https://www.regenerativerevival.com"
                className="mt-3 block text-[14px] text-white/75 hover:text-white"
              >
                www.regenerativerevival.com
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-[11px] leading-relaxed text-white/40">
              Regenerative and stem cell therapies are not FDA-approved and are
              not intended to treat or prevent any disease. Statements on this
              page have not been evaluated by the FDA. Individual results vary
              and are not guaranteed. This event is educational in nature and
              does not constitute medical advice.
            </p>
            <p className="mt-3 text-[11px] text-white/40">
              © 2026 Regenerative Revival. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
