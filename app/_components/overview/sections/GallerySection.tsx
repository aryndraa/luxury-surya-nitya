import React from "react";
import Flower from "@/public/assets/home/gallery-flower.svg";
import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";
import gallery1 from "@/public/assets/home/gallery1.jpg";
import gallery2 from "@/public/assets/home/gallery2.jpg";
import gallery3 from "@/public/assets/home/gallery3.jpg";
import gallery4 from "@/public/assets/home/gallery4.jpg";
import gallery5 from "@/public/assets/home/gallery5.jpg";
import gallery6 from "@/public/assets/home/gallery6.jpg";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24"
    >
      <div className="flex flex-col items-center mb-12 lg:mb-18">
        <div className="mb-8 lg:mb-12 flex flex-col items-center text-center">
          <h1 className="font-playfair-display text-3xl md:text-5xl font-semibold mb-4 lg:mb-6">
            Moments at Luxury Surya Nitya
          </h1>
          <p className="text-sm md:text-lg  lg:w-[65%] ">
            Explore the beauty and tranquility of Luxury Surya Nitya through
            stunning images of our private villa, lush surroundings, and
            thoughtfully designed spaces.
          </p>
        </div>
        <div className="flex items-center justify-between gap-8 w-full md:w-[80%] lg:w-[50%]">
          <div className="w-full flex items-center text-primary ">
            <hr className="w-full" />
            <FaDiamond />
          </div>
          <Image src={Flower} alt="gallery-decor" className="w-12 lg:w-18" />
          <div className="w-full flex items-center text-primary ">
            <FaDiamond />
            <hr className="w-full" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
        <Image src={gallery1} alt="gallery-1" className="w-full object-cover" />
        <Image src={gallery2} alt="gallery-2" className="w-full object-cover" />
        <Image src={gallery3} alt="gallery-3" className="w-full object-cover" />
        <Image src={gallery4} alt="gallery-4" className="w-full object-cover" />
        <Image src={gallery5} alt="gallery-5" className="w-full object-cover" />
        <Image src={gallery6} alt="gallery-6" className="w-full object-cover" />
      </div>
    </section>
  );
}
