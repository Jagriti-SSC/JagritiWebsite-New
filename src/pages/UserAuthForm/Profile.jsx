import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "../../App.css";
// import bg_image from "./bg.png"; // still fine to keep this import
import { Button } from "@mui/material";
import EventCarousel from "./EventCarousel";

const Profile = () => {
  const [events, setEvents] = useState({});
  var storedUserString = localStorage.getItem("user");
  const userObject = JSON.parse(storedUserString || "{}");

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

  const [userDetails, setUserDetails] = useState({});
  const [eventsState, setEventsState] = useState({});

  const fetchUserData = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const response = await fetch(`${url}/auth/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: auth.currentUser.email }),
      });
      if (response != null) {
        const data = await response.json();
        setUserDetails(data);
        const { events, preEvents, guestTalks } = data;

        const newObject = {
          events,
          preEvents,
          guestTalks,
        };
        setEventsState(newObject);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (auth.currentUser) {
        await fetchUserData();
      }
    };

    fetchData();
  }, [auth.currentUser]);

  useEffect(() => {
    console.log(eventsState);
  }, [eventsState]);

  return (
    <>
      {/* Wrapper now uses class instead of inline background style */}
      <div className="profile-page-wrapper bg">
        <div className="flex-col justify-center items-center pt-36">
          <section className="relative flex-col justify-center items-center bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] w-[90%] mx-auto h-[297px] rounded-3xl">
            <div className="absolute left-[40%] top-[-10%] md:left-[45%] md:top-[-20%] flex items-center justify-center mx-auto border-black rounded-full z-10">
              <img
                className="rounded-[50%] border-black w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                alt=""
                src={`${userDetails.imgUrl ? userDetails.imgUrl : profile_img}`}
                style={{ border: "2px solid #1A589B" }}
              />
            </div>
            <div className="p-10 flex flex-col md:flex-row justify-evenly items-start md:items-center h-[74%] pt-[50px] pb-10">
              <div className="flex whitespace-pre-wrap text-black">
                <div>
                  <p className="m-0">
                    <font style={{ fontWeight: "900" }}>Name: </font>
                    {userDetails.name ? userDetails.name : ""}
                  </p>
                  <p className="m-0">
                    <font style={{ fontWeight: "900" }}>Contact: </font>
                    {userDetails.mobile ? userDetails.mobile : ""}
                  </p>
                  <p className="m-0">
                    <font style={{ fontWeight: "900" }}>Email: </font>
                    {auth.currentUser?.email}
                  </p>
                </div>
              </div>
              <div className="flex whitespace-pre-wrap text-black">
                <div>
                  <p className="m-0">
                    <font style={{ fontWeight: "900" }}>Course: </font>
                    {userDetails.course ? userDetails.course : ""}
                  </p>
                  <p className="m-0">
                    <font style={{ fontWeight: "900" }}>Year: </font>
                    {userDetails.year ? userDetails.year : ""}
                  </p>
                  <p className="m-0">
                    <font style={{ fontWeight: "900" }}>Institute: </font>
                    {userDetails.college ? userDetails.college : ""}
                  </p>
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
                onClick={() =>
                  navigate(`/edit-profile/${auth.currentUser.email}`)
                }
              >
                Edit Profile
              </Button>
              <Button
                className="w-1/3"
                sx={{
                  backgroundColor: "#B52E1F",
                  "&:hover": {
                    backgroundColor: "#c93322",
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

          <section className="flex-col justify-center items-center bg-white shadow-[0px_10px_30px_rgba(102,_106,_245,_0.13)] text-left text-lg text-gray-200 font-poppins mt-36 w-[90%] h-[600px] rounded-3xl mx-auto">
            <div
              className="md:flex-row justify-evenly items-start md:items-center relative border-black rounded-full"
              style={{ fontWeight: "900" }}
            >
              <h1 className="pt-3 px-6 mx-auto text-[#1A589B] z-10 font-bold text-[2rem]">
                Registered Events
                <hr className="my-4 border-t border-[#1A589B] border-2 w-full" />
              </h1>
            </div>
            {((eventsState.events && eventsState.events.length === 0) &&
              (eventsState.preEvents && eventsState.preEvents.length === 0)) ? (
              <div className="px-6 md:flex-row justify-evenly items-start md:items-center relative mx-auto text-black">
                <h1 className="text-[#000000]">
                  You haven't registered for any event
                </h1>
                <Button
                  sx={{
                    backgroundColor: "#1A589B",
                    borderRadius: "10px",
                  }}
                  className="relative"
                  color="primary"
                  variant="contained"
                  onClick={() => navigate("/events")}
                >
                  Register Now
                </Button>
              </div>
            ) : (
              <div className="md:flex-row justify-evenly items-start md:items-center relative mx-auto text-black">
                <EventCarousel events={eventsState} />
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
