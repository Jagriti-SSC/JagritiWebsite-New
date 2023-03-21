import "./Testimonial.css";
import React, { useState, useLayoutEffect, useCallback } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import Anupam_Bansal from "../../assets/testimonials/dp1.webp";
import Chhavi_Khandelwal from "../../assets/testimonials/Chhavi_Khandelwal.webp";
import Deboshree_Bhattacharya from "../../assets/testimonials/Deboshree_Bhattacharya.webp";
import Dr_Vaibhav_Mahatme from "../../assets/testimonials/Dr._Vaibhav_Mahatme.webp";
import Itishree_Behera from "../../assets/testimonials/Itishree_Behera.webp";
import Jaspreet_Kaur from "../../assets/testimonials/Jaspreet_Kaur.webp";
import Mithila_Malhotra from "../../assets/testimonials/Mithila_Malhotra.webp";
import Mr_Amrut_Bang from "../../assets/testimonials/Mr._Amrut_Bang.webp";
import Mr_Bezwada_Wilson from "../../assets/testimonials/Mr._Bezwada_Wilson.webp";
// import Chhavi_Khandelwal from "../../assets/testimonials/dp3.webp";

SwiperCore.use([Virtual, Navigation, Pagination]);

function Testimonial() {
  //swiper
  const [swiperRef, setSwiperRef] = useState(null);
  // const [slides, setSlides] = useState(
  //   Array.from({ length: 6 }).map((_, index) => `Slide ${index + 1}`)
  // );

  //previous and next buttons
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  // function for window width and height
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [width, height] = useWindowSize();

  return (
    <div className="testimonial">
      <div className="upper-content">
        <h1 className="testimonial-heading">What is Jagriti?</h1>
        <p className="testimonial-para">
          Jagriti is an enlightening and edifying annual social service fest
          concentrated primarily on raising awareness through an assortment of
          educative and profound thinking events. We conduct an array of events
          circulating the theme of social issues. Jagriti is an elixir to
          self-contentment wherein we help the underprivileged, borrowing time
          and drawing attention from our surplus lives.
        </p>
      </div>

      <div className="swiper-main-content">
        <div className="prev-btn">
          <button onClick={handlePrevious}></button>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={width < 740 ? 1 : width < 1500 ? 2 : 3}
          spaceBetween={30}
          virtual
        >
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Dr_Vaibhav_Mahatme} alt="#"></img>
            </div>
            <div className="content">
              <h1>Vaibhav Mahatme</h1>
              <h4>Chief Operating Officer, Forest for Farmers</h4>
              <p>
                Protect and increase India&apos;s Biodiversity forest cover in
                close partnership with rural communities.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Chhavi_Khandelwal} alt="#"></img>
            </div>
            <div className="content">
              <h1>Chhavi Khandelwal</h1>
              <h4>Co-Founder, Saturday Art Class</h4>
              <p>
                We focus on emotional learning, life skill development, and
                character strengthening among children of government and
                low-income-aided schools.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Jaspreet_Kaur} alt="#"></img>
            </div>
            <div className="content">
              <h1>Jaspreet Kaur</h1>
              <h4>Co-Founder and Head of Forest for Farmers</h4>
              <p>
                Protect and increase India&apos;s Biodiversity forest cover in
                close partnership with rural communities.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Deboshree_Bhattacharya} alt="#"></img>
            </div>
            <div className="content">
              <h1>Deboshree Bhattacharya</h1>
              <h4>Chief Administrative Officer, UPAY</h4>
              <p>
                If the students can&apos;t reach school, let the school get them
                UPAY envisions, removing the disparities in education. UPAY
                strives to make education for all through Footpathshala and
                Reach and Teach.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Mithila_Malhotra} alt="#"></img>
            </div>
            <div className="content">
              <h1>Mithila Malhotra</h1>
              <h4>Chief Operating Officer, UPAY</h4>
              <p>
                If the students can&apos;t reach school, let the school get them
                UPAY envisions, removing the disparities in education. UPAY
                strives to make education for all through Footpathshala and
                Reach and Teach.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Itishree_Behera} alt="#"></img>
            </div>
            <div className="content">
              <h1>Itishree Behera</h1>
              <h4>Program Manager, ThinkZone</h4>
              <p>
                Empowering community educators and parents improve the
                educational outcomes of children by using an activity-based
                methodology.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Anupam_Bansal} alt="#"></img>
            </div>
            <div className="content">
              <h1>Anupam Bansal</h1>
              <h4>Founder, Kashi Utkarsh</h4>
              <p>
                Being invited to speak in Jagriti '21 was one of the most
                amazing experiences I had last year
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Mr_Amrut_Bang} alt="#"></img>
            </div>
            <div className="content">
              <h1>Amrut Bang</h1>
              <h4>Program Director, NIRMAN Gadchiroli</h4>
              <p>
                Identify, nurture, and organize the young changemakers to solve
                various societal challenges.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={Mr_Bezwada_Wilson} alt="#"></img>
            </div>
            <div className="content">
              <h1>Bezwada Wilson</h1>
              <h4>National convenor, Safai Karamchari Andolan</h4>
              <p>Aims to eradicate manual scavenging from India completely.</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="next-btn">
          <button onClick={handleNext}></button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
