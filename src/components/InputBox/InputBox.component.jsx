import React ,{ useState, useRef } from "react";

//{ name , type , id , value , placeholder,icon, ref }
const InputBox = React.forwardRef(({ name , type , id , value , placeholder,icon},ref) => {

    const [passwordVisisble, setPasswordVisisble] = useState(false);
    // const fullnameRef = useRef()
    // const emailRef = useRef()
    // const passwordRef = useRef()

    return(
        <div className="relative w-[100%] mb-4 ">
            <input 
              name={name}
              type={type == "password" ? passwordVisisble ? "text":"password" : type}
              placeholder={placeholder}
              defaultValue={value}
              id={id}
              ref={ref}
              className="w-[100%] rounded-md px-[20px] py-2 bg-gry  border border-gry focus:bg-transparent placeholder:text-black placeholder:justify-center"
            >
            </input>
            
            <i className={"fi " + icon + " absolute left-4 top-1/3 "}></i>

            {
                type == "password" ?
                <i className={"fi fi-rr-eye"+ (!passwordVisisble? "-crossed":"") +" absolute  top-1/2 -translate-y-1/2 left-[auto] right-4 cursor-pointer"}
                onClick={() => {
                    setPasswordVisisble(currentVal => !currentVal)
                }}></i>
                :""
            }

        </div>
    )
})

export default InputBox