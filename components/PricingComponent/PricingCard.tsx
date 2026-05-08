import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export interface PricingCardProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    features: string[];
    price: number;
    oldPrice?: number;
    priceCaption: string;
    ctaText: string;
    ctaHref?: string;
    onCtaClick?: () => void;
}

const PricingCard = ({
    icon: Icon,
    title,
    subtitle,
    features,
    price,
    oldPrice,
    priceCaption,
    ctaText,
    ctaHref,
    onCtaClick,
}: PricingCardProps) => {
    return (
        <div className="w-85.25 h-131.5 rounded-lg bg-bg-grey p-10 shadow-[0px_0px_50px_0px_rgba(87,87,86,0.12)] flex flex-col transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_60px_0px_rgba(87,87,86,0.16)] hover:border-2 hover:border-yellow-light">
            {/* Content Wrapper */}
            <div className="w-65.25 h-111.5 flex flex-col gap-5 justify-between">
                <div className="flex flex-col gap-10">
                    {/* Icon Box */}
                    <div className="h-11 w-12.25 rounded-lg bg-yellow-light p-2.5 flex items-center justify-center shadow-[0px_0px_50px_0px_rgba(87,87,86,0.12)]">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[20px] leading-6 font-bricolage font-display font-normal text-slate">
                            {title}
                        </h3>
                        <p className="text-[14px] leading-5 font-montserrat font-normal text-slate opacity-70">
                            {subtitle}
                        </p>
                    </div>

                    {/* Features List */}
                    <ul className="flex flex-col gap-2">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="text-[16px] leading-5 font-montserrat font-normal text-slate opacity-80 flex items-start gap-2"
                            >
                                <span className="text-primary mt-0.5 flex">•</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-10">
                    {/* Divider */}
                    <div className="h-0.5 w-full bg-yellow-light opacity-60" />

                    {/* Price Section */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-baseline gap-3">
                            <span className="text-[32px] leading-8 font-bricolage font-display font-normal text-slate">
                                ${price}{oldPrice ? `-${oldPrice}` : ""}
                            </span>
                        </div>
                        <p className="text-[12px] leading-4 font-montserrat font-normal text-slate opacity-70">
                            {priceCaption}
                        </p>
                        <Button
                        iconRight={ArrowRight}
                        onClick={onCtaClick}
                        className="w-full"
                    >
                        {ctaText}
                    </Button>

                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default PricingCard;