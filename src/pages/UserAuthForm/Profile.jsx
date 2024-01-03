import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../context/Firebase";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  var storedUserString = localStorage.getItem("user");
  console.log(storedUserString);
  const { userCredential } = useAuth();
  const navigate = useNavigate();
  async function logout() {
    console.log(userCredential);
    await signOut(auth)
      .then(() => {
        localStorage.removeItem('user')
        // console.log(localStorage.getItem("user"));
        // console.log("hello signout");
        console.log(userCredential);
        navigate("/");
        console.log(userCredential);
      })
      .catch((error) => {
        
      });
  }
//   const jsonData = {
//     user: {
//       uid: "7wLCTDUKdNaaojKnPNKJw8Ugldn2",
//       email: "abc@abc.com",
//       emailVerified: false,
//       isAnonymous: false,
//       providerData: [
//         {
//           providerId: "password",
//           uid: "abc@abc.com",
//           displayName: null,
//           email: "abc@abc.com",
//           phoneNumber: null,
//           photoURL: null,
//         },
//       ],
//       stsTokenManager: {
//         refreshToken:
//           "AMf-vByAVhrnArgyrDTzRnuXEnSb0bi6vd_M0j-qvfXYfXSLg-Ix8ZSnd4QNFqtghTZigFH7JBICPu0OWl1ww0BohiN567rPj-2y9Y--rwjEU7U_9dXks6Jq_2lfp0OqvZKHmr6f9RVczyOMpV84oDhyID7XqGPqO4ht0OHR7769-IkLcT6q9FTJQa8vQRPaNePcJQPBQCbW",
//         accessToken:
//           "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamFncml0aS1jYzkzOSIsImF1ZCI6ImphZ3JpdGktY2M5MzkiLCJhdXRoX3RpbWUiOjE3MDQyMTcwMTgsInVzZXJfaWQiOiI3d0xDVERVS2ROYWFvaktuUE5LSnc4VWdsZG4yIiwic3ViIjoiN3dMQ1REVUtkTmFhb2pLblBOS0p3OFVnbGRuMiIsImlhdCI6MTcwNDIxNzAxOCwiZXhwIjoxNzA0MjIwNjE4LCJlbWFpbCI6ImFiY0BhYmMuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFiY0BhYmMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LKAEQ3rhlK7KpAyOZkMw56nua5ma_PDB50W5dkozrydWBf7fYQS8FDwZcpoRmPeZ6iEZJA1xsTfqZnDrQsxL3L3ndSScDFXyiCBrF12sS4vBjm9IFmoZhCTNyj9iXl7qYmjd6l6gRKPWH5-tx_ONkczuj1P0vl8kAPgcik19FpO2ISMdtVT0kgYlmm0MEyGIx1l8laEKVQrw0x16GiZI_gUe-fUqSVP0YXyLWiZQGTAvD9ZtZdvjkU9alrpEJXmQTbbtga1N_dj3IwTdlBaMlxq4bKNI047TRBdK7Inz4jK7uK9fcPoT1ybXW6vSHT28VlBaZ3w2ryg6MoSszsBM8w",
//         expirationTime: 1704220619012,
//       },
//       createdAt: "1704217017896",
//       lastLoginAt: "1704217017896",
//       apiKey: "AIzaSyCh0PGOGCuPPw6_eFIffC5ftALVzfhr9i4",
//       appName: "[DEFAULT]",
//     },
//     providerId: null,
//     _tokenResponse: {
//       kind: "identitytoolkit#SignupNewUserResponse",
//       idToken:
//         "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyNmM2YTg0YWMwNjcwMDVjZTM0Y2VmZjliM2EyZTA4ZTBkZDliY2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamFncml0aS1jYzkzOSIsImF1ZCI6ImphZ3JpdGktY2M5MzkiLCJhdXRoX3RpbWUiOjE3MDQyMTcwMTgsInVzZXJfaWQiOiI3d0xDVERVS2ROYWFvaktuUE5LSnc4VWdsZG4yIiwic3ViIjoiN3dMQ1REVUtkTmFhb2pLblBOS0p3OFVnbGRuMiIsImlhdCI6MTcwNDIxNzAxOCwiZXhwIjoxNzA0MjIwNjE4LCJlbWFpbCI6ImFiY0BhYmMuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFiY0BhYmMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LKAEQ3rhlK7KpAyOZkMw56nua5ma_PDB50W5dkozrydWBf7fYQS8FDwZcpoRmPeZ6iEZJA1xsTfqZnDrQsxL3L3ndSScDFXyiCBrF12sS4vBjm9IFmoZhCTNyj9iXl7qYmjd6l6gRKPWH5-tx_ONkczuj1P0vl8kAPgcik19FpO2ISMdtVT0kgYlmm0MEyGIx1l8laEKVQrw0x16GiZI_gUe-fUqSVP0YXyLWiZQGTAvD9ZtZdvjkU9alrpEJXmQTbbtga1N_dj3IwTdlBaMlxq4bKNI047TRBdK7Inz4jK7uK9fcPoT1ybXW6vSHT28VlBaZ3w2ryg6MoSszsBM8w",
//       email: "abc@abc.com",
//       refreshToken:
//         "AMf-vByAVhrnArgyrDTzRnuXEnSb0bi6vd_M0j-qvfXYfXSLg-Ix8ZSnd4QNFqtghTZigFH7JBICPu0OWl1ww0BohiN567rPj-2y9Y--rwjEU7U_9dXks6Jq_2lfp0OqvZKHmr6f9RVczyOMpV84oDhyID7XqGPqO4ht0OHR7769-IkLcT6q9FTJQa8vQRPaNePcJQPBQCbW",
//       expiresIn: "3600",
//       localId: "7wLCTDUKdNaaojKnPNKJw8Ugldn2",
//     },
//     operationType: "signIn",
//   };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
