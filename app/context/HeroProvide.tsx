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
  | "serviceDetail"
  | "missionVision"
  | "whyChooseUs"
  | "ourTeam"
  | "teamDetails"
  | "ourPartners"
  | "testimonials"
  | "faqs"
  | "awards"
  | "privacyPolicy"
  | "bookConsultation";

export interface HeroContextType {
  about: HeroData;
  contact: HeroData;
  blog: HeroData;
  service: HeroData;
  investment: HeroData;
  BlogDetail: HeroData;
  serviceDetail: HeroData;
  missionVision: HeroData;
  whyChooseUs: HeroData;
  ourTeam: HeroData;
  teamDetails: HeroData;
  ourPartners: HeroData;
  testimonials: HeroData;
  faqs: HeroData;
  awards: HeroData;
  privacyPolicy: HeroData;
  bookConsultation: HeroData;
}

export const HeroContext = createContext<HeroContextType | null>(null);

interface HeroProviderProps {
  children: ReactNode;
}

const HeroProvider = ({ children }: HeroProviderProps) => {
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

    missionVision: {
      title: "Mission & Vision",
      image: "/banner.png",
    },

    whyChooseUs: {
      title: "Why Choose Us",
      image: "/banner.png",
    },

    ourTeam: {
      title: "Our Team",
      image: "/banner.png",
    },

    teamDetails: {
      title: "Team Detail",
      image: "/banner.png",
    },

    ourPartners: {
      title: "Our Partners",
      image: "/banner.png",
    },

    testimonials: {
      title: "Testimonials",
      image: "/banner.png",
    },

    faqs: {
      title: "FAQ",
      image: "/banner.png",
    },

    awards: {
      title: "Awards & Achievements",
      image: "/banner.png",
    },
    privacyPolicy: {
      title: "Privacy & Policy",
      image: "/banner.png",
    },
    bookConsultation: {
      title: "Book Consultation",
      image: "/banner.png",
    },
  };

  return (
    <HeroContext.Provider value={heroData}>
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;