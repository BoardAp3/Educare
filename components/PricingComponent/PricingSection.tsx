import PricingCard from "@/components/PricingComponent/PricingCard";
import { Calendar, Users, Zap } from "lucide-react";
import type { PricingCardProps } from "@/components/PricingComponent/PricingCard";

interface PricingCard {
    icon: string;
    title: string;
    subtitle: string;
    features: string[];
    price: number;
    oldPrice?: number;
    priceCaption: string;
    ctaText: string;
}

interface PricingSectionProps {
    heading: string;
    subheading: string;
    cards: PricingCard[];
}

const iconMap: Record<string, any> = {
    Calendar,
    Users,
    Zap,
};

export default function PricingSection({
    heading,
    subheading,
    cards,
}: PricingSectionProps) {
    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="mx-auto w-full max-w-324 flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
                {/* Heading Wrapper */}
                <div className="w-full max-w-170.75 h-auto mx-auto gap-3 flex flex-col items-center justify-center">
                    <h2 className="text-[28px] sm:text-[32px] leading-10 sm:leading-11 font-bricolage font-display font-normal text-slate text-center">
                        {heading}
                    </h2>
                    <p className="text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-montserrat font-normal text-slate opacity-80 text-center">
                        {subheading}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center gap-10 items-stretch mx-auto">
                    {cards.map((card, index) => {
                        const IconComponent = iconMap[card.icon];
                        return (
                            <PricingCard
                                key={index}
                                icon={IconComponent}
                                title={card.title}
                                subtitle={card.subtitle}
                                features={card.features}
                                price={card.price}
                                oldPrice={card.oldPrice}
                                priceCaption={card.priceCaption}
                                ctaText={card.ctaText}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
