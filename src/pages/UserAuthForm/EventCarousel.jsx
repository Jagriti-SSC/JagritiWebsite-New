import React, { useEffect, useState } from "react";
import EventsProfile from "../../components/Events/EventsProfile";
import "./Profile.css";

const EventCarousel = ({ events }) => {
  const [eventData, setEventData] = useState([]);
  const scrollNavbar = (direction) => {
    const navbar = document.getElementById("scroll");
    const step = 200;
    if (direction === "left") {
      navbar.scrollLeft -= step;
    } else {
      navbar.scrollLeft += step;
    }
  };
  const fetchUserData = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      let preEvent = await Promise.all(
        events.preEvents.map(async (id) => {
          let response = await fetch(`${url}/admin/getPreEventByID`, {
            method: "post",
            body: JSON.stringify({ _id: id.eventName }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const data = await response.json();
            data.status = id.status;
            return data;
          }
        })
      );
      let guestTalks = await Promise.all(
        events.guestTalks.map(async (id) => {
          let response = await fetch(`${url}/admin/getGuestTalkByID`, {
            method: "post",
            body: JSON.stringify({ _id: id.eventName }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const data = await response.json();
            data.status = id.status;
            return data;
          }
        })
      );
      let event = await Promise.all(
        events.events.map(async (id) => {
          let response = await fetch(`${url}/admin/getEventByID`, {
            method: "post",
            body: JSON.stringify({ _id: id.eventName }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const data = await response.json();
            data.status = id.status;
            return data;
          }
        })
      );
      event.push(...guestTalks);
      event.push(...preEvent);
      setEventData(event);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchUserData().then(() => {
      // console.log(eventData);
    });
  }, [events]);

  return (
    <div className="relative ">
      <div
        className="smd:flex-row justify-evenly items-start smd:items-center mx-auto"
        style={{ display: "flex" }}
      >
        <button
          onClick={() => scrollNavbar("left")}
          className="text-[#1A589B] text-5xl hidden smd:inline-block"
        >
          <i class="fi fi-sr-angle-circle-left"></i>
        </button>
        <div
          id="scroll"
          class="flex overflow-x-auto hide-scrollbar justify-between m-4 items-center mb-4 space-x-10"
        >
          {eventData.map((data, index) => (
            <div className=" mb-4" key={data.id}>
              <EventsProfile data={data} index={index}></EventsProfile>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollNavbar("right")}
          className="text-[#1A589B] text-5xl hidden smd:inline-block"
        >
          <i class="fi fi-sr-angle-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
