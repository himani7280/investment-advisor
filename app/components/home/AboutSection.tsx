"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.about;
const featureIcons = [BarChart3, ShieldCheck, Users];
const features = content.features.map((feature, index) => ({
  ...feature,
  icon: featureIcons[index],
}));

const AboutSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="about-section relative w-full overflow-hidden bg-white pt-6 sm:pt-8 lg:pt-10 min-h-[500px]">
        {/* Reduced horizontal padding: px-3 sm:px-5 lg:px-6 */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] ">
          <div className="grid items-center gap-6 lg:grid-cols-[48%_52%] lg:gap-2">
            <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center p-1 sm:p-2">
              <div className="relative h-[260px] w-full overflow-hidden rounded-[18px] bg-[#f8fafc] sm:h-[320px] lg:h-[420px] xl:h-[450px]">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
            <div className="relative z-20 w-full text-left lg:pl-3 xl:pl-4">
              <div className="inline-flex rounded-full border border-[#c9dcf6] bg-white px-4 py-1.5 text-[10px] font-semibold text-[#2d6fc4]">
                {content.badge}
              </div>
              <h2 className="mt-4 text-[30px] font-bold text-[#07152f]">
                {content.titleStart} {content.titleMiddle}{" "}
                <span className="text-[#2d6fc4]">{content.titleHighlight}</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about-section relative w-full overflow-hidden bg-white pt-6 sm:pt-8 lg:pt-10">
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

      {/* Reduced outer padding on left and right */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-[1440px]
          px-3 sm:px-5 lg:px-6
        "
      >
        {/* Reduced grid gap */}
        <div className="grid items-center gap-6 lg:grid-cols-[48%_52%] lg:gap-2">
          {/* Left Side: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-[500px] items-center justify-center "
          >
            <div
              className="
                relative
                h-[260px]
                w-full
                overflow-hidden
                rounded-[18px]
                bg-[#f8fafc]
                p-2
                shadow-sm
                border
                border-slate-100
                sm:h-[320px]
                lg:h-[420px]
                xl:h-[450px]
              "
            >
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-contain object-center drop-shadow-sm"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side: Content Container (Reduced left padding: lg:pl-3 xl:pl-4) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative z-20 w-full text-left lg:pl-3 xl:pl-4"
          >
            <div className="inline-flex rounded-full border border-[#c9dcf6] bg-white px-4 py-1.5 text-[10px] font-semibold text-[#2d6fc4] sm:text-[11px]">
              {content.badge}
            </div>

            <h2 className="mt-4 max-w-[650px] text-[30px] font-bold leading-[1.1] tracking-[-1px] text-[#07152f] sm:text-[36px] lg:text-[40px] xl:text-[44px]">
              {content.titleStart}
              <br />
              {content.titleMiddle}{" "}
              <span className="text-[#2d6fc4]">{content.titleHighlight}</span>
            </h2>

            <div className="mt-5 h-[3px] w-[55px] bg-[#2d6fc4]" />

            <p className="mt-5 max-w-[650px] text-[12px] leading-[1.65] text-[#53647d] sm:text-[14px] lg:text-[15px]">
              {content.description}
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="mt-7 grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 md:gap-0"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    key={feature.title || index}
                    className={`
                      group flex min-w-0 items-start gap-2.5
                      ${index === 1 ? "border-l border-[#dce4ef] pl-3 md:pl-3" : ""}
                      ${index === 2 ? "col-span-2 border-t border-[#dce4ef] pt-5 md:col-span-1 md:border-l md:border-t-0 md:border-[#dce4ef] md:pt-0 md:pl-3" : ""}
                      ${index === 0 ? "pr-1 md:pr-3" : ""}
                    `}
                  >
                    <div className="group flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#dfeafc] transition-all duration-200 group-hover:scale-105 group-hover:bg-[#2d6fc4] sm:h-[47px] sm:w-[47px]">
                      <Icon size={22} strokeWidth={1.8} className="text-[#2d6fc4] transition-colors duration-200 group-hover:text-white" />
                    </div>

                    <div className="min-w-0 text-left">
                      <h3 className="text-[11px] font-bold leading-[1.35] text-[#17243a] transition-colors duration-200 group-hover:text-[#2d6fc4] sm:text-[14px]">
                        {feature.title}
                      </h3>
                      <p className="mt-2 max-w-[150px] text-[9px] leading-[1.5] text-[#69788e] transition-colors duration-200 group-hover:text-[#2d6fc4] sm:max-w-[155px] sm:text-[10px]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href={content.buttonLink}
                className="flex h-[47px] w-full max-w-[210px] items-center justify-center gap-5 rounded-[5px] bg-[#2d6fc4] px-6 text-[12px] font-semibold text-white shadow-[0_5px_15px_rgba(45,111,196,0.18)] transition hover:bg-[#245fa9]"
              >
                {content.buttonText}
                <ArrowRight size={18} strokeWidth={1.8} />
              </Link>

              <div className="hidden h-[42px] w-[1px] bg-[#9ba8ba] sm:block" />

              <p className="hidden text-[10px] font-medium leading-[1.5] text-[#68778d] sm:text-[11px] md:block">
                <span className="whitespace-pre-line">{content.callout}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;