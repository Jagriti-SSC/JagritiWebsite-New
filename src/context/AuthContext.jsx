import React, {useContext,useState,createContext,useEffect} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from './Firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  
     const [userCredential,setUserCredential] = useState()
     const [loading,setLoading] = useState(true)
    
     var googleAuth=false

  
   var  userToken = {
    token : ''
   }
   

    async function signup(email, password) {
        try {
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       
          localStorage.setItem('user', JSON.stringify(userCredential));
        
          console.log(userCredential)
        
          return userCredential; 
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error (${errorCode}): ${errorMessage}`);
          throw error;  
        }
      }

       
    async function login(email,password) {
       
    await    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    localStorage.setItem('user', JSON.stringify(userCredential));
    const user = userCredential.user;
    setLoading(false)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error (${errorCode}): ${errorMessage}`);
  });

    } 
     

    
    const handleState=()=>{
      googleAuth=false;
      
    }


async function logout(){
 await signOut(auth).then(() => {
  console.log("hello signout")
   
  }).catch((error) => {
   
  });
}


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserCredential(user)
            
            setLoading(false)
        })

        return unsubscribe()
    },[])
     
     
     


     
     const value = {
        userCredential,
        signup,
        login,
        loading,
        googleAuth,
        userToken,
        logout
     }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}