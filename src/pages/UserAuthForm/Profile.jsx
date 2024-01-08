import React, { useEffect, useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, useFirebase, db } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "../../App2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profile_default from "./profile.png";
import EventsProfile from "../../components/Events/EventsProfile";

const Profile = () => {
  var storedUserString = localStorage.getItem("user");
  console.log(storedUserString);
  const userObject = JSON.parse(storedUserString);

  const navigate = useNavigate();
  async function logout() {
    await signOut(auth)
      .then(() => {
        localStorage.removeItem("user");

        navigate("/");
      })
      .catch((error) => {});
  }

  const profile_img = userObject?.photoURL;

  const firebase = useFirebase();

  const fetchEventData = (name) => {
    const Data = firebase.getAllDocuments(name);
  };

  useEffect(() => {
    Promise.all([fetchEventData("events")]);
  }, []);

  // For Editing user info after login

  // const [userDetails, setUserDetails] = useState({});
  // const [isEditing, setIsEditing] = useState(false);
  // const [saving, setSaving] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const docSnap = await db
  //         .collection("users")
  //         .doc(auth.currentUser.uid)
  //         .get();
  //       const fetchedUserData = docSnap.data();
  //       setUserDetails(fetchedUserData);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       setError("Failed to retrieve user data.");
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // const handleEditToggle = () => {
  //   setIsEditing(!isEditing);
  // };

  // const handleSave = async () => {
  //   setSaving(true);
  //   setError(null);

  //   try {
  //     await auth?.currentUser?.updateProfile(userDetails);
  //     await db.collection("users").doc(auth.currentUser.uid).set(userDetails);

  //     console.log("User information updated successfully!");
  //     setIsEditing(false);
  //   } catch (error) {
  //     console.error("Error updating user information:", error);
  //     setError("Failed to update user information. Please try again.");
  //   } finally {
  //     setSaving(false);
  //   }
  // };

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
    <>
      <Navbar />

      <div>
        <div class="container ">
          <div class="row" id="user-profile">
            <div class="col-lg-3 col-md-4 col-sm-4">
              <div class="main-box clearfix">
                <h2>{userObject?.displayName}</h2>
                <img
                  src={`${profile_img ? profile_img : profile_default}`}
                  alt=""
                  class="profile-img img-responsive center-block rounded-full "
                />

                <div class="profile-details">
                  <ul class="fa-ul">
                    <li>
                      <i class="fi fi-rr-list-check"></i> {"  "}Registered
                      Events: <span>0</span>
                    </li>
                    <li>
                      <i class="fi fi-rr-loading"></i> {"  "}Pending :{" "}
                      <span>0</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-9 col-md-8 col-sm-8">
              <div class="main-box clearfix">
                <div class="profile-header">
                  <h3>
                    <span>User info</span>
                  </h3>
                  <div className="flex">
                    <button onClick={logout} class="btn btnlogout edit-profile">
                      Logout
                    </button>

                    {/* {saving && (
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                    {error && <div className="alert alert-danger">{error}</div>}

                    <button
                      onClick={isEditing ? handleSave : handleEditToggle}
                      className="bg-blue text-white rounded py-0.5 px-2 ml-[376px] "
                    >
                      <i class="fi fi-rr-pencil"></i>
                      {isEditing ? "   Save" : "   Edit"}
                    </button> */}
                  </div>
                </div>

                <div class="row profile-user-info">
                  <div class="col-sm-8">
                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Name:</div>
                      <div class="profile-user-details-value">
                        {/* {isEditing ? (
                          <input
                            className="border-blue"
                            type="text"
                            value={userDetails.displayName}
                            onChange={(e) =>
                              setUserDetails({
                                ...userDetails,
                                displayName: e.target.value,
                              })
                            }
                          />
                        ) : ( */}
                        <span>
                          {userObject?.displayName
                            ? `${userObject?.providerData?.year}`
                            : "null"}
                        </span>
                        {/* )} */}
                      </div>
                    </div>

                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Institute:</div>
                      <div class="profile-user-details-value">
                        {userObject?.providerData?.institute
                          ? `${userObject?.providerData?.institute}`
                          : "null"}
                      </div>
                    </div>
                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Course:</div>
                      <div class="profile-user-details-value">
                        {userObject?.providerData?.course
                          ? `${userObject?.providerData?.course}`
                          : "null"}
                      </div>
                    </div>
                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Year:</div>
                      <div class="profile-user-details-value">
                        {userObject?.providerData?.year
                          ? `${userObject?.providerData?.year}`
                          : "null"}
                      </div>
                    </div>
                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Email:</div>
                      <div class="profile-user-details-value">
                        {userObject?.email ? `${userObject?.email}` : "null"}
                      </div>
                    </div>
                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Contact:</div>
                      <div class="profile-user-details-value">
                        {userObject?.providerData?.phoneNumber
                          ? `${userObject?.providerData?.phoneNumber}`
                          : "null"}
                      </div>
                    </div>

                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Gender:</div>
                      <div class="profile-user-details-value">
                        {userObject?.providerData?.gender
                          ? `${userObject?.providerData?.gender}`
                          : "null"}
                      </div>
                    </div>
                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Nationality:</div>
                      <div class="profile-user-details-value">
                        {userObject?.providerData?.nationality
                          ? `${userObject?.providerData?.nationality}`
                          : "null"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-center">Registered Events</h1>
              <div className="flex flex-wrap">
                {firebase.eventData.map((data, index) => (
                  <div
                    className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2"
                    key={data.id}
                  >
                    <EventsProfile data={data} index={index}></EventsProfile>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
