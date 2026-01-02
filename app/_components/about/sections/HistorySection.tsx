"use client";

import React from "react";
import HeadingLine from "../../HeadingLine";
import HistoryImage from "@/public/assets/about/history.jpg";
import HistoryDecor from "@/public/assets/about/history-decor.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HistorySection() {
  return (
    <section id="story" className="overflow-hidden relative">
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 grid grid-cols-1 relative">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-16 ">
          <HeadingLine>
            <div className="flex flex-col items-center ">
              <motion.h1
                initial={{ opacity: 0, y: 64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6 lg:text-nowrap"
              >
                The Origins of Surya Nitya
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-sm md:text-lg "
              >
                Inspired by Tri Hita Karana and built in harmony with nature and
                tradition.
              </motion.p>
            </div>
          </HeadingLine>
        </div>
        <div className="gap-4 md:gap-6 grid lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="lg:col-span-4"
          >
            <Image
              src={HistoryImage}
              alt="history"
              className=" w-full h-[30vh] lg:h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col gap-4 md:gap-6 lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, x: 64 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-160px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-sm md:text-base"
            >
              The development of Luxury Surya Nitya began in 2018, with a clear
              vision to create a seamless blend of contemporary luxury and the
              rich cultural heritage of Bali Aga. We collaborated with renowned
              local architects who possess a deep understanding of Tri Hita
              Karana — the Balinese philosophy of harmony between humans,
              nature, and the divine — as the foundation of the design.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 64 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-160px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-sm md:text-base"
            >
              The villa thoughtfully incorporates locally sourced materials,
              including natural Karangasem stone and certified recycled wood,
              ensuring a reduced carbon footprint throughout the construction
              process. Every handcrafted ornament you see is created by skilled
              artisans from Tenganan Village, adding a genuine sense of history
              and cultural depth to the interiors.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 64 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-160px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-sm md:text-base"
            >
              From the strategic placement of the swimming pool to capture the
              beauty of the sunrise, to roof designs inspired by traditional
              Balinese homes, Surya Nitya stands as a testament to our
              commitment to quality, authenticity, and deep respect for the
              historic landscapes of Karangasem.
            </motion.p>
          </div>
        </div>
        <Image
          src={HistoryDecor}
          alt="history"
          className="saturate-0 opacity-40 absolute -right-48 lg:-right-40 top-0 -z-1 lg:top-[25%]"
        />
      </div>
    </section>
  );
}
