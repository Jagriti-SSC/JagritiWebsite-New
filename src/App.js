import { useState,useRef,useLayoutEffect, useEffect  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import CAPage from "./pages/CAPage/CAPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import HomePage from "./pages/Homepage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FaqPage from "./pages/FaqPage/FaqPage";

function App() {
  const [navHeight,setNavHeight] = useState(0);
  const navRef= useRef();

  useLayoutEffect(() => {
    setNavHeight(navRef.current.clientHeight);
  },[])
  
  return (
    <BrowserRouter>
      <Navbar ref={navRef}/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/events" element={<EventsPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/faqs" element={<FaqPage />} />
        <Route exact path="/ca" element={<CAPage navHeight={navHeight}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
