"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Gem,
  Shield,
  Eye,
  Lightbulb,
  BarChart2,
  Star,
} from "lucide-react";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.missionVision;
const missionIcons = { Users, Gem, Shield };
const visionIcons = { Lightbulb, BarChart2, Star };

const OurValue: React.FC = () => {
  return (
    <section className="w-full bg-white">
      {/* MAIN CONTAINER */}
      <div className="mx-auto w-full max-w-[1180px] px-3 py-5 sm:px-5 sm:py-7 lg:px-5 lg:pt-10 lg:pb-8">
        
        {/* ================= HEADER ================= */}
        <div className="mb-[18px] text-center sm:mb-[22px] lg:mb-[16px]">
          
          {/* OUR VALUES */}
          <div className="mb-[4px] flex items-center justify-center gap-[12px]">
            <span className="h-[2px] w-[48px] bg-[#1468E8] sm:w-[64px]" />

            <span className="text-[10px] font-bold tracking-[0.35em] text-[#173B78] uppercase sm:text-[12px]">
              {content.badge}
            </span>

            <span className="h-[2px] w-[48px] bg-[#1468E8] sm:w-[64px]" />
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-[#0B1E48] sm:text-[34px] lg:text-[38px]">
            {content.headingStart}{" "}
            <span className="text-[#1468E8]">{content.headingHighlight}</span>{" "}
            {content.headingEnd}
          </h2>

          {/* SUB HEADING */}
          <p className="mt-[6px] text-[12px] font-normal text-[#64748B] sm:text-[14px]">
            {content.description}
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="space-y-[12px]">

          {/* =====================================================
              MISSION
          ====================================================== */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

            {/* MISSION IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative h-[240px] w-full overflow-hidden rounded-[12px] sm:h-[280px] lg:h-[240px]"
            >
              <Image
                src={content.mission.image}
                alt={content.mission.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* MISSION CARD */}
            <div className="flex min-h-[240px] flex-col justify-between rounded-[12px] border border-[#DCE8FA] bg-[#F5F8FF] px-1 py-5 sm:min-h-[280px] sm:px-3 sm:py-6 lg:min-h-[240px] lg:px-2 lg:py-5">

              <div>
                {/* ICON + LABEL */}
                <div className="mb-[12px] flex items-center gap-[12px]">
                  
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0754C9] text-white transition-transform duration-200 hover:scale-105 sm:h-14 sm:w-14">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="flex items-center gap-[8px]">
                    <span className="h-[2px] w-[32px] bg-[#1468E8]" />

                    <span className="text-[9px] font-bold tracking-[0.25em] text-[#173B78] uppercase sm:text-[10px]">
                      {content.mission.label}
                    </span>

                    <span className="h-[2px] w-[32px] bg-[#1468E8]" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-[22px] font-extrabold leading-[1.08] tracking-tight text-[#0B1E48] sm:text-[26px] lg:text-[27px]">
                  {content.mission.titleStart}
                  <br />
                  <span className="text-[#1468E8]">
                    {content.mission.titleHighlight}
                  </span>{" "}
                  {content.mission.titleEnd}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-[12px] max-w-[500px] text-[11px] leading-[1.45] text-[#64748B] sm:text-[12px] lg:text-[14px]">
                  {content.mission.description}
                </p>
              </div>

              <div className="mt-[20px] grid grid-cols-3 border-t border-[#D9E2F0] pt-[16px]">
                {content.mission.features.map((feature, index) => {
                  const Icon = missionIcons[feature.icon as keyof typeof missionIcons];
                  const alignment = index === 1 ? "justify-center border-r border-[#D9E2F0] px-[6px] sm:px-[10px]" : index === 2 ? "justify-end pl-[6px] sm:pl-[10px]" : "border-r border-[#D9E2F0] pr-[6px] sm:pr-[10px]";

                  return (
                    <div key={feature.label} className={`flex items-center gap-[8px] ${alignment} sm:gap-[12px]`}>
                      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#E5F0FF] text-[#1468E8] transition-all duration-200 hover:scale-105 hover:bg-[#1468E8] hover:text-white sm:h-[40px] sm:w-[40px]">
                        <Icon className="h-[19px] w-[19px] sm:h-[20px] sm:w-[20px]" />
                      </div>
                      <span className="text-[9px] font-semibold leading-tight text-[#17233D] sm:text-[12px]">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              </div>
            </div>

          {/* =====================================================
              VISION
          ====================================================== */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

            {/* VISION CARD */}
            <div className="order-2 flex min-h-[240px] flex-col justify-between rounded-[12px] border border-[#DCE8FA] bg-[#F5F8FF] px-1 py-5 sm:min-h-[280px] sm:px-3 sm:py-6 lg:order-1 lg:min-h-[240px] lg:px-2 lg:py-5">

              <div>
                {/* ICON + LABEL */}
                <div className="mb-[12px] flex items-center gap-[12px]">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0754C9] text-white transition-transform duration-200 hover:scale-105 sm:h-14 sm:w-14">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="flex items-center gap-[8px]">
                    <span className="h-[2px] w-[32px] bg-[#1468E8]" />

                    <span className="text-[9px] font-bold tracking-[0.25em] text-[#173B78] uppercase sm:text-[10px]">
                      {content.vision.label}
                    </span>

                    <span className="h-[2px] w-[32px] bg-[#1468E8]" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-[22px] font-extrabold leading-[1.08] tracking-tight text-[#0B1E48] sm:text-[26px] lg:text-[27px]">
                  {content.vision.titleStart}{" "}
                  <span className="text-[#1468E8]">
                    {content.vision.titleHighlight}
                  </span>
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-[12px] max-w-[500px] text-[11px] leading-[1.45] text-[#64748B] sm:text-[12px] lg:text-[14px]">
                  {content.vision.description}
                </p>
              </div>

              {/* VISION FEATURES */}
              <div className="mt-[20px] grid grid-cols-3 border-t border-[#D9E2F0] pt-[16px]">

                {content.vision.features.map((feature, index) => {
                  const Icon = visionIcons[feature.icon as keyof typeof visionIcons];
                  const alignment = index === 1 ? "justify-center border-r border-[#D9E2F0] px-[6px] sm:px-[10px]" : index === 2 ? "justify-end pl-[6px] sm:pl-[10px]" : "border-r border-[#D9E2F0] pr-[6px] sm:pr-[10px]";

                  return (
                    <div key={feature.label} className={`flex items-center gap-[8px] ${alignment} sm:gap-[12px]`}>
                      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#E5F0FF] text-[#1468E8] transition-all duration-200 hover:scale-105 hover:bg-[#1468E8] hover:text-white sm:h-[40px] sm:w-[40px]">
                        <Icon className="h-[19px] w-[19px] sm:h-[20px] sm:w-[20px]" />
                      </div>
                      <span className="text-[9px] font-semibold leading-tight text-[#17233D] sm:text-[12px]">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* VISION IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative order-1 h-[240px] w-full overflow-hidden rounded-[12px] sm:h-[280px] lg:order-2 lg:h-[240px]"
            >
              <Image
                src={content.vision.image}
                alt={content.vision.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;