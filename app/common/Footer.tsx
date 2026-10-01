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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Our Services", href: "/service" },
    { name: "Investment Solutions", href: "/investment" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Wealth Management", href: "/investment" },
    { name: "Financial Planning", href: "/investment" },
    { name: "Retirement Planning", href: "/investment" },
    { name: "Mutual Funds", href: "/investment" },
    { name: "Portfolio Management", href: "/investment" },
    { name: "Tax Planning", href: "/investment" },
  ];

  return (
    <footer className="w-full bg-white font-sans text-[#52637e]">
      {/* ================= Main Footer ================= */}
      {/* Bottom padding reduced here (pb-4 sm:pb-6 lg:pb-6) */}
      <div className="mx-auto max-w-[1300px] px-6 pt-8 pb-4 sm:px-8 sm:pt-10 sm:pb-6 lg:px-10 lg:py-10">
        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1.1fr] lg:gap-8">
          
          {/* ================= Column 1: Logo & Info ================= */}
          <div className="flex h-full flex-col justify-between pr-0 lg:pr-2">
            <div>
              {/* Logo */}
              <div className="mb-4">
                <Link href="/" aria-label="PrimeCore Investment Advisors Home">
                  <Image
                    src="/logo.png"
                    alt="PrimeCore Investment Advisors"
                                width={285}
              height={55}
                    className="h-auto w-[220px] object-contain sm:w-[250px]"
                    priority
                  />
                </Link>
              </div>

              {/* Description */}
              <p className="max-w-[320px] text-[14px] leading-[1.6] text-[#5c6d88] sm:text-[15px]">
                Empowering individuals and businesses
                <br />
                with strategic investment solutions for a
                <br />
                secure and prosperous tomorrow.
              </p>
            </div>

            {/* Social Media Circular Buttons */}
            <div className="mt-4 flex items-center gap-3 pt-2 lg:mt-auto">
              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f7fc] text-[#0b2855] transition-all duration-300 hover:bg-[#2867b2] hover:text-white"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f7fc] text-[#0b2855] transition-all duration-300 hover:bg-[#1877f2] hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f7fc] text-[#0b2855] transition-all duration-300 hover:bg-[#1877f2] hover:text-white"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f7fc] text-[#0b2855] transition-all duration-300 hover:bg-[#1877f2] hover:text-white"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* ================= Column 2: Quick Links ================= */}
          <div className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-8">
            <h3 className="mb-2 text-[18px] font-bold text-[#021838]">
              Quick Links
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[14px] text-[#52637e] transition-colors duration-200 hover:text-[#0052cc]"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-[#0052cc] transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Column 3: Our Services ================= */}
          <div className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-8">
            <h3 className="mb-2 text-[18px] font-bold text-[#021838]">
              Our Services
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[14px] text-[#52637e] transition-colors duration-200 hover:text-[#0052cc]"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-[#0052cc] transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Column 4: Contact Us ================= */}
          <div className="flex h-full flex-col border-l-0 border-[#edf2f7] lg:border-l lg:pl-8">
            <h3 className="mb-2 text-[18px] font-bold text-[#021838]">
              Contact Us
            </h3>
            <div className="mb-4 h-[3px] w-8 rounded-full bg-[#0052cc]" />

            <div className="space-y-3.5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[#0052cc]">
                  <FaMapMarkerAlt size={15} />
                </div>
                <p className="pt-0.5 text-[14px] leading-snug text-[#52637e]">
                  123 Business Avenue,
                  <br />
                  New Delhi, 110001, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[#0052cc]">
                  <FaPhoneAlt size={14} />
                </div>
                <div className="pt-0.5 text-[14px] leading-relaxed text-[#52637e]">
                  <a
                    href="#"
                    className="block transition-colors hover:text-[#0052cc]"
                  >
                    +91 xxxxx xxxxx
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[#0052cc]">
                  <FaEnvelope size={14} />
                </div>
                <a
                  href="mailto:info@gmail.com.com"
                  className="text-[14px] text-[#52637e] transition-colors hover:text-[#0052cc]"
                >
                  info@gmail.com.com
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] text-[#0052cc]">
                  <FaClock size={14} />
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
      <div className="bg-[#021838] py-3 text-white">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-3 px-6 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">
          <p className="text-[13px] text-slate-300">
            © 2026 PrimeCore Investment Advisors. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-slate-300">
            <Link href="/privacyPolicy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span className="hidden h-4 w-px bg-slate-600 sm:block" />
            <Link href="/privacyPolicy" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span className="hidden h-4 w-px bg-slate-600 sm:block" />
            <Link href="/privacyPolicy" className="transition-colors hover:text-white">
              Disclaimer
            </Link>
            <span className="hidden h-4 w-px bg-slate-600 sm:block" />
            <Link href="/privacyPolicy" className="transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;