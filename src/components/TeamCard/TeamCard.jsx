import React from "react";
import "./TeamCard.css";
import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";

function TeamCard(props) {
  // Check if name is long (more than 15 characters or contains spaces indicating multiple words)
  const isLongName = props.name.length > 15 || props.name.includes(" ");
  const nameClass = isLongName ? "card-title long-name" : "card-title";
  const imagePath = props.image ? encodeURI(props.image) : "";
  
  return (
        <div className="cardbox" style={{ backgroundImage: `url('${imagePath}')` }}>      
        <div className="card-content">
        <h2 className={nameClass}>{props.name}</h2>
        <div className="teamPost">
          <p className="card-role">{props.role}</p>
        </div>

        <div className="btn">
          {props.gmail && (
            <a href={"mailto:" + props.gmail}>
              <Gmail className=" h-8 text-white hover:text-red"></Gmail>
            </a>
          )}
          {props.linkedin && (
            <a
              href={props.linkedin.startsWith("http") ? props.linkedin : "//" + props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className=" h-8 text-white hover:text-blue"></Linkedin>
            </a>
          )}
          {props.instagram && (
            <a
              href={"https://instagram.com/" + props.instagram.replace("@", "")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className=" h-8 text-white hover:text-pink-400"></Instagram>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;