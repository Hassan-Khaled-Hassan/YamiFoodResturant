import React from "react";
import { Carousel } from "flowbite-react";
import Head from "./Head";

const TestimonialCarousel = () => {
  const testimonialItems = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
      name: "DANIEL VEBAR",
      occupation: "Seo Analyst",
      avatar: "images/profile-7.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
      name: "STEVE FONSI",
      occupation: "Web Designer",
      avatar: "images/profile-3.jpg",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.",
      name: "PAUL MITCHEL",
      occupation: "Web Developer",
      avatar: "images/profile-1.jpg",
    },
  ];

  return (
    <div className="menu-box">
      <div className="containeer mx-auto">
        <Head
          head="Special Menu"
          par="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <Carousel className=" tests py-5" indicators={false} pauseOnHover>
          {testimonialItems.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img src={item.avatar} alt={item.name} />
                  </div>
                  <div className="info">
                    <h5 className="name text-brown text-center">{item.name}</h5>
                    <p className="occupation text-center">{item.occupation}</p>
                  </div>
                  <p className="text text-center">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
