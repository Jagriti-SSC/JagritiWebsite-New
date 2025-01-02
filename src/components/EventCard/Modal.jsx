import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../UI/button/Button";
import { CloseOutline } from "styled-icons/evaicons-outline";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../pages/UserAuthForm/FormContext";
import { auth } from "../../context/Firebase";

const Modal = ({ data, close, eventType }) => {
  console.log(eventType);
  const navigate = useNavigate();

  const [content, setContent] = useState("Overview");
  const { isFormFilled } = useFormContext();
  const [check, setCheck] = useState(false);
  const isAboveLargeScreen = useMediaQuery("(min-width:1060px)");
  const registration = data?.status;
  const eventname = data?.eventName || "Event Name";
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const isLoggedIn = auth.currentUser ? true : false;

  const [teamEvent, setTeamEvent] = useState();
  const [eventID, setEventID] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let [userId, setId] = useState("");
  
  const fetchData = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      let event = await fetch(`${url}/admin/${eventType}`);
      const datas = await event.json();

      const foundEvent = datas.result.find(
        (event) => event.eventName === data?.eventName
      );

      if (foundEvent) {
        console.log(foundEvent);
        setTeamEvent(foundEvent.teamEvent);
        setEventID(foundEvent._id);
      } else {
        console.log(`Event with name '${data?.eventName}' not found.`);
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  const checkUser = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      let user = await fetch(`${url}/auth/checkUser`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: auth.currentUser.email }),
      });
      if (user.ok) {
        setCheck(true);
        user = await user.json();
        setId(user._id);
      } else {
        setCheck(false);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await fetchData();
      await checkUser().then(() => setIsLoading(false));
      console.log(isLoggedIn);
    };
    fetch();
  }, []);

  const handelINdividualRegister = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const event = {
        email: auth.currentUser.email,
        eventType: eventType.slice(0, -1),
        eventName: eventID,
        status: "Pending",
      };
      let res = await fetch(`${url}/auth/addEvent`, {
        method: "post",
        body: JSON.stringify(event),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const form = {
          eventName: eventname,
          eventType: eventType.slice(0, -1),
          participant: {
            individuals: userId,
            teams: null,
            driveUrl: auth.currentUser.email,
            status: "Pending",
          },
        };
        const response = await fetch(`${url}/admin/registration`, {
          method: "post",
          body: JSON.stringify(form),
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          alert("registered");
          navigate("/events");
        }
      } else {
        const err = await res.json();
        alert(err.message);
      }
    } catch (error) {
      console.log("error in registration", error);
    }
  };

  return (
    <motion.div
      className="md:bg-event-grey flex gap-3 md:flex-row flex-col md:w-[890px] md:h-[402px] w-[70%] h-max font-popins m-0 p-0 rounded-tl-[25px] rounded-br-[25px] bg-event-grey my-auto"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div className="rounded-2xl md:bg-white z-40 flex flex-col items-center justify-evenly md:min-w-[300px] md:max-w-[300px] md:max-h-full p-1 rounded-tl-[25px]">
        <motion.div className="relative left-[45%] mr-1 md:hidden">
          <CloseOutline onClick={close} className=" " size="50px"></CloseOutline>
        </motion.div>

        <motion.h1 className="md:text-3xl xxs:text-2xl text-center text-lg text-blue font-bold md:mt-0">
          {eventname}
        </motion.h1>
        <motion.img
          src={data?.imageURL || ""}
          className="rounded-2xl md:w-[75%] md:h-[70%] md:mt-0 mt-4 w-[40%] sm:w-[30%] md:mb-0 mb-5"
          variants={imageVariants}
        ></motion.img>
      </motion.div>

      {isAboveLargeScreen ? (
        <motion.div
          className="flex flex-col md:items-start items-center md:mx-[41px] p-0 md:min-w-[480px] md:h-full"
          variants={imageVariants}
        >
          <motion.div className="flex md:text-2xl py-[15px] items-center justify-between w-[100%]">
            <a
              className="hover:underline"
              onClick={(e) => {
                e.preventDefault(); // Prevents scrolling to the top
                setContent("Overview");
              }}
            >
              Overview
            </a>
            <a
              className="hover:underline"
              onClick={(e) => {
                e.preventDefault(); // Prevents scrolling to the top
                setContent("Timeline");
              }}
            >
              Timeline
            </a>
            <a
              className="hover:underline"
              onClick={(e) => {
                e.preventDefault(); // Prevents scrolling to the top
                setContent("Contact");
              }}
            >
              Contact
            </a>
          </motion.div>

          <motion.div className="w-[100%] mb-[40px] min-h-[50%]">
            {content === "Overview" ? (
              <p
                className="md:text-lg sm:text-sm text-xs font-light from-event-text-grey"
                dangerouslySetInnerHTML={{
                  __html: data?.overview || "Overview content not available",
                }}
              ></p>
            ) : content === "Contact" ? (
              <motion.div className="text-blue md:text-lg">
                {data?.contacts?.length > 0 ? (
                  data.contacts.map((item, index) => (
                    <p key={index}>
                        {item.name} : {item.mobile}
                    </p>
                  ))
                ) : (
                  <p>Contact information not available</p>
                )}
              </motion.div>
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  __html: data?.timeline || "Timeline content not available",
                }}
              ></p>
            )}
          </motion.div>
          <motion.div className="flex space-between md:mb-[37px] mb-[20px] mt-auto mx-auto gap-2">
            {data?.link ? (
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <Button text={"Unstop Link"} />
              </a>
            ) : (
              registration && (
                <Link
                  onClick={() => {
                    if (!teamEvent && check && isLoggedIn && registration) {
                      handelINdividualRegister();
                    }
                  }}
                  to={
                    isLoggedIn
                      ? check
                        ? teamEvent
                          ? "/eventteam"
                          : "/eventind"
                        : "/userinfo"
                      : "/signin"
                  }                  
                  state={{ eventname, eventType, eventID }}
                >
                  <Button text={isLoggedIn ? "Register" : "Register"} disabled={isLoading} />
                </Link>
              )
            )}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div className="mx-6" variants={imageVariants}>
          <motion.h2 className="text-xl sm:text-3xl ss:text-2xl">Overview</motion.h2>
          <motion.p
            className="xs:text-lg text-[12px] text-blue mb-6"
            dangerouslySetInnerHTML={{
              __html: data?.overview || "Overview content not available",
            }}
          ></motion.p>

          <motion.h2 className="text-xl sm:text-3xl ss:text-2xl">Timeline</motion.h2>
          <motion.p
            className="text-blue xs:text-lg text-[12px] mb-6"
            dangerouslySetInnerHTML={{
              __html: data?.timeline || "Timeline content not available",
            }}
          ></motion.p>

          <motion.h2 className="text-xl sm:text-3xl ss:text-2xl">Contact</motion.h2>
          <motion.div className="text-blue xs:text-lg text-sm mb-6">
            {data?.contacts?.length > 0 ? (
              data.contacts.map((item, index) => (
                <p key={index}>
                  {item.name} : {item.mobile}
                </p>
              ))
            ) : (
              <p>Contact information not available</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Modal;