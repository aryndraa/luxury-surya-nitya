import Link from "next/link";
import React from "react";
import Image from "next/image";
import Image1 from "@/public/assets/about/Rectangle 388.jpg";
import Image2 from "@/public/assets/about/Rectangle 388-1.jpg";
import Image3 from "@/public/assets/about/Rectangle 389.jpg";
import Image4 from "@/public/assets/about/Rectangle 390.jpg";
import Image5 from "@/public/assets/about/Rectangle 390-1.jpg";
import Image6 from "@/public/assets/about/Rectangle 390-2.jpg";
import Image7 from "@/public/assets/about/Rectangle 391.jpg";
import Image8 from "@/public/assets/about/Rectangle 392.jpg";

export default function SocialMediaSection() {
  return (
    <section
      id="social-media"
      className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24"
    >
      <div className="mb-8 md:mb-14 flex flex-col lg:flex-row justify-between">
        <h1 className="text-3xl md:text-5xl font-playfair-display font-semibold mb-6  lg:mb-0 ">
          A Handful of Guests Have <br className="hidden lg:block" />{" "}
          Submitted Their Best Memories
        </h1>
        <div className="flex flex-col gap-2 lg:justify-between">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-playfair-display font-medium text-primary ">
            Follow Our Social Media :
          </h2>
          <div className="flex gap-2">
            <Link href="" className="underline md:text-lg">
              Facebook
            </Link>
            <Link href="" className="underline md:text-lg">
              Instagram
            </Link>
            <Link href="" className="underline md:text-lg">
              Tik Tok
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2  md:gap-4">
        <div className="flex lg:flex-col gap-2 md:gap-4">
          <Image src={Image1} alt="image" className="w-full object-cover" />
          <Image src={Image2} alt="image" className="w-full object-cover" />
        </div>
        <div className="flex lg:flex-col gap-2 md:gap-4">
          <Image src={Image3} alt="image" className="w-full object-cover" />
          <Image src={Image4} alt="image" className="w-full object-cover" />
        </div>
        <div className="flex lg:flex-col gap-2 md:gap-4">
          <Image src={Image5} alt="image" className="w-full object-cover" />
          <Image src={Image6} alt="image" className="w-full object-cover" />
        </div>
        <div className="flex lg:flex-col gap-2 md:gap-4">
          <Image src={Image7} alt="image" className="w-full object-cover" />
          <Image src={Image8} alt="image" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
