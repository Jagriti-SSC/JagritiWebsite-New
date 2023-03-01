import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import Connect from "../Connect/Connect";

const Footer = () => {
  

  return (
    <div className="bg-light-black   text-white pb-12">
      <div className="md:flex md:flex-row justify-evenly py-10 font-popins grid grid-cols-2 grid-rows-3">
        <div className="flex flex-col justify-items-center items-center ">
          <img
            src="../assets/kashiUtkarsh.svg"
            alt="SSCmain"
            className="md:w-[63.92px] md:h-[66.43px]"
          ></img>
          <p>Kashi Utkarsh</p>
        </div>
        <div className="flex flex-col justify-items-center items-center">
          <img
            src="../assets/kashiUtkarsh.svg"
            alt="SSCmain"
            className="md:w-[63.92px] md:h-[66.43px]"
          ></img>
          <p>Social Projects Club</p>
        </div>
        <div className="flex flex-col justify-items-center items-center col-start-1 col-end-3 row-start-1 row-end-2">
          <img
            src="../assets/SSCmain.svg"
            alt="SSCmain"
            className="md:h-[128px] md:w-[259px] "
          ></img>
        </div>
        <div className="flex flex-col justify-items-center items-center ">
          <img
            src="../assets/sahyog.svg"
            alt="SSCmain"
            className="md:w-[63.92px] md:h-[66.43px]"
          ></img>
          <p>Sahyog Club</p>
        </div>
        <div className="flex flex-col justify-items-center items-center">
          <img
            src="../assets/health.svg"
            alt="SSCmain"
            className="md:w-[63.92px] md:h-[66.43px]"
          ></img>
          <p>Health and Hygiene</p>
        </div>
      </div>

      <div className="bg-white w-[85%] h-0.5 m-auto mb-7 hidden md:block"></div>

      <div className=" font-Montserrat flex justify-around font-medium md:flex-row flex-col-reverse gap-12  items-center ">
        <div className="flex flex-col items-center justify-around  gap-7 w-[80%] justify-items-center content-center ">
          <div>
            <h3 className="text-3xl ">Contact Us</h3>
          </div>
          <div className="md:w-auto sm-w-[70%] w-full">
            <SocialMediaIcons></SocialMediaIcons>
          </div>
        </div>
        <div className="bg-white w-0.5 h-[126px] hidden md:block"></div>

        <div className="flex flex-col items-center justify-around gap-7 w-[80%]  ">
          <div>
            <h3 className="text-3xl">Connect with us</h3>
          </div>

          <div className="w-full flex items-center ">
            <Connect></Connect>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
