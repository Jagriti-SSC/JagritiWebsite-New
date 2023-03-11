import React, { useState, forwardRef,useLayoutEffect,useRef } from "react";
import "./Ca-Form.css";
import ca_img from "../../assets/ca_page/photo.jpg";
import email_img from "../../assets/ca_page/email.png";
import telephone_img from "../../assets/ca_page/telephone.png";
import location_img from "../../assets/ca_page/location.png";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";

const CAForm = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const contactRef = useRef();
  const socialRef = useRef();
  const gridRef = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    console.log("name", name, "email", email, "note", note);
  };

  useLayoutEffect(() => {
    if(document.documentElement.clientWidth <= 750){
      // socialRef.current.style.display = 'none'
    socialRef.current.style.height = `${contactRef.current.clientHeight + 30}px`;
    socialRef.current.style.position = 'relative';
    socialRef.current.style.top = `-${socialRef.current.clientHeight}px`;
    socialRef.current.style.left = `${gridRef.current.clientWidth - socialRef.current.clientWidth}px`;
    console.log(contactRef.current.clientHeight);
    }
  },[])

  return (
    <div
      className="flex-wrapper"
      ref={ref}
    >
      <div className="grid-wrapper" ref={gridRef}>
        <div className="heading">
          <h1 className="ca-heading">Become a Campus Ambassador</h1>
          <h4 className="ca-subheading">Fill the form and connect us</h4>
        </div>
        <div className="img">
          <img src={ca_img} alt="aesthetic image"></img>
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
              type="text"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <textarea
              required
              type="text"
              name="note"
              placeholder="Go ahead, We are listening..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
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
            <a href="tel:+979-988-89787">979-988-89787</a>
          </div>
          <div className="ca-details">
            <img src={email_img} alt="#"></img>
            <a href="mailto:Jagriti123@gmail.com">Jagriti123@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="socials" ref={socialRef}>
        <a href="##">
          <Facebook style={{ color: "white", width: 30 }} />
        </a>
        <a href="##">
          <Twitter style={{ color: "white", width: 25 }} />
        </a>
        <a href="##">
          <LinkedinSquare style={{ color: "white", width: 25 }} />
        </a>
      </div>
    </div>
  );
});

export default CAForm;
