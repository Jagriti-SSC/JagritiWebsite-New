import "./Testimonial.css";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import group1 from "../../assets/testimonials/dp1.webp";
import group2 from "../../assets/testimonials/dp2.webp";
import group3 from "../../assets/testimonials/dp3.webp";

SwiperCore.use([Virtual, Navigation, Pagination]);

function Testimonial() {
  //swiper
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 6 }).map((_, index) => `Slide ${index + 1}`)
  );

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
              <img src={group1} alt="#"></img>
            </div>
            <div className="content">
              <h1>Itishree Behera</h1>
              <h4>Program Manager, ThinkZone</h4>
              <p>
                Access to education is an issue we all speak about, and the
                digital divide during the pandemic shows us the truth.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={group2} alt="#"></img>
            </div>
            <div className="content">
              <h1>Chhavi Khandelwal</h1>
              <h4>Co-Founder, Saturday Art Class</h4>
              <p>
                I want to thank the team for inviting me as a guest for Aarohan
                2021. We discussed about how art could change the character and
                attitude of a child.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={group3} alt="#"></img>
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
              <img src={group1} alt="#"></img>
            </div>
            <div className="content">
              <h1>Itishree Behera</h1>
              <h4>Program Manager, ThinkZone</h4>
              <p>
                Access to education is an issue we all speak about, and the
                digital divide during the pandemic shows us the truth.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={group2} alt="#"></img>
            </div>
            <div className="content">
              <h1>Chhavi Khandelwal</h1>
              <h4>Co-Founder, Saturday Art Class</h4>
              <p>
                I want to thank the team for inviting me as a guest for Aarohan
                2021. We discussed about how art could change the character and
                attitude of a child.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={group3} alt="#"></img>
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
        </Swiper>
        <div className="next-btn">
          <button onClick={handleNext}></button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
