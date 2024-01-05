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
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//pfcindia.com/Home"><img src="./assets/sponsors/pfc.webp" className="h-auto w-60" alt="LWT Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//pregrad.in"><img src="./assets/sponsors/pregrad.webp" className="h-auto w-60" alt="LWT Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//theproductfolks.com"><img src="./assets/sponsors/projectfolks.webp" className="h-auto w-60" alt="LWT Logo"></img></a>
        <a className="cursor-pointer mx-10" target="_blank" rel="noreferrer" href="//learningwhiletravelling.com/"><img src="./assets/sponsors/lwt.webp" className="h-auto w-60" alt="LWT Logo"></img></a>

      </Marquee>
    </div>
  );
};

export default Sponsor;
