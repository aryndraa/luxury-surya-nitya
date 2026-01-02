"use client";

import Image from "next/image";
import DescriptionImage from "@/public/assets/facilities/description-placeholder.jpg";
import { motion } from "framer-motion";

export default function DescriptionSection() {
  return (
    <section
      id="dwscription"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 grid lg:grid-cols-12 gap-8 "
    >
      <div className="lg:col-span-5">
        <motion.h1
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="font-playfair-display font-semibold text-3xl md:text-5xl mb-2 md:mb-4 leading-[1.2]"
        >
          Designed for Comfort and Tranquility
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-primary font-playfair-display font-semibold text-lg md:text-2xl mb-4 md:mb-6"
        >
          A seamless blend of elegance, openness, and natural surroundings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Every space at Luxury Surya Nitya is carefully designed to offer a
          seamless blend of luxury and natural serenity. From open living areas
          that invite fresh mountain air to private outdoor spaces overlooking
          Karangasem’s lush landscape, our facilities are created to enhance
          relaxation, comfort, and privacy. Each detail supports a calm and
          effortless stay, allowing you to slow down, reconnect with nature, and
          enjoy a truly refined private retreat.
        </motion.p>
      </div>
      <div className="hidden lg:block"></div>
      <motion.div
        initial={{ opacity: 0, x: 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="lg:col-span-6"
      >
        <Image
          src={DescriptionImage}
          alt="image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
