import React,{useState} from 'react'
import { motion } from "framer-motion";
import Button from '../UI/button/Button';

const Modal = ({ data, close }) => {
    const [content,setContent] = useState("Overview");

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div className=" md:bg-event-grey bg-white flex gap-3  md:flex-row  flex-col    md:w-[890px] md:h-[402px]   w-[70%]   xs:h-[80%] xxs:h-[500px%] h-[600px] smd:h-[500px] sm:h-[600px]  font-popins m-0 p-0 rounded-2xl" variants={modalVariants}
    onClick={(e) => e.stopPropagation()} >
    <motion.div className=" rounded-2xl bg-white z-40 flex flex-col items-center justify-evenly md:min-w-[300px] md:max-w-[300px] max-h-[200px] md:max-h-full ">
    <motion.h1 className=" md:text-3xl  sm:text-2xl ss:text-xl text-lg font-bold">{data.eventName}</motion.h1>
    <motion.img src={data.imageURL} className="rounded-2xl md:w-[75%] h-[50%] md:h-[70%] "  variants={imageVariants}></motion.img>
    </motion.div>
    
    <motion.div className="flex flex-col md:items-start items-center md:mx-[41px] smd:mx-[34px] sm:mx-[25px] xs:mx-[26px] mx-[10px] p-0  md:min-w-[480px] md:h-full sm:min-h-[60%] ss:min-h-[30%] min-h-[50%]" variants={imageVariants}>
    <motion.div className="flex  md:text-2xl sm:text-xl ss:text-lg text-sm py-[15px] items-center justify-between w-[100%]">
    <a className="hover:underline" onClick={()=> setContent("Overview")} href="#jgf">Overview</a>
    <a className="hover:underline" onClick={()=> setContent("Timeline")} href="#ouygvp">Timeline</a>
    <a className="hover:underline" onClick={()=> setContent("Contact")}  href="#ukgv">Contact</a>
    </motion.div>

    <motion.div className=" w-[100%] mb-[40px] min-h-[50%]">
      {
        (content==="Overview") ? <p className=' md:text-lg sm:text-sm text-xs font-light from-event-text-grey '>{data.overview}</p> : 
        ((content==="Contact")? (
          //Contact
          <motion.div className=' text-blue md:text-lg sm:text-sm text-xs'>
            {data.contact.map((item)=>
            <p>{item.contactName} : {item.number}</p>
            )}
        </motion.div>):(<p>Timeline</p>))
      }
    </motion.div>

      <motion.div className='md:mb-[37px] mb-[20px] mt-auto'>
      <Button text="Register" path="/" ></Button>
      </motion.div>
    
    
    
    </motion.div>
    

    </motion.div>
  )

}

export default Modal