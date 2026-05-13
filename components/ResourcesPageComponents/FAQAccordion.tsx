"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQItem } from "./faqData";

interface FAQAccordionProps {
    items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="space-y-0 max-w-3xl">
            {items.map((item) => (
                <div key={item.id} className="border-b border-slate-300">
                    <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-full flex items-center justify-between py-5 px-0 text-left hover:opacity-80 transition-opacity"
                        aria-expanded={expandedId === item.id}
                    >
                        <h3 className="text-lg font-medium text-primary leading-6">
                            {item.question}
                        </h3>
                        <div className="shrink-0 ml-4">
                            {expandedId === item.id ? (
                                <Minus className="w-6 h-6 text-primary" />
                            ) : (
                                <Plus className="w-6 h-6 text-primary" />
                            )}
                        </div>
                    </button>

                    {expandedId === item.id && (
                        <div className="pb-5 px-0 animate-in fade-in duration-200">
                            <p className="text-base text-slate-700 leading-7">
                                {item.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
