import React, { useState } from "react";
import logo from '../assets/jnd.png'
import { MenuIcon, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const [isHovered, setIsHovered] = useState(false);
  

  return (
    <nav className="font-black relative sm:flex justify-between items-center bg-black px-10 py-2 z-10">

    {/* menu button */}
    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden pt-3 z-20 text-white">
      {/* Container to position icons on top of each other */}
      <div className="relative h-8 w-8 top:1.5 ">
        <MenuIcon
          className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
          size={40} color="white" />
        <X
          className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
          color="white" size={40} />
      </div>
    </button>


    {/* Mobile Hamburger */}
    {isOpen && (
      <div className =" bg-black min-h-screen min-w-screen lg:hidden flex justify-center items-start p-12 transition-all duration-500 ease-in-out">
        <div className="flex flex-col gap-12 text-4xl  text-white  font-bold ">
        <a href="#home" onClick={() => setIsOpen(false)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          HOME
        </a>
        <a href="#tour" onClick={() => setIsOpen(false)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          EVENT
        </a>
        <a href="#about" onClick={() => setIsOpen(false)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          ABOUT
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          CONTACT
        </a>
      </div>
      </div>
    )}
   


      {/* Desktop Links */}
      <div className=" mt-3 gap-8 hidden lg:flex justify-end items-end text-white text-4xl font-bold pl-3 ">
        <a href="#home" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          HOME
        </a>
        <a href="#tour" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          EVENT
        </a>
        <a href="#about" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          ABOUT
        </a>
        <a href="#contact" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          CONTACT
        </a>
      </div>

      {/* Left: Logo */}
      <div className="absolute top-[-20px] right-[150px] md:right-0 lg:flex lg:justify-center lg:items-center ">
        <img
          src={logo}
          alt="Logo"
          className="h-[140px] [w-140px]"
        />

      </div>

      

     

    

      
    </nav>
  );
};

export default Navbar;
