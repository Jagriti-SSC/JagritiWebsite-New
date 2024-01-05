import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const FirebaseContext = createContext(null);
const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of the imported firebase utility

const db = getFirestore(firebaseApp);
const storage  = getStorage(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {


  // Create the required function for using the internal functions of the utility imported
  const [eventData, setEventData] = useState([]);
  const [PreEventData, setPreEventData] = useState([]);
  const [GuestTalkData, setGuestTalkData] = useState([]);
  

  async function getAllDocuments(collectionName) {
    try {
      const collectionData = await getDocs(collection(db, collectionName));

      if (collectionName === "events") {
        setEventData([]);
        collectionData.forEach((doc) => {
          setEventData((prev) => {
            return [...prev, doc.data()];
          });
          console.log(doc.data());
        });
      }
      if (collectionName === "guest-talk") {
        setGuestTalkData([]);
        collectionData.forEach((doc) => {
          setGuestTalkData((prev) => {
            return [...prev, doc.data()];
          });
          console.log(doc.data());
        });
      }

      if (collectionName === "pre-event") {
        setPreEventData([]);
        collectionData.forEach((doc) => {
          setPreEventData((prev) => {
            return [...prev, doc.data()];
          });
          console.log(doc.data());
        });
      }
      if (collectionName === "team") {
        let teamData = [];

        collectionData.forEach((doc) => {
         teamData.push(doc.data());
          // console.log(doc.data())
        });
        return teamData;
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addDocument = async (dbType, data) => {
    try {
      await addDoc(collection(db, dbType), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const uploadFile = (location, file)=>{
    const storageRef = ref(storage, location);

    return new Promise((resolve, reject)=>{
      uploadBytes(storageRef, file).then((snapshot) => {
       resolve();
      }).catch(err =>{
          reject();
      });

    })
  }


  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally

        getAllDocuments,
        addDocument,
        eventData,
        PreEventData,
        GuestTalkData,
        uploadFile
    
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};



const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export  {auth,provider};
