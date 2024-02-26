import React from "react";
import Head from "./Head";

const OurStuff = () => {
  const TeamMember = ({ name, role, imageUrl }) => (
    <div className="our-team">
      <img src={imageUrl} alt={name} />
      <div className="team-content">
        <h3 className="title">{name}</h3>
        <span className="post">{role}</span>
        <ul className="social">
          <li>
            <a href="#">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="stuff-box">
      <div className="containeer mx-auto">
        <Head
          head="Our Stuff"
          par="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="flex flex-wrap  row">
          <div className="w-full sm:w-1/2 md:w-1/3  px-4 mb-8">
            <TeamMember
              name="Williamson"
              role="Web Developer"
              imageUrl="images/stuff-img-01.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <TeamMember
              name="Kristiana"
              role="Web Designer"
              imageUrl="images/stuff-img-02.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <TeamMember
              name="Steve Thomas"
              role="Web Developer"
              imageUrl="images/stuff-img-02.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStuff;
