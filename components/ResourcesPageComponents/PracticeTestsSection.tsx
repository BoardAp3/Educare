import Image from "next/image";
import { ArrowUpRight, Blocks, ClipboardCheck, FileText, Layers } from "lucide-react";
import { practiceTestData } from "./content";

const PracticeTestsSection = () => {
    return (
        <div className="max-w-[1296px] w-full mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8">
                <div className="space-y-6">
                    <div className="flex items-start gap-3 max-w-[472px]">
                        <div className="relative flex-1 h-[368px] rounded-lg overflow-hidden aspect-[16/10]">
                            <Image
                                src={practiceTestData.imageUrl}
                                alt={practiceTestData.imageAlt}
                                fill
                                className="object-cover h-full w-full"
                                priority
                            />
                        </div>
                        <div className="shrink-0">
                            <div className="h-12 w-12 rounded-lg bg-yellow-light text-slate-900 flex items-center justify-center shadow-lg border border-slate-200">
                                <Blocks className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    {practiceTestData.leftSections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl max-w-[472px]"
                        >
                            <div className="space-y-4">
                                <div className="flex items-start gap-2">
                                    <div className="h-8 w-8 rounded-sm bg-yellow-light text-slate-900 flex items-center justify-center">
                                        <ClipboardCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-[22px] font-bricolage font-display font-normal text-slate-900">
                                            {section.heading}
                                        </h3>
                                    </div>
                                </div>
                                {section.description && (
                                    <p className="text-slate text-[16px] leading-7">
                                        {section.description}
                                    </p>
                                )}
                                {section.points && (
                                    <ul className="space-y-3 ml-1 text-[16px] leading-4 font-montserrat text-slate list-disc list-inside">
                                        {section.points.map((point, pointIndex) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-8 py-2.5 px-0">
                    <div className="max-w-165">
                        <h2 className="text-4xl sm:text-[32px] font-bricolage font-normal text-slate leading-8.5 mb-5">
                            {practiceTestData.mainHeading}
                        </h2>
                        <p className="text-base sm:text-lg  text-justify text-slate leading-7 max-w-3xl whitespace-break-spaces">
                            {practiceTestData.mainDescription}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <div className="h-8 w-8 rounded-sm bg-yellow-light text-slate-900 flex items-center justify-center">
                                <Layers className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-[22px] font-bricolage font-display font-normal text-slate-900">
                                    Specially Curated Practice Tests
                                </h3>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            {practiceTestData.practiceTests.map((test, index) => (
                                <div key={index} className="rounded-lg max-w-92.75 group flex items-center justify-between bg-bg-grey p-5 shadow-[0px_0px_25px_0px_#5757561A] border border-slate-200">
                                    <p className="text-lg font-semibold underline decoration-2 underline-offset-4 decoration-yellow-light text-slate-900">{test.label}</p>
                                    <ArrowUpRight className="h-5 w-5 text-slate-700 transition-all duration-300 delay-75 group-hover:scale-125  group-hover:text-primary]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeTestsSection;
