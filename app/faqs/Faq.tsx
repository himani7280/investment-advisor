'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I get started?",
    answer: "You can get started by signing up for an account on our website and following the onboarding guide.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee for all subscription plans. No questions asked.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
];

// Container variants with stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Item variants with 'as const' on ease array
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const AccordionFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Frequently Asked Questions</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 flex justify-between items-center font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.1, 0.25, 1] as const,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AccordionFAQ;