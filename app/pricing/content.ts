import type { PricingCardProps } from "@/components/PricingComponent/PricingCard";

export const pricingSectionContent = {
  heading: "Flexible Pricing For Every Learning Goal",
  subheading:
    "Choose from personalized tutoring plans, exam prep programs, and monthly learning packages designed to fit your schedule and academic needs!",
  cards: [
    {
      icon: "Calendar" as const,
      title: "Monthly Program",
      subtitle: "Best for consistent growth",
      features: [
        "2 sessions per week",
        "Small group (6-8 students)",
        "Monthly progress tracking",
        "Exam strategy included",
      ],
      price: 185,
      oldPrice: 200,
      priceCaption: "per month, no hidden fees",
      ctaText: "Enroll Today!",
    },
    {
      icon: "Users" as const,
      title: "1 On 1 Tutoring",
      subtitle: "Maximum personalization",
      features: [
        "Fully personalized sessions",
        "Flexible scheduling",
        "Faster targeted improvement",
        "Custom learning plan",
      ],
      price: 75,
      oldPrice: 100,
      priceCaption: "based on subject and level",
      ctaText: "Book A Free Session",
    },
    {
      icon: "Zap" as const,
      title: "Exam Booster",
      subtitle: "Intensive exam preparation",
      features: [
        "2-week intensive program",
        "Past paper practice",
        "Test-taking strategy",
        "IB & AP specialized",
      ],
      price: 280,
      priceCaption: "per intensive course",
      ctaText: "Start Preparing",
    },
  ] as const,
};
