"use client";

import Image from "next/image";
import Link from "next/link";
import about from "../../public/about.png";
import { ArrowRight, BarChart3, ShieldCheck, Users } from "lucide-react";

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
    <section className="relative w-full overflow-hidden bg-white pt-6 sm:pt-8 lg:pt-16">
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
          <div className="relative mx-auto w-full max-w-[570px]">
            <div
              className="
                relative
                h-[330px]
                w-full
                overflow-hidden
                rounded-[22px]
                sm:h-[400px]
                lg:h-[580px]
              "
            >
              <Image
                src={about}
                alt="PrimeCore Investment Advisors"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div
            className="
              relative z-20
              w-full
              lg:pl-7
              xl:pl-10
            "
          >
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

            <h2
              className="
    mt-4
    max-w-[650px]
    text-[30px]
    font-bold
    leading-[1.1]
    tracking-[-1px]
    text-[#07152f]
    sm:text-[36px]
    lg:text-[40px]
    xl:text-[44px]
  "
            >
              Empowering Businesses
              <br />
              To Grow <span className="text-[#2d6fc4]">Smarter</span>
            </h2>

            <div className="mt-5 h-[3px] w-[55px] bg-[#2d6fc4]" />

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
              individuals make informed financial decisions. With deep market
              knowledge and a client-first approach, we provide tailored
              investment advisory solutions designed to create long-term value
              and sustainable growth.
            </p>

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
    min-w-0
    items-start
    gap-3
    ${index !== 0
                        ? "border-t border-[#dce4ef] pt-5 sm:border-l sm:border-t-0 sm:pt-0"
                        : ""
                      }
    ${index === 0 ? "sm:pr-4" : "sm:px-4"}
  `}
                  >
                    {/* Icon */}
                    <div
                      className="
      flex
      h-[44px]
      w-[44px]
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-[#dfeafc]
      sm:h-[47px]
      sm:w-[47px]
    "
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="text-[#2d6fc4]"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      {/* Title */}
                      <h3
                        className="
        whitespace-nowrap
        text-[11px]
        font-bold
        leading-[1.35]
        text-[#17243a]
        sm:text-[14px]
      "
                      >
                        {feature.title}
                      </h3>

                      {/* Subtitle */}
                      <h3
                        className="
        whitespace-nowrap
        text-[11px]
        font-bold
        leading-[1.35]
        text-[#17243a]
        sm:text-[14px]
      "
                      >
                        {feature.subtitle}
                      </h3>

                      {/* Description - 2 lines */}
                      <p
                        className="
        mt-2
        max-w-[150px]
        text-[9px]
        leading-[1.5]
        text-[#69788e]
        sm:max-w-[155px]
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
                <ArrowRight size={18} strokeWidth={1.8} />
              </Link>

              <div className="hidden h-[42px] w-[1px] bg-[#9ba8ba] sm:block" />

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
