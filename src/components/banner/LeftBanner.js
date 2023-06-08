import React from 'react'
//import { useTypewriter} from "react-simple-typewriter";
//import { Cursor } from "react-simple-typewriter";
import Media from './Media';
import { logo } from "../../assets/index"

const LeftBanner = () => {
    //const [text] = useTypewriter({
     // words: ["Computer Scientist.", "King's College London Graduate."],
     // loop: true,
     // typeSpeed: 30,
     // deleteSpeed: 20,
     // delaySpeed: 2000,
    //});
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
       
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-white capitalize">Mani Prushorth!</span>
        </h1>
       
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Currently looking for <b className="text-white">internships</b>! I have a BSc in Computer Science from King's College London and I am starting my masters at the University of Southern California!
        </p>

        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>

     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner