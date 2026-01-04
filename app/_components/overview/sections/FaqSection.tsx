"use client";

import Image from "next/image";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import FaqFlowerL from "@/public/assets/home/faq-flower-l.svg";
import FaqFlowerR from "@/public/assets/home/faq-flower-r.svg";
import { motion } from "framer-motion";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Q: Is the villa rented exclusively?",
      answer:
        "A: Yes. The villa is rented as a fully private villa, so you will not share any facilities with other guests during your stay.",
    },
    {
      question: "Q: How many guests can stay in the villa?",
      answer:
        "A: The villa can comfortably accommodate up to 6 guests. Additional guests may be allowed upon request with extra charges.",
    },
    {
      question: "Q: Does the villa have a private pool?",
      answer:
        "A: Yes. The villa features a private swimming pool exclusively for your use, ensuring complete privacy and comfort.",
    },
    {
      question: "Q: Is daily housekeeping included?",
      answer:
        "A: Yes. Daily housekeeping service is included to keep the villa clean and comfortable throughout your stay.",
    },
    {
      question: "Q: Is the villa suitable for families or honeymooners?",
      answer:
        "A: Absolutely. The villa is designed to be ideal for families, couples, and honeymooners seeking a peaceful and private getaway.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 "
    >
      <div className="w-full relative">
        <Image
          src={FaqFlowerL}
          alt="faq-flower"
          className="saturate-0 opacity-40 w-32 md:w-52 lg:w-72 2xl:w-80 absolute -top-16 md:-top-28 lg:-top-24 2xl:-top-24 left-0 md:left-12 lg:left-8"
        />
        <Image
          src={FaqFlowerR}
          alt="faq-flower"
          className="saturate-0 opacity-40 w-32 md:w-52 lg:w-72 2xl:w-80 absolute -top-16 md:-top-28 lg:-top-24 2xl:-top-24 right-0 md:right-12 lg:right-8"
        />
      </div>

      <div className="relative z-1">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-primary font-playfair-display font-semibold mb-2 md:mb-4 text-lg md:text-2xl"
          >
            FAQ’S
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-sm md:text-lg lg:w-[35%]"
          >
            Everything you need to know before staying at our private villa.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 64 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full md:max-w-5xl mx-auto "
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`border border-text-dark/30 transition-all duration-300 cursor-pointer py-5
                ${isActive ? "bg-text-dark" : "bg-white"}
              `}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center px-5 gap-5 mb-4">
                  <span className="text-xl text-white bg-primary p-2 rounded-full">
                    {isActive ? <IoRemove /> : <IoAdd />}
                  </span>
                  <h3
                    className={`font-medium font-playfair-display text-lg md:text-2xl transition-colors 
                    ${isActive ? "text-text-light" : "text-text-dark"}
                  `}
                  >
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
                >
                  <div className="overflow-hidden px-5  text-sm md:text-base  text-text-light/80 ">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
