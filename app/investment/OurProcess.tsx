const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your financial goals, current situation, and future aspirations.",
    icon: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 17.5C10 12.253 14.477 8 20 8H28C33.523 8 38 12.253 38 17.5C38 22.747 33.523 27 28 27H22L15 33V27.5C11.993 25.78 10 22.62 10 17.5Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="19" cy="18" r="1.8" fill="currentColor" />
        <circle cx="24" cy="18" r="1.8" fill="currentColor" />
        <circle cx="29" cy="18" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We analyze your needs and create a personalized investment strategy.",
    icon: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 6H29L36 13V42H14V6Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M29 6V14H36"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M19 21H31M19 27H31M19 33H27"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Implement",
    description:
      "We put your plan into action with the right investment solutions.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 7L27 10.5L32 9.5L34 14L39 16L37.5 21L41 24L37.5 27L39 32L34 34L32 39L27 37.5L24 41L21 37.5L16 39L14 34L9 32L10.5 27L7 24L10.5 21L9 16L14 14L16 9.5L21 10.5L24 7Z"
          fill="currentColor"
        />
        <circle cx="24" cy="24" r="6" fill="white" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Monitor",
    description:
      "We continuously track performance and make adjustments as needed.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 39V27H17V39H9Z" fill="currentColor" />
        <path d="M20 39V20H28V39H20Z" fill="currentColor" />
        <path d="M31 39V12H39V39H31Z" fill="currentColor" />
        <path
          d="M9 19L18 14L25 17L38 8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 8H38V13"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Grow",
    description:
      "We help you stay on track to achieve long-term financial success.",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="15"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r="6"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M24 9V18M39 24H30M24 39V30M9 24H18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M24 24L34 14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M30 14H34V18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const OurProcess = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">

          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-18" />

            <span className="text-sm font-semibold tracking-wide text-[#6382ae]">
              OUR PROCESS
            </span>

            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-18" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#102e65] sm:text-4xl lg:text-[42px]">
            A Clear Path to{" "}
            <span className="text-[#1769e0]">
              Financial Success
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[#61799e] sm:text-base sm:leading-7">
            We follow a simple, transparent, and client-focused process to
            understand your needs,
            <br className="hidden sm:block" />
            create the right strategy, and help you achieve your financial
            goals.
          </p>
        </div>

        {/* ================= PROCESS STEPS ================= */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">

          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >

              {/* ================= ICON ================= */}
              <div className="relative mb-5">

                {/* NUMBER */}
                <div
                  className="
                    absolute
                    -left-1
                    -top-6
                    z-20
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-[#d8e8ff]
                    bg-white
                    text-base
                    font-bold
                    text-[#17376d]
                  "
                >
                  {step.number}
                </div>

                {/* ICON CIRCLE */}
                <div
                  className="
                    flex
                    h-[92px]
                    w-[92px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#eaf3ff]
                    text-[#1769e0]
                  "
                >
                  {step.icon}
                </div>
              </div>

              {/* ================= TITLE ================= */}
              <h3 className="mb-2 text-xl font-bold text-[#102e65]">
                {step.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}
              <p className="max-w-[190px] text-sm leading-5 text-[#60789e]">
                {step.description}
              </p>

              {/* ================= ARROW / CONNECTOR ================= */}
              {index < processSteps.length - 1 && (
                <div
                  className="
                    absolute
                    left-[calc(100%_-_1px)]
                    top-[46px]
                    hidden
                    w-[70px]
                    lg:block
                  "
                >
                  <div className="relative flex w-full justify-center items-center right-8">

                    {/* LINE */}
                    <div className="h-[2px] w-full bg-[#8ebeff]" />

                    {/* ARROW */}
                    <span
                      className="
                        absolute
                        right-0
                        top-1/2
                        flex
                        h-5
                        w-5
                        -translate-y-1/2
                        items-center
                        justify-center
                        bg-white
                        text-[#1769e0]
                      "
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6H10M6 2L10 6L6 10"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                  </div>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurProcess;