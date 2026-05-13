import Image from "next/image";
import { Download, FileText } from "lucide-react";

const PracticeMaterialSection = () => {
    return (
        <div className="max-w-[1156px] w-full mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8">
                <div className="space-y-6">
                    <div className="relative w-full rounded-[28px] overflow-hidden aspect-[16/9]">
                        <Image
                            src="/assets/mathematics-hero.png"
                            alt="Practice material preview"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 right-4 h-12 w-12 rounded-2xl bg-yellow-light text-slate-900 flex items-center justify-center shadow-lg">
                            <FileText className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-11 w-11 rounded-2xl bg-yellow-light text-slate-900 flex items-center justify-center shadow-sm">
                                <Download className="w-6 h-6" />
                            </div>
                            <h3 className="text-[22px] font-semibold text-slate-900">
                                Download Practice Material
                            </h3>
                        </div>
                        <div className="grid gap-4">
                            {[
                                "Algebra Topics Practice Problems",
                                "Number System Notes",
                                "Algebra Topics",
                                "Number System Practice Problems",
                            ].map((label, index) => (
                                <div key={index} className="rounded-3xl bg-slate-50 p-5 shadow-sm border border-slate-200">
                                    <p className="text-lg font-semibold text-slate-900 mb-2">{label}</p>
                                    <p className="text-sm text-slate-600">Download</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 py-2.5 px-0">
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-[40px] font-bricolage font-display font-normal text-slate-900 leading-tight">
                            Study Resources That Help You Practice With Confidence
                        </h2>
                        <p className="text-base sm:text-lg text-slate-700 leading-7 max-w-3xl">
                            Success in academics comes from consistent practice. Our downloadable materials help students strengthen concepts, revise faster, and build confidence across subjects.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-yellow-light text-slate-900 flex items-center justify-center shadow-sm">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-[22px] font-semibold text-slate-900">Study Tips</h3>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                title: "Practice Regularly",
                                description: "Mathematics improves through repetition. Consistent daily practice helps strengthen concepts and improve speed.",
                            },
                            {
                                title: "Break Problems Into Steps",
                                description: "Large problems become easier when solved through smaller, manageable steps.",
                            },
                            {
                                title: "Learn Visually",
                                description: "Use graphs, diagrams, and visual tools to understand abstract concepts more clearly.",
                            },
                            {
                                title: "Learn From Mistakes",
                                description: "Review incorrect answers to identify patterns and improve problem-solving accuracy.",
                            },
                            {
                                title: "Apply Real-Life Examples",
                                description: "Connecting concepts to practical situations makes learning more meaningful and memorable.",
                            },
                            {
                                title: "Seek Guidance When Needed",
                                description: "Working with tutors or study groups helps students overcome challenges faster.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="space-y-2">
                                <p className="font-semibold text-slate-900">{item.title}</p>
                                <p className="text-slate-600 leading-7">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeMaterialSection;
