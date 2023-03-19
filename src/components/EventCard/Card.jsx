import React,{useEffect, useState} from 'react'
import {motion} from "framer-motion"

const Card = ({data,open,index}) => {
  



  const style = (index%2 === 0) ? "md:rounded-[25px] md:rounded-bl-none": "md:rounded-[25px] md:rounded-br-none";
  
  
    
  return (
    <motion.div onClick={open} className= {` md:min-h-[380px] md:w-[350px] ss:min-h-[350px] ss:w-[300px] sm:min-h-[400px] sm:w-[400px]  h-min-h-[260px] w-[250px] max-h-max  cursor-pointer mx-auto rounded-tl-[25px] rounded-br-[25px] flex flex-col justify-evenly items-center border-black border gap-3 ${style} py-4`} >
    <motion.h2 className=" font-popins font-medium md:text-3xl text-center sm:text-xl ss:text-lg text-sm text-blue mt-2">
      {data.eventName}
    </motion.h2>
    <motion.img src={data.imageURL} className=" max-h-[70%] md:h-[270px] rounded-3xl w-[90%] sm:max-h-[80%] h-[200px] "></motion.img>
    <motion.button className=" outline outline-1 hover:bg-blue hover:text-white outline-black py-1  px-8 rounded-lg font-popins mb-2 text-blue">Know More</motion.button>
  </motion.div>

  )
}

export default Card