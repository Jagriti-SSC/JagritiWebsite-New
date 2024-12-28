import React, { useEffect, useState } from "react";
import "./EventsPage.css"
import { useFirebase } from "../../context/Firebase";
import Events from "../../components/Events/Events";
import {motion} from "framer-motion";
import Button from "../../components/UI/button/Button";
import useMediaQuery from "../../hooks/useMediaQuery"
import Preloader from "../../components/preloader/Preloader";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const EventsPage = () => {
  const firebase = useFirebase();
  // const [eventData, seteventData] = useState([]);
  const [eventType,setEventType] = useState("events")
  const isAboveLargeScreen = useMediaQuery("(min-width:1060px)")
  const [loading, setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },2000)
    document.title = "Our Events | Jagriti IIT (BHU)"
  },[]);

  console.log(isAboveLargeScreen);
  console.log("Current eventType:", eventType); // Add this line to log eventType

  const fetchEventData = (name) => {
    const Data =  firebase.getAllDocuments(name);
    
  };

  useEffect(() => {
    Promise.all([fetchEventData("events"),fetchEventData("pre-event"),fetchEventData("guest-talk")]);
    
    
  }, []);




  return (
   <div className="bg">
      {loading ? <Preloader loading={loading}></Preloader> : <>

        {isAboveLargeScreen ?
          (<><motion.div className=" flex justify-around md:w-[70%] mx-auto md:flex-row flex-col items-center md:gap-0 gap-3">
            <div className="mt-[44px]">
              <Button text="Pre-Events" outline={eventType !== "preEvents"} onPress={() => setEventType("preEvents")}></Button>
            </div>
            <div className="mt-[44px]">
              <Button text="Workshops and Guest Talks" outline={eventType !== "guestTalks"} onPress={() => setEventType("guestTalks")}></Button>
            </div>
            <div className="mt-[44px]">
              <Button text="Main Events" outline={eventType !== "events"} onPress={() => setEventType("events")}></Button>
            </div>




          </motion.div>


            <div className="md:grid md:grid-cols-2 z-50 md:mx-[195px] md:gap-y-[60px] mt-9 md:grid-flow-row flex flex-col gap-12 mb-9 ">

              {(eventType === "preEvents") ?

                (firebase.PreEventData.map((data, index) => (
                  <div>
                    <Events eventType={eventType} data={data} key={data.id} index={index}></Events>
                  </div>

                ))) : ((eventType === "events") ? (firebase.eventData.map((data, index) => (
                  <div>
                    <Events eventType={eventType} data={data} key={data.id} index={index}></Events>
                  </div>

                ))) : (firebase.GuestTalkData.map((data, index) => (
                  <div>
                    <Events eventType={eventType} data={data} key={data.id} index={index}></Events>
                  </div>

                ))))}








            </div></>) :
          (<>
            <motion.div className=" flex justify-center items-center mb-[32px] mx-8 ">

              <motion.div className="z-0 bg-blue h-[1.5px] basis-5/12">

              </motion.div>
              <motion.h1 className=" relative top-[50%] z-100  font-semibold text-blue sm:text-3xl ss:text-2xl text-xl min-w-max p-6 ">Pre-Events</motion.h1>
              <motion.div className="z-0 bg-blue h-[1.5px]  basis-5/12">

              </motion.div>
            </motion.div>
            {firebase.PreEventData.map((data) => (
              <div className=" mb-[53px]">
                <Events eventType={"preEvents"} data={data} key={data.id}></Events>
              </div>

            ))}
            <motion.div className=" flex justify-center items-center mb-[32px] mt-8 mx-8 ">

              <motion.div className="z-0 bg-blue h-[1.5px] basis-5/12">

              </motion.div>
              <motion.h1 className=" relative top-[50%] z-100  font-semibold text-blue sm:text-3xl ss:text-2xl text-xl min-w-max p-6 ">Main Events</motion.h1>
              <motion.div className="z-0 bg-blue h-[1.5px]  basis-5/12">

              </motion.div>
            </motion.div>
            {firebase.eventData.map((data) => (
              <div className=" mb-[53px]">
                <Events eventType={"events"} data={data} key={data.id}></Events>
              </div>

            ))}

            <motion.div className=" flex justify-center items-center mb-[32px] mt-8 mx-8 ">

              <motion.div className="z-0 bg-blue h-[1.5px] basis-5/12">

              </motion.div>
              <motion.h1 className=" relative top-[50%] z-100  font-semibold text-blue sm:text-3xl ss:text-2xl text-xl min-w-max p-6 ">Workshops and Guest Talks</motion.h1>
              <motion.div className="z-0 bg-blue h-[1.5px]  basis-5/12">

              </motion.div>
            </motion.div>
            {firebase.GuestTalkData.map((data) => (
              <div className=" mb-[53px]">
                <Events eventType={"guestTalks"} data={data} key={data.id}></Events>
              </div>

            ))}

          </>)}

      </>}
    
    <Footer />
    </div>
  );
};

export default EventsPage;
 