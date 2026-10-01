import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface PolicySection {
  id: string;
  title: string;
  content: string;
}

const policySections: PolicySection[] = [
  {
    id: "01",
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, and other details when you fill out a form, subscribe to our newsletter, or contact us. We may also collect non-personal information such as browser type, device information, and website usage data.",
  },
  {
    id: "02",
    title: "How We Use Your Information",
    content:
      "We use your information to provide and improve our services, respond to your inquiries, send important updates, and offer personalized investment insights. We do not use your information for any unauthorized purpose.",
  },
  {
    id: "03",
    title: "Information Sharing",
    content:
      "We do not sell, trade, or rent your personal information. We may share your information with trusted service providers who help us operate our website and deliver our services, under strict confidentiality agreements and only for legitimate business purposes.",
  },
  {
    id: "04",
    title: "Data Security",
    content:
      "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, no method of transmission over the internet is 100% secure.",
  },
  {
    id: "05",
    title: "Cookies & Tracking Technologies",
    content:
      "We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can manage your cookie preferences through your browser settings.",
  },
  {
    id: "06",
    title: "Your Rights",
    content:
      "You have the right to access, update, or request deletion of your personal information. If you would like to exercise any of these rights, please contact us using the details provided below.",
  },
  {
    id: "07",
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing any personal information.",
  },
  {
    id: "08",
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised effective date.",
  },
];

const Policy = () => {
  return (
    <section className="w-full bg-white pt-8 md:pt-16 mb-3">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-4">
        
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-8 bg-[#0052cc] sm:w-12" />
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#0052cc] sm:text-[13px]">
              Our Privacy Policy
            </span>
            <span className="h-[1.5px] w-8 bg-[#0052cc] sm:w-12" />
          </div>

          <h2 className="mt-2 text-2xl font-extrabold text-[#021838] sm:text-4xl md:text-[40px]">
            Your Trust <span className="text-[#0052cc]">Matters</span>
          </h2>

          <p className="mx-auto mt-2.5 max-w-[780px] text-[14px] leading-relaxed text-[#52637e] sm:text-[15px]">
            At PrimeCore, we are committed to protecting your personal information and maintaining your trust.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website or use our services.
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
                Contact Us
              </h3>
              <p className="mt-1 text-[13.5px] leading-snug text-[#52637e] sm:text-[14.5px]">
                If you have any questions or concerns about this Privacy Policy or how we handle your information, please feel free to contact us.
              </p>

              {/* Inline Contact Details */}
              <div className="mt-3 flex flex-col items-start gap-2 text-[13.5px] font-medium text-[#0052cc] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                <a
                  href="mailto:info@primecoreadvisors.com"
                  className="flex min-w-0 items-center gap-1.5 hover:underline"
                >
                  <Mail size={15} className="text-[#0052cc]" />
                  <span className="break-all">info@gmail.com</span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-1.5 hover:underline"
                >
                  <Phone size={15} className="text-[#0052cc]" />
                  <span>+91 xxxxx xxxxx</span>
                </a>

                <div className="flex min-w-0 items-start gap-1.5 text-[#52637e] sm:items-center">
                  <MapPin size={15} className="text-[#0052cc] shrink-0" />
                  <span className="break-words">123 Business Avenue, New Delhi, 110001, India</span>
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