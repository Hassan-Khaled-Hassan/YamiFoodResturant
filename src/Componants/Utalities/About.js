import React from "react";

const About = () => {
  return (
    <div class="mx-auto xl:max-w-screen-xl md:max-w-screen-lg py-20 flex flex-wrap about">
      <div className="lg:w-1/2 md:w-1/2 sm:w-full">
        <div className="img">
          <img src="images/about-img.jpg" alt="" className="" />
        </div>
      </div>
      <div className="lg:w-45 md:w-1/2 sm:w-full text-center second">
        <div className="inner-column">
          <h1 className="text-3xl font-bold mb-4">
            Welcome To <span className="text-brown">Yamifood Restaurant</span>
          </h1>
          <h4 className="text-lg font-bold mb-2">Little Story</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed
            convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante
            sodales augue, eget lacinia lectus erat et sem.
          </p>
          <p className="mb-4">
            Sed semper orci sit amet porta placerat. Etiam quis finibus eros.
            Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla
            placerat elit in justo vestibulum, et maximus sem pulvinar.
          </p>
          <a
            href="#"
            className="inline-block px-9 py-4 text-lg font-semibold leading-none border-2 rounded text-brown hover:text-white border-brown bg-transparent hover:bg-brown transition duration-200"
          >
            Reservation
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;