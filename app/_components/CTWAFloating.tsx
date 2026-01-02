"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

export default function CTWAFloating() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.9 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="fixed bottom-8 right-4 z-50"
      >
        <button
          onClick={handleClick}
          className="p-4 text-2xl rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:scale-105 transition"
          aria-label="Book Now"
        >
          <IoLogoWhatsapp />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
