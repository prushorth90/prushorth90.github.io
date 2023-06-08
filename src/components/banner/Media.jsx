import React from 'react'
import { BsCloudLightningFill } from 'react-icons/bs';
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import {resume} from "../../assets/index"
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div >
          <a href={resume} target="_blank" rel="noreferrer">
          <button classname='w-1/2 h-full flex justify-center items-center gap-2'>Click here to <b className="text-white">Download Resume</b> </button>
          </a>
          {/* <div className="flex gap-4">
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div> */}
        </div>
        
      </div>
  )
}

export default Media