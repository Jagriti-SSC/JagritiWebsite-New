import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./SponsorsPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const sponsorsData = [
  {
    name: "Umeed Foundation",
    url: "//umeedfoundation.co.in/",
    logo: "/assets/sponsors/umeed.webp"
  },
  {
    name: "PFC",
    url: "https://www.pfcindia.co.in/",
    logo: "/assets/sponsors/pfc.jpg"
  },
  {
    name: "Pregrad",
    url: "//pregrad.in",
    logo: "/assets/sponsors/pregrad.webp"
  },
  {
    name: "PhysicsWallah",
    url: "https://www.pw.live/",
    logo: "/assets/sponsors/pw.webp"
  },
  {
    name: "The Product Folks",
    url: "//theproductfolks.com",
    logo: "/assets/sponsors/projectfolks.webp"
  },
  {
    name: "Learning While Travelling",
    url: "//learningwhiletravelling.com/",
    logo: "/assets/sponsors/lwt.webp"
  },
  {
    name: "Unstop",
    url: "//unstop.com/",
    logo: "/assets/sponsors/Unstop-Logo-Blue-Small.png"
  },
  {
    name: "LiveAI",
    url: "//liveai.eu/",
    logo: "/assets/sponsors/liveai.webp"
  },
  {
    name: "Decathlon",
    url: "https://www.decathlon.in/",
    logo: "/assets/sponsors/decathlon.webp"
  },
  {
    name: "The Product Space",
    url: "https://theproductspace.in/",
    logo: "/assets/sponsors/pspace.jpg"
  },
  {
    name: "Daurcom",
    url: "https://daurcom.com/",
    logo: "/assets/sponsors/daurcom.jpg"
  },
  {
    name: "Teach For India",
    url: "https://www.teachforindia.org/",
    logo: "/assets/sponsors/teach-for-India.webp"
  },
  {
    name: "My Analytics School",
    url: "https://www.myanalyticsschool.com/",
    logo: "/assets/sponsors/mas.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const SponsorsPage = () => {
  useEffect(() => {
    document.title = "Sponsors | Jagriti - IIT (BHU)";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sponsors-bg">
      {/* <Navbar /> */}
      
      <div className="sponsors-container">
        <motion.div 
          className="sponsors-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="sponsors-title">Our Partners</h1>
          <p className="sponsors-subtitle">
            We are grateful to our partners and sponsors for their invaluable support in making Jagriti a success.
          </p>
        </motion.div>

        <motion.div 
          className="sponsors-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sponsorsData.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="sponsor-image-wrapper">
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} Logo`} 
                  className="sponsor-logo"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default SponsorsPage;
