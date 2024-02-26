import React, { useEffect, useState } from "react";
import Head from "./Head";
import axios from "axios";

const SpecialMenu = () => {
  const [activeButton, setActiveButton] = useState("All");
  const [slides, setSlides] = useState([]);
  const [Load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(true);
    axios
      .get("js/data.json")
      .then((res) => {
        setSlides(res.data.SpecialMenus);
      })
      .finally(() => setLoad(false));
  }, []);
  if (Load) return null;
  const handleClick = (filter) => {
    setActiveButton(filter);
  };
  const filteredSlides =
    activeButton === "All"
      ? slides
      : slides.filter((slide) => slide.category === activeButton);
  return (
    <div className="menu-box">
      <div className="containeer mx-auto">
        <Head
          head="Special Menu"
          par="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="flex flex-wrap maginn">
          <div className="w-full">
            <div className="text-center">
              <div className="btn-group filter-button-group">
                <button
                  className={`btn btn-primary ${
                    activeButton === "All" ? "active" : ""
                  } mr-2`}
                  onClick={() => handleClick("All")}
                >
                  All
                </button>
                <button
                  className={`btn btn-primary ${
                    activeButton === ".drinks" ? "active" : ""
                  } mr-2`}
                  onClick={() => handleClick(".drinks")}
                >
                  Drinks
                </button>
                <button
                  className={`btn btn-primary ${
                    activeButton === ".lunch" ? "active" : ""
                  } mr-2`}
                  onClick={() => handleClick(".lunch")}
                >
                  Lunch
                </button>
                <button
                  className={`btn btn-primary ${
                    activeButton === ".dinner" ? "active" : ""
                  }`}
                  onClick={() => handleClick(".dinner")}
                >
                  Dinner
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
          {filteredSlides.map((val) => (
            <div
              className="bg-white  overflow-hidden shadow-md gallery-single fix"
              key={val.id}
            >
              <img
                src={val.image}
                className="w-full  object-cover"
                alt="Image"
              />
              <div className="p-4 why-text">
                <h4 className="font-semibold">{val.name}</h4>
                <p className="text-gray-600">{val.parg}</p>
                <h5 className="mt-2 text-lg font-semibold">{val.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
