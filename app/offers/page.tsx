import React from "react";
import TitleSection from "../_components/TitleSection";
import HeroBg from "@/public/assets/offers/hero.jpg";
import SpecialOfferSection from "../_components/offers/sections/SpecialOfferSection";
import OffersSection from "../_components/offers/sections/OffersSection";
import BookingSection from "../_components/offers/sections/BookingSection";
import CatchEye from "../_components/CatchEye";
import CatchEyeImage from "@/public/assets/offers/catch-eye.jpg";

export default function Page() {
  return (
    <>
      <TitleSection image={HeroBg} title="Offers" />
      <SpecialOfferSection />
      <OffersSection />
      <CatchEye image={CatchEyeImage} />
      <BookingSection />
    </>
  );
}
