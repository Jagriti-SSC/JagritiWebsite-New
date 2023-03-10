import React, { useEffect, useState } from "react";
import "./EventsPage.css"
import { useFirebase } from "../../context/Firebase";
import Events from "../../components/Events/Events";
import {motion} from "framer-motion";
import Button from "../../components/UI/button/Button";


const EventsPage = () => {
  const firebase = useFirebase();
  // const [eventData, seteventData] = useState([]);
  const [eventType,setEventType] = useState("Pre-Events")
  const buttonStyle = {
    height:"43px",
    

  }


  const fetchEventData = (name) => {
    const Data =  firebase.getAllDocuments(name);
    
  };

  useEffect(() => {
    Promise.all([fetchEventData("events"),fetchEventData("pre-event"),fetchEventData("guest-talk")]);
    
    
  }, []);




  return (
    
  <>

    <motion.div className=" flex justify-around md:w-[70%] mx-auto mt-[44px]">
      <div>
      <Button text="Pre-Events" outline={eventType!=="Pre-Events"} onPress={()=>setEventType("Pre-Events")} customStyle={buttonStyle}></Button>
      </div>
     <div>
     <Button text="Events" outline={eventType!=="Events"} onPress={()=>setEventType("Events")} customStyle={buttonStyle}></Button>
     </div>
     <div>
     <Button text="Guest talks" outline={eventType!=="Guest talks"} onPress={()=>setEventType("Guest talks")} customStyle={buttonStyle}></Button>
     </div>
      
    
    
    
    </motion.div>


 <div  className="md:grid md:grid-cols-2 z-50 md:mx-[195px] md:gap-y-[60px] mt-9 md:grid-flow-row flex flex-col gap-12 mb-9 ">
      
      {
        
        (eventType === "Pre-Events")?
        
        (firebase.PreEventData.map((data) => (
        <div >
       <Events data={data} key={data.id}></Events>
      </div>

      ))) : ((eventType === "Events")? (firebase.eventData.map((data) => (
        <div >
       <Events data={data} key={data.id}></Events>
      </div>

      ))): (firebase.GuestTalkData.map((data) => (
        <div >
       <Events data={data} key={data.id}></Events>
      </div>

      ))))
      
      
      
      
      }








    </div>
  </>
   
  
    
  );
};

export default EventsPage;
