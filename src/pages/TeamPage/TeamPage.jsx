import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TeamPage.css";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "../../components/TeamCard/TeamCard";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

// Import local data (adjust the path as needed)
import teamData from "../../data/teamData.js"; // or from "./teamData.js" depending on your structure

function TeamPage() {
  const [data, setData] = useState([]);
  const [memberCount, setMemberCount] = useState(0);
  const [fixedData, setFixedData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [active, setActive] = useState("All");
  const [activebtn, setActiveBtn] = useState("All");
  const [loading, setLoading] = useState(true);

  const carousel = useRef(null);
  const galleryRef = useRef(null);
  const teamPageRef = useRef(null);

  // Team Fetching from local data
  const fetchTeamData = () => {
    setLoading(true);
    
    // Use imported local data
    const localData = teamData || [];
    const sortedData = [...localData].sort((a, b) => a.teamRank - b.teamRank);
    
    setData(sortedData);
    setFixedData(sortedData);
    
    // Calculate total members
    const totalMembers = sortedData.reduce((sum, item) => sum + item.members.length, 0);
    setMemberCount(totalMembers);
    
    // Get unique team titles
    const uniqueTitles = ["All", ...new Set(sortedData.map((item) => item.teamTitle))];
    setCollection(uniqueTitles.filter(title => title !== "All"));
    
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
      const totalMembers = fixedData.reduce((sum, item) => sum + item.members.length, 0);
      setMemberCount(totalMembers);
      setActive("All");
      setActiveBtn("All");
    } else {
      const filterData = fixedData.filter((item) => item.teamTitle === itemData);
      setData(filterData);
      const filteredMembers = filterData.reduce((sum, item) => sum + item.members.length, 0);
      setMemberCount(filteredMembers);
      setActive(itemData);
      setActiveBtn("");
    }
  };

  const scrollCarousel = (direction) => {
    if (carousel.current) {
      const scrollAmount = 200;
      carousel.current.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
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
        teamIcon: item.iconUrl,
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
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-main-title"
            >
              Meet Our <span className="hero-highlight">Team</span>
            </motion.h1>

            {/* Typewriter Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="typewriter-container"
            >
              <div className="typewriter-wrapper">
                <Typewriter
                  options={{
                    strings: [
                      "We Enlighten...",
                      "We Educate...", 
                      "We Empower...",
                      "Together for Social Change",
                      "Raising Awareness Together",
                      "Building a Better Tomorrow"
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
              <p className="description-text">
                The passionate individuals behind Jagriti's mission to enlighten, educate, and empower through social awareness
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hero-buttons"
            >
              <button 
                onClick={() => {
                  const filterSection = document.querySelector('.filter-section');
                  if (filterSection) {
                    filterSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="primary-button"
              >
                Meet Our Team
              </button>
              <button 
                onClick={() => {
                  window.open('/about', '_self');
                }}
                className="secondary-button"
              >
                Our Mission
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="hero-stats-container"
            >
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">{collection.length}</div>
                  <div className="stat-label">Departments</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{memberCount}</div>
                  <div className="stat-label">Team Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Events</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years</div>
                </div>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
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

        {/* Filter Carousel */}
        <div className="filter-section">
          <div className="carousel-container">
            <button 
              className="scroll-btn left"
              onClick={() => scrollCarousel('left')}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <div className="carousel" ref={carousel}>
              <div className="carousel-inner">
                <button
                  onClick={() => gallery_filter("All")}
                  className={`filter-btn ${active === "All" ? "active" : ""}`}
                >
                  All Teams
                </button>
                {collection.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => gallery_filter(item)}
                    className={`filter-btn ${active === item ? "active" : ""}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              className="scroll-btn right"
              onClick={() => scrollCarousel('right')}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
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
                          post={member.teamTitle}
                          icon={member.teamIcon}
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
                          post={item.teamTitle}
                          icon={item.iconUrl}
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