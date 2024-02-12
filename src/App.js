import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import AboutPage from "./pages/AboutPage/AboutPage";
import CAPage from "./pages/CAPage/CAPage";
import EventPage from "./pages/EventPage/EventPage";
import EventPageTeam from "./pages/EventPageTeam/EventPageTeam";
import CampusAmbassadorPage from "./pages/CampusAmbassadorPage/CampusAmbassador";
import EventsPage from "./pages/EventsPage/EventsPage";
import HomePage from "./pages/Homepage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FaqPage from "./pages/FaqPage/FaqPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage.jsx";
import UserAuthForm from "./pages/UserAuthForm/UserAuthForm.page";
import Preloader from "./components/preloader/Preloader";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/UserAuthForm/Profile.jsx";
import ResetPassword from "./pages/UserAuthForm/ResetPassword.jsx";
import PrivateRoutes from "./pages/UserAuthForm/PrivateRoutes.jsx";
import UserInfo from './pages/UserAuthForm/UserInfo.jsx';
import SecondPage from "./components/EventFormTeam/SecondPage.jsx";
import { FormProvider } from "./pages/UserAuthForm/FormContext.jsx";
import { EditProfile } from "./pages/UserAuthForm/editProfile.jsx";


function App() {
  return (
    <FormProvider>
    <AuthProvider>
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/events" element={<EventsPage />} />
          <Route exact path="/team" element={<TeamPage />} />
          <Route exact path="/faqs" element={<FaqPage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route
            exact
            path="/CampusAmbassador"
            element={<CampusAmbassadorPage />}
          />
          <Route
            exact
            path="/signin"
            element={<UserAuthForm type="sign-in" />}
          />
          <Route
            exact
            path="/signup"
            element={<UserAuthForm type="sign-up" />}
          />
          {/* <Route exact path="/profile" element={localStorage.getItem("user")==null? <UserAuthForm type="sign-in"/> : <Profile />}/> */}
          <Route element={<PrivateRoutes />}>
            <Route
              path="/profile"
              element={
                <>
                  <Profile />
                </>
              }
            />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route
              path="/ca"
              element={
                <>
                  <CAPage />
                </>
              }
            />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route
              path="/eventteam"
              element={
                <>
                  <EventPageTeam />
                </>
              }
            />
          </Route>  
          <Route element={<PrivateRoutes />}>
            <Route
              path="/secondpage"
              element={
                <>
                  <SecondPage />
                </>
              }
            />
          </Route> 
          <Route element={<PrivateRoutes />}>
            <Route
              path="/edit-profile/:id"
              element={
                <>
                  <EditProfile />
                </>
              }
            />
          </Route> 
          <Route element={<PrivateRoutes />}>
            <Route
              path="/userinfo"
              element={
                <>
                  <UserInfo />
                </>
              }
            />
          </Route> 
    </Routes>
    <Toaster />
  </BrowserRouter>
  </AuthProvider>
  </FormProvider>
  );
}

export default App;
