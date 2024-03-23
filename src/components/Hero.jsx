import { motion } from 'framer-motion'; 
import {emoji} from '../assets'
import { styles } from './styles';
import { ComputersCanvas } from './canvas';
import { useEffect, useState } from 'react'; 

const Hero = () => {




  const [isMobile, setIsMobile ] = useState(false);

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

    <section>
    <div className='relative'>
    <div className = "bg-gradient-to-tr from-gray-700 to-purple-700 relative w-full h-screen">
      <img src = "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg"
       className = 'z-2 w-full h-full object-cover absolute mix-blend-overlay' />
      
      <div className= {`${styles.paddingX} pt-20 absolute inset-0
        top=[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className ="flex flex-col justify-center items-center
            mt-5">
            <div className = "w-5 h-5 rounded-full bg-white" />
            <div className = "w-1 sm:h-80 h-40 bg-gradient-to-r from-white to-gray-300" />

          </div>
          <div>
            <h1 className = {`${styles.heroHeadText} text-gray-100`}>
              Hi, I'm <span className='text-blue-300'>
                John
              </span>
            </h1>
            <p className ={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a software developer, with a wide variety of experiences and skills
            </p>
          </div>
      </div>
      </div>
      <div className = "absolute top-10 left-0 right-0 bottom-0 flex items-center justify-center">
       <img src = {emoji} className = {`${styles.paddingX}  object-cover absolute z-3`}/>
       </div>
      </div>

    

    </section> 
  )
}

export default Hero