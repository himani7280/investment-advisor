import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About Us",
    "Our Services",
    "Investment Solutions",
    "Resources",
    "Blog",
    "Careers",
    "Contact Us",
  ];

  const services = [
    "Wealth Management",
    "Financial Planning",
    "Retirement Planning",
    "Mutual Funds",
    "Portfolio Management",
    "Tax Planning",
    "Business Advisory",
    "Risk Management",
  ];

  return (
    <footer className="w-full bg-white">

      {/* ================= Main Footer ================= */}
      <div className="mx-auto max-w-[1250px] px-6 py-4 sm:px-8 lg:px-10 ">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.9fr_1.1fr] lg:gap-8">

          {/* ================= Logo & About ================= */}
          <div className="lg:pr-8">

            {/* Logo */}
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="PrimeCore Investment Advisors"
                width={310}
                height={90}
                className="h-auto w-[250px] object-contain sm:w-[285px]"
              />
            </div>

            {/* Description */}
            <p className="max-w-[330px] text-[14px] leading-[1.65] text-[#536582] sm:text-[15px]">
              Empowering individuals and businesses
              <br className="hidden sm:block" />
              with strategic investment solutions for a
              <br className="hidden sm:block" />
              secure and prosperous tomorrow.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-4">

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dce5f1] text-[#0b2855] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn size={19} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dce5f1] text-[#0b2855] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dce5f1] text-[#0b2855] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#dce5f1] text-[#0b2855] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaYoutube size={19} />
              </a>

            </div>
          </div>

          {/* ================= Quick Links ================= */}
          <div className="border-l-0 border-[#e5ebf3] lg:border-l lg:pl-8">

            <h3 className="relative mb-6 inline-block text-[20px] font-bold text-[#0a2553]">
              Quick Links

              <span className="absolute -bottom-3 left-0 h-[3px] w-10 rounded-full bg-blue-600" />
            </h3>

            <ul className="space-y-[10px]">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-[14px] text-[#52637e] transition-colors duration-200 hover:text-blue-600"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-blue-600 transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Services ================= */}
          <div className="border-l-0 border-[#e5ebf3] lg:border-l lg:pl-8">

            <h3 className="relative mb-6 inline-block text-[20px] font-bold text-[#0a2553]">
              Our Services

              <span className="absolute -bottom-3 left-0 h-[3px] w-10 rounded-full bg-blue-600" />
            </h3>

            <ul className="space-y-[10px]">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-[14px] text-[#52637e] transition-colors duration-200 hover:text-blue-600"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-blue-600 transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Contact ================= */}
          <div className="border-l-0 border-[#e5ebf3] lg:border-l lg:pl-8">

            <h3 className="relative mb-7 inline-block text-[20px] font-bold text-[#0a2553]">
              Contact Us

              <span className="absolute -bottom-3 left-0 h-[3px] w-10 rounded-full bg-blue-600" />
            </h3>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-blue-600">
                  <FaMapMarkerAlt size={18} />
                </div>

                <p className="pt-1 text-[14px] leading-6 text-[#52637e]">
                  123 Business Avenue,
                  <br />
                  New Delhi, 110001, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-blue-600">
                  <FaPhoneAlt size={16} />
                </div>

                <p className="pt-1 text-[14px] leading-6 text-[#52637e]">
                  +91 98765 43210
                  <br />
                  +91 11 4567 8900
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-blue-600">
                  <FaEnvelope size={18} />
                </div>

                <a
                  href="mailto:info@primecoreadvisors.com"
                  className="text-[14px] text-[#52637e] hover:text-blue-600"
                >
                  info@primecoreadvisors.com
                </a>
              </div>

              {/* Timing */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf5ff] text-blue-600">
                  <FaClock size={18} />
                </div>

                <p className="text-[14px] text-[#52637e]">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= Bottom Bar ================= */}
      <div className="bg-[#031d43] text-white">
        <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-4 px-6 py-4 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">

          {/* Copyright */}
          <p className="text-[13px] text-white/85 sm:text-[14px]">
            © 2026 PrimeCore Investment Advisors. All Rights Reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-white/85 sm:text-[14px]">

            <Link
              href="#"
              className="transition-colors hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <Link
              href="#"
              className="transition-colors hover:text-blue-400"
            >
              Terms & Conditions
            </Link>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <Link
              href="#"
              className="transition-colors hover:text-blue-400"
            >
              Disclaimer
            </Link>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <Link
              href="#"
              className="transition-colors hover:text-blue-400"
            >
              Sitemap
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;