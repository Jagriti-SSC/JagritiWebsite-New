import React from "react";
import "./TeamCard.css";
import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";

function TeamCard(props) {
    // console.log(props.image);
  return (
    <div className="cardbox" style={{backgroundImage: `url(${props.image})`}}>
      <div className="card-content">
        <h2 className="card-title">{props.name}</h2>
        <div className="teamPost">
          <img src={props.icon} alt="logo" srcset="" />
          <p className="card-body">{props.post}</p>
        </div>
        
        <div className="btn">
          <a href={"mailto:"+props.gmail}>
            <Gmail className=" h-8 text-white hover:text-red"></Gmail>
          </a>
          <a href={"//"+props.linkedin} target="_blank">
           
            <Linkedin className=" h-8 text-white hover:text-blue"></Linkedin>
          </a>
          <a href={"//"+props.instagram} target="_blank">
            <Instagram className=" h-8 text-white hover:text-pink-400"></Instagram>
          </a>

        </div>
      </div>
    </div>
  );
}

export default TeamCard;
