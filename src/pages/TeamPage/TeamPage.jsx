import { GalleryData } from "./GalleryData";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TeamPage.css";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "../../components/TeamCard/TeamCard";
import { useFirebase } from "../../context/Firebase";

function TeamPage() {
  const firebase = useFirebase();

  const [data, setData] = useState([]);
  const [memberCount, setMemberCount] = useState(0);
  const [fixedData, setFixedData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [active, setActive] = useState("Our Team");
  const [activebtn, setActiveBtn] = useState("Our Team");

  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const innerCarousel = useRef(null);
  const galleryRef = useRef(null);
  const cardRef = useRef(null);

  // Team Fetching
  const fetchTeamData = () => {
    const Data = firebase.getAllDocuments("team");
  };

  useEffect(() => {
    fetchTeamData();
    // console.log(firebase.teamData);
  }, []);

  useEffect(() => {
    // console.log(carousel.current)

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
  }, [innerCarousel.current]);

  useEffect(() => {
    const totalCards = Math.floor(
      galleryRef.current?.offsetWidth / (cardRef.current?.offsetWidth + 20)
    );
    console.log(memberCount)
    if (memberCount < totalCards) {
      galleryRef.current.style.justifyContent = "flex-start";
    } else {
      galleryRef.current.style.justifyContent = "center";
    }
    // console.log(totalCards, data.length, data)
  }, [active, memberCount]);

  useEffect(() => {
    const sortedData = [...firebase.teamData].sort((a, b) => {
      return a.teamRank - b.teamRank;
    });

    setData(sortedData);
    setFixedData(sortedData);
    setCollection([
      ...new Set(
        sortedData.map((item) => {
          setMemberCount((prev) => prev + item.members.length);
          return item.teamTitle;
        })
      ),
    ]);
  }, [firebase.teamData]);

  const gallery_filter = (itemData) => {
    setMemberCount(0);
    const filterData = fixedData.filter((item) => {
      if(item.teamTitle === itemData)
      setMemberCount((prev) => prev + item.members.length);
      return item.teamTitle === itemData;
    });

    setData(filterData);
    setActive(itemData);
    setActiveBtn("");
  };
  function setColor() {
    setMemberCount(0);
    fixedData.forEach((item, index)=>{
      setMemberCount((prev)=>prev+item.members.length);
    })
    setData(fixedData);
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

          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
          >
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
            {data.map((item, index) =>
              item.members.map((member) => (
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.36 }}
                  layout
                  key={uuidv4()}
                  className="galleryItem"
                  ref={cardRef}
                >
                  <TeamCard
                    name={member.name}
                    image={member.imageUrl}
                    post={item.teamTitle}
                    icon={item.iconUrl}
                  />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamPage;
