import React from 'react'
import ContactForm from './../Componants/Utalities/ContactForm';
import SpecialMenus from './../Componants/Utalities/SpecialMenus';
import ContactInfoBox from './../Componants/Utalities/ContactInfoBox';

const ContactPage = () => {
  return (
    <div className="font">
      <SpecialMenus name="Contact" />
        <ContactForm/>
      <ContactInfoBox />
    </div>
    )
}

export default ContactPage