import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./EventPageTeam.css";
import EventFormTeam from "../../components/EventFormTeam/EventFormTeam";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useLocation } from 'react-router-dom';

const EventPageTeam = () => {
  const location = useLocation();
  const eventName = location.state;
  const formRef = useRef();
  const divRef = useRef();

  useLayoutEffect(() => {
    divRef.current.style.height = `${formRef.current.clientHeight + 100}px`;

    // divRef.current.style.height = "700px";
  }, [formRef, divRef]);

  useEffect(() => {
    document.title = "Event Registration | Jagriti IIT (BHU)"
  }, [])
  

  return (
    <>
      
      <div ref={divRef} style={{ position: "relative" }}>
      <EventFormTeam ref={formRef} state= {eventName} />
      <div className="skewed-bg" />
    </div>
    <Footer />
    </>
  );
};

export default EventPageTeam;
