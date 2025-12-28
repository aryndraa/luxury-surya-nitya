import Image from "next/image";
import DescriptionImage from "@/public/assets/facilities/description-placeholder.jpg";

export default function DescriptionSection() {
  return (
    <section className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 grid lg:grid-cols-12 gap-8 ">
      <div className="lg:col-span-5">
        <h1 className="font-playfair-display font-semibold text-3xl md:text-5xl mb-2 md:mb-4 leading-[1.2]">
          Designed for Comfort and Tranquility
        </h1>
        <h2 className="text-primary font-playfair-display font-semibold text-lg md:text-2xl mb-4 md:mb-6">
          A seamless blend of elegance, openness, and natural surroundings
        </h2>
        <p>
          Every space at Luxury Surya Nitya is carefully designed to offer a
          seamless blend of luxury and natural serenity. From open living areas
          that invite fresh mountain air to private outdoor spaces overlooking
          Karangasem’s lush landscape, our facilities are created to enhance
          relaxation, comfort, and privacy. Each detail supports a calm and
          effortless stay, allowing you to slow down, reconnect with nature, and
          enjoy a truly refined private retreat.
        </p>
      </div>
      <div className="hidden lg:block"></div>
      <div className="lg:col-span-6">
        <Image
          src={DescriptionImage}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
