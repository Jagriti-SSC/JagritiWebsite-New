import React, {
  useState,
  forwardRef,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import { Link } from 'react-router-dom';
import style from "./EventFormTeam.module.css";
import toast from "react-hot-toast";
import { useFirebase } from "../../context/Firebase";
import event_img from "../../assets/event_page/img.png";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import email_img from "../../assets/ca_page/email.webp";
import telephone_img from "../../assets/ca_page/telephone.webp";
import location_img from "../../assets/ca_page/location.webp";
const EventFormTeam = forwardRef((props, ref) => {

  var storedUserString = localStorage.getItem("user");
  console.log(storedUserString);
  const userObject = JSON.parse(storedUserString);
  console.log("User" + userObject);

  const fetchEventData = (name) => {
    const Data = firebase.getAllDocuments(name);
  };

  useEffect(() => {
    Promise.all([fetchEventData("events")]);
  }, []);

  const leader = userObject?.email ? `${userObject?.email}` : "null";
  // const [leader, setLeader] = useState({storedUserString});
  const [participants, setParticipants] = useState(['']);

  // const handleLeaderChange = (event) => {
  //   setLeader(event.target.value);
  // };

  const handleParticipantChange = (event, index) => {
    const newParticipants = [...participants];
    newParticipants[index] = event.target.value;
    setParticipants(newParticipants);
  };

  const handleAddParticipant = () => {
    if (participants.length < 4) {
      setParticipants([...participants, '']);
    }
  };

  const firebase = useFirebase();
  const [id, setId] = useState(undefined);
  let done = false;

  const contactRef = useRef();
  const socialRef = useRef();
  const gridRef = useRef();

  const validateDetails = () => {
    const idValid = id !== undefined;
    return (
      idValid
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = uuidv4();
    if (validateDetails()) {
      const promise = Promise.all([
        firebase.addDocument("eventteam-form", {
          userId: `${userId}.${id.name.split(".").pop()}`,
        }),
        firebase.uploadFile(`EventFormTeam/${userId}.${id.name.split(".").pop()}`, id),
      ]);

      toast.promise(
        promise,
        {
          loading: "Uploading the Form",
          success: (data) => {
            setId(undefined);
            return "Form Submitted Successfully!";
          },
          error: "Error while submitting Form!",
        },
        {
          success: {
            duration: 10000,
          },
        }
      );
    } else {
      toast.error("Either of the Details is Invalid");
      return;
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

  useEffect(() => {
    console.log(id);
    console.log(id?.name.split(".").pop());
  }, [id]);

  return (
    <div className={`${style.fwrap} flex-wrapper`} ref={ref}>
      <div className={`${style.gwrap} grid-wrapper`} ref={gridRef}>
        <div className={style.heading}>
          <h1 className={style.event_heading}>Event Registration Form</h1>
          <h4 className={style.event_subheading}>Fill the form to register</h4>
        </div>
        <div className={style.event_img}>
          <img src={event_img} alt="aesthetic-image"></img>
        </div>
        <div className={style.event_form_div}>
          <div>
            <center><h2 className={style.event_heading}>Team Registration</h2></center>
            <form className={style.event_form}>
              <h5>
                Leader Mail ID: {userObject?.email ? `  ${userObject?.email}` : "null"}</h5>
              <label>
                Participants Mail IDs :
                {participants.map((participant, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={participant}
                      placeholder="Enter participant's mail id"
                      onChange={(event) => handleParticipantChange(event, index)}
                    />
                  </div>
                ))}
              </label>
              <button type="button" onClick={handleAddParticipant}>
                Add participants <FontAwesomeIcon icon={faPlus} />
              </button>
              <Link to="/secondpage" state={{ leader, participants }}>
                <button type="button"> Submit </button>
              </Link>
              {/* <Button text="submit" path="/secondpage"></Button> */}
            </form>

            {/* <Route path="/second-page" element={<SecondPage />} /> */}
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
  );
});

export default EventFormTeam;