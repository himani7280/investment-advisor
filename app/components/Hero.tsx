"use client";

import Image from "next/image";
import { useContext } from "react";
import {
  HeroContext,
  type HeroPage,
} from "../context/HeroProvide";

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
    return <div>Hero data not found</div>;
  }

  const { title, image } = data;

  return (
    <section className="relative w-full h-[55vh] min-h-[350px] max-h-[650px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;