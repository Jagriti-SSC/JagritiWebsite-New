import React, {
  useState,
  forwardRef,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import "./Ca-Form.css";
import toast from "react-hot-toast";
import { useFirebase } from "../../context/Firebase";
import ca_img from "../../assets/ca_page/photo.webp";
import email_img from "../../assets/ca_page/email.webp";
import telephone_img from "../../assets/ca_page/telephone.webp";
import location_img from "../../assets/ca_page/location.webp";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { v4 as uuidv4 } from "uuid";

const CAForm = forwardRef((props, ref) => {
  const firebase = useFirebase();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [roll, setRoll] = useState("");
  const [id, setId] = useState(undefined);
  let done = false;

  const contactRef = useRef();
  const socialRef = useRef();
  const gridRef = useRef();

  const validateDetails = () => {
    const emailValid =
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
    const mobileValid = mobile.length === 10;
    const collegeValid = college.length >= 3;
    const branchValid = branch.length >= 2;
    const rollValid = roll.length >= 3;
    const idValid = id !== undefined;

    return (
      emailValid &&
      mobileValid &&
      collegeValid &&
      branchValid &&
      rollValid &&
      idValid
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = uuidv4();
    if (validateDetails()) {
      const promise = Promise.all([
        firebase.addDocument("ca-form", {
          userId,
          name,
          mobile,
          email,
          college,
          branch,
          rollNo: roll,
        }),
        firebase.uploadFile(`CAForm/${userId}.${id.name.split(".").pop()}`, id),
      ]);

      toast.promise(
        promise,
        {
          loading: "Uploading the Form",
          success: (data) => {
            setName("");
            setEmail("");
            setMobile("");
            setCollege("");
            setBranch("");
            setRoll("");
            setId(undefined);
            return "Form Submitted Successfully!";
          },
          error: "Error while submitting Form!",
        },
        {
          success: {
            duration: 5000,
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

  useEffect(() => {
    console.log(id);
    console.log(id?.name.split(".").pop());
  }, [id]);

  return (
    <div className="flex-wrapper" ref={ref}>
      <div className="grid-wrapper" ref={gridRef}>
        <div className="heading">
          <h1 className="ca-heading">Become a Campus Ambassador</h1>
          <h4 className="ca-subheading">Fill the form and connect us</h4>
        </div>
        <div className="ca-img">
          <img src={ca_img} alt="aesthetic-image"></img>
        </div>
        <div className="ca-form-div">
          <form className="ca-form" onSubmit={handleSubmit} action="#">
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              required
              type="number"
              name="mobile"
              placeholder="Enter Mobile No.(Whatsapp)"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            ></input>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              required
              type="text"
              name="collegeName"
              placeholder="Name of Your College"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            ></input>
            <input
              required
              type="text"
              name="department"
              placeholder="Name of your Branch/Dept."
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            ></input>
            <input
              required
              type="text"
              name="rollNo"
              placeholder="Enter your Roll No."
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            ></input>
            <label htmlFor="icard">College ID Card</label>
            <input
              required
              id="icard"
              type="file"
              name="icard"
              placeholder="College ID Card"
              onChange={(e) => {
                setId(e.target.files[0]);
              }}
            ></input>

            {/* <textarea
              required
              type="text"
              name="note"
              placeholder="Go ahead, We are listening... Atleast 20 characters!"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea> */}
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-details" ref={contactRef}>
          <div className="ca-details">
            <img src={location_img} alt="#"></img>
            <a href="https://www.iitbhu.ac.in/" target="_blank">
              IIT (BHU) Varanasi
            </a>
          </div>
          <div className="ca-details">
            <img src={telephone_img} alt="#"></img>
            <a href="tel:+91-7004405828">+91-7004405828</a>
          </div>
          <div className="ca-details">
            <img src={email_img} alt="#"></img>
            <a href="mailto:jagriti.ssc@iitbhu.ac.in">
              jagriti.ssc@iitbhu.ac.in
            </a>
          </div>
        </div>
      </div>
      <div className="socials" ref={socialRef}>
        <a href="https://www.facebook.com/jagriti.iitbhu/" target="_blank">
          <Facebook style={{ color: "white", width: 30 }} />
        </a>
        <a href="https://twitter.com/JagritiBhu" target="_blank">
          <Twitter style={{ color: "white", width: 25 }} />
        </a>
        <a
          href="https://www.linkedin.com/company/jagriti-iitbhu/"
          target="_blank"
        >
          <LinkedinSquare style={{ color: "white", width: 25 }} />
        </a>
      </div>
    </div>
  );
});

export default CAForm;
