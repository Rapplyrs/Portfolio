import React, {useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { styles } from './styles';

import { navLinks } from '../constants/index';
import {logo, menu, close } from '../assets'


const Navbar = () => {

  const [active, setActive] = useState(""); 
  const [toggle, setToggle] = useState(false); 

  return (
    <nav className ={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 bg-gray-900`}>
      <div className ="w-full flex justify-between items-center max-w-7x1 mx-auto" >
              <Link to = "/" 
                    className = "flex items-center gap-2" 
                    onClick = {() => {
                    setActive("");
                    window.scrollTo(0,0); 
              }}> 

                    <img src = {logo} alt = "logo" className ="w-9 h-9 object-contain" />
                    <p className = " text-white text-[18px] font-bold cursor-pointer flex"> 
                    John &nbsp;
                    <span className="lg:block hidden"></span> </p>
               </Link>

               <ul 
                    className = "list-none hidden lg:flex flex-row gap-10">
                    {navLinks.map((Link) => (
                    <li
                        key = {Link.id}
                        className = {`${
                          active === Link.title 
                          ? " text-white"
                          : " text-secondary"
                        } hover:text-white text-[18px] font-medium cursor-pointer`}
                        onClick={() => setActive(Link.title)}
                    >
                      {Link.id === "resume" ? (    
                      <a href="./Resume.pdf"  // Replace with the actual path to your resume file
                         download="pdf"  // Specify the desired filename
        >
          {Link.title}
        </a>) : (
                    <a href = {`#${Link.id}`}>{Link.title}</a>)}
                    </li>  
                    ))} 
               </ul>

               <div className ="lg:hidden flex flex-1 justify-end items-center">
                    <img
                      src = {toggle ? close: menu}
                      alt = "menu"
                      className ="w-[28px] h-[28px] object-contain cursor-pointer"
                      onClick ={() => setToggle(!toggle)}
                />
                
               </div>

               <div className={`${!toggle ? 'hidden': 'flex'} p-6 black gradient absolute top-20
                    right-0  my-1min-w-[140px] z-10 rounden-xl`}
                    style={{ backgroundColor: '#1a202c', height: '100vh'}}
                    >
                    <ul 
                    className = "list-none flex items-start flex-col gap-4 " style={{ height: 'auto' }}>
                    {navLinks.map((Link) => (
                    <li
                        key = {Link.id}
                        className = {`${
                          active === Link.title 
                          ? " text-white"
                          : " text-secondary"
                        } font-poppins font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                          setToggle(!toggle); 
                        }}
                    >
                    <a href = {`#${Link.id}`}>{Link.title}</a>
                    </li>  
                    ))} 
                    
                    <li>
                      
                    </li>
               </ul>

               </div>
         
      </div>
    </nav>
  )
}

export default Navbar