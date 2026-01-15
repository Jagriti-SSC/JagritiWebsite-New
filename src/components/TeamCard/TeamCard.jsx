import React from "react";
import "./TeamCard.css";
import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";

function TeamCard(props) {
  const imagePath = props.image ? encodeURI(props.image) : "";
  
  return (
    <div className="team-card-modern">
      <div className="image-container">
        <img src={imagePath} alt={props.name} className="card-image" loading="lazy" />
        <div className="social-overlay">
          <div className="social-icons">
            {props.gmail && (
              <a href={"mailto:" + props.gmail} className="social-link gmail" aria-label="Email">
                <Gmail />
              </a>
            )}
            {props.linkedin && (
              <a
                href={props.linkedin.startsWith("http") ? props.linkedin : "//" + props.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            )}
            {props.instagram && (
              <a
                href={"https://instagram.com/" + props.instagram.replace("@", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="info-container">
        <h3 className="member-name">{props.name}</h3>
        <p className="member-role">{props.role}</p>
      </div>
    </div>
  );
}

export default TeamCard;