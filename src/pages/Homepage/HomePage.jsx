import React from "react";
import "./HomePage.css";
import Sponsor from "../../components/Sponsor/Sponsor";
import jagriti from "../../assets/Jagriti_white.png";
import { useEffect, useState } from "react";
import Clock from "../../components/Clock/Clock";
import Button from "../../components/UI/button/Button";
import desktop from "../../assets/desktop.mp4";


const HomePage = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("April 7,2023").getTime();

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
  });

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
            <Button outline text="Guest talk" buttonColor="white" showArrow />
          </div>
        </div>
      </div>

      <Sponsor></Sponsor>
    </>
  );
};

export default HomePage;
