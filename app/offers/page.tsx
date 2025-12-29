import React from "react";
import TitleSection from "../_components/TitleSection";
import HeroBg from "@/public/assets/offers/hero.jpg";
import SpecialOfferSection from "../_components/offers/sections/SpecialOfferSection";
import OffersSection from "../_components/offers/sections/OffersSection";

export default function Page() {
  return (
    <>
      <TitleSection image={HeroBg} title="Offers" />
      <SpecialOfferSection />
      <OffersSection />
    </>
  );
}
