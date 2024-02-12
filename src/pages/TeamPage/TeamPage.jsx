import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TeamPage.css";
import { motion, AnimatePresence } from "framer-motion";
import TeamCard from "../../components/TeamCard/TeamCard";
import { useFirebase } from "../../context/Firebase";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
  const teamPageRef = useRef(null);
  const spinnerRef = useRef(null);
  //option to remove drag of teams categories
  useEffect(() => {
    const handleResize = () => {
      const isOverflowing = carousel.current.scrollWidth > carousel.current.offsetWidth;
      setWidth(isOverflowing ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0);
    };

    handleResize(); // Call the function initially

    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  // Function to scroll the carousel to the right
  const scrollToRight = () => {
    carousel.current.scrollLeft += 150; // Adjust the scroll amount as needed
  };
  const scrollToLeft = () => {
    carousel.current.scrollLeft -= 150; // Adjust the scroll amount as needed
  };
  // Team Fetching
  const fetchTeamData = async () => {
    const Data = await firebase.getAllDocuments("team");
    const sortedData = [...Data].sort((a, b) => {
      return a.teamRank - b.teamRank;
    });
    console.log(sortedData);

    setData(sortedData);
    setFixedData(sortedData);
    setMemberCount(0);
    sortedData.forEach((item) =>
      setMemberCount((prev) => prev + item.members.length)
    );
    setCollection([...new Set(sortedData.map((item) => item.teamTitle))]);
    setTimeout(() => {
      if (spinnerRef.current) {
        spinnerRef.current.style.display = "none";
      }
    }, 1200);
  };

  useEffect(() => {
    fetchTeamData();
    document.title = "Our Team | Jagriti - IIT (BHU)";
  }, []);

  useEffect(() => {
    // console.log(carousel.current)

    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  }, [fixedData]);

  useEffect(() => {
    const totalCards = Math.floor(
      galleryRef.current?.offsetWidth / (cardRef.current?.offsetWidth + 20)
    );
    console.log(memberCount);
    if (memberCount < totalCards) {
      galleryRef.current.style.justifyContent = "flex-start";
    } else {
      galleryRef.current.style.justifyContent = "center";
    }
    // console.log(totalCards, data.length, data)
  }, [active, memberCount]);

  const gallery_filter = (itemData) => {
    setMemberCount(0);
    const filterData = fixedData.filter((item) => {
      if (item.teamTitle === itemData)
        setMemberCount((prev) => prev + item.members.length);
      return item.teamTitle === itemData;
    });

    setData(filterData);
    setActive(itemData);
    setActiveBtn("");
  };
  function setColor() {
    setMemberCount(0);
    fixedData.forEach((item, index) => {
      setMemberCount((prev) => prev + item.members.length);
    });
    setData(fixedData);
    setActiveBtn("Our Team");
    setActive("Our Team");
  }

  return (
    <div className="bg">
      <div className="flex items-center justify-center " ref={spinnerRef}>
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
      <div className="galleryWrapper" ref={teamPageRef}>
        <div className="filterItem">
          <div className="our-team">
            <h1>{active}</h1>
          </div> 

          <div className="container_carousel">
            {width > 0 && (<div className="scroll-icon" onClick={scrollToLeft}>
              <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '40px', color: 'rgb(65, 98, 168)', paddingBottom: 15, paddingRight: 5 }} />
            </div>)}
            <motion.div
              ref={carousel}
              // className="carousel"
              // whileTap={{ cursor: "grabbing" }}
              // style={{ overflowX: width > 0 ? 'scroll' : 'hidden' }}
              class="flex overflow-x-auto hide-scrollbar justify-between m-4 items-center mb-4 space-x-10 "
            >
              <div

                className="inner-carousel"
                ref={innerCarousel}
                // drag="x"
                // dragConstraints={{
                //   right: 0,
                //   left: -width,
                // }}
              >
                <button
                  onClick={setColor}
                // className={activebtn === "Our Team" ? "selected" : " "}
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
              </div>
            </motion.div>
            {width > 0 && (
              <div className="scroll-icon" onClick={scrollToRight}>
                <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '40px', color: 'rgb(65, 98, 168)', paddingBottom: 15, paddingLeft: 5 }} />
              </div>
            )}</div>
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
      <Footer />
    </div>
  );
}

export default TeamPage;
