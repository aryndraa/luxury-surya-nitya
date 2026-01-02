"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContactFormImage from "@/public/assets/contact/contact-form.jpg";
import { motion } from "framer-motion";

type BookingForm = {
  name: string;
  phone: string;
  email: string;
  subject: string;
};

export default function ContactFormSection() {
  const [form, setForm] = useState<BookingForm>({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
    <section id="contact-form" className="bg-background">
      <div className="relative 2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 ">
        <motion.div
          initial={{ opacity: 0, x: -64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="lg:col-span-4 h-full  flex flex-col justify-between gap-4 "
        >
          <div>
            <h2 className="text-primary font-playfair-display font-semibold text-lg md:text-2xl mb-2 md:mb-5">
              Let&apos;s Talk
            </h2>
            <h1 className="font-playfair-display text-3xl md:text-5xl font-semibold mb-4 lg:mb-6">
              Get In Touch
            </h1>
            <p className="text-sm md:text-base">
              Have questions or need more information about our packages? Fill
              out the form below and our team will get back to you as soon as
              possible.
            </p>
          </div>
          <Image
            src={ContactFormImage}
            alt="image"
            className="w-full  h-32 object-cover "
          />
        </motion.div>
        <div className="lg:col-span-1 hidden lg:block "></div>
        <motion.form
          initial={{ opacity: 0, x: 64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          onSubmit={handleSubmit}
          className="bg-foreground  p-6 md:p-8 w-full lg:col-span-7 "
        >
          <h1 className="md:col-span-2 text-3xl md:text-5xl font-playfair-display  font-semibold mb-6 md:mb-12">
            Contact Form
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border-b border-text-dark/40 focus:border-text-dark pb-4  text-text-dark placeholder:text-text-dark/70 font-medium bg-transparent focus:outline-none transition ease-in-out md:col-span-2"
              placeholder="Your name"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="border-b border-text-dark/40 focus:border-text-dark pb-4  text-text-dark placeholder:text-text-dark/70 font-medium bg-transparent focus:outline-none transition ease-in-out"
              placeholder="Your Phone Number"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="border-b border-text-dark/40 focus:border-text-dark pb-4  text-text-dark placeholder:text-text-dark/70 font-medium bg-transparent focus:outline-none transition ease-in-out"
              placeholder="Your Email Address"
            />

            <textarea
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="border-b h-32 max-h-32 lg:max-h-24 border-text-dark/40 focus:border-text-dark pb-4  text-text-dark placeholder:text-text-dark/70 font-medium bg-transparent focus:outline-none transition ease-in-out  md:col-span-2"
              placeholder="Subject"
            />

            <button
              type="submit"
              className="md:col-span-2 mt-4 bg-primary font-playfair-display text-lg text-white py-3 font-semibold  hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
