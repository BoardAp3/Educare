import PricingSection from "@/components/PricingComponent/PricingSection";
import { pricingSectionContent } from "./content";

export default function PricingPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center justify-center">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 z-0 opacity-100 pointer-events-none"
                    style={{
                        backgroundImage: `url('/backgrounds/yellowGrid.svg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <main className="min-h-screen bg-white">
                    <PricingSection
                        heading={pricingSectionContent.heading}
                        subheading={pricingSectionContent.subheading}
                        cards={pricingSectionContent.cards as any}
                    />
                </main>
            </section>



        </>

    );
}
