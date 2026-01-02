"use client";
import React from "react";
import { FaDiamond } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function HeadingLine({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-12 w-full justify-center  ">
      <motion.div
        className="w-full hidden lg:flex items-center text-primary "
        initial={{ opacity: 0, x: -64 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-180px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <hr className="w-full" />
        <FaDiamond />
      </motion.div>
      {children}
      <motion.div
        className="w-full hidden lg:flex items-center text-primary "
        initial={{ opacity: 0, x: 64 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-180px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <FaDiamond />
        <hr className="w-full" />
      </motion.div>
    </div>
  );
}
