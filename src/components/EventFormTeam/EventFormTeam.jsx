import React, { useState, forwardRef, useLayoutEffect, useRef } from "react";
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
import {useLocation } from "react-router-dom";

const EventFormTeam = forwardRef((props, ref) => {
  const location = useLocation();
  const { state } = location;
  const eventName = state ? state : null;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [teamName, setTeamName] = useState("");
  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };
  const leader = auth.currentUser.email;
  const [participants, setParticipants] = useState([""]);

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

  let done = false;

  const contactRef = useRef();
  const socialRef = useRef();
  const gridRef = useRef();

  const [array, setArr] = useState([]);

  let checkUsers = async (e) => {
    e.preventDefault();
    try {
      const allEmails = [auth.currentUser.email, ...participants];
      const areEmailsUnique = new Set(allEmails).size === allEmails.length;
  
      if (!areEmailsUnique) {
        setError("Please make sure all emails are unique");
        return;
      }
  
      let userIds = [];
  
      let nArr = await Promise.all(
        participants.map(async (email) => {
          const url = process.env.REACT_APP_BASE_URL;
          let response = await fetch(`${url}/auth/checkUser`, {
            method: "post",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            const userData = await response.json();
            userIds.push(userData._id); // Assuming your API response contains a userId field
            return true;
          } else {
            return false;
          }
        })
      );
      setArr(nArr);
      const numberOfTrue = nArr.filter((value) => value === true).length;
  
      if (numberOfTrue !== participants.length) {
        setError("Not all emails are registered");
      } else {
        setError("");
        navigate("/secondpage", {
          state: { teamName, leader, participants, userIds },
        });
      }
    } catch (error) {
      console.error("Error in checkUsers:", error);
    }
  };  

  useLayoutEffect(() => {
    if (document.documentElement.clientWidth <= 750) {
      if (done == false)
        ref.current.style.height = `${
          ref.current.offsetHeight - socialRef.current.clientHeight
        }px`;
      socialRef.current.style.height = `${
        contactRef.current.clientHeight + 30
      }px`;
      socialRef.current.style.position = "relative";
      socialRef.current.style.top = `-${socialRef.current.clientHeight}px`;
      socialRef.current.style.left = `${
        gridRef.current.clientWidth - socialRef.current.clientWidth
      }px`;
      done = true;
    }
  }, []);

  return (
    <div className={`${style.fwrap} flex-wrapper`} ref={ref}>
      <div className={`${style.gwrap} grid-wrapper`} ref={gridRef}>
        <div className={style.heading}>
          <h1 className={style.event_heading}>
            Event Registration Form {eventName}{" "}
          </h1>
          <h4 className={style.event_subheading}>Fill the form to register</h4>
        </div>
        <div className={style.event_img}>
          <img src={event_img} alt="aesthetic-image"></img>
        </div>
        <div className={style.event_form_div}>
          <div>
            <center>
              <h2 className={style.event_heading}>Team Registration</h2>
            </center>
            {error && <p className="text-red">{error}</p>}
            <form className={style.event_form}>
              <h5>Leader Mail ID: {leader}</h5>
              <label>
                Team Name:
                <input
                  type="text"
                  value={teamName}
                  placeholder="Enter team name"
                  onChange={handleTeamNameChange}
                />
              </label>
              <label>
                Participants Mail IDs :
                {participants.map((participant, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={participant}
                      placeholder="Enter participant's mail id"
                      onChange={(event) =>
                        handleParticipantChange(event, index)
                      }
                    />
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
