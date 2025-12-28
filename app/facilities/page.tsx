import React from "react";
import TitleSection from "../_components/TitleSection";
import HeroBg from "@/public/assets/facilities/hero.jpg";
import DescriptionSection from "../_components/facilities/sections/DescriptionSection";
import FacilitiesSection from "../_components/facilities/sections/FacilitiesSection";
import CatchEye from "../_components/CatchEye";
import CatchEyeImage from "@/public/assets/facilities/catch-eye.jpg";
import EssentialSection from "../_components/facilities/sections/EssentialSection";

export default function Page() {
  return (
    <>
      <TitleSection image={HeroBg} title="Facilities" />
      <DescriptionSection />
      <FacilitiesSection />
      <CatchEye image={CatchEyeImage} />
      <EssentialSection />
    </>
  );
}
