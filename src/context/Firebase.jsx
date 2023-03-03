import { createContext, useContext} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";

// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const FirebaseContext = createContext(null);
const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of the imported firebase utility

const db = getFirestore(firebaseApp);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {
  // const [allDocuments, setallDocuments] = useState([]);

  // Create the required function for using the internal functions of the utility imported

  async function getAllDocuments(collectionName) {
    try {
      const collectionData = await getDocs(collection(db, collectionName));

      let data = [];
      // setallDocuments([]);
      collectionData.forEach((doc) => data.push(doc.data()));
      // console.log(data);
      return data;

      // console.log(EventData);
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

  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally

        getAllDocuments,
        addDocument,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
