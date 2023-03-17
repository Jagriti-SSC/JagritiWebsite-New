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

   <>
   

<div className="flex justify-between ss:max-w-[500px]  md:basis-4/5 xs:basis-3/4 basis-full rounded-lg bg-white items-stretch mx-auto py-2 px-[6px] max-w-full gap-1">
    <input  onChange={changeEmail}
        type="email"
        value={email} required className=" text-black  pl-1 w-[70%] md:pl-8  outline-none border-none focus:ring-0 placeholder:md:text-start placeholder:text-center " placeholder="email address" />
    <label onClick={saveEmail} className=" bg-black cursor-pointer shrink-0 text-white px-4 md:px-6 py-2 rounded-lg sm:text-sm md:text-lg ss:text-[16px] text-[14px] min-w-max">remind me</label>
</div>


</>



  );
};

export default Connect;
