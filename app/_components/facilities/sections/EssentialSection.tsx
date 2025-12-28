import React from "react";
import HeadingLine from "../../HeadingLine";
import EssentialCard from "../EssentialCard";
import Icon1 from "@/public/assets/facilities/ac.svg";
import Icon2 from "@/public/assets/facilities/fan.svg";
import Icon3 from "@/public/assets/facilities/box.svg";
import Icon4 from "@/public/assets/facilities/drink.svg";
import Icon5 from "@/public/assets/facilities/parking.svg";
import Icon6 from "@/public/assets/facilities/tv.svg";
import Icon7 from "@/public/assets/facilities/towels.svg";
import Icon8 from "@/public/assets/facilities/safety.svg";

export default function EssentialSection() {
  return (
    <section id="essentials" className="bg-background">
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-18 lg:py-24 flex flex-col gap-6 md:gap-8 lg:gap-12">
        <HeadingLine>
          <h1 className=" text-center text-3xl md:text-5xl font-playfair-display font-semibold mb-4 lg:mb-6 lg:text-nowrap">
            Essential Villa Amenities
          </h1>
        </HeadingLine>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          <EssentialCard image={Icon1} title="Air Conditioning in Bedrooms" />
          <EssentialCard image={Icon2} title="Ceiling Fans" />
          <EssentialCard image={Icon3} title="In-Room Safety Box" />
          <EssentialCard image={Icon4} title="Complimentary Drinking Water" />
          <EssentialCard image={Icon5} title="Private Parking Area" />
          <EssentialCard image={Icon6} title="Smart TV with Streaming Access" />
          <EssentialCard image={Icon7} title="Fresh Towels & Pool Towels" />
          <EssentialCard image={Icon8} title="First Aid & Safety Equipment" />
        </div>
      </div>
    </section>
  );
}
