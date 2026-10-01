"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    image: "/goal1.png",
    title: "Understand Your Goals",
    description:
      "We start by learning about your business, objectives, and challenges to understand what truly matters to you.",
  },
  {
    number: "02",
    image: "/goal2.png",
    title: "Plan & Strategize",
    description:
      "Our experts analyze insights and develop a customized strategy tailored to your goals.",
  },
  {
    number: "03",
    image: "/goal3.png",
    title: "Collaborate & Execute",
    description:
      "We work closely with your team to implement the plan, ensuring seamless execution at every step.",
  },
  {
    number: "04",
    image: "/team1.png",
    title: "Achieve Greater Results",
    description:
      "We track progress, optimize performance, and help you unlock new opportunities for long-term growth.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 pb-5 sm:py-8 sm:pb-6 lg:py-14 lg:pb-10">
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-6 lg:px-4">
        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex rounded-full border border-[#d8e7fa] bg-[#f7fbff] px-3 py-1.5 text-[9px] font-semibold tracking-[0.3em] text-[#2d6fc4] sm:px-4 sm:text-[10px]">
            HOW IT WORKS
          </div>

          <h2 className="mt-4 text-[24px] font-bold leading-[1.12] tracking-[-0.06em] text-[#071b43] sm:text-[32px] md:text-[38px] lg:text-[44px]">
            Connect, Collaborate, &amp; Create
            <br className="hidden sm:block" />
            <span className="text-[#2474dc]">Limitless Opportunities.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[10px] leading-[1.6] text-[#65758c] sm:text-[12px] lg:text-[13px]">
            Our simple and streamlined process helps you turn your goals into real results —
            <br className="hidden sm:block" />
            with the right strategy, the right people, and the right support.
          </p>
        </div>

        <div className="relative mt-8 grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-0">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[42px] hidden lg:block">
            <svg
              viewBox="0 0 1000 80"
              className="h-[90px] w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="M20 45 C120 5, 190 5, 270 45 C350 85, 420 85, 500 45 C580 5, 650 5, 730 45 C810 85, 880 85, 980 35"
                fill="none"
                stroke="#b9d7fa"
                strokeWidth="2"
                strokeDasharray="5 7"
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <div className="relative z-10 mx-auto w-full max-w-[260px] text-center">
                <div className="relative mx-auto h-[120px] w-[140px] sm:h-[140px] sm:w-[170px] lg:h-[150px] lg:w-[190px]">
                  <div className="absolute inset-[2px] rounded-full bg-[#edf5ff] shadow-[0_2px_10px_rgba(50,100,160,0.04)] sm:inset-[3px]" />

                  <div className="absolute left-[12px] top-[6px] h-[100px] w-[100px] overflow-hidden rounded-full sm:left-[18px] sm:top-[8px] sm:h-[120px] sm:w-[120px] lg:left-[20px] lg:h-[130px] lg:w-[130px]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 130px"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute left-0 top-0 z-20 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#176de0] text-[12px] font-semibold text-white shadow-[0_4px_12px_rgba(23,109,224,0.22)] sm:h-[42px] sm:w-[42px] sm:text-[13px] lg:h-[46px] lg:w-[46px] lg:text-[14px]">
                    {step.number}
                  </div>
                </div>

                <h3 className="mt-3 text-[14px] font-bold leading-[1.25] tracking-[-0.03em] text-[#071b43] sm:text-[16px] lg:text-[17px]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[235px] text-[10px] leading-[1.55] text-[#65758c] sm:text-[11px] lg:text-[12px]">
                  {step.description}
                </p>

                <div className="mx-auto mt-3 h-[2px] w-[36px] bg-[#2878df] sm:w-[42px] lg:w-[46px]" />
              </div>

              {index < steps.length - 1 && (
                <div
                  className="pointer-events-none absolute z-20 hidden lg:flex"
                  style={{
                    left: index === 0 ? "24.5%" : index === 1 ? "49.5%" : "74.5%",
                    top: "58px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#edf4fc] bg-white shadow-[0_3px_10px_rgba(50,100,160,0.08)]">
                    <ArrowRight size={16} strokeWidth={1.8} className="text-[#2878df]" />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;