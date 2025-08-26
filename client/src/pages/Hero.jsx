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
    <section id="home" className="max-w-9xl  m-auto bg-[#000000]">
      <div className=" py-8  h-[700px] w-full ">
        <div className="relative h-96 w-full border border-b-gray-400 overflow-y-visible sm:h-full ">
          <video
            src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754%2F66839eada0e10752e419afc8_Isaac_Tour-transcode.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="h-[500px] sm:h-full object-cover md:w-full"
          />

          <div
            ref={hero}
            className="absolute top-[100px] xl:top-[200px] inset-0 flex flex-col items-start justify-start pl-10 sm:pl-14 gap-12 "
          >
            <h1 className="text-white text-2xl sm:text-[1.50rem] font-regular ml-2 font-inter">
              Just Anncounced
            </h1>

            <div className=" inset-0 flex -mt-3.2 items-center justify-start">
              <h1 className="text-white uppercase font-black text-5xl md:text-7xl xl:text-8xl">
                THE horizon
              </h1>
            </div>

            <div className="font-black inset-0 gap-5 sm:gap-15 mt-[300px] sm:mt-0 z-50 flex items-center flex-wrap-reverse  justify-start bg-black/50 w-full h-[50px] md:h-[100px]">
              <button className=" md:text-2xl xl:text-5xl px-5 flex justify-center items-center bg-white h-full hover:border border-white hover:bg-black hover:text-white  transition-all duration-500 ease-in-out cursor-pointer">
                BOOK NOW
              </button>
              <div className="flex text-[15px] items-center gap-9 sm:gap-15 md:gap-5">
                <h1 className=" md:text-2xl text-white uppercase xl:text-5xl">
                  1 OCt 2025
                </h1>
                <h1 className="md:text-2xl text-white xl:text-5xl flex  justify-center items-center gap-4">
                  <CircleArrowRight size={40} /> 30 OCT 2025
                </h1>
                <h1 className="md:text-2xl text-white xl:text-5xl flex  justify-center items-center gap-2">
                  <MapPin size={30} /> MH/UP
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
