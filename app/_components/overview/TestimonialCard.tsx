import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa6";
import TestimonialUser from "@/public/assets/home/testimonial-user.jpg";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="border p-4">
      <FaQuoteRight className="text-6xl opacity-40 mb-3" />
      <div>
        <p className="text-sm md:text-base mb-8">
          My stay at Luméa was nothing short of spectacular! The elegant
          ambiance, coupled with attentive staff, made it an unforgettable
          experience. I can&apos;t wait to return and indulge in the luxury
          hotel
        </p>
        <div>
          <div className="flex gap-2 mb-3">
            <span className="text-primary">
              <FaStar />
            </span>
            <span className="text-primary">
              <FaStar />
            </span>
            <span className="text-primary">
              <FaStar />
            </span>
            <span className="text-primary">
              <FaStar />
            </span>
            <span className="text-primary">
              <FaStar />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={TestimonialUser} alt="user" className="size-6" />
            <span className="font-semibold">Mahendra Arya</span>
          </div>
        </div>
      </div>
    </div>
  );
}
