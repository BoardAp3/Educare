import Image from "next/image";
import { BookOpen, Play } from "lucide-react";

const DemoVideosSection = () => {
    return (
        <div className="max-w-[1156px] w-full mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8">
                <div className="space-y-6">
                    <div className="relative w-full rounded-[28px] overflow-hidden aspect-[16/9]">
                        <Image
                            src="/assets/programsHeroImage.jpg"
                            alt="Demo videos preview"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 right-4 h-12 w-12 rounded-2xl bg-yellow-light text-slate-900 flex items-center justify-center shadow-lg">
                            <Play className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                        <h3 className="text-[22px] font-semibold text-slate-900 mb-4">
                            What You&apos;ll Learn From These Videos
                        </h3>
                        <ul className="space-y-3 text-[16px] text-slate-700 leading-7 list-disc list-inside">
                            <li>Learn how we make complex topics easier</li>
                            <li>Understand our teaching methodology</li>
                            <li>Experience our step-by-step explanations</li>
                            <li>See how personalized tutoring works</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-8 py-2.5 px-0">
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-[40px] font-bricolage font-display font-normal text-slate-900 leading-tight">
                            See How Our Teaching Works In Real Time, With Our Demo Videos
                        </h2>
                        <p className="text-base sm:text-lg text-slate-700 leading-7 max-w-3xl">
                            At Dr. Shreyank Educare, we believe that seeing the teaching process helps students and parents make confident decisions. Our demo videos showcase how we simplify difficult concepts through interactive teaching and personalized instruction.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-yellow-light text-slate-900 flex items-center justify-center shadow-sm">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-[22px] font-semibold text-slate-900">Featured Video Categories</h3>
                    </div>

                    <div className="grid gap-6">
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-900">Mathematics Tutorials</p>
                            <p className="text-slate-600 leading-7">
                                From algebra fundamentals to calculus problem-solving, explore how we break down complex math concepts step-by-step.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-900">Science Lessons</p>
                            <p className="text-slate-600 leading-7">
                                Watch physics, chemistry, and biology sessions that simplify formulas, theories, and applications through visual teaching methods.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-900">Test Preparation Sessions</p>
                            <p className="text-slate-600 leading-7">
                                See how our tutors help students prepare for competitive exams with strategy-based learning and structured practice.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-slate-900">Coding Demonstrations</p>
                            <p className="text-slate-600 leading-7">
                                Explore beginner-friendly coding sessions covering programming logic, development fundamentals, and project learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoVideosSection;
