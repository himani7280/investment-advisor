"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  LayoutGrid,
  Calendar,
  Clock,
  MessageSquare,
  ArrowRight,
  Lock,
  Users,
  MapPin,
  ShieldCheck,
  BarChart2,
  UserCheck,
} from "lucide-react";

import { investmentContent } from "../data/investmentContent";

const content = investmentContent.consultation;
const stepIcons = { Calendar, MessageSquare, UserCheck, BarChart2 };

const Consultation = () => {
  return (
    <section className="w-full bg-[#f8fbff] pt-8 sm:pt-10 lg:pt-16 pb-8">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10">
        
        {/* ================= SECTION 1: FORM & RIGHT CARD ================= */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* LEFT: FORM CONTAINER */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1a5bb8]">
                  {content.badge}
                </span>
                <span className="h-[2px] w-8 bg-[#1a5bb8]" />
              </div>

              {/* Title */}
              <h2 className="mt-2 text-[28px] font-bold text-[#091e42] sm:text-[36px] lg:text-[40px] leading-[1.15]">
                {content.titleStart} <span className="text-[#1a73e8]">{content.titleHighlight}</span>
              </h2>

              <p className="mt-2 text-[13px] text-[#6b7c96] sm:text-[14px]">
                {content.description}
              </p>

              {/* Form Fields Grid */}
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  
                  {/* Full Name */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="text"
                      placeholder={content.namePlaceholder}
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="email"
                      placeholder={content.emailPlaceholder}
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="tel"
                      placeholder={content.phonePlaceholder}
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </div>

                  {/* Select Consultation Type */}
                  <div className="relative">
                    <LayoutGrid className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <select className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-8 text-[14px] text-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] appearance-none cursor-pointer">
                      <option value="">{content.typePlaceholder}</option>
                      {content.consultationTypes.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#8fa0b5]" />
                  </div>

                  {/* Preferred Date */}
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      placeholder={content.datePlaceholder}
                      className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8fa0b5]" size={18} />
                    <select className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-8 text-[14px] text-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] appearance-none cursor-pointer">
                      <option value="">{content.timePlaceholder}</option>
                      {content.preferredTimes.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#8fa0b5]" />
                  </div>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 text-[#8fa0b5]" size={18} />
                  <textarea
                    rows={4}
                    placeholder={content.goalsPlaceholder}
                    className="w-full rounded-xl border border-[#e2e8f0] bg-white py-3 pl-11 pr-4 text-[14px] text-[#091e42] placeholder-[#8fa0b5] outline-none transition focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Link
                    href={content.submitHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066ff] px-6 py-3.5 text-[14px] font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#0052cc] sm:w-auto"
                  >
                    {content.submitText}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Privacy Text */}
                <div className="flex items-start gap-2 pt-1 text-[12px] text-[#5e6e82]">
                  <Lock size={14} className="mt-0.5 shrink-0 text-[#091e42]" />
                  <span>{content.privacyText}</span>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT: CARD WITH IMAGE & FEATURES */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-blue-900/5">
              
              {/* Image Banner Container */}
              <div className="relative h-[220px] w-full sm:h-[250px]">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#031127]/80 via-[#031127]/40 to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute left-6 top-6 max-w-[200px]">
                  <h3 className="text-[22px] font-bold leading-[1.2] text-white">
                    {content.imageTitle}
                  </h3>
                  <div className="mt-3 h-[3px] w-8 bg-[#1a73e8]" />
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-5 bg-[#f7fbff] p-5 sm:p-6">
                
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 hover:bg-[#1a73e8] hover:text-white">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#091e42]">{content.benefits[0].title}</h4>
                    <p className="text-[12px] text-[#6b7c96]">
                      {content.benefits[0].description}
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 hover:bg-[#1a73e8] hover:text-white">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#091e42]">{content.benefits[1].title}</h4>
                    <p className="text-[12px] text-[#6b7c96]">
                      {content.benefits[1].description}
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 hover:bg-[#1a73e8] hover:text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#091e42]">{content.benefits[2].title}</h4>
                    <p className="text-[12px] text-[#6b7c96]">
                      {content.benefits[2].description}
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-4">
                  <div className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e3efff] text-[#1a73e8] transition-colors duration-200 hover:bg-[#1a73e8] hover:text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#091e42]">{content.benefits[3].title}</h4>
                    <p className="text-[12px] text-[#6b7c96]">
                      {content.benefits[3].description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ================= SECTION 2: WHAT TO EXPECT ================= */}
        <div className="mt-12 text-center">
          
          {/* Header Subtitle */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#1a5bb8]">
              {content.processBadge}
            </span>
            <span className="h-[2px] w-8 bg-[#1a5bb8]" />
          </div>

          {/* Title */}
          <h3 className="mt-2 text-[28px] font-bold text-[#091e42] sm:text-[34px]">
            {content.processTitleStart} <span className="text-[#1a73e8]">{content.processTitleHighlight}</span>
          </h3>

          {/* Description */}
          <p className="mt-2 text-[13px] text-[#6b7c96] sm:text-[14px]">
            {content.processDescription}
          </p>

          {/* Process Grid: Set default 2 columns (grid-cols-2) for mobile/small screens */}
          <div className="relative mt-12 grid grid-cols-1 gap-x-4 gap-y-8 min-[420px]:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-8">
            {content.steps.map((step, idx) => {
              const Icon = stepIcons[step.icon as keyof typeof stepIcons];
              return (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  
                  {/* Dashed Connector Line Between Circle Icons (Desktop Only) */}
                  {idx < content.steps.length - 1 && (
                    <div className="pointer-events-none absolute left-[55%] right-[-45%] top-10 hidden lg:block border-t-[2px] border-dashed border-[#c0d8f8]" />
                  )}

                  {/* Soft Light-Blue Circular Icon Wrapper */}
                  <div className="group relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef5ff] transition-colors duration-200 hover:bg-[#0066ff] sm:h-20 sm:w-20">
                    <Icon size={24} className="text-[#0066ff] transition-colors duration-200 group-hover:text-white sm:hidden" />
                    <Icon size={28} className="hidden text-[#0066ff] transition-colors duration-200 group-hover:text-white sm:block" />
                  </div>

                  {/* Step Title */}
                  <h4 className="mt-3 sm:mt-5 text-[14px] sm:text-[15px] font-bold text-[#091e42]">
                    <span>{step.number} </span>
                    <span>{step.title}</span>
                  </h4>

                  {/* Step Description */}
                  <p className="mt-1 sm:mt-1.5 max-w-[180px] sm:max-w-[210px] text-[12px] sm:text-[13px] leading-[1.4] text-[#6b7c96]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Consultation;