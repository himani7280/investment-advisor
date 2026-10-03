"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.contactLocation;

// Animation Variants
const headerContainerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const mapVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

const OurLocation = () => {
  return (
    <section className="w-full bg-white px-4 pt-10 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px]">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerContainerVariants}
          className="mb-5"
        >
          <motion.div variants={itemVariants} className="mb-2 flex items-center gap-4">
            <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
              {content.badge}
            </span>
            <span className="h-[2px] w-16 bg-[#3478e5]" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl font-bold leading-tight text-[#102b66] sm:text-4xl">
            {content.titleStart}{" "}
            <span className="text-[#1265e8]">{content.titleHighlight}</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-2 max-w-[620px] text-sm leading-6 text-[#71809d] sm:text-base">
            {content.description}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2.5fr_1fr]">

          {/* Map Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={mapVariants}
            className="relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[310px] shadow-xs"
          >
            <iframe
              src={content.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={content.mapTitle}
              className="h-full w-full"
            />
          </motion.div>

          {/* Location Image & Details Card Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover="hover"
            className="group relative h-[280px] overflow-hidden rounded-lg border border-[#e2eaf5] sm:h-[320px] lg:h-[310px] shadow-xs cursor-pointer"
          >
            <motion.div
              variants={{
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Dark Overlay with subtle opacity change on hover */}
            <motion.div
              variants={{
                hover: { opacity: 0.35 }
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/25 pointer-events-none"
            />

            {/* Card Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-8 pointer-events-none">
              <h3 className="max-w-[230px] text-2xl font-bold leading-tight text-white sm:text-[25px]">
                <span className="whitespace-pre-line">{content.cardTitle}</span>
              </h3>

              <div className="my-5 h-[2px] w-10 bg-white transition-all duration-300 group-hover:w-16" />

              <p className="text-base leading-6 text-white">
                <span className="whitespace-pre-line">{content.cardDescription}</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OurLocation;