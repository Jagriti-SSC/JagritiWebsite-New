import React, { useEffect } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

import img4 from '../../assets/images/jagriti_img4.png';
import img5 from '../../assets/images/jagriti_img5.png';
import img6 from '../../assets/images/jagriti_img6.png';
import img7 from '../../assets/images/jagriti_img7.png';
import img8 from '../../assets/images/jagriti_img8.png';
// import img9 from '../../assets/images/jagriti_img9.png';
import img10 from '../../assets/images/jagriti_img10.png';

import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa';
import {fadeIn} from '../../variants';
import CAFaq from '../../components/CAFaq/CAFaq'
import Navbar from '../../components/navbar/Navbar';
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";
import "./CampusAmbassador.css"
import Footer from '../../components/footer/Footer';

// color: rgb(26 88 155/var(--tw-text-opacity));

const CA = () => {
    useEffect(() => {
        document.title = "CA | Jagriti IIT (BHU)"
      }, [])
  return (
  <div>
   
    {/* <div className='section_top'></div> */}
    <div className='h-screen bg-center relative bg-no-repeat bg-cover w-full flex items-center justify-center mb-20 section_top ' >
            
            <div>
                <motion.div  variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='
                text-6xl flex items-center justify-center mb-2 text-[#1A589B] text-center'>Become A Campus Ambassador</motion.div>
                <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='text-2xl flex items-center justify-center mb-20 text-center text-white'>Join us to become a campus ambassador and proudly represent our brand on your college campus</motion.div>
                <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex justify-center items-center'> 
                <a href="./ca" >
                    <div className='applybtn'>
                <button className='p-[10px] font-extrabold' >
                    <span className='font-black'>Apply Now</span>
                   
                </button>
                </div>
                </a>
                    
                </motion.div>
            </div>

    </div>
    <div className='container mx-auto '>
        
        <div className=' flex  items-center justify-center mb-[10px] md:mb-[80px] '>
            <div className='flex items-center overflow:hidden justify-between  gap-x-20  '>
                <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
                    <div className='text-5xl mb-4 text-[#1A589B]'>What is Campus Ambassador?</div>
                    <div className='max-w-md'>A Campus Ambassador for Jagriti is a student who acts as a liaison between the organizing committee of Jagriti, which is an annual social awareness fest held at IIT BHU (Indian Institute of Technology, Banaras Hindu University), and the student population that is present on the campus. A Campus Ambassador's primary responsibility is publicizing Jagriti-related events inside their institution.
                    </div>
                </motion.div>
                <motion.div className=" Invisible2" variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
                    <img src={img6} alt="" />
                </motion.div>
            </div>
        </div>
        <hr className=" h-[2px] bg-light-blue-700 mx-5px md:mx-20 mb-[10px] md:mb-[80px]" />
        <div className=' flex items-center justify-center mb-[10px] md:mb-[20px] '>
            <div className='flex md:flex-row items-center justify-between gap-x-20 '>
                <motion.div className="Invisible2" variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
                    <img src={img8} alt="" />
                </motion.div>
                <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
                    <div className='text-5xl mb-4 text-[#1A589B]'>Why Campus Ambassador?</div>
                    <div className='max-w-md'>
                        <ul className='list-disc space-y-2'>
                            <li>
                            <b>Networking Opportunities:</b> Connect with fellow students, faculty, and professionals.
                            </li>
                            <li>
                            <b>Leadership Development:</b> Organize events, coordinate activities, and lead a team.
                            </li>
                            <li>
                            <b>Enhanced Communication Skills:</b> Improve public speaking by presenting to diverse audiences.
                            </li>
                            <li>
                            <b>Resume Building:</b> Demonstrate commitment with a notable extracurricular position.
                            </li>
                            <li>
                            <b>Skill Development:</b> Acquire marketing, event planning, and organizational skills.
                            </li>
                            <li>
                            <b>Personal Growth:</b> Build self-confidence by taking on responsibilities and challenges.
                            </li>
                            <li>
                            <b>Teamwork and Collaboration:</b> Work with diverse group of individuals.
                            </li>
                            <li>
                            <b>Recognition and Rewards:</b> Acknowledgment through awards, certificates, or incentives.
                            </li>
                        </ul>
                    </div>
                </motion.div>
                
            </div>
        </div>
        <hr className=" h-[2px] bg-light-blue-700 mx-5px md:mx-20 mb-[10px] md:mb-[80px]" />
        <div className=' flex  items-center justify-center mb-[10px] md:mb-[20px] '>
            <div className='flex md:flex-row items-center justify-between gap-x-20 '>
                
                <motion.div className="min-w-3/5"variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
                    <div className='text-5xl mb-4 text-[#1A589B]'>Incentives</div>
                    <div className='max-w-md'>
                        <ul className='list-disc space-y-2'>
                            <li>
                            <b>Certificates of Distinction:</b> Personalized recognition for impactful contributions.
                            </li>
                            <li>
                            <b>Exclusive Event Merchandise:</b> Branded items as tokens of appreciation.
                            </li>
                            <li>
                            <b>Tailored Letter of Recommendation:</b> Highlighting proactive engagement and achievements.
                            </li>
                            <li>
                            <b>Access to Exclusive Resources:</b> Specialized workshops, webinars, and materials.
                            </li>
                            <li>
                            <b>Networking Platforms:</b> Connect with peers, experts, and influential figures.
                            </li>
                            <li>
                            <b>Exposure to IIT Faculties and Teams:</b> Learn fest coordination and network with faculty.
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div className="Invisible2" variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
                        <img src={img7} alt="" />
                </motion.div>
                
            </div>
        </div>

        
        <hr className=" h-[2px] bg-light-blue-700 mx-5px md:mx-20 mb-[10px] md:mb-[80px]" />
        <div className='flex-row items-center justify-center'>
            <div className='flex items-center justify-center mb-5'>
                <div className='flex items-center justify-between gap-x-20 '>
                    <motion.div className="Invisible2" variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
                        <img src={img5} alt="" />
                    </motion.div>
                    
                    <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
                        <div className='text-5xl mb-4 text-[#1A589B]'>Responsibilities</div>
                        <div className='max-w-md'>
                            <ul className='list-disc space-y-2'>
                                <li>
                                Drive quality registrations by sharing event details through various channels.
                                </li>
                                <li>
                                Promote Jagriti'24 online competitions for quality participant engagement.
                                </li>
                                <li>
                                Encourage students to stay updated by following JAGRITI'24 social media accounts.
                                </li>
                                <li>
                                Actively contribute to team discussions for effective mega-event promotion.
                                </li>
                                <li>
                                Distribute posters, flyers, and promotional materials across your college campus.
                                </li>
                                <li>
                                Send targeted emails highlighting JAGRITI'24's uniqueness to student mailing lists.
                                </li>
                                <li>
                                Foster cross-participation by connecting with Campus Ambassadors from other colleges.
                                </li>
                            </ul>
                        </div>
                        
                    </motion.div>
                
                </div>
            </div>
            <div className='text-center w-4/5 flex items-center justify-center m-auto font-bold'>   
            By diversifying your approach and engaging with different facets of college life, you can maximize the impact of the Campus Ambassador role in promoting JAGRITI 24 across colleges.
            </div>
        </div>

    </div>
    <div>
        <CAFaq/>
    </div>
    
    <Footer />
  </div>
  )
};

export default CA;
