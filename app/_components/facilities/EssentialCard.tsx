import Image, { StaticImageData } from "next/image";

interface EssentialCardProps {
  image: StaticImageData;
  title: string;
}

export default function EssentialCard({ image, title }: EssentialCardProps) {
  return (
    <div className="w-full p-8 h-full w-full bg-foreground flex flex-col items-center gap-6 md:gap-8">
      <Image src={image} alt="icon" />
      <h3 className="text-xl md:text-xl lg:text-2xl font-playfair-display font-semibold text-center">
        {title}
      </h3>
    </div>
  );
}
