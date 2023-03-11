import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
// import car from './images/'
import './TeamPage.css'
import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
import TeamCard from "../../components/TeamCard/TeamCard";

function TeamPage() {

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [active, setActive] = useState('Our Team');
  const [activebtn, setActiveBtn] = useState('Our Team');

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))])
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title === itemData);
    console.log(itemData)
    setData(filterData);
    setActive(itemData);
    setActiveBtn('')
  }
  function setColor() {
    setData(GalleryData)
    setActiveBtn('Our Team')
    setActive("Our Team")
  }

  return (
    <div>
      <div className="galleryWrapper">
        <div className="filterItem">
          <div className="our-team">
            <h1>{active}</h1>
          </div>
          <ul>
            <li>
              <button onClick={setColor}
                className={activebtn === 'Our Team' ? 'selected' : " "}>All</button>
            </li>
            {
              collection.map((item) =>
                <li>
                  <button onClick={() => { gallery_filter(item) }}
                    className={active === item ? 'selected' : " "}>{item}</button>
                </li>)}
          </ul>
        </div>
        <motion.div
          layout
          className="galleryContainer">
          <AnimatePresence>
            {
              data.map((item) =>
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.36 }}
                  layout
                  key={item.id}
                  className="galleryItem">

                  <TeamCard name = {item.name} image={item.image} icon={item.icon} />
                </motion.div>
              )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div >
  );
}

export default TeamPage