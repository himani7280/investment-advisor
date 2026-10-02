import Image from "next/image";
import { investmentContent } from "../data/investmentContent";


const Aboutus = () => {
  const content = investmentContent.aboutPage;

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        pt-8
        sm:pt-9
        md:pt-10
        lg:pt-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-5
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-6
            lg:grid-cols-2
            lg:gap-7
          "
        >
          {/* ================= IMAGE SIDE ================= */}
          <div
            className="
              relative
              mx-auto
              h-full
              w-full
              p-2
            "
          >
            {/* Main Image */}
           <div className="relative mx-auto w-full max-w-[570px] -translate-y-2.5 sm:-translate-y-4">
            <div
              className="
                relative
                h-[330px]
                w-full
                overflow-hidden
                rounded-[22px]
                sm:h-[400px]
                lg:h-[570px]
              "
            >
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="scale-[1.08] object-cover object-top"
              />

              <div className="absolute bottom-4 right-4 z-10 flex h-[110px] w-[150px] items-center justify-center rounded-[18px] bg-[#0d5bd7] shadow-xl sm:bottom-6 sm:right-6 sm:h-[130px] sm:w-[180px]">
                <div className="text-center text-white">
                  <div className="text-[28px] font-bold leading-none sm:text-[42px]">30+</div>
                  <div className="mt-1 text-[12px] font-medium leading-tight sm:text-[16px]">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* ================= TEXT SIDE ================= */}
          <div
            className="
              flex
              flex-col
              justify-center
              lg:min-h-[420px]
            "
          >
            {/* Badge */}
            <div
              className="
                mb-3
                inline-flex
                w-fit
                rounded-full
                border
                border-blue-300
                px-4
                py-1
              "
            >
              <span
                className="
                  text-xs
                  font-semibold
                  tracking-wide
                  text-blue-600
                "
              >
                {content.badge}
              </span>
            </div>

            {/* Heading - Exactly 2 Lines */}
            <h2
              className="
                max-w-[520px]
                text-[26px]
                font-bold
                leading-[1.1]
                tracking-[-0.8px]
                text-slate-900
                sm:text-[34px]
                sm:leading-[1.08]
                lg:text-[40px]
                xl:text-[42px]
              "
            >
              {content.titleStart}
              <br />
              {content.titleMiddle}{" "}
              <span className="text-blue-600">
                {content.titleHighlight}
              </span>
            </h2>

            {/* Underline */}
            <div className="mb-4 mt-4 h-[3px] w-12 bg-blue-600" />

            {/* Description */}
            <div
              className="
                max-w-[570px]
                space-y-3
                text-[13px]
                leading-[1.6]
                text-slate-600
                sm:text-[14px]
                sm:leading-6
                lg:text-[15px]
              "
            >
              <p>
                {content.description}
              </p>

              <p>
                {content.description}
              </p>

              <p>
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;