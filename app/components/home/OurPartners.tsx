import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "Allianz", logo: "/partners/allianz.png" },
  { id: 2, name: "AXA", logo: "/partners/axa.png" },
  { id: 3, name: "HDFC Life", logo: "/partners/hdfc-life.png" },
  { id: 4, name: "ICICI Lombard", logo: "/partners/icici-lombard.png" },
  { id: 5, name: "Bajaj Allianz", logo: "/partners/bajaj-allianz.png" },
  { id: 6, name: "TATA AIA", logo: "/partners/tata-aia.png" },
  { id: 7, name: "SBI Life", logo: "/partners/sbi-life.png" },
  { id: 8, name: "Max Life", logo: "/partners/max-life.png" },
  {
    id: 9,
    name: "Reliance General Insurance",
    logo: "/partners/reliance-general-insurance.png",
  },
  {
    id: 10,
    name: "Kotak General Insurance",
    logo: "/partners/kotak-general-insurance.png",
  },
  { id: 11, name: "Bharti AXA", logo: "/partners/bharti-axa.png" },
  { id: 12, name: "LIC", logo: "/partners/lic.png" },
  { id: 13, name: "Digit", logo: "/partners/digit.png" },
  {
    id: 14,
    name: "Kotak Life Insurance",
    logo: "/partners/kotak-life-insurance.png",
  },
  {
    id: 15,
    name: "Policybazaar",
    logo: "/partners/policybazaar.png",
  },
];

const OurPartners = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 sm:pt-10 md:pt-12 lg:pt-14">
      {/* Background Decorative Dots */}
      <div className="absolute left-8 top-16 hidden sm:block">
        <div className="grid grid-cols-5 gap-[10px]">
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="h-[4px] w-[4px] rounded-full bg-[#b8d4fa]"
            />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 mx-auto max-w-[850px] px-4 text-center">
        <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
          <span className="h-[2px] w-[53px] bg-[#2778e8]" />
          <span className="text-[12px] font-semibold tracking-[1.5px] text-[#2778e8]">
            OUR PARTNERS
          </span>
          <span className="h-[2px] w-[53px] bg-[#2778e8]" />
        </div>

        <h2 className="text-[28px] font-bold leading-tight text-[#092452] sm:text-[40px] lg:text-[46px]">
          Stronger Together
          <br />
          With Our{" "}
          <span className="text-[#1474e8]">
            Trusted Partners
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-[650px] text-[14px] leading-[1.5] text-[#7385a1] sm:mt-4 sm:text-[15px]">
          We collaborate with leading organizations to deliver greater value,
          <br className="hidden sm:block" />
          innovation, and opportunities for our clients.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-6 max-w-[1160px] px-2 sm:mt-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 min-[420px]:grid-cols-2 sm:grid-cols-3 sm:gap-x-3 sm:gap-y-3 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex h-[120px] min-w-0 items-center justify-center rounded-md px-1 sm:h-[144px] sm:px-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={300}
                height={120}
                className="h-full w-full scale-105 object-contain mix-blend-multiply transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;