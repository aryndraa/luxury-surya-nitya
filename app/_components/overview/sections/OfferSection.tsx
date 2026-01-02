"use client";

import HeadingLine from "../../HeadingLine";
import OfferCard from "../OfferCard";
import Package1 from "@/public/assets/offers/package-1.jpg";
import Package2 from "@/public/assets/offers/package-2.jpg";
import Package3 from "@/public/assets/offers/package-3.jpg";
import Package4 from "@/public/assets/offers/package-4.jpg";
import OfferDecorBl from "@/public/assets/home/offer-decor-bl.svg";
import OfferDecorBr from "@/public/assets/home/offer-decor-br.svg";
import OfferDecorTl from "@/public/assets/home/offer-decor-tl.svg";
import OfferDecorTr from "@/public/assets/home/offer-decor-tr.svg";
import Button from "../../Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OfferSection() {
  return (
    <section id="offer" className=" bg-background ">
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 pt-24 lg:pt-40 pb-24 relative">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-primary font-playfair-display font-semibold mb-2 md:mb-4 text-lg md:text-2xl"
          >
            Privacy, Luxury, and Serenity Await You
          </motion.h2>
          <HeadingLine>
            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6 lg:text-nowrap"
            >
              Our Exclusive Villa Packages
            </motion.h1>
          </HeadingLine>
          <motion.p
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-sm md:text-lg lg:w-[35%] "
          >
            Discover a stay designed for relaxation, adventure, and intimate
            moments.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 md:gap-y-0 mb-8 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <OfferCard
              image={Package1}
              title="Romantic Escape Package"
              description="Begin your new love story amidst the peaceful natural beauty of Karangasem. This package is designed for complete privacy and intimate luxury, allowing you and your partner to focus on creating unforgettable memories. Enjoy uninterrupted tranquility and five-star service throughout your stay."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <OfferCard
              image={Package2}
              title="Karangasem Family Escape"
              description="Secure the entire villa exclusively for your family. Enjoy spacious, safe surroundings and calming views without sharing facilities with other guests. This package is designed to let your family relax, play, and explore the cultural heritage of Karangasem in complete privacy and comfort."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <OfferCard
              image={Package3}
              title="Midweek Serenity Escape"
              description="Enjoy exclusive use of our private villa and immerse yourself in the cool, peaceful atmosphere of Karangasem. This package is perfect for solo travelers or couples seeking a digital detox, a “work from Bali” experience, or deep relaxation. Your peace and privacy are our highest priority."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <OfferCard
              image={Package4}
              title="Party Buyout & Gathering"
              description="Celebrate your special moments—birthdays, reunions, or pre-wedding photoshoots—in style and complete privacy. By reserving the entire Luxury Surya Nitya, you gain access to an exclusive venue with stunning views. Our team will ensure your event runs smoothly and becomes a truly memorable experience."
            />
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Button type="link" href="/offers">
            Explore Packages
          </Button>
        </motion.div>
        <Image
          src={OfferDecorBl}
          alt="offer-decor-bl"
          className="saturate-0 opacity-40 w-40 md:w-64 lg:w-96 absolute bottom-0 left-0"
        />
        <Image
          src={OfferDecorBr}
          alt="offer-decor-bl"
          className="saturate-0 opacity-40 w-40 md:w-64 lg:w-96 absolute  bottom-0 right-0"
        />
        <Image
          src={OfferDecorTl}
          alt="offer-decor-bl"
          className="saturate-0 opacity-40 w-40 md:w-64 lg:w-96 absolute top-0 left-0"
        />
        <Image
          src={OfferDecorTr}
          alt="offer-decor-bl"
          className="saturate-0 opacity-40 w-40 md:w-64 lg:w-96 absolute top-0 right-0"
        />
      </div>
    </section>
  );
}
