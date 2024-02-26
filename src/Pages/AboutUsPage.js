import React from "react";
import SpecialMenus from "./../Componants/Utalities/SpecialMenus";
import About from "../Componants/Utalities/About";
import SpecialMenu from "./../Componants/Utalities/SpecialMenu";
import TestimonialCarousel from "./../Componants/Utalities/TestimonialCarousel";
import ContactInfoBox from "./../Componants/Utalities/ContactInfoBox";

const AboutUsPage = () => {
  return (
    <div className="font">
      <SpecialMenus name="About Us" />
      <About />
      <SpecialMenu />
      <TestimonialCarousel />
      <ContactInfoBox />
    </div>
  );
};

export default AboutUsPage;
