import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style1.css";
import { EffectFade,Pagination, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";

const SlidersHome = () => {
  const [slides, setSlides] = useState([]);
 const [Load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(true);
    axios.get("js/data.json").then((res) => {
      setSlides(res.data.slides);
    }).finally(()=>setLoad(false)); 

  }, []);
  if(Load)
    return null;
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="lg:h-12 h-8 w-auto" src={item.image} alt="..." />
            <div className="overlay"></div>
            <div class="home columns-7xl">
              <h1 class="m-1 head z-10">
                <strong>
                  Welcome To <br /> Yamifood Restaurant
                </strong>
              </h1>
              <p class="par">
                See how your users experience your website in realtime or view{" "}
                <br />
                trends to see any changes in performance over time.
              </p>
              <p>
                <button className="bg-transparent hover:bg-brown transition duration-300 text-white font-semibold hover:text-white py-2.5 px-9 border-2 border-brown hover:border-transparent rounded">
                  Reservation
                </button>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SlidersHome;

