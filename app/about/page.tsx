import GeneralHeroSection from "@/components/GeneralComponents/GereralHeroSection";
import OurApproach from "@/components/aboutUsComponents/OurApproach";
import MakesUsDifferenceSection from "@/components/aboutUsComponents/MakesUsDifferenceSection";
import LearningProcess from "@/components/LearningProcess";
import TrustedCompanySection from "@/components/aboutUsComponents/TrustedCompanySection";
import { AboutHeroSectionContent } from "@/components/GeneralComponents/content";
import ReadAboutTutors from "@/components/aboutUsComponents/ReadAboutTutors";
import { getMetaDataBySlug, getMetadata } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getMetaDataBySlug("page", "about");
  return getMetadata(data, "https://drshreyankeducare.com/about");
}

 const AboutUs = () => {
  return (
    <>
    <GeneralHeroSection  {...AboutHeroSectionContent} />
    <main className="min-h-screen m-auto bg-white">
      <div className="max-w-324 h-auto flex flex-col gap-45 align-middle justify-center-safe">
        <MakesUsDifferenceSection />
        <LearningProcess />
        <ReadAboutTutors />
        <TrustedCompanySection />
      {/* <OurApproach/> */}
      </div>
    </main>
    </>
    
  );
}

export default AboutUs;