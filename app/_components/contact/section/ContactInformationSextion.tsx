"use client";

import ContactInformationCard from "../ContactInformationCard";
import { FaLocationDot, FaPhone, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import DecorL from "@/public/assets/contact/decoration left.svg";
import DecorR from "@/public/assets/contact/decoration right.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactInformationSextion() {
  return (
    <section id="contact-information" className="overflow-x-hidden ">
      <div className="relative 2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24">
        <div className="relative z-1">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12 lg:mb-16  ">
            <motion.h2
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-primary font-playfair-display font-semibold mb-2 md:mb-4 text-lg md:text-2xl"
            >
              Reach Us
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
              className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold  lg:text-nowrap"
            >
              Contact Information
            </motion.h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "20px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <ContactInformationCard
                icon={<FaLocationDot />}
                title="Our Address"
                content={
                  <p className="text-sm md:text-base">
                    Jln. Mulyani No. 2, Desa Manggis, Karangasem, Bali
                  </p>
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "20px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              <ContactInformationCard
                icon={<FaPhone />}
                title="Phone Number"
                content={
                  <p className="text-sm md:text-base">+62 895-2800-5812</p>
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "20px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6,
              }}
            >
              <ContactInformationCard
                icon={<MdEmail />}
                title="Email"
                content={
                  <p className="text-sm md:text-base">devcupsite@gmail.com</p>
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "80px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.8,
              }}
            >
              <ContactInformationCard
                icon={<FaUser />}
                title="Social Media"
                content={
                  <div className="flex gap-3">
                    <Link href="" className="underline text-sm md:text-base">
                      Facebook
                    </Link>
                    <Link href="" className="underline text-sm md:text-base">
                      Instagram
                    </Link>
                    <Link href="" className="underline text-sm md:text-base">
                      Tik Tok
                    </Link>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>

        <Image
          src={DecorL}
          alt="decor"
          className="absolute saturate-0 rotate-24 opacity-40 w-82 md:w-96 -top-32 md:-top-24 lg:top-0 -left-44 lg:-left-32"
        />
        <Image
          src={DecorR}
          alt="decor"
          className="absolute saturate-0 -rotate-24 opacity-40 w-82 md:w-96 -top-32 md:-top-24 lg:top-0 -right-44 lg:-right-32"
        />
      </div>
    </section>
  );
}
