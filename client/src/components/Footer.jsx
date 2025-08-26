import { FaInstagram,} from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { MoveUpRight } from "lucide-react";


const Footer = () => {
  return  (
  <footer className="bg-black text-white px-8 sm:px-25 sm:20 py-12 mt-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

    {/* <!-- Left Section --> */}
    <div className="space-y-10">
      {/* <!-- Social Icons --> */}
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/jndhouse/"  target="_blank" rel="noopener noreferrer" className="w-20 h-20 flex items-center justify-center border border-white bg-white   ">
         <FaInstagram   size={32} fill=""  />
        </a>
        {/* <a href="#" target="_blank"  rel="noopener noreferrer" className="w-20 h-20 flex items-center justify-center border bg-white  border-white">
        <SlSocialFacebook size={32} fill=""/>
        </a> */}
      </div>

      {/* <!-- Locations --> */}
      <p className="border-t border-gray-700 pt-4 text-xl leading">
        Mumbai / Chennai / Uttar-Pradesh / Jammu / Assam
      </p>

      {/* <!-- Address --> */}
      <p className="border-t border-gray-700 pt-4 text-xl ">
      antiSOCIAL, Lowerparel, Mumbai
      </p>

      {/* <!-- Copyright --> */}
      <p className="border-t border-gray-700 pt-4 text-xl flex justify-start items-center">
        Powered by<img src="https://www.unsquare.in/images/Un-removebg-preview.png" alt="logo" className="h-[60px] w-[120px]" />  
      </p>
    </div>
{/* 
    <!-- Right Section --> */}
  <div className="flex  justify-start items-center md:justify-center ">
      <table className="table p-">
       <tbody>
       

        <tr>
          <td className="h-12"><a href="#" className="group flex items-end justify-end mr-2 space-x-2 text-xl transition">
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-left w-7"><MoveUpRight /></span>
          </a>
          </td>
          <td className="h-14"> <a href="#home" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          HOME
        </a></td>
        </tr>


        <tr>
          <td className="h-12"><a href="#" className="group flex items-end justify-end mr-2 space-x-2 text-xl transition">
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-left w-7"><MoveUpRight /></span>
          </a>
          </td>
          <td className="h-14"> <a href="#tour" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          EVENT
        </a></td>
        </tr>



        <tr>
          <td className=" h-12"><a href="#" className="group flex items-end justify-end mr-2 space-x-2 text-xl transition">
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-left w-7"><MoveUpRight /></span>
          </a>
          </td>
          <td className="h-14"> <a href="#about" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          ABOUT
        </a></td>
        </tr>

       <tr>
          <td className=" h-12"><a href="#" className="group flex items-end justify-end mr-2 space-x-2 text-xl transition">
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-left w-7"><MoveUpRight /></span>
          </a>
          </td>
          <td className="h-14"> <a href="#contact" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="">
          CONTACT
        </a></td>
        </tr>
        
       </tbody>
    </table>
  </div>
  


  </div>
</footer>

  )
}

export default Footer