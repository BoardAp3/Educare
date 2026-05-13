import type { LucideIcon } from "lucide-react";
import { BookOpen, Users, CalendarDays, ClipboardCheck } from "lucide-react";

export interface LearningProgramInfoCard {
  title: string;
  points: string[];
}

export interface LearningProgramRightSection {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export interface LearningProgramTab {
  id: number;
  tabTitle: string;
  image: string;
  heading: string;
  description: string;
  infoCards: LearningProgramInfoCard[];
  rightSections: LearningProgramRightSection[];
}

export const learningProgramsTabs: LearningProgramTab[] = [
  {
    id: 1,
    tabTitle: "Online Tutoring",
    image: "/assets/servicesPage/ServicesHeroImg.webp",
    heading: "Learn Without Limits, With Structured Online Tutoring",
    description:
      "Our online tutoring delivers personalized, high-quality learning without location constraints. Students receive focused academic support through interactive sessions designed to improve clarity, consistency, and performance.",
    infoCards: [
      {
        title: "Who It’s For",
        points: [
          "Students with busy schedules, remote learners, and those looking for flexible, high-quality academic support.",
        ],
      },
      {
        title: "Subjects Covered",
        points: ["Mathematics", "Science", "Programming", "Finance"],
      },
    ],
    rightSections: [
      {
        icon: BookOpen,
        title: "Key Benefits",
        points: [
          "Learn from anywhere with complete flexibility",
          "Personalized sessions based on individual needs",
          "Time-efficient and distraction-free learning",
          "Consistent academic support across subjects",
        ],
      },
      {
        icon: Users,
        title: "What You’ll Get",
        points: [
          "Real-time doubt solving",
          "Interactive learning tools and sessions",
          "Structured lesson plans",
          "Continuous feedback and improvement",
        ],
      },
      {
        icon: ClipboardCheck,
        title: "How It Works",
        points: [
          "Book a free consultation",
          "Get a personalized study plan",
          "Attend live interactive sessions",
          "Track progress and improve consistently",
        ],
      },
    ],
  },
  {
    id: 2,
    tabTitle: "In-Person Tutoring",
    image: "/assets/aboutUsPage/AboutHeroImg.webp",
    heading: "Hands-On Learning With Expert In-Person Tutors",
    description:
      "In-person tutoring blends direct guidance with tailored support, helping learners stay focused and engaged. Our tutors create a structured environment where students build confidence through active practice and instant feedback.",
    infoCards: [
      {
        title: "Who It’s For",
        points: [
          "Learners who prefer face-to-face instruction",
          "Students preparing for exams in a local setting",
          "Those seeking structured study routines",
        ],
      },
      {
        title: "Subjects Covered",
        points: ["Mathematics", "Physics", "Chemistry", "Economics"],
      },
    ],
    rightSections: [
      {
        icon: BookOpen,
        title: "Key Benefits",
        points: [
          "Immediate tutor feedback in every session",
          "Focused classroom-style learning",
          "Hands-on support for difficult topics",
          "Structured progression toward academic goals",
        ],
      },
      {
        icon: Users,
        title: "What You’ll Get",
        points: [
          "Regular progress reviews",
          "Small-group or one-on-one support",
          "Custom practice assignments",
          "Motivation and study accountability",
        ],
      },
      {
        icon: ClipboardCheck,
        title: "How It Works",
        points: [
          "Choose your preferred tutor and schedule",
          "Meet for guided study sessions",
          "Review concepts with real-time coaching",
          "Refine skills through practice and feedback",
        ],
      },
    ],
  },
  {
    id: 3,
    tabTitle: "Summer Programs",
    image: "/assets/servicesPage/ServicesHeroImg.webp",
    heading: "Build Momentum With Focused Summer Learning",
    description:
      "Our summer programs give students a productive break with expert-led coursework, skill-building workshops, and exam readiness support. Ideal for learners who want to stay ahead and strengthen their foundation before the next term.",
    infoCards: [
      {
        title: "Who It’s For",
        points: [
          "Students wanting academic acceleration",
          "Learners preparing for the new school year",
          "Those needing focused review and confidence building",
        ],
      },
      {
        title: "Subjects Covered",
        points: ["Biology", "Statistics", "English", "Computer Science"],
      },
    ],
    rightSections: [
      {
        icon: BookOpen,
        title: "Key Benefits",
        points: [
          "Structured learning during the summer months",
          "Balanced review and new concept introduction",
          "Small-group and individual support",
          "A clear academic plan for the next term",
        ],
      },
      {
        icon: Users,
        title: "What You’ll Get",
        points: [
          "Engaging workshop-style sessions",
          "Targeted subject review",
          "Goal-based learning milestones",
          "Ongoing tutor support throughout the program",
        ],
      },
      {
        icon: ClipboardCheck,
        title: "How It Works",
        points: [
          "Select the summer track that fits your goals",
          "Join weekly guided lessons",
          "Complete focused assignments",
          "Track your growth and stay ahead",
        ],
      },
    ],
  },
  {
    id: 4,
    tabTitle: "Final Exam Prep",
    image: "/assets/servicesPage/ServicesHeroImg.webp",
    heading: "Prepare Confidently For Final Exams",
    description:
      "Final exam prep combines strategy, practice, and review to help students approach assessments with confidence. Our programs focus on exam patterns, time management, and targeted revision.",
    infoCards: [
      {
        title: "Who It’s For",
        points: [
          "Students needing last-minute review",
          "Learners targeting top exam performance",
          "Those who want data-driven study plans",
        ],
      },
      {
        title: "Subjects Covered",
        points: ["A-Level Math", "Physics", "Chemistry", "Business Studies"],
      },
    ],
    rightSections: [
      {
        icon: BookOpen,
        title: "Key Benefits",
        points: [
          "Exam-focused lesson plans",
          "Clear strategies for managing time and stress",
          "Practice under real exam conditions",
          "Targeted review of weak areas",
        ],
      },
      {
        icon: Users,
        title: "What You’ll Get",
        points: [
          "Mock tests and solutions",
          "Personalized revision guidance",
          "Exam technique coaching",
          "Performance tracking and feedback",
        ],
      },
      {
        icon: ClipboardCheck,
        title: "How It Works",
        points: [
          "Review your exam timeline with a tutor",
          "Focus on priority topics",
          "Practice with mock assessments",
          "Refine your plan until exam day",
        ],
      },
    ],
  },
];
