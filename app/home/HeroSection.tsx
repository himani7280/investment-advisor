"use client";

import Image from "next/image";
import image from "../../public/hero.png";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Users,
} from "lucide-react";

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

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">

           <div className="absolute inset-0">
  <Image
    src={image}
    alt="PrimeCore Investment Advisor"
    fill
    priority
    className="object-cover object-[65%_center]"
  />

  {/* White gradient overlay */}

<div
  className="
    absolute inset-0
    bg-gradient-to-r
    from-white
    via-white/65
    via-60%
    to-transparent
  "
/>
</div>

      <div
        className="
          relative z-10 mx-auto
          min-h-[528px]
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-[75px]
        "
      >

        <div
          className="
            flex min-h-[528px]
            items-center
          "
        >

          <div
            className="
              w-full max-w-[560px]
              pb-[100px]
              pt-12
              sm:pt-16
              lg:pt-20
            "
          >
            <p
              className="
                mb-4
                text-[9px]
                font-semibold
                tracking-[3px]
                text-[#5d6c82]
                sm:text-[10px]
                sm:tracking-[4px]
              "
            >
              SMART INVESTMENTS. BRIGHTER POSSIBILITIES.
            </p>

            <div className="mb-5 h-[2px] w-[34px] bg-[#2d6fc4]" />

            <h1
              className="
                max-w-[530px]
                text-[38px]
                font-bold
                leading-[1.03]
                tracking-[-1.5px]
                text-[#07152f]

                sm:text-[46px]
                lg:text-[52px]
                xl:text-[58px]
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
            </h1>

            <p
              className="
                mt-5
                max-w-[450px]
                text-[13px]
                leading-[1.55]
                text-[#52627a]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              At PrimeCore, we provide expert investment advisory
              services designed to help you achieve your financial goals
              and create a more secure tomorrow.
            </p>

            <div
              className="
                mt-6
                flex flex-col gap-3
                sm:flex-row
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

                  sm:w-[215px]
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

                  sm:w-[195px]
                "
              >
                Explore Our Services
              </Link>

            </div>
          </div>
        </div>


       <div
  className="
    absolute
    bottom-0
    left-6
    w-[calc(100%-48px)]

    sm:left-8
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
                <div
                  key={feature.title}
                  className={`
                    flex
                    min-h-[72px]
                    items-center
                    gap-3
                    px-3
                    py-2

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
                      h-[43px]
                      w-[43px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e8f1fd]
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#2d6fc4]"
                    />
                  </div>

                  <div>
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

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;