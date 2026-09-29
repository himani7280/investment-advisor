import React from "react";
import Image from "next/image";

const OurLocation = () => {
  return (
    <section className="w-full bg-white px-4 pt-10 pb-6 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-[1200px]">

        <div className="mb-5">
          <div className="mb-2 flex items-center gap-4">
            <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
              OUR LOCATION
            </span>

            <span className="h-[2px] w-16 bg-[#3478e5]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#102b66] sm:text-4xl">
            Find Us{" "}
            <span className="text-[#1265e8]">Here</span>
          </h2>

          <p className="mt-2 max-w-[620px] text-sm leading-6 text-[#71809d] sm:text-base">
            Visit our office for a face-to-face consultation. We&apos;d love to
            meet you and help you plan a brighter financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2.5fr_1fr]">

          <div className="relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[310px]">
  <iframe
    src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="PrimeCore Investment Advisors Location"
    className="h-full w-full"
  />
</div>

          <div className="relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[310px]">
            <Image
              src="/contact/office.png"
              alt="PrimeCore Investment Advisors office"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-8">
              <h3 className="max-w-[230px] text-2xl font-bold leading-tight text-white sm:text-[25px]">
                Your Financial
                <br />
                Future Starts
                <br />
                Here.
              </h3>

              <div className="my-5 h-[2px] w-10 bg-white" />

              <p className="text-base leading-6 text-white">
                Plan. Invest. Grow.
                <br />
                With Confidence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurLocation;