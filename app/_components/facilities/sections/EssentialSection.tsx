"use client";

import HeadingLine from "../../HeadingLine";
import EssentialCard from "../EssentialCard";
import Icon1 from "@/public/assets/facilities/ac.svg";
import Icon2 from "@/public/assets/facilities/fan.svg";
import Icon3 from "@/public/assets/facilities/box.svg";
import Icon4 from "@/public/assets/facilities/drink.svg";
import Icon5 from "@/public/assets/facilities/parking.svg";
import Icon6 from "@/public/assets/facilities/tv.svg";
import Icon7 from "@/public/assets/facilities/towels.svg";
import Icon8 from "@/public/assets/facilities/safety.svg";
import { motion } from "framer-motion";

export default function EssentialSection() {
  return (
    <section id="essentials" className="bg-background">
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 flex flex-col gap-6 md:gap-8 lg:gap-12">
        <HeadingLine>
          <motion.h1
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6 lg:text-nowrap"
          >
            Essential Villa Amenities
          </motion.h1>
        </HeadingLine>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <EssentialCard image={Icon1} title="Air Conditioning in Bedrooms" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            <EssentialCard image={Icon2} title="Ceiling Fans" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            <EssentialCard image={Icon3} title="In-Room Safety Box" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            <EssentialCard image={Icon4} title="Complimentary Drinking Water" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            <EssentialCard image={Icon5} title="Private Parking Area" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            <EssentialCard
              image={Icon6}
              title="Smart TV with Streaming Access"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            <EssentialCard image={Icon7} title="Fresh Towels & Pool Towels" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            <EssentialCard image={Icon8} title="First Aid & Safety Equipment" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
