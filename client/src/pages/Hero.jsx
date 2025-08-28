import React, { useRef } from "react";
import { CircleArrowRight, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const hero = useRef(null);

  useGSAP(() => {
    gsap.from(hero.current, {
      opacity: 0, // Corrected: Animate from 0 opacity for a fade-in effect
      duration: 0.5,
      x: 12,
      delay: 0.5,
    });
  });

  return (
    <section id="home" className="max-w-9xl  m-auto bg-[#000000] border border-b-gray-500 ">
      <div className=" py-8  h-[560px] sm:h-[720px] w-full ">
        <div className="relative h-96 w-full  overflow-y-visible  ">
          <video
            src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754%2F66839eada0e10752e419afc8_Isaac_Tour-transcode.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="h-[380px] lg:h-[700px] sm:h-full object-cover md:w-full absolute inset-y-0 left-0  z-20 bg-gradient-to-r from-black to-transparent "
          />

          <div
            ref={hero}
            className="z-20 absolute top-[120px] sm:top-[90px] xl:top-[200px] inset-0 flex flex-col items-start justify-start pl-6 sm:pl-9 lg:gap-12">
          
            <h1 className="font-inter pl-1 text-white text-xl sm:text-xl  lg:text-[17px]  ">
              Just Anncounced
            </h1>

            <div className=" inset-0 flex -mt-3 items-center lg:gap-12 justify-start">
              <h1 className="text-white uppercase  text-5xl font-manuka md:text-7xl xl:text-[128px] font-black leading-[158px] tracking-tight">
                The Curated Canvas
              </h1>
            </div>

            <div className="  font-black  font-manuka inset-0 gap-5 sm:gap-15 mt-[200px] z-50 flex flex-wrap-reverse  items-center justify-start bg-black/60 w-full h-[50px]  lg:h-[111px] md:h-[100px] lg:font-[4.25rem] lg:-mt-[12px] ">
              <button className="text-4xl sm:text-9xl  md:text-4xl xl:text-7xl px-5 flex justify-center items-center bg-white h-full lg:h-[110px] lg:w-[320px] hover:border border-white hover:bg-black hover:text-white  transition-all duration-500 ease-in-out cursor-pointer">
                BOOK NOW
              </button>
              <div className="font-manuka flex text-[23px]  items-center gap-5 sm:gap-15 md:gap-20">
                <h1 className=" md:text-[35px] text-white uppercase xl:text-[4.25rem]">
                  1 OCt 2025
                </h1>
                <h1 className="font-manuka  md:text-[35px]  md:text-2xl text-white xl:text-[4.25rem] flex  justify-center items-center gap-4">

                 <div className="flex sm:hidden justify-center items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754/664b1d73ae18412e50e11fbf_Group%20114.svg" className="h-8 w-8" alt="" /> 30 OCT 2025
                 </div>

                 <div className="hidden sm:flex justify-center items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754/664b1d73ae18412e50e11fbf_Group%20114.svg" alt="" /> 30 OCT 2025
                 </div>
                </h1>

                <h1 className="font-manuka md:text-2xl text-white xl:text-[4.25rem] flex  justify-center items-center gap-2">

                  <div className="flex sm:hidden justify-center items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754/664b1dbb22a6941f4abd2429_Group%20256.svg" className="h-8 w-8"  alt="" /> MH/UP
                  </div> 

                  <div className="hidden sm:flex justify-center items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754/664b1dbb22a6941f4abd2429_Group%20256.svg" alt="" /> MH/UP
                  </div>

                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
