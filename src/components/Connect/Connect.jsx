import React, { useState } from "react";
import { useFirebase } from "../../context/Firebase";
import toast from "react-hot-toast";

const Connect = () => {
  
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
    <div className="md:w-[456px] md:h-[58px] sm-w-[470x]  flex  items-center bg-white rounded-lg  ss-w-full  ss:h-12 mx-auto justify-between h-9 gap-2">
      <input
        onChange={changeEmail}
        type="email"
        value={email}
        className=" font-popins ml-4 md:h-[58px] ss:h-12 h-9 text-black border-none focus:ring-0 flex basis-3  placeholder:md:text-sm placeholder:text-xs"
        placeholder="Your Email Address"
        required
        size={12}
      ></input>
      <button
        className="md:w-[30%] h-[60%] md:h-[75%] sm:h-[75%] p-3 bg-light-black  rounded-md flex justify-center items-center outline-none mr-1 md:mx-2 "
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
