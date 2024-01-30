import React, {
  useState,
  forwardRef,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import style from "../../components/EventFormTeam/SecondPage.module.css";
import { auth, useFirebase } from "../../context/Firebase";
import event_img from "../../assets/event_page/img.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import email_img from "../../assets/ca_page/email.webp";
import telephone_img from "../../assets/ca_page/telephone.webp";
import location_img from "../../assets/ca_page/location.webp";
const EventPage = forwardRef((props, ref) => {

  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [userId, setUserID] = useState("");
  const [driveUrl, setdriveUrl] = useState("");

  const {eventname,eventType, eventID} = location.state;

  const firebase = useFirebase();
  const [id, setId] = useState(undefined);
  let done = false;

  const formRef = useRef();
  const divRef = useRef();
  const contactRef = useRef();
  const socialRef = useRef();
  const gridRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const event = {
        email: auth.currentUser.email,
        eventType: eventType.slice(0, -1),
        eventName: eventID, //id deni hai
        status: "Pending"
      };
      let res = await fetch(`${url}/auth/addEvent`, {
        method: "post",
        body: JSON.stringify(event),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const form = {
          eventName: eventname,
          eventType:  eventType.slice(0,-1),
          driveUrl: driveUrl,
          teamid: userId
        };
        const response = await fetch(
          `${url}/admin/registration`,
          {
            method: "post",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
          }
        );
        if(response.ok){alert("registered");navigate('/events')}
      } else {
        const err = await res.json();
        setError(err.message);
      }
    } catch (error) {
      console.log("error in registration", error);
    }
  };

  useLayoutEffect(() => {
    divRef.current.style.height = "500px";
  }, [formRef, divRef]);

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
  const fetchData = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const response = await fetch(`${url}/auth/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: auth.currentUser.email }),
      });
      const data = await response.json();
      setUserID(data._id);
      console.log(userId);
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
                <h1 className={style.event_heading}>
                  Event Registration Form for {eventname}
                </h1>
                <h4 className={style.event_subheading}>
                  Fill the form to register
                </h4>
              </div>
              <div className={style.event_img}>
                <img src={event_img} alt="aesthetic-image"></img>
              </div>
              <div className={style.event_form_div}>
                <form className={style.event_form}>
                  <div className="bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[450px] h-[180px] rounded-3xl info-div-1">
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
                    <div
                      className="absolute top-[230px] left-[80px] leading-[26.4px] whitespace-pre-wrap text-black"
                      style={{ fontWeight: "900" }}
                    >
                      {error && <p className="text-red">{error}</p>}
                      <p>Participant: {auth.currentUser.email}</p>
                    </div>
                  </div>
                  <button type="button" onClick={(e) => handleSubmit(e)}>
                    Submit
                  </button>
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

export default EventPage;
