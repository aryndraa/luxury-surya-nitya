import Image from "next/image";
import FacilityDecor from "@/public/assets/home/facility-decor.svg";
import Facility1 from "@/public/assets/home/facility-1.jpg";
import Facility2 from "@/public/assets/home/facility-2.jpg";
import Facility3 from "@/public/assets/home/facility-3.jpg";
import FacilityBg from "@/public/assets/home/facility-bg.jpg";
import Button from "../../Button";

export default function FacilitySection() {
  return (
    <section
      id="facility"
      className="relative py-12 md:py-18 lg:py-24 overflow-hidden"
    >
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12  lg:grid grid-cols-12 ">
        <div className="mb-8 lg:mb-0 col-span-6">
          <div className="flex flex-col items-center mb-8 lg:mb-20">
            <Image
              src={FacilityDecor}
              alt="facility"
              className="saturate-0 opacity-40 mb-3 lg:mb-8 w-64 lg:w-96"
            />
            <div className="text-center flex flex-col lg:items-center">
              <h1 className="font-playfair-display text-3xl md:text-5xl font-semibold mb-4 lg:mb-6">
                Facilities Designed for <br /> Absolute Comfort
              </h1>
              <p className="text-sm md:text-lg mb-8 lg:mb-12 lg:w-[75%] ">
                Every space is thoughtfully crafted to enhance privacy,
                relaxation, and a seamless connection with nature.
              </p>
              <Button type="link" href="/facilities">
                <span className="flex justify-center lg:w-fit">
                  More About Surya Nitya
                </span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <Image src={Facility1} alt="facility1" className="w-full" />
            <Image src={Facility2} alt="facility2" className="w-full" />
            <Image src={Facility3} alt="facility3" className="w-full" />
          </div>
        </div>
      </div>
      <Image
        src={FacilityBg}
        alt="facilitybg"
        className="aspect-square object-cover object-center lg:absolute right-0 bottom-0 top-0 lg:aspect-auto px-4 md:px-8 lg:px-0 w-full lg:w-[45vw] "
      />
    </section>
  );
}
