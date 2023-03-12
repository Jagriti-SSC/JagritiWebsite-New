import React from 'react'
import {motion} from "framer-motion"

const Card = ({data,open}) => {
  return (
    <motion.div onClick={open} className="md:min-h-[380px] md:w-[350px] ss:h-[350px] ss:w-[300px] sm:h-[400px] sm:w-[400px]  h-[260px] w-[200px]  cursor-pointer mx-auto rounded-tl-[25px] rounded-br-[25px] flex flex-col justify-evenly items-center border-black border-2" >
    <motion.h2 className=" font-popins font-medium md:text-3xl  sm:text-2xl ss:text-xl text-lg text-blue">
      {data.eventName}
    </motion.h2>
    <motion.img src={data.imageURL} className=" w-[70%] md:h-[80%] rounded-3xl sm:h-[60%] h-[60%]"></motion.img>
  </motion.div>

  )
}

export default Card