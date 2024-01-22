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
import { useLocation } from 'react-router-dom';
import Footer from "../../components/footer/Footer";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import email_img from "../../assets/ca_page/email.webp";
import telephone_img from "../../assets/ca_page/telephone.webp";
import location_img from "../../assets/ca_page/location.webp";
const SecondPage = forwardRef((props, ref) => {

  const location = useLocation();
  const { leader, participants } = location.state;
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


  const firebase = useFirebase();
  const [id, setId] = useState(undefined);
  let done = false;

  const formRef = useRef();
  const divRef = useRef();
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
    divRef.current.style.height = `${formRef.current.clientHeight + 490}px`;
  }, [formRef, divRef]);

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
    <>
      <div ref={divRef} style={{ position: "relative" }}>
        <div ref={formRef}>
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
                <form className={style.event_form}>
                  <div className="bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[550px] h-[200px] rounded-3xl info-div-1">
                    <label htmlFor="icard" className="absolute top-[150px] left-[75px] ">Upload image</label>
                    <div className="absolute top-[150px] left-[200px] ">
                      <input
                        required
                        id="icard"
                        type="file"
                        name="icard"
                        onChange={(e) => {
                          setId(e.target.files[0]);
                        }}
                      >
                      </input>
                    </div>
                    <div className="absolute top-[200px] left-[80px] leading-[26.4px] whitespace-pre-wrap text-black" style={{ fontWeight: "900" }}>
                      <h2 >Team Members</h2>
                      <p>Leader: {leader}</p>
                      <p>Participants: {participants.join(' , ')}</p>
                    </div>
                    {/* <div
                className="absolute top-[225px] left-[60px] leading-[26.4px] whitespace-pre-wrap text-black "
                style={{ fontWeight: "900" }}
              >
                <p className="m-0">Name :</p>
                <p className="m-0 ">Institute :</p>
                <p className="m-0 ">Email :</p>
                <p className="m-0 ">Contact :</p>
              </div>
              <div
                className="absolute top-[225px] left-[562px] leading-[26.4px] whitespace-pre-wrap text-black info-1"
                style={{ fontWeight: "900" }}
              >
                <p className="m-0 ">Course :</p>
                <p className="m-0 ">Year :</p>
                <p className="m-0 ">Gender :</p>
                <p className="m-0 ">Nationality :</p>
              </div>
              <div className="absolute top-[225px] left-[157px] leading-[26.4px] text-black ">
                <p className="m-0 ">{userObject?.displayName}</p>
                <p className="m-0">
                  {userObject?.providerData?.institute
                    ? `${userObject?.providerData?.institute}`
                    : "null"}
                </p>
                <p className="m-0">
                  {userObject?.email ? `${userObject?.email}` : "null"}
                </p>
                <p className="m-0">
                  {userObject?.providerData?.phoneNumber
                    ? `${userObject?.providerData?.phoneNumber}`
                    : "null"}
                </p>
              </div>
              <div className="absolute top-[225px] left-[686px] leading-[26.4px] text-black info-2">
                <p className="m-0">
                  {userObject?.providerData?.course
                    ? `${userObject?.providerData?.course}`
                    : "null"}
                </p>
                <p className="m-0">
                  {userObject?.providerData?.year
                    ? `${userObject?.providerData?.year}`
                    : "null"}
                </p>
                <p className="m-0">
                  {userObject?.providerData?.gender
                    ? `${userObject?.providerData?.gender}`
                    : "null"}
                </p>
                <p className="m-0">
                  {userObject?.providerData?.nationality
                    ? `${userObject?.providerData?.nationality}`
                    : "null"}
                </p>
                
              </div>*/}
                  </div>
                  <button type="button">Submit</button>
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
