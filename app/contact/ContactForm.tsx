"use client";

import React from "react";
import {
  User,
  Mail,
  Phone,
  Grid2X2,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  MapPin,
  Headphones,
} from "lucide-react";
import { investmentContent } from "../data/investmentContent";

const content = investmentContent.contactForm;

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <section className="w-full bg-white px-4 pt-8 sm:px-6 md:px-8 lg:px-10 xl:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-[#f8fbff] lg:grid-cols-[1.25fr_0.85fr]">

          <div className="p-5 sm:p-8 md:p-10 lg:p-8 xl:p-10">
            
            <div className="mb-7">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
                  {content.formBadge}
                </span>

                <span className="h-[2px] w-16 bg-[#3478e5]" />
              </div>

              <h2 className="text-2xl font-bold leading-tight text-[#102b66] sm:text-4xl">
                {content.formTitleStart}{" "}
                <span className="text-[#1265e8]">{content.formTitleHighlight}</span>
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#71809d] sm:text-base">
                {content.formDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="relative">
                  <User
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />

                  <input
                    type="text"
                    name="name"
                    placeholder={content.namePlaceholder}
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#5d6e89] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder={content.emailPlaceholder}
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#5d6e89] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="relative">
                  <Phone
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder={content.phonePlaceholder}
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#5d6e89] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  />
                </div>

                <div className="relative">
                  <Grid2X2
                    size={18}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7184a7]"
                  />

                  <select
                    name="interest"
                    defaultValue=""
                    className="h-[52px] w-full appearance-none rounded-md border border-[#dce7f7] bg-white pl-12 pr-11 text-sm text-[#5d6e89] outline-none transition focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  >
                    <option value="" disabled>
                      {content.interestPlaceholder}
                    </option>
                    {content.interestOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>

                  <ChevronDown
                    size={19}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#587096]"
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare
                  size={19}
                  strokeWidth={1.8}
                  className="absolute left-4 top-4 text-[#7184a7]"
                />

                <textarea
                  name="message"
                  placeholder={content.messagePlaceholder}
                  required
                  rows={6}
                  className="min-h-[150px] w-full resize-y rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 pt-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#5d6e89] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10 sm:min-h-[170px]"
                />
              </div>

              <button
                type="submit"
                className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-md bg-[#1168ed] px-7 text-sm font-semibold text-white transition hover:bg-[#095bd5] sm:w-[250px]"
              >
                {content.submitText}

                <ArrowRight
                  size={20}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          <div className="border-t border-[#dce7f7] bg-white p-5 sm:p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-8 xl:p-10">

            <div className="mb-7">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
                  {content.contactBadge}
                </span>

                <span className="h-[2px] w-16 bg-[#3478e5]" />
              </div>

              <h2 className="text-2xl font-bold leading-tight text-[#102b66] sm:text-4xl">
                {content.contactTitleStart}{" "}
                <span className="text-[#1265e8]">{content.contactTitleHighlight}</span>
              </h2>

              <p className="mt-2 max-w-[430px] text-sm leading-6 text-[#71809d] sm:text-base">
                {content.contactDescription}
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex gap-3 sm:gap-5">
                <div className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 hover:bg-[#1265e8] sm:h-[66px] sm:w-[66px]">
                  <Phone
                    size={29}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#102b66]">
                    {content.callTitle}
                  </h3>

                  <a
                    href={content.phoneHref}
                    className="mt-1 block text-[15px] font-medium text-[#314b7b] hover:text-[#1265e8]"
                  >
                    {content.phone}
                  </a>

                  <p className="mt-1 text-sm text-[#71809d]">
                    {content.callHours}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-5">
                <div className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 hover:bg-[#1265e8] sm:h-[66px] sm:w-[66px]">
                  <Mail
                    size={29}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#102b66]">
                    {content.emailTitle}
                  </h3>

                  <a
                    href={content.emailHref}
                    className="mt-1 block break-all text-[15px] font-medium text-[#314b7b] hover:text-[#1265e8]"
                  >
                    {content.email}
                  </a>

                  <p className="mt-1 text-sm text-[#71809d]">
                    {content.emailResponse}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-5">
                <div className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 hover:bg-[#1265e8] sm:h-[66px] sm:w-[66px]">
                  <MapPin
                    size={29}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#102b66]">
                    {content.officeTitle}
                  </h3>

                  <p className="mt-1 text-[15px] leading-6 text-[#314b7b]">
                    {content.addressLines.map((line) => (
                      <React.Fragment key={line}>{line}<br /></React.Fragment>
                    ))}
                  </p>

                  <p className="mt-1 text-sm text-[#71809d]">
                    {content.officeHours}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-5">
                <div className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] transition-colors duration-200 hover:bg-[#1265e8] sm:h-[66px] sm:w-[66px]">
                  <Headphones
                    size={29}
                    strokeWidth={2}
                    className="text-[#1265e8] transition-colors duration-200 group-hover:text-white"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-[#102b66]">
                    {content.supportTitle}
                  </h3>

                  <p className="mt-1 text-[15px] text-[#314b7b]">
                    {content.supportDescription}
                  </p>

                  <button
                    type="button"
                    className="group mt-2 flex items-center gap-2 text-[15px] font-semibold text-[#1265e8]"
                  >
                    {content.supportButtonText}

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;