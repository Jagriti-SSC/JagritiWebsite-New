import InputBox from "../../components/InputBox/InputBox.component";
import googleIcon from "./google.png";
import { Link, useNavigate } from "react-router-dom";
import AnimationWrapper from "./page-animation";
import { useAuth } from "../../context/AuthContext";
import { useRef, useState,useContext,createContext } from "react";
import { auth, provider } from "../../context/Firebase";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const userContext = createContext();

export function useUser() {
  return useContext(userContext)
}

const UserAuthForm = ({ type }) => {

const [authState,setAuthState] = useState(true)
  
  
  const { signup } = useAuth();
  const { login } = useAuth();
  const { googleAuth } = useAuth();
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
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
        navigate('/');
      
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
      const user = await signup(emailRef.current.value, passwordRef.current.value);
       console.log(user)
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
    await login(emailRef.current.value, passwordRef.current.value)
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
  


  


  return (
    <div>
      <Navbar />
]    <AnimationWrapper keyValue={type}>
      <section className="h-[100vh] flex justify-center items-center">
        <form
          className="w-[80%] max-w-[400px] border p-8 rounded-[20px]  "
           onSubmit={(e) => ( authState ? ((type === "sign-in" ? handleLogin(e) : handleSignup(e))) : authByGoogle(e))}
          
        >
          <h1 className="text-4xl font-gelasio capitalize text-center mb-10">
            {type == "sign-in" ? "Welcome back" : "Join us today"}
          </h1>

          {error && <p>{error}</p>}

          {type != "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="fi-rr-user"
              ref={fullnameRef}
            />
          ) : (
            ""
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-rr-envelope"
            ref={emailRef}
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-key"
            ref={passwordRef}
          />
          
          {type== "sign-in" ?(<Link to="/reset"><button className="text-red underline" >Forgot Password ?</button></Link>):""}
          <button
            disabled={loading}
            className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14"
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
            className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 flex items-center justify-center gap-4 w-[90%]  mx-auto"
          >
            <img src={googleIcon} className="w-5" />
            continue with google
          </button>

          {type == "sign-in" ? (
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
          )}
        </form>
      </section>
    </AnimationWrapper>
    <Footer />
    </div>
  );
};

export default UserAuthForm;
