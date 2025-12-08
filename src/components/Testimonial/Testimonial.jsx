import "./Testimonial.css";
import React, { useState, useLayoutEffect, useCallback, useMemo } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import Anupam_Bansal from "../../assets/testimonials/dp1.png";
import Chhavi_Khandelwal from "../../assets/testimonials/Chhavi_Khandelwal.jpg";
import Deboshree_Bhattacharya from "../../assets/testimonials/Deboshree_Bhattacharya.jpg";
import Dr_Vaibhav_Mahatme from "../../assets/testimonials/Dr._Vaibhav_Mahatme.jpg";
import Itishree_Behera from "../../assets/testimonials/Itishree_Behera.jpg";
import Jaspreet_Kaur from "../../assets/testimonials/Jaspreet_Kaur.jpg";
import Mr_Amrut_Bang from "../../assets/testimonials/Mr._Amrut_Bang.jpg";
import Mr_Bezwada_Wilson from "../../assets/testimonials/Mr._Bezwada_Wilson.jpg";
import DP_Pandey from "../../assets/testimonials/dp_pandey.jpg";
import Tanu_Jain from "../../assets/testimonials/tanu_jain.jpg";
import Ashok_Kumar from "../../assets/testimonials/Ashok_Kumar_IPS.jpg";
import Neha_Agrawal from "../../assets/testimonials/neha.jpg";
// import Chhavi_Khandelwal from "../../assets/testimonials/dp3.webp";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Testimonial() {
  // swiper
  const [swiperRef, setSwiperRef] = useState(null);
  const [expanded, setExpanded] = useState({});

  // previous and next buttons
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
  const [width] = useWindowSize();

  // consolidated testimonial data (name, role, quote, image)
  const testimonials = useMemo(
    () => [
      {
        name: "D. P. Pandey",
        role: "Lieutenant General, Indian Army (Retd.)",
        quote:
          "Failure teaches you more than success ever can.",
        image: DP_Pandey,
      },
      {
        name: "Tanu Jain",
        role: "Ex-Civil Servant and Founder, Tathastu",
        quote:
          "Find your purpose, not just your profit.",
        image: Tanu_Jain,
      },
      {
        name: "Ashok Kumar",
        role: "Former DGP, Uttarakhand",
        quote:
          "The greatest privilege of power is the opportunity to serve, not to rule.",
        image: Ashok_Kumar,
      },
      {
        name: "Neha Agrawal",
        role: "Founder, Mathematically Inclined",
        quote:
          "Let the magic begin.",
        image: Neha_Agrawal,
      },
      {
        name: "Vaibhav Mahatme",
        role: "Chief Operating Officer, Forest for Farmers",
        quote:
          "Protect and increase India's Biodiversity forest cover in close partnership with rural communities.",
        image: Dr_Vaibhav_Mahatme,
      },
      {
        name: "Chhavi Khandelwal",
        role: "Co-Founder, Saturday Art Class",
        quote:
          "We focus on emotional learning, life skill development, and character strengthening among children of government and low-income-aided schools.",
        image: Chhavi_Khandelwal,
      },
      {
        name: "Jaspreet Kaur",
        role: "Co-Founder and Head of Forest for Farmers",
        quote:
          "Protect and increase India's Biodiversity forest cover in close partnership with rural communities.",
        image: Jaspreet_Kaur,
      },
      {
        name: "Deboshree Bhattacharya",
        role: "Chief Administrative Officer, UPAY",
        quote:
          "If the students can't reach school, let the school get them. UPAY envisions removing the disparities in education and strives to make education for all through Footpathshala and Reach and Teach.",
        image: Deboshree_Bhattacharya,
      },
      {
        name: "Itishree Behera",
        role: "Program Manager, ThinkZone",
        quote:
          "Empowering community educators and parents to improve educational outcomes of children by using an activity-based methodology.",
        image: Itishree_Behera,
      },
      {
        name: "Anupam Bansal",
        role: "Founder, Kashi Utkarsh",
        quote:
          "Being invited to speak in Jagriti '21 was one of the most amazing experiences I had last year.",
        image: Anupam_Bansal,
      },
      {
        name: "Amrut Bang",
        role: "Program Director, NIRMAN Gadchiroli",
        quote:
          "Identify, nurture, and organize young changemakers to solve various societal challenges.",
        image: Mr_Amrut_Bang,
      },
      {
        name: "Bezwada Wilson",
        role: "National convenor, Safai Karamchari Andolan",
        quote: "Aims to eradicate manual scavenging from India completely.",
        image: Mr_Bezwada_Wilson,
      },
    ],
    []
  );

  // removed truncation: show full quote as provided
  const toggleExpand = useCallback((idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }, []);
  // removed expand/collapse behavior

  const isAnyExpanded = Object.values(expanded || {}).some(Boolean);

  return (
    <div className={`testimonial ${isAnyExpanded ? "expanded" : ""}`}>
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
        <button
          className="nav-btn prev"
          aria-label="Previous testimonial"
          onClick={handlePrevious}
        />

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={width < 740 ? 1 : width < 1200 ? 2 : 3}
          spaceBetween={30}
          loop
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={() => setExpanded({})}
          // pagination disabled to hide dotted points
          pagination={false}
        >
          {testimonials.map(({ name, role, quote, image }, idx) => {
            const isLong = quote.length > 180;
            const isExpanded = !!expanded[idx];
            return (
              <SwiperSlide key={idx}>
                <article className={`testimonial-card ${isExpanded ? "expanded" : ""}`} aria-label={`Testimonial by ${name}`}>
                  <div className="card-header">
                    <div className="avatar-ring">
                      <img src={image} alt={`${name} portrait`} loading="lazy" />
                    </div>
                    <div className="person-meta">
                      <h3 className="person-name">{name}</h3>
                      <p className="person-role">{role}</p>
                    </div>
                  </div>
                  <div className="quote-wrap">
                    <span className="quote-mark" aria-hidden="true">“</span>
                    <p className={`quote-text ${!isExpanded && isLong ? "clamped" : ""}`}>{quote}</p>
                    <span className="quote-mark" aria-hidden="true">”</span>
                  </div>
                  {isLong && !isExpanded && (
                    <button
                      type="button"
                      className="read-more-btn"
                      aria-expanded={isExpanded}
                      onClick={(e) => {
                        e.stopPropagation();
                        try { swiperRef?.autoplay?.stop(); } catch {}
                        toggleExpand(idx);
                      }}
                    >
                      Read more
                    </button>
                  )}
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className="nav-btn next"
          aria-label="Next testimonial"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default Testimonial;
