
"use client";

import Image from "next/image";
import { useContext } from "react";
import { HeroContext } from "../context/HeroProvide";

interface HeroProps {
  page: "about" | "contact" | "blog" | "service" | "investment";
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
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
