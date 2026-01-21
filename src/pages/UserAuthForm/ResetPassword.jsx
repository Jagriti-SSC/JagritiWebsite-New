import React,{useState} from 'react'
import { auth } from "../../context/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import InputBox from '../../components/InputBox/InputBox.component';
import {useRef} from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const ResetPassword = () => {

    const emailRef = useRef();
    const [status,setStatus] = useState('')

    const handlePasswordReset = async (e) => {
        e.preventDefault()
        console.log(emailRef.current.value)
        await sendPasswordResetEmail(auth, emailRef.current.value)
        .then(() => {
         console.log(emailRef.current.value);
         setStatus('Password reset email sent!')
         
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         
       });
       }


  return (
    <div>
      
      <section className="h-[100vh] flex justify-center items-center">
        <form
          className="w-[80%] max-w-[400px] border p-8 rounded-[20px]  "
          
          onSubmit={(e) =>
            handlePasswordReset(e)
          }
        >

         <p className='text-green-500'>{status}</p>
        
          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-rr-envelope"
            ref={emailRef}
          />

          <button className='w-[100%] bg-black text-white rounded-[10px] h-[30px]' type="submit">Reset Password</button>
          
         
          

          
        </form>
      </section>
    
    </div>
  )
}

export default ResetPassword;
