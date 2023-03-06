import React from "react";
import { SwiperSlide } from "swiper/react";
import "../Testimonial/Testimonial.css";

function SwiperSlideComp({ heading, subheading, para, img }) {

  return (
      <SwiperSlide>
        <div className="swiper-content-img">
          <img src={img} alt="#"></img>
        </div>
        <div className="content">
          <h1>{heading}</h1>
          <h4>{subheading}</h4>
          <p>{para}</p>
        </div>
      </SwiperSlide>
  );
}

export default SwiperSlideComp;
