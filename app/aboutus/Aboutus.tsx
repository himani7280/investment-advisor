import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[410px] lg:h-[420px]">

            {/* Main Image */}
            <div className="relative h-full w-full overflow-hidden rounded-[25px]">
              <Image
                src="/about.png"
                alt="Business professionals"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Top Blue Shape */}
            <div className="absolute -right-1 top-0 hidden h-16 w-28 rotate-[-8deg] rounded-bl-[18px] rounded-br-[18px] bg-blue-600 sm:block" />

            {/* Top White Shape */}
            <div className="absolute -right-5 top-8 hidden h-7 w-36 rotate-[45deg] bg-white sm:block" />

            {/* Bottom Left Blue Card */}
            <div className="absolute bottom-0 left-0 flex h-[135px] w-[155px] flex-col justify-end rounded-tr-[25px] bg-blue-600 p-5 text-white sm:h-[155px] sm:w-[180px]">
              <p className="text-xs leading-5 sm:text-sm">
                Building
                <br />
                Stronger
                <br />
                Futures
              </p>

              <div className="mt-2 h-[2px] w-9 bg-white" />
            </div>

            {/* Experience Card */}
            <div className="absolute bottom-0 right-4 flex h-[105px] w-[135px] flex-col items-center justify-center rounded-lg bg-blue-600 text-center text-white shadow-lg sm:right-6 sm:h-[120px] sm:w-[145px]">
              <h3 className="text-2xl font-bold sm:text-3xl">
                30+
              </h3>

              <p className="mt-1 text-xs leading-4 sm:text-sm">
                Years of
                <br />
                Experience
              </p>
            </div>

            {/* Bottom White Shape */}
            <div className="absolute -bottom-8 left-[42%] hidden h-28 w-7 rotate-[40deg] bg-white sm:block" />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex h-[380px] flex-col justify-center sm:h-[410px] lg:h-[420px]">

            {/* Label */}
            <div className="mb-3 inline-flex w-fit rounded-full border border-blue-300 px-4 py-1">
              <span className="text-xs font-semibold tracking-wide text-blue-600">
                ABOUT US
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[520px] text-3xl font-bold leading-[1.15] text-slate-900 sm:text-4xl lg:text-[42px]">
              Empowering Businesses
              <br />
              To Grow{" "}
              <span className="text-blue-600">
                Smarter
              </span>
            </h2>

            {/* Blue Line */}
            <div className="mb-4 mt-4 h-[3px] w-12 bg-blue-600" />

            {/* Paragraphs */}
            <div className="max-w-[570px] space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px]">
              <p>
                At PrimeCore, we are committed to helping businesses and
                individuals make informed financial decisions. With deep market
                knowledge and a client-first approach, we provide tailored
                investment advisory solutions designed to create long-term
                value and sustainable growth.
              </p>

              <p>
                At PrimeCore, we are committed to helping businesses and
                individuals make informed financial decisions. With deep market
                knowledge and a client-first approach, we provide tailored
                investment advisory solutions designed to create long-term
                value and sustainable growth.
              </p>

              <p>
                At PrimeCore, we are committed to helping businesses and
                individuals make informed financial decisions. With deep market
                knowledge and a client-first approach, we provide tailored
                investment advisory solutions designed to create long-term
                value and sustainable growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutus;