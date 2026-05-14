import Image from "next/image";
import { Layers } from "lucide-react";
import { keySectionContent } from "./content";

const iconMap: Record<string, typeof Layers> = {
    layers: Layers,
};

const KeySection = () => {
    const Icon = iconMap[keySectionContent.icon] ?? Layers;

    return (
        <div className="max-w-[1296px] w-full mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 xl:grid-cols-[1.3fr_0.95fr_0.75fr] gap-10 py-10 lg:py-14">
                <div className="flex items-start gap-[10px]">
                    <div className="relative rounded-[8px] overflow-hidden flex-1 h-[684px]">
                        <Image
                            src={keySectionContent.imageUrl}
                            alt={keySectionContent.imageAlt}
                            fill
                            className="object-cover object-left-top h-full w-full"
                            priority
                        />
                    </div>
                    <div className="w-[49px] h-[44px] rounded-[8px] bg-yellow-light text-slate-900 flex items-center justify-center shadow-lg border border-slate-200">
                        <Icon className="w-[24px] h-[24px]" />
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="max-w-lg">
                        <h2 className="text-4xl sm:text-[32px] font-bricolage font-normal text-slate-900 leading-10 mb-5">
                            {keySectionContent.heading}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-700 leading-7">
                            {keySectionContent.description}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-10">
                    {keySectionContent.cards.map((card, index) => (
                        <div key={index} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                            <div className="inline-block border-b-2 border-yellow-light pb-1 mb-4">
                                <h3 className="text-[20px] font-bricolage font-display font-normal text-slate-900">
                                    {card.title}
                                </h3>
                            </div>
                            <p className="text-base text-slate-700 leading-7">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeySection;
