import React from 'react'
import GeneralHeroSection from "@/components/GeneralComponents/GereralHeroSection";
import { ServicesHeroSectionContent } from '@/components/GeneralComponents/content';


const page = () => {
  return (
    <main className="min-h-screen m-auto bg-white">
      <GeneralHeroSection  {...ServicesHeroSectionContent} />
    </main>
  )
}

export default page
