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
  faLayerGroup,  // Default/Misc
  faUserTie,    // Convenors
  faBriefcase,  // Council Secretary
  faPalette,    // Design
  faNewspaper,  // Content
  faChartLine,  // Marketing
  faHandshake   // PR
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
    if (lowerTitle.includes("conven")) return faUserTie;
    if (lowerTitle.includes("secret") || lowerTitle.includes("council")) return faBriefcase;
    if (lowerTitle.includes("tech") || lowerTitle.includes("web") || lowerTitle.includes("code")) return faLaptopCode;
    if (lowerTitle.includes("design") || lowerTitle.includes("art") || lowerTitle.includes("creat")) return faPalette;
    if (lowerTitle.includes("content") || lowerTitle.includes("edit") || lowerTitle.includes("write")) return faNewspaper;
    if (lowerTitle.includes("market")) return faChartLine;
    if (lowerTitle.includes("pr") || lowerTitle.includes("relation")) return faHandshake;
    if (lowerTitle.includes("public") || lowerTitle.includes("outreach")) return faBullhorn;
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
          <div className="hero-container">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="tech-badge">
                &lt; CORE_TEAM /&gt;
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-title-container"
            >
              <h1 className="hero-main-title">
                JAGRITI <span className="hero-highlight">TEAM</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="typewriter-container"
            >
              <div className="typewriter-wrapper" style={{ fontFamily: "'Courier New', monospace", color: "#1a589b" }}>
                <span style={{ marginRight: '10px' }}>$</span>
                <Typewriter
                  options={{
                    strings: [
                      "initiate_change()",
                      "deploy_solutions()", 
                      "empower_users()",
                      "execute_vision()"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-description"
            >
              <p className="description-text">
                The architects, developers, and visionaries building the future of social impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- NEW MODERN FILTER SECTION --- */}
        <div className="filter-section">
          <div className="filter-container">
            
            {/* "All" Tab */}
            <div 
              className={`filter-tab ${active === "All" ? "active" : ""}`}
              onClick={() => gallery_filter("All")}
            >
              <FontAwesomeIcon icon={faLayerGroup} className="filter-icon" />
              <span>All Teams</span>
            </div>

            {/* Dynamic Team Tabs */}
            {collection.map((item, index) => (
              <div 
                key={index}
                className={`filter-tab ${active === item ? "active" : ""}`}
                onClick={() => gallery_filter(item)}
              >
                <FontAwesomeIcon icon={getTeamIcon(item)} className="filter-icon" />
                <span>{item}</span>
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