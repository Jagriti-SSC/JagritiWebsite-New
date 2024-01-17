import React from "react";
import style from "./ClubCard.module.css";

function ClubCard(props) {
  return (
    <div className={`club_card my-5 pb-10 px-8 mx-3 lg:h-[min(450px,75vh)] w-[min(480px,75vw)] bg-white rounded-lg`}>
  <div className={`rounded-full w-[150px] h-[150px] mx-auto p-4`}>
    <img
      className={`club_img w-[130px] h-[130px]`}
      src={`/assets/${props.clubLogo}`}
      alt=""
    />
  </div>
  <div className={``}>
    <h5 className={`text-2xl mt-8 font-bold font-Montserrat text-black text-center p-3`}>
      {props.clubName}
    </h5>
  </div>
  <div className={`overflow-hidden`}>
    <p className={`font-normal font-popins text-center text-gray-700`}>
      {props.clubDescription}
    </p>
  </div>
</div>

  );
}

export default ClubCard;
