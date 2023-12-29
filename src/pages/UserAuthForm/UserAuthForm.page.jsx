import InputBox from "../../components/InputBox/InputBox.component";
import googleIcon from "./google.png";
import {Link} from "react-router-dom";
import AnimationWrapper from "./page-animation";




const UserAuthForm = ({type}) => {
    console.log(window.location.href)
    return (
      <AnimationWrapper keyValue={type}>
           <section className="h-[100vh] flex justify-center items-center">
                <form className="w-[80%] max-w-[400px] border p-8 rounded-[20px]  ">
                     <h1 className="text-4xl font-gelasio capitalize text-center mb-10">
                        {type == "sign-in"? "Welcome back" : "Join us today"}
                     </h1>

                    {

                           (type != "sign-in") ?  <InputBox 
                              name="fullname"
                              type="text"
                              placeholder="Full Name"
                              icon="fi-rr-user"

                           /> :""
                           
                    }

                            <InputBox 
                              name="email"
                              type="email"
                              placeholder="Email"
                              icon="fi-rr-envelope"

                           /> 

                         <InputBox 
                              name="password"
                              type="password"
                              placeholder="Password"
                              icon="fi-rr-key"

                           /> 

                           <button 
                              className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 block mx-auto mt-14"
                              type="submit"
                              >
                                {type.replace("-"," ")}
                           </button>

                           <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold ">
                               <hr className="w-1/2 border-black"/>
                               <p>or</p>
                               <hr className="w-1/2 border-black"/>
                           </div>

                           <button className="whitespace-nowrap bg-black text-white rounded-full py-3 px-6 text-xl capitalize hover:bg-opacity-80 flex items-center justify-center gap-4 w-[90%]  mx-auto">
                              <img src={googleIcon} className="w-5"/>
                              continue with google
                           </button>

                           {
                               type == "sign-in"? 
                               <p className="mt-6 text-dark-gry text-xl text-center">
                                 Don't have an account?
                                 <Link to="/signup" className="underline text-black text-xl ml-1">Join us today</Link>   
                                 
                               </p>
                               :
                               <p className="mt-6 text-dark-gry text-xl text-center">
                                 Already a member?
                                 <Link to="/signin" className="underline text-black text-xl ml-1">Sign in here</Link>   
                                 
                               </p>
                               
                           }


                </form>
           </section>
      </AnimationWrapper> 
    );
}


export default UserAuthForm;