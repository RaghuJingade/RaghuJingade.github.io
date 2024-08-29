import React from 'react'
import Tech from './Tech'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


function Skills() {
  return (
    <div className='max-w-6xl mx-6 md:m-auto '>
    <p className={styles.sectionSubText}>What I am Expert In?</p>
      <h2 className={styles.sectionHeadText}><span className='text-[#915EFF]'>My <span className='text-white'>Skills</span></span>.</h2>
      <Tech />
    </div>
  )
}
export default SectionWrapper(Skills, "skill");