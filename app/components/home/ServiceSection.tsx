"use client";

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

import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.services;
const serviceIcons = {
  BarChart3,
  Shield,
  FileText,
  Globe2,
  Users,
  PieChart,
  Sprout,
  Handshake,
};
const services = content.items.map((item) => ({
  ...item,
  icon: serviceIcons[item.icon as keyof typeof serviceIcons],
}));

const ServiceSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-2 pb-2 sm:pt-3 sm:pb-3 lg:mb-8 lg:pt-4 lg:pb-4">
      {/* Top Right Shape */}
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

      {/* Main Container */}
      <div
        className="
          relative z-10
          mx-auto w-full
          max-w-[1440px]
          px-5
          sm:px-8
          md:px-10
          lg:px-10
          xl:px-20
          2xl:px-[80px]
        "
      >
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]
            lg:gap-6
            xl:gap-8
          "
        >
          {/* LEFT IMAGE */}
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
                xl:h-[500px]
                2xl:h-[550px]
              "
            >
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />

              {/* Light Overlay */}
              <div className="absolute inset-0 bg-white/5" />


            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-20 w-full lg:pl-2 xl:pl-4">
            {/* Label */}
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
              {content.badge}
            </div>

            {/* Heading */}
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
              <span className="whitespace-pre-line">{content.titleStart}</span>{" "}
              <span className="text-[#1264d4]">
                {content.titleHighlight}
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
              {content.description}
            </p>

            {/* SERVICES GRID */}
            <div
              className="
                mt-5 
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-2
                lg:grid-cols-4
                lg:gap-3
                xl:gap-4
              "
            >
              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href={content.serviceLink}
                    key={`${item.title}-${item.subtitle}`}
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
                      px-2 py-3
                      shadow-[0_2px_8px_rgba(25,65,120,0.02)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#bdd3f0]
                      hover:bg-[#edf5ff]
                      hover:shadow-[0_8px_20px_rgba(30,90,160,0.08)]
                      sm:min-h-[135px]
                      sm:px-3 sm:py-3.5
                      lg:px-2
                      2xl:px-3
                    "
                  >
                    {/* Icon + Title */}
                    <div className="flex items-center gap-2 lg:gap-1 xl:gap-2 2xl:gap-2.5">
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#e1edfe]
                          transition-all
                          duration-200
                          group-hover:scale-105
                          group-hover:bg-[#1264d4]
                          sm:h-10
                          sm:w-10
                          lg:h-8
                          lg:w-8
                          xl:h-9
                          xl:w-9
                          2xl:h-[42px]
                          2xl:w-[42px]
                        "
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                          className="text-[#1264d4] transition-colors duration-200 group-hover:text-white"
                        />
                      </div>

                      {/* Title */}
                      <div className="min-w-0">
                        <h3
                          className="
                            text-[12px]
                            font-bold
                            leading-[1.25]
                            text-[#15233b]
                            transition-colors
                            duration-200
                            group-hover:text-[#1264d4]
                            sm:text-[14px]
                            lg:text-[11px]
                            2xl:text-[14px]
                          "
                        >
                          {item.title}
                        </h3>

                        <h3
                          className="
                            text-[12px]
                            font-bold
                            leading-[1.25]
                            text-[#15233b]
                            transition-colors
                            duration-200
                            group-hover:text-[#1264d4]
                            sm:text-[14px]
                            lg:text-[11px]
                            2xl:text-[14px]
                          "
                        >
                          {item.subtitle}
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
                        transition-colors
                        duration-200
                        group-hover:text-[#1264d4]
                        sm:text-[10px]
                      "
                    >
                      {item.description}
                    </p>

                    {/* Arrow */}
                    <div
                      className="
                        
                        flex
                        h-[26px]
                        w-[26px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#d7e5fa]
                        transition
                        group-hover:bg-[#1264d4]
                        mt-2
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