import React from 'react'
import useMediaQuery from "../../hooks/useMediaQuery"
const Connect = () => {
  const islower = useMediaQuery()
  return (
    <div className='md:w-[456px] md:h-[58px] sm-w-[470x]  flex  items-center bg-white rounded-lg  ss-w-full  ss:h-12 mx-auto justify-between h-9 gap-2'>
        <input className=' font-popins ml-4 text-black outline-none flex basis-3' placeholder='email address' required  size={12}>
           
        </input>
        <button className='md:w-[30%] h-[60%] md:h-[75%] sm:h-[75%] p-2 bg-light-black  rounded-md flex justify-center items-center outline-none mr-1 md:mx-2 '>
            <p className=' sm:text-sm md:text-lg ss:text-[10px] text-[6px]'>Remind me</p>
        </button>
    </div>
  )
}

export default Connect