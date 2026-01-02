"use client";
import TestimonialSlider from "../TestimonialSlider";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24"
    >
      <div className="flex flex-col items-center text-center mb-8 lg:mb-16  ">
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-160px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-primary font-playfair-display font-semibold mb-2 md:mb-4 text-lg md:text-2xl"
        >
          Real Testimonial
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-160px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6 lg:text-nowrap"
        >
          Reviews From Our Guests
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-160px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-sm md:text-lg lg:w-[35%] "
        >
          Real stories from guests who experienced privacy, comfort, and
          tranquility at our villa.
        </motion.p>
      </div>
      <TestimonialSlider />
    </section>
  );
}
