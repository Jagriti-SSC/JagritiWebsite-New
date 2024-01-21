import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import GalleryFirstLine from "../../components/galleryFirstLine/galleryFirstLine";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
const GalleryPage = () => {
  
  useEffect(() => {
    document.title = "Gallery | Jagriti IIT (BHU)"
  }, [])
  
  return (
    <>
    <div className="bg">
    <div className="relative">
      <div className=" absolute inline top-[10%] left-[10%]">
        <div className="flex  items-start ">
          <FontAwesomeIcon icon={faQuoteRight} style={{ fontSize: '48px', color: 'rgb(65, 98, 168)' }} />
          <p className="w-[360px] text-justify mt-5">Here's the glimpse of previous editions of Jagriti. Exciting events ranging from guest talks to competitions were successfully held, inundated with participants from all over India</p>
          <FontAwesomeIcon icon={faQuoteRight} style={{ fontSize: '48px', color: 'rgb(65, 98, 168)' }} />
        </div>
        
      </div>
      <div style={{overflow:"hidden"}}  className=" relatve -z-10 ">
      <GalleryFirstLine/>
      </div>
    </div>
    
   <div className="relative z-10">
   <Footer />
   </div>
    

    
    </div>
    </>
  );
};

export default GalleryPage;
