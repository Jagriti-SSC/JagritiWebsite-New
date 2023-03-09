import React, { useEffect, useState } from "react";
import "./EventsPage.css"
import { useFirebase } from "../../context/Firebase";
import Events from "../../components/Events/Events";
import {motion} from "framer-motion";
import Button from "../../components/UI/button/Button";


const EventsPage = () => {
  const firebase = useFirebase();
  // const [eventData, seteventData] = useState([]);
  const [eventType,setEventType] = useState("events")
  const buttonStyle = {
    height:"43px",
    

  }


  const fetchEventData =  () => {
    const Data =  firebase.getAllDocuments(eventType);
    // seteventData([...data]);
  };

  useEffect(() => {
    fetchEventData();
    
  }, [eventType]);

console.log(firebase.eventData)


  return (
    
  <>

    <motion.div className=" flex justify-around md:w-[70%] mx-auto mt-[44px]">
      <div>
      <Button text="Pre-Events" outline={eventType!=="pre-event"} onPress={()=>setEventType("pre-event")} customStyle={buttonStyle}></Button>
      </div>
     <div>
     <Button text="Events" outline={eventType!=="events"} onPress={()=>setEventType("events")} customStyle={buttonStyle}></Button>
     </div>
     <div>
     <Button text="Guest talks" outline={eventType!=="guest-talk"} onPress={()=>setEventType("guest-talk")} customStyle={buttonStyle}></Button>
     </div>
      
    
    
    
    </motion.div>


 <div  className="md:grid md:grid-cols-2 z-50 md:mx-[195px] md:gap-y-[60px] mt-9 md:grid-flow-row flex flex-col gap-12 ">
      
      {
        
        
        firebase.eventData.map((data) => (
        <div >
       <Events data={data} key={data.id}></Events>
      </div>

      ))}


    </div>
  </>
   
  
    
  );
};

export default EventsPage;
