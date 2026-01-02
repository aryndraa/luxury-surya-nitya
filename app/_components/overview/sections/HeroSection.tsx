"use client";

import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative hero-bg  min-h-screen bg-blend-multiply bg-black/65 bg-cover flex"
    >
      <div className="flex justify-center items-center 2xl:container mx-auto px-4 md:px-8 lg:px-12 ">
        <div className="text-center text-text-light flex flex-col items-center ">
          <motion.h1
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="font-playfair-display text-6xl md:text-8xl mb-6"
          >
            East Bali Tranquility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              ease: "easeOut",
              duration: 0.8,
            }}
            className="font-light  md:font-normal  text-text-light/80 w-[80%] md:w-[70%] md:text-2xl italic"
          >
            A private luxury villa surrounded by nature, designed for complete
            serenit
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              ease: "easeOut",
              duration: 0.8,
            }}
            className="absolute bottom-20"
          >
            <FaChevronDown className="mx-auto  text-3xl text-text-light/50 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
