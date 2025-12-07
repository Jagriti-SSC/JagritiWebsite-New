import React from "react";
import Marquee from "react-fast-marquee";
// import Corousel from "../corousel/Corousel";


const Sponsor = () => {
  return (
    <div className="flex flex-col gap-8 py-8 mb-10">
      <div className="flex justify-center">
        <h3
          className=" text-blue  font-Montserrat font-bold"
          style={{ fontSize: "40px" }}
        >
          SPONSORS
        </h3>
      </div>
      <Marquee style={{overflow:"hidden"}} gradient={false} speed="35" className=" mx-auto w-full">
        {/* {array.map((item, index) => (
          <Corousel key={index}></Corousel>
        ))} */}
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//umeedfoundation.co.in/"><img src="./assets/sponsors/umeed.webp" className="h-auto w-60" alt="LWT Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="https://www.pfcindia.co.in/"><img src="./assets/sponsors/pfc.jpg" className="h-auto w-60" alt="LWT Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//pregrad.in"><img src="./assets/sponsors/pregrad.webp" className="h-auto w-60" alt="LWT Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="https://www.pw.live/"><img src="./assets/sponsors/pw.webp" className="h-auto w-60 pr-8" alt="PhysicsWallah Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//theproductfolks.com"><img src="./assets/sponsors/projectfolks.webp" className="h-auto w-60" alt="LWT Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//learningwhiletravelling.com/"><img src="./assets/sponsors/lwt.webp" className="h-auto w-60" alt="LWT Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//unstop.com/"><img src="./assets/sponsors/Unstop-Logo-Blue-Small.png" className="h-auto w-60" alt="unstop Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//liveai.eu/"><img src="./assets/sponsors/liveai.webp" className="h-auto w-60" alt="iveai Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="https://www.decathlon.in/"><img src="./assets/sponsors/decathlon.webp" className="h-auto w-60" alt="decathlon Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="https://theproductspace.in/"><img src="./assets/sponsors/pspace.jpg" className="h-auto w-60" alt="productspace Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="https://daurcom.com/"><img src="./assets/sponsors/daurcom.jpg" className="h-auto w-60" alt="daurcom Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="https://www.teachforindia.org/"><img src="./assets/sponsors/teach-for-India.webp" className="h-auto w-60" alt="teachforindia Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="https://www.myanalyticsschool.com/"><img src="./assets/sponsors/mas.png" className="h-auto w-60" alt="mas Logo"></img></a>
      </Marquee>
    </div>
  );
};

export default Sponsor;
