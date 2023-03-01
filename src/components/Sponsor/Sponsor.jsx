import React,{useState,useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import Corousel from '../corousel/Corousel'
const array = [1,2,3,4,5]

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
        <h3 className=' text-blue text-5xl font-Montserrat font-bold'>
        SPONSORS
        </h3>
    </div>
    <div className=' mx-auto w-full'>
        <motion.div className='  cursor-grab mx-[20%]  overflow-hidden' ref={carousel}>
            <motion.div className='flex items-center gap-11 ' drag="x" dragConstraints={{right:0,left:-width}}>
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