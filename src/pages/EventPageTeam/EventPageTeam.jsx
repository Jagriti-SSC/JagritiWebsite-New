import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./EventPageTeam.css";
import EventFormTeam from "../../components/EventFormTeam/EventFormTeam";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useLocation } from 'react-router-dom';

const EventPageTeam = () => {
  const location = useLocation();
  const [eventName, setEventName] = useState(null);

  const formRef = useRef();
  const divRef = useRef();

  useEffect(() => {
    try {
      console.log("🔥 Full location object:", location);

      // Safely read state
      if (location && location.state) {
        setEventName(location.state);
      } else {
        console.warn("⚠️ No state passed, eventName will be null");
        setEventName(null);
      }

    } catch (error) {
      console.error("❌ Error reading location.state:", error);
      setEventName(null);
    }
  }, [location]);

  useLayoutEffect(() => {
    try {
      console.log("⏳ formRef.current:", formRef.current);
      console.log("⏳ divRef.current:", divRef.current);
      
      // Example safety check
      if (formRef.current && divRef.current) {
        // You can uncomment logic if needed
      }
    } catch (error) {
      console.error("❌ Error during layout effect:", error);
    }
  }, []);

  useEffect(() => {
    try {
      document.title = "Event Registration | Jagriti IIT (BHU)";
    } catch (error) {
      console.error("❌ Failed setting title:", error);
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="backContainer" style={{ position: "relative", minHeight: "90vh" }}>
        {/* Render fallback if no state is passed */}
        {eventName ? (
          <EventFormTeam ref={formRef} state={eventName} />
        ) : (
          <div style={{ padding: "40px", textAlign: "center" }}>
            <h2>No Event Selected</h2>
            <p>Please go back and select an event first.</p>
          </div>
        )}

        <div className="skewed-bg" />
      </div>

      <Footer />
    </>
  );
};

export default EventPageTeam;
