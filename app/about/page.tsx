import Image from "next/image";
import DescriptionSection from "../_components/about/section/DescriptionSection";
import HeroBg from "@/public/assets/about/hero.jpg";

export default function Page() {
  return (
    <>
      <section id="hero" className=" bg-background ">
        <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 pt-12 md:pt-18 lg:pt-24 flex justify-between items-end min-h-[30vh]">
          <h1 className="font-playfair-display text-5xl md:text-7xl font-semibold pb-8 md:pb-12 lg:pb-16">
            About Us
          </h1>
          <Image
            src={HeroBg}
            alt="hero"
            className=" object-cover min-h-[40vh] w-[60%] hidden lg:block "
          />
        </div>
      </section>
      <DescriptionSection />
    </>
  );
}
