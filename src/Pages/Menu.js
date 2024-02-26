import React from 'react'
import SpecialMenu from '../Componants/Utalities/SpecialMenu';
import Quotation from '../Componants/Utalities/quote';
import SpecialMenus from './../Componants/Utalities/SpecialMenus';
import TestimonialCarousel from './../Componants/Utalities/TestimonialCarousel';
import ContactInfoBox from './../Componants/Utalities/ContactInfoBox';

const Menu = () => {
  return (
    <div className="font">
      <SpecialMenus name="Special Menu"/>
      <SpecialMenu />
      <Quotation />
      <TestimonialCarousel />
      <ContactInfoBox />
    </div>
  );
}

export default Menu