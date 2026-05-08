import Image from "next/image";

function TrustedCompanySection() {
  const universities = [
    {
      name: "Simon Fraser University",
      logo: "/assets/aboutUsPage/SFU_horizontal.webp",
      width: 150,
      height: 60,
    },
    {
      name: "Capilano University",
      logo: "/assets/aboutUsPage/capilano.webp",
      width: 150,
      height: 60,
    },
    {
      name: "University of Waterloo",
      logo: "/assets/aboutUsPage/UniversityOfWaterloo.webp",
      width: 150,
      height: 60,
    },
    {
      name: "Carleton University",
      logo: "/assets/aboutUsPage/carleton.webp",
      width: 150,
      height: 60,
    },
    {
      name: "McGill University",
      logo: "/assets/aboutUsPage/mcgill.webp",
      width: 150,
      height: 60,
    },
    {
      name: "University of Ottawa",
      logo: "/assets/aboutUsPage/uowtava.webp",
      width: 150,
      height: 60,
    },
  ];

  return (
    <section className="py-8 md:py-12 px-4 bg-bg-grey shadow-[0px_0px_50px_0px_rgba(87,87,86,0.12)] flex flex-col items-center gap-8 md:gap-10">
      <h2 className="text-2xl md:text-[32px] leading-snug font-bricolage font-display text-slate text-center">
        Trusted By Students All Around Canada
      </h2>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="
                flex justify-center items-center
                w-[45%] sm:w-[30%] md:w-auto
              "
            >
              <Image
                src={uni.logo}
                alt={uni.name}
                width={uni.width}
                height={uni.height}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanySection;