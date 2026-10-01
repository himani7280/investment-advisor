"use client";

import {
  Users,
  FileText,
  Trophy,
  Handshake,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
  },
  {
    icon: FileText,
    number: "1,200+",
    label: "Projects Completed",
  },
  {
    icon: Trophy,
    number: "30+",
    label: "Years of Experience",
  },
  {
    icon: Handshake,
    number: "98%",
    label: "Client Satisfaction",
  },
];

const Trusted = () => {
  return (
    <section className="relative w-full overflow-hidden pt-6 sm:pt-8 lg:pt-8 top-16 pb-16 ">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          src="/building.png"
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div
        className="
          absolute
          inset-0
          bg-[#062b58]/80
        "
      />

      {/* ================= GRADIENT OVERLAY ================= */}
      <div
        className="
          absolute
          inset-0
          bg-blue/90
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-8
          sm:px-8
          sm:py-9
          md:py-10
          lg:px-10
          lg:py-10
          xl:px-12
        "
      >

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-[850px] text-center">

          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-[40px] bg-white/75" />

            <span
              className="
                text-[8px]
                font-medium
                tracking-[3.5px]
                text-white
                sm:text-[9px]
                sm:tracking-[4px]
              "
            >
              OUR IMPACT IN NUMBERS
            </span>

            <span className="h-[1px] w-[40px] bg-white/75" />
          </div>

          <h2
            className="
              mt-3
              text-[25px]
              font-bold
              leading-[1.08]
              tracking-[-0.7px]
              text-white
              sm:text-[32px]
              md:text-[34px]
              lg:text-[36px]
              xl:text-[38px]
            "
          >
            Trusted Today,{" "}
            <span className="text-[#4c9df5]">
              Building A Brighter Tomorrow
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-[620px]
              text-[9px]
              leading-[1.45]
              text-white/80
              sm:text-[11px]
              lg:text-[12px]
            "
          >
            Our numbers reflect the trust of our clients, the strength
            of our partnerships,
            <br className="hidden sm:block" />
            and our commitment to creating real growth.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div
          className="
            relative
            mx-auto
            mt-5
            grid
            max-w-[1080px]
            grid-cols-2
            gap-y-6
            lg:grid-cols-4
            lg:gap-y-0
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.number}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  px-2
                  py-2
                  text-center
                  sm:px-4
                  sm:py-4
                  lg:py-1
                "
              >

                {/* Vertical Divider for Large Screens */}
                {index !== 0 && (
                  <div
                    className="
                      absolute
                      left-0
                      top-[15px]
                      hidden
                      h-[100px]
                      w-[1px]
                      bg-white/30
                      lg:block
                    "
                  />
                )}

                {/* Icon */}
                <div
                  className="
                    flex
                    h-[50px]
                    w-[50px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    backdrop-blur-sm
                    sm:h-[60px]
                    sm:w-[60px]
                  "
                >
                  <Icon
                    size={24}
                    strokeWidth={1.7}
                    className="text-white sm:size-[27px]"
                  />
                </div>

                {/* Number */}
                <h3
                  className="
                    mt-2
                    text-[28px]
                    font-bold
                    leading-none
                    tracking-[-1px]
                    text-white
                    sm:text-[36px]
                  "
                >
                  {stat.number}
                </h3>

                {/* Label */}
                <p
                  className="
                    mt-1
                    text-[10px]
                    font-medium
                    text-white/90
                    sm:text-[11px]
                  "
                >
                  {stat.label}
                </p>

                {/* Bottom Line */}
                <div
                  className="
                    mt-2
                    h-[2px]
                    w-[25px]
                    bg-[#1197f5]
                    sm:w-[30px]
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trusted;