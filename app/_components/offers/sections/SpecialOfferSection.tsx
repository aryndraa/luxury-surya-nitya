import React from "react";
import Decor from "@/public/assets/home/facility-decor.svg";
import Package1 from "@/public/assets/offers/package-1.jpg";
import Image from "next/image";
import Button from "../../Button";

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
        <div className="flex flex-col md:flex-row relative">
          <Image
            src={Package1}
            alt="package-image"
            className="w-full lg:w-[50vw] lg:h-[70vh] object-cover "
          />
          <div className="p-4 md:p-6 lg:p-8 bg-foreground flex flex-col gap-8 lg:gap-12 lg:absolute top-1/2 lg:-translate-y-1/2 right-0 lg:w-[60%] ">
            <div className="flex flex-col gap-5 ">
              <div>
                <h3 className="text-2xl lg:text-4xl  font-playfair-display font-semibold mb-2 md:mb-4">
                  Romantic Escape Package
                </h3>
                <p className="text-sm lg:text-base">
                  Begin your new love story amidst the peaceful natural beauty
                  of Karangasem. This package is designed for complete privacy
                  and intimate luxury, allowing you and your partner to focus on
                  creating unforgettable memories. Enjoy uninterrupted
                  tranquility and five-star service throughout your stay.
                </p>
              </div>
              <div>
                <h4 className="font-playfair-display text-xl md:text-2xl font-semibold mb-2 md:mb-4 ">
                  Inclusions
                </h4>
                <ul className="text-sm lg:text-base list-disc pl-4 space-y-3 lg:space-y-2">
                  <li>
                    Exclusive full-villa accommodation for 2 nights (for 2
                    guests)
                  </li>
                  <li>
                    Premium romantic decoration in the master bedroom and
                    bathtub{" "}
                  </li>
                  <li>1× 60-minute Couple Massage provided by an....</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row justify-end">
              <Button type="button" style="secondary">
                More Detail
              </Button>
              <Button type="button">Booking Package</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
