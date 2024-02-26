import React from 'react'
import SpecialMenus from '../Componants/Utalities/SpecialMenus';
import TestimonialCarousel from '../Componants/Utalities/TestimonialCarousel';
import ContactInfoBox from './../Componants/Utalities/ContactInfoBox';
import OurStuff from './../Componants/Utalities/OurStuff';

const StuffPage = () => {
  return (
    <div className="font">
      <SpecialMenus name="Our Stuff" />
      <OurStuff />
      <TestimonialCarousel />
      <ContactInfoBox />
    </div>
  );
}

export default StuffPage