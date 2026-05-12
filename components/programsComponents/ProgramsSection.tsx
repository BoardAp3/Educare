/** @format */

"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Program {
  title: string;
  coreTargets: string[];
  idealFor: string;
  expectedOutcome: string;
  learnMoreHref?: string;
}

interface ProgramTab {
  label: string;
  programs: Program[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const programTabs: ProgramTab[] = [
  {
    label: "Academic Subjects",
    programs: [
      {
        title: "Mathematics Tutoring",
        coreTargets: [
          "Algebra & functions",
          "Calculus, Limits & Derivatives",
          "Trigonometry & Coordinate Geometry",
        ],
        idealFor:
          "Students preparing for school exams and competitive entrance tests requiring strong analytical thinking.",
        expectedOutcome: "98% success rate in SAT/JEE math modules.",
        learnMoreHref: "/contact",
      },
      {
        title: "Physics Tutoring",
        coreTargets: [
          "High-school physics",
          "Physics and the underlying math",
          "University level physics",
        ],
        idealFor: "High-school and university students",
        expectedOutcome:
          "Clear conceptual understanding and the ability to solve complex problems.",
        learnMoreHref: "/contact",
      },
      {
        title: "Chemistry Tutoring",
        coreTargets: [
          "Organic Chemistry",
          "Physical Chemistry",
          "Chemical Reactions & Bonding",
        ],
        idealFor:
          "School students and aspirants preparing for competitive exams like NEET or equivalent.",
        expectedOutcome:
          "Improved conceptual clarity, better retention, and higher accuracy in problem-solving and theory.",
        learnMoreHref: "/contact",
      },
      {
        title: "Biology Tutoring",
        coreTargets: [
          "Human Physiology",
          "Genetics & Evolution",
          "Cell Biology",
        ],
        idealFor:
          "Students aiming for strong performance in school exams and medical entrance preparation.",
        expectedOutcome:
          "Faster recall, deeper understanding, and improved performance in theory-based exams.",
        learnMoreHref: "/contact",
      },
      {
        title: "Computer Science Tutoring",
        coreTargets: [
          "Programming Basics",
          "Logic Building",
          "Data Structures (Intro)",
        ],
        idealFor:
          "School and beginner-level students interested in coding and computational thinking.",
        expectedOutcome:
          "Strong logical foundation and the ability to write and understand structured code.",
        learnMoreHref: "/contact",
      },
      {
        title: "Finance Tutoring",
        coreTargets: [
          "Financial Basics",
          "Business Concepts",
          "Practical Application",
        ],
        idealFor:
          "Commerce students and beginners looking to understand real-world financial systems.",
        expectedOutcome:
          "Clear understanding of financial principles with practical, applicable knowledge.",
        learnMoreHref: "/contact",
      },
    ],
  },
  {
    label: "Coding & Tech",
    programs: [
      {
        title: "Python",
        coreTargets: [
          "Variables and data types",
          "Loops and conditionals",
          "Functions & logic building",
          "Basic syntax and structure",
        ],
        idealFor: "Beginners and students starting their coding journey.",
        expectedOutcome:
          "Ability to write functional programs and build a strong foundation.",
        learnMoreHref: "/contact",
      },
      {
        title: "JavaScript",
        coreTargets: [
          "Variables and data types",
          "Functions and  events",
          "Loops and conditionals",
          "DOM (Document Object Model) manipulation",
        ],
        idealFor:
          "Students aiming to build structured programming knowledge for academics or development.",
        expectedOutcome:
          "Clear OOP concepts & ability to develop structured applications.",
        learnMoreHref: "/contact",
      },
      {
        title: "Web Development",
        coreTargets: [
          "Frontend Development (HTML, CSS, JavaScript, React)",
          "Backend Development (Node.js, Express.js)",
          "Database Management (MongoDB, Firebase)",
          "API Development & Integration",
        ],
        idealFor:
          "Beginners interested in building websites and learning front-end development.",
        expectedOutcome:
          "Design and build functional, responsive websites from scratch.",
        learnMoreHref: "/contact",
      },
    ],
  },
  {
    label: "Test Preparations",
    programs: [
      {
        title: "SAT/PSAT",
        coreTargets: [
          "Mathematics",
          "Evidence-Based RW",
          "Test-taking hacks",
        ],
        idealFor: "Students preparing for SAT/PSAT",
        expectedOutcome:
          "98% success rate in SAT/JEE math modules, +150 pts target score",
        learnMoreHref: "/contact",
      },
      {
        title: "MCAT",
        coreTargets: [
          "CARS drills",
          "Biology/Biochemistry",
          "Chemistry/Physics, Psych/Soc",
        ],
        idealFor: "Students preparing for MCAT",
        expectedOutcome: "510+ pts target score",
        learnMoreHref: "/contact",
      },
      {
        title: "GRE",
        coreTargets: [
          "Quant shortcuts",
          "Verbal vocab systems",
          "AWA essays",
        ],
        idealFor: "Students preparing for GRE",
        expectedOutcome:
          "A standout GRE score 320+ that can serve as powerful evidence",
        learnMoreHref: "/contact",
      },
      {
        title: "GMAT/GRE Focus",
        coreTargets: [
          "Data Insights",
          "Verbal & Quant",
          "IR mini-mocks",
        ],
        idealFor: "Students preparing for GMAT/GRE",
        expectedOutcome: "675+ / 325+ pts target score",
        learnMoreHref: "/contact",
      },
    ],
  },
  {
    label: "University Courses",
    programs: [
      {
        title: "Mathematics - College/ University",
        coreTargets: [
          "Statistics UBC: STAT 200, 203, 241, 251",
          "Statistics Langara: STAT 1123, 1124, 1181",
          "Linear Algebra UBC: MATH 152",
          "Linear Algebra Langara: MATH 2362",
        ],
        idealFor: "College/University students",
        expectedOutcome:
          "Better conceptual clarity & performance in university-level exams.",
        learnMoreHref: "/contact",
      },
      {
        title: "Physics - College/ University",
        coreTargets: [
          "UBC: PHYS 100, 101, 107, 108, 117, 118, 170",
          "Langara College : PHYS 1101, 1114, 1118, 1125, 1225",
        ],
        idealFor: "College/University students",
        expectedOutcome:
          "Clear conceptual understanding of subjects and core",
        learnMoreHref: "/contact",
      },
      {
        title: "Chemistry - College/ University",
        coreTargets: [
          "UBC : CHEM 111, 121, 123",
          "Langara College : CHEM 1114, 1118, 1120, 1220",
        ],
        idealFor: "College/University students",
        expectedOutcome:
          "Clear conceptual understanding of subjects and core",
        learnMoreHref: "/contact",
      },
      {
        title: "Biology - College/ University",
        coreTargets: [
          "General Biology",
          "Molecular Biology",
          "Anatomy and Physiology",
        ],
        idealFor: "College/University students",
        expectedOutcome:
          "Clear conceptual understanding of subjects and core",
        learnMoreHref: "/contact",
      },
      {
        title: "Finance",
        coreTargets: [
          "BCom, MBA",
          "MSc, Phd",
          "CFA, CSC, IFC",
        ],
        idealFor:
          "Pursuing a BCom, MBA, MSc, or PhD, or preparing for prestigious certifications such as CFA, CSC, or IFC.",
        expectedOutcome:
          "Master both fundamental and advanced finance concepts",
        learnMoreHref: "/contact",
      },
    ],
  },
  {
    label: "Extra Curricular",
    programs: [
      {
        title: "Language Lessons Mandarin",
        coreTargets: [
          "Conversational Mandarin & Pronunciation",
          "Reading, Writing & Vocabulary Building",
          "Grammar, Listening & Cultural Understanding",
        ],
        idealFor:
          "Students, professionals, and language learners looking to build practical Mandarin communication skills for academics, travel, career opportunities, or personal growth.",
        expectedOutcome:
          "Improved speaking confidence, stronger reading and writing skills, and practical fluency for real-world communication.",
        learnMoreHref: "/contact",
      },
      {
        title: "Language Lessons French",
        coreTargets: [
          "Conversational French & Pronunciation",
          "Grammar, Vocabulary & Sentence Formation",
          "Reading, Writing & Listening Practice",
        ],
        idealFor:
          "Students preparing for school curriculum, professionals seeking language skills, and learners interested in travel, immigration, or personal development.",
        expectedOutcome:
          "Enhanced communication skills, language proficiency, improved confidence in academic or everyday French conversations.",
        learnMoreHref: "/contact",
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgramCard({
  program,
  isFirst,
  defaultOpen,
}: {
  program: Program;
  isFirst: boolean;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-[8px] shadow-[0px_0px_50px_0px_#5757561F] p-5 bg-bg-grey  transition-all duration-300 overflow-hidden cursor-pointer`}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between text-left  hover:bg-gray-50 transition-colors cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-[22px] font-bricolage font-semibold pb-5 text-slate">
          {program.title}
        </span>
        {open ? (
          <ChevronUp className="w-6 h-6 text-slate shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-slate shrink-0" />
        )}
      </button>

      {/* Body */}
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#F8F5F5] grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Core Targets */}
            <div>
              <p className="text-[18px] font-montserrat font-medium text-primary mb-[18px] uppercase">
                Core Targets
              </p>
              <ul className="space-y-1.5">
                {program.coreTargets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[16px] font-montserrat text-slate"
                  >
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-slate shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div>
              <p className="text-[18px] font-montserrat font-medium text-primary mb-[18px] uppercase">
                Ideal For
              </p>
              <p className="text-[16px] font-montserrat text-slate leading-relaxed">
                {program.idealFor}
              </p>
            </div>

            {/* Expected Outcome */}
            <div>
              <p className="text-[18px] font-montserrat font-medium text-primary mb-[18px] uppercase">
                Expected Outcome
              </p>
              <p className="text-[16px] font-montserrat text-slate leading-relaxed mb-[18px]">
                {program.expectedOutcome}
              </p>
              {program.learnMoreHref && (
                <Link
                  href={program.learnMoreHref}
                  className="inline-flex items-center gap-1 text-[18px] font-montserrat font-medium text-primary hover:underline transition-all"
                >
                  Learn more
                  <ArrowUpRight className="w-[22px] h-[22px]" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const activePrograms = programTabs[activeTab].programs;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1296px] mx-auto">
        {/* Tab Bar */}
        <div className="flex flex-wrap gap-3 mb-6 pb-6 border-b-2 border-yellow-light">
          {programTabs.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`
                inline-flex items-center justify-center
                p-5 rounded-[24px] leading-[100%]
                text-[24px] font-bricolage font-normal
                transition-all duration-200 cursor-pointer
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 shadow-[0px_0px_50px_0px_#5757561F]
                ${
                  activeTab === idx
                    ? "bg-slate text-white"
                    : "bg-bg-grey text-slate hover:bg-[#E9EAEC]"
                }
              `}
              style={
                activeTab === idx
                  ? { boxShadow: "0px 0px 50px 0px #5757561F" }
                  : undefined
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Program Cards */}
        <div className="flex flex-col gap-4">
          {activePrograms.map((program, idx) => (
            <ProgramCard
              key={`${activeTab}-${program.title}`}
              program={program}
              isFirst={idx === 0}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
