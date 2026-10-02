"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.partners;
const partners = content.items;

const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const OurPartners = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-12 lg:pt-14 ">
      {/* Background Decorative Dots */}
      <div className="absolute left-8 top-16 hidden sm:block">
        <div className="grid grid-cols-5 gap-[10px]">
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="h-[4px] w-[4px] rounded-full bg-[#b8d4fa]"
            />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-[850px] px-4 text-center"
      >
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-[2px] w-[44px] bg-[#2778e8]" />
          <span className="text-[11px] font-semibold tracking-[1.5px] text-[#2778e8] uppercase">
            {content.badge}
          </span>
          <span className="h-[2px] w-[44px] bg-[#2778e8]" />
        </div>

        <h2 className="text-[26px] font-bold leading-tight text-[#092452] sm:text-[34px] lg:text-[40px]">
          <span className="whitespace-pre-line">{content.titleStart}</span>{" "}
          <span className="text-[#1474e8]">{content.titleHighlight}</span>
        </h2>

        <p className="mx-auto mt-2.5 max-w-[650px] text-[13px] leading-[1.55] text-[#7385a1] sm:text-[14px]">
          {content.description}
        </p>
      </motion.div>

      {/* Partners Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 mx-auto mt-6 max-w-[1160px] sm:mt-8 "
      >
        <div className="grid grid-cols-2 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={fadeIn}
              whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
              className="flex h-[95px] min-w-0 items-center justify-center rounded-lg border border-[#e8f0f9] bg-[#fbfdff] p-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_6px_16px_rgba(20,80,160,0.08)] sm:h-[110px]"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={200}
                height={80}
                className="max-h-[55px] w-auto object-contain mix-blend-multiply transition-transform duration-300 sm:max-h-[65px]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurPartners;