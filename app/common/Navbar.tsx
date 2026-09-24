"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const servicesActive = pathname.startsWith("/services");

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="w-full border-t border-[#2d6fc4] bg-white">
      <nav className="mx-auto max-w-[1440px]">

        {/* ================= DESKTOP / TABLET NAVBAR ================= */}
        <div className="hidden h-[80px] items-center px-6 sm:px-8 lg:flex xl:px-[60px]">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="PrimeCore Investment Advisors"
              width={285}
              height={55}
              className="h-auto w-[220px] xl:w-[285px]"
              priority
            />
          </Link>

          {/* Left Divider */}
          <div className="mx-5 h-[40px] w-px bg-[#e5e7eb] xl:mx-[30px]" />

          {/* Desktop Menu */}
          <div className="flex h-full flex-1 items-center justify-center gap-5 xl:gap-[30px]">

            {/* Home */}
            <Link
              href="/"
              className={`relative flex h-full items-center whitespace-nowrap
                text-[13px] xl:text-[14px]
                ${
                  isActive("/")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }
                ${
                  isActive("/")
                    ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                    : ""
                }
              `}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/aboutus"
              className={`relative flex h-full items-center whitespace-nowrap
                text-[13px] xl:text-[14px]
                ${
                  isActive("/about")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }
                ${
                  isActive("/about")
                    ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                    : ""
                }
              `}
            >
              About Us
            </Link>

            {/* Services */}
            <div className="relative flex h-full items-center">

              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`relative flex h-full items-center gap-1
                  whitespace-nowrap text-[13px] xl:text-[14px]
                  ${
                    servicesActive
                      ? "font-semibold text-[#1763b5]"
                      : "font-medium text-[#111827] hover:text-[#1763b5]"
                  }
                  ${
                    servicesActive
                      ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                      : ""
                  }
                `}
              >
                Services

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Services Dropdown */}
              {servicesOpen && (
                <div
                  className="absolute left-0 top-[68px] z-50
                  w-[210px] overflow-hidden rounded-md
                  border border-[#e5e7eb] bg-white
                  py-2 shadow-[0_8px_25px_rgba(0,0,0,0.10)]"
                >
                  <Link
                    href="/services/investment"
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-3 text-[14px]
                    text-[#111827] transition hover:bg-[#f5f8fc]
                    hover:text-[#1763b5]"
                  >
                    Investment Advisory
                  </Link>

                  <Link
                    href="/services/portfolio"
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-3 text-[14px]
                    text-[#111827] transition hover:bg-[#f5f8fc]
                    hover:text-[#1763b5]"
                  >
                    Portfolio Management
                  </Link>

                  <Link
                    href="/services/wealth"
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-3 text-[14px]
                    text-[#111827] transition hover:bg-[#f5f8fc]
                    hover:text-[#1763b5]"
                  >
                    Wealth Planning
                  </Link>
                </div>
              )}
            </div>

            {/* Investment Process */}
            <Link
              href="/investment-process"
              className={`relative flex h-full items-center whitespace-nowrap
                text-[13px] xl:text-[14px]
                ${
                  isActive("/investment-process")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }
                ${
                  isActive("/investment-process")
                    ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                    : ""
                }
              `}
            >
              Investment Process
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={`relative flex h-full items-center whitespace-nowrap
                text-[13px] xl:text-[14px]
                ${
                  isActive("/blog")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }
                ${
                  isActive("/blog")
                    ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                    : ""
                }
              `}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`relative flex h-full items-center whitespace-nowrap
                text-[13px] xl:text-[14px]
                ${
                  isActive("/contact")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }
                ${
                  isActive("/contact")
                    ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                    : ""
                }
              `}
            >
              Contact Us
            </Link>

          </div>

          {/* Right Divider */}
          <div className="mx-5 h-[40px] w-px bg-[#e5e7eb] xl:mx-[35px]" />

          {/* Consultation Button */}
          <Link
            href="/consultation"
            className="flex h-[46px] w-[180px] xl:w-[197px]
            shrink-0 items-center justify-center gap-3
            rounded-[6px] bg-[#2d6fc4]
            text-[13px] xl:text-[14px]
            font-semibold text-white
            shadow-[0_3px_8px_rgba(45,111,196,0.25)]
            transition hover:bg-[#245fa9]"
          >
            Book a Consultation

            <ArrowRight
              size={19}
              strokeWidth={1.8}
            />
          </Link>

        </div>

        {/* ================= MOBILE NAVBAR ================= */}
        <div className="flex h-[70px] items-center justify-between px-5 sm:h-[76px] sm:px-8 lg:hidden">

          {/* Mobile Logo */}
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="PrimeCore Investment Advisors"
              width={285}
              height={55}
              className="h-auto w-[190px] sm:w-[220px]"
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center
            justify-center rounded-md border border-[#e5e7eb]
            text-[#111827] transition
            hover:border-[#2d6fc4]
            hover:text-[#2d6fc4]"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div
            className="border-t border-[#e5e7eb] bg-white
            px-5 pb-6 pt-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            sm:px-8 lg:hidden"
          >

            {/* Home */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`flex items-center border-b border-[#f0f0f0]
                py-4 text-[15px]
                ${
                  isActive("/")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827]"
                }`}
            >
              Home

              {isActive("/") && (
                <span className="ml-auto h-[3px] w-7 rounded-full bg-[#1763b5]" />
              )}
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`flex items-center border-b border-[#f0f0f0]
                py-4 text-[15px]
                ${
                  isActive("/about")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827]"
                }`}
            >
              About Us

              {isActive("/about") && (
                <span className="ml-auto h-[3px] w-7 rounded-full bg-[#1763b5]" />
              )}
            </Link>

            {/* Mobile Services */}
            <div className="border-b border-[#f0f0f0]">

              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex w-full items-center justify-between
                  py-4 text-[15px]
                  ${
                    servicesActive
                      ? "font-semibold text-[#1763b5]"
                      : "font-medium text-[#111827]"
                  }`}
              >
                <span>Services</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Services Items */}
              {servicesOpen && (
                <div className="mb-3 ml-3 border-l-2 border-[#2d6fc4] pl-4">

                  <Link
                    href="/services/investment"
                    onClick={closeMobileMenu}
                    className="block py-2.5 text-[14px]
                    text-[#555] hover:text-[#1763b5]"
                  >
                    Investment Advisory
                  </Link>

                  <Link
                    href="/services/portfolio"
                    onClick={closeMobileMenu}
                    className="block py-2.5 text-[14px]
                    text-[#555] hover:text-[#1763b5]"
                  >
                    Portfolio Management
                  </Link>

                  <Link
                    href="/services/wealth"
                    onClick={closeMobileMenu}
                    className="block py-2.5 text-[14px]
                    text-[#555] hover:text-[#1763b5]"
                  >
                    Wealth Planning
                  </Link>

                </div>
              )}

            </div>

            {/* Investment Process */}
            <Link
              href="/investment-process"
              onClick={closeMobileMenu}
              className={`flex items-center border-b border-[#f0f0f0]
                py-4 text-[15px]
                ${
                  isActive("/investment-process")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827]"
                }`}
            >
              Investment Process

              {isActive("/investment-process") && (
                <span className="ml-auto h-[3px] w-7 rounded-full bg-[#1763b5]" />
              )}
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className={`flex items-center border-b border-[#f0f0f0]
                py-4 text-[15px]
                ${
                  isActive("/blog")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827]"
                }`}
            >
              Blog

              {isActive("/blog") && (
                <span className="ml-auto h-[3px] w-7 rounded-full bg-[#1763b5]" />
              )}
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`flex items-center border-b border-[#f0f0f0]
                py-4 text-[15px]
                ${
                  isActive("/contact")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827]"
                }`}
            >
              Contact Us

              {isActive("/contact") && (
                <span className="ml-auto h-[3px] w-7 rounded-full bg-[#1763b5]" />
              )}
            </Link>

            {/* Mobile Consultation Button */}
            <Link
              href="/consultation"
              onClick={closeMobileMenu}
              className="mt-5 flex h-[48px] w-full
              items-center justify-center gap-3
              rounded-[6px] bg-[#2d6fc4]
              text-[14px] font-semibold text-white
              shadow-[0_3px_8px_rgba(45,111,196,0.25)]
              transition hover:bg-[#245fa9]"
            >
              Book a Consultation

              <ArrowRight
                size={19}
                strokeWidth={1.8}
              />
            </Link>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;