import React from "react";
import TestimonialSlider from "../TestimonialSlider";

export default function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24"
    >
      <div className="flex flex-col items-center text-center mb-8 lg:mb-16  ">
        <h2 className="text-primary font-playfair-display font-semibold mb-2 md:mb-4 text-lg md:text-2xl">
          Real Testimonial
        </h2>
        <h1 className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6 lg:text-nowrap">
          Reviews From Our Guests
        </h1>
        <p className="text-sm md:text-lg lg:w-[35%] ">
          Real stories from guests who experienced privacy, comfort, and
          tranquility at our villa.
        </p>
      </div>
      <TestimonialSlider />
    </section>
  );
}
