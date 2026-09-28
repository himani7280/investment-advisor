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

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-[#f8fbff] lg:grid-cols-[1.25fr_0.85fr]">

          <div className="p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10">
            
            <div className="mb-7">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
                  SEND US A MESSAGE
                </span>

                <span className="h-[2px] w-16 bg-[#3478e5]" />
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#102b66] sm:text-4xl">
                Let&apos;s Start a{" "}
                <span className="text-[#1265e8]">Conversation</span>
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#71809d] sm:text-base">
                Fill out the form below and our team will get back to you shortly.
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
                    placeholder="Full Name *"
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#71809d] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
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
                    placeholder="Email Address *"
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#71809d] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
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
                    placeholder="Phone Number *"
                    required
                    className="h-[52px] w-full rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#71809d] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
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
                    className="h-[52px] w-full appearance-none rounded-md border border-[#dce7f7] bg-white pl-12 pr-11 text-sm text-[#71809d] outline-none transition focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                  >
                    <option value="" disabled>
                      Select Your Interest
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="business">Business Consultation</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
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
                  placeholder="Tell us how we can help you..."
                  required
                  rows={6}
                  className="min-h-[170px] w-full resize-none rounded-md border border-[#dce7f7] bg-white pl-12 pr-4 pt-4 text-sm text-[#24385f] outline-none transition placeholder:text-[#71809d] focus:border-[#2671e8] focus:ring-2 focus:ring-[#2671e8]/10"
                />
              </div>

              <button
                type="submit"
                className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-md bg-[#1168ed] px-7 text-sm font-semibold text-white transition hover:bg-[#095bd5] sm:w-[250px]"
              >
                Send Message

                <ArrowRight
                  size={20}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          <div className="border-t border-[#dce7f7] bg-white p-6 sm:p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-8 xl:p-10">

            <div className="mb-7">
              <div className="mb-2 flex items-center gap-4">
                <span className="text-[13px] font-semibold tracking-wide text-[#2455a4]">
                  CONTACT INFORMATION
                </span>

                <span className="h-[2px] w-16 bg-[#3478e5]" />
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#102b66] sm:text-4xl">
                Reach Out to{" "}
                <span className="text-[#1265e8]">Us</span>
              </h2>

              <p className="mt-2 max-w-[430px] text-sm leading-6 text-[#71809d] sm:text-base">
                Feel free to contact us through any of the following channels.
                We&apos;re always happy to assist you.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex gap-5">
                <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#eaf3ff]">
                  <Phone
                    size={29}
                    strokeWidth={2}
                    className="text-[#1265e8]"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#102b66]">
                    Call Us
                  </h3>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-[15px] font-medium text-[#314b7b] hover:text-[#1265e8]"
                  >
                    +91 98765 43210
                  </a>

                  <p className="mt-1 text-sm text-[#71809d]">
                    Mon - Sat, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#eaf3ff]">
                  <Mail
                    size={29}
                    strokeWidth={2}
                    className="text-[#1265e8]"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#102b66]">
                    Email Us
                  </h3>

                  <a
                    href="mailto:info@primecoreadvisors.com"
                    className="mt-1 block break-all text-[15px] font-medium text-[#314b7b] hover:text-[#1265e8]"
                  >
                    info@primecoreadvisors.com
                  </a>

                  <p className="mt-1 text-sm text-[#71809d]">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#eaf3ff]">
                  <MapPin
                    size={29}
                    strokeWidth={2}
                    className="text-[#1265e8]"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#102b66]">
                    Visit Our Office
                  </h3>

                  <p className="mt-1 text-[15px] leading-6 text-[#314b7b]">
                    123 Business Avenue, New Delhi,
                    <br />
                    110001, India
                  </p>

                  <p className="mt-1 text-sm text-[#71809d]">
                    Mon - Sat, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#eaf3ff]">
                  <Headphones
                    size={29}
                    strokeWidth={2}
                    className="text-[#1265e8]"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#102b66]">
                    Live Support
                  </h3>

                  <p className="mt-1 text-[15px] text-[#314b7b]">
                    Chat with our team for quick assistance.
                  </p>

                  <button
                    type="button"
                    className="group mt-2 flex items-center gap-2 text-[15px] font-semibold text-[#1265e8]"
                  >
                    Start a Live Chat

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