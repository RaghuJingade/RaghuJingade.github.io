import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import { styles } from "../styles";
import git from "../assets/github.png";
import likin from "../assets/linkin.png";
import resumePDF from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Raghavendra</span>
          </h1>
          <TypeAnimation
            sequence={[
              'I do Transport Planning.', 2000,
              'I do Highway Designing.', 2000,
              'I do Traffic Optimizing.', 2000,
              () => {}
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          />

          <div className="mt-4 flex gap-4">
            <a href="https://www.linkedin.com/in/raghavendra-jingade-4b0505194/" target="_blank" className="w-[45px] h-[45px] rounded-lg bg-[#915EFF] hover:bg-[#7842ec] flex items-center justify-center">
              <img src={likin} className="w-[96%]" alt="LinkedIn" />
            </a>
            <a href={resumePDF} target="_blank" download className="flex items-center justify-center bg-[#915EFF] text-white rounded-lg p-2 px-4 transition duration-300 hover:bg-[#7842ec]">
              <span className="flex items-center justify-center text-white font-medium transition duration-300">Resume</span>
            </a>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
