"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { investmentContent } from "../data/investmentContent";

const Navbar = () => {
  const pathname = usePathname();
  const content = investmentContent.siteChrome;
  const navigation = content.header.navigation;
  const [homeItem, aboutItem, servicesItem, investmentItem, blogItem, contactItem] = navigation.items;

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
    <header className="fixed top-[37px] z-50 w-full max-w-full overflow-x-clip border-t border-[#2d6fc4] bg-white shadow-sm">
      <nav className="mx-auto w-full max-w-[1440px] px-3 sm:px-10">
        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden h-[80px] w-full items-center justify-between lg:flex">
          {/* LOGO */}
          <Link href={homeItem.href} className="shrink-0">
            <Image
              src={content.logo}
              alt={content.brandName}
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
              href={homeItem.href}
              className={`relative flex h-full items-center whitespace-nowrap text-[13px] xl:text-[14px] ${
                isActive("/")
                  ? "font-semibold text-[#1763b5]"
                  : "font-medium text-[#111827] hover:text-[#1763b5]"
              }`}
            >
              {homeItem.label}
              {isActive("/") && (
                <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
              )}
            </Link>

            {/* ABOUT DROPDOWN */}
            <div className="group relative h-full">
              <Link
                href={aboutItem.href}
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(aboutItem.activePaths)
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {aboutItem.label}
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(aboutItem.activePaths) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              {/* DROPDOWN MENU */}
              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {aboutItem.children.map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div className="group relative h-full">
              <Link
                href={servicesItem.href}
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(servicesItem.activePaths)
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {servicesItem.label}
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(servicesItem.activePaths) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {servicesItem.children.map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* INVESTMENT PROCESS */}
            <div className="group relative h-full">
              <Link
                href={investmentItem.href}
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(investmentItem.activePaths)
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {investmentItem.label}
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(investmentItem.activePaths) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {investmentItem.children.map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* BLOG */}
            <div className="group relative h-full">
              <Link
                href={blogItem.href}
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(blogItem.activePaths)
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {blogItem.label}
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(blogItem.activePaths) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[180px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {blogItem.children.map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT DROPDOWN (UPDATED) */}
            <div className="group relative h-full">
              <Link
                href={contactItem.href}
                className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14px] ${
                  isParentActive(contactItem.activePaths)
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }`}
              >
                {contactItem.label}
                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
                {isParentActive(contactItem.activePaths) && (
                  <span className="absolute bottom-[13px] left-0 h-[3px] w-full rounded-full bg-[#1763b5]" />
                )}
              </Link>

              {/* CONTACT DROPDOWN MENU */}
              <div className="invisible absolute left-1/2 top-[80px] z-50 w-[200px] -translate-x-1/2 rounded-md border border-[#e5e7eb] bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {contactItem.children.map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm font-medium text-[#111827] hover:bg-[#f5f9fe] hover:text-[#1763b5]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT DIVIDER */}
          <div className="mx-2 h-[36px] w-px shrink-0 bg-[#e5e7eb] xl:mx-4" />

          {/* BUTTON */}
          <Link
            href={navigation.consultationButton.href}
            className="flex h-[42px] shrink-0 items-center justify-center gap-2 rounded-[6px] bg-[#2d6fc4] px-3.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#245fa9] lg:px-3 xl:h-[46px] xl:px-4 xl:text-[14px]"
          >
            <span className="whitespace-nowrap">{navigation.consultationButton.label}</span>
            <ArrowRight size={16} strokeWidth={1.8} className="shrink-0" />
          </Link>
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div className="flex h-[66px] w-full items-center justify-between lg:hidden">
          <Link href={homeItem.href} onClick={closeMobileMenu} className="shrink-0">
            <Image
              src={content.logo}
              alt={content.brandName}
              width={285}
              height={55}
              className="h-auto w-[160px] sm:w-[190px]"
              priority
            />
          </Link>

          <button
            type="button"
            aria-label={mobileMenuOpen ? navigation.closeMenuLabel : navigation.openMenuLabel}
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
              href={homeItem.href}
              onClick={closeMobileMenu}
              className={`block border-b border-[#f0f0f0] py-3 text-[15px] ${
                isActive("/") ? "font-semibold text-[#1763b5]" : "font-medium text-[#111827]"
              }`}
            >
              {homeItem.label}
            </Link>

            {/* ABOUT */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={aboutItem.href}
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {aboutItem.label}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, aboutItem.key)}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === aboutItem.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === aboutItem.key && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  {aboutItem.children.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* SERVICES */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={servicesItem.href}
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {servicesItem.label}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, servicesItem.key)}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === servicesItem.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === servicesItem.key && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  {servicesItem.children.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* INVESTMENT */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={investmentItem.href}
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {investmentItem.label}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, investmentItem.key)}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === investmentItem.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === investmentItem.key && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  {investmentItem.children.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* BLOG */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={blogItem.href}
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {blogItem.label}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, blogItem.key)}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === blogItem.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === blogItem.key && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  {blogItem.children.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CONTACT DROPDOWN (UPDATED) */}
            <div className="border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={contactItem.href}
                  onClick={closeMobileMenu}
                  className="text-[15px] font-medium text-[#111827]"
                >
                  {contactItem.label}
                </Link>
                <button
                  type="button"
                  onClick={(e) => toggleMobileDropdown(e, contactItem.key)}
                  className="p-1"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileDropdown === contactItem.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileDropdown === contactItem.key && (
                <div className="mb-2 ml-3 border-l-2 border-[#e8f1fb] pl-3">
                  {contactItem.children.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeMobileMenu} className="block py-2 text-sm text-[#555]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CONSULTATION BUTTON */}
            <Link
              href={navigation.consultationButton.href}
              onClick={closeMobileMenu}
              className="mt-4 flex h-[46px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#2d6fc4] text-[14px] font-semibold text-white"
            >
              {navigation.consultationButton.label}
              <ArrowRight size={18} strokeWidth={1.8} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;