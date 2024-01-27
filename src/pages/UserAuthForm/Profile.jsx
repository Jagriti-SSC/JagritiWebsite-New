import React, { useEffect, useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, useFirebase, db } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "../../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import bg_image from "./bg.png";
import profile_default from "./profile.png";
import { Button } from "@mui/material";
import EventCarousel from "./EventCarousel";
import nothing from "./nothing.png";
import "./Profile.css";

const Profile = () => {
  const [events, setEvents] = useState({})
  var storedUserString = localStorage.getItem("user");
  // console.log(storedUserString);
  const userObject = JSON.parse(storedUserString);

  const navigate = useNavigate();
  async function logout() {
    await signOut(auth)
      .then(() => {
        localStorage.removeItem("user");

        navigate("/");
      })
      .catch((error) => { });
  }

  const profile_img = userObject?.photoURL;

  const firebase = useFirebase();
  // firebase.eventData = null;

  const fetchEventData = (name) => {
    const Data = firebase.getAllDocuments(name);
  };

  useEffect(() => {
    Promise.all([fetchEventData("events")]);
  }, []);

  // For Editing user info after login
  const [userDetails, setUserDetails] = useState({});
  const fetchUserData = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL
      const response = await fetch(`${url}/auth/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: auth.currentUser.email }),
      });
      const data = await response.json();
      setUserDetails(data)
      const { event, preEvents, guestTalks } = data;

      // Create a new object with only the desired properties
      const newObject = {
        event,
        preEvents,
        guestTalks
      }; setEvents(newObject)
      console.log(events)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  useEffect(() => {
    if (auth.currentUser) {
      fetchUserData();
    }
  }, [auth.currentUser]);
  useEffect(() => {
    console.log(events);
  }, [events]);
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
      {/* <div>
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
                  </div>
                </div>

                <div class="row profile-user-info">
                  <div class="col-sm-8">
                    <div class="profile-user-details clearfix">
                      <div class="profile-user-details-label">Name:</div>
                      <div class="profile-user-details-value">
                        <span>
                          {userObject?.displayName
                            ? `${userObject?.displayName}`
                            : "null"}
                        </span>
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
      </div> */}
      <div
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundSize: "cover",
          minHeight: "210vh",
        }}
        className="bg"
      >
        <div className="container mx-auto">
          <section className="absolute top-[163px] left-[400px] w-[903px] h-[347px] text-left text-lg text-gray-200 font-poppins info-section-1">
            <div className="relative border-black rounded-full">
              <img
                className="profile-image absolute top-[-34px] left-[392px] rounded-[50%] w-[100px] h-[100px] z-10 border-black"
                alt=""
                src={`${profile_img ? profile_img : profile_default}`}
                style={{ border: "2px solid #1A589B" }}
              />
            </div>
            <div className="relative ">
              <div className="bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[903px] h-[297px] rounded-3xl info-div-1">
                <div
                  className="absolute top-[91px] left-[60px] leading-[26.4px] whitespace-pre-wrap text-black "
                  style={{ fontWeight: "900" }}
                >
                  <p className="m-0">Name :</p>
                  <p className="m-0 ">Institute :</p>
                  <p className="m-0 ">Email :</p>

                </div>
                <div
                  className="absolute top-[91px] left-[562px] leading-[26.4px] whitespace-pre-wrap text-black info-1"
                  style={{ fontWeight: "900" }}
                >
                  <p className="m-0 ">Course :</p>
                  <p className="m-0 ">Year :</p>
                  <p className="m-0 ">Contact :</p>
                  {/* <p className="m-0 ">Gender :</p>
                  <p className="m-0 ">Nationality :</p> */}
                </div>
                <div className="absolute top-[91px] left-[157px] leading-[26.4px] text-black ">
                  <p className="m-0 uppercase">{userDetails.name}</p>
                  <p className="m-0 uppercase">
                    {userDetails.college}
                  </p>
                  <p className="m-0 ">
                    {auth.currentUser.email}
                  </p>

                </div>
                <div className="absolute top-[91px] left-[686px] leading-[26.4px] text-black info-2">
                  <p className="m-0 uppercase">
                    {userDetails.course}
                  </p>
                  <p className="m-0 uppercase">
                    {userDetails.year}
                  </p>
                  <p className="m-0 uppercase">
                    {userDetails.mobile}
                  </p>
                  {/* <p className="m-0">
                    {userObject?.providerData?.gender
                      ? `${userObject?.providerData?.gender}`
                      : "null"}
                  </p>
                  <p className="m-0">
                    {userObject?.providerData?.nationality
                      ? `${userObject?.providerData?.nationality}`
                      : "null"}
                  </p> */}
                </div>

                <div className="relative flex justify-between">
                  <Button
                    className="absolute edit top-[224px] left-[183px]"
                    sx={{
                      width: 235,
                      backgroundColor: "#1A589B",
                      borderRadius: "10px",
                    }}
                    color="primary"
                    variant="contained"
                  >
                    Edit Profile
                  </Button>
                  <Button
                    className="absolute logout top-[224px] left-[-213px]"
                    sx={{
                      width: 235,
                      backgroundColor: "#B52E1F",
                      "&:hover": {
                        backgroundColor: "#c93322", // Replace 'newColorOnHover' with your desired color
                      },
                      borderRadius: "10px",
                    }}
                    color="primary"
                    variant="contained"
                    onClick={logout}
                  >
                    Log out
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="absolute top-[500px] left-[400px] w-[903px] text-left text-lg text-gray-200 font-poppins info-section-2">
            <div
              className="relative border-black rounded-full"
              style={{ fontWeight: "900" }}
            >
              <h1 className="absolute top-[30px] left-[320px] text-[#1A589B] z-10 font-bold text-[2rem] text-event">
                Registered Events
                <hr className="my-4 border-t border-[#1A589B] border-2 w-full" />
              </h1>
            </div>
            {firebase.eventData == null ? (
              <div className="relative">
                <div className="bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[903px] h-screen rounded-3xl info-div-2">
                  <img
                    className="absolute w-[900px] h-[450px] z-10 mt-40 ml-2 not-img"
                    alt=""
                    src={`${nothing}`}
                  />
                  <h1 className="absolute text-[#000000] text-5xl mt-[620px] ml-[80px] not-res">
                    You haven't registered for any event
                  </h1>
                  <Button
                    className="absolute top-[720px] left-[320px] not-but"
                    sx={{
                      width: 235,
                      backgroundColor: "#1A589B",
                      borderRadius: "10px",
                    }}
                    color="primary"
                    variant="contained"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[903px] h-screen rounded-3xl info-div-2">
                  <div
                    className="absolute top-[99px] left-[250px] whitespace-pre-wrap flex gap-20 payment"
                    style={{ fontWeight: "900" }}
                  >
                    <h1 className="text-[#32BA7C]">Payment Verified : </h1>
                    <h1 className="text-[#B52E1F]">Payment Unverified : </h1>
                  </div>
                  <div className="absolute top-[150px] left-[10px] ">
                    <EventCarousel eventData={firebase.eventData} />  {/*change to events function after changing event carousel */}
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
