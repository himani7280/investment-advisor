'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Award, Heart, Users, ShieldCheck } from "lucide-react";
import { investmentContent } from "../data/investmentContent";

type AwardCategory =
  | "Industry Awards"
  | "Client Recognition"
  | "Corporate Excellence";

const content = investmentContent.awards;
const featureIcons = [Award, Heart, Users, ShieldCheck];

// ================= COMPONENT =================
const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState<AwardCategory | "All">("All");
  const categories = content.categories as Array<AwardCategory | "All">;
  const filteredAwards = content.awards.filter(
    (award) => activeCategory === "All" || award.category === activeCategory,
  );

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= TOP AREA ================= */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm">
                {content.featureBadge}
              </span>

              <div className="h-[2px] w-12 bg-blue-600 sm:w-16" />
            </div>

            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-[40px]">
              {content.titleStart}
              <br className="hidden sm:block" />
              {content.titleMiddle}{" "}
              <span className="text-blue-600">
                {content.titleHighlight}
              </span>
            </h2>

            <p className="max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              {content.intro}
            </p>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 rounded-2xl bg-slate-50/60 p-5 sm:grid-cols-2 sm:p-7 lg:p-8">
            {content.featureItems.map((feature, index) => {
              const FeatureIcon = featureIcons[index];
              return (
              <div
                key={feature.title}
                className="flex flex-col gap-2"
              >
                <div className="group flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 transition-colors duration-200 hover:bg-blue-600">
                  <FeatureIcon className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white" />
                </div>

                <h4 className="text-[16px] font-bold leading-snug text-gray-900">
                  {feature.title}
                </h4>

                <p className="text-sm leading-5 text-gray-500">
                  {feature.description}
                </p>
              </div>
              );
            })}
          </div>
        </div>

        {/* ================= AWARDS HEADING ================= */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-12 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {content.awardsTitle}
            </h3>

            <div className="hidden h-[2px] w-14 bg-blue-600 sm:block" />
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex w-full flex-wrap gap-2 lg:w-auto" role="group" aria-label={content.filterAriaLabel}>
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= AWARDS GRID ================= */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAwards.map((award) => (
            <div
              key={award.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5">
                <h4 className="mb-1 text-[15px] font-bold leading-snug text-gray-900 sm:text-[16px]">
                  {award.title}
                </h4>

                <span className="mb-1 block text-sm font-medium text-gray-500">
                  {award.year}
                </span>

                <p className="text-[13px] leading-5 text-gray-500 sm:text-[14px]">
                  {award.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;

