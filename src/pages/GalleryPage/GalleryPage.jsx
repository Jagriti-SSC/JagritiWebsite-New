import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const GalleryPage = () => {
  
  useEffect(() => {
    document.title = "Gallery | Jagriti IIT (BHU)"
  }, [])
  
  return (
    <>
    <div>
    <h1>Beautiful pictures coming soon!</h1>
    <Footer />
    </div>
    </>
  );
};

export default GalleryPage;
