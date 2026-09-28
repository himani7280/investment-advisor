import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="w-full bg-white pt-12 pb-4 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div
          className="relative h-[190px]  overflow-hidden rounded-xl bg-[#edf5ff] bg-cover bg-center"
          style={{
            backgroundImage: "url('/contact.png')",
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#edf5ff] via-[#edf5ff]/95 to-[#edf5ff]/20" /> */}

          <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-8 lg:px-12">

            <div className="mb-2 flex items-center gap-4">
              <span className="text-xs font-semibold tracking-wide text-[#607ba5] sm:text-sm">
                LET&apos;S PLAN A BRIGHTER TOMORROW
              </span>

              <span className="h-[2px] w-16 bg-[#1769e0]" />
            </div>

            <h2 className="text-2xl font-bold leading-tight text-[#102e65] sm:text-3xl lg:text-[34px]">
              Ready to Take the Next Step?
            </h2>

            <p className="mt-1 max-w-[580px] text-sm leading-5 text-[#60789e] sm:text-base sm:leading-6">
              Connect with our experts today and get personalized financial
              guidance
              <br className="hidden sm:block" />
              based on your goals.
            </p>

            <Link
              href="/contact"
              className="absolute right-[23%] top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-md bg-[#1769e0] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#0f56c5] sm:right-[25%] lg:right-[23%]"
            >
              Get in Touch

              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 7L19 12L14 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;