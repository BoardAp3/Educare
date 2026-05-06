import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export interface ApproachCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OurApproachProps {
  heading: string;
  description: string;
  supportingText: string;
  cards: ApproachCard[];
  imageSrc?: string;
  imageAlt?: string;
}

const contentData = {
        heading:"Our Approach, A Structured Learning Process",
        description:"Success in math and science requires more than memorization; it demands clarity, application, and practice. Our teaching method is built around a simple but effective three-step process.",
        supportingText:"This structure ensures students build stronger foundations, gain practical problem-solving skills, and reinforce learning through consistent practice.",
        cards:[
          {
            icon: "LayoutGrid",
            title: "1. Building Strong Foundations",
            description: "We ensure students fully understand the underlying theory before moving to complex problems.",
          },
          {
            icon: "BookOpen",
            title: "2. Demonstrating Practical Problem-Solving Techniques",
            description: "Students are guided through step-by-step methods to apply concepts effectively.",
          },
          {
            icon: "Zap",
            title: "3. Reinforcing Learning Through Practice",
            description: "Consistent practice helps students build confidence, accuracy, and speed over time.",
          },
        ]}

const OurApproach = ({
  heading,
  description,
  supportingText,
  cards,
  imageSrc = "/assets/aboutUsPage/profStanding.webp",
  imageAlt = "Instructor presenting",
}: OurApproachProps) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Left image */}
        <div className="relative w-full lg:w-[461px]">
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[684px] rounded-[8px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Middle content */}
        <div className="w-full lg:w-[350px] h-full flex flex-col gap-[12px]">
          <h2 className="text-[40px] sm:text-[44px] leading-[46px] font-bricolage font-display font-normal text-slate">
            {heading}
          </h2>
          <p className="text-[16px] leading-[24px] font-montserrat font-normal text-slate max-w-full">
            {description}
          </p>
          <p className="text-[16px] leading-[24px] font-montserrat font-normal text-slate opacity-80">
            {supportingText}
          </p>
        </div>

        {/* Right cards */}
        <div className="w-full lg:w-[386px] h-full flex flex-col gap-[40px]">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="w-full h-[184px] rounded-[8px] bg-[#F9FBFD] p-[40px] flex flex-col gap-[24px] shadow-[0px_0px_50px_0px_rgba(87,87,86,0.12)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-[20px] leading-[28px] font-bricolage font-display font-normal text-slate">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[16px] leading-[24px] font-montserrat font-normal text-slate opacity-80">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurApproach;
