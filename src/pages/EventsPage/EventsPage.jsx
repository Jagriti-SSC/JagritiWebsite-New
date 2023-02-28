import React, { useEffect, useState } from "react";
import "./EventsPage.css"
import { useFirebase } from "../../context/Firebase";

const EventsPage = () => {
  const firebase = useFirebase();
  const [eventData, seteventData] = useState([]);

  const fetchEventData = async () => {
    const data = await firebase.getAllDocuments("events");
    seteventData([...data]);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div>
      Events
      {eventData.map((data) => (
        <h1>{data.eventName}</h1>
      ))}
    </div>
  );
};

export default EventsPage;
