import PricingSection from "@/components/PricingComponent/PricingSection";
import { pricingSectionContent } from "./content";
import { getMetaDataBySlug, getMetadata } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getMetaDataBySlug("page", "pricing");
  return getMetadata(data, "https://drshreyankeducare.com/pricing");
}
import LearningProcess from "@/components/LearningProcess";

const PricingPage = () => {
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
                        cards={pricingSectionContent.cards}
                    />
                    <div className="max-w-324 h-auto flex flex-col gap-45 align-middle justify-center-safe">
                        <LearningProcess />
                    </div>
                </main>

            </section>

        </>

    );
}

export default PricingPage;