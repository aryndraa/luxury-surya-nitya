"use client";

import Image from "next/image";
import { useState } from "react";
import CheckAvailabilityBg from "@/public/assets/home/check-availability-bg.jpg";
import AboutRightDecor from "@/public/assets/home/about-decoration-right.svg";
import AboutLeftDecor from "@/public/assets/home/about-decoration-left.svg";
import { motion } from "framer-motion";

type BookingForm = {
  name: string;
  phone: string;
  package: string;
  guest: number;
  reservationDate: string;
};

export default function CheckAvailabilitySection() {
  const [form, setForm] = useState<BookingForm>({
    name: "",
    phone: "",
    package: "",
    guest: 1,
    reservationDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);

    // nanti bisa:
    // - kirim ke API
    // - redirect ke WhatsApp
  };

  return (
    <section id="check-availability" className="relative">
      <Image
        src={CheckAvailabilityBg}
        alt="bg"
        className=" lg:absolute bottom-0 top-0 h-full left-0 right-0 min-w-[50%] hidden lg:block"
      />
      <div className=" absolute  bottom-0 top-0 h-full w-full  overflow-hidden lg:w-[50%] right-0 bg-background ">
        <div className="relative h-full">
          <Image
            src={AboutRightDecor}
            alt="about-bg"
            className="absolute saturate-0 -top-24  2xl:-top-12 -right-28 lg:-right-16 2xl:-right-8 rotate-60 lg:rotate-70 opacity-40"
          />
          <Image
            src={AboutLeftDecor}
            alt="about-bg"
            className="absolute saturate-0 -bottom-24 2xl:-bottom-12 lg:-bottom-24  -left-32 2xl:-left-24 lg rotate-140 opacity-40"
          />
        </div>
      </div>

      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 relative z-1 flex justify-end ">
        <motion.form
          onSubmit={handleSubmit}
          className="bg-text-dark shadow-lg p-6 md:p-8 w-full lg:w-[60%] "
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="md:col-span-2 text-3xl md:text-5xl font-playfair-display text-text-light font-semibold mb-6 md:mb-12">
            Check Availability
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border-b border-text-light/40 focus:border-text-light pb-4  text-text-light placeholder:text-text-light/70 bg-transparent focus:outline-none transition ease-in-out"
              placeholder="Your name"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="border-b border-text-light/40 focus:border-text-light pb-4  text-text-light placeholder:text-text-light/70 bg-transparent focus:outline-none transition ease-in-out"
              placeholder="Phone Number"
            />

            <select
              name="package"
              value={form.package}
              onChange={handleChange}
              required
              className={`border-b pb-4 bg-transparent focus:outline-none transition ease-in-out
                ${
                  form.package
                    ? "text-text-light border-text-light"
                    : "text-text-light/70 border-text-light/40"
                }
            `}
            >
              <option value="" disabled>
                Select package
              </option>
              <option value="romantic" className="text-text-dark">
                Romantic Escape
              </option>
              <option value="family" className="text-text-dark">
                Family Getaway
              </option>
              <option value="honeymoon" className="text-text-dark">
                Honeymoon Package
              </option>
            </select>

            <div className="flex border-b pb-4 border-text-light/40 focus-within:border-text-light transition-colors duration-300">
              <label className="text-text-light/70 mr-2">Guests :</label>

              <input
                type="number"
                name="guest"
                value={form.guest}
                min={1}
                onChange={handleChange}
                required
                className="text-text-light placeholder:text-text-light/70 bg-transparent focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 border-b pb-4 border-text-light/40 focus-within:border-text-light transition-colors duration-300 md:col-span-2">
              <label className="text-text-light/70 whitespace-nowrap">
                Reservation Date :
              </label>
              <input
                type="date"
                name="reservationDate"
                value={form.reservationDate}
                onChange={handleChange}
                required
                className="w-full text-text-light bg-transparent placeholder:text-text-light/70 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="md:col-span-2 mt-4 bg-primary text-white py-3 font-semibold text-lg font-playfair-display rounded hover:opacity-90 transition"
            >
              Check Availability
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
