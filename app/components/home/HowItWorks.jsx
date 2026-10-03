"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.howItWorks;
const steps = content.steps;

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const HowItWorks = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white  pt:10 sm:pt-12 lg:pt-14 ">
      <div className="mx-auto w-full max-w-[1280px] px-2">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[800px] text-center"
        >
          <div className="inline-flex rounded-full border border-[#d8e7fa] bg-[#f7fbff] px-3.5 py-1 text-[9.5px] font-semibold tracking-[0.25em] text-[#2d6fc4] sm:text-[10px] uppercase mt-8 sm:mt-2 lg:mt-1">
            {content.badge}
          </div>

          <h2 className="mt-3.5 text-[24px] font-bold leading-[1.15] tracking-[-0.05em] text-[#071b43] sm:text-[30px] md:text-[36px] lg:text-[40px]">
            {content.titleStart}
            <br className="hidden sm:block" />{" "}
            <span className="text-[#2474dc]">{content.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[11.5px] leading-[1.6] text-[#65758c] sm:text-[12.5px] lg:text-[13.5px]">
            {content.description}
          </p>
        </motion.div>

        {/* STEPS GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-8 grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-0"
        >
          {/* Connecting Curved Wave Path */}
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
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative z-10 mx-auto w-full max-w-[260px] text-center"
              >
                {/* Step Image and Badge */}
                <div className="relative mx-auto h-[120px] w-[140px] sm:h-[135px] sm:w-[165px] lg:h-[145px] lg:w-[180px]">
                  <div className="absolute inset-[2px] rounded-full bg-[#edf5ff] shadow-[0_2px_10px_rgba(50,100,160,0.04)] sm:inset-[3px]" />

                  <div className="absolute left-[12px] top-[6px] h-[100px] w-[100px] overflow-hidden rounded-full transition-transform duration-300 ease-out group-hover:scale-105 sm:left-[16px] sm:top-[8px] sm:h-[115px] sm:w-[115px] lg:left-[18px] lg:h-[125px] lg:w-[125px]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100px, 130px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute left-0 top-0 z-20 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#176de0] text-[12px] font-semibold text-white shadow-[0_4px_12px_rgba(23,109,224,0.22)] transition-transform duration-300 group-hover:scale-110 sm:h-[40px] sm:w-[40px] sm:text-[13px] lg:h-[44px] lg:w-[44px] lg:text-[13.5px]">
                    {step.number}
                  </div>
                </div>

                <h3 className="mt-3 text-[14px] font-bold leading-[1.25] tracking-[-0.03em] text-[#071b43] transition-colors duration-200 group-hover:text-[#176de0] sm:text-[15px] lg:text-[16px]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[230px] text-[10.5px] leading-[1.55] text-[#65758c] sm:text-[11px] lg:text-[12px]">
                  {step.description}
                </p>

                <div className="mx-auto mt-3 h-[2px] w-[36px] bg-[#2878df] transition-all duration-300 group-hover:w-[50px] sm:w-[40px] lg:w-[44px]" />
              </motion.div>

              {index < steps.length - 1 && (
                <div
                  className="pointer-events-none absolute z-20 hidden lg:flex"
                  style={{
                    left: index === 0 ? "24.5%" : index === 1 ? "49.5%" : "74.5%",
                    top: "54px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-[#edf4fc] bg-white shadow-[0_3px_10px_rgba(50,100,160,0.08)]">
                    <ArrowRight size={15} strokeWidth={2} className="text-[#2878df]" />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;