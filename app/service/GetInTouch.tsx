import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="w-full bg-white pt-8 pb-4 sm:pt-10 lg:pt-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            min-h-[330px]
            overflow-hidden
            rounded-xl
            bg-[#edf5ff]
            bg-cover
            bg-center
            sm:min-h-[300px]
            md:min-h-[270px]
            lg:h-[190px]
            lg:min-h-0
          "
          style={{
            backgroundImage: "url('/contact.png')",
          }}
        >
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-center
              px-6
              py-8
              sm:px-8
              md:px-10
              lg:px-12
              lg:py-0
            "
          >
            {/* Top Label */}
            <div className="mb-2 flex items-center gap-3 sm:gap-4">
              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-wide
                  text-[#607ba5]
                  sm:text-xs
                  md:text-sm
                "
              >
                LET&apos;S PLAN A BRIGHTER TOMORROW
              </span>

              <span className="h-[2px] w-10 shrink-0 bg-[#1769e0] sm:w-16" />
            </div>

            {/* Heading */}
            <h2
              className="
                text-2xl
                font-bold
                leading-tight
                text-[#102e65]
                sm:text-3xl
                lg:text-[34px]
              "
            >
              Ready to Take the Next Step?
            </h2>

            {/* Description */}
            <p
              className="
                mt-2
                max-w-[580px]
                text-sm
                leading-5
                text-[#60789e]
                sm:text-base
                sm:leading-6
              "
            >
              Connect with our experts today and get personalized financial
              guidance
              <br className="hidden sm:block" />
              based on your goals.
            </p>

            {/* Button */}
            <Link
              href="/contact"
              className="
                mt-6
                flex
                w-fit
                items-center
                gap-3
                rounded-md
                bg-[#1769e0]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-[#0f56c5]

                sm:mt-5

                lg:absolute
                lg:right-[23%]
                lg:top-1/2
                lg:mt-0
                lg:-translate-y-1/2
              "
            >
              Get in Touch

              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
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