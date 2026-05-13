import React from 'react'
import GeneralHeroSection from "@/components/GeneralComponents/GereralHeroSection";
import { ServicesHeroSectionContent } from '@/components/GeneralComponents/content';
import { getMetaDataBySlug, getMetadata } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getMetaDataBySlug("page", "services");
  return getMetadata(data, "https://drshreyankeducare.com/services");
}


const page = () => {
  return (
    <main className="min-h-screen m-auto bg-white">
      <GeneralHeroSection  {...ServicesHeroSectionContent} />
    </main>
  )
}

export default page
