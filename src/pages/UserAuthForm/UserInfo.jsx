import InputBox from "../../components/InputBox/InputBox.component";
import googleIcon from "./google.png";
import illus from './illus.png'
import { Link, useNavigate } from "react-router-dom";
import AnimationWrapper from "./page-animation";
import { useAuth } from "../../context/AuthContext";
import { useRef, useState,useContext,createContext } from "react";
import { auth, provider } from "../../context/Firebase";
import { collection, addDoc } from "firebase/firestore";
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
import { useFormContext } from './FormContext';
import infocard from './infocard.png'
import illus2 from './illus2.png'


// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// const userContext = createContext();

// export function useUser() {
//   return useContext(userContext)
// }

const UserInfo = ({ type }) => {

// const [authState,setAuthState] = useState(true)

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
  const emailRef = useRef();
  const passwordRef = useRef();
  // const genderRef = useRef();
  // const nationalityRef = useRef();
  const occupationRef = useRef();
  const fullnameRef2 = useRef();
  const courseRef = useRef();
  const yearRef = useRef();
  const collegeRef = useRef();
  const mobileNumberRef = useRef();
  const courseRef2 = useRef();
  const yearRef2 = useRef();
  const collegeRef2 = useRef();
  const occupationRef2 = useRef();
  const mobileNumberRef2 = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  
  const {  setFormFilled } = useFormContext();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
    const name=fullnameRef.current.value.length>0?fullnameRef.current.value:fullnameRef2.current.value
      const email=auth.currentUser.email
      const mobile=mobileNumberRef.current.value.length>0?mobileNumberRef.current.value:mobileNumberRef2.current.value
      const college = collegeRef.current?.value || collegeRef2.current?.value || null;
      const course = courseRef.current?.value || courseRef2.current?.value || null;
      const year = yearRef.current?.value || yearRef2.current?.value || null;
      const formData={
        name: name,
        mobile:mobile,
        email: email,
        college:college,
        course:course,
        year:year,
      }
      const url=process.env.REACT_APP_BASE_URL
      
      const response = await fetch(`${url}/auth/createuser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        setFormFilled();
        navigate("/");
        console.log("User created");
      }
    } catch (error) {
      setError("Failed to create an account");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setError("");
//     setLoading(true);
//     console.log(emailRef.current.value);
//     console.log(localStorage.getItem("user"))
//     await login(emailRef.current.value, passwordRef.current.value)
//       .then(() => {
        
//         console.log("User logged in");
        
        
//       })
//       .catch((error) => {
//         setError("Failed to log in");
//       })
//       .finally(() => {
//         setLoading(false);
//         navigate("/");
//       });
    
//   };
  

  

  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption)

  


  return (
    <div className=""> 
    <AnimationWrapper keyValue={type}>
      <section className="hidden h-[70%] sm:flex flex-col justify-start items-center mx-auto my-[50px] w-[80%] border rounded-[10px]">
        {/* <div className="w-[100%] flex justify-center items-center mt-[40px] gap-[100px] mb-[20px]"> 
            <Link to='/signin' className={"text-xl font-bold " + (type=="sign-in"? " text-blue" :" text-gray-500")}>Sign In</Link>
            <Link to='/signup' className={"text-xl font-bold " + (type=="sign-up"? " text-blue" :" text-gray-500")}>Sign Up</Link>
        </div> */}
        <div className="flex flex-row justify-center items-center w-[40%] ">
        {/* <hr className={"w-1/2  border-t-2  " + (type=="sign-in"? " border-blue" : " border-grey") } />
        <hr className={"w-1/2  border-t-2  " + (type=="sign-up"? " border-blue" : " border-grey") } /> */}
        <p className="my-[20px]">  Fill the form to proceed further.</p>
        </div>
        <div className="flex flex-row w-[100%]">
        <form
          className="w-[100%]  sm:w-[50%]  p-8 rounded-[20px] flex-col  "
           onSubmit={(e) => ( handleFormSubmit(e))}
          //  onSubmit={(e) => (type === "sign-in" ? handleLogin(e) : handleSignup(e))}
          
        >
          {/* <h1 className="text-4xl font-gelasio capitalize text-center mb-10">
            {type == "sign-in" ? "Welcome back" : "Join us today"}
          </h1> */}

          {/* {error && <p>{error}</p>} */}

          
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon={person}
              ref={fullnameRef}
            />
         
          {/* <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon={msg}
            ref={emailRef}
          /> */}

          {/* <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon={lock}
            ref={passwordRef}
          /> */}

  
 


              <InputBox
              name="mobile number"
              type="text"
              placeholder="Mobile Number"
              icon={phone}
              ref={mobileNumberRef}
            />
         


             {/* <InputBox
             name="nationality"
             type="text"
             placeholder="Nationality"
             icon={nationality}
             ref={nationalityRef}
           />  */}
        




             {/* <InputBox
             name="gender"
             type="text"
             placeholder="Gender"
             icon={gender}
             ref={genderRef}
           /> */}
          


            <div className="my-4">
            <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    ref={occupationRef}
                    className=""
                  />
            </div>
          

{selectedOption && selectedOption.value=="College Student"?  (
          <InputBox
          name="college"
          type="text"
          placeholder="College"
          icon={college}
          ref={collegeRef}
        /> 
          ):""}


{selectedOption && selectedOption.value=="College Student"? (
           <InputBox
           name="course"
           type="text"
           placeholder="Course"
           icon={hat}
           ref={courseRef}
         /> 
          ):""}


{selectedOption && selectedOption.value=="College Student"?  (
            <InputBox
            name="year"
            type="text"
            placeholder="Year"
            icon={year}
            ref={yearRef}
          />
          ):""}




  









        
          
          {/* {type== "sign-in" ?(<Link to="/reset"><button className="text-grey font-thin text-sm  underline border-0" >Forgot Password ?</button></Link>):""} */}
          <button
            disabled={loading}
            className="whitespace-nowrap bg-blue text-white rounded-[5px] w-[100%] font-normal text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14 py-2"
            type="submit"
          >
            Submit
          </button>

          {/* <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold ">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button
            onClick={handleAuthState}
            type="submit"
            className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 flex items-center justify-center gap-4 w-[90%]  mx-auto"
          >
            <img src={googleIcon} className="w-5" />
            continue with google
          </button> */}

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
        <div className="hidden sm:flex flex-col justify-center items-center w-[50%]">
              
               <img src={illus} className= "h-[250px]" ></img>
              

        </div>
        </div>
      </section>
      <section className="sm:hidden h-[70%] flex flex-col justify-start items-center mx-auto my-[50px] w-[80%] border rounded-[10px]">
        {/* <div className="w-[100%] flex justify-center items-center mt-[40px] gap-[100px] mb-[20px]"> 
            <Link to='/signin' className={"text-xl font-bold " + (type=="sign-in"? " text-blue" :" text-gray-500")}>Sign In</Link>
            <Link to='/signup' className={"text-xl font-bold " + (type=="sign-up"? " text-blue" :" text-gray-500")}>Sign Up</Link>
        </div> */}
        <div className="flex flex-row justify-center items-center w-[40%] ">
        {/* <hr className={"w-1/2  border-t-2  " + (type=="sign-in"? " border-blue" : " border-grey") } />
        <hr className={"w-1/2  border-t-2  " + (type=="sign-up"? " border-blue" : " border-grey") } /> */}
        <p className="my-[20px] text-[8px] sm:text-[15px]">  Fill the form to proceed further.</p>
        </div>
        <div className="flex flex-col w-[100%]">
        <div className="sm:hidden flex flex-row justify-center items-center w-[100%]">
              
              <img src={illus2} className= "h-[100px] flex items-center justify-center my-[10px]" ></img>
             

       </div>
        <form
          className="w-[100%]  sm:w-[50%]  p-8 rounded-[20px] flex-col  "
           onSubmit={(e) => ( handleFormSubmit(e))}
          //  onSubmit={(e) => (type === "sign-in" ? handleLogin(e) : handleSignup(e))}
          
        >
          {/* <h1 className="text-4xl font-gelasio capitalize text-center mb-10">
            {type == "sign-in" ? "Welcome back" : "Join us today"}
          </h1> */}

          {/* {error && <p>{error}</p>} */}

          
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon={person}
              ref={fullnameRef2}
            />
         
          {/* <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon={msg}
            ref={emailRef}
          /> */}

          {/* <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon={lock}
            ref={passwordRef}
          /> */}

  
 


              <InputBox
              name="mobile number"
              type="text"
              placeholder="Mobile Number"
              icon={phone}
              ref={mobileNumberRef2}
            />
         


             {/* <InputBox
             name="nationality"
             type="text"
             placeholder="Nationality"
             icon={nationality}
             ref={nationalityRef}
           />  */}
        




             {/* <InputBox
             name="gender"
             type="text"
             placeholder="Gender"
             icon={gender}
             ref={genderRef}
           /> */}
          


            <div className="my-4">
            <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    ref={occupationRef2}
                    className=""
                  />
            </div>
          

{selectedOption && selectedOption.value=="College Student"?  (
          <InputBox
          name="college"
          type="text"
          placeholder="College"
          icon={college}
          ref={collegeRef2}
        /> 
          ):""}


{selectedOption && selectedOption.value=="College Student"? (
           <InputBox
           name="course"
           type="text"
           placeholder="Course"
           icon={hat}
           ref={courseRef2}
         /> 
          ):""}


{selectedOption && selectedOption.value=="College Student"?  (
            <InputBox
            name="year"
            type="text"
            placeholder="Year"
            icon={year}
            ref={yearRef2}
          />
          ):""}




  









        
          
          {/* {type== "sign-in" ?(<Link to="/reset"><button className="text-grey font-thin text-sm  underline border-0" >Forgot Password ?</button></Link>):""} */}
          <button
            disabled={loading}
            className="whitespace-nowrap bg-blue text-white rounded-[5px] w-[100%] font-normal text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14 py-2"
            type="submit"
          >
            Submit
          </button>

          {/* <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold ">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button
            onClick={handleAuthState}
            type="submit"
            className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 flex items-center justify-center gap-4 w-[90%]  mx-auto"
          >
            <img src={googleIcon} className="w-5" />
            continue with google
          </button> */}

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
        <div className="sm:hidden flex flex-row justify-center items-center w-[100%]">
              
               <img src={infocard} className= "h-[80px] flex items-center justify-center my-[20px]" ></img>
              

        </div>
        </div>
      </section>
    </AnimationWrapper>
   
    </div>
  );
};

export default UserInfo;
