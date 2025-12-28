import Image, { StaticImageData } from "next/image";

interface TitleSectionProps {
  title: string;
  image: StaticImageData;
}

export default function TitleSection({ title, image }: TitleSectionProps) {
  return (
    <section id="hero" className=" bg-background ">
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 pt-12 md:pt-18 lg:pt-24 flex justify-between items-end min-h-[30vh]">
        <h1 className="font-playfair-display text-5xl md:text-7xl font-semibold pb-8 md:pb-12 lg:pb-16">
          {title}
        </h1>
        <Image
          src={image}
          alt="hero"
          className=" object-cover h-[45vh] w-[60%] hidden lg:block "
        />
      </div>
    </section>
  );
}
