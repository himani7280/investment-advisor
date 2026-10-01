"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const isParentActive = (paths: string[]) => {
    return paths.some((path) => pathname === path);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (e: React.MouseEvent, menu: string) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="relative w-full max-w-full overflow-x-clip border-t border-[#2d6fc4] bg-white">
      <nav className="mx-auto w-full max-w-[1440px] px-3 sm:px-6">
        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden h-[80px] w-full items-center justify-between lg:flex">
          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="PrimeCore Investment Advisors"
              width={285}
              height={55}
              className="h-auto w-[160px] lg:w-[200px] xl:w-[260px]"
              priority
            />
          </Link>

          {/* LEFT DIVIDER */}
          <div className="mx-2 h-[36px] w-px shrink-0 bg-[#e5e7eb] xl:mx-4" />

          {/* NAV LINKS CONTAINER */}
          <div className="flex h-full min-w-0 flex-1 items-center justify-center gap-4 xl:gap-5">
            {/* HOME */}
            <Link
              href="/"
              className={`relative flex h-full items-center whitespace-nowrap text-[13px] xl:text-[14px] ${
                isActive("/")
                  ? "font-semibold text-[#1763b5]"
                  : "font-medium text-[#111827] hover:text-[#1763b5]"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
              )}
            </Link>

            {/* ABOUT DROPDOWN */}
            <div className="group relative h-full">
              <Link
                href="/aboutus"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive([
                    "/aboutus",
                    "/whyChooseUs",
                    "/MissionVision",
                    "/ourTeam",
                    "/teamDetails",
                  ])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                About Us
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive([
                  "/aboutus",
                  "/whyChooseUs",
                  "/MissionVision",
                  "/ourTeam",
                  "/teamDetails",
                ]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              {/* DROPDOWN MENU */}
              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/whyChooseUs"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Why Choose Us
                </Link>
                <Link
                  href="/MissionVision"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Mission & Vision
                </Link>
                <Link
                  href="/ourTeam"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Our Team
                </Link>
                <Link
                  href="/teamDetails"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Team Details
                </Link>
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div className="group relative h-full">
              <Link
                href="/service"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(["/service", "/service/serviceDetail"])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(["/service", "/service/serviceDetail"]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/service/serviceDetail"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Services Details
                </Link>
              </div>
            </div>

            {/* INVESTMENT PROCESS */}
            <div className="group relative h-full">
              <Link
                href="/investment"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive([
                    "/investment",
                    "/ourPartners",
                    "/testimonials",
                    "/awards",
                    "/faqs",
                  ])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                Investment Process
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive([
                  "/investment",
                  "/ourPartners",
                  "/testimonials",
                  "/awards",
                  "/faqs",
                ]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/ourPartners"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Our Partners
                </Link>
                <Link
                  href="/testimonials"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Testimonials
                </Link>
                <Link
                  href="/awards"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Awards
                </Link>
                <Link
                  href="/faqs"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* BLOG */}
            <div className="group relative h-full">
              <Link
                href="/blog"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(["/blog", "/blog/BlogDetail"])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                Blog
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(["/blog", "/blog/BlogDetail"]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[180px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/blog/BlogDetail"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Blog Details
                </Link>
              </div>
            </div>

            {/* CONTACT DROPDOWN (UPDATED) */}
            <div className="group relative h-full">
              <Link
                href="/contact"
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(["/contact", "/consultation"])
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                Contact Us
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(["/contact", "/consultation"]) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              {/* CONTACT DROPDOWN MENU */}
              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <Link
                  href="/bookConsultation"
                  className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT DIVIDER */}
          <div className="mx-2 h-[36px] w-px shrink-0 bg-[#e5e7eb] xl:mx-4" />

          {/* BUTTON */}
          <Link
            href="/consultation"
            className="flex h-[42px] shrink-0 items-center justify-center gap-2 rounded-[6px] bg-[#2d6fc4] px-3.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#245fa9] xl:h-[46px] xl:px-5 xl:text-[14px]"
          >
            <span className="whitespace-nowrap">Book a Consultation</span>
            <ArrowRight size={16} strokeWidth={1.8} className="shrink-0" />
          </Link>
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div className="flex h-[66px] w-full items-center justify-between lg:hidden">
          <Link href="/" onClick={closeMobileMenu} className="shrink-0">
            <Image
              src="/logo.png"
              alt="PrimeCore Investment Advisors"
              width={285}
              height={55}
              className="h-auto w-[160px] sm:w-[190px]"
              priority
            />
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#e5e7eb] text-[#111827]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="w-full max-w-full overflow-hidden border-t border-[#e5e7eb] bg-white pb-6 pt-2 lg:hidden">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block border-b border-[#f0f0f0] py-3 text-[15px] ${
                isActive("/") ? "font-semibold text-[#1763b5]" : "font-medium text-[#111827]"
              }`}
            >
              Home
            </Link>

            {/* ABOUT */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/aboutus"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  About Us
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "about")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "about" && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  <Link href="/whyChooseUs" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Why Choose Us
                  </Link>
                  <Link href="/MissionVision" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Mission & Vision
                  </Link>
                  <Link href="/ourTeam" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Our Team
                  </Link>
                  <Link href="/teamDetails" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Team Details
                  </Link>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/service"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "services")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "services" && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  <Link href="/service/serviceDetail" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Services Details
                  </Link>
                </div>
              )}
            </div>

            {/* INVESTMENT */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/investment"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  Investment Process
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "investment")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "investment" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "investment" && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  <Link href="/ourPartners" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Our Partners
                  </Link>
                  <Link href="/testimonials" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Testimonials
                  </Link>
                  <Link href="/awards" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Awards
                  </Link>
                  <Link href="/faqs" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            {/* BLOG */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  Blog
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "blog")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "blog" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "blog" && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  <Link href="/blog/BlogDetail" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Blog Details
                  </Link>
                </div>
              )}
            </div>

            {/* CONTACT DROPDOWN (UPDATED) */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  Contact Us
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, "contact")}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === "contact" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === "contact" && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  <Link href="/consultation" onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                    Book Consultation
                  </Link>
                </div>
              )}
            </div>

            {/* CONSULTATION BUTTON */}
            <Link
              href="/bookConsultation"
              onClick={closeMobileMenu}
              className="mt-4 flex h-[46px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#2d6fc4] text-[14px] font-semibold text-white"
            >
              Book a Consultation
              <ArrowRight size={18} strokeWidth={1.8} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;