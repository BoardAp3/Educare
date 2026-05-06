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
    <section className="py-12  bg-bg-grey shadow-[0px_0px_50px_0px_rgba(87,87,86,0.12)] mx-auto flex flex-col items-center gap-10">
        <h2 className="text-[32px] leading-10 font-bricolage font-display font-normal text-slate text-center">
          Trusted By Students All Around Canada
        </h2>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-324 h-14 rounded-lg px-10 gap-6 flex items-center justify-center">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-auto w-auto"
            >
              <Image
                src={uni.logo}
                alt={uni.name}
                width={uni.width}
                height={uni.height}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanySection;
