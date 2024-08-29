import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import profilePic from "../assets/profilePic.png"
import profilePic from "../assets/ppic.png"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[240px] w-[80%] m-auto mt-[-10px]'>
    <div className="">
    <img
          src={profilePic}
          alt='web-development'
          className='object-contain mb-2  rounded-3xl'
        />
    </div>

  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About <span className='text-[#915EFF]'>Me</span>.</h2>
      </motion.div>

        <div className="md:flex md:flex:col flex-row justify-between items-start">

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] mb-3 max-w-2xl leading-[30px] text-justify'
        >
  

         I have completed <span className='text-[#915EFF]'>BE in Civil Engineering</span>   from KLS Gogte College, Belagavi, in 2020, followed by a <span className='text-[#915EFF]'>Mtech in Transportation Engineering and Management</span>  from BMS College of Engineering, Bangalore, in 2022. My M.Tech project piqued my interest in software development, leading me to complete a web development course from Masai School and work in IT for a year. After gaining valuable experience in the IT industry for a year, I realized that my true calling lay in the field of transportation engineering, where I could make impactful contributions. I have hands-on experience as a <span className='text-[#915EFF]'>Transport planner intern</span>  at Directorate of Urban Land Transport (DULT),Bangalore. <br /> I am currently seeking roles that will allow me to delve deeper into transportation projects, leveraging both my engineering background and software skills to innovate and improve infrastructural development.




        </motion.p>

        <div className='flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
