import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TeamPage.css";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "../../components/TeamCard/TeamCard";
import Footer from "../../components/footer/Footer";
import Typewriter from 'typewriter-effect';

// FontAwesome Imports for the Diamond Grid Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, // Tech
  faPenNib,     // Creative/Content
  faBullhorn,   // PR/Marketing
  faUsers,      // HR/All
  faCalendarCheck, // Events
  faHandHoldingHeart, // Social/Volunteers
  faCamera,     // Media
  faSitemap,    // Management/Logistics
  faLayerGroup  // Default/Misc
} from '@fortawesome/free-solid-svg-icons';

// Import local data
import teamData from "../../data/teamData.js"; 

function TeamPage() {
  const [data, setData] = useState([]);
  const [fixedData, setFixedData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  const galleryRef = useRef(null);
  const teamPageRef = useRef(null);

  // Helper function to map Team Titles to Icons
  const getTeamIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle === "all") return faLayerGroup;
    if (lowerTitle.includes("tech") || lowerTitle.includes("web") || lowerTitle.includes("code")) return faLaptopCode;
    if (lowerTitle.includes("creat") || lowerTitle.includes("design") || lowerTitle.includes("art")) return faPenNib;
    if (lowerTitle.includes("content") || lowerTitle.includes("edit") || lowerTitle.includes("write")) return faPenNib;
    if (lowerTitle.includes("pr") || lowerTitle.includes("public") || lowerTitle.includes("market") || lowerTitle.includes("outreach")) return faBullhorn;
    if (lowerTitle.includes("event") || lowerTitle.includes("manag") || lowerTitle.includes("logist")) return faCalendarCheck;
    if (lowerTitle.includes("media") || lowerTitle.includes("photo") || lowerTitle.includes("video")) return faCamera;
    if (lowerTitle.includes("social") || lowerTitle.includes("volunt") || lowerTitle.includes("ngo")) return faHandHoldingHeart;
    if (lowerTitle.includes("head") || lowerTitle.includes("lead") || lowerTitle.includes("core")) return faSitemap;
    
    return faUsers; // Default fallback
  };

  // Team Fetching from local data
  const fetchTeamData = () => {
    setLoading(true);
    
    const localData = teamData || [];
    const sortedData = [...localData].sort((a, b) => a.teamRank - b.teamRank);
    
    setData(sortedData);
    setFixedData(sortedData);
    
    // Get unique team titles
    const uniqueTitles = ["All", ...new Set(sortedData.map((item) => item.teamTitle))];
    setCollection(uniqueTitles.filter(title => title !== "All")); // Filter out "All" as we handle it manually
    
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    fetchTeamData();
    document.title = "Our Team | Jagriti - IIT (BHU)";
  }, []);

  const gallery_filter = (itemData) => {
    if (itemData === "All") {
      setData(fixedData);
      setActive("All");
    } else {
      const filterData = fixedData.filter((item) => item.teamTitle === itemData);
      setData(filterData);
      setActive(itemData);
    }
  };

  // Group members by team title for "All" view
  const getGroupedData = () => {
    if (active !== "All") return null;
    
    const grouped = {};
    fixedData.forEach(item => {
      if (!grouped[item.teamTitle]) {
        grouped[item.teamTitle] = [];
      }
      grouped[item.teamTitle] = grouped[item.teamTitle].concat(item.members.map(member => ({
        ...member,
        teamTitle: item.teamTitle
      })));
    });
    
    return grouped;
  };

  const groupedData = getGroupedData();

  return (
    <div className="bg">
      {/* Loading Spinner */}
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      {/* Main Content */}
      <div className={`team-page-content ${loading ? 'loading' : ''}`} ref={teamPageRef}>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, #1a589b 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, #4162a8 0%, transparent 50%)
                `
              }}
            />
          </div>

          <div className="hero-container">
            {/* Main Title */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title-container"
            >
              <h1 className="hero-main-title cursive-font">
                Meet Our <span className="hero-highlight cursive-font">Team</span>
              </h1>
              <motion.div 
                className="hero-subscript"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                The Heart of Jagriti
              </motion.div>
            </motion.div>

            {/* Typewriter Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="typewriter-container"
            >
              <div className="typewriter-wrapper cursive-typewriter">
                <Typewriter
                  options={{
                    strings: [
                      "Passionate Changemakers",
                      "Dedicated Volunteers", 
                      "Creative Minds at Work",
                      "Building Social Awareness",
                      "Together for a Better Tomorrow",
                      "Empowering Through Education"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                    cursor: '|',
                    cursorClassName: 'typewriter-cursor'
                  }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-description"
            >
              <p className="description-text cursive-font-light">
                A diverse group of passionate individuals united by a common goal: to enlighten, educate, and empower through meaningful social initiatives.
              </p>
            </motion.div>

            {/* SCROLL INDICATOR */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1, repeat: Infinity, repeatDelay: 2 }}
              className="scroll-indicator"
              onClick={() => {
                const filterSection = document.querySelector('.filter-section');
                if (filterSection) {
                  filterSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="scroll-arrow"></div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="floating-elements">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
            <div className="floating-element element-4"></div>
          </div>
        </section>

        {/* --- NEW DIAMOND GRID FILTER SECTION --- */}
        <div className="filter-section">
          <div className="diamond-grid-container">
            
            {/* "All" Diamond */}
            <div 
              className={`diamond-wrapper ${active === "All" ? "active" : ""}`}
              onClick={() => gallery_filter("All")}
            >
              <div className="diamond-shape">
                <div className="diamond-content">
                  <FontAwesomeIcon icon={faLayerGroup} className="diamond-icon" />
                </div>
              </div>
              <span className="diamond-label">All Teams</span>
            </div>

            {/* Dynamic Team Diamonds */}
            {collection.map((item, index) => (
              <div 
                key={index}
                className={`diamond-wrapper ${active === item ? "active" : ""}`}
                onClick={() => gallery_filter(item)}
              >
                <div className="diamond-shape">
                  <div className="diamond-content">
                    <FontAwesomeIcon icon={getTeamIcon(item)} className="diamond-icon" />
                  </div>
                </div>
                <span className="diamond-label">{item}</span>
              </div>
            ))}

          </div>
        </div>

        {/* Team Members Grid */}
        <div className="team-content">
          {active === "All" && groupedData ? (
            // Grouped view for All Teams
            Object.entries(groupedData).map(([teamTitle, members]) => (
              <div key={teamTitle} className="team-group">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="team-group-title"
                >
                  {teamTitle}
                </motion.h2>
                <motion.div 
                  layout
                  className="galleryContainer" 
                  ref={galleryRef}
                >
                  <AnimatePresence>
                    {members.map((member) => (
                      <motion.div
                        key={uuidv4()}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="galleryItem"
                      >
                        <TeamCard
                          name={member.name}
                          image={member.imageUrl}
                          role={member.role}
                          gmail={member.email}
                          instagram={member.instagram}
                          linkedin={member.linkedin}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))
          ) : (
            // Single team view
            <div className="team-group">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="team-group-title"
              >
                {active}
              </motion.h2>
              <motion.div 
                layout
                className="galleryContainer" 
                ref={galleryRef}
              >
                <AnimatePresence>
                  {data.map((item) =>
                    item.members.map((member) => (
                      <motion.div
                        key={uuidv4()}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="galleryItem"
                      >
                        <TeamCard
                          name={member.name}
                          image={member.imageUrl}
                          role={member.role}
                          gmail={member.email}
                          instagram={member.instagram}
                          linkedin={member.linkedin}
                        />
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamPage;