import React,{useEffect, useState} from 'react'
import {motion} from "framer-motion"

const Card = ({data,open,index}) => {
  



  const style = (index%2 === 0) ? "md:rounded-[25px] md:rounded-bl-none": "md:rounded-[25px] md:rounded-br-none";
  
  
    
  return (
    <motion.div onClick={open} className= {` md:min-h-[380px] md:w-[350px] ss:h-[350px] ss:w-[300px] sm:h-[400px] sm:w-[400px]  h-[260px] w-[200px]  cursor-pointer mx-auto rounded-tl-[25px] rounded-br-[25px] flex flex-col justify-evenly items-center border-black border gap-3 ${style} py-4`} >
    <motion.h2 className=" font-popins font-medium md:text-3xl  sm:text-2xl ss:text-xl text-lg text-blue mt-2">
      {data.eventName}
    </motion.h2>
    <motion.img src={data.imageURL} className=" h-[70%] md:max-h-[80%] rounded-3xl w-[90%] sm:h-[80%] "></motion.img>
    <motion.button className=" outline outline-1 outline-black py-1  px-8 rounded-lg font-popins mb-2 text-blue">Know More</motion.button>
  </motion.div>

  )
}

export default Card