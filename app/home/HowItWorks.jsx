"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    image: "/hero.png",
    title: "Understand Your Goals",
    description:
      "We start by learning about your business, objectives, and challenges to understand what truly matters to you.",
  },
  {
    number: "02",
    image: "/hero.png",
    title: "Plan & Strategize",
    description:
      "Our experts analyze insights and develop a customized strategy tailored to your goals.",
  },
  {
    number: "03",
    image: "/hero.png",
    title: "Collaborate & Execute",
    description:
      "We work closely with your team to implement the plan, ensuring seamless execution at every step.",
  },
  {
    number: "04",
    image: "/hero.png",
    title: "Achieve Greater Results",
    description:
      "We track progress, optimize performance, and help you unlock new opportunities for long-term growth.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* =========================
            HEADER
        ========================== */}

        <div className="mx-auto max-w-[800px] text-center">

          {/* Badge */}
          <div
            className="
              inline-flex
              rounded-full
              border
              border-[#d8e7fa]
              bg-[#f7fbff]
              px-4
              py-1.5
              text-[10px]
              font-semibold
              tracking-[0.4px]
              text-[#2d6fc4]
              sm:text-[11px]
            "
          >
            HOW IT WORKS
          </div>

          {/* Heading */}
          <h2
            className="
              mt-3
              text-[32px]
              font-bold
              leading-[1.05]
              tracking-[-1.2px]
              text-[#071b43]
              sm:text-[40px]
              lg:text-[44px]
            "
          >
            Connect, Collaborate, &amp; Create
            <br />

            <span className="text-[#2474dc]">
              Limitless Opportunities.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-3
              max-w-[650px]
              text-[11px]
              leading-[1.55]
              text-[#65758c]
              sm:text-[13px]
            "
          >
            Our simple and streamlined process helps you turn your goals
            into real results —
            <br className="hidden sm:block" />
            with the right strategy, the right people, and the right support.
          </p>
        </div>

        {/* =========================
            STEPS SECTION
        ========================== */}

        <div
          className="
            relative
            mt-8
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-3
          "
        >

          {/* =========================
              DOTTED CONNECTING LINE
          ========================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-[73px]
              hidden
              lg:block
            "
          >
            <svg
              viewBox="0 0 1000 80"
              className="h-[80px] w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M20 45
                  C120 5, 190 5, 270 45
                  C350 85, 420 85, 500 45
                  C580 5, 650 5, 730 45
                  C810 85, 880 85, 980 35
                "
                fill="none"
                stroke="#b9d7fa"
                strokeWidth="2"
                strokeDasharray="5 7"
              />
            </svg>
          </div>

          {/* =========================
              STEPS
          ========================== */}

          {steps.map((step, index) => (
            <Fragment key={step.number}>

              {/* Step Card */}

              <div
                className="
                  relative
                  z-10
                  mx-auto
                  w-full
                  max-w-[260px]
                  text-center
                "
              >

                {/* =========================
                    IMAGE
                ========================== */}

                <div className="relative mx-auto h-[145px] w-[190px]">

                  {/* Outer soft circle */}
                  <div
                    className="
                      absolute
                      inset-[3px]
                      rounded-full
                      bg-[#edf5ff]
                      shadow-[0_2px_10px_rgba(50,100,160,0.04)]
                    "
                  />

                  {/* Image */}
{/* Image Circle */}
<div
  className="
    absolute
    left-[20px]
    top-[8px]
    h-[130px]
    w-[130px]
    overflow-hidden
    rounded-full
  "
>
  <Image
    src={step.image}
    alt={step.title}
    fill
    sizes="130px"
    className="object-cover"
  />
</div>

                  {/* Number */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      z-20
                      flex
                      h-[44px]
                      w-[44px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#176de0]
                      text-[14px]
                      font-semibold
                      text-white
                      shadow-[0_4px_12px_rgba(23,109,224,0.22)]
                      sm:h-[46px]
                      sm:w-[46px]
                    "
                  >
                    {step.number}
                  </div>
                </div>

                {/* =========================
                    TITLE
                ========================== */}

                <h3
                  className="
                    mt-3
                    text-[15px]
                    font-bold
                    leading-[1.25]
                    tracking-[-0.3px]
                    text-[#071b43]
                    sm:text-[16px]
                  "
                >
                  {step.title}
                </h3>

                {/* =========================
                    DESCRIPTION
                ========================== */}

                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[235px]
                    text-[10px]
                    leading-[1.55]
                    text-[#65758c]
                    sm:text-[11px]
                  "
                >
                  {step.description}
                </p>

                {/* Bottom Line */}
                <div
                  className="
                    mx-auto
                    mt-3
                    h-[2px]
                    w-[46px]
                    bg-[#2878df]
                  "
                />
              </div>

              {/* =========================
                  ARROW BETWEEN STEPS
              ========================== */}

              {index < steps.length - 1 && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    z-20
                    hidden
                    lg:flex
                  "
                  style={{
                    left:
                      index === 0
                        ? "24.5%"
                        : index === 1
                        ? "49.5%"
                        : "74.5%",
                    top: "58px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    className="
                      flex
                      h-[34px]
                      w-[34px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#edf4fc]
                      bg-white
                      shadow-[0_3px_10px_rgba(50,100,160,0.08)]
                    "
                  >
                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                      className="text-[#2878df]"
                    />
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