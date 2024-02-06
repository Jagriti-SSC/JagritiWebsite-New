import React, { useEffect, useState } from "react";
import EventsProfile from "../../components/Events/EventsProfile";
import "./Profile.css";

const EventCarousel = ({  events }) => {
  const [eventData, setEventData] = useState([]);
  const [status,setStatus]=useState([])
  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(events);
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventData.length - 2 : prev - 2));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === eventData.length - 2 ? 0 : prev + 2));
  };
  const fetchUserData = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      // console.log(events.guestTalks);
      const Pstate=[]
      let preEvent = await Promise.all(
        events.preEvents.map(async (id) => {
          let response = await fetch(`${url}/admin/getPreEventByID`, {
            method: "post",
            body: JSON.stringify({ _id: id.eventName }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const data = await response.json();
            Pstate.push(id.status)
            return data;
          }
        })
      );
      const Gstate=[]
      let guestTalks = await Promise.all(
        events.guestTalks.map(async (id) => {
          let response = await fetch(`${url}/admin/getGuestTalkByID`, {
            method: "post",
            body: JSON.stringify({ _id: id.eventName }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const data = await response.json();
            Gstate.push(id.status)
            return data;
          }
        })
      );
      const Estate=[]
      let event = await Promise.all(
        events.events.map(async (id) => {
          let response = await fetch(`${url}/admin/getEventByID`, {
            method: "post",
            body: JSON.stringify({ _id: id.eventName }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const data = await response.json();
            Estate.push(id.status)
            return data;
          }
        })
      );
      event.push(...guestTalks)
      event.push(...preEvent)
      Estate.push(...Gstate)
      Estate.push(...Pstate)
      setEventData(event)
      setStatus(Estate)
      // console.log(eventData);
      // console.log(status);
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
    <div className="relative">
      <div className="flex justify-between md:justify-evenly items-center mb-4 ">
        <button
          onClick={prevSlide}
          className="text-[#1A589B] text-5xl md:mr-5"
        >
          <i class="fi fi-sr-angle-circle-left"></i>
        </button>
        {eventData
          .slice(currentSlide, currentSlide + 1)
          .map((data, index) => (
            <div className=" mb-4" key={data.id}>
              <EventsProfile
                data={data}
                status={status[index]}
                index={currentSlide + index}
              ></EventsProfile>
            </div>
          ))}
        <button onClick={nextSlide} className="text-[#1A589B] text-5xl md:ml-5">
          <i class="fi fi-sr-angle-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
