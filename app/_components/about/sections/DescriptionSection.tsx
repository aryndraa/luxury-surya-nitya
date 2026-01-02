"use client";

import Image from "next/image";
import DescriptionImage from "@/public/assets/about/description.jpg";
import CountUp from "../../CountUp";
import { motion } from "framer-motion";

export default function DescriptionSection() {
  return (
    <section id="description" className="">
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6  mb-8 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <h1 className="text-6xl md:text-8xl font-medium mb-4  ">
              {" "}
              <CountUp end={58} />+
            </h1>
            <p className="font-playfair-display font-semibold text-lg md:text-xl">
              Experienced To Be The Best
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg col-span-8 pb-8 lg:pb-16 border-b border-primary"
          >
            <span className="text-primary font-playfair-display text-lg md:text-2xl lg:text-3xl font-semibold">
              Luxury Surya Nitya
            </span>{" "}
            offers a serene retreat where you can rest and immerse yourself in
            the natural beauty of the Island of the Gods. Designed in a
            luxurious style with a strong touch of Karangasem’s rich cultural
            heritage, the villa blends refined elegance with authentic Balinese
            charm. Beyond its sophisticated design, Luxury Surya Nitya is
            surrounded by the lush, cool, and traditional landscapes that define
            Karangasem.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <Image
              src={DescriptionImage}
              alt="img"
              className="w-full mb-4 md:mb-6"
            />
            <p className="text-sm md:text-base ">
              Indulge in the comfort of a high-end accommodation where luxury,
              tropical elegance, and cultural authenticity come together at
              Luxury Surya Nitya
            </p>
          </motion.div>
          <div className="hidden lg:block"></div>
          <div className="flex flex-col gap-4 md:gap-6 lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-sm md:text-base"
            >
              Located in the Karangasem region, the area is known for its
              remarkably diverse scenery — from the majestic volcano of Mount
              Agung, golden African-like savannas of Tianyar, to tranquil white
              and black sand beaches with crystal-clear waters ideal for
              snorkeling, such as Virgin Beach and Amed. Karangasem is also
              deeply rooted in culture, home to Tenganan Pengringsingan Village
              with its sacred Gringsing textiles of the Bali Aga people, unique
              traditions such as Mekare-Kare (Pandan War), Megibung communal
              dining, Usaba Dangsil, and royal heritage sites like Besakih
              Temple, Taman Ujung, and Tirta Gangga, where spirituality meets
              distinctive architectural beauty.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-sm md:text-base"
            >
              Luxury Surya Nitya offers more than just a beautiful atmosphere.
              We provide personalized and professional service, with a dedicated
              team available to anticipate and assist with your needs at any
              time. During your stay, you can relax knowing that our staff is
              available 24 hours a day, ensuring a seamless and worry-free
              experience.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
