import Image from "next/image";
import { ClipboardCheck, FileText } from "lucide-react";

const PracticeTestsSection = () => {
    return (
        <div className="max-w-[1156px] w-full mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8">
                <div className="space-y-6">
                    <div className="relative w-full rounded-[28px] overflow-hidden aspect-[16/9]">
                        <Image
                            src="/assets/chemestry.jpg"
                            alt="Practice test preview"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 right-4 h-12 w-12 rounded-2xl bg-yellow-light text-slate-900 flex items-center justify-center shadow-lg">
                            <ClipboardCheck className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                        <h3 className="text-[22px] font-semibold text-slate-900 mb-3">
                            Pre-Calculus 12 Practice Exams
                        </h3>
                        <p className="text-slate-700 leading-7">
                            Strengthen your understanding of core Pre-Calculus concepts through guided online practice tests covering transformations, logarithms, trigonometry, functions, and more.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                        <h3 className="text-[22px] font-semibold text-slate-900 mb-4">
                            What These Practice Tests Help With
                        </h3>
                        <ul className="space-y-3 text-slate-700 leading-7 list-disc list-inside">
                            <li>Improve problem-solving speed and accuracy</li>
                            <li>Practice under exam-style conditions</li>
                            <li>Identify weak concepts before final exams</li>
                            <li>Build confidence through repetition and review</li>
                            <li>Reinforce classroom learning with structured practice</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-8 py-2.5 px-0">
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-[40px] font-bricolage font-display font-normal text-slate-900 leading-tight">
                            Practice Tests Designed To Build Exam Confidence
                        </h2>
                        <p className="text-base sm:text-lg text-slate-700 leading-7 max-w-3xl">
                            Prepare smarter with structured practice exams created to simulate real test environments and reinforce key concepts. Our practice tests help students improve speed, accuracy, and confidence before quizzes, assessments, and final exams.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-yellow-light text-slate-900 flex items-center justify-center shadow-sm">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-[22px] font-semibold text-slate-900">Specially Curated Practice Tests</h3>
                    </div>

                    <div className="grid gap-4">
                        {[
                            "Take Exam 1 Online",
                            "Take Exam 2 Online",
                            "Take Exam 3 Online",
                            "Take Exam 4 Online",
                        ].map((label, index) => (
                            <div key={index} className="rounded-3xl bg-slate-50 p-5 shadow-sm border border-slate-200">
                                <p className="text-lg font-semibold text-slate-900">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeTestsSection;
