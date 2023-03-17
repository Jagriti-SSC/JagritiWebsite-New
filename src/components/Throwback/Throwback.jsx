import React from "react";
import "./Throwback.css";
import Group1 from "../../assets/33630.webp";
import Group2 from "../../assets/33631.webp";
function Throwback() {
  return (
   
      <div className="throwback">
        <div className="throwback_head">
          <p>Throwback</p>
        </div>
        <div className="throwback-wrapper">
          <div className="throwback_img1">
            <img className="throwback_img1size" src={Group2} alt="op" />
          </div>
          <div className="right-wrapper">
            <div className="throwback_content">
              Here's the glimpse of the previous editions of Jagriti. Exciting
              events ranging from guest talks to competitions were successfully
              held,inundated with participants from all over India.
            </div>
            <div className="throwback_img2">
              <img className="throwback_img2size" src={Group1} alt="op" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Throwback;
