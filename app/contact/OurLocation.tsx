import React from "react";
import Image from "next/image";
import { investmentContent } from "../data/investmentContent";

const OurLocation = () => {
  const content = investmentContent.contactLocation;

  return (
    <section className="w-full bg-white px-4 pt-10 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-[1200px]">

        <div className="mb-5">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
              {content.badge}
            </span>

            <span className="h-[2px] w-16 bg-[#3478e5]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#102b66] sm:text-4xl">
            {content.titleStart}{" "}
            <span className="text-[#1265e8]">{content.titleHighlight}</span>
          </h2>

          <p className="mt-2 max-w-[620px] text-sm leading-6 text-[#71809d] sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2.5fr_1fr]">

          <div className="relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[310px]">
  <iframe
    src={content.mapUrl}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title={content.mapTitle}
    className="h-full w-full"
  />
</div>

          <div className="relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[310px]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-8">
              <h3 className="max-w-[230px] text-2xl font-bold leading-tight text-white sm:text-[25px]">
                <span className="whitespace-pre-line">{content.cardTitle}</span>
              </h3>

              <div className="my-5 h-[2px] w-10 bg-white" />

              <p className="text-base leading-6 text-white">
                <span className="whitespace-pre-line">{content.cardDescription}</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurLocation;