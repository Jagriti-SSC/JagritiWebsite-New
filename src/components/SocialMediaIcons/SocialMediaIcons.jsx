import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className=" cursor-pointer flex  items-center md:w-[283px] md:h-[47px] w-[60%] justify-evenly mx-auto">
      <a href="mailto:jagriti.ssc@itbhu.ac.in">
        <Gmail className=" h-8 hover:text-red"></Gmail>
      </a>
      <a href="//instagram.com/jagriti_iitbhu?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
        <Instagram className=" h-8 hover:text-pink-400"></Instagram>
      </a>
      <a href="//facebook.com/jagriti.iitbhu/" target="_blank" rel="noopener noreferrer">
        <Facebook className=" h-8 hover:text-blue"></Facebook>
      </a>
      <a href="//linkedin.com/company/jagriti-iitbhu/" target="_blank" rel="noopener noreferrer">
        <LinkedinSquare className=" h-8 hover:text-blue"></LinkedinSquare>
      </a>
      <a href="//youtube.com/@jagritiiitbhu6436" target="_blank" rel="noopener noreferrer">
        <Youtube className=" h-8 hover:text-red"></Youtube>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
