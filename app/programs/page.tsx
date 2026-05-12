import React from "react";
import GeneralHeroSection from "@/components/GeneralComponents/GereralHeroSection";
import { ProgramsHeroSectionContent } from "@/components/GeneralComponents/content";
import ProgramsSection from "@/components/programsComponents/ProgramsSection";

const ProgramsPage = () => {
  return (
    <>
      <GeneralHeroSection {...ProgramsHeroSectionContent} />
      <main className="min-h-screen m-auto bg-white">
        <ProgramsSection />
      </main>
    </>
  );
};

export default ProgramsPage;
