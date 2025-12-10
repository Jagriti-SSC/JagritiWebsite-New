import React from "react";
import style from "./ClubCard.module.css";

function ClubCard(props) {
  return (
    <div className={style.club_card}>
      <div className={style.avatar_wrapper}>
        <img
          className={style.club_img}
          src={`/assets/${props.clubLogo}`}
          alt={`${props.clubName} logo`}
        />
      </div>

      <h5 className={style.club_title}>
        {props.clubName}
      </h5>

      <div className={style.description_wrapper}>
        <p className={style.club_description}>
          {props.clubDescription}
        </p>
      </div>
    </div>
  );
}

export default ClubCard;
