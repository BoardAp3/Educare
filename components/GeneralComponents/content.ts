/** @format */

export interface GeneralHeroSectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonVisiblity?: boolean;
  image?: {
    src: string;
    alt: string;
    href?: string;
  };
}

export const AboutHeroSectionContent = {
  heading: "A More Focused Approach to Learning, That Delivers Real Results",
  description:
    "At Dr. Shreyank Educare, we help students move beyond confusion and build true understanding through structured, personalized, and engaging learning experiences.",
  buttonText: "Get a free consultation",
  buttonVisiblity: true, // This is just for an example, if you want to hide the button for this section, set it to false. (default if true)
  image: {
    src: "aboutUsPage/AboutHeroImg.webp",
    alt: "About Us Hero Image",
    href: "/contact",
  },
};

export const ServicesHeroSectionContent = {
  heading: "Customized Tutoring,\n for Academic Excellence",
  description:
    "From personalized tutoring to structured exam preparation and summer programs, we provide the right support at every stage of your academic journey.",
  buttonText: "Get a free consultation",
  image: {
    src: "servicesPage/ServicesHeroImg.webp",
    alt: "About Us Hero Image",
    href: "/contact",
  },
};

export const ResourcesHeroSectionContent = {
  heading: "Resources Designed to Help\n Students Learn Smarter",
  description:
    "Explore helpful study materials, watch real tutoring sessions, and get answers to common questions , all designed to support students beyond the classroom.",
  buttonText: "Get a free consultation",
  buttonVisiblity: false,
  image: {
    src: "servicesPage/ServicesHeroImg.webp",
    alt: "About Us Hero Image",
    href: "/contact",
  },
};

export const ProgramsHeroSectionContent = {
  heading: "Find A Program,\nThat Works Best For You!",
  description:
    "Build strong academic foundations with personalized tutoring designed\nto simplify concepts, improve problem-solving, and boost performance\nacross school and university levels.",
  buttonText: "Get A Free Consultation",
  buttonVisiblity: true,
  image: {
    src: "programsHeroImage.jpg",
    alt: "Programs Hero Image",
    href: "/contact",
  },
};
