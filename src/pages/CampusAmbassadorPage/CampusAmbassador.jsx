import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa';
import {fadeIn} from '../../variants';
import CAFaq from '../../components/CAFaq/CAFaq'
import Navbar from '../../components/navbar/Navbar';
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";
import "./CampusAmbassador.css"

// color: rgb(26 88 155/var(--tw-text-opacity));

const CA = () => {
  return (
  <div>
    <Navbar/>
    <div className='h-screen bg-center relative bg-no-repeat bg-cover w-full flex items-center justify-center mb-20 section_top' >
            
            <div>
                <motion.div  variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='
                text-6xl flex items-center justify-center mb-2 text-[#1A589B] text-center'>Become A Campus Ambassador</motion.div>
                <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='text-2xl flex items-center justify-center mb-20 text-center text-white'>Join us to become a campus ambassador and proudly represent our brand on your college campus</motion.div>
                <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex justify-center items-center'> 
                <a href="./ca">
                <button >
                    
                    Apply Now
                </button>
                </a>
                    
                </motion.div>
            </div>

    </div>
    <div className='container mx-auto '>
        
        <div className=' flex items-center justify-center mb-[80px] '>
            <div className='flex items-center justify-between  gap-x-20'>
                <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
                    <div className='text-5xl mb-2 text-[#1A589B]'>What is Campus Ambassador</div>
                    <div className='max-w-md'>A Campus Ambassador for Jagriti is a student who acts as a liaison between the organizing committee of Jagriti, which is an annual social awareness fest held at IIT BHU (Indian Institute of Technology, Banaras Hindu University), and the student population that is present on the campus. A Campus Ambassador's primary responsibility is publicizing Jagriti-related events inside their institution.
</div>
                </motion.div>
                <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
                    <img src={img2} alt="" />
                </motion.div>
            </div>
        </div>
        <hr className=" h-[2px] bg-light-blue-700  mx-20 mb-[80px]" />
        <div className='flex items-center justify-center mb-20 '>
            <div className='flex items-center justify-between gap-x-20 '>
                <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
                    <img src={img3} alt="" />
                </motion.div>
                <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
                    <div className='text-5xl mb-2 text-[#1A589B]'>Why Campus Ambassador?</div>
                    <div className='max-w-md'>
                        <ul className='list-decimal'>
                            <li>
                            Networking Opportunities: Connect with fellow students, faculty, and industry professionals.
                            </li>
                            <li>
                            Leadership Development: Hone leadership skills by organizing events, coordinating activities, and leading a team.
                            </li>
                            <li>
                            Enhanced Communication Skills: Improve public speaking by presenting information to various audiences.
                            </li>
                            <li>
                            Resume Building: Add a notable position to your resume, demonstrating your commitment to extracurricular activities.
                            </li>
                            <li>
                            Skill Development: Acquire and enhance various skills, including marketing, event planning, social media management, and organizational skills.
                            </li>
                            <li>
                            Personal Growth: Build self-confidence and self-esteem by taking on responsibilities and challenges.
                            </li>
                            <li>
                            Teamwork and Collaboration: Foster teamwork and collaboration by working with diverse individuals.
                            </li>
                            <li>
                            Recognition and Rewards: Receive recognition for your contributions through awards, certificates, or incentives.
                            </li>
                        </ul>
                    </div>
                </motion.div>
                
            </div>
        </div>

        <hr className=" h-[2px] bg-light-blue-700  mx-20 mb-[80px]" />
        <div className='flex items-center justify-center mb-20 '>
            <div className='flex items-center justify-between gap-x-20 '>
                
                <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
                    <div className='text-5xl mb-2 text-[#1A589B]'>Incentives</div>
                    <div className='max-w-md'>
                        <ul className='list-decimal'>
                            <li>
                            Certificates of Distinction: Personalized certificates recognizing the dedicated contribution and impactful efforts of Campus Ambassadors towards Jagriti’24, emphasizing their commitment to driving social awareness.
                            </li>
                            <li>
                            Exclusive Event Merchandise: Branded merchandise like sustainable apparel, accessories, or eco-friendly items unique to Jagriti’24, serving as tokens of appreciation for their active involvement.
                            </li>
                            <li>
                            Tailored Letter of Recommendation: Individualized letters highlighting the Ambassador's proactive engagement, achievements, and influence as part of Jagriti’24, offering a commendable endorsement for their future pursuits.
                            </li>
                            <li>
                            Pioneering Mentorship Sessions: Engage Ambassadors in one-on-one mentorship sessions with industry experts in social entrepreneurship, innovation, or activism. These sessions focus on skill enrichment, personal growth, and strategies for creating lasting societal impact.
                            </li>
                            <li>
                            Recognition for Exceptional Impact: Public acknowledgement or spotlight features during the event for Ambassadors showcasing remarkable outreach, engagement, or innovative methods in advancing awareness.
                            </li>
                            <li>
                            Access to Exclusive Workshops and Resources: Grant access to specialized workshops, webinars, or resource materials pertinent to social impact, empowering Ambassadors with specialized knowledge and tools.
                            </li>
                            <li>
                            Networking Platforms: Curate dedicated networking avenues or forums enabling Ambassadors to connect with peers, experts, and influential figures, fostering a collaborative community for ongoing support and inspiration.
                            </li>
                            <li>
                            Exposure: Get exposure to IIT faculties and Jagriti teams and opportunities to learn their coordination for working on a fest
                            </li>
                        </ul>
                    </div>
                    
                </motion.div>
                <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
                    <img src={img3} alt="" />
                </motion.div>
                
            </div>
        </div>
        
        <hr className=" h-[2px] bg-light-blue-700  mx-20 mb-[80px]" />
        <div className='flex-row items-center justify-center'>

        
            <div className='flex items-center justify-center mb-5'>
                <div className='flex items-center justify-between gap-x-20 '>
                    <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} >
                        <img src={img3} alt="" />
                    </motion.div>
                    
                    <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
                        <div className='text-5xl mb-2 text-[#1A589B]'>Responsibilities</div>
                        <div className='max-w-md'>
                            <ul className='list-decimal'>
                                <li>
                                Share event details and updates through various channels and bring a decent number of quality registrations to be on the top performers' list.
                                </li>
                                <li>
                                Publicize Jagriti'24's various online competitions to attract a reasonable number of quality participants.
                                </li>
                                <li>
                                Encourage students to follow JAGRITI'24  social media accounts for the latest updates.
                                </li>
                                <li>
                                Contribute actively to team discussions and determine the best way to promote our mega-events.
                                </li>
                                <li>
                                Distribute posters, flyers, and promotional materials across your college's various departments and common areas.
                                </li>
                                <li>
                                Send targeted emails to student mailing lists, highlighting the uniqueness of JAGRITI'24 and inviting them to participate.
                                </li>
                                <li>
                                Establish connections with Campus Ambassadors from other colleges to promote cross-participation and collaboration.
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
    

  </div>
  )
};

export default CA;