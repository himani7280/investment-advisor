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

        <div className="hidden h-[80px] items-center px-6 sm:px-8 lg:flex xl:px-[60px]">

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

          <div className="mx-5 h-[40px] w-px bg-[#e5e7eb] xl:mx-[30px]" />

          <div className="flex h-full flex-1 items-center justify-center gap-5 xl:gap-[30px]">

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

            <Link
              href="/aboutus"
              className={`relative flex h-full items-center whitespace-nowrap
                text-[13px] xl:text-[14px]
                ${
                  isActive("/aboutus")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }
                ${
                  isActive("/aboutus")
                    ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                    : ""
                }
              `}
            >
              About Us
            </Link>

                        <Link
              href="/service"
              className={`relative flex h-full items-center whitespace-nowrap
                text-[13px] xl:text-[14px]
                ${
                  isActive("/service")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }
                ${
                  isActive("/service")
                    ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                    : ""
                }
              `}
            >
              Service
            </Link>

            <Link
              href="/investment"
              className={`relative flex h-full items-center whitespace-nowrap
                text-[13px] xl:text-[14px]
                ${
                  isActive("/investment")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827] hover:text-[#1763b5]"
                }
                ${
                  isActive("/investment")
                    ? "after:absolute after:bottom-[13px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#1763b5]"
                    : ""
                }
              `}
            >
              Investment Process
            </Link>

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

          <div className="mx-5 h-[40px] w-px bg-[#e5e7eb] xl:mx-[35px]" />

          <Link
            href="/contact"
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

        <div className="flex h-[70px] items-center justify-between px-5 sm:h-[76px] sm:px-8 lg:hidden">

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

        {mobileMenuOpen && (
          <div
            className="border-t border-[#e5e7eb] bg-white
            px-5 pb-6 pt-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            sm:px-8 lg:hidden"
          >

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

            <Link
              href="/aboutus"
              onClick={closeMobileMenu}
              className={`flex items-center border-b border-[#f0f0f0]
                py-4 text-[15px]
                ${
                  isActive("/aboutus")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827]"
                }`}
            >
              About Us

              {isActive("/aboutus") && (
                <span className="ml-auto h-[3px] w-7 rounded-full bg-[#1763b5]" />
              )}
            </Link>

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

              {/* {servicesOpen && (
                <div className="mb-3 ml-3 border-l-2 border-[#2d6fc4] pl-4">

                  <Link
                    href="/service"
                    onClick={closeMobileMenu}
                    className="block py-2.5 text-[14px]
                    text-[#555] hover:text-[#1763b5]"
                  >
                    Investment Advisory
                  </Link>

                  <Link
                    href="/services/portfoli"
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
              )} */}

            </div>

            <Link
              href="/investment"
              onClick={closeMobileMenu}
              className={`flex items-center border-b border-[#f0f0f0]
                py-4 text-[15px]
                ${
                  isActive("/investment")
                    ? "font-semibold text-[#1763b5]"
                    : "font-medium text-[#111827]"
                }`}
            >
              Investment Process

              {isActive("/investment") && (
                <span className="ml-auto h-[3px] w-7 rounded-full bg-[#1763b5]" />
              )}
            </Link>

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

            <Link
              href="/contact"
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