import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="w-full p-8 h-full bg-foreground flex flex-col items-center gap-6 md:gap-8">
      <Image src={image} alt="icon" />
      <div className="text-center flex flex-col gap-2 md:gap-3 items-center justify-center">
        <h3 className="text-xl md:text-xl lg:text-2xl font-playfair-display font-semibold">
          {title}
        </h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
