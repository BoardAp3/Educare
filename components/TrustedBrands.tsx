/** @format */

import Image from "next/image";

const brands = [
  { src: "/assets/brand-1.png", alt: "Simon Fraser University" },
  { src: "/assets/band-2.png", alt: "Capilano University" },
  { src: "/assets/brand-3.png", alt: "University of Waterloo" },
  { src: "/assets/brand-4.png", alt: "Carleton University" },
  { src: "/assets/brand-5.png", alt: "McGill University" },
  { src: "/assets/brand-6.png", alt: "University of Ottawa" },
];

export default function TrustedBrands() {
  return (
    <section className="py-12 bg-white flex justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="bg-white rounded-[20px] shadow-[0px_0px_30px_0px_#57575614] p-10 text-center">
          <h2 className="text-[24px] font-bricolage font-display font-medium text-slate mb-10">
            Trusted By Students All Around Canada
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[56px] w-[180px]"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={180}
                  height={56}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
