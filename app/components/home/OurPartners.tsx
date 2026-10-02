import Image from "next/image";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.partners;
const partners = content.items;

const OurPartners = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-6 sm:pt-8 md:pt-10 lg:pt-12">
      {/* Background Decorative Dots */}
      <div className="absolute left-8 top-16 hidden sm:block">
        <div className="grid grid-cols-5 gap-[10px]">
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="h-[4px] w-[4px] rounded-full bg-[#b8d4fa]"
            />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 mx-auto max-w-[850px] px-4 text-center">
        <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
          <span className="h-[2px] w-[53px] bg-[#2778e8]" />
          <span className="text-[12px] font-semibold tracking-[1.5px] text-[#2778e8]">
            {content.badge}
          </span>
          <span className="h-[2px] w-[53px] bg-[#2778e8]" />
        </div>

        <h2 className="text-[28px] font-bold leading-tight text-[#092452] sm:text-[40px] lg:text-[46px]">
          <span className="whitespace-pre-line">{content.titleStart}</span>{" "}
          <span className="text-[#1474e8]">
            {content.titleHighlight}
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-[650px] text-[14px] leading-[1.5] text-[#7385a1] sm:mt-4 sm:text-[15px]">
          {content.description}
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-4 max-w-[1160px] px-4 sm:mt-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 min-[420px]:grid-cols-2 sm:grid-cols-3 sm:gap-x-2 sm:gap-y-2 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex h-[120px] min-w-0 items-center justify-center rounded-md px-1 sm:h-[144px] sm:px-2"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={300}
                height={120}
                className="h-full w-full scale-105 object-contain mix-blend-multiply transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;