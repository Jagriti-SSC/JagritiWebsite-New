import React, { useState } from "react";
import { useFirebase } from "../../context/Firebase";
import toast from "react-hot-toast";
import useMediaQuery from "../../hooks/useMediaQuery";

const Connect = () => {
  
  const isAboveLowerScreen = useMediaQuery("(min-width:350px)")
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const saveEmail = () => {
    if (validateEmail()) {
      const saveData = firebase.addDocument("newsletter", { email });
      toast.promise(
        saveData,
        {
          loading: "Setting Email Reminder",
          success: (data)=>{
              setEmail("");
              return "We will remind you!"
          },
          error: "Error while setting reminder!",
        }
      );
    } else {
      toast.error("Invalid Email");
      return;
    }
  };
  return (
    <div className="md:w-[456px] md:h-[58px]   flex  items-center bg-white rounded-lg  xs:w-[70%] w-[100%]  ss:h-12 mx-auto justify-between h-9 ">
      <input
        onChange={changeEmail}
        type="email"
        value={email}
        className=" font-popins ml-4 md:h-[58px] shrink ss:h-12 h-9 text-black border-none focus:ring-0   placeholder:md:text-sm placeholder:text-xs"
        placeholder="Your Email Address"
        required
        size={isAboveLowerScreen? 12:3}
      ></input>
      <button
        className="md:w-[30%] h-[60%] md:h-[75%]  sm:h-[75%] min-w-max p-3 bg-light-black  rounded-md flex justify-center items-center outline-none mr-1 md:mx-2 "
        onClick={saveEmail}
      >
        <p className=" sm:text-sm md:text-lg ss:text-[16px] text-[8px]">
          Remind me
        </p>
      </button>
      
    </div>
  );
};

export default Connect;
