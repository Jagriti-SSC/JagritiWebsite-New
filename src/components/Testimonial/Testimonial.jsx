import React from "react";
import "./Testimonial.css";
import Carousel from "../Carousel/Carousel";
import group1 from "../images/Group 33609.png";
import group2 from "../images/Group 33609 (1).png";
import group3 from "../images/Group 33614 (1).png";
import { useState } from "react";
import { useLayoutEffect } from "react";

function Testimonial() {

  //function for window width and height
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
    <div>
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
      <Carousel show={width>640?3:1}>
        <div className="wrapper">
          <div className="carousel">
            <div className="card" style={{ padding: 8 }}>
              <div className="inner-content">
                <img src={group1} alt="placeholder" />
                <h1 className="card-heading">Itishree Behera</h1>
                <h4 className="card-subheading">Program Manager, ThinkZone</h4>
                <p className="card-para">
                  Access to education is an issue we all speak about, and the
                  digital divide during the pandemic shows us the truth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="carousel">
            <div className="card" style={{ padding: 8 }}>
              <div className="inner-content">
                <img src={group2} alt="placeholder" />
                <h1 className="card-heading">Chhavi Khandelwal</h1>
                <h4 className="card-subheading">
                  Co-Founder, Saturday Art Class
                </h4>
                <p className="card-para">
                  I want to thank the team for inviting me as a guest for
                  Aarohan 2021. We discussed about how art could change the
                  character and attitude of a child.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="carousel">
            <div className="card" style={{ padding: 8 }}>
              <div className="inner-content">
                <img src={group3} alt="placeholder" />
                <h1 className="card-heading">Anupam Bansal</h1>
                <h4 className="card-subheading">Founder, Kashi Utkarsh</h4>
                <p className="card-para">
                  Being invited to speak in Jagriti '21 was one of the most
                  amazing experiences I had last year.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="carousel">
            <div className="card" style={{ padding: 8 }}>
              <div className="inner-content">
                <img src={group1} alt="placeholder" />
                <h1 className="card-heading">Itishree Behera</h1>
                <h4 className="card-subheading">Program Manager, ThinkZone</h4>
                <p className="card-para">
                  Access to education is an issue we all speak about, and the
                  digital divide during the pandemic shows us the truth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="carousel">
            <div className="card" style={{ padding: 8 }}>
              <div className="inner-content">
                <img src={group2} alt="placeholder" />
                <h1 className="card-heading">Chhavi Khandelwal</h1>
                <h4 className="card-subheading">
                  Co-Founder, Saturday Art Class
                </h4>
                <p className="card-para">
                  I want to thank the team for inviting me as a guest for
                  Aarohan 2021. We discussed about how art could change the
                  character and attitude of a child.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="carousel">
            <div className="card" style={{ padding: 8 }}>
              <div className="inner-content">
                <img src={group3} alt="placeholder" />
                <h1 className="card-heading">Anupam Bansal</h1>
                <h4 className="card-subheading">Founder, Kashi Utkarsh</h4>
                <p className="card-para">
                  Being invited to speak in Jagriti '21 was one of the most
                  amazing experiences I had last year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonial;
