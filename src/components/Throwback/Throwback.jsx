import React from "react";
import { useEffect, useState } from "react";

import "./Throwback.css"
import Group1 from"../../assets/33630.png"
import Group2 from"../../assets/33631.png"
function Throwback() {
  return (
    <div>
      
     <div className="throwback">

    <div className="head">
      <p>Throwback</p>
    </div>
    <div className="content">
     Here's the glimpse of the previous editions of Jagriti. Exciting events ranging from <br /> guest talks to competitions were successfully held,inundated with participants <br />from all over India.
    </div>
        <div className="allimg">  
        <div className="img1">
        <img className="img1size"src={Group2} alt="op" />
      </div>
      <div className="img2">
        <img className="img2size" src={Group1} alt="op" />
      </div>
      </div>
    
      
      </div>
    </div>
  


  )
}

export default Throwback
