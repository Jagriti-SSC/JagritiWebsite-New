import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import AboutPage from "./pages/AboutPage/AboutPage";
import CAPage from "./pages/CAPage/CAPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import HomePage from "./pages/Homepage/HomePage";
import TeamPage from "./pages/TeamPage/TeamPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FaqPage from "./pages/FaqPage/FaqPage";
import Preloader from "./components/preloader/Preloader";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/events" element={<EventsPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/faqs" element={<FaqPage />} />
        <Route exact path="/ca" element={<CAPage />} />
      </Routes>
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
