
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
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
    {
      name: "Our Services",
      href: "/service",
    },
    {
      name: "Investment Solutions",
      href: "/investment",
    },
    {
      name: "Resources",
      href: "/",
    },
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: "Careers",
      href: "/",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  const services = [
    {
      name: "Wealth Management",
      href: "/services/wealth-management",
    },
    {
      name: "Financial Planning",
      href: "/services/financial-planning",
    },
    {
      name: "Retirement Planning",
      href: "/services/retirement-planning",
    },
    {
      name: "Mutual Funds",
      href: "/services/mutual-funds",
    },
    {
      name: "Portfolio Management",
      href: "/services/portfolio-management",
    },
    {
      name: "Tax Planning",
      href: "/services/tax-planning",
    },
    {
      name: "Business Advisory",
      href: "/services/business-advisory",
    },
    {
      name: "Risk Management",
      href: "/services/risk-management",
    },
  ];

  return (
    <footer className="w-full bg-white">

      {/* ================= Main Footer ================= */}
      <div className="mx-auto max-w-[1250px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.85fr_0.85fr_1.1fr] lg:gap-8">

          {/* ================= Column 1 ================= */}
          <div className="lg:pr-6">

            {/* Logo */}
            <div className="mb-5">
              <Link href="/" aria-label="PrimeCore Investment Advisors Home">
                <Image
                  src="/logo.png"
                  alt="PrimeCore Investment Advisors"
                  width={310}
                  height={90}
                  className="h-auto w-[250px] object-contain sm:w-[285px]"
                />
              </Link>
            </div>

            {/* Description */}
            <p className="max-w-[330px] text-[14px] leading-[1.7] text-[#536582] sm:text-[15px]">
              Empowering individuals and businesses
              <br />
              with strategic investment solutions for a
              <br />
              secure and prosperous tomorrow.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce5f1] text-[#0b2855] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce5f1] text-[#0b2855] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce5f1] text-[#0b2855] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce5f1] text-[#0b2855] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <FaYoutube size={17} />
              </a>

            </div>
          </div>

          {/* ================= Column 2: Quick Links ================= */}
          <div className="border-l-0 border-[#e5ebf3] lg:border-l lg:pl-6">

            <h3 className="relative mb-7 inline-block text-[19px] font-bold text-[#0a2553] sm:text-[20px]">
              Quick Links

              <span className="absolute -bottom-2 left-0 h-[2.5px] w-9 rounded-full bg-[#0a2553]" />
            </h3>

            <ul className="space-y-[11px]">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2.5 text-[14px] text-[#52637e] transition-colors duration-200 hover:text-blue-600"
                  >
                    <FaChevronRight
                      size={9}
                      className="text-blue-600 transition-transform duration-200 group-hover:translate-x-1"
                    />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Column 3: Services ================= */}
          <div className="border-l-0 border-[#e5ebf3] lg:border-l lg:pl-6">

            <h3 className="relative mb-7 inline-block text-[19px] font-bold text-[#0a2553] sm:text-[20px]">
              Our Services

              <span className="absolute -bottom-2 left-0 h-[2.5px] w-9 rounded-full bg-[#0a2553]" />
            </h3>

            <ul className="space-y-[11px]">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2.5 text-[14px] text-[#52637e] transition-colors duration-200 hover:text-blue-600"
                  >
                    <FaChevronRight
                      size={9}
                      className="text-blue-600 transition-transform duration-200 group-hover:translate-x-1"
                    />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Column 4: Contact ================= */}
          <div className="border-l-0 border-[#e5ebf3] lg:border-l lg:pl-6">

            <h3 className="relative mb-7 inline-block text-[19px] font-bold text-[#0a2553] sm:text-[20px]">
              Contact Us

              <span className="absolute -bottom-2 left-0 h-[2.5px] w-9 rounded-full bg-[#0a2553]" />
            </h3>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#eaf2fd] text-[#1766d7]">
                  <FaMapMarkerAlt size={15} />
                </div>

                <p className="pt-[2px] text-[14px] leading-[1.55] text-[#52637e]">
                  123 Business Avenue,
                  <br />
                  New Delhi, 110001, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#eaf2fd] text-[#1766d7]">
                  <FaPhoneAlt size={13} />
                </div>

                <div className="pt-[2px] text-[14px] leading-[1.55] text-[#52637e]">
                  <a
                    href="tel:+919876543210"
                    className="block transition-colors hover:text-blue-600"
                  >
                    +91 98765 43210
                  </a>

                  <a
                    href="tel:+911145678900"
                    className="block transition-colors hover:text-blue-600"
                  >
                    +91 11 4567 8900
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#eaf2fd] text-[#1766d7]">
                  <FaEnvelope size={15} />
                </div>

                <a
                  href="mailto:info@primecoreadvisors.com"
                  className="text-[14px] text-[#52637e] transition-colors hover:text-blue-600"
                >
                  info@primecoreadvisors.com
                </a>
              </div>

              {/* Timing */}
              <div className="flex items-center gap-4">
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#eaf2fd] text-[#1766d7]">
                  <FaClock size={15} />
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
              href="/privacy-policy"
              className="transition-colors hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <Link
              href="/terms-conditions"
              className="transition-colors hover:text-blue-400"
            >
              Terms &amp; Conditions
            </Link>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <Link
              href="/disclaimer"
              className="transition-colors hover:text-blue-400"
            >
              Disclaimer
            </Link>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <Link
              href="/sitemap"
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
