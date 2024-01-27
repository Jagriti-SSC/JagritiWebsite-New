import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./EventPage.css";
import EventForm from "../../components/EventForm/EventForm";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const EventPage = () => {
  const formRef = useRef();
  const divRef = useRef();

  useLayoutEffect(() => {
    divRef.current.style.height = `${formRef.current.clientHeight + 100}px`;
  }, [formRef, divRef]);

  useEffect(() => {
    document.title = "Event Registration | Jagriti IIT (BHU)"
  }, [])


  return (
    <>

      <div ref={divRef} style={{ position: "relative" }}>
        <EventForm ref={formRef} />
        <div className="skewed-bg" />
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
