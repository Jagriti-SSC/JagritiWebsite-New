import React from "react";
import { useEffect, useState } from "react";
import Testimonial from "../../components/Testimonial/Testimonial";
import "./HomePage.css";
import Sponsor from "../../components/Sponsor/Sponsor";
import Throwback from "../../components/Throwback/Throwback";
import jagriti from "../../assets/Jagriti_white.webp";
import Clock from "../../components/Clock/Clock";
import Button from "../../components/UI/button/Button";
import desktop from "../../assets/desktop.webm";
import Timeline from "../../components/Timeline/Timeline";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("March 1,2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // stop timer

        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    document.title = "Jagriti - IIT (BHU)";
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="timing">
          <img className="jagriti-img" src={jagriti} alt="hero" />
          <video className="videoPlay" autoPlay loop muted>
            <source src={desktop} type="video/mp4" />
          </video>
          <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
          <div className="explore-btn">
            <Button text="Explore Events" showArrow path="/events" />
            <Button
              outline
              text="Guest talk"
              buttonColor="white"
              path="/events"
              showArrow
            />
          </div>
        </div>
      </div>

      <Testimonial></Testimonial>
      <Timeline></Timeline>

      <Throwback></Throwback>

      <Sponsor></Sponsor>
      <Footer />
    </>
  );
};

export default HomePage;
