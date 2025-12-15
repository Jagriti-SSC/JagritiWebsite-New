import React from "react";
import Marquee from "react-fast-marquee";
// import Corousel from "../corousel/Corousel";
import "./galleryFirstLine.css";


import img1 from '../../assets/images/jagriti_img1.webp';
import img2 from '../../assets/images/jagriti_img2.webp';
import img3 from '../../assets/images/jagriti_img3.webp';
import img4 from '../../assets/images/jagriti_img4.webp';
import img5 from '../../assets/images/jagriti_img5.webp';
import img6 from '../../assets/images/jagriti_img6.webp';
import img7 from '../../assets/images/jagriti_img7.webp';
import img8 from '../../assets/images/jagriti_img8.webp';
import img9 from '../../assets/images/jagriti_img9.webp';
import img10 from '../../assets/images/jagriti_img10.webp';
import img11 from '../../assets/images/jagriti_img11.webp';
import img12 from '../../assets/images/jagriti_img12.webp';
import img13 from '../../assets/images/jagriti_img13.webp';
import img14 from '../../assets/images/jagriti_img14.webp';
import img15 from '../../assets/images/jagriti_img15.webp';
import img16 from '../../assets/images/jagriti_img16.webp';
import img17 from '../../assets/images/jagriti_img17.webp';
import img18 from '../../assets/images/jagriti_img18.webp';
import img19 from '../../assets/images/jagriti_img19.webp';
import img20 from '../../assets/images/jagriti_img20.webp';
import { Diversity } from "styled-icons/fluentui-system-filled";

const GalleryFirstLine = () => {
  return (
    <div style={{overflow:"hidden"}} className="flex flex-col md:mt-44 relative md: w-[130vw]">
      <div className="flex justify-center">
        
      </div >
      <Marquee style={{overflow:"hidden"}} gradient={false} speed="25" className="py-5 w-full mx-auto relative" >
        
        <p className="cursor-pointer mx-10 font-bold">One Frame One Cause</p>
        <p className="cursor-pointer mx-10 font-bold">Visual Catalysts</p>
        <p className="cursor-pointer mx-10 font-bold">AI Hackathon</p>
        <p className="cursor-pointer mx-10 font-bold">Spot The Green</p>
        <p className="cursor-pointer mx-10 font-bold">Social Entrepreneurship Hackathon</p>
        <p className="cursor-pointer mx-10 font-bold">Beautiful Impact</p>
        <p className="cursor-pointer mx-10 font-bold">Page Painting</p>
        <p className="cursor-pointer mx-10 font-bold">Eye Checkup</p>
        <p className="cursor-pointer mx-10 font-bold">Policy Challenge</p>
        <p className="cursor-pointer mx-10 font-bold">Global Debate</p>
        <p className="cursor-pointer mx-10 font-bold">NGO Activity</p>
        <p className="cursor-pointer mx-10 font-bold">Kulhad/Gullak Painting</p>
        <p className="cursor-pointer mx-10 font-bold">Leadership Symposium</p>
        <p className="cursor-pointer mx-10 font-bold">Self Defence Workshop</p>

      </Marquee>
      <Marquee style={{overflow:"hidden"}} direction="right" gradient={false} speed="35" className="py-5 w-full mx-auto relative" >
        <img src={img1} className=" mx-[10px] box-shadow h-40 " alt="Jagriti Image"></img>
        <img src={img2} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img3} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img4} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img14} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img5} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img6} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img16} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img17} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>

      </Marquee>
      <Marquee style={{overflow:"hidden"}} gradient={false} speed="45" className="py-5 mx-auto w-full relative" >
        <img src={img7} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img8} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img13} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img19} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img20} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img11} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img1} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img2} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>

      </Marquee>
      <Marquee style={{overflow:"hidden"}} gradient={false} direction="right" speed="55" className="py-5 mx-auto w-full relative" >
        <img src={img12} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img13} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img14} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img15} className="h-40  mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img16} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img17} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img6} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img7} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
      </Marquee>
      <Marquee style={{overflow:"hidden"}} gradient={false} speed="65" className="py-5 mx-auto w-full relative" >
        <img src={img3} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img5} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img14} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img9} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img19} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img20} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img2} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
        <img src={img18} className="h-40 mx-[10px] box-shadow" alt="Jagriti Image"></img>
      </Marquee>
    </div>
  );
};

export default GalleryFirstLine;
