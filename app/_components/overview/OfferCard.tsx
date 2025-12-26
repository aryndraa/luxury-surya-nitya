import Image, { StaticImageData } from "next/image";
import React from "react";

interface OfferCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function OfferCard({
  image,
  title,
  description,
}: OfferCardProps) {
  return (
    <div className="md:-mb-14 lg:-mb-18">
      <Image
        src={image}
        alt="Package1"
        className="max-h-107.5 w-full object-cover"
      />
      <div className="p-4 md:p-6 bg-foreground  text-center md:mx-4 md:transform md:-translate-y-24">
        <h3 className="text-2xl md:text-4xl mb-2 md:mb-4 font-playfair-display font-semibold">
          {title}
        </h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
