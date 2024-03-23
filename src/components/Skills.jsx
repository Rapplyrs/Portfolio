import React from 'react'
import { SectionWrapper } from '../hoc';
import {styles} from './styles'; 
import {motion} from 'framer-motion'; 
import {fadeIn, textVariant} from '../utils/motion';
import {services} from '../constants'; 
import {Tilt} from 'react-tilt'


const ServiceCard = ({index, title, icon, description, points}) => {
  return(
  <Tilt className = "xs:w-[350px] w-full">
    <motion.div 
      variants = {fadeIn("right", "spring", 0.5 * index, 0.75)}
      className ="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" 
      >
    <div
      options = {{
          max: 45, 
          scale: 1, 
          speed: 450
      }}
      className = "bg-tertiary rounded-[20px] py-5 px-12 min-w-[300px] min-h-[600px] flex flex-col items-center items-start"
      >

    <img src ={icon} alt= {title}
    className = "w-16 h-16 object-contain" 
    />
    <h3 className = "text-white text-[20px] font-bold text-center mt-2">
      {title}
    </h3>
    <p className = "text-white mt-4 text-[13px] text-center">{description}</p>
    <h4 className = "mt-10">Skills</h4>
    <ul className ="mt-4 list-disc space-y-2">
      {points.map((point, index) => ( <li key = {index} className = " text-white-100 text-[14px] pl-1 tracking wider">
{point}
</li>
  
       ) )
}
     
    </ul>
    </div>
   
    </motion.div>
  </Tilt>
  )
}

export const Skills = () => {
  return (
    <div>  <motion.div variants={textVariant()}>
    <p className ={styles.sectionSubText}>
    Talents
    </p>
    <h2 className = {styles.sectionHeadText}>
      Skills. 
    </h2>
  </motion.div>
  
  <div className="mt-20 justify-center items-center flex flex-wrap gap-20">
      
      {services.map((service, index) => ( 
        <ServiceCard key={service.title} index={index}{...service}/>
      ))}

    </div>
    
    </div>
  )
  
}
  export default SectionWrapper(Skills, "skills") 
