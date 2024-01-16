import React, { useEffect, useState } from "react";
import EventsProfile from "../../components/Events/EventsProfile";
import "./Profile.css";

const EventCarousel = ({ eventData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventData.length - 2 : prev - 2));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === eventData.length - 2 ? 0 : prev + 2));
  };

  return (
    <div className="relative">
      <div className="absolute flex justify-center mb-4 gap-[730px] mt-60 but">
        <button
          onClick={prevSlide}
          className="text-[#1A589B] text-5xl ml-7 prev"
        >
          <i class="fi fi-sr-angle-circle-left"></i>
        </button>
        <button onClick={nextSlide} className="text-[#1A589B] text-5xl next">
          <i class="fi fi-sr-angle-circle-right"></i>
        </button>
      </div>
      <div className="absolute left-36 caro">
        <div className="flex flex-warp gap-3 justify-center cards">
          {eventData
            .slice(currentSlide, currentSlide + 2)
            .map((data, index) => (
              <div className="w-full md:w-1/2 lg:w-1/2 mb-4" key={data.id}>
                <EventsProfile
                  data={data}
                  index={currentSlide + index}
                ></EventsProfile>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
