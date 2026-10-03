"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { investmentContent } from "../data/investmentContent";

// Counter component for animated numbers
const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!isInView) {
      setCount(1);
      return;
    }

    const target = Number(value.replace(/[^\d]/g, "")) || 1;
    let animationFrame = 0;
    const duration = 1200;
    const start = performance.now();

    const updateValue = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.max(1, Math.round(1 + (target - 1) * eased));

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  const suffix = value.includes("+") ? "+" : value.includes("%") ? "%" : "";

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Aboutus = () => {
  const content = investmentContent.aboutPage;

  return (
    <section className="w-full overflow-hidden bg-transparent pt-8 sm:pt-12 lg:pt-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants}
            className="relative mx-auto w-full max-w-[570px] lg:max-w-none"
          >
            {/* Main Image Container */}
            <div className="relative w-full">
              <div className="relative h-[320px] min-h-[320px] w-full overflow-hidden rounded-2xl rounded-br-[40px] sm:h-[400px] sm:rounded-br-[60px] md:h-[460px] lg:h-[520px] xl:h-[560px]">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover object-[center_25%] sm:object-[center_20%] transition-transform duration-700 hover:scale-[1.05]"
                />

                {/* Animated 30+ Experience Badge */}
                <motion.div
                  variants={badgeVariants}
                  className="absolute bottom-3 right-3 z-10 flex h-[82px] w-[120px] items-center justify-center rounded-xl bg-[#0d5bd7] p-2 shadow-xl sm:bottom-5 sm:right-5 sm:h-[110px] sm:w-[160px] sm:rounded-2xl md:h-[125px] md:w-[180px]"
                >
                  <div className="text-center text-white">
                    <div className="text-[20px] font-bold leading-none sm:text-[32px] md:text-[38px]">
                      <AnimatedCounter value="30+" />
                    </div>
                    <div className="mt-1 text-[10px] font-medium leading-tight sm:text-[13px] md:text-[15px]">
                      Years of
                      <br />
                      Experience
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ================= TEXT SIDE ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
            className="flex flex-col justify-center"
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

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 text-[13px] leading-relaxed text-slate-600 sm:text-[14px] sm:leading-6 md:text-[15px]"
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