import { Calendar, ArrowRight, MapPin  } from 'lucide-react'
import React, { useRef } from 'react'
import gsap from "gsap";
import con from '../assets/nightcon.png'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Event = () => {
  const tour = useRef(null)

  useGSAP(() => {
    gsap.from(tour.current,{
      opacity: 0, // Corrected: Animate from 0 opacity for a fade-in effect
      duration:0.5,
      x:-200,
      delay:0.5,
      stagger:0.3,
      scrollTrigger:{
        trigger:tour.current,
        start:"top 90%",
        bottom:"bottom 50%"
      }
    })
  });

  return (
    // Tours section
    <>
    <section id='tour' ref={tour} className='max-w-9xl'>
        <div className='ml-4 mt-12  md:ml-10 '>
            <h1 className='font-manuka text-white font-black text-9xl uppercase lg:text-9xl'>Events</h1>
        </div>

        {/* <div className='grid grid-cols-1 grid-rows-1 px-12 pr-8 pt-8 gap-6  sm:ml-2 sm:grid-cols-2 lg:grid-cols-3 '> */}

      <div className='md:flex sm:lex-col xl:flex justify-between items-center mt-12 ml-3  gap-2 '>
          <div className=''>
              <img className='md:p-7 h-full w-[800px] object-cover' src={con} alt="COMING SOON" />
          </div>


        <div className='text-white mt-12  sm:mx-auto xl:mx-auto lg:mt-0 text-center flex flex-col gap-12  h-[500px] xl:w-[500px] border border-gray-100 bg-gradient-to-br from-slate-900 via-indigo-950 to-black'>
            
        <div className='font-manuka  text-center sm:pl-6 sm:text-5xl text-6xl mt-5 '>
           Pineapple Express
        </div>

         <div className=' flex  items-center lg:ml-15 pl-10  sm:pl-20 sm:text-xl  font-inter  text-2xl mt-2 gap-3'>
         <MapPin/> LowerParel/Mumbai
        </div>

        <div className='flex items-center text-center lg:ml-20 text-2xl ml-2 sm:pl-15 pl-10  font-inter  sm:text-xl  sm:ml-12 text-[20px] md:gap-3 '>
          <Calendar />&nbsp;GatesOpen<ArrowRight/> 8:00PM
        </div>

         <div className='flex font-inter items-center mx-auto mt-[70px] '>
        <button className='font-Anton font-extrabold text-3xl lg:h-20 lg:w-70 mb-8 h-20 w-60  border border-white  hover:border  hover:bg-white hover:text-black mt-[1.5rem] ml-auto transition-all duration-500 ease-in-out cursor-pointer'>
        PRE BOOK
       </button>
        </div>

        
        </div>
      </div>

          


        {/* isaac butterfield */}
        {/* <div className='text-white border border-gray-500 '>
            <img className='p-7 h-[300px] w-[800px] object-cover object-top ' src={con} alt="isaac butterfield" />
        
         <div className='font-inter ml-8 text-4xl blur-sm'>
            <h1>Isaac Butterfield</h1>
        </div>

        <div className='font-inter ml-9 text-xl mt-2 '>
           Pineapple Express
        </div>

        <div className='flex items-center font-inter ml-8 text-[15px] md:text-2xl  gap-1 md:gap-3  mt-12'>
          <Calendar /> Gates Open<ArrowRight/> 8:00PM
        </div>

        <div className=' flex  items-center font-inter ml-8 text-1xl mt-6 gap-3'>
         <MapPin/> LowerParel/Mumbai
        </div>

        <div className='flex  items-center px-8'>
        <button className='font-Anton font-extrabold text-3xl  h-20 w-70 mb-8  border border-white bg-black hover:border  hover:bg-white hover:text-black mt-[2rem] ml-auto transition-all duration-500 ease-in-out cursor-pointer'>
        PRE BOOK
       </button>
        </div>
       
        
        </div> */}
       

       {/* Harry Mack */}
        {/* <div className='text-white border border-gray-500 '>
            <img className='p-7 h-[300px] w-[800px] object-cover object-top' src="https://cdn.prod.website-files.com/664aff04588e94bdb284d60f/66a04257adf567ee81d78e7a_HM%20WEB%20COVER-p-1080.jpg" alt="isaac butterfield" />
        
         <div className='font-inter ml-8 text-4xl'>
            <h1>Abhay Mack</h1>
        </div>

        <div className='font-inter ml-8 text-1xl mt-2'>
            ODISHA
        </div>

        <div className=' flex  items-center font-inter ml-8 text-1xl md:text-2xl gap-3 mt-12'>
          <Calendar /> 2 Oct 2024 <ArrowRight/> 16 Oct2024
        </div>

        <div className=' flex  items-center font-inter ml-8 text-2xl mt-6 gap-3'>
         <MapPin/> INDIA
        </div>

        <div className='flex  items-center px-8'>
        <button className='font-Anton font-extrabold text-3xl mb-8 h-20 w-70   border border-white bg-black hover:border  hover:bg-white hover:text-black mt-[2rem] ml-auto transition-all duration-500 ease-in-out cursor-pointer'>
        BOOK NOW
       </button>
        </div>
       
        
        </div> */}


        {/*Steve-O */}
        {/* <div className='text-white border border-gray-500 '>
            <img className='p-7 h-[300px] w-[800px] object-cover object-top' src="https://cdn.prod.website-files.com/664aff04588e94bdb284d60f/66a09c5f5ce5544c18c53c48_SteveOWebCover-p-1080.jpg" alt="isaac butterfield" />
        
         <div className='font-inter ml-8 text-4xl'>
            <h1>MAURYA-O</h1>
        </div>

        <div className='font-inter ml-8 text-1xl mt-2 '>
            My List Tour
        </div>

        <div className=' flex items-center font-inter ml-8  text-[15px] md:text-2xl  gap-3 mt-12'>
          <Calendar /> 17Feb2023 <ArrowRight/> 9May2023
        </div>

        <div className=' flex items-center font-inter ml-8 text-1xl mt-6 gap-3'>
         <MapPin/> MAHA/ NAVI-MUMBAI
        </div>

        <div className='flex  items-center px-8'>
        <button className='font-Anton font-extrabold  font- text-3xl  h-20 w-70 mb-8 border border-white bg-black hover:border hover:bg-white hover:text-black mt-[2rem] ml-auto transition-all duration-500 ease-in-out cursor-pointer '>
        PAST TOUR
       </button>
        </div>
       
        
        </div> */}

       
        {/* </div> */}
        
    </section>

    <section className="mt-12 relative w-full h-[40vh] overflow-hidden ">
  {/* Top purple marquee */}
  <div className="absolute font-black top-1/2 left-[-70%] w-[200%] rotate-[-7deg] z-10">
    <div className="animate-marquee-x py-4 text-center bg-black text-white border border-white-400 font-bold text-[clamp(1rem,2vw,2rem)] whitespace-nowrap select-none pointer-events-none inline-block will-change-transform">
      <div className="inline-flex items-center gap-8">
        {[...Array(30)].map((_, i) => (
          <span key={i}>The Curated Canvas✨</span>
        ))}
      </div>
    </div>
  </div>

  {/* Bottom white marquee */}
  <div className="absolute font-black top-1/2 left-[-30%] w-[200%] rotate-[7deg] z-20">
    <div className="animate-marquee-x-reverse py-4 text-center bg-white text-black font-bold text-[clamp(1rem,2vw,2rem)] whitespace-nowrap select-none pointer-events-none inline-block will-change-transform border border-black/20">
      <div className="inline-flex items-center gap-8">
        {[...Array(30)].map((_, i) => (
          <span key={i}>The Curated Canvas ✨</span>
        ))}
      </div>
    </div>
  </div>
</section>
    </>  
  )
}

export default Event