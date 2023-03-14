import React from 'react'

const FooterIcons = (props) => {
  return (
    <>
        
        {
            props.name==="SSCmain" ? (
                    
        <div className="flex flex-col justify-items-center items-center col-start-1 col-end-3 row-start-1 row-end-2 py-5 md:py-0">
          <img
            src="../assets/SSCmain.svg"
            alt="SSCmain"
            className="md:h-[128px] md:w-[259px] h-[80%] w-[70%] "
          ></img>
        </div>

          ) :(
                <div className="flex flex-col  items-center md:justify-around justify-evenly">
                <img
                    src={props.img}
                    alt={props.alt}
                    className="md:w-[63.92px] md:h-[66.43px] h-[40%] w-[35%]"
                ></img>      
                <p className=' text-xs txs:text-sm xs:text-lg ss:text-[22px] smd:text-[22px]  md:text-xl text-center'>{props.name}</p>
                </div>
            )
        }
        
       


    </>
  )
}

export default FooterIcons