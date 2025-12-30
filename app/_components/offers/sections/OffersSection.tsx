import React from "react";
import OfferCard from "../OfferCard";
import Package2 from "@/public/assets/offers/package-2.jpg";
import Package3 from "@/public/assets/offers/package-3.jpg";
import Package4 from "@/public/assets/offers/package-4.jpg";
import Image from "next/image";
import OfferDecorBl from "@/public/assets/home/offer-decor-bl.svg";
import OfferDecorBr from "@/public/assets/home/offer-decor-br.svg";
import OfferDecorTl from "@/public/assets/home/offer-decor-tl.svg";
import OfferDecorTr from "@/public/assets/home/offer-decor-tr.svg";

export default function OffersSection() {
  return (
    <section id="offers" className="bg-background">
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-24 lg:py-48  relative">
        <div className=" flex flex-col items-center gap-8 md:gap-12 lg:gap-24 ">
          <OfferCard
            image={Package2}
            title="Karangasem Family Escape"
            align="left"
            description="Secure the entire villa exclusively for your family. Enjoy spacious, safe surroundings and calming views without sharing facilities with other guests. This package is designed to let your family relax, play, and explore the cultural heritage of Karangasem in complete privacy and comfort."
            inclusions={[
              "1x Private Family Tour to Tirta Gangga and Taman Ujung (Private car & driver included)",
              "Kids Play Equipment available at the villa (pool floats & board games)",
              "20% discount on Laundry Service (perfect for longer stays)",
              "Kids Menu available for dinner upon request (additional charge applies)",
              "Private parking facility",
            ]}
          />
          <OfferCard
            image={Package3}
            title="Midweek Serenity Escape"
            align="right"
            description="Enjoy exclusive use of our private villa and immerse yourself in the cool, peaceful atmosphere of Karangasem. This package is perfect for solo travelers or couples seeking a digital detox, a “work from Bali” experience, or deep relaxation. Your peace and privacy are our highest priority."
            inclusions={[
              "Special Midweek Discount for private villa rental",
              "20% discount on Laundry Service (perfect for longer stays)",
              "Complimentary healthy welcome drink",
              "15% discount on in-house massage services",
              "Free afternoon snacks & local fruits",
              "Late check-out until 2:00 PM (subject to availability)",
            ]}
          />
          <OfferCard
            image={Package4}
            title="Party Buyout & Gathering"
            align="left"
            description="Celebrate your special moments—birthdays, reunions, or pre-wedding photoshoots—in style and complete privacy. By reserving the entire Luxury Surya Nitya, you gain access to an exclusive venue with stunning views. Our team will ensure your event runs smoothly and becomes a truly memorable experience."
            inclusions={[
              "Special welcome dinner buffet or Karangasem-style BBQ",
              "One-time basic event decoration (balloons/flowers based on theme)",
              "Complimentary bartender/server (4 hours)",
              "Sound system and lighting setup for light parties",
              "Group discount for all staying guests",
              "Full assistance from the Villa Manager for event setup",
              "Welcome drinks & large fruit basket",
              "No curfew (subject to reasonable local noise regulations)",
              "Complimentary high-speed WiFi access",
            ]}
          />
        </div>

        <Image
          src={OfferDecorBl}
          alt="offer-decor-bl"
          className="saturate-0 opacity-40 w-40 md:w-64 lg:w-80 absolute bottom-0 left-0"
        />
        <Image
          src={OfferDecorBr}
          alt="offer-decor-bl"
          className="saturate-0 opacity-40 w-40 md:w-64 lg:w-80 absolute  bottom-0 right-0"
        />
        <Image
          src={OfferDecorTl}
          alt="offer-decor-bl"
          className="saturate-0 opacity-40 w-40 md:w-64 lg:w-80 absolute top-0 left-0"
        />
        <Image
          src={OfferDecorTr}
          alt="offer-decor-bl"
          className="saturate-0 opacity-40 w-40 md:w-64 lg:w-80 absolute top-0 right-0"
        />
      </div>
    </section>
  );
}
