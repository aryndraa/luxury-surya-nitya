import React from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative hero-bg  min-h-screen bg-blend-multiply bg-black/65 bg-cover flex"
    >
      <div className="flex justify-center items-center 2xl:container mx-auto px-4 md:px-8 lg:px-12 ">
        <div className="text-center text-text-light flex flex-col items-center ">
          <h1 className="font-playfair-display text-6xl md:text-8xl mb-6   ">
            East Bali Tranquility
          </h1>
          <p className="font-light  md:font-normal  text-text-light/80 w-[80%] md:w-[70%] md:text-2xl italic">
            A private luxury villa surrounded by nature, designed for complete
            serenit
          </p>
          <div className="absolute bottom-20">
            <FaChevronDown className="mx-auto  text-3xl text-text-light/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
