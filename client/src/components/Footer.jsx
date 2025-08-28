import { FaInstagram,} from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { MoveUpRight } from "lucide-react";


const Footer = () => {
  return  (
<footer className="bg-black text-white px-7 sm:px-10 sm:20 py-12 mt-16">
  <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-20">

    {/* <!-- Left Section (70%) --> */}
    <div className="space-y-10">
      {/* <!-- Social Icons --> */}
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/jndhouse/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 ml-27 lg:ml-0 flex items-center justify-center border border-white bg-white"
        >
          <FaInstagram size={32} fill="" />
        </a>
      </div>

      {/* <!-- Locations --> */}
     <p
  className=" 
    border-t border-gray-200  lg:pt-8 sm:pt-4 text-xl text-white
    bg-clip-text 
    [mask-image:linear-gradient(to_right,black_90%,transparent)]
    [mask-repeat:no-repeat] [mask-size:100%_100%]
  ">  Mumbai / Chennai / Uttar-Pradesh / Jammu / Assam </p>

      {/* <!-- Address --> */}
      <p
  className=" 
    border-t border-gray-200  lg:pt-8 sm:pt-4 text-xl text-white
    bg-clip-text 
    [mask-image:linear-gradient(to_right,black_90%,transparent)]
    [mask-repeat:no-repeat] [mask-size:100%_100%]
  ">  antiSOCIAL, Lowerparel, Mumbai </p>

      {/* <!-- Copyright --> */}
      <p className=" flex justify-start items-center border-t border-gray-200  lg:pt-8 sm:pt-4 text-xl text-white
    bg-clip-text 
    [mask-image:linear-gradient(to_right,black_90%,transparent)]
    [mask-repeat:no-repeat] [mask-size:100%_100%]">
        Powered by 
        <a
          href="https://www.unsquare.in"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 flex items-center hover:opacity-80"
        >
          <img
            src="https://www.unsquare.in/images/Un-removebg-preview.png"
            alt="Unsquare logo"
            className="h-[60px] w-[120px]"
          />
        </a>
      </p>
    </div>

    {/* <!-- Right Section (30%) --> */}
    <div className="flex  mx-auto">
      <table>
        <tbody>
          <tr className="group ">
            <td className="h-1  pb-14">
              <div className="flex items-end justify-end mr-2 space-x-2 text-xl">
                <span className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:[transform:translateZ(15px)] text-left w-7">
                 <img src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754/664af8f0991490a936f12636_Group%20259.svg" alt="" />
                </span>
              </div>
            </td>
            <td className="h-14 pb-14">
              <a href="#home" className="text-[20px] transition-colors duration-500">
                HOME
              </a>
            </td>
          </tr>

          <tr className="group">
            <td className="h-12  pb-18">
              <div className="flex items-end justify-end mr-2 space-x-2 text-xl">
                <span className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:[transform:translateZ(15px)] text-left w-7">
                   <img src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754/664af8f0991490a936f12636_Group%20259.svg" alt="" />
                </span>
              </div>
            </td>
            <td className="h-14 pb-18">
              <a href="#event" className=" text-[20px] transition-colors duration-500 ">
                EVENT
              </a>
            </td>
          </tr>

          <tr className="group">
            <td className="h-12  pb-18 ">
              <div className="flex items-end justify-end mr-2 space-x-2 text-xl">
                <span className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:[transform:translateZ(15px)] text-left w-7">
                   <img src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754/664af8f0991490a936f12636_Group%20259.svg" alt="" />
                </span>
              </div>
            </td>
            <td className="h-14 pb-18 ">
              <a href="#about" className="text-[20px] transition-colors duration-500 ">
                ABOUT
              </a>
            </td>
          </tr>

          <tr className="group">
            <td className="h-12 pb-18">
              <div className="flex items-end justify-end mr-2 space-x-2 text-xl">
                <span className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:[transform:translateZ(15px)] text-left w-7">
                   <img src="https://cdn.prod.website-files.com/6646fca7f3a331476d338754/664af8f0991490a936f12636_Group%20259.svg" alt="" />
                </span>
              </div>
            </td>
            <td className="h-14  pb-18 ">
              <a href="#contact" className="text-[20px] transition-colors duration-500">
                CONTACT
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</footer>

  )
}

export default Footer