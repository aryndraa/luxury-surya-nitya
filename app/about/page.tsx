import DescriptionSection from "../_components/about/sections/DescriptionSection";
import HeroBg from "@/public/assets/about/hero.jpg";
import HistorySection from "../_components/about/sections/HistorySection";
import ServiceSection from "../_components/about/sections/ServiceSection";
import CatchEyeImage from "@/public/assets/about/catch-eye.jpg";
import CatchEye from "../_components/CatchEye";
import SocialMediaSection from "../_components/about/sections/SocialMediaSection";
import TitleSection from "../_components/TitleSection";

export default function Page() {
  return (
    <>
      <TitleSection image={HeroBg} title="About" />
      <DescriptionSection />
      <HistorySection />
      <ServiceSection />
      <CatchEye image={CatchEyeImage} />
      <SocialMediaSection />
    </>
  );
}
