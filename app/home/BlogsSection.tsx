import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

interface Blog {
  id: number;
  date: string;
  month: string;
  year: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    date: "15",
    month: "AUG",
    year: "2026",
    category: "INVESTMENT STRATEGY",
    title: "5 Smart Investment Strategies for Long-Term Wealth",
    description:
      "Discover practical investment strategies that can help you build a stronger financial future and achieve your goals with confidence.",
    image: "/blog.png",
  },
  {
    id: 2,
    date: "10",
    month: "AUG",
    year: "2026",
    category: "FINANCIAL PLANNING",
    title: "How to Plan Your Finances in a Changing Economy",
    description:
      "Learn how to adapt your financial plan to economic changes and stay on track toward your life goals.",
    image: "/blog.png",
  },
  {
    id: 3,
    date: "05",
    month: "AUG",
    year: "2026",
    category: "WEALTH MANAGEMENT",
    title: "Key Benefits of Working with a Financial Advisor",
    description:
      "Explore how a professional advisor can help you make informed decisions and create a more secure tomorrow.",
    image: "/blog.png",
  },
];

const BlogsSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-9 text-center sm:mb-10">
          {/* Small Heading */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-blue-600 sm:w-11"></span>

            <span className="text-[11px] font-bold tracking-[1.5px] text-blue-600 sm:text-xs">
              OUR LATEST BLOGS
            </span>

            <span className="h-[2px] w-10 bg-blue-600 sm:w-11"></span>
          </div>

          {/* Main Heading */}
          <h2 className="mx-auto max-w-[900px] text-[28px] font-bold leading-[1.2] text-[#0b2454] sm:text-[34px] md:text-[38px] lg:text-[40px]">
            Insights That Drive{" "}
            <span className="text-blue-600">
              Your Financial Growth
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[650px] text-[14px] leading-5 text-slate-600 sm:text-[15px] sm:leading-6">
            Explore our latest articles, market trends, and expert advice to
            help you make smarter investment decisions.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-xl border border-[#dbe5f0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,75,160,0.10)]"
            >
              {/* Image */}
              <div className="relative mx-1 mt-1 h-[175px] overflow-hidden rounded-[10px] sm:h-[185px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Date Badge */}
                <div className="absolute left-4 top-4 flex h-[56px] w-[66px] flex-col items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
                  <span className="text-[22px] font-bold leading-5">
                    {blog.date}
                  </span>

                  <span className="mt-[2px] text-[9px] font-semibold uppercase tracking-wide">
                    {blog.month} {blog.year}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-4 pb-5 pt-3 sm:px-5 sm:pb-6">

                {/* Category */}
                <div className="mb-2">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-[4px] text-[9px] font-bold uppercase tracking-wide text-blue-600">
                    {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="min-h-[56px] text-[18px] font-bold leading-[1.35] text-[#0b2454] sm:text-[19px]">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-3 text-[13px] leading-[1.55] text-slate-600 sm:text-[14px]">
                  {blog.description}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className="mt-4 flex items-center gap-3 text-[13px] font-bold text-blue-600 transition-all duration-300 hover:gap-4"
                >
                  Read More
                  <ArrowRight
                    size={20}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;