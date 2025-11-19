import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CompetitionCard.css";

const CompetitionCard = ({ title, description, detailedInfo, icon, index, registrationLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRegister = (e) => {
    e.stopPropagation();
    window.open(registrationLink || "https://www.google.com", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card-wrapper"
      onClick={handleFlip}
    >
      <motion.div
        className="card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front */}
        <div className="card-face card-front">
          <div className="card-icon">{icon}</div>
          <h3 className="card-title">{title}</h3>
          <button className="card-btn" onClick={handleRegister}>
            Register Now
          </button>
          <p className="card-hint">Click to view details</p>
        </div>

        {/* Back */}
        <div className="card-face card-back">
          <h3 className="card-title-back">{title}</h3>
          <div className="card-info">
            <p>{detailedInfo || description}</p>
          </div>
          <button className="card-btn card-btn-back" onClick={handleRegister}>
            Register Now
          </button>
          <p className="card-hint">Click to go back</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompetitionCard;
