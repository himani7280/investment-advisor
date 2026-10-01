'use client'
import React, { useState } from "react";
import Image from "next/image";

type AwardCategory =
  | "Industry Awards"
  | "Client Recognition"
  | "Corporate Excellence";

// ================= FEATURES DATA =================
const featuresData = [
  {
    id: 1,
    title: "Industry Recognition",
    description:
      "Honored for excellence in financial advisory services.",
    icon: (
      <svg
        className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Client Trust",
    description:
      "Awarded for outstanding client satisfaction.",
    icon: (
      <svg
        className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Innovation in Advisory",
    description:
      "Recognized for innovative wealth management solutions.",
    icon: (
      <svg
        className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Commitment to Excellence",
    description:
      "Celebrated for ethics, transparency, and long-term impact.",
    icon: (
      <svg
        className="h-7 w-7 text-blue-600 transition-colors group-hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

// ================= AWARDS DATA =================
const awardsData = [
  {
    id: 1,
    image: "/award1.png",
    title: "Best Investment Advisory Firm",
    year: "2024",
    organization: "Global Finance Summit",
    category: "Industry Awards",
  },
  {
    id: 2,
    image: "/award2.png",
    title: "Excellence in Wealth Management",
    year: "2023",
    organization: "National Financial Awards",
    category: "Industry Awards",
  },
  {
    id: 3,
    image: "/award3.png",
    title: "Client Satisfaction Award",
    year: "2023",
    organization: "Wealth & Finance Forum",
    category: "Client Recognition",
  },
  {
    id: 4,
    image: "/award4.png",
    title: "Innovation in Financial Solutions",
    year: "2022",
    organization: "Business Leadership Awards",
    category: "Corporate Excellence",
  },
  {
    id: 5,
    image: "/award5.png",
    title: "Trusted Advisory Partner",
    year: "2022",
    organization: "Investment Business Review",
    category: "Client Recognition",
  },
  {
    id: 6,
    image: "/award6.png",
    title: "Excellence in Client Service",
    year: "2021",
    organization: "Financial Services Network",
    category: "Client Recognition",
  },
  {
    id: 7,
    image: "/award7.png",
    title: "Rising Firm of the Year",
    year: "2021",
    organization: "Business Growth Awards",
    category: "Corporate Excellence",
  },
  {
    id: 8,
    image: "/award8.png",
    title: "Contribution to Financial Literacy",
    year: "2020",
    organization: "Financial Education Council",
    category: "Corporate Excellence",
  },
];

// ================= COMPONENT =================
const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState<AwardCategory | "All">("All");
  const categories: Array<AwardCategory | "All"> = [
    "All",
    "Industry Awards",
    "Client Recognition",
    "Corporate Excellence",
  ];
  const filteredAwards = awardsData.filter(
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
                Our Achievements
              </span>

              <div className="h-[2px] w-12 bg-blue-600 sm:w-16" />
            </div>

            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-[40px]">
              Recognized for
              <br className="hidden sm:block" />
              Creating{" "}
              <span className="text-blue-600">
                Brighter Financial Futures
              </span>
            </h2>

            <p className="max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              At PrimeCore, our work is driven by a simple belief —
              our clients&apos; success matters. Over the years, our
              commitment to transparency, innovation, and client-centric
              solutions has been recognized by industry leaders and
              esteemed organizations.
            </p>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 rounded-2xl bg-slate-50/60 p-5 sm:grid-cols-2 sm:p-7 lg:p-8">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col gap-2"
              >
                <div className="group flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 transition-colors duration-200 hover:bg-blue-600">
                  {feature.icon}
                </div>

                <h4 className="text-[16px] font-bold leading-snug text-gray-900">
                  {feature.title}
                </h4>

                <p className="text-sm leading-5 text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= AWARDS HEADING ================= */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-12 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our Awards & Recognition
            </h3>

            <div className="hidden h-[2px] w-14 bg-blue-600 sm:block" />
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex w-full flex-wrap gap-2 lg:w-auto" role="group" aria-label="Filter awards by category">
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

