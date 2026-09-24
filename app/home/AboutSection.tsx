"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Strategic",
    subtitle: "Advisory",
    description: "Data-driven strategies for measurable growth.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    subtitle: "Partnership",
    description: "A relationship built on integrity and trust.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    subtitle: "Approach",
    description: "Your goals, our priority in every decision.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Background Shape */}
      <div
        className="
          absolute right-0 top-0
          h-[220px] w-[180px]
          bg-[#f3f7fd]
          [clip-path:polygon(35%_0,100%_0,100%_100%)]
          sm:h-[300px] sm:w-[240px]
          lg:h-[420px] lg:w-[330px]
        "
      />

      <div
        className="
          relative z-10 mx-auto w-full max-w-[1440px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-[75px]
        "
      >
        <div
          className="
            grid items-center
            gap-10
            lg:grid-cols-[48%_52%]
            lg:gap-0
          "
        >
          {/* =====================================================
              LEFT IMAGE
          ====================================================== */}
          <div className="relative mx-auto w-full max-w-[570px]">
            <div
              className="
                relative
                h-[330px]
                w-full
                overflow-hidden
                rounded-[22px]
                sm:h-[400px]
                lg:h-[490px]
              "
            >
              {/* Main Image */}
              <Image
                src="/about.png"
                alt="PrimeCore Investment Advisors"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* =================================================
                  TOP RIGHT BLUE SHAPE
              ================================================== */}
              <div
                className="
                  absolute right-0 top-0
                  h-[80px] w-[125px]
                  bg-[#2d6fc4]
                  [clip-path:polygon(0_0,65%_0,100%_100%,35%_100%)]
                  sm:h-[105px] sm:w-[155px]
                  lg:h-[125px] lg:w-[180px]
                "
              />

              {/* White diagonal */}
              <div
                className="
                  absolute
                  right-[75px]
                  top-[-25px]
                  h-[150px]
                  w-[13px]
                  rotate-[-40deg]
                  bg-white
                  sm:right-[95px]
                "
              />

              {/* =================================================
                  BOTTOM LEFT BLUE SHAPE
              ================================================== */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-[130px] w-[160px]
                  bg-[#2d6fc4]
                  [clip-path:polygon(0_0,20%_0,100%_100%,0_100%)]
                  sm:h-[165px] sm:w-[195px]
                  lg:h-[180px] lg:w-[210px]
                "
              >
                <div
                  className="
                    absolute bottom-7 left-5
                    sm:bottom-8 sm:left-6
                  "
                >
                  <p
                    className="
                      text-[11px]
                      font-medium
                      leading-[1.55]
                      text-white
                      sm:text-[13px]
                    "
                  >
                    Building
                    <br />
                    Stronger
                    <br />
                    Futures
                  </p>

                  <div className="mt-3 h-[1px] w-[28px] bg-white" />
                </div>
              </div>

              {/* =================================================
                  WHITE DIAGONAL LINES
              ================================================== */}
              <div
                className="
                  absolute
                  bottom-[-45px]
                  left-[52%]
                  h-[150px]
                  w-[14px]
                  rotate-[42deg]
                  bg-white
                "
              />

              <div
                className="
                  absolute
                  bottom-[-45px]
                  left-[68%]
                  h-[150px]
                  w-[13px]
                  rotate-[42deg]
                  bg-white
                "
              />

              {/* =================================================
                  30+ EXPERIENCE CARD
              ================================================== */}
              <div
                className="
                  absolute
                  bottom-[18px]
                  right-[25px]
                  z-20
                  flex
                  h-[115px]
                  w-[135px]
                  flex-col
                  justify-center
                  rounded-[7px]
                  bg-[#286bc5]
                  px-5
                  text-white
                  shadow-[0_8px_25px_rgba(20,70,140,0.20)]
                  sm:bottom-[25px]
                  sm:right-[35px]
                  sm:h-[135px]
                  sm:w-[150px]
                  lg:h-[140px]
                "
              >
                <h3
                  className="
                    text-[30px]
                    font-bold
                    leading-none
                    sm:text-[34px]
                  "
                >
                  30+
                </h3>

                <p
                  className="
                    mt-2
                    text-[10px]
                    leading-[1.5]
                    text-white
                    sm:text-[12px]
                  "
                >
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}
          <div
            className="
              relative z-20
              w-full
              lg:pl-7
              xl:pl-10
            "
          >
            {/* ABOUT US */}
            <div
              className="
                inline-flex
                rounded-full
                border
                border-[#c9dcf6]
                bg-white
                px-4
                py-1.5
                text-[10px]
                font-semibold
                tracking-[0.5px]
                text-[#2d6fc4]
                sm:text-[11px]
              "
            >
              ABOUT US
            </div>

            {/* Heading */}
            <h2
              className="
                mt-4
                max-w-[650px]
                text-[34px]
                font-bold
                leading-[1.05]
                tracking-[-1.5px]
                text-[#07152f]
                sm:text-[42px]
                lg:text-[46px]
                xl:text-[50px]
              "
            >
              Empowering Businesses
              <br />
              To Grow{" "}
              <span className="text-[#2d6fc4]">
                Smarter
              </span>
            </h2>

            {/* Blue Line */}
            <div className="mt-5 h-[3px] w-[55px] bg-[#2d6fc4]" />

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[650px]
                text-[12px]
                leading-[1.65]
                text-[#53647d]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              At PrimeCore, we are committed to helping businesses and
              individuals make informed financial decisions. With deep
              market knowledge and a client-first approach, we provide
              tailored investment advisory solutions designed to create
              long-term value and sustainable growth.
            </p>

            {/* =================================================
                FEATURES
            ================================================== */}
            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-3
                sm:gap-0
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className={`
                      flex
                      items-start
                      gap-3
                      ${
                        index !== 0
                          ? "border-t border-[#dce4ef] pt-5 sm:border-l sm:border-t-0 sm:pt-0"
                          : ""
                      }
                      ${
                        index === 0
                          ? "sm:pr-4"
                          : "sm:px-4"
                      }
                    `}
                  >
                    {/* Icon Circle */}
                    <div
                      className="
                        flex
                        h-[47px]
                        w-[47px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#eaf2ff]
                      "
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                        className="text-[#2d6fc4]"
                      />
                    </div>

                    {/* Feature Text */}
                    <div>
                      <h3
                        className="
                          text-[11px]
                          font-bold
                          leading-[1.3]
                          text-[#17243a]
                          sm:text-[12px]
                        "
                      >
                        {feature.title}
                        <br />
                        {feature.subtitle}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[145px]
                          text-[9px]
                          leading-[1.5]
                          text-[#69788e]
                          sm:text-[10px]
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                BOTTOM CTA
            ================================================== */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
              "
            >
              {/* Know More */}
              <Link
                href="/about"
                className="
                  flex
                  h-[47px]
                  w-full
                  max-w-[210px]
                  items-center
                  justify-center
                  gap-5
                  rounded-[5px]
                  bg-[#2d6fc4]
                  px-6
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-[0_5px_15px_rgba(45,111,196,0.18)]
                  transition
                  hover:bg-[#245fa9]
                "
              >
                Know More

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                />
              </Link>

              {/* Divider */}
              <div className="hidden h-[42px] w-[1px] bg-[#9ba8ba] sm:block" />

              {/* Bottom Text */}
              <p
                className="
                  text-[10px]
                  font-medium
                  leading-[1.5]
                  text-[#68778d]
                  sm:text-[11px]
                "
              >
                Turn Your Financial Goals
                <br />
                Into Real Opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;