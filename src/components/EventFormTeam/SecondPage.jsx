import React, {
  useState,
  forwardRef,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import style from "./SecondPage.module.css";
import toast from "react-hot-toast";
import { useFirebase } from "../../context/Firebase";
import event_img from "../../assets/event_page/img.png";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../../components/footer/Footer";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import email_img from "../../assets/ca_page/email.webp";
import telephone_img from "../../assets/ca_page/telephone.webp";
import location_img from "../../assets/ca_page/location.webp";
const SecondPage = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const { leaderID, eventType, teamName, leader, participants, eventName, userIds } = location.state;
  const [driveUrl, setdriveUrl] = useState("");
  var storedUserString = localStorage.getItem("user");
  // console.log(storedUserString);
  const userObject = JSON.parse(storedUserString);
  // console.log("User" + userObject);
  const fetchEventData = (name) => {
    const Data = firebase.getAllDocuments(name);
  };

  useEffect(() => {
    Promise.all([fetchEventData("events")]);
  }, []);


  const firebase = useFirebase();
  let done = false;

  const formRef = useRef();
  const divRef = useRef();
  const contactRef = useRef();
  const socialRef = useRef();
  const gridRef = useRef();
  useLayoutEffect(() => {
    divRef.current.style.height = "650px";
  }, [formRef, divRef]);

  const [eventid, setEventid] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const formData = {
        teamName: teamName,
        teamLeader: leaderID,
        members: userIds,
        driveUrl: driveUrl,
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
          const form = {
            eventName: eventName,
            updatedBody: {
              participants: {
                teams: [teamId],
                driveUrl: driveUrl,
              },
            },
          };

          const response = await fetch(`${url}/admin/updateEvent/${eventType}`, {
            method: "put",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
          });

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

          if (response.ok && arr.every((result) => result)) {
            alert("registered");
            navigate('/events');
          } else {
            setError("Error in registering team members.");
          }
        } catch (error) {
          console.log("error in team reg", error);
        }
      }
    } catch (error) {
      console.log("error in team creation", error);
    }
  };

  useLayoutEffect(() => {
    if (document.documentElement.clientWidth <= 750) {
      if (done == false)
        ref.current.style.height = `${ref.current.offsetHeight - socialRef.current.clientHeight
          }px`;
      socialRef.current.style.height = `${contactRef.current.clientHeight + 30
        }px`;
      socialRef.current.style.position = "relative";
      socialRef.current.style.top = `-${socialRef.current.clientHeight}px`;
      socialRef.current.style.left = `${gridRef.current.clientWidth - socialRef.current.clientWidth
        }px`;
      done = true;
    }
  }, []);
  const fetchData = async () => {
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

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <>
      <div ref={divRef} style={{ position: "relative" }}>
        <div ref={formRef}>
          <div className={`${style.fwrap} flex-wrapper`} ref={ref}>
            <div className={`${style.gwrap} grid-wrapper`} ref={gridRef}>
              <div className={style.heading}>
                <h1 className={style.event_heading}>Event Registration Form for {eventName}</h1>
                <h4 className={style.event_subheading}>Fill the form to register</h4>
              </div>
              <div className={style.event_img}>
                <img src={event_img} alt="aesthetic-image"></img>
              </div>
              <div className={style.event_form_div}>
                <form className={style.event_form}>
                  <div className="bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[450px] h-[350px] rounded-3xl info-div-1">
                    <div className="absolute top-[145px] left-[75px]">Drive link of your passport size image(s):</div>
                    <div className="absolute top-[175px] left-[75px]">
                      <input
                        required
                        type="text"
                        name="driveUrl"
                        placeholder="Enter url here"
                        value={driveUrl}
                        onChange={(e) => setdriveUrl(e.target.value)}
                      ></input>
                    </div>
                    <div className="absolute top-[220px] left-[80px] leading-[26.4px] whitespace-pre-wrap text-black" style={{ fontWeight: "900" }}>
                      <h2 >Team Members</h2>
                      {error && <p className="text-red">{error}</p>}
                      <p>Leader: {leader}</p>
                      <p>Participants:<br/>{participants.join(',\n')}</p>
                    </div>
                  </div>
                  <button type="button" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
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
                  </a>
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
        </div>
        <div className={style.skewed_bg} />
      </div>
      <Footer />
    </>
  );
});

export default SecondPage;