"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const Whychoose = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#031d46]">
      {/* =====================================================
          BACKGROUND DECORATIVE CIRCLES
      ====================================================== */}

      <div
        className="
          absolute
          -left-[150px]
          top-[160px]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#16447f]/40
          bg-[#062657]
        "
      />

      <div
        className="
          absolute
          -left-[105px]
          top-[210px]
          h-[205px]
          w-[205px]
          rounded-full
          border
          border-[#16447f]/30
        "
      />

      <div
        className="
          absolute
          left-[48%]
          top-[-150px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#082b5d]
          opacity-60
        "
      />

      <div
        className="
          absolute
          left-[45%]
          bottom-[-130px]
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#062957]
          opacity-70
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[430px]
          max-w-[1440px]
          items-center
          px-5
          py-7
          sm:px-8
          lg:px-12
          lg:py-7
          xl:px-[75px]
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-5
            lg:grid-cols-[43%_57%]
            lg:gap-0
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-20 max-w-[535px]">
            {/* Small Heading */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <span
                  className="
                    block
                    h-0
                    w-0
                    border-b-[7px]
                    border-l-[12px]
                    border-t-[7px]
                    border-b-transparent
                    border-l-[#38a8ff]
                    border-t-transparent
                  "
                />

                <span
                  className="
                    -ml-[4px]
                    block
                    h-0
                    w-0
                    border-b-[7px]
                    border-l-[12px]
                    border-t-[7px]
                    border-b-transparent
                    border-l-[#7268ff]
                    border-t-transparent
                  "
                />
              </div>

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[1.5px]
                  text-white/80
                  sm:text-[10px]
                "
              >
                WHY CHOOSE US
              </span>

              <span className="ml-1 h-[2px] w-[52px] bg-white/70" />
            </div>

            {/* Main Heading */}
            <h2
              className="
                mt-5
                max-w-[500px]
                text-[34px]
                font-bold
                leading-[1.02]
                tracking-[-1.3px]
                text-white
                sm:text-[42px]
                lg:text-[45px]
                xl:text-[49px]
              "
            >
              Why You Should
              <br />
              <span className="text-[#55baff]">
                Choose Our
              </span>
              <br />
              Company?
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[470px]
                text-[11px]
                leading-[1.5]
                text-white/75
                sm:text-[12px]
                lg:text-[13px]
              "
            >
              We are committed to delivering exceptional solutions
              that help your business grow. Our customer-focused
              approach, industry expertise, and innovative strategies
              set us apart from the rest.
            </p>

            {/* =================================================
                TRUSTED CLIENTS
            ================================================== */}

            <div className="mt-5 flex items-center">
              {/* Icon */}
              <div
                className="
                  flex
                  h-[48px]
                  w-[48px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1554a2]
                "
              >
                <Handshake
                  size={23}
                  strokeWidth={1.7}
                  className="text-white"
                />
              </div>

              {/* Client Text */}
              <div className="ml-3">
                <h3
                  className="
                    text-[11px]
                    font-bold
                    leading-[1.3]
                    text-white
                    sm:text-[12px]
                  "
                >
                  Trusted by 500+
                  <br />
                  Happy Clients
                </h3>
              </div>

              {/* Divider */}
              <div className="mx-4 h-[48px] w-[1px] bg-white/30" />

              {/* Small Description */}
              <p
                className="
                  max-w-[165px]
                  text-[9px]
                  leading-[1.45]
                  text-white/70
                  sm:text-[10px]
                "
              >
                Your success is our priority,
                <br />
                and we're with you every
                <br />
                step of the way.
              </p>
            </div>

            {/* =================================================
                GET IN TOUCH BUTTON
            ================================================== */}

            <Link
              href="/contact"
              className="
                mt-5
                flex
                h-[45px]
                w-[210px]
                items-center
                justify-between
                rounded-full
                bg-gradient-to-r
                from-[#0da9f7]
                to-[#2565ee]
                pl-6
                pr-2
                text-[11px]
                font-semibold
                text-white
                shadow-[0_7px_20px_rgba(0,135,255,0.25)]
                transition
                hover:scale-[1.02]
              "
            >
              <span>Get In Touch</span>

              <span
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <ArrowUpRight
                  size={19}
                  strokeWidth={2}
                  className="text-[#1665d9]"
                />
              </span>
            </Link>
          </div>

          {/* =================================================
              RIGHT IMAGE / CIRCLES
          ================================================== */}

          <div
            className="
              relative
              mx-auto
              h-[390px]
              w-full
              max-w-[620px]
              lg:h-[410px]
            "
          >
            {/* =================================================
                TOP IMAGE CIRCLE
            ================================================== */}

            <div
              className="
                absolute
                right-[180px]
                top-0
                h-[185px]
                w-[185px]
                overflow-hidden
                rounded-full
                border-[3px]
                border-[#48a9ff]
                sm:right-[205px]
                sm:h-[195px]
                sm:w-[195px]
              "
            >
              <Image
                src="/hero.png"
                alt="Financial consultation"
                fill
                sizes="195px"
                className="object-cover object-center"
              />
            </div>

            {/* =================================================
                TOP RIGHT INSURANCE CIRCLE
            ================================================== */}

            <div
              className="
                absolute
                right-0
                top-0
                flex
                h-[215px]
                w-[215px]
                flex-col
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#10a8f7]
                via-[#2175ed]
                to-[#3732d7]
                text-center
                shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                sm:h-[225px]
                sm:w-[225px]
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <ShieldCheck
                  size={27}
                  strokeWidth={1.8}
                  className="text-[#1766d7]"
                />
              </div>

              <h3
                className="
                  mt-2
                  text-[16px]
                  font-bold
                  leading-[1.15]
                  text-white
                  sm:text-[18px]
                "
              >
                Insurance
                <br />
                Managements
              </h3>

              <p
                className="
                  mt-1
                  max-w-[145px]
                  text-[9px]
                  leading-[1.45]
                  text-white/90
                  sm:text-[10px]
                "
              >
                Secure your future with
                <br />
                reliable coverage
                <br />
                solutions.
              </p>
            </div>

            {/* =================================================
                BOTTOM IMAGE CIRCLE
            ================================================== */}

            <div
              className="
                absolute
                bottom-[5px]
                right-[10px]
                h-[185px]
                w-[185px]
                overflow-hidden
                rounded-full
                border-[3px]
                border-[#317eea]
                sm:h-[195px]
                sm:w-[195px]
              "
            >
              <Image
                src="/hero.png"
                alt="Business meeting"
                fill
                sizes="195px"
                className="object-cover object-right"
              />
            </div>

            {/* =================================================
                CENTER STRATEGIC INVESTMENT CIRCLE
            ================================================== */}

            <div
              className="
                absolute
                bottom-[10px]
                left-[65px]
                flex
                h-[215px]
                w-[215px]
                flex-col
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#13aaf7]
                via-[#2376ed]
                to-[#3630d7]
                text-center
                shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                sm:left-[75px]
                sm:h-[225px]
                sm:w-[225px]
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <TrendingUp
                  size={27}
                  strokeWidth={1.8}
                  className="text-[#1766d7]"
                />
              </div>

              <h3
                className="
                  mt-2
                  text-[16px]
                  font-bold
                  leading-[1.15]
                  text-white
                  sm:text-[18px]
                "
              >
                Strategic
                <br />
                Investments
              </h3>

              <p
                className="
                  mt-1
                  max-w-[150px]
                  text-[9px]
                  leading-[1.45]
                  text-white/90
                  sm:text-[10px]
                "
              >
                Build wealth with
                <br />
                smart and sustainable
                <br />
                strategies.
              </p>
            </div>

            {/* =================================================
                TOP DECORATIVE LINES
            ================================================== */}

            <div className="absolute right-0 top-2 hidden sm:block">
              <span
                className="
                  absolute
                  h-[40px]
                  w-[4px]
                  rotate-[18deg]
                  rounded-full
                  bg-[#6f7fff]
                "
              />

              <span
                className="
                  absolute
                  left-[20px]
                  top-[12px]
                  h-[31px]
                  w-[4px]
                  rotate-[42deg]
                  rounded-full
                  bg-[#6f7fff]
                "
              />

              <span
                className="
                  absolute
                  left-[35px]
                  top-[27px]
                  h-[23px]
                  w-[4px]
                  rotate-[65deg]
                  rounded-full
                  bg-[#6f7fff]
                "
              />
            </div>

            {/* =================================================
                LEFT DECORATIVE LINES
            ================================================== */}

            <div className="absolute left-[20px] top-[190px] hidden sm:block">
              <span
                className="
                  absolute
                  h-[32px]
                  w-[4px]
                  rotate-[35deg]
                  rounded-full
                  bg-[#3e9eff]
                "
              />

              <span
                className="
                  absolute
                  left-[16px]
                  top-[6px]
                  h-[25px]
                  w-[4px]
                  rotate-[55deg]
                  rounded-full
                  bg-[#3e9eff]
                "
              />

              <span
                className="
                  absolute
                  left-[29px]
                  top-[17px]
                  h-[20px]
                  w-[4px]
                  rotate-[75deg]
                  rounded-full
                  bg-[#3e9eff]
                "
              />
            </div>

            {/* =================================================
                DOT PATTERN
            ================================================== */}

            <div
              className="
                absolute
                bottom-[8px]
                right-[-2px]
                hidden
                grid-cols-4
                gap-[7px]
                sm:grid
              "
            >
              {Array.from({ length: 16 }).map((_, index) => (
                <span
                  key={index}
                  className="
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-[#3264c3]
                  "
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;