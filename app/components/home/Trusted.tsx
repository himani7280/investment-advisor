"use client";

import { useEffect, useState } from "react";
import {
  Users,
  FileText,
  Trophy,
  Handshake,
} from "lucide-react";
import { investmentContent } from "../../data/investmentContent";

const content = investmentContent.trusted;
const statIcons = { Users, FileText, Trophy, Handshake };
const stats = content.stats.map((stat) => ({
  ...stat,
  icon: statIcons[stat.icon as keyof typeof statIcons],
}));

const formatDisplayValue = (value: number, raw: string) => {
  const suffix = raw.includes("%") ? "%" : raw.includes("+") ? "+" : "";
  const formatted = new Intl.NumberFormat("en-US").format(value);
  return `${formatted}${suffix}`;
};

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const target = Number(value.replace(/[^\d]/g, "")) || 1;
    let animationFrame = 0;
    const duration = 1200;
    const start = performance.now();

    const updateValue = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.max(1, Math.round(target * eased));
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateValue);
      }
    };

    animationFrame = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return <span>{formatDisplayValue(count, value)}</span>;
};

const Trusted = () => {
  return (
    <section className="relative w-full overflow-hidden py-8">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          src={content.image}
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
              {content.badge}
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
            {content.titleStart}{" "}
            <span className="text-[#4c9df5]">
              {content.titleHighlight}
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
            {content.description}
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
                  <AnimatedCounter value={stat.number} />
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