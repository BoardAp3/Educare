import React from 'react'
import GeneralHeroSection from "@/components/GeneralComponents/GereralHeroSection";
import { ResourcesHeroSectionContent } from '@/components/GeneralComponents/content';
import { getMetaDataBySlug, getMetadata } from "@/utils/seoBuilder";

export async function generateMetadata() {
  const data = await getMetaDataBySlug("page", "resources");
  return getMetadata(data, "https://drshreyankeducare.com/resources");
}
import ResourcesTabsSection from '@/components/ResourcesPageComponents/ResourcesTabsSection';


const page = () => {
  return (
    <>
      <GeneralHeroSection  {...ResourcesHeroSectionContent} />
      <main className="min-h-screen max-w-467.5  px-4 sm:px-6 py-16 m-auto bg-white">
          <ResourcesTabsSection />
      </main>
    </>
  )
}

export default page
