
"use client";

import { MdMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoYoutube } from "react-icons/bi";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#477fbd] to-[#3f75b2] text-white">
      <div
        className="
          mx-auto
          flex
          min-h-[37px]
          w-full
          max-w-[1400px]
          items-center
          justify-between
          px-3
          sm:px-5
          md:px-6
          lg:px-8
          xl:px-10
          
        "
      >
        {/* Left - Tagline */}
        <div
          className="
            flex
            min-w-0
            items-center
            gap-2
            py-2
            pl-2
          "
        >
          <span className="shrink-0 text-[14px] sm:text-[15px] md:text-[16px]">
            ↗
          </span>

          <span
            className="
              truncate
              text-[11px]
              font-medium
              tracking-[0.1px]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Invest Today. A Stronger Tomorrow.
          </span>
        </div>

        {/* Right - Contact + Social */}
        <div className="hidden items-center md:flex">
          {/* Email */}
          <div className="flex items-center gap-2 px-3 lg:px-4">
            <MdMailOutline className="shrink-0 text-[16px]" />

            <a
              href="mailto:info@primecore.com"
              className="
                whitespace-nowrap
                text-[12px]
                transition
                hover:text-gray-200
                lg:text-[13px]
              "
            >
              info@primecore.com
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-white/40" />

          {/* Phone */}
          <div className="flex items-center gap-2 px-3 lg:px-4">
            <IoCall className="shrink-0 text-[15px]" />

            <a
              href="tel:+919876543210"
              className="
                whitespace-nowrap
                text-[12px]
                transition
                hover:text-gray-200
                lg:text-[13px]
              "
            >
              +91 98765 43210
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-white/40" />

          {/* Social Icons */}
          <div className="flex items-center gap-3 px-3 lg:gap-4 lg:px-1">
            <a
              href="#"
              aria-label="LinkedIn"
              className="
                text-[15px]
                transition-transform
                duration-200
                hover:scale-110
                lg:text-[16px]
              "
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="
                text-[15px]
                transition-transform
                duration-200
                hover:scale-110
                lg:text-[16px]
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="
                text-[15px]
                transition-transform
                duration-200
                hover:scale-110
                lg:text-[16px]
              "
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="
                text-[17px]
                transition-transform
                duration-200
                hover:scale-110
                lg:text-[18px]
              "
            >
              <BiLogoYoutube />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

