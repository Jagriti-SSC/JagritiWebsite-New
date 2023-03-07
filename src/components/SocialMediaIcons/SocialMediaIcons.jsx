import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className=" cursor-pointer flex  items-center md:w-[283px] md:h-[47px] w-[60%] justify-evenly mx-auto">
      <a href="#fjhgh">
        <Gmail className=" h-8 hover:text-red"></Gmail>
      </a>
      <a href="#fjhgh">
        <Instagram className=" h-8 hover:text-pink-400"></Instagram>
      </a>
      <a href="#fjhgh">
        <Facebook className=" h-8 hover:text-blue"></Facebook>
      </a>
      <a href="#fjhgh">
        {" "}
        <LinkedinSquare className=" h-8 hover:text-blue"></LinkedinSquare>
      </a>
      <a href="#fjhgh">
        {" "}
        <Youtube className=" h-8 hover:text-red"></Youtube>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
