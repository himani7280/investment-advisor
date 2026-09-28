"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Shield,
  FileText,
  Globe2,
  Users,
  PieChart,
  Sprout,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Investment",
    subtitle: "Advisory",
    description: "Data-driven strategies to grow your wealth.",
  },
  {
    icon: Shield,
    title: "Wealth",
    subtitle: "Management",
    description: "Preserve, grow, and transfer your wealth.",
  },
  {
    icon: FileText,
    title: "Financial",
    subtitle: "Planning",
    description: "Personalized plans for every life stage.",
  },
  {
    icon: Globe2,
    title: "Global",
    subtitle: "Opportunities",
    description: "Access international markets with confidence.",
  },
  {
    icon: Users,
    title: "Retirement",
    subtitle: "Planning",
    description: "Build a secure and independent future.",
  },
  {
    icon: PieChart,
    title: "Risk",
    subtitle: "Management",
    description: "Identify, assess, and minimize financial risks.",
  },
  {
    icon: Sprout,
    title: "Tax",
    subtitle: "Consulting",
    description: "Smarter tax solutions for higher savings.",
  },
  {
    icon: Handshake,
    title: "Business",
    subtitle: "Advisory",
    description: "Strategic support to accelerate growth.",
  },
];

const ServiceSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-6 sm:pt-8 lg:pt-16 ">
      <div
        className="
          absolute right-0 top-0
          h-[180px] w-[150px]
          bg-[#f4f8fd]
          [clip-path:polygon(35%_0,100%_0,100%_100%)]
          sm:h-[260px] sm:w-[220px]
          lg:h-[350px] lg:w-[290px]
        "
      />

      <div
        className="
          relative z-10 mx-auto w-full max-w-[1440px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-[36px]
        "
      >
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[34%_66%]
            lg:gap-5
          "
        >
          
          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              className="
                relative
                h-[340px]
                w-full
                overflow-hidden
                rounded-[18px]
                sm:h-[400px]
                lg:h-[440px]
              "
            >
              <Image
                src="/service.png"
                alt="PrimeCore Financial Services"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-white/5" />

             
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-[75px]
                  w-[120px]
                  bg-[#1264d4]
                  [clip-path:polygon(0_0,72%_0,100%_100%,35%_100%)]
                  sm:h-[95px]
                  sm:w-[145px]
                  lg:h-[105px]
                  lg:w-[160px]
                "
              />

              <div
                className="
                  absolute
                  right-[73px]
                  top-[-18px]
                  h-[130px]
                  w-[12px]
                  rotate-[-40deg]
                  bg-white
                  sm:right-[90px]
                "
              />

              
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[170px]
                  w-[210px]
                  bg-[#063b80]
                  [clip-path:polygon(0_0,17%_0,100%_100%,0_100%)]
                  sm:h-[190px]
                  sm:w-[235px]
                  lg:h-[205px]
                  lg:w-[255px]
                "
              >
                <div
                  className="
                    absolute
                    bottom-7
                    left-6
                    sm:bottom-8
                    sm:left-7
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
                    Strategic
                    <br />
                    Guidance
                    <br />
                    for a Brighter
                    <br />
                    Future
                  </p>

                  <div className="mt-3 h-[1px] w-[35px] bg-white" />
                </div>
              </div>

              
              <div
                className="
                  absolute
                  bottom-[-45px]
                  left-[52%]
                  h-[160px]
                  w-[14px]
                  rotate-[43deg]
                  bg-white
                "
              />

              <div
                className="
                  absolute
                  bottom-[-50px]
                  left-[70%]
                  h-[160px]
                  w-[12px]
                  rotate-[43deg]
                  bg-white
                "
              />

              
              <div
                className="
                  absolute
                  bottom-0
                  right-0
                  z-20
                  flex
                  h-[105px]
                  w-[135px]
                  flex-col
                  justify-center
                  rounded-tl-[18px]
                  bg-white
                  px-5
                  shadow-[0_-2px_15px_rgba(0,0,0,0.04)]
                  sm:h-[115px]
                  sm:w-[145px]
                  lg:h-[125px]
                  lg:w-[155px]
                "
              >
                <p
                  className="
                    text-[11px]
                    font-bold
                    leading-[1.5]
                    text-[#15233b]
                    sm:text-[12px]
                  "
                >
                  Your Goals
                  <br />
                  Our Expertise
                </p>

                <div className="mt-3 h-[2px] w-[35px] bg-[#2d6fc4]" />
              </div>
            </div>
          </div>

<div className="relative z-20 w-full lg:pl-2 xl:pl-4">
  {/* OUR SERVICES */}
  <div
    className="
      inline-flex
      rounded-full
      border
      border-[#d4e3f7]
      bg-white
      px-4
      py-1.5
      text-[10px]
      font-semibold
      text-[#2d6fc4]
      sm:text-[11px]
    "
  >
    OUR SERVICES
  </div>

  {/* Main Title */}
  <h2
    className="
      mt-2
      max-w-[750px]
      text-[30px]
      font-bold
      leading-[1.08]
      tracking-[-1.5px]
      text-[#07152f]
      sm:text-[36px]
      lg:text-[38px]
      xl:text-[42px]
    "
  >
    Tailored Financial Solutions
    <br />
    For Your{" "}
    <span className="text-[#1264d4]">
      Greater Tomorrow
    </span>
  </h2>

  {/* Description */}
  <p
    className="
      mt-3
      max-w-[750px]
      text-[11px]
      leading-[1.6]
      text-[#53647d]
      sm:text-[13px]
      lg:text-[14px]
    "
  >
    At PrimeCore, we deliver expert-driven financial services
    to help you plan, grow, and secure what matters most. Our
    solutions are designed around your goals, with clarity and
    confidence.
  </p>

  {/* Services */}
  <div
    className="
      mt-4
      grid
      grid-cols-1
      gap-3
      sm:grid-cols-2
      lg:grid-cols-4
    "
  >
    {services.map((service) => {
      const Icon = service.icon;

      return (
        <Link
          href="/services"
          key={`${service.title}-${service.subtitle}`}
          className="
            group
            relative
            flex
            min-h-[125px]
            flex-col
            rounded-[7px]
            border
            border-[#dfe7f1]
            bg-white
            p-3
            shadow-[0_2px_8px_rgba(25,65,120,0.02)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#bdd3f0]
            hover:shadow-[0_8px_20px_rgba(30,90,160,0.08)]
            sm:min-h-[135px]
            sm:p-3.5
          "
        >
          {/* Icon + Title */}
          <div className="flex items-center gap-2.5">
            {/* Icon */}
            <div
              className="
                flex
                h-[40px]
                w-[40px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#e1edfe]
                sm:h-[42px]
                sm:w-[42px]
              "
            >
              <Icon
                size={21}
                strokeWidth={1.8}
                className="text-[#1264d4]"
              />
            </div>

            {/* Title + Subtitle */}
            <div className="min-w-0">
              <h3
                className="
                  text-[12px]
                  font-bold
                  leading-[1.25]
                  text-[#15233b]
                  sm:text-[13px]
                "
              >
                {service.title}
              </h3>

              <h3
                className="
                  text-[12px]
                  font-bold
                  leading-[1.25]
                  text-[#15233b]
                  sm:text-[13px]
                "
              >
                {service.subtitle}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p
            className="
              mt-2
              max-w-[170px]
              text-[9px]
              leading-[1.45]
              text-[#65758c]
              sm:text-[10px]
            "
          >
            {service.description}
          </p>

          {/* Arrow */}
          <div
            className="
              mt-auto
              flex
              h-[26px]
              w-[26px]
              items-center
              justify-center
              rounded-full
              bg-[#d7e5fa]
              transition
              group-hover:bg-[#1264d4]
            "
          >
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="
                text-[#1264d4]
                transition
                group-hover:text-white
              "
            />
          </div>
        </Link>
      );
    })}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;