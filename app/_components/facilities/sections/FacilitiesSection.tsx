"use client";

import HeadingLine from "../../HeadingLine";
import FacilityCard from "../FacilityCard";
import FacilityImage1 from "@/public/assets/facilities/private-1.jpg";
import FacilityImage2 from "@/public/assets/facilities/private-2.jpg";
import FacilityImage3 from "@/public/assets/facilities/private-3.jpg";
import FacilityImage4 from "@/public/assets/facilities/indoor-1.jpg";
import FacilityImage5 from "@/public/assets/facilities/indoor-2.jpg";
import FacilityImage6 from "@/public/assets/facilities/indoor-3.jpg";
import FacilityImage7 from "@/public/assets/facilities/service-1.jpg";
import FacilityImage8 from "@/public/assets/facilities/service-2.jpg";
import FacilityImage9 from "@/public/assets/facilities/service-3.jpg";
import { motion } from "framer-motion";

export default function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 flex flex-col gap-12 md:gap-18 lg:gap-24"
    >
      <div className="flex flex-col gap-6 md:gap-12">
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
            Private Outdoor Areas
          </motion.h1>
        </HeadingLine>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage1}
              title="Private Swimming Pool"
              description="Private pool overlooking the lush green valley of Karangasem, perfect for sunrise swims and peaceful mornings."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage2}
              title="Exclusive Sun Deck & Terrace"
              description="PPremium sun loungers and large umbrellas, ideal for morning coffee or relaxing after a swim while listening to nature."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage3}
              title="Traditional Gazebo / Bale"
              description="A breezy Balinese-style gazebo with soft cushions, perfect for reading, meditation, or afternoon naps."
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-12">
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
            Indoor Comfort & Accommodation
          </motion.h1>
        </HeadingLine>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage4}
              title="Luxury Master Bedroom"
              description="A peaceful sanctuary featuring a king-size premium bed with high-quality Egyptian cotton linens."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage5}
              title="En-Suite Bathroom"
              description="Spacious marble-designed bathroom with hot & cold rain shower and organic bath amenities."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage6}
              title="Open Living Area"
              description="An open-concept living space with plush sofas, modern sound system, and Smart TV for relaxed evenings."
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-12">
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
            Facilities & Services
          </motion.h1>
        </HeadingLine>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage7}
              title="Private Staff Service"
              description="Dedicated villa manager and daily staff available to assist with housekeeping, local arrangements, and guest needs."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage8}
              title="Indoor & Outdoor Dining Area"
              description="Choose between an elegant indoor dining setup or an alfresco dining experience overlooking the pool."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-160px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <FacilityCard
              image={FacilityImage9}
              title="Fully Equipped Kitchen"
              description="Modern kitchen with induction stove, microwave, and large refrigerator."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
