import Image, { StaticImageData } from "next/image";
import React from "react";

interface CatchEyeProps {
  image: StaticImageData;
}

export default function CatchEye({ image }: CatchEyeProps) {
  return (
    <div>
      <Image
        src={image}
        alt="catch-eye"
        className="h-[30vh] lg:h-[50vh] w-full object-cover"
      />
    </div>
  );
}
