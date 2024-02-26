import React from 'react'
import SpecialMenus from '../Componants/Utalities/SpecialMenus';
import TestimonialCarousel from '../Componants/Utalities/TestimonialCarousel';
import ContactInfoBox from '../Componants/Utalities/ContactInfoBox';
import Reserve from './../Componants/Utalities/Reserve';

const ReservePage = () => {
  return (
    <div className="font">
      <SpecialMenus name="Reservation" />
      <Reserve/>
      <TestimonialCarousel />
      <ContactInfoBox />
    </div>
  );}

export default ReservePage