import { GalleryData } from "./GalleryData";
import { useEffect, useState, useRef } from "react";
import "./TeamPage.css";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "../../components/TeamCard/TeamCard";

function TeamPage() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [active, setActive] = useState("Our Team");
  const [activebtn, setActiveBtn] = useState("Our Team");

  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const innerCarousel = useRef(null);
  const galleryRef = useRef(null);
  const cardRef = useRef(null);


  useEffect(() => {
    // console.log(carousel.current)
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth );
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
  }, [innerCarousel.current]);


  useEffect(() => {
    
    const totalCards = Math.floor(galleryRef.current?.offsetWidth / (cardRef.current?.offsetWidth+20))
    if(data.length <totalCards)
    {
      galleryRef.current.style.justifyContent = "flex-start";
    }
    else
    {
      galleryRef.current.style.justifyContent = "center";
    }

  }, [active, data.length])
  

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title === itemData);
    // console.log(itemData);
    setData(filterData);
    setActive(itemData);
    setActiveBtn("");
  };
  function setColor() {
    setData(GalleryData);
    setActiveBtn("Our Team");
    setActive("Our Team");
  }

  return (
    <div>
      <div className="galleryWrapper">
        <div className="filterItem">
          <div className="our-team">
            <h1>{active}</h1>
          </div>

          <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div
              className="inner-carousel"
              ref={innerCarousel}
              drag="x"
              dragConstraints={{
                right: 0,
                left: -width,
              }}
         
            >
              <button
                onClick={setColor}
                className={activebtn === "Our Team" ? "selected" : " "}
              >
                All
              </button>

              {collection.map((item, index) => (
                <button
                key={index}
                  onClick={() => {
                    gallery_filter(item);
                  }}
                  className={active === item ? "selected" : " "}
                >
                  {item}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <motion.div layout className="galleryContainer" ref={galleryRef}>
          <AnimatePresence>
            {data.map((item) => (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.36 }}
                layout
                key={item.id}
                className="galleryItem"
                ref={cardRef}
              >
                <TeamCard name={item.name} image={item.image} post={item.title} icon={item.icon} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamPage;
