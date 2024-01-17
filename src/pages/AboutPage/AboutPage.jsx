import React, { useEffect } from "react";
import "./AboutPage.css";
import {fadeIn} from '../../variants';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {motion} from 'framer-motion';
import ClubCard from "../../components/CardAboutPage/ClubCard";
const AboutPage = () => {
  
  useEffect(() => {
    document.title = "About Us | Jagriti IIT (BHU)"
  }, [])
  
  return (
      <div className="bg">
      <div className="flex-row items-center justify-center text-center mx-5">
      <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
          <div className="circular-container1">
            <img
              className="jaglogo-overlay"
              src="/assets/Jagriti_big_logo.webp"
              alt=""
              />
          </div>
          <h2 className="text-4xl my-3 text-blue font-Montserrat tracking-tight font-bold">
            JAGRITI
          </h2>
          <p className="p-3 lg:text-xl w-[70vw] mx-auto tracking-normal text-[#0B1641] font-popins">
            Jagriti is an enlightening and edifying annual social service fest
            concentrated primarily on raising awareness through an assortment of
            educative and profound thinking events. We conduct an array of events
            circulating the theme of social issues. Jagriti is on way to
            self-contentment wherein we help the underprivileged, borrowing time
            and drawing attention from our surplus lives.
          </p>
      </motion.div>
      </div>
      <hr className=" h-[2px] bg-light-blue-700  mx-20" />
      <div className="text-center mx-5">
        <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
        <div className="circular-container2">
        <img className="ssclogo-overlay"
          src="/assets/SSClogo.png"
          alt=""
        />
        </div>
          <h2 className="text-blue font-Montserrat my-3 text-4xl tracking-tight font-bold">
            SOCIAL SERVICE COUNCIL
          </h2>
          <p className="p-3 lg:text-xl w-[70vw] mx-auto tracking-normal text-[#0B1641] font-popins">
            Social Service Council IIT(BHU) Varanasi embraces of the clube
            dedicated to bringing about positive changes in our society's social
            aspects. We are committed to developing and disseminating professional
            knowledge, critical analysis and drafting innovative solutions,
            consequently contributing to overall responsive social welfare. We
            believe that the inherent humane quaities and the sprit of
            volunteerism already existent in every individual needs to be nurtured
            and further developed, thereby blooming out with the full potential to
            benefit the society as a whole.
          </p>
        </motion.div>
      </div>
      <hr className=" h-[2px] bg-light-blue-700 mx-20 mb-10" />

      {/* <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 justify-center"> */}
      <div className="clubBox">
      <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
          <ClubCard
            clubLogo="SC_logo.webp"
            clubName="Sahyog Club"
            clubDescription='Sahyog Club, with a mission of "improving quality education in government schools," collaborates with school teachers to improve the basic literacy and numeracy skills of children, leading to uplift their family conditions and background.'
          />
        </motion.div>
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
          <ClubCard
            clubLogo="KUC_logo.webp"
            clubName="Kashi Utkarsh Club"
            clubDescription="Kashi Utkarsh, as the name suggests, is the development of Kashi. The development is a process that creates growth and positive change, and the volunteers of Kashi Utkarsh strive to get this change in bastis (slums). The prime motto of Kashi Utkarsh is to improve the quality of life of basti people by alleviating poverty through children's education."
          />
        </motion.div>
      </div>
      
      <div className="clubBox mb-10 mt-5">
        <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
            <ClubCard
              clubLogo="HHC_logo.webp"
              clubName="Health and Hygiene Club"
              clubDescription="The Health & Hygiene club promotes and advocates a safe and healthy environment for the society. Our various initiatives involve organising blood donation camps, medicine collection drive and spreading awareness on sensitive issues such as menstruation, diseases, healthy habits, sustainability, etc."
            />
        </motion.div>
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
          <ClubCard
            clubLogo="SPC_logo.webp"
            clubName="Social Projects' Club"
            clubDescription="Social Projects' Club has taken the challenge of empowering society by employing simple and effective methods. We identify the public's problems and incorporate our technical skills with proper planning and strategy to come up with innovative solutions."
          />
          </motion.div>
      </div>

        

      <Footer />
      </div>
  );
};

export default AboutPage;
