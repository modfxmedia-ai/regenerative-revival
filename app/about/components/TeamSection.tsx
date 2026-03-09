"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ChevronDown,
  Stethoscope,
  HeartPulse,
  ShieldPlus,
  Users,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
}

const doctors: TeamMember[] = [
  {
    name: "Dr. Sean Arora",
    role: "Medical Director",
    photo: "/about/imgi_5_Dr-Sean-Arora.jpg",
    bio: "Dr. Sean Arora is a board-certified physician whose primary focus lies in wellness and telehealth innovation. With a foundation in family medicine and a passion for advancing patient-centered care, Dr. Arora has become a sought-after medical director for clinics across the country. As the founder of Arora Health & Aesthetics, he leads medical oversight and compliance networks in the wellness and telehealth space, offering full-spectrum medical directorship, nationwide telehealth provider networks, EMR integrations, and cutting-edge protocol development. Licensed in all 50 states for telehealth oversight, Dr. Arora continues to expand access to high-quality wellness care through his leadership, innovation, and dedication to patient outcomes.",
  },
];

const advocates: TeamMember[] = [
  {
    name: "Noah Nelson",
    role: "Revival Advocate",
    photo: "/about/imgi_6_staff1a.jpg",
    bio: "Noah Nelson brings more than 20 years of leadership experience in healthcare, spanning pharmaceuticals, biotechnology, and wellness. With a unique blend of clinical insight and strategic expertise, Noah guides individuals toward innovative protocols designed to restore strength, improve quality of life, and build lasting vitality.",
  },
  {
    name: "Dasa'n Fant",
    role: "Revival Advocate",
    photo: "/about/imgi_7_Screen-Shot-2026-01-27-at-1.24.46-PM.png",
  },
  {
    name: "David Chavez",
    role: "Revival Advocate",
    photo: "/about/imgi_8_staff2a.jpg",
    bio: "David Chavez is a Revival Advocate whose path into regenerative wellness began with his own experiences as an athlete. A lifelong sports enthusiast who played football through high school and college and continues to train as a Brazilian Jiu-Jitsu blue belt. His personal recovery journey sparked a passion for alternative therapies that restore strength and vitality. Today, David channels that passion into guiding others through personalized protocols and one-on-one consultations.",
  },
  {
    name: "Reggie Lynch",
    role: "Revival Advocate",
    photo: "/about/imgi_9_Screen-Shot-2026-01-27-at-1.25.19-PM.png",
    bio: "Reggie Lynch's love for regenerative medicine was sparked by his experiences playing basketball at the professional level. As a player for Illinois State University and the University of Minnesota, along with an eight-year professional basketball career, Reggie was exposed to a wide variety of treatments and recovery protocols. His biggest breakthrough came when he tried regenerative treatments for himself. Today, his extensive sports recovery knowledge and firsthand experience drive his passion for helping others overcome pain and improve longevity.",
  },
  {
    name: "Karl Canniff",
    role: "Senior Revival Advocate",
    photo: "/about/imgi_10_staff3a.jpg",
    bio: "As Senior Revival Advocate, Karl Canniff brings more than two decades of expertise in health, wellness, and regenerative medicine. With a foundation in stem cell sciences, he has guided over 2,000 pain management cases, helping clients experience meaningful relief and renewal. Karl blends advanced knowledge with a holistic, compassionate approach — to him, every client's journey is personal.",
  },
  {
    name: "Ben Nelson",
    role: "Revival Advocate",
    photo: "/about/imgi_11_staff4b.jpg",
    bio: "Ben Nelson's journey into regenerative medicine began on the baseball field. As a college athlete, his career was cut short by severe soft tissue damage. While doctors told him surgery was his only option, Ben chose a different path — exploring regenerative science. After receiving a stem cell injection, he returned to the field in just five months. Inspired by his own recovery, Ben earned a degree in Kinesiology, dedicating his career to the study of human performance, recovery, and the extraordinary potential of regenerative medicine.",
  },
];

const nursePractitioners: TeamMember[] = [
  {
    name: "Angelica McGough, DNP, APRN, FNP-BC",
    role: "Northern Midwest Regional Lead NP",
    photo: "/about/imgi_75_team-McGough-Angelica.jpg",
    bio: "With over 20 years of experience in emergency, critical care, and hospital medicine, Dr. Angie McGough specializes in advanced biologic injections designed to support joint health, reduce inflammation, and improve mobility. She also leads her own functional medicine clinic, Essential Infusions Plus, integrating regenerative therapies with nutrition, hormone optimization, and personalized wellness strategies.",
  },
  {
    name: "Shina Chase",
    role: "Minnesota Lead NP",
    photo: "/about/imgi_13_Screen-Shot-2026-01-31-at-1.50.58-PM.png",
  },
  {
    name: "Dana Cook, FNP",
    role: "South West Regional Lead NP",
    photo: "/about/imgi_76_team-Dana-Cook.jpg",
    bio: "Dana Cook is a Family Nurse Practitioner with over 25 years of acute care experience. She has worked across cardiovascular, research, administration, and procedural areas including the cardiac cath lab and interventional radiology. Since graduating from Grand Canyon University in 2018, she has worked in GI/liver, pain management, and alternative and regenerative medicine.",
  },
  {
    name: "Kefah Mazloum, MSN, APRN, FNP-C",
    role: "Michigan Lead NP",
    photo: "/about/imgi_15_Screen-Shot-2026-01-31-at-1.12.10-PM.png",
    bio: "Kefah Mazloum is a highly skilled Family Nurse Practitioner with extensive experience in emergency and trauma care across high-acuity hospital and urgent care settings. He specializes in rapid medical stabilization, advanced clinical decision-making, and complex procedural care. Kefah currently practices in a Level I trauma environment and holds a Master of Science in Nursing from the University of Michigan–Flint.",
  },
  {
    name: "Susan Kelly, APRN, FNP-BC, LNC",
    role: "South Eastern Regional Lead NP",
    photo: "/about/imgi_77_team-Kelly-Susan.jpg",
    bio: "Susan Kelly is a double board-certified Nurse Practitioner with extensive experience in advanced clinical practice and regenerative medicine. She brings a unique blend of clinical precision, compassion, and forward-thinking care, remaining committed to patient education, safety, and excellence in every aspect of regenerative treatment delivery.",
  },
  {
    name: "Nicole Stroop, MSN, APRN, FNP-BC, IFMCP",
    role: "Tennessee Lead NP",
    photo: "/about/imgi_19_Screen-Shot-2026-01-31-at-1.36.35-PM.png",
    bio: "Nicole Stroop is a board-certified Nurse Practitioner specializing in functional, regenerative, orthopedic, and aesthetic medicine. With advanced training in peptide therapy, stem cell therapy, and hormone optimization, Nicole brings a comprehensive, patient-centered approach to complex care. She practices across multiple states and is dedicated to optimizing patient outcomes and long-term wellness.",
  },
  {
    name: "Robyn Rafter, APRN, FNP-C",
    role: "Midwest Regional Lead NP",
    photo: "/about/imgi_79_team-Rafter-Robyn.jpg",
    bio: "Robyn Rafter is an experienced Nurse Practitioner and co-founder of Element Wellness in Omaha, Nebraska. With a strong background in functional and regenerative medicine, Robyn focuses on creating meaningful, long-term patient relationships while addressing root causes of illness through therapies such as hormone optimization, medical weight loss, IV infusion therapy, and functional medicine.",
  },
  {
    name: "Deanna Kaup, DNP, FNP-C",
    role: "Iowa Lead NP",
    photo: "/about/imgi_20_Screen-Shot-2026-01-27-at-1.25.06-PM.png",
    bio: "Deanna Kaup is a compassionate Advanced Registered Nurse Practitioner with 32 years of nursing experience across Med-Surg, Emergency, OB, and ICU, and over six years as a Nurse Practitioner. She specializes in joint and trigger point injections and has worked with diverse patient populations across multiple states. She is recognized for her patient-centered approach and commitment to improving mobility and quality of life.",
  },
];

const staff: TeamMember[] = [
  { name: "Jared Novack", role: "Director of Operations", photo: "/about/imgi_26_Screen-Shot-2026-01-31-at-10.39.15-AM.png" },
  { name: "Shannon Lonergan", role: "Chief of Staff", photo: "/about/imgi_80_team-Lonergan-Shannon.jpg" },
  { name: "Lexi Taylor", role: "Executive Assistant", photo: "/about/imgi_81_team-Lexi-Taylor.jpg" },
  { name: "Cathy Wandmacher", role: "Administrative Assistant", photo: "/about/imgi_82_team-cathy.jpg" },
  { name: "Danielle Kreienbrink", role: "Support Team Account Manager", photo: "/about/imgi_83_team-Dani-Headshot.jpg" },
  { name: "Emma Feddo", role: "Assistant", photo: "/about/imgi_84_team-Feddo-Emma.jpg" },
  { name: "Michaela Gebert", role: "Assistant" },
  { name: "Lane Snover", role: "Assistant" },
  { name: "Elizabeth King-Rodolf", role: "Assistant" },
];

const sections = [
  {
    id: "doctors",
    label: "Doctors",
    subtitle: "Our doctors in regenerative therapy.",
    icon: Stethoscope,
    members: doctors,
    banner: "/HomePage-_Why Choose Regenerative Revival__ section.jpeg",
  },
  {
    id: "advocates",
    label: "Revival Advocates",
    subtitle: "Our specialized leaders in regenerative therapy.",
    icon: HeartPulse,
    members: advocates,
    banner: "/about/imgi_72_HERO-PRESENTER.jpg",
  },
  {
    id: "nps",
    label: "Nurse Practitioners",
    subtitle: "Our regenerative therapy nurse practitioners.",
    icon: ShieldPlus,
    members: nursePractitioners,
    banner: "/2149611219.jpg",
  },
  {
    id: "staff",
    label: "Staff",
    subtitle: "Our staff in regenerative therapy.",
    icon: Users,
    members: staff,
    banner: "/about/imgi_71_HERO-STEM-CELL.jpg",
  },
];


function MemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)] hover:shadow-[0_16px_50px_rgba(107,63,160,0.1)] transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative p-7">
        {/* Avatar + info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 shrink-0 group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow duration-500 overflow-hidden">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-lg font-bold text-primary font-sans">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-gray-900 truncate">
              {member.name}
            </h3>
            <p className="text-sm text-primary/70 font-sans">{member.role}</p>
          </div>
        </div>

        {member.bio && (
          <>
            <p
              className={`text-sm text-gray-600 leading-relaxed font-sans ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {member.bio}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors font-sans"
            >
              {expanded ? "Show less" : "Read full bio"}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
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
    <section ref={ref} className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-sage/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            Our Team
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            The People Behind{" "}
            <span className="gradient-text">Your Revival</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 font-sans">
            Our specialized leaders, practitioners, and support staff in
            regenerative therapy.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 font-sans ${
                activeTab === s.id
                  ? "bg-white text-primary shadow-[0_4px_20px_rgba(107,63,160,0.12)] border border-primary/15"
                  : "bg-white/40 backdrop-blur-sm text-gray-500 border border-white/60 hover:bg-white/70 hover:text-gray-900"
              }`}
            >
              <s.icon className="h-4 w-4" />
              {s.label}
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === s.id
                    ? "bg-primary/10 text-primary"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {s.members.length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Category banner image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-banner"}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl overflow-hidden mb-12 h-48 sm:h-56"
          >
            <img
              src={activeSection.banner}
              alt={activeSection.label}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <activeSection.icon className="h-6 w-6 text-primary-light" />
                  <span className="text-sm font-medium text-white/60 uppercase tracking-wider font-sans">
                    {activeSection.label}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {activeSection.subtitle}
                </h3>
                <p className="mt-2 text-sm text-white/50 font-sans">
                  {activeSection.members.length} team member{activeSection.members.length !== 1 ? "s" : ""}
                </p>
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
            className={`grid gap-6 ${
              activeSection.members.length <= 2
                ? "md:grid-cols-2 max-w-3xl mx-auto"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
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
