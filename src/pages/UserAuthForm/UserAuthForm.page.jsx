import InputBox from "../../components/InputBox/InputBox.component";
import googleIcon from "./google.png";
import illus from './illus.png'
import { Link, useNavigate } from "react-router-dom";
import AnimationWrapper from "./page-animation";
import { useAuth } from "../../context/AuthContext";
import { useRef, useState,useContext,createContext,useEffect } from "react";
import { auth, provider } from "../../context/Firebase";
import Footer from "../../components/footer/Footer";import { collection, addDoc } from "firebase/firestore";
import { db } from "../../context/Firebase";
import Select from 'react-select';
import college from './icon/college.png';
import gender from './icon/gender.png';
import hat from './icon/hat.png';
import lock from './icon/lock.png';
import phone from './icon/phone.png';
import msg from './icon/msg.png';
import nationality from './icon/nationality.png';
import year from './icon/year.png';
import person from './icon/person.png';
import "../../App.css";
import illus2 from './illus2.png'
import infocard from './infocard.png'

import bg_image from "./userbg.png";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const userContext = createContext();

export function useUser() {
  return useContext(userContext)
}

const UserAuthForm = ({ type }) => {
  useEffect(() => {
    document.title = "Sign In | Jagriti IIT (BHU)"
  }, [])

const [authState,setAuthState] = useState(true)

const options = [
  { value: 'School Student', label: 'School Student' },
  { value: 'College Student', label: 'College Student' },
  { value: 'Working', label: 'Working' },
  { value: 'other', label: 'Other' }
];
  
  
  const { signup } = useAuth();
  const { login } = useAuth();
  const { googleAuth } = useAuth();
  const fullnameRef = useRef();
  const fullnameRef2 = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const emailRef2 = useRef();
  const passwordRef2 = useRef();
  const occupationRef2 = useRef();
  const courseRef2 = useRef();
  const yearRef2 = useRef();
  const collegeRef2 = useRef();
  const mobileNumberRef2 = useRef();
  const occupationRef = useRef();
  const courseRef = useRef();
  const yearRef = useRef();
  const collegeRef = useRef();
  const mobileNumberRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  


  const handleAuthState  = () => {
    setAuthState(prev => !prev)
  }

 
   
  async function authByGoogle(e) {
    e.preventDefault()
   await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        
        localStorage.setItem('user', JSON.stringify(user));
        setAuthState(prev => !prev)
        if(type==="sign-up"){
          navigate('/userinfo');
        } else {
          navigate('/');
        }
      
      })
      .catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
       
      });
  }
  




 

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      console.log(emailRef.current.value);
      const email=emailRef.current.value.length>0?emailRef.current.value:emailRef2.current.value
      const pass=passwordRef.current.value.length>0?passwordRef.current.value:passwordRef2.current.value
      const user = await signup(email, pass);
       console.log(user)
      //  await addDoc(collection(db, "users"), {
      //   userId: user.user.uid,
      //   fullName: fullnameRef.current.value,
      //   email: emailRef.current.value,
      //   // gender: genderRef.current.value,
      //   // nationality:nationalityRef.current.value,
      //   occupation:selectedOption.value,
      //   course:courseRef.current.value,
      //   year:yearRef.current.value,
      //   mobile:mobileNumberRef.current.value,
      //   college:collegeRef.current.value,


      // });
      navigate("/");
      console.log("User created");
    } catch (error) {
      setError("Failed to create an account");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    console.log(emailRef.current.value);
    console.log(localStorage.getItem("user"))
    console.log(emailRef.current.value.length);
      const email=emailRef.current.value.length>0?emailRef.current.value:emailRef2.current.value
      const pass=passwordRef.current.value.length>0?passwordRef.current.value:passwordRef2.current.value
    await login(email, pass)
      .then(() => {
        
        console.log("User logged in");
        
        
      })
      .catch((error) => {
        setError("Failed to log in");
      })
      .finally(() => {
        setLoading(false);
        navigate("/");
      });
    
  };
  

  

  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption)

  


  return (
    <>
       <div style={{
      backgroundImage: `url(${bg_image})`,
      backgroundSize: "cover",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
    <AnimationWrapper keyValue={type}>
         {/*  desktop view */} 
      <div className="my-[50px]">
      <section className="hidden   sm:h-[70%] sm:flex flex-col justify-start bg-white items-center mx-auto my-[50px] w-[80%] border rounded-[10px]">
        <div className="w-[100%] flex justify-center items-center mt-[40px] gap-[100px] mb-[20px]"> 
            <Link to='/signin' className={"text-xl font-bold " + (type=="sign-in"? " text-blue" :" text-gray-500")}>Sign In</Link>
            <Link to='/signup' className={"text-xl font-bold " + (type=="sign-up"? " text-blue" :" text-gray-500")}>Sign Up</Link>
        </div>
        <div className="flex flex-row justify-center items-center w-[40%] mb-[20px]">
        <hr className={"w-1/2  border-t-2  " + (type=="sign-in"? " border-blue" : " border-grey") } />
        <hr className={"w-1/2  border-t-2  " + (type=="sign-up"? " border-blue" : " border-grey") } />
        </div>
        <div className="flex flex-row w-[100%]">
        <form
          className="w-[50%]  p-8 rounded-[20px] flex-col  "
           onSubmit={(e) => ( authState ? ((type === "sign-in" ? handleLogin(e) : handleSignup(e))) : authByGoogle(e))}
          //  onSubmit={(e) => (type === "sign-in" ? handleLogin(e) : handleSignup(e))}
          
        >
          {/* <h1 className="text-4xl font-gelasio capitalize text-center mb-10">
            {type == "sign-in" ? "Welcome back" : "Join us today"}
          </h1> */}

          {error && <p>{error}</p>}

          {type != "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon={person}
              ref={fullnameRef}
            />
          ) : (
            ""
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon={msg}
            ref={emailRef}
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon={lock}
            ref={passwordRef}
          />

  
 

{type != "sign-in" ? (
              <InputBox
              name="mobile number"
              type="text"
              placeholder="Mobile Number"
              icon={phone}
              ref={mobileNumberRef}
            />
          ) : (
            ""
          )}

{/* {type != "sign-in" ? (
             <InputBox
             name="nationality"
             type="text"
             placeholder="Nationality"
             icon={nationality}
             ref={nationalityRef}
           /> 
          ) : (
            ""
          )} */}



{/* {type != "sign-in" ? (
             <InputBox
             name="gender"
             type="text"
             placeholder="Gender"
             icon={gender}
             ref={genderRef}
           />
          ) : (
            ""
          )} */}

{type != "sign-in" ? (
            <div className="my-4">
            <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    ref={occupationRef}
                    className=""
                  />
            </div>
          ) : (
            ""
          )}

{selectedOption && selectedOption.value=="College Student"? (type != "sign-in" ? (
          <InputBox
          name="college"
          type="text"
          placeholder="College"
          icon={college}
          ref={collegeRef}
        /> 
          ) : (
            ""
          )):""}


{selectedOption && selectedOption.value=="College Student"? (type != "sign-in" ? (
           <InputBox
           name="course"
           type="text"
           placeholder="Course"
           icon={hat}
           ref={courseRef}
         /> 
          ) : (
            ""
          )):""}


{selectedOption && selectedOption.value === "College Student"? (type != "sign-in" ? (

            <InputBox
            name="year"
            type="text"
            placeholder="Year"
            icon={year}
            ref={yearRef}
          />
          ) : (
            ""
          )):""}




   {/* {selectedOption && selectedOption.value === "College Student"? (type != "sign-in" ? (
          <InputBox
          name="college"
          type="text"
          placeholder="College"
          icon=""
          ref={collegeRef}
        /> 
          ) : (
            ""
          )):""} */}









  









        
          
          {type== "sign-in" ?(<Link to="/reset"><button className="text-grey font-thin text-sm  underline border-0" >Forgot Password ?</button></Link>):""}
          <button
            disabled={loading}
            className="whitespace-nowrap bg-blue text-white rounded-[5px] w-[100%] font-normal text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14 py-2"
            type="submit"
          >
            {type.replace("-", " ")}
          </button>

          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold ">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button
            onClick={handleAuthState}
            type="submit"
            className="whitespace-nowrap bg-white border border-blue text-blue rounded-[5px] py-3  text-xl capitalize hover:bg-opacity-80 flex items-center justify-center gap-4 w-[100%]  mx-auto"
          >
            <img src={googleIcon} className="w-5" />
               <span> continue with google </span>
          </button>

          {/* {type == "sign-in" ? (
            <p className="mt-6 text-dark-gry text-xl text-center">
              Don't have an account?
              <Link to="/signup" className="underline text-black text-xl ml-1">
                Join us today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-gry text-xl text-center">
              Already a member?
              <Link to="/signin" className="underline text-black text-xl ml-1">
                Sign in here
              </Link>
            </p>
          )} */}
        </form>
        <div className="flex flex-col justify-center items-center w-[50%]">
              
              {type== "sign-in" ?( <img src={illus} className= "h-[250px]" ></img>):( <img src={illus} className= "h-[350px]" ></img>)}
              

        </div>
        </div>
      </section>

      {/* Mobile view */}

      <section className="sm:hidden   sm:h-[70%] flex flex-col justify-start items-center bg-white mx-auto my-[50px] w-[80%] border rounded-[10px]">
        <div className="w-[100%] flex justify-center items-center mt-[40px] gap-[10px] mb-[20px]"> 
            <Link to='/signin' className={"text-sm font-bold " + (type=="sign-in"? " text-blue" :" text-gray-500")}>Sign In</Link>
            <Link to='/signup' className={"text-sm font-bold " + (type=="sign-up"? " text-blue" :" text-gray-500")}>Sign Up</Link>
        </div>
        <div className="flex flex-row justify-center items-center w-[40%] mb-[20px]">
        <hr className={"w-1/2  border-t-2  " + (type=="sign-in"? " border-blue" : " border-grey") } />
        <hr className={"w-1/2  border-t-2  " + (type=="sign-up"? " border-blue" : " border-grey") } />
        </div>
        <div className="flex flex-col w-[100%]">
        <div className="flex flex-col justify-center items-center w-[100%] my-[30px]">
              
              <img src={illus2}  />
              

       </div>
        <form
          className="w-[100%]  p-8 rounded-[20px] flex-col  "
           onSubmit={(e) => ( authState ? ((type === "sign-in" ? handleLogin(e) : handleSignup(e))) : authByGoogle(e))}
          //  onSubmit={(e) => (type === "sign-in" ? handleLogin(e) : handleSignup(e))}
          
        >
          {/* <h1 className="text-4xl font-gelasio capitalize text-center mb-10">
            {type == "sign-in" ? "Welcome back" : "Join us today"}
          </h1> */}

          {error && <p>{error}</p>}

          {type != "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon={person}
              ref={fullnameRef2}
            />
          ) : (
            ""
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon={msg}
            ref={emailRef2}
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon={lock}
            ref={passwordRef2}
          />

  
 

{type != "sign-in" ? (
              <InputBox
              name="mobile number"
              type="text"
              placeholder="Mobile Number"
              icon={phone}
              ref={mobileNumberRef2}
            />
          ) : (
            ""
          )}

{/* {type != "sign-in" ? (
             <InputBox
             name="nationality"
             type="text"
             placeholder="Nationality"
             icon={nationality}
             ref={nationalityRef}
           /> 
          ) : (
            ""
          )}



{type != "sign-in" ? (
             <InputBox
             name="gender"
             type="text"
             placeholder="Gender"
             icon={gender}
             ref={genderRef}
           />
          ) : (
            ""
          )} */}

{type != "sign-in" ? (
            <div className="my-4">
            <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    ref={occupationRef2}
                    className=""
                  />
            </div>
          ) : (
            ""
          )}

{selectedOption && selectedOption.value=="College Student"? (type != "sign-in" ? (
          <InputBox
          name="college"
          type="text"
          placeholder="College"
          icon={college}
          ref={collegeRef2}
        /> 
          ) : (
            ""
          )):""}


{selectedOption && selectedOption.value=="College Student"? (type != "sign-in" ? (
           <InputBox
           name="course"
           type="text"
           placeholder="Course"
           icon={hat}
           ref={courseRef2}
         /> 
          ) : (
            ""
          )):""}


{selectedOption && selectedOption.value === "College Student"? (type != "sign-in" ? (

            <InputBox
            name="year"
            type="text"
            placeholder="Year"
            icon={year}
            ref={yearRef2}
          />
          ) : (
            ""
          )):""}




   {/* {selectedOption && selectedOption.value === "College Student"? (type != "sign-in" ? (
          <InputBox
          name="college"
          type="text"
          placeholder="College"
          icon=""
          ref={collegeRef}
        /> 
          ) : (
            ""
          )):""} */}









  









        
          
          {type== "sign-in" ?(<Link to="/reset"><button className="text-grey font-thin text-sm  underline border-0" >Forgot Password ?</button></Link>):""}
          <button
            disabled={loading}
            className="whitespace-nowrap bg-blue text-white rounded-[5px] w-[100%] font-normal text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14 py-2"
            type="submit"
          >
            {type.replace("-", " ")}
          </button>

          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold ">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button
            onClick={handleAuthState}
            type="submit"
            className="whitespace-nowrap bg-white border border-blue text-blue rounded-[5px] py-3  text-[15px] capitalize hover:bg-opacity-80 flex items-center justify-center gap-4 w-[100%]  mx-auto"
          >
            <img src={googleIcon} className="w-5" />
               <span> continue with google </span>
          </button>

          {/* {type == "sign-in" ? (
            <p className="mt-6 text-dark-gry text-xl text-center">
              Don't have an account?
              <Link to="/signup" className="underline text-black text-xl ml-1">
                Join us today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-gry text-xl text-center">
              Already a member?
              <Link to="/signin" className="underline text-black text-xl ml-1">
                Sign in here
              </Link>
            </p>
          )} */}
        </form>
        <div className="flex flex-col justify-center items-center w-[100%] mb-[30px]">
              
               <img src={infocard}  />
               

        </div>
        </div>
      </section>
      </div>
    </AnimationWrapper>
    <Footer />
    </div>
    </>
  );
};

export default UserAuthForm;
