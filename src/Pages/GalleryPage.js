import React from 'react'
import SpecialMenus from '../Componants/Utalities/SpecialMenus';
import Images from '../Componants/Utalities/Images';
import TestimonialCarousel from '../Componants/Utalities/TestimonialCarousel';
import ContactInfoBox from './../Componants/Utalities/ContactInfoBox';

const GalleryPage = () => {
  return (
    <div className="font">
      <SpecialMenus name="Gallery" />
      <Images />
      <TestimonialCarousel />
      <ContactInfoBox />
    </div>
  );
}

export default GalleryPage