import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
// import car from './images/'
import './TeamPage.css'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function TeamPage() {

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [active, setActive] = useState('');
  const [activebtn, setActiveBtn] = useState('#');

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
    setActiveBtn('#')
    setActive("")
  }

  return (
    <div>
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={setColor}
                className={activebtn === '#' ? 'selected' : " "}>All</button>
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


                  <div class="card">
                    <div class="img">
                      <img src={item.image} alt="here" />
                    </div>
                    <span class="heading">{item.name}</span>
                    <p className="link-team">
                      <Link to="/">
                        <i class="fa-brands fa-instagram"></i>
                      </Link>
                      <Link to="/">
                        <i class="fa-brands fa-twitter"></i>
                      </Link>
                      <Link to="/">
                        <i class="fa-brands fa-whatsapp"></i>
                      </Link>
                    </p>
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div >
  );
}

export default TeamPage