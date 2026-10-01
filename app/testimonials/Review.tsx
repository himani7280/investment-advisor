
"use client";

import React from "react";
import Image from "next/image";

interface ReviewType {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const reviewsData: ReviewType[] = [
  {
    id: 1,
    name: "Rahul Mehta",
    location: "New Delhi, India",
    image: "/profile1.png",
    rating: 5,
    text: "PrimeCore helped me create a clear investment plan tailored to my goals. Their advice is practical, transparent, and truly client-focused. I now feel more confident about my financial future.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Gurgaon, India",
    image: "/profile2.png",
    rating: 5,
    text: "The team at PrimeCore made the entire process simple and easy to understand. They explained every option clearly and helped me choose the right investment strategy for my needs.",
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "Mumbai, India",
    image: "/profile3.png",
    rating: 5,
    text: "Excellent service and genuine guidance. PrimeCore takes time to understand your goals and provides solutions that actually work. I highly recommend them to anyone looking for trustworthy financial advisors.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    location: "Bangalore, India",
    image: "/profile3.png",
    rating: 5,
    text: "I've been investing with PrimeCore for over 3 years now, and the experience has been great. Their insights and regular updates help me stay on track with my financial goals.",
  },
  {
    id: 5,
    name: "Vikram Soni",
    location: "Pune, India",
    image: "/profile4.png",
    rating: 5,
    text: "Professional, knowledgeable, and always available to answer questions. PrimeCore has been a valuable partner in my wealth creation journey.",
  },
  {
    id: 6,
    name: "Anjali Desai",
    location: "Ahmedabad, India",
    image: "/profile.png",
    rating: 5,
    text: "PrimeCore's personalized approach made all the difference. They genuinely care about their clients and provide solutions that align with long-term financial growth.",
  },
];

interface ReviewCardProps {
  review: ReviewType;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6">

      {/* Quote Icon */}
      <div className="pointer-events-none absolute right-5 top-5 text-blue-50 sm:right-6 sm:top-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* User Info */}
      <div className="flex items-start gap-3 sm:gap-4">

        {/* Avatar */}
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-200 sm:h-14 sm:w-14">
          <Image
            src={review.image}
            alt={review.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        {/* Name + Location + Rating */}
        <div className="min-w-0 pr-8">
          <h3 className="text-[16px] font-bold text-gray-900 sm:text-[17px]">
            {review.name}
          </h3>

          <p className="text-xs text-gray-500 sm:text-sm">
            {review.location}
          </p>

          {/* Stars */}
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: review.rating }).map((_, index) => (
              <svg
                key={index}
                className="h-3.5 w-3.5 fill-yellow-400 sm:h-4 sm:w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-relaxed">
        &quot;{review.text}&quot;
      </p>
    </div>
  );
};

const Review = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        pt-10
        pb-10
        sm:pt-12
        sm:pb-12
        md:pt-14
        md:pb-14
        lg:pt-14
        lg:pb-14
      "
    >

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">

          {/* Small Heading */}
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4">
            <div className="h-[2px] w-10 bg-blue-600 sm:w-12" />

            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 sm:text-sm">
              Testimonials
            </span>

            <div className="h-[2px] w-10 bg-blue-600 sm:w-12" />
          </div>

          {/* Main Heading */}
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:mb-4 sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="text-blue-600">
              Clients Say
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm leading-6 text-gray-500 sm:text-base lg:text-lg">
            Trusted by individuals and businesses to achieve their financial
            goals. Here&apos;s what our clients have to say about their
            experience with PrimeCore.
          </p>
        </div>

        {/* ================= REVIEWS GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

          {reviewsData.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Review;

