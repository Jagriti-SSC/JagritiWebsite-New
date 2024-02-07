import React, { useEffect, useState } from "react";
import { signOut, updateProfile } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, useFirebase, db } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "../../App.css";
import img8 from '../../assets/images/jagriti_img8.png';
// import "bootstrap/dist/css/bootstrap.min.css";
import bg_image from "./bg.png";
import profile_default from "./profile.png";
import { Button } from "@mui/material";
import EventCarousel from "./EventCarousel";
import nothing from "./nothing.png";

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
      if (response != null) {
        const data = await response.json();
        setUserDetails(data)
        const { events, preEvents, guestTalks } = data;

        // Create a new object with only the desired properties
        const newObject = {
          events,
          preEvents,
          guestTalks
        }; setEvents(newObject)
      }
      // console.log(events)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      if (auth.currentUser) {
        await fetchUserData();
      }
    };

    fetchData();
  }, [auth.currentUser]);
  useEffect(() => {
    // console.log(events);
  }, [events]);

  return (
    <>

      <div
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundSize: "cover",
          minHeight: "210vh",
        }}
        className="bg"
      >
        <div className="flex-col justify-center items-center pt-36">
          <section className="relative flex-col justify-center items-center bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[60%] mx-auto h-[297px] rounded-3xl">
            <div className=" absolute  left-[40%] top-[-10%] md:left-[45%] md:top-[-20%] flex items-center justify-center  mx-auto border-black rounded-full z-10 ">
              <img
                className=" rounded-[50%] border-black w-[60px] h-[60px]  md:w-[100px] md:h-[100px]"
                alt=""
                src={`${profile_img ? profile_img : img8}`}
                style={{ border: "2px solid #1A589B" }}
              />
            </div>
            <div className="p-10 flex flex-col md:flex-row justify-evenly items-start md:items-center h-[74%] pt-[50px] pb-10">
              <div
                className="flex whitespace-pre-wrap text-black"
                style={{ fontWeight: "900" }}
              >
                <div>
                  <p className="m-0">Name :</p>
                  <p className="m-0 ">Contact :</p>
                  <p className="m-0 ">Email :</p>
                </div>
                <div style={{ fontWeight: "100" }}>
                  <p className="m-0">{userDetails.name ? userDetails.name : "null"}</p>
                  <p className="m-0 ">{userDetails.mobile?userDetails.mobile:"null"}</p>
                  <p className="m-0 ">{auth.currentUser.email}</p>
                </div>


              </div>
              <div
                className="flex whitespace-pre-wrap text-black"
                style={{ fontWeight: "900" }}
              >
                <div>
                  <p className="m-0 ">Course :</p>
                  <p className="m-0 ">Year :</p>
                  <p className="m-0 ">Institute :</p>
                </div>
                <div style={{ fontWeight: "100" }}>
                  <p className="m-0 ">{userDetails.course ? userDetails.course : "null"}</p>
                  <p className="m-0 ">{userDetails.year ? userDetails.year : "null"}</p>
                  <p className="m-0 ">{userDetails.college ? userDetails.college : "null"}</p>
                </div>


              </div>
            </div>
            <div className="flex justify-evenly">
              <Button
                className="w-1/3"
                sx={{

                  backgroundColor: "#1A589B",
                  borderRadius: "10px",
                }}
                color="primary"
                variant="contained"
                onClick={() => navigate(`/edit-profile/${auth.currentUser.email}`)}
              >
                Edit Profile
              </Button>
              <Button
                className="w-1/3"
                sx={{

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


          </section>
          <section className="flex-col justify-center items-center bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)]  text-left text-lg text-gray-200 font-poppins mt-36 w-[60%] h-[600px] rounded-3xl mx-auto">
            <div
              className="md:flex-row justify-evenly items-start md:items-center relative border-black rounded-full"
              style={{ fontWeight: "900" }}
            >
              <h1 className="pt-3 px-6 mx-auto text-[#1A589B] z-10 font-bold text-[2rem]">
                Registered Events
                <hr className="my-4 border-t border-[#1A589B] border-2 w-full" />
              </h1>
            </div>
            {firebase.eventData == null ? (
              <div className="relative">
                <div className="bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[903px]">
                  <imgrounded
                    className="relative w-[900px] h-[450px] z-10 mt-40 ml-2"
                    alt=""
                    src={`${nothing}`}
                  />
                  <h1 className="relative text-[#000000] text-5xl mt-[620px] ml-[80px]">
                    You haven't registered for any event
                  </h1>
                  <Button
                    className="relative"
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
              <div className="md:flex-row justify-evenly items-start md:items-center relative mx-auto">
                    <EventCarousel eventsData={firebase.eventData} events={events} />  {/*change to events function after changing event carousel */}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
