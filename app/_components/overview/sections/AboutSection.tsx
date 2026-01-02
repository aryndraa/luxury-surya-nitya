"use client";

import Image from "next/image";
import AboutImage from "@/public/assets/home/about.jpg";
import AboutRightDecor from "@/public/assets/home/about-decoration-right.svg";
import AboutLeftDecor from "@/public/assets/home/about-decoration-left.svg";
import Button from "../../Button";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className=" flex bg-background relative overflow-hidden lg:min-h-[90vh]"
    >
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 relative">
        <div className="relative z-1 h-full">
          <motion.div
            className="mb-4 lg:absolute "
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Image src={AboutImage} alt="about-bg" className=" 2xl:w-[60vw]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col lg:items-end lg:justify-end h-full relative z-1 "
          >
            <div className="bg-foreground p-4 md:p-6 lg:p-8 mb-4 lg:w-[50%] ">
              <h1 className="font-playfair-display font-semibold text-3xl md:text-5xl mb-2 md:mb-4">
                Luxury Living in <br /> Harmony with Nature
              </h1>
              <h2 className="text-primary font-playfair-display font-semibold text-lg md:text-2xl mb-4">
                Experience Bali Beyond the Ordinary
              </h2>
              <p className="text-sm md:text-base font-medium lg:font-normal">
                Enjoy the lush natural scenery of the Island of the Gods while
                spending your holiday in a true paradise. Luxury Surya Nitya is
                the perfect place for those seeking a relaxed getaway, immersed
                in Balinese culture and the refreshing tranquility of nature.
              </p>
            </div>

            <Button type="link" href="/about">
              <span className="flex justify-center  lg:w-fit">
                More About Surya Nitya
              </span>
            </Button>
          </motion.div>
        </div>
        <Image
          src={AboutRightDecor}
          alt="about-bg"
          className="absolute saturate-0 -top-32 2xl:-top-12 -right-28 lg:-right-16 2xl:-right-8 rotate-60 lg:rotate-70 opacity-40"
        />
        <Image
          src={AboutLeftDecor}
          alt="about-bg"
          className="absolute saturate-0 -bottom-40 2xl:-bottom-12 lg:-bottom-24  -left-40 2xl:-left-24 lg rotate-140 opacity-40"
        />
      </div>
    </section>
  );
}
