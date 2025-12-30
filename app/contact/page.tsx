import React from "react";
import TitleSection from "../_components/TitleSection";
import HeroBg from "@/public/assets/contact/hero.jpg";
import ContactInformationSextion from "../_components/contact/section/ContactInformationSextion";
import ContactFormSection from "../_components/contact/section/ContactFormSection";

export default function Page() {
  return (
    <>
      <TitleSection image={HeroBg} title="Contact us" />
      <ContactInformationSextion />
      <ContactFormSection />
    </>
  );
}
