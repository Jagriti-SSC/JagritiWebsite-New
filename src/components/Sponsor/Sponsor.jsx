import React from "react";
import Marquee from "react-fast-marquee";
import Corousel from "../corousel/Corousel";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        {array.map((item, index) => (
          <Corousel key={index}></Corousel>
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsor;
