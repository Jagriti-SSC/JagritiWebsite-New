import React from 'react'

const Connect = () => {
  return (
    <div className='md:w-[456px] md:h-[58px] flex  items-center bg-white rounded-lg  w-full  h-16 mx-auto justify-between'>
        <input className=' font-popins ml-4 text-black outline-none' placeholder='email address' required>
           
        </input>
        <button className='w-[30%] h-[60%] md:h-[75%] sm:h-[75%] p-2 bg-light-black  rounded-md flex justify-center items-center outline-none mr-1 md:mx-2'>
            <p className=' sm:text-sm md:text-lg text-xs '>Remind me</p>
        </button>
    </div>
  )
}

export default Connect