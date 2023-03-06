import React,{useState,useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import Corousel from '../corousel/Corousel'
const array = [1,2,3,4,5,6,7,8,9]

const Sponsor = () => {
    const [width,setWidth]=useState(0);
    const carousel = useRef();
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
        console.log(carousel.current.offsetWidth);
        console.log(carousel.current.scrollWidth);
    },[])
  return (
    <div className='flex flex-col gap-8 py-8 mb-7'>
    <div className='flex justify-center'>
        <h3 className=' text-blue  font-Montserrat font-bold md:text-3xl sm:text-2xl text-xl lg:text-5xl'>
        SPONSORS
        </h3>
    </div>
    <div className=' mx-auto w-full'>
        <motion.div className='  cursor-grab  overflow-hidden' ref={carousel}>
            <motion.div className='flex items-center gap-9 ' drag="x" dragConstraints={{right:0}}>
                {
                    array.map(item => 
                    <motion.div className='md:min-w-[15rem] min-w-[10rem]'>
                    <Corousel>

                    </Corousel>
                    </motion.div>
                   )
                }
            </motion.div>
        </motion.div>
    </div>
   
    </div>
    
    
  )
}

export default Sponsor