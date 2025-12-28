import Image, { StaticImageData } from "next/image";
import React from "react";

interface FacilityCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function FacilityCard({
  title,
  description,
  image,
}: FacilityCardProps) {
  return (
    <div>
      <Image src={image} alt="facility" className="w-full mb-4" />
      <div>
        <h3 className="text-2xl lg:text-3xl font-playfair-display font-semibold mb-2 md:mb-3">
          {title}
        </h3>
        <p className="text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
}
