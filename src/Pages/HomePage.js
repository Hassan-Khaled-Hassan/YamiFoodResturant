import React from "react";
import ContactInfoBox from "../Componants/Utalities/ContactInfoBox";
import TestimonialCarousel from "../Componants/Utalities/TestimonialCarousel";
import Images from "../Componants/Utalities/Images";
import SpecialMenu from "../Componants/Utalities/SpecialMenu";
import Quotation from "../Componants/Utalities/quote";
import About from "../Componants/Utalities/About";
import VideoCarouselBasicExample from "../Componants/Utalities/VideoCarouselBasicExample";

const HomePage = () => {
  return (
    <div className="font">
      <VideoCarouselBasicExample />
      <About />
      <Quotation />
      <SpecialMenu />
      <Images />
      <TestimonialCarousel />
      <ContactInfoBox />
    </div>
  );
};

export default HomePage;
