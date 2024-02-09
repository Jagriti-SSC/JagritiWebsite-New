
import React, { useEffect, useState, forwardRef, useLayoutEffect, useRef } from "react";
import style from "./EventFormTeam.module.css";
import { auth } from "../../context/Firebase";
import event_img from "../../assets/event_page/img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import email_img from "../../assets/ca_page/email.webp";
import telephone_img from "../../assets/ca_page/telephone.webp";
import location_img from "../../assets/ca_page/location.webp";
import { useLocation } from "react-router-dom";

const EventFormTeam = forwardRef((props, ref) => {
  const location = useLocation();
  const { eventname, eventType } = location.state
  const eventName = eventname;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [teamName, setTeamName] = useState("");
  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };
  const leader = auth.currentUser.email;
  const [leaderID, setLeaderID] = useState('')
  const [participants, setParticipants] = useState([""]);
  const [eventid, setEventid] = useState("")

  const handleParticipantChange = (event, index) => {
    const newParticipants = [...participants];
    newParticipants[index] = event.target.value;
    setParticipants(newParticipants);
  };

  const handleAddParticipant = () => {
    if (participants.length < 4) {
      setParticipants([...participants, ""]);
    }
  };
  let userIds = [];
  const handleRemoveParticipant = (index) => {
    if (participants.length > 0) {
      const newParticipants = [...participants];
      newParticipants.splice(index, 1);
      setParticipants(newParticipants);
    }
  };

  let done = false;

  const contactRef = useRef();
  const socialRef = useRef();
  const gridRef = useRef();

  const [array, setArr] = useState([]);
  const handleSubmit = async (e) => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const formData = {
        teamName: teamName,
        teamLeader: leaderID,
        members: userIds,
        driveUrl: auth.currentUser.email,
      };
      let teamCreation = await fetch(`${url}/team/createTeam`, {
        method: "post",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (teamCreation.ok) {
        const data = await teamCreation.json();
        const teamId = data._id;

        try {
          let arr = await Promise.all(
            [...participants, leader].map(async (email) => {
              const event = {
                email: email,
                eventType: eventType.slice(0, -1),
                eventName: eventid, // Use eventid here
              };
              let res = await fetch(`${url}/auth/addEvent`, {
                method: "post",
                body: JSON.stringify(event),
                headers: { "Content-Type": "application/json" },
              });
              if (res.ok) return true;
              else {
                const err = await res.json();
                setError(err.message);
                return false;
              }
            })
          );

          if (arr.every((result) => result)) {
            try {
              const form = {
                eventName: eventName,
                eventType: eventType.slice(0, -1),
                participant: {
                  teams: teamId,
                  individuals: null,
                  driveUrl: auth.currentUser.email,
                  status: "Pending"
                }
              };

              const response = await fetch(`${url}/admin/registration`, {
                method: "post",
                body: JSON.stringify(form),
                headers: { "Content-Type": "application/json" },
              });
              if (response.ok) {
                alert("registered");
                navigate('/events');
              }
            } catch (error) {
              setError("error in registration")
              console.log("error in team reg", error);
            }
          }
        } catch (error) {
          console.log("error in team reg", error);
        }
      }
    } catch (error) {
      console.log("error in team creation", error);
    }
  };
  let checkUsers = async (e) => {
    e.preventDefault();
    try {
      const allEmails = [auth.currentUser.email, ...participants];
      const areEmailsUnique = new Set(allEmails).size === allEmails.length;

      if (!areEmailsUnique) {
        setError("Please make sure all emails are unique");
        return;
      }

      

      let nArr = await Promise.all(
        participants.map(async (email) => {
          const data={
            eventName: eventid,
            email:email,
            eventType:eventType.slice(0,-1)
          }
          const url = process.env.REACT_APP_BASE_URL;
          let response = await fetch(`${url}/auth/checkRegister`, {
            method: "post",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const userData = await response.json();
            userIds.push({ "member": userData._id }); // Assuming your API response contains a userId field
            return true;
          } else {
            const userData = await response.json();
            setError(userData.message)
            return false;
          }
        })
      );
      setArr(nArr);
      const numberOfTrue = nArr.filter((value) => value === true).length;

      if (numberOfTrue == participants.length) {
      //   setError("Not all emails are registered");
      // } else {
        setError("");
        if(teamName.length==0)setError("Team Name is missing")
        else handleSubmit()
        // navigate("/secondpage", {
        //   state: { leaderID, eventType, teamName, leader, participants, eventName, userIds },
        // });

      }
    } catch (error) {
      console.error("Error in checkUsers:", error);
    }
  };

  // useLayoutEffect(() => {
  //   if (document.documentElement.clientWidth <= 750) {
  //     if (done == false)
  //       ref.current.style.height = `${ref.current.offsetHeight - socialRef.current.clientHeight
  //         }px`;
  //     socialRef.current.style.height = `${contactRef.current.clientHeight + 80
  //       }px`;
  //     socialRef.current.style.position = "relative";
  //     socialRef.current.style.top = `-${socialRef.current.clientHeight}px`;
  //     socialRef.current.style.left = `${gridRef.current.clientWidth - socialRef.current.clientWidth
  //       }px`;
  //     done = true;
  //   }
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_BASE_URL;
      try {
        const check={
          eventName: eventid,
          email:leader,
          eventType:eventType.slice(0,-1)
        }
        let response = await fetch(`${url}/auth/checkRegister`, {
          method: "post",
          body: JSON.stringify(check),
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (response.ok) {
          setLeaderID(data._id);
          // alert(leaderID)
        }else setError("Leader "+data.message)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchEvent = async () => {
      try {
        const url = process.env.REACT_APP_BASE_URL;
        let event = await fetch(`${url}/admin/${eventType}`);
        const datas = await event.json();
  
        // console.log(datas.result);
  
        const foundEvent = await datas.result.find((data) => data.eventName === eventName);
  
        if (foundEvent) {
          console.log(foundEvent);
          setEventid(foundEvent._id);
          // console.log(eventid);
        } else {
          console.log(`Event with name '${eventName}' not found.`);
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvent().then(()=>fetchData())
  }, [leader,eventid]); // Add any dependencies here if necessary

  return (
    <div className={`${style.fwrap} flex-wrapper`}>
      <div className={`${style.gwrap} grid-wrapper`} ref={gridRef}>
        <div className={style.heading}>
          <h1 className={style.event_heading}>
            Event Registration Form for {eventName}{" "}
          </h1>
          <h4 className={style.event_subheading}>Fill the form to register</h4>
        </div>
        <div className={style.event_img}>
          <img src={event_img} alt="aesthetic-image"></img>
        </div>
        <div className={style.event_form_div}>
          <div>
            {error && <p className="text-red">{error}</p>}
            <form className={style.event_form}>
              <h5>Leader Mail ID: {leader}</h5>
              <label >
               <div className="flex">Team Name: <p  className="text-red"> * </p></div>
                <input
                  type="text"
                  required
                  value={teamName}
                  placeholder="Enter team name"
                  onChange={handleTeamNameChange}
                />
              </label>
              <label>
                Members Mail IDs :
                {participants.map((participant, index) => (
                  <div style={{display:"flex",flexDirection:"column"}} key={index}>
                    <input
                      type="text"
                      value={participant}
                      placeholder="Enter participant's mail id"
                      onChange={(event) => handleParticipantChange(event, index)}
                    />
                    <button type="button" onClick={() => handleRemoveParticipant(index)}>
                      Remove
                    </button>
                  </div>
                ))}
              </label>
              <button type="button" onClick={handleAddParticipant}>
                Add participants <FontAwesomeIcon icon={faPlus} />
              </button>
              <button onClick={(e) => checkUsers(e)}>Submit</button>
            </form>
          </div>
        </div>
        <div className={style.contact_details} ref={contactRef}>
          <div className={style.event_details}>
            <img src={location_img} alt="#"></img>
            <a
              href="https://www.iitbhu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IIT (BHU) Varanasi
            </a>
          </div>
          <div className={style.event_details}>
            <img src={telephone_img} alt="#"></img>
            <a href="tel:+91-7004405828">+91-7004405828</a>
          </div>
          <div className={style.event_details}>
            <img src={email_img} alt="#"></img>
            <a href="mailto:jagriti.ssc@iitbhu.ac.in">
              jagriti.ssc@iitbhu.ac.in
            </a>{" "}
          </div>
        </div>
      </div>
      <div className={style.socials} ref={socialRef}>
        <a
          href="https://www.facebook.com/jagriti.iitbhu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook style={{ color: "white", width: 30 }} />
        </a>
        <a
          href="https://twitter.com/JagritiBhu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter style={{ color: "white", width: 25 }} />
        </a>
        <a
          href="https://www.linkedin.com/company/jagriti-iitbhu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinSquare style={{ color: "white", width: 25 }} />
        </a>
      </div>
    </div>
  );
});

export default EventFormTeam;
