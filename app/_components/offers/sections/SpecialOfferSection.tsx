import React from "react";
import Decor from "@/public/assets/home/facility-decor.svg";
import Package1 from "@/public/assets/offers/package-1.jpg";
import Image from "next/image";
import OfferCard from "../OfferCard";

export default function SpecialOfferSection() {
  return (
    <section
      id="special-offer"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 flex flex-col items-center"
    >
      <div className="text-center flex flex-col items-center mb-6 md:mb-12 ">
        <Image
          src={Decor}
          alt="facility"
          className="saturate-0 opacity-40 mb-3 lg:mb-6 w-64 lg:w-96"
        />
        <h2 className="text-primary font-playfair-display font-semibold text-lg md:text-2xl mb-2 md:mb-5">
          Privacy, Luxury, and Serenity Await You
        </h2>
        <h1 className="font-playfair-display text-3xl md:text-5xl font-semibold mb-4 lg:mb-6">
          Our Exclusive Villa Packages
        </h1>
      </div>
      <div className="w-full">
        <OfferCard
          image={Package1}
          title="Romantic Escape Package"
          description="Begin your new love story amidst the peaceful natural beauty of Karangasem. This package is designed for complete privacy and intimate luxury, allowing you and your partner to focus on creating unforgettable memories. Enjoy uninterrupted tranquility and five-star service throughout your stay."
          inclusions={[
            "Premium romantic decoration in the master bedroom and bathtub ",
            "1x 60-minute Couple Massage (external professional therapists, poolside)",
            "Welcome drinks & cold towels upon arrival",
            "Seasonal fruit basket & homemade cookies",
            "Airport transfer service (optional add-on — see below if you wish to include)",
            "Assistance with recommended catering or private chef vendors for a candlelight dinner (Villa does not provide cooking service but will assist with coordination)",
          ]}
        />
      </div>
    </section>
  );
}
