"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.whyChooseUs;

const Whychoose = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#031d46] pt-4 pb-12 sm:pb-14 lg:pb-8">

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



      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[500px]
          max-w-[1440px]
          items-center
          px-5
          py-7
          sm:px-8
          lg:px-8
          lg:py-7
          lg:pb-7
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
                {content.badge}
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
                lg:text-[49px]
              "
            >
              {content.titleLines[0]}
              <br />
              <span className="text-[#55baff]">
                {content.titleLines[1]}
              </span>
              <br />
              {content.titleLines[2]}
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[470px]
                lg:max-w-[490px]
                text-[11px]
                leading-[1.5]
                text-white/75
                sm:text-[12px]
                lg:text-[14px]
              "
            >
              {content.description}
            </p>

            {/* =================================================
                TRUSTED CLIENTS
            ================================================== */}

            <div className="mt-6 flex items-center lg:mt-7">
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
                  lg:h-[52px]
                  lg:w-[52px]
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
                    lg:text-[14px]
                  "
                >
                  <span className="whitespace-pre-line">{content.trustedTitle}</span>
                </h3>
              </div>

              {/* Divider */}
              <div className="mx-4 h-[48px] w-[1px] bg-white/30 lg:h-[52px]" />

              {/* Small Description */}
              <p
                className="
                  max-w-[165px]
                  text-[9px]
                  leading-[1.45]
                  text-white/70
                  sm:text-[10px]
                  lg:text-[12px]
                "
              >
                {content.trustedDescription}
              </p>
            </div>

            {/* =================================================
                GET IN TOUCH BUTTON
            ================================================== */}

            <Link
              href={content.buttonLink}
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
                lg:h-[49px]
                lg:w-[230px]
                lg:text-[12px]
              "
            >
              <span>{content.buttonText}</span>

              <span
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  lg:h-[38px]
                  lg:w-[38px]
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


          <div
            className="
              relative
              mx-auto
              flex
              h-full
              w-full
              max-w-[620px]
              items-center
              sm:aspect-auto
              sm:h-[390px]
              lg:h-[445px]
            "
          >



            <div
              className="
                absolute
                left-0
                top-0
                z-10
                aspect-square
                w-[54%]
                max-w-[215px]
                overflow-hidden
                rounded-full
                border-[3px]
                border-[#48a9ff]
                sm:absolute
                sm:right-[205px]
                sm:left-auto
                sm:top-0
                sm:mx-0
                sm:aspect-auto
                sm:h-[195px]
                sm:w-[195px]
                lg:h-[215px]
                lg:w-[215px]
              "
            >
              <Image
                src={content.decorativeImages[0].image}
                alt={content.decorativeImages[0].alt}
                fill
                sizes="(min-width: 1024px) 215px, (min-width: 640px) 195px, 54vw"
                className="object-cover object-center"
              />
            </div>




            <div
              className="
                absolute
                right-0
                top-[4%]
                z-20
                flex
                h-[150px]
                w-[150px]
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
                sm:right-0
                sm:top-0
                sm:h-[225px]
                sm:w-[225px]
                lg:h-[248px]
                lg:w-[248px]
              "
            >
              <div
                className="
                  flex
                  h-[36px]
                  w-[36px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  sm:h-[52px]
                  sm:w-[52px]
                  lg:h-[56px]
                  lg:w-[56px]
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
                  text-[12px]
                  font-bold
                  leading-[1.15]
                  text-white
                  sm:text-[16px]
                  sm:text-[18px]
                  lg:text-[20px]
                "
              >
                <span className="whitespace-pre-line">{content.services[1].title}</span>
              </h3>

              <p
                className="
                  mt-1
                  max-w-[112px]
                  text-[8px]
                  leading-[1.25]
                  whitespace-pre-line
                  text-white/90
                  sm:max-w-[145px]
                  sm:text-[9px]
                  sm:text-[10px]
                  lg:max-w-[160px]
                  lg:text-[11px]
                "
              >
                {content.services[1].description}
              </p>
            </div>




            <div
              className="
                absolute
                bottom-0
                right-0
                z-10
                aspect-square
                w-[54%]
                max-w-[215px]
                overflow-hidden
                rounded-full
                border-[3px]
                border-[#317eea]
                sm:absolute
                sm:bottom-[5px]
                sm:right-[10px]
                sm:mx-0
                sm:aspect-auto
                sm:h-[195px]
                sm:w-[195px]
                lg:h-[215px]
                lg:w-[215px]
              "
            >
              <Image
                src={content.decorativeImages[1].image}
                alt={content.decorativeImages[1].alt}
                fill
                sizes="(min-width: 1024px) 215px, (min-width: 640px) 195px, 54vw"
                className="object-cover object-right"
              />
            </div>



            <div
              className="
                absolute
                bottom-[4%]
                left-0
                z-20
                flex
                h-[150px]
                w-[150px]
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
                sm:bottom-[10px]
                sm:left-[75px]
                sm:h-[225px]
                sm:w-[225px]
                lg:h-[248px]
                lg:w-[248px]
              "
            >
              <div
                className="
                  flex
                  h-[36px]
                  w-[36px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  sm:h-[52px]
                  sm:w-[52px]
                  lg:h-[56px]
                  lg:w-[56px]
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
                  text-[12px]
                  font-bold
                  leading-[1.15]
                  text-white
                  sm:text-[16px]
                  sm:text-[18px]
                  lg:text-[20px]
                "
              >
                <span className="whitespace-pre-line">{content.services[2].title}</span>
              </h3>

              <p
                className="
                  mt-1
                  max-w-[112px]
                  text-[8px]
                  leading-[1.25]
                  whitespace-pre-line
                  text-white/90
                  sm:max-w-[150px]
                  sm:text-[9px]
                  sm:text-[10px]
                  lg:max-w-[160px]
                  lg:text-[11px]
                "
              >
                {content.services[2].description}
              </p>
            </div>



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