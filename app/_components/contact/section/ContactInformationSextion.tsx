import React from "react";
import ContactInformationCard from "../ContactInformationCard";
import { FaLocationDot, FaPhone, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function ContactInformationSextion() {
  return (
    <section
      id="contact-information"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24"
    >
      <div className="flex flex-col items-center text-center mb-8 md:mb-12 lg:mb-16  ">
        <h2 className="text-primary font-playfair-display font-semibold mb-2 md:mb-4 text-lg md:text-2xl">
          Reach Us
        </h2>
        <h1 className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold  lg:text-nowrap">
          Contact Information
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <ContactInformationCard
          icon={<FaLocationDot />}
          title="Our Address"
          content={
            <p className="text-sm md:text-base">
              Jln. Mulyani No. 2, Desa Manggis, Karangasem, Bali
            </p>
          }
        />
        <ContactInformationCard
          icon={<FaPhone />}
          title="Phone Number"
          content={<p className="text-sm md:text-base">+62 895-2800-5812</p>}
        />
        <ContactInformationCard
          icon={<MdEmail />}
          title="Email"
          content={<p className="text-sm md:text-base">devcupsite@gmail.com</p>}
        />
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
      </div>
    </section>
  );
}
