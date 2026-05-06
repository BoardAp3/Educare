/** @format */

import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutHeroSection = () => {
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
                        <h1 className="text-[42px] font-bricolage font-display font-normal text-slate leading-none mb-6">
                            A More Focused Approach to Learning,
                            That Delivers Real Results
                        </h1>
                        <p className="text-[18px] font-montserrat font-normal text-slate mb-8 leading-none">
                            At Dr. Shreyank Educare, we help students move beyond confusion and build true understanding through structured, personalized, and engaging learning experiences.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button iconRight={ArrowRight}>Get A Free Consultation</Button>
                        </div>
                    </div>

                    {/* Hero Image / Grid */}
                    <div className="relative lg:mt-0 mt-12 flex justify-center lg:justify-end">
                        <div className="relative max-w-85.25 w-full">
                            {/* Decorative background circle */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                            <div className="relative overflow-hidden p-2">
                                <div className="rounded-xl overflow-hidden">
                                    <Image
                                        src="/assets/aboutUsPage/heroSectionImage.webp"
                                        alt="About Us Hero"
                                        width={341}
                                        height={326}
                                        className="w-85.25 h-81.5 object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutHeroSection;