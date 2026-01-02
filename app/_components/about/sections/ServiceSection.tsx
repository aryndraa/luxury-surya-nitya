"use client";

import HeadingLine from "../../HeadingLine";
import ServiceCard from "../ServiceCard";
import ExperienceIcon from "@/public/assets/about/private-experience.svg";
import AssistanceIcon from "@/public/assets/about/assistance.svg";
import KitchenIcon from "@/public/assets/about/kitchen.svg";
import ViewsIcon from "@/public/assets/about/views.svg";
import Image from "next/image";
import ServiceImage from "@/public/assets/about/service-image.jpg";
import { motion } from "framer-motion";

export default function ServiceSection() {
  return (
    <section id="service" className="bg-background">
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-primary font-playfair-display font-semibold mb-2 md:mb-4 text-lg md:text-2xl"
          >
            Our Services
          </motion.h2>
          <HeadingLine>
            <motion.h1
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6 lg:text-nowrap"
            >
              Our Signature Experience
            </motion.h1>
          </HeadingLine>
          <motion.p
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-sm md:text-lg lg:w-[35%] "
          >
            Personalized services designed to anticipate your needs and elevate
            every moment of your stay.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -64, y: -64 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-full w-full"
          >
            <ServiceCard
              image={ExperienceIcon}
              title=" Private Villa Experience"
              description="Enjoy complete privacy with exclusive access to the entire villa, designed for uninterrupted comfort and tranquility."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="row-span-2 hidden lg:block "
          >
            <Image
              src={ServiceImage}
              alt="service-image"
              className="hidden lg:block w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 64, y: -64 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-full w-full"
          >
            <ServiceCard
              image={AssistanceIcon}
              title="24-Hour Guest Assistance"
              description="Our dedicated team is available around the clock to assist with requests, local arrangements, and any needs during your stay."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -64, y: 64 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-full w-full"
          >
            <ServiceCard
              image={KitchenIcon}
              title="Fully Equipped Kitchen"
              description="A modern, fully equipped kitchen that allows you to prepare meals freely and enjoy the comfort of home during your stay."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 64, y: 64 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-180px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-full w-full"
          >
            <ServiceCard
              image={ViewsIcon}
              title="Scenic Private Pool & Nature Views"
              description="Relax in your private pool while enjoying breathtaking views of Karangasem’s lush landscape and serene surroundings."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
