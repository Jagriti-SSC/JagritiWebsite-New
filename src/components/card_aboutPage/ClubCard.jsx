import React from "react";
import "./ClubCard.css";

function ClubCard(props) {
  return (
    <div>
      <div className="club_card lg:h-[min(450px,75vh)] w-[min(450px,75vw)] bg-white rounded-lg ">
        <div className="rounded-full w-[150px] h-[150px] mx-auto p-4">
          <img
            className="club_img w-[130px] h-[130px]"
            src={`/assets/${props.clubLogo}`}
            alt=""
          />
        </div>
        <div className="">
          <h5 className="text-2xl mt-8 font-bold text-black text-center p-3">
            {props.clubName}
          </h5>
        </div>
        <div className="overflow-hidden">
          <p className="p-5 font-normal text-gray-700 text-left">
            {props.clubDescription}
          </p>
        </div>
      </div>

      {/* <div class="bg-white shadow-md rounded-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg w-72 h-72 relative">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:-translate-y-full">
          <img
            src="your-logo.png"
            alt="Your logo"
            class="max-w-full h-auto block"
          />
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-300 ease-in-out bg-white">
          <h2 class="text-lg font-bold mb-2">Your heading</h2>
          <p class="text-gray-700 text-sm">Your paragraph</p>
        </div>
      </div> */}

      {/* <div class="club_card">
        <div class="club_imgbox">
          <img className="club_img" src={`/assets/${props.clubLogo}`} alt="" />
        </div>
        <div class="club_content">
          <h2>{props.clubName}</h2>
          <p>{props.clubDescription}</p>
        </div>
      </div> */}
    </div>
  );
}

export default ClubCard;
