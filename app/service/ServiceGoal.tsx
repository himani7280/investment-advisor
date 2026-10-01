
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Wealth Management",
    description:
      "Personalized strategies to grow and preserve your wealth for the long term.",
    image: "/service1.png",
    href: "/service/serviceDetail",
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
        <path
          d="M8 38V27H16V38H8Z"
          fill="currentColor"
        />
        <path
          d="M20 38V19H28V38H20Z"
          fill="currentColor"
        />
        <path
          d="M32 38V10H40V38H32Z"
          fill="currentColor"
        />
        <path
          d="M8 21L17 16L24 19L40 9"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 9H40V14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Retirement Planning",
    description:
      "Plan today for a financially independent and comfortable tomorrow.",
    image: "/service2.png",
    href: "/service/serviceDetail",
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 5L39 11V22C39 31 33 38 24 43C15 38 9 31 9 22V11L24 5Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M24 8V40M11 20H37"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    ),
  },
  {
    title: "Financial Planning",
    description:
      "Holistic financial plans tailored to your goals, lifestyle, and future aspirations.",
    image: "/service3.png",
    href: "/service/serviceDetail",
    icon: (
      <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
        <circle
          cx="24"
          cy="13"
          r="6"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="11"
          cy="20"
          r="5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="37"
          cy="20"
          r="5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M13 38C13 30 17.5 26 24 26C30.5 26 35 30 35 38"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M3 36C3 30.5 6 27 11 27"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M45 36C45 30.5 42 27 37 27"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Investment Advisory",
    description:
      "Expert guidance to help you make informed and confident investment decisions.",
    image: "/service.png",
    href: "/service/serviceDetail",
    icon: (
      <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
        <path
          d="M8 39V25H17V39H8Z"
          fill="currentColor"
        />
        <path
          d="M20 39V18H29V39H20Z"
          fill="currentColor"
        />
        <path
          d="M32 39V10H41V39H32Z"
          fill="currentColor"
        />
        <path
          d="M8 19L17 14L25 17L40 8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Risk Management",
    description:
      "Protect what matters most with customized risk management solutions.",
    image: "/service4.png",
    href: "/service/serviceDetail",
    icon: (
      <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
        <path
          d="M24 6V42"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M12 15H36"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M17 15L10 29C9 31 11 33 14 33H20C23 33 25 31 24 29L17 15Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M31 15L24 29C23 31 25 33 28 33H34C37 33 39 31 38 29L31 15Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Tax Planning",
    description:
      "Strategic tax planning to maximize savings and enhance returns.",
    image: "/service5.png",
    href: "/service/serviceDetail",
    icon: (
      <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
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
    title: "Estate Planning",
    description:
      "Ensure a smooth transfer of your wealth for future generations.",
    image: "/service6.png",
    href: "/service/serviceDetail",
    icon: (
      <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
        <circle
          cx="16"
          cy="17"
          r="5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="32"
          cy="17"
          r="5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M7 36C7 29 11 25 16 25C21 25 25 29 25 36"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M23 36C23 29 27 25 32 25C37 25 41 29 41 36"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Business Financial Advisory",
    description:
      "Tailored financial strategies to help your business grow and stay resilient.",
    image: "/service1.png",
    href: "/service/serviceDetail",
    icon: (
      <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
        <path
          d="M8 39V27H16V39H8Z"
          fill="currentColor"
        />
        <path
          d="M20 39V20H28V39H20Z"
          fill="currentColor"
        />
        <path
          d="M32 39V12H40V39H32Z"
          fill="currentColor"
        />
        <path
          d="M8 20L17 15L24 18L40 9"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ServiceGoal = () => {
  return (
    <section className="w-full bg-white pt-12 sm:pt-14 lg:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-9 text-center sm:mb-11 lg:mb-12">

          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-[68px]" />

            <span className="text-sm font-semibold tracking-wide text-[#6682ad]">
              OUR SERVICES
            </span>

            <span className="h-[2px] w-14 bg-[#5b9df9] sm:w-[68px]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#102e65] sm:text-4xl lg:text-[42px]">
            Financial Solutions for{" "}
            <span className="text-[#1769e0]">
              Every Goal
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#62799e] sm:text-base sm:leading-7">
            From wealth creation to risk management, our services are designed
            to meet your
            <br className="hidden sm:block" />
            unique financial needs at every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e2eaf5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                />
              </div>

              <div className="relative flex flex-1 flex-col px-5 pb-5 pt-12">

                <div className="absolute -top-8 left-5 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-white bg-[#e8f2ff] text-[#1769e0] shadow-sm transition-colors duration-200 hover:bg-[#1769e0] hover:text-white">
                  {service.icon}
                </div>

                <h3 className="min-h-12 text-lg font-bold leading-6 text-[#102e65]">
                  {service.title}
                </h3>

                <p className="mt-2 min-h-[68px] flex-1 text-sm leading-6 text-[#61799e]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-4 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#1769e0] transition hover:gap-4"
                >
                  Read More

                  <svg
                    width="21"
                    height="21"
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
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServiceGoal;