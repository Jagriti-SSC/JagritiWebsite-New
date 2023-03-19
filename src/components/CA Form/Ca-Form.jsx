import React, { useState, forwardRef, useLayoutEffect, useRef } from "react";
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

const CAForm = forwardRef((props, ref) => {
  const firebase = useFirebase();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
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
    const noteValid = note.length >= 20;

    return emailValid && mobileValid && noteValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateDetails()) {
      const saveData = firebase.addDocument("ca-form", {
        name,
        mobile,
        email,
        note,
      });
      toast.promise(
        saveData,
        {
          loading: "Submitting the Form",
          success: (data) => {
            setName("");
            setEmail("");
            setMobile("");
            setNote("");
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
      if (done === false)
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
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-details" ref={contactRef}>
          <div className="ca-details">
            <img src={location_img} alt="#"></img>
            <a
              href="https://www.iitbhu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IIT (BHU) Varanasi
            </a>
          </div>
          <div className="ca-details">
            <img src={telephone_img} alt="#"></img>
            <a href="tel:+91-97998889787">+91-97998889787</a>
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
        <a
          href="//facebook.com/jagriti.iitbhu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook style={{ color: "white", width: 30 }} />
        </a>
        <a
          href="//twitter.com/JagritiBhu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter style={{ color: "white", width: 25 }} />
        </a>
        <a
          href="//linkedin.com/company/jagriti-iitbhu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinSquare style={{ color: "white", width: 25 }} />
        </a>
      </div>
    </div>
  );
});

export default CAForm;
