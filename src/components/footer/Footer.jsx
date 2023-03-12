import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import Connect from "../Connect/Connect";
import FooterIcons from "../FooterIcons/FooterIcons";

const Footer = () => {
  
  const Icons = [{
    name:"Kashi Utkarsh",
    img:"../assets/kashiUtkarsh.svg",
    alt:"Kashi Utkarsh",
  },{
    name:"Social Projects Club",
    img:"../assets/SPC_logo.png",
    alt:"Social Projects Club",
  },{
    name:"SSCmain",
    img:"../assets/SSCmain.svg",
    alt:"SSCmain",
  },{
    name:"Sahyog Club",
    img:"../assets/sahyog.svg",
    alt:"Sahyog Club",
  },{
    name:"Health and Hygiene",
    img:"../assets/health.svg",
    alt:"Health and Hygiene",
  },]

  return (
    <div className="bg-light-black   text-white pb-12">
      <div className="md:flex md:flex-row justify-evenly py-10 font-popins grid grid-cols-2 grid-rows-3">
       
      {
        Icons.map(item=><FooterIcons
          name = {item.name}
          alt = {item.alt}
          img = {item.img}
        >

        </FooterIcons>)
      }
      
      
      </div>

      <div className="bg-white w-[85%] h-0.5 m-auto mb-7 hidden md:block"></div>

      <div className=" font-Montserrat flex justify-around font-medium md:flex-row flex-col-reverse gap-12  items-center ">
        <div className="flex flex-col items-center justify-around  gap-7 w-[80%] justify-items-center content-center ">
          <div>
            <h3 className="md:text-3xl text-xl ">Contact Us</h3>
          </div>
          <div className="md:w-auto sm-w-[70%] w-full">
            <SocialMediaIcons></SocialMediaIcons>
          </div>
        </div>
        <div className="bg-white w-0.5 h-[126px] hidden md:block"></div>

        <div className="flex flex-col items-center justify-around gap-7 w-[80%] ">
          <div>
            <h3 className="md:text-3xl text-xl">Connect with us</h3>
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
