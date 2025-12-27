import CatchEye from "./_components/CatchEye";
import AboutSection from "./_components/overview/sections/AboutSection";
import CheckAvailabilitySection from "./_components/overview/sections/CheckAvailabilitySection";
import FacilitySection from "./_components/overview/sections/FacilitySection";
import GallerySection from "./_components/overview/sections/GallerySection";
import HeroSection from "./_components/overview/sections/HeroSection";
import OfferSection from "./_components/overview/sections/OfferSection";
import CatchEyeImage from "@/public/assets/home/catch-eye.jpg";
import TestimonialSection from "./_components/overview/sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FacilitySection />
      <OfferSection />
      <CatchEye image={CatchEyeImage} />
      <GallerySection />
      <CheckAvailabilitySection />
      <TestimonialSection />
    </>
  );
}
