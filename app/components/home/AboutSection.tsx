"use client";

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
  return (
    <section className="about-section relative w-full overflow-hidden bg-white pt-14 pb-6 sm:pt-16 sm:pb-8 lg:mb-8 lg:pt-14 lg:pb-4">
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
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[570px]"
          >
            <div
              className="
                relative
                h-[330px]
                w-full
                overflow-hidden
                rounded-[22px]
                sm:h-[400px]
                lg:h-[580px]
                xl:h-[600px]
                2xl:h-[650px]
              "
            >
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="
              relative z-20
              w-full
              text-left
              lg:pl-7
              xl:pl-10
            "
          >
            {/* ABOUT US Badge - Left Aligned */}
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
              {content.badge}
            </div>

            {/* Main Heading - Left Aligned */}
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
              {content.titleStart}
              <br />
              {content.titleMiddle}{" "}<span className="text-[#2d6fc4]">{content.titleHighlight}</span>
            </h2>

            {/* Blue Line Divider - Left Aligned */}
            <div className="mt-5 h-[3px] w-[55px] bg-[#2d6fc4]" />

            {/* Description - Left Aligned */}
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
              {content.description}
            </p>

            {/* Features List: Small screens par 2 in line 1, 3rd in line 2; Large screens par 3 in line 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="
                mt-7
                grid
                grid-cols-2
                gap-x-4
                gap-y-6
                md:grid-cols-3
                md:gap-0
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                    key={feature.title}
                    className={`
                      group
                      flex
                      min-w-0
                      items-start
                      gap-3
                      ${
                        index === 1
                          ? "border-l border-[#dce4ef] pl-4 md:pl-4"
                          : ""
                      }
                      ${
                        index === 2
                          ? "col-span-2 border-t border-[#dce4ef] pt-5 md:col-span-1 md:border-l md:border-t-0 md:border-[#dce4ef] md:pt-0 md:pl-4"
                          : ""
                      }
                      ${index === 0 ? "pr-2 md:pr-4" : ""}
                    `}
                  >
                    {/* Icon */}
                    <div
                      className="
                        group
                        flex
                        h-[44px]
                        w-[44px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#dfeafc]
                        transition-all
                        duration-200
                        group-hover:scale-105
                        group-hover:bg-[#2d6fc4]
                        sm:h-[47px]
                        sm:w-[47px]
                      "
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="text-[#2d6fc4] transition-colors duration-200 group-hover:text-white"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 text-left">
                      {/* Title */}
                      <h3
                        className="
                          text-[11px]
                          font-bold
                          leading-[1.35]
                          text-[#17243a]
                          transition-colors
                          duration-200
                          group-hover:text-[#2d6fc4]
                          sm:text-[14px]
                        "
                      >
                        {feature.title}
                      </h3>

                      {/* Subtitle */}
                      <h3
                        className="
                          text-[11px]
                          font-bold
                          leading-[1.35]
                          text-[#17243a]
                          transition-colors
                          duration-200
                          group-hover:text-[#2d6fc4]
                          sm:text-[14px]
                        "
                      >
                        {feature.subtitle}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-2
                          max-w-[150px]
                          text-[9px]
                          leading-[1.5]
                          text-[#69788e]
                          transition-colors
                          duration-200
                          group-hover:text-[#2d6fc4]
                          sm:max-w-[155px]
                          sm:text-[10px]
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Section - Left Aligned */}
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
                href={content.buttonLink}
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
                {content.buttonText}
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
                  hidden
                  md:block
                "
              >
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