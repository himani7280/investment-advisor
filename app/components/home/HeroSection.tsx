"use client";

import Image from "next/image";
import image from "../../../public/hero.png";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BarChart3,
    title: "Personalized Strategies",
    description: "Tailored to your unique goals.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description: "Guidance from experienced financial advisors.",
  },
  {
    icon: Users,
    title: "Long-Term Focus",
    description: "Building sustainable wealth for future generations.",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const featureContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Image wrapper - right side focused */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] lg:w-[65%] xl:w-[50%]"
      >
        <Image
          src={image}
          alt="PrimeCore Investment Advisor"
          fill
          priority
          className="object-cover object-[80%_center] sm:object-right"
        />

        {/* Gradient overlay for smooth text contrast */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-white
            via-white/50
            via-20%
            to-transparent
            lg:from-white
            lg:via-white/20
            lg:via-25%
          "
        />
      </motion.div>

      <div
        className="
          relative z-10 mx-auto
          min-h-[400px]
          sm:min-h-[420px]
          lg:min-h-[440px]
          max-w-[1440px]
          px-3
          md:px-6
          sm:px-8
          lg:px-12
          xl:px-[75px]
        "
      >

        <div
          className="
            flex min-h-[400px]
            sm:min-h-[420px]
            lg:min-h-[440px]
            items-center
          "
        >

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="
              w-full max-w-[560px]
              pb-[90px]
              pt-10
              sm:pt-12
              lg:pt-14
            "
          >
            <motion.p
              variants={fadeInUp}
              className="
                mb-3
                text-[9px]
                font-semibold
                tracking-[3px]
                text-[#5d6c82]
                sm:text-[10px]
                sm:tracking-[4px]
              "
            >
              SMART INVESTMENTS. BRIGHTER POSSIBILITIES.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="mb-4 h-[2px] w-[34px] bg-[#2d6fc4]" 
            />

            <motion.h1
              variants={fadeInUp}
              className="
                max-w-[530px]
                text-[37px]
                font-bold
                leading-[1.10]
                tracking-[-1.5px]
                text-[#07152f]

                sm:text-[42px]
                lg:text-[48px]
                xl:text-[52px]
              "
            >
              Build Wealth
              <br />

              with{" "}
              <span className="text-[#2d6fc4]">
                Clarity
              </span>

              <br />

              and Confidence.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="
                mt-4
                w-[300px]
                md:w-[500px]
                max-w-[650px]
                text-[13px]
                leading-[1.55]
                text-[#444e5e]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              At PrimeCore, we provide expert investment advisory
              services designed to help you achieve your financial goals.
            </motion.p>

            {/* BUTTONS CONTAINER: Vertical on <400px, Horizontal on >=400px */}
            <motion.div
              variants={fadeInUp}
              className="
                mt-5
                flex
                flex-col
                gap-3
                min-[400px]:flex-row
              "
            >

              <Link
                href="/consultation"
                className="
                  flex h-[41px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[5px]
                  bg-[#2d6fc4]
                  px-5
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-[0_4px_10px_rgba(45,111,196,0.20)]
                  transition
                  hover:bg-[#245fa9]

                  min-[400px]:w-[215px]
                "
              >
                Book a Consultation

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                />
              </Link>

              <Link
                href="/services"
                className="
                  flex h-[41px]
                  w-full
                  items-center
                  justify-center
                  rounded-[5px]
                  border
                  border-[#7d91ad]
                  bg-white/80
                  px-5
                  text-[12px]
                  font-semibold
                  text-[#16233a]
                  backdrop-blur-sm
                  transition
                  hover:bg-white

                  min-[400px]:w-[195px]
                "
              >
                Explore Our Services
              </Link>

            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM FEATURES CONTAINER */}
        <div className="hidden md:block">
          <motion.div
            variants={featureContainer}
            initial="hidden"
            animate="visible"
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              w-[calc(100%-48px)]

              sm:left-8
              sm:translate-x-0
              sm:w-[650px]

              lg:left-12
              lg:w-[720px]

              xl:left-[75px]
              xl:w-[780px]
            "
          >

            <div
              className="
                grid
                grid-cols-1
                border-t
                border-[#dbe3ee]
                bg-white/80
                backdrop-blur-[3px]

                sm:grid-cols-3
              "
            >

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    className={`
                      flex
                      min-h-[68px]
                      items-center
                      justify-center
                      text-center
                      gap-3
                      px-3
                      py-2.5

                      sm:justify-start
                      sm:text-left
                      sm:px-4
                      lg:px-5

                      ${
                        index !== 0
                          ? `
                            border-t
                            border-[#dbe3ee]

                            sm:border-l
                            sm:border-t-0
                          `
                          : ""
                      }
                    `}
                  >

                    <div
                      className="
                        flex
                        h-[40px]
                        w-[40px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#e8f1fd]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="text-[#2d6fc4]"
                      />
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                      <h3
                        className="
                          text-[10px]
                          font-bold
                          text-[#1a2940]
                          sm:text-[11px]
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          max-w-[180px]
                          text-[8px]
                          leading-[1.4]
                          text-[#64748b]
                          sm:text-[9px]
                        "
                      >
                        {feature.description}
                      </p>
                    </div>

                  </motion.div>
                );
              })}

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;