import Image from "next/image";
import AboutImage from "../../../public/assets/home/about.jpg";
import AboutRightDecor from "../../../public/assets/home/about-decoration-right.svg";
import AboutLeftDecor from "../../../public/assets/home/about-decoration-left.svg";
import Button from "../Button";

export default function AboutSection() {
  return (
    <section
      id="about"
      className=" flex bg-background relative overflow-hidden lg:min-h-[80vh]"
    >
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 relative z-1">
        <div className="mb-4 lg:absolute">
          <Image src={AboutImage} alt="about-bg" />
        </div>
        <div className="flex flex-col lg:items-end lg:justify-end h-full relative z-1 ">
          <div className="bg-foreground p-4 md:p-6 lg:p-8 mb-4 lg:w-[50%] shadow">
            <h1 className="font-playfair-display font-semibold text-3xl md:text-5xl mb-2">
              Luxury Living in <br /> Harmony with Nature
            </h1>
            <h2 className="text-primary font-playfair-display font-semibold text-lg md:text-2xl mb-4">
              Experience Bali Beyond the Ordinary
            </h2>
            <p className="text-sm md:text-base font-medium lg:font-normal">
              Enjoy the lush natural scenery of the Island of the Gods while
              spending your holiday in a true paradise. Luxury Surya Nitya is
              the perfect place for those seeking a relaxed getaway, immersed in
              Balinese culture and the refreshing tranquility of nature.
            </p>
          </div>
          <Button type="link" href="/about">
            <span className="flex justify-center lg:w-fit">
              More About Surya Nitya
            </span>
          </Button>
        </div>
      </div>
      <Image
        src={AboutRightDecor}
        alt="about-bg"
        className="absolute saturate-0 -top-32 -right-28 lg:-right-16 rotate-60 lg:rotate-70 opacity-60"
      />
      <Image
        src={AboutLeftDecor}
        alt="about-bg"
        className="absolute saturate-0 -bottom-40 lg:-bottom-24  -left-40 rotate-140 opacity-60"
      />
    </section>
  );
}
