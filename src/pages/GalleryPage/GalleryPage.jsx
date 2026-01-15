import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faTimes, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import "./GalleryPage.css";

// Import images
import img1 from '../../assets/images/jagriti_img1.webp';
import img2 from '../../assets/images/jagriti_img2.webp';
import img3 from '../../assets/images/jagriti_img3.webp';
import img4 from '../../assets/images/jagriti_img4.webp';
import img5 from '../../assets/images/jagriti_img5.webp';
import img6 from '../../assets/images/jagriti_img6.webp';
import img7 from '../../assets/images/jagriti_img7.webp';
import img8 from '../../assets/images/jagriti_img8.webp';
import img9 from '../../assets/images/jagriti_img9.webp';
import img10 from '../../assets/images/jagriti_img10.webp';
import img11 from '../../assets/images/jagriti_img11.webp';
import img12 from '../../assets/images/jagriti_img12.webp';
import img13 from '../../assets/images/jagriti_img13.webp';
import img14 from '../../assets/images/jagriti_img14.webp';
import img15 from '../../assets/images/jagriti_img15.webp';
import img16 from '../../assets/images/jagriti_img16.webp';
import img17 from '../../assets/images/jagriti_img17.webp';
import img18 from '../../assets/images/jagriti_img18.webp';
import img19 from '../../assets/images/jagriti_img19.webp';
import img20 from '../../assets/images/jagriti_img20.webp';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Gallery | Jagriti IIT (BHU)";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-bg">
      {/* <Navbar /> */}
      
      <div className="gallery-container">
        {/* Header Section */}
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gallery-title">Our Memories</h1>
          
          <div className="gallery-quote-container">
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon quote-left" />
            <p className="gallery-quote-text">
              Here's the glimpse of previous editions of Jagriti. Exciting events ranging from guest talks to competitions were successfully held, inundated with participants from all over India.
            </p>
            <FontAwesomeIcon icon={faQuoteRight} className="quote-icon quote-right" />
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Jagriti Event ${index + 1}`} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <FontAwesomeIcon icon={faSearchPlus} className="zoom-icon" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-overlay active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <img src={selectedImage} alt="Full screen" className="lightbox-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;
