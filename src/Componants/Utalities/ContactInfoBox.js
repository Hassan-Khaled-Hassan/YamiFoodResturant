import React from "react";

const ContactInfoBox = () => {
  return (
    <div className="bg-brown py-8 contact-imfo-box">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 pb-2">
            <div className="flex items-center">
              <i className="fas fa-phone-volume text-3xl"></i>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-white">Phone</h4>
                <p className=" text-white">+01 123-456-4590</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 pb-2">
            <div className="flex items-center">
              <i className="fas fa-envelope text-3xl text-white"></i>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="text-white">yourmail@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 pb-2">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-3xl text-white"></i>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-white">Location</h4>
                <p className="text-white">800, Lorem Street, US</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoBox;
