/** @format */

import { Button } from "../ui/Button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GeneralHeroSectionProps } from "./content";


const GeneralHeroSection = ({
    heading, description, image, buttonText, buttonVisiblity = true
}: GeneralHeroSectionProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-100 pointer-events-none"
                style={{
                    backgroundImage: `url('/backgrounds/yellowGrid.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="max-w-7xl max-h-81.5 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-12 items-center w-full justify-between">
                    {/* Content */}
                    <div className="max-w-211.25 w-full">
                        <h1 className="text-[42px] font-bricolage font-display font-normal text-slate leading-none mb-6 whitespace-pre-line">
                            {heading}
                        </h1>
                        <p className="text-[18px] font-montserrat font-normal text-slate mb-8 leading-none whitespace-pre-line">
                            {description}
                        </p>
                        {buttonVisiblity && (
                            <Link href={image?.href || "/about"}>
                                <div className="flex flex-wrap gap-4">
                                    <Button iconRight={ArrowRight}>{buttonText}</Button>
                                </div>
                            </Link>
                        )}
                    </div>

                    {/* Hero Image / Grid */}
                    <div className="relative lg:mt-0 mt-12 flex justify-center lg:justify-end">
                        <div className="relative max-w-85.25 w-full">
                            {/* Decorative background circle */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                            <div className="relative overflow-visible p-2">
                                <div className="rounded-xl overflow-visible">
                                    <Image
                                        src={`/assets/${image?.src || "aboutUsPage/aboutHeroImg.webp"}`}
                                        alt={image?.alt || "HeroImage"}
                                        width={341}
                                        height={326}
                                        className="w-85.25 h-81.5 object-cover rounded-xl"
                                        priority
                                    />
                                </div>
                                <div className="absolute p-1 -bottom-4 -left-7 h-11 w-53.75 bg-yellow-light rounded-lg flex gap-2.5 items-center justify-center">
                                    <Zap className="w-6 h-6 text-black" />
                                    <span className="text-[16px] font-medium font-bricolage text-black">
                                        Accelerated Learning
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default GeneralHeroSection;