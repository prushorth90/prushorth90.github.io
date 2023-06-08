import React from 'react'
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, lang, about, challenge, src, vid }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <h className="text-base text-white font-normal"  >
        <b><center>{title}</center></b>
      </h>
      <br />
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-90 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={src}
        />
        {vid}
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
           
            <div className="flex gap-2">
             
            </div>
          </div>
          <div className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href="https://github.com/prushorth90" target="_blank" rel="noreferrer" ><BsGithub /></a>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            Language: {lang}
          </p>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {about}
          </p>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {challenge}
          </p>
      
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard