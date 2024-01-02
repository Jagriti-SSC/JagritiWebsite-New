import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa';
import {fadeIn} from '../../variants';
import Faq from '../../components/Faq/Faq'
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
                    <div className='max-w-md'>Kashiyatra Offers You The Chance To Represent And Promote The Festival At Your Colleges And Universites! Campus Ambassadors Get A Chance To Be An Extended Part Of The Organising Team Of Kashiyatra'24. All You Have To Do Is Lead The Contingent From Your College Taking Part In KY And Make Sure That People In Your Institute Know About It. Be The Leader In A Crowd Of Followers!</div>
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
                    <div className='max-w-md'>For Bringing Together A Fest Which Encircles Diversity Like Never Before We Are Reaching Out To Colleges Across The Country. The Selected Campus Ambassador In His/Her Tenure Will Represent Kashiyatra, IIT(BHU) In His/Her College And Will Become An Integral Member Of The Team.
                    <br />
                    - Become A Leader
                    <br />
                    - Update Your Organisational
                    <br />
                    - Polish Your Communicating & Public Speaking Skills.
                    <br />
                    - Get The Exposure To Online And Media Marketing.
                    </div>
                </motion.div>
                
            </div>
        </div>

    </div>
    <div>
        <Faq/>
    </div>
    

  </div>
  )
};

export default CA;