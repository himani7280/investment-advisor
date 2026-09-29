"use client";

import React, { createContext, ReactNode } from "react";

interface HeroData {
  title: string;
  image: string;
}

export type HeroPage =
  | "about"
  | "contact"
  | "blog"
  | "service"
  | "investment"
  | "BlogDetail"
  | "serviceDetail";

export interface HeroContextType {
  about: HeroData;
  contact: HeroData;
  blog: HeroData;
  service: HeroData;
  investment: HeroData;
  BlogDetail: HeroData;
  serviceDetail: HeroData;
}

export const HeroContext = createContext<HeroContextType | null>(null);

interface HeroProviderProps {
  children: ReactNode;
}

const HeroProvide = ({ children }: HeroProviderProps) => {
  const heroData: HeroContextType = {
    about: {
      title: "About Us",
      image: "/banner.png",
    },

    contact: {
      title: "Contact Us",
      image: "/banner.png",
    },

    blog: {
      title: "Blogs",
      image: "/banner.png",
    },

    service: {
      title: "Our Services",
      image: "/banner.png",
    },

    investment: {
      title: "Investment Process",
      image: "/banner.png",
    },

    BlogDetail: {
      title: "Blog Detail",
      image: "/banner.png",
    },

    serviceDetail: {
      title: "Service Detail",
      image: "/banner.png",
    },
  };

  return (
    <HeroContext.Provider value={heroData}>
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvide;