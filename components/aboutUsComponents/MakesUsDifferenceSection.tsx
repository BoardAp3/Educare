import Image from "next/image";
import { Trophy, Zap } from "lucide-react";

function MakesUsDifferenceSection() {
    return (
        <section className="">
            <div className="mx-auto w-full max-w-324 h-auto min-h-83.5">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full h-full rounded-[30px] overflow-hidden p-6">
                    <div className="relative w-full lg:w-115.25 h-83.5 rounded-lg overflow-visible">
                        <Image
                            src="/assets/aboutUsPage/cmakeDiffMainImg.webp"
                            alt="What makes us different"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                        <div className="absolute top-0 -right-11 h-10 w-10 rounded-lg bg-yellow-light text-primary flex items-center justify-center shadow-lg">
                            <Trophy className="w-6 h-6"/>
                        </div>

                    </div>

                    <div className="w-full max-w-166.25 h-full flex flex-col justify-between align-start">
                        <div>
                            <h2 className="text-[32px] leading-8.5 font-bricolage font-display font-normal text-slate capitalize mb-4">
                                What Makes Us Different?
                            </h2>
                            <p className="text-[16px] leading-5.5 font-montserrat font-normal text-slate mb-8">
                                We focus exclusively on math and science — subjects that require a deeper level of understanding and structured thinking. This allows us to deliver targeted learning experiences that go beyond surface-level teaching and truly strengthen core concepts.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-2">
                                <div className="h-8 w-8 rounded-sm bg-yellow-light text-primary flex items-center justify-center">
                                    <Zap className="w-6 h-6"/>
                                </div>
                                <div className="flex flex-col gap-3.5 align-center justify-center">
                                    <h3 className="text-[22px] align-middle leading-5.5 font-bricolage font-display font-normal text-slate">
                                        Key Differentiators
                                    </h3>
                                </div>
                            </div>
                            <ul className="space-y-3 ml-1 text-[16px] leading-4 font-montserrat text-slate-600 list-disc list-inside">
                                        <li>A Specialized Focus That Builds Stronger Foundations</li>
                                        <li>Flexible, Student-Centered Learning Without Restrictions</li>
                                        <li>An Engaging Approach That Makes Learning More Enjoyable</li>
                                        <li>Continuous progress tracking and feedback</li>
                                        <li>Flexible scheduling to suit your routine</li>
                                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MakesUsDifferenceSection;
