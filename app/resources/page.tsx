import React from 'react'
import GeneralHeroSection from "@/components/GeneralComponents/GereralHeroSection";
import { ResourcesHeroSectionContent } from '@/components/GeneralComponents/content';


const page = () => {
  return (
    <main className="min-h-screen m-auto bg-white">
      <GeneralHeroSection  {...ResourcesHeroSectionContent} />
    </main>
  )
}

export default page
