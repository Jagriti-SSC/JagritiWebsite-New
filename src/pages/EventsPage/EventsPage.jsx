import React, { useEffect, useState } from "react";
import "./EventsPage.css"
import { useFirebase } from "../../context/Firebase";
import Events from "../../components/Events/Events";
import {motion} from "framer-motion";
import Button from "../../components/UI/button/Button";
import useMediaQuery from "../../hooks/useMediaQuery"


const EventsPage = () => {
  const firebase = useFirebase();
  // const [eventData, seteventData] = useState([]);
  const [eventType,setEventType] = useState("events")
  const isAboveLargeScreen = useMediaQuery("(min-width:1060px)")
  console.log(isAboveLargeScreen);

  const fetchEventData = (name) => {
    const Data =  firebase.getAllDocuments(name);
    
  };

  useEffect(() => {
    Promise.all([fetchEventData("events"),fetchEventData("pre-event"),fetchEventData("guest-talk")]);
    
    
  }, []);




  return (
    
  <>

    {
      isAboveLargeScreen ? 
      (<><motion.div className=" flex justify-around md:w-[70%] mx-auto mt-[44px] md:flex-row flex-col items-center md:gap-0 gap-3">
      <div>
      <Button text="Pre-Events" outline={eventType!=="pre-event"} onPress={()=>setEventType("pre-event")} ></Button>
      </div>
     <div>
     <Button text="Events" outline={eventType!=="events"} onPress={()=>setEventType("events")} ></Button>
     </div>
     <div>
     <Button text="Guest talks" outline={eventType!=="guest-talk"} onPress={()=>setEventType("guest-talk")} ></Button>
     </div>
      
    
    
    
    </motion.div>


 <div  className="md:grid md:grid-cols-2 z-50 md:mx-[195px] md:gap-y-[60px] mt-9 md:grid-flow-row flex flex-col gap-12 mb-9 ">
      
      {
        
        (eventType === "pre-event")?
        
        (firebase.PreEventData.map((data) => (
        <div >
       <Events data={data} key={data.id}></Events>
      </div>

      ))) : ((eventType === "events")? (firebase.eventData.map((data) => (
        <div >
       <Events data={data} key={data.id}></Events>
      </div>

      ))): (firebase.GuestTalkData.map((data) => (
        <div >
       <Events data={data} key={data.id}></Events>
      </div>

      ))))
      
      
      
      
      }








    </div></>):
    (<>
      <motion.div className=" flex justify-center items-center mb-[32px] mt-8 mx-8 ">
        
       <motion.div className="z-0 bg-blue h-[1.5px] basis-5/12">
      
       </motion.div>
       <motion.h1 className=" relative top-[50%] z-100  font-semibold text-blue sm:text-3xl ss:text-2xl text-xl min-w-max p-6 ">Pre-Events</motion.h1>
       <motion.div className="z-0 bg-blue h-[1.5px]  basis-5/12">
      
      </motion.div>
      </motion.div>
      {
        firebase.PreEventData.map((data) => (
        <div className=" mb-[53px]">
       <Events data={data} key={data.id}></Events>
      </div>

      ))
      }
      <motion.div className=" flex justify-center items-center mb-[32px] mt-8 mx-8 ">
        
       <motion.div className="z-0 bg-blue h-[1.5px] basis-5/12">
      
       </motion.div>
       <motion.h1 className=" relative top-[50%] z-100  font-semibold text-blue sm:text-3xl ss:text-2xl text-xl min-w-max p-6 ">Events</motion.h1>
       <motion.div className="z-0 bg-blue h-[1.5px]  basis-5/12">
      
      </motion.div>
      </motion.div>
      {
        firebase.eventData.map((data) => (
        <div className=" mb-[53px]">
       <Events data={data} key={data.id}></Events>
      </div>

      ))
      }

      <motion.div className=" flex justify-center items-center mb-[32px] mt-8 mx-8 ">
        
        <motion.div className="z-0 bg-blue h-[1.5px] basis-5/12">
       
        </motion.div>
        <motion.h1 className=" relative top-[50%] z-100  font-semibold text-blue sm:text-3xl ss:text-2xl text-xl min-w-max p-6 ">Guest Talks</motion.h1>
        <motion.div className="z-0 bg-blue h-[1.5px]  basis-5/12">
       
       </motion.div>
       </motion.div>
      {
        firebase.GuestTalkData.map((data) => (
        <div className=" mb-[53px]">
       <Events data={data} key={data.id}></Events>
      </div>

      ))
      }

    </>)


    }

    
  </>
   
  
    
  );
};

export default EventsPage;
