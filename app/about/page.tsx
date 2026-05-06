import AboutHeroSection from "@/components/aboutUsComponents/AboutHeroSection";
import OurApproach from "@/components/aboutUsComponents/OurApproach";
import MakesUsDifferenceSection from "@/components/aboutUsComponents/MakesUsDifferenceSection";
import LearningProcess from "@/components/LearningProcess";
import TrustedCompanySection from "@/components/aboutUsComponents/TrustedCompanySection";
import { LayoutGrid, BookOpen, Zap } from "lucide-react";

 const AboutUs = () => {
  return (
    <main className="min-h-screen m-auto bg-white">
      <AboutHeroSection />
      <div className="max-w-324 h-auto flex flex-col gap-45 align-middle justify-center-safe">
        <MakesUsDifferenceSection />
        <LearningProcess />
        <TrustedCompanySection />
      <OurApproach/>
      </div>
    </main>
  );
}

export default AboutUs;