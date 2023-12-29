import { useState } from "react";


const InputBox = ({ name , type , id , value , placeholder,icon }) => {

    const [passwordVisisble, setPasswordVisisble] = useState(false);

    return(
        <div className="relative w-[100%] mb-4">
            <input
              name={name}
              type={type == "password" ? passwordVisisble ? "text":"password" : type}
              placeholder={placeholder}
              defaultValue={value}
              id={id}
              className="w-[100%] rounded-md p-4 bg-gry pl-12 border border-gry focus:bg-transparent placeholder:text-black"
            >
            </input>
            <i className={"fi " + icon + " absolute left-4 top-1/2 -translate-y-1/2"}></i>

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
}

export default InputBox