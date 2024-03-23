import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'; 

import {styles} from './styles'; 
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import {profile} from '../assets'; 


const About = () => {

  const [isMobile, setIsMobile] = useState(false); 

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if width is 768px or less
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
    return (
   
    <>
    <motion.div variants={textVariant()}>
      <p className ={styles.sectionSubText}>
      Introduction
      </p>
      <h2 className = {styles.sectionHeadText}>
        Overview. 
      </h2>
    </motion.div>
    
    <div className = "flex flex-col justify-center items-center">
        <img src = {profile} alt = "profil_pic"       className={`mt-4 rounded-full ${isMobile ? 'w-[300px]' : 'w-[400px]'}`}
/>
   

    <motion.p
      variants = {fadeIn("", "", 0.1, 1)}
      className = "mt-4 justify-center text-center text-secondary text-[17px] max-w-[800px] leading-[40px]"
      >
        I'm a software developer with knowledge and experience in languages such as Java, JavaScript, and Python. I am also
        proficient in React. I consider myself to be a passionate developer, a quick learner, and a hard worker that is always 
        looking to challenge myself. I work well in collaborative environements with colleagues and clients to build scalable 
        and meaningful solutions. Lets connect! 

    </motion.p>

    </div>

  
    
    </>
  )
}

export default SectionWrapper(About, "about")