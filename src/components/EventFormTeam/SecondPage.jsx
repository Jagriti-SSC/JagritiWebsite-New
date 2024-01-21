import React, {
  useState,
  forwardRef,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import style from "./EventFormTeam.module.css";
import toast from "react-hot-toast";
import { useFirebase } from "../../context/Firebase";
import event_img from "../../assets/event_page/img.png";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from 'react-router-dom';

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
          <form className={style.event_form} onSubmit={handleSubmit} action="#">
            <div className="bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[903px] h-[250px] rounded-3xl info-div-1">

              <label htmlFor="icard" className="absolute top-[150px] left-[75px] ">Payment Slip</label>
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
              <div className="absolute top-[225px] left-[80px] leading-[26.4px] whitespace-pre-wrap text-black" style={{ fontWeight: "900" }}>
                <h2>Team Members</h2>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>

  );
});

export default SecondPage;
