"use client";

import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useBooking } from "@/lib/store/booking";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingFloating() {
  const { isFormFilled } = useBooking();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === "/offers") {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/offers#booking");
    }
  };

  return (
    <AnimatePresence>
      {isFormFilled && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="fixed bottom-8 right-4 z-50"
        >
          <button
            onClick={handleClick}
            className="p-4 text-2xl rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:scale-105 transition"
            aria-label="Book Now"
          >
            <FaCalendarAlt />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
