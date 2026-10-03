"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

// Motion Variants
const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Aboutus = () => {
  const content = investmentContent.aboutPage;

  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-8 sm:pt-12 lg:pt-10">
      <div className="relative z-10 mx-auto w-full max-w-7xl pr-8 ps-8 sm:px-12 px-20">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-7 lg:grid-cols-[46%_54%] lg:gap-4 xl:gap-6">
          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants}
            className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          >
            {/* Image — all decorative elements are baked into about.png */}
            <div className="relative w-full">
              <div
                className="
                  relative
                  h-[350px]
                  w-full
                  sm:h-[420px]
                  md:h-[480px]
                  lg:h-[520px]
                  xl:h-[560px]
                "
              >
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 45vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* ================= TEXT SIDE ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
            className="flex flex-col justify-center lg:pr-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="mb-2.5 inline-flex w-fit rounded-full border border-blue-300 bg-blue-50/50 px-3.5 py-1 sm:mb-3">
                <span className="text-[11px] font-semibold tracking-wide text-blue-600 sm:text-xs">
                  {content.badge}
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-[24px] font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[42px]"
            >
              {content.titleStart}
              <br className="hidden sm:inline" />{" "}
              {content.titleMiddle}{" "}
              <span className="text-blue-600">
                {content.titleHighlight}
              </span>
            </motion.h2>

            {/* Underline */}
            <motion.div
              variants={itemVariants}
              className="my-3 h-[3px] w-12 bg-blue-600 sm:my-4"
            />

            {/* Description — 3 paragraphs matching design */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-[13px] leading-relaxed text-slate-600 sm:text-[14px] sm:leading-[1.7] md:text-[15px]"
            >
              <p>{content.description}</p>
              <p>{content.description}</p>
              <p>{content.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;