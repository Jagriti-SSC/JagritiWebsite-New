import React, { useState } from "react";
import "./Ca.css";
import img1 from "../images/CA-Page images/Group 33631 (5).png";
import img2 from "../images/CA-Page images/Group 33632 (2).png";
import img3 from "../images/CA-Page images/Group 33633 (2).png";
import img4 from "../images/CA-Page images/Vector (1).png";
import img5 from "../images/CA-Page images/Vector (2).png";
import img6 from "../images/CA-Page images/Vector (3).png";
import grp from "../images/CA-Page images/Group 15.jpg";

function Ca() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="ca-main">
      <div className="ca-box">
        <div className="left-content">
          <h1 className="ca-heading">Become a Campus Ambassador</h1>
          <h4 className="ca-subheading">Fill the form and connect us</h4>

          <form className="ca-form" onSubmit={handleSubmit} action="#">
            <div className="form-content">
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
            </div>
          </form>
        </div>

        <div className="right-content">
          <div className="ca-img">
            <img src={grp} alt="#"></img>
          </div>
          <div className="ca-details">
            <img src={img1} alt="#"></img>
            <p>IIT (BHU) Varanasi</p>
          </div>
          <div className="ca-details">
            <img src={img2} alt="#"></img>
            <p>979-988-89787</p>
          </div>
          <div className="ca-details">
            <img src={img3} alt="#"></img>
            <a href="Jagriti123@gmail.com">Jagriti123@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="right-ca">
        <a href="##">
          <img src={img4} alt=""></img>
        </a>
        <a href="##">
          <img src={img5} alt=""></img>
        </a>
        <a href="##">
          <img src={img6} alt=""></img>
        </a>
      </div>

      {/* <div className="rec-big-left"></div>
      <div className="rec-small-left"></div> */}
      <div className="skewed-bg"></div>
      {/* <div className="rec-big-right"></div>
      <div className="rec-small-right"></div> */}
    </div>
  );
}

export default Ca;
