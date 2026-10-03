"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Grid } from "lucide-react";
import {
  HeroContext,
  type HeroPage,
} from "../context/HeroProvide";
import { investmentContent } from "../data/investmentContent";

interface HeroProps {
  page: HeroPage;
}

const Hero = ({ page }: HeroProps) => {
  const heroData = useContext(HeroContext);

  if (!heroData) {
    return null;
  }

  const data = heroData[page];

  if (!data) {
    return <div>{investmentContent.siteChrome.heroDataMissingText}</div>;
  }

  const { title, image } = data;

  return (
    <section className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] min-h-[260px] max-h-[600px] overflow-hidden">
      {/* Background Image - Clean Cover Fit with zero top/bottom extra space */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Centered Main Title */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-center text-3xl font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight">
          {title}
        </h1>
      </div>

      {/* White Box Breadcrumb - Right Bottom Edge Touched */}
      <div className="absolute bottom-0 right-0 sm:right-6 z-10">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2.5 sm:gap-3 rounded-tl-lg bg-white px-4 py-2.5 sm:px-6 sm:py-3.5 shadow-lg text-sm sm:text-base"
        >
          <Link
            href="/"
            className="font-semibold text-[#1e293b] transition-colors hover:text-[#2563eb]"
          >
            Home
          </Link>

          <Grid className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0f172a]" />

          <span className="font-semibold text-[#3b82f6] truncate max-w-[160px] sm:max-w-none">
            {title}
          </span>
        </nav>
      </div>
    </section>
  );
};

export default Hero;