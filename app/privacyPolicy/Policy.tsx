import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { investmentContent } from "../data/investmentContent";

interface PolicySection {
  id: string;
  title: string;
  content: string;
}

const content = investmentContent.privacyPolicy;
const policySections: PolicySection[] = content.policies;

const Policy = () => {
  return (
    <section className="w-full bg-white pt-8 md:pt-16 mb-3">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-4">
        
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-8 bg-[#0052cc] sm:w-12" />
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#0052cc] sm:text-[13px]">
              {content.badge}
            </span>
            <span className="h-[1.5px] w-8 bg-[#0052cc] sm:w-12" />
          </div>

          <h2 className="mt-2 text-2xl font-extrabold text-[#021838] sm:text-4xl md:text-[40px]">
            {content.titleStart} <span className="text-[#0052cc]">{content.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[780px] text-[14px] leading-relaxed text-[#52637e] sm:text-[15px]">
            {content.description}
          </p>
        </div>

        {/* Policy Items List with reduced spacing */}
        <div className="mt-4 divide-y divide-gray-100 sm:mt-6">
          {policySections.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 py-4 sm:gap-5 md:py-4.5"
            >
              {/* Circle Badge */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] font-bold text-[14px] text-[#0052cc] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 hover:text-white">
                {item.id}
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="text-[16px] font-bold text-[#021838] sm:text-[17px]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-snug text-[#52637e] sm:text-[14.5px]">
                  {item.content}
                </p>
              </div>
            </div>
          ))}

          {/* Item 09: Contact Us */}
          <div className="flex items-start gap-3 py-4 sm:gap-5 md:py-4.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ebf3fe] font-bold text-[#0052cc] text-[14px]">
              09
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <h3 className="text-[16px] font-bold text-[#021838] sm:text-[17px]">
                {content.contactTitle}
              </h3>
              <p className="mt-1 text-[13.5px] leading-snug text-[#52637e] sm:text-[14.5px]">
                {content.contactDescription}
              </p>

              {/* Inline Contact Details */}
              <div className="mt-3 flex flex-col items-start gap-2 text-[13.5px] font-medium text-[#0052cc] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                <a
                  href="mailto:info@primecoreadvisors.com"
                  className="flex min-w-0 items-center gap-1.5 hover:underline"
                >
                  <Mail size={15} className="text-[#0052cc]" />
                  <span className="break-all">{content.email}</span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-1.5 hover:underline"
                >
                  <Phone size={15} className="text-[#0052cc]" />
                  <span>{content.phone}</span>
                </a>

                <div className="flex min-w-0 items-start gap-1.5 text-[#52637e] sm:items-center">
                  <MapPin size={15} className="text-[#0052cc] shrink-0" />
                  <span className="break-words">{content.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Policy;