"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Stethoscope, HeartPulse, ShieldPlus, Users } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
}

// Team headshots are served from the Vercel Blob store under the /team prefix.
const TEAM_BLOB = "https://65iosdxq0lyc5cm9.public.blob.vercel-storage.com/team";
const img = (file: string) => `${TEAM_BLOB}/${file}`;

const doctors: TeamMember[] = [
  { name: "Dr. Sean Arora", role: "Medical Director", photo: img("sean-arora.jpg"), bio: "Dr. Sean Arora is a board-certified physician whose primary focus lies in wellness and telehealth innovation. As the founder of Arora Health & Aesthetics, he leads medical oversight and compliance networks in the wellness and telehealth space, offering full-spectrum medical directorship, nationwide telehealth provider networks, EMR integrations, and cutting-edge protocol development. Licensed in all 50 states for telehealth oversight." },
  { name: "Dr. Shannon Arora", role: "Chief Medical Officer", photo: img("shannon-arora.png"), bio: "As Chief Medical Officer of Regenerative Revival, Dr. Shannon Arora champions an integrated model of care that brings regenerative medicine, hormone therapy, and peptide protocols together under one coordinated team - so the same patient can benefit from all of them without navigating separate clinics." },
];

const advocates: TeamMember[] = [
  { name: "Noah Nelson", role: "Wellness Advocate", photo: img("noah-nelson.jpg"), bio: "Noah Nelson brings more than 20 years of leadership experience in healthcare, spanning pharmaceuticals, biotechnology, and wellness. With a unique blend of clinical insight and strategic expertise, Noah guides individuals toward innovative protocols designed to restore strength, improve quality of life, and build lasting vitality." },
  { name: "David Chavez", role: "Wellness Advocate", photo: img("david-chavez.jpg"), bio: "David Chavez is a Wellness Advocate whose path into regenerative wellness began with his own experiences as an athlete. His personal recovery journey sparked a passion for alternative therapies that restore strength and vitality." },
  { name: "Reggie Lynch", role: "Wellness Advocate", photo: img("reggie-lynch.png"), bio: "Reggie Lynch's love for regenerative medicine was sparked by his experiences playing basketball at the professional level - including an eight-year professional career. His firsthand experience drives his passion for helping others overcome pain and improve longevity." },
  { name: "Karl Canniff", role: "Senior Wellness Advocate", photo: img("karl-canniff.jpg"), bio: "As Senior Wellness Advocate, Karl Canniff brings more than two decades of expertise in health, wellness, and regenerative medicine. With a foundation in stem cell sciences, he has guided over 2,000 pain management cases." },
  { name: "Ben Nelson", role: "Wellness Advocate", photo: img("ben-nelson.jpg"), bio: "Ben Nelson's journey into regenerative medicine began on the baseball field. After receiving a stem cell injection, he returned to the field in just five months. He earned a degree in Kinesiology, dedicating his career to human performance and regenerative medicine." },
  { name: "Adam Berge", role: "Wellness Advocate", photo: img("adam-berge.jpeg") },
  { name: "Robert Monroe", role: "Wellness Advocate", photo: img("robert-monroe.jpg") },
];

const nursePractitioners: TeamMember[] = [
  { name: "Angelica McGough, DNP, APRN, FNP-BC", role: "Northern Midwest Regional Lead NP", photo: img("angelica-mcgough.jpg"), bio: "With over 20 years of experience in emergency, critical care, and hospital medicine, Dr. Angie McGough specializes in advanced biologic injections designed to support joint health, reduce inflammation, and improve mobility." },
  { name: "Shina Chase, MSN, APRN, CNP", role: "Minnesota Lead NP", photo: img("shina-chase.jpg"), bio: "Board-certified Adult-Gerontology Nurse Practitioner with a strong clinical background in regenerative, orthopedic, and sports medicine. Specializes in joint and soft-tissue orthobiologic injections and BMAC procedures." },
  { name: "Dana Cook, FNP", role: "South West Regional Lead NP", photo: img("dana-cook.jpg"), bio: "Family Nurse Practitioner with over 25 years of acute care experience. Since graduating from Grand Canyon University in 2018, she has worked in pain management and alternative and regenerative medicine." },
  { name: "Susan Kelly, APRN, FNP-BC, LNC", role: "South Eastern Regional Lead NP", photo: img("susan-kelly.jpg"), bio: "Double board-certified Nurse Practitioner with extensive experience in advanced clinical practice and regenerative medicine. Committed to patient education, safety, and excellence in regenerative care delivery." },
  { name: "Nicole Stroop, MSN, APRN, FNP-BC, IFMCP", role: "Tennessee Lead NP", photo: img("nicole-stroop.jpg"), bio: "Board-certified Nurse Practitioner specializing in functional, regenerative, orthopedic, and aesthetic medicine. Advanced training in peptide therapy, stem cell therapy, and hormone optimization." },
  { name: "Deanna Kaup, DNP, FNP-C", role: "Iowa Lead NP", photo: img("deanna-kaup.jpg"), bio: "32 years of nursing experience across Med-Surg, Emergency, OB, and ICU. Specializes in joint and trigger point injections. Doctor of Nursing Practice, board certified through the ANCC." },
  { name: "Kefah Mazloum, MSN, APRN, FNP-C", role: "Michigan Lead NP", photo: img("kefah-mazloum.png"), bio: "Highly skilled Family Nurse Practitioner with extensive experience in emergency and trauma care. Currently practices in a Level I trauma environment. MSN from the University of Michigan-Flint." },
  { name: "Robyn Rafter, APRN, FNP-C", role: "Midwest Regional Lead NP", photo: img("robyn-rafter.jpg"), bio: "Experienced Nurse Practitioner and co-founder of Element Wellness in Omaha, Nebraska. Passionate about helping patients achieve optimal health through personalized, evidence-based care." },
  { name: "Shayne Yocum, ARNP, FNP-BC", role: "Seattle Lead NP", photo: img("shayne-yocum.jpg"), bio: "Board-certified Family Nurse Practitioner with over 50 years of nursing experience. Specializes in regenerative and orthobiologic therapies, including ultrasound-guided joint injections, PRP, and cellular tissue procedures." },
  { name: "Danielle Cory, DNP, FNP-C", role: "Oklahoma Lead NP", photo: img("danielle-cory.jpg"), bio: "Compassionate Family Nurse Practitioner committed to improving access to high-quality care. Doctor of Nursing Practice from Baylor University. Specializes in preventive medicine and chronic disease management." },
  { name: "Natalie Chovan-Hahn, FNP", role: "California Lead NP", photo: img("natalie-chovan-hahn.png"), bio: "Family Nurse Practitioner with experience in primary care and regenerative medicine. Focuses on stem cell injections, peptide therapy, and hormone optimization. Dedicated to addressing root causes rather than managing symptoms." },
  { name: "Addie Adefuye", role: "Texas Lead NP", photo: img("addie-adefuye.jpg") },
  { name: "Maxi Carbonell", role: "Oklahoma Lead NP", photo: img("maxi-carbonell.jpg") },
  { name: "Andrea Naegele", role: "Ohio Lead NP", photo: img("andrea-naegele.jpg") },
  { name: "Dashiel Wham", role: "Washington Lead NP", photo: img("dashiel-wham.jpg") },
  { name: "Diane Craig", role: "Illinois Lead NP", photo: img("diane-craig.jpg") },
  { name: "Amina Phangureh", role: "Nevada Lead NP", photo: img("amina-phangureh.jpg") },
  { name: "James McGraw", role: "Florida/Georgia Lead NP", photo: img("james-mcgraw.jpeg") },
  { name: "Stephanie Thomas", role: "Georgia Lead NP", photo: img("stephanie-thomas.png") },
  { name: "Nicole Thompson", role: "Florida Lead NP", photo: img("nicole-thompson.jpeg") },
  { name: "Sabina Virk", role: "Nevada Lead NP", photo: img("sabina-virk.png") },
  { name: "Rachel Ciota", role: "New Jersey Lead NP", photo: img("rachel-ciota.png") },
  { name: "Nick Blevens", role: "Pennsylvania Lead NP", photo: img("nick-blevens.jpeg") },
  { name: "John Schuitema", role: "Lead NP", photo: img("john-schuitema.jpeg") },
];

const staff: TeamMember[] = [
  { name: "Jared Novack", role: "Director of Operations", photo: "/team/jared-novack.png" },
  { name: "Dasa'n Fant", role: "Chief of Staff", photo: img("dasan-fant.png") },
  { name: "Shannon Lonergan", role: "Chief of Staff", photo: img("shannon-lonergan.jpg") },
  { name: "Lexi Taylor", role: "Executive Assistant", photo: img("lexi-taylor.jpg") },
  { name: "Cathy Wandmacher", role: "Administrative Assistant", photo: img("cathy-wandmacher.jpg") },
  { name: "Danielle Kreienbrink", role: "Support Team Account Manager", photo: img("danielle-kreienbrink.jpg") },
  { name: "Lydia D'Antonio", role: "Director of Marketing", photo: "/team/lydia.jpg" },
  { name: "Shaughnessy Crespo", role: "Support Team", photo: img("shaughnessy-crespo.jpg") },
  { name: "Emma Feddo", role: "Assistant", photo: img("emma-feddo.jpg") },
  { name: "Michaela Gebert", role: "Assistant", photo: "/team/michaela-gebert.png" },
  { name: "Lane Snover", role: "Assistant" },
  { name: "Elizabeth King-Rodolf", role: "Assistant" },
];

const sections = [
  { id: "doctors", label: "Doctors", subtitle: "Our physicians in regenerative therapy.", icon: Stethoscope, members: doctors, banner: "/HomePage-_Why Choose Regenerative Revival__ section.jpeg" },
  { id: "advocates", label: "Wellness Advocates", subtitle: "Our specialized leaders in regenerative therapy.", icon: HeartPulse, members: advocates, banner: "/about/imgi_72_HERO-PRESENTER.jpg" },
  { id: "nps", label: "Nurse Practitioners", subtitle: "Our regenerative therapy nurse practitioners.", icon: ShieldPlus, members: nursePractitioners, banner: "/2149611219.jpg" },
  { id: "staff", label: "Staff", subtitle: "Our staff in regenerative therapy.", icon: Users, members: staff, banner: "/about/imgi_71_HERO-STEM-CELL.jpg" },
];

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = bioRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight + 2);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-[20px] border border-[#F1ECF8] hover:border-[#6762AF]/20 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.15)] transition-all duration-500 overflow-hidden"
    >
      <div className="p-6">
        {/* Avatar + name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-14 w-14 rounded-full overflow-hidden shrink-0 bg-[#F1ECF8] border-2 border-white shadow-md">
            {member.photo ? (
              <Image src={member.photo} alt={member.name} fill className="object-cover object-top" sizes="56px" />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-[#6762AF] to-[#583563]">
                <span className="text-sm font-bold text-white">
                  {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-[14px] font-semibold text-[#1A1F30] leading-tight break-words">{member.name}</h3>
            <p className="text-[12px] text-[#6762AF] mt-0.5">{member.role}</p>
          </div>
        </div>
        {member.bio && (
          <>
            <p
              ref={bioRef}
              className={`text-[12.5px] text-[#4A4F66] leading-[1.65] ${expanded ? "" : "line-clamp-4"}`}
            >
              {member.bio}
            </p>
            {(isClamped || expanded) && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-2 text-[12px] font-semibold text-[#6762AF] hover:text-[#583563] transition-colors"
                aria-expanded={expanded}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("doctors");
  const activeSection = sections.find((s) => s.id === activeTab)!;

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-[#F1ECF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/50 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Our Team</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
            The people behind <span className="text-[#6762AF]">your revival</span>
          </h2>
          <p className="mt-5 text-base text-[#4A4F66]">
            Our specialized leaders, practitioners, and support staff in regenerative therapy.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                activeTab === s.id
                  ? "bg-[#1A1F30] text-white shadow-[0_8px_24px_-8px_rgba(26,31,48,0.4)]"
                  : "bg-white text-[#4A4F66] border border-[#F1ECF8] hover:border-[#6762AF]/20 hover:text-[#1A1F30]"
              }`}
            >
              <s.icon className="h-3.5 w-3.5" />
              {s.label}
              <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${activeTab === s.id ? "bg-white/20 text-white" : "bg-[#F1ECF8] text-[#6762AF]"}`}>
                {s.members.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Category banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-banner"}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-2xl overflow-hidden mb-10 h-44 sm:h-52"
          >
            <Image src={activeSection.banner} alt={activeSection.label} fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F30]/85 via-[#1A1F30]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <activeSection.icon className="h-5 w-5 text-[#71A7F5]" />
                  <span className="text-[11px] font-medium text-white/60 uppercase tracking-wider">{activeSection.label}</span>
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-2xl sm:text-3xl text-white">{activeSection.subtitle}</h3>
                <p className="mt-1.5 text-[12px] text-white/50">{activeSection.members.length} team member{activeSection.members.length !== 1 ? "s" : ""}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Team grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-4 lg:gap-5 ${activeSection.members.length <= 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}
          >
            {activeSection.members.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
