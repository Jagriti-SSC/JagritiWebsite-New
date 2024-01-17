import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import AboutPage from "./pages/AboutPage/AboutPage";
import CAPage from "./pages/CAPage/CAPage";
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
import UserInfo from './pages/UserAuthForm/UserInfo.jsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/events" element={<EventsPage />} />
          <Route exact path="/team" element={<TeamPage />} />
          <Route exact path="/faqs" element={<FaqPage />} />
          <Route exact path="/ca" element={<CAPage />} />
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
      <Route exact path="/reset" element={<ResetPassword />} />
      <Route exact path="/userinfo" element={<UserInfo />} />
    </Routes>
    <Footer></Footer>
     
    <Toaster />
  </BrowserRouter>
  </AuthProvider>

        // <Routes>
        //   <Route exact path="/" element={<HomePage />} />
        //   <Route exact path="/about" element={<AboutPage />} />
        //   <Route exact path="/events" element={<EventsPage />} />
        //   <Route exact path="/team" element={<TeamPage />} />
        //   <Route exact path="/faqs" element={<FaqPage />} />
        //   <Route exact path="/ca" element={<CAPage />} />
        //   <Route exact path="/gallery" element={<GalleryPage />} />
        //   <Route
        //     exact
        //     path="/CampusAmbassador"
        //     element={<CampusAmbassadorPage />}
        //   />
        //   <Route
        //     exact
        //     path="/signin"
        //     element={<UserAuthForm type="sign-in" />}
        //   />
        //   <Route
        //     exact
        //     path="/signup"
        //     element={<UserAuthForm type="sign-up" />}
        //   />
        //   {/* <Route exact path="/profile" element={localStorage.getItem("user")==null? <UserAuthForm type="sign-in"/> : <Profile />}/> */}
        //   <Route element={<PrivateRoutes />}>
        //     <Route
        //       path="/profile"
        //       element={
        //         <>
        //           <Profile />
        //         </>
        //       }
        //     />
        //   </Route>
        //   <Route exact path="/reset" element={<ResetPassword />} />
        // </Routes>

    //     <Toaster />
    //   </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
