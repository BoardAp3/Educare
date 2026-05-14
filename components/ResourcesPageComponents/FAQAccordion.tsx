"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQItem } from "./content";

interface FAQAccordionProps {
    items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
    const [openIds, setOpenIds] = useState<number[]>([]);

    const toggleExpand = (id: number) => {
        setOpenIds((currentOpenIds) =>
            currentOpenIds.includes(id)
                ? currentOpenIds.filter((openId) => openId !== id)
                : [...currentOpenIds, id]
        );
    };

    return (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="flex flex-col gap-10">
                {items.map((item) => (
                    <div key={item.id} className="border-b border-slate-300">
                        <button
                            onClick={() => toggleExpand(item.id)}
                            className="w-full flex items-start justify-between pt-5 pb-10 px-0 text-left hover:opacity-80 transition-opacity"
                            aria-expanded={openIds.includes(item.id)}
                        >
                            <h3 className="text-xl font-montserrat font-medium text-primary leading-6">
                                {item.question}
                            </h3>
                            <div className="shrink-0 ml-4">
                                {openIds.includes(item.id) ? (
                                    <Minus className="w-7 h-7 text-primary font-extrabold" />
                                ) : (
                                    <Plus className="w-7 h-7 text-primary font-extrabold" />
                                )}
                            </div>
                        </button>

                        {openIds.includes(item.id) && (
                            <div className="pb-5 px-0 animate-in fade-in duration-200">
                                <p className="text-[16px] text-slate-700 leading-7">
                                    {item.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
