import React from "react";
import { motion } from "framer-motion";

const CardProfile = ({ data, open, index}) => {
  const style =
    index % 1 === 0
      ? "md:rounded-[25px] md:rounded-bl-none"
      : "md:rounded-[25px] md:rounded-br-none";

  return (
    <motion.div
      onClick={open}
      className={` md:min-h-[380px] md:w-[350px] ss:min-h-[350px] ss:w-[300px] sm:min-h-[400px] sm:w-[400px]  h-min-h-[260px] w-[250px] max-h-max  cursor-pointer mx-auto rounded-tl-[25px] rounded-br-[25px] flex flex-col justify-evenly items-center border-black border gap-3 ${style} py-4`}
    >
      <motion.h2 className=" font-popins font-medium md:text-3xl text-center sm:text-xl ss:text-lg text-sm text-blue mt-2">
        {data.eventName}
      </motion.h2>
      <motion.img
        src={data.imageURL}
        className=" max-h-[70%] md:h-[270px] rounded-3xl w-[90%] sm:max-h-[80%] h-[200px] "
      ></motion.img>
      <motion.button
        onClick={open}
        className=" outline outline-1 hover:bg-blue hover:text-white outline-black py-1  px-8 rounded-lg font-popins mb-2 text-blue"
      >
        Know More
      </motion.button>
      {data.status==="Pending"?(<button className="bg-[#FCD336] text-black py-2 px-3 rounded pointer-events-none">
        <i class="fi fi-rr-loading"></i> Pending
      </button>):(<button className="bg-[#42bb2a] text-white py-2 px-4 rounded pointer-events-none">
        <i class="fi fi-ss-check-circle"></i> Verified
      </button>)}
      {/* <button className="bg-[#42bb2a] text-white py-2 px-4 rounded pointer-events-none">
        <i class="fi fi-ss-check-circle"></i> Verified
      </button>
      <button className="bg-[#FCD336] text-black py-2 px-3 rounded pointer-events-none">
        <i class="fi fi-rr-loading"></i> Pending
      </button> */}
      {/* <button className="bg-[#fc3636] text-white py-2 px-3 rounded pointer-events-none">
        <i class="fi fi-sr-cross-circle"></i> Payment Rejected
      </button> */}
    </motion.div>
  );
};

export default CardProfile;
