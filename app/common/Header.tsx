
"use client";

import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#477fbd] to-[#3f75b2] text-white">
      <div className="mx-auto flex h-[37px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Left Side */}
        <div className="flex items-center gap-2">
          <span className="text-[16px]">↗</span>

          <span className="text-[13px] font-medium tracking-[0.2px] sm:text-[14px]">
            Invest Today. A Stronger Tomorrow.
          </span>
        </div>

        {/* Right Side */}
        <div className="hidden items-center md:flex">

          {/* Email */}
          <div className="flex items-center gap-2 px-4">
            <span className="text-[14px]">✉</span>

            <a
              href="mailto:info@primecore.com"
              className="text-[13px] transition hover:text-gray-200"
            >
              info@primecore.com
            </a>
          </div>

          {/* Separator */}
          <div className="h-5 w-px bg-white/40" />

          {/* Phone */}
          <div className="flex items-center gap-2 px-4">
            <span className="text-[14px]">☎</span>

            <a
              href="tel:+919876543210"
              className="text-[13px] transition hover:text-gray-200"
            >
              +91 98765 43210
            </a>
          </div>

          {/* Separator */}
          <div className="h-5 w-px bg-white/40" />

          {/* Social Icons */}
          <div className="flex items-center gap-4 pl-4">

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[20px] transition hover:scale-110"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-[20px] transition hover:scale-110"
            >
              f
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-[20px] transition hover:scale-110"
            >
              ◎
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

