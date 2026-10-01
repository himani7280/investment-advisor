"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Quote 
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "BUSINESS OWNER",
    image: "/profile1.png",
    mainImage: "/testimonials.png",
    rating: 4,
    quote:
      "The team provided exceptional support and guidance throughout the entire process. Their expertise and professionalism made everything simple and hassle-free. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "ENTREPRENEUR",
    image: "/profile2.png",
    mainImage: "/testimonials.png",
    rating: 5,
    quote:
      "Their personalized approach and attention to detail made a real difference. The entire experience was smooth, transparent, and focused on achieving our goals.",
  },
  {
    id: 3,
    name: "Ananya Kapoor",
    role: "COMPANY DIRECTOR",
    image: "/profile3.png",
    mainImage: "/testimonials.png",
    rating: 5,
    quote:
      "I truly appreciated the team's professionalism and commitment. They understood our requirements and provided practical solutions at every step.",
  },
  {
    id: 4,
    name: "Arjun Malhotra",
    role: "INVESTOR",
    image: "/profile4.png",
    mainImage: "/testimonials.png",
    rating: 4,
    quote:
      "The guidance we received was clear, reliable, and easy to understand. Their team made the entire process comfortable and straightforward.",
  },
  {
    id: 5,
    name: "Neha Verma",
    role: "BUSINESS CONSULTANT",
    image: "/profile.png",
    mainImage: "/testimonials.png",
    rating: 5,
    quote:
      "Excellent communication and strong expertise. They stayed involved throughout the process and delivered exactly what we needed.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-6 sm:pt-8 lg:pt-16 ">
      <div className="mx-auto grid min-h-[500px] max-w-[1400px] grid-cols-1 lg:grid-cols-[45%_55%]">

       

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative h-[300px] w-full sm:h-[380px] lg:h-[500px]"
        >
          <Image
            src={testimonial.mainImage}
            alt={testimonial.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center transition-all duration-500"
          />

          <div
            className="
              absolute
              right-4
              top-1/2
              z-20
              flex
              h-[105px]
              w-[105px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-[9px]
              border-white/80
              bg-[#1769d5]
              shadow-[0_5px_20px_rgba(0,0,0,0.12)]
              lg:h-[115px]
              lg:w-[115px]
              sm:right-[-32px]
            "
          >
            <Quote
              size={45}
              strokeWidth={0}
              fill="white"
              className="text-white"
            />
          </div>
        </motion.div>

       

        <div
          className="
            relative
            flex
            min-h-[500px]
            flex-col
            justify-center
            overflow-hidden
            bg-[#fbfdff]
            px-6
            py-10
            sm:px-10
            lg:px-[58px]
            lg:py-12
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              -right-[90px]
              -top-[120px]
              h-[330px]
              w-[330px]
              rounded-full
              border-[25px]
              border-[#eaf2fd]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[25px]
              top-[30px]
              hidden
              grid-cols-4
              gap-[9px]
              sm:grid
            "
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-[4px] w-[4px] rounded-full bg-[#a8c8f4]"
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[600px]"
          >

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-[47px] bg-[#438af0]" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[1.8px]
                  text-[#438af0]
                  sm:text-[10px]
                "
              >
                TESTIMONIALS
              </span>
            </div>

            <h2
              className="
                mt-4
                text-[38px]
                font-bold
                leading-[1.02]
                tracking-[-1.5px]
                text-[#071b43]
                sm:text-[46px]
                lg:text-[52px]
              "
            >
              What Our
              <br />
              <span className="text-[#126ce4]">
                Clients Say
              </span>
            </h2>

           

            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-[3px]
                rounded-full
                bg-[#e9f2ff]
                px-3
                py-1.5
              "
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`text-[15px] leading-none ${
                    index < testimonial.rating
                      ? "text-[#1471df]"
                      : "text-[#c9d8ec]"
                  }`}
                >
                  <FaStar />

                </span>
              ))}
            </div>

           
            <div className="mt-4 flex items-center gap-3">
              <div
                className="
                  relative
                  h-[55px]
                  w-[55px]
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border
                  border-[#dce8f7]
                "
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="55px"
                  className="object-cover"
                />
              </div>

              <div>
                <h3
                  className="
                    text-[17px]
                    font-bold
                    leading-tight
                    text-[#10254a]
                  "
                >
                  {testimonial.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-medium
                    tracking-[0.4px]
                    text-[#8090a8]
                  "
                >
                  {testimonial.role}
                </p>
              </div>
            </div>

           
            <p
              className="
                mt-4
                max-w-[570px]
                text-[13px]
                leading-[1.55]
                text-[#566981]
                sm:text-[14px]
              "
            >
              “{testimonial.quote}”
            </p>

            

            <div className="mt-5 flex items-center gap-5">

              <motion.button
                type="button"
                onClick={previousSlide}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Previous testimonial"
                className="
                  flex
                  h-[43px]
                  w-[43px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#dbe8f8]
                  bg-white
                  text-[#2776df]
                  shadow-[0_3px_10px_rgba(30,100,180,0.05)]
                  transition
                  hover:bg-[#eef6ff]
                "
              >
                <ArrowLeft size={18} strokeWidth={1.8} />
              </motion.button>

              <div
                className="
                  text-[12px]
                  font-semibold
                  text-[#10254a]
                "
              >
                {String(current + 1).padStart(2, "0")}
                <span className="mx-1 text-[#8292a9]">
                  /
                </span>
                {String(testimonials.length).padStart(2, "0")}
              </div>

              <motion.button
                type="button"
                onClick={nextSlide}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Next testimonial"
                className="
                  flex
                  h-[43px]
                  w-[43px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#dbe8f8]
                  bg-white
                  text-[#2776df]
                  shadow-[0_3px_10px_rgba(30,100,180,0.05)]
                  transition
                  hover:bg-[#eef6ff]
                "
              >
                <ArrowRight size={18} strokeWidth={1.8} />
              </motion.button>
            </div>
          </motion.div>
          </AnimatePresence>

          

          <div
            className="
              absolute
              right-[20px]
              top-1/2
              z-20
              hidden
              -translate-y-1/2
              flex-col
              items-center
              gap-4
              lg:flex
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-[-15px]
                h-[230px]
                w-[1px]
                -translate-x-1/2
                bg-[#dce8f7]
              "
            />

            {testimonials.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label={`Show testimonial from ${item.name}`}
                className={`
                  relative
                  z-10
                  overflow-hidden
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    current === index
                      ? "h-[46px] w-[46px] border-2 border-[#1471df] p-[2px] scale-110"
                      : "h-[40px] w-[40px] border border-white bg-[#e6edf5] opacity-75"
                  }
                `}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="46px"
                  className="rounded-full object-cover"
                />
              </motion.button>
            ))}

            <span
              className="
                absolute
                -left-[5px]
                top-1/2
                h-[30px]
                w-[3px]
                -translate-y-1/2
                rounded-full
                bg-[#1471df]
              "
            />
          </div>

         
         

          <div
            className="
              absolute
              bottom-[25px]
              right-[30px]
              hidden
              items-center
              gap-3
              sm:flex
            "
          >
            <div className="text-right">
              <p
                className="
                  text-[8px]
                  font-semibold
                  tracking-[1.5px]
                  text-[#a2aec0]
                "
              >
                REAL STORIES
              </p>

              <p
                className="
                  text-[8px]
                  font-semibold
                  tracking-[1.5px]
                  text-[#a2aec0]
                "
              >
                REAL IMPACT
              </p>
            </div>

            <span className="h-[2px] w-[45px] bg-[#2776df]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;