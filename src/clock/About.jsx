import React from 'react';
import { FaLinkedin,  FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-10" style={{ backgroundImage: "url('https://s-media-cache-ak0.pinimg.com/736x/f4/ac/6a/f4ac6aac3afb587f6cae04155656fca3.jpg')" }}>
      <div className="max-[450px]:flex-col flex w-full max-w-5xl items-center justify-between mt-8">
        {/* Social Icons on the Left */}
        <div className="max-[450px]:flex-row max-[450px]:space-x-8 flex flex-col space-y-6">
          <a href="https://linkedin.com/in/sibu-chanda" target="_blank" rel="noopener noreferrer" className="max-[450px]:w-10 max-[450px]:h-10 social1 flex items-center justify-center w-16 h-16 bg-blue-700 shadow-lg rotate-45">
            <FaLinkedin className="text-white text-3xl -rotate-45" />
          </a>
          <a href="https://leetcode.com/u/Sibuchanda/" target="_blank" rel="noopener noreferrer" className="max-[450px]:w-10 max-[450px]:h-10 social2 flex items-center justify-center w-16 h-16 bg-pink-600 shadow-lg rotate-45">
            <SiLeetcode className="text-white text-3xl -rotate-45" />
          </a>
          <a href="https://github.com/Sibuchanda" target="_blank" rel="noopener noreferrer" className="max-[450px]:w-10 max-[450px]:h-10 social3 flex items-center justify-center w-16 h-16 bg-black shadow-lg rotate-45">
            <FaGithub className="text-white text-3xl -rotate-45" />
          </a>
        </div>

        {/* About Me Text on the Right */}
        <div className="text-black max-w-lg p-6 bg-opacity-50 rounded-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
          <h1 className="contentHead text-4xl font-bold underline text-center" style={{ fontFamily: "inherit", color: "black" }}>ABOUT ME</h1>
          <h2 className="text-lg mt-4">
            Hi Folks, <br/><br/>
            I am currently pursuing MCA and specialize in MERN stack development. I love building interactive and efficient web applications.<br/><br/>
            If you want to connect with me or follow my work, feel free to check out my social pages mentioned on the left side.<br/><br/>
            Thank you for visiting my page! Show some L<span className="text-black">&hearts;</span>VE if you like my work.
            <br/><br/>
            <p>(NOTICE: The lady in the PIC is not me, I'm a guy :P)</p>
            <p className="text-black text-lg">* No matter what u say, that gal is sorta cute.</p>
          </h2>
        </div>
      </div>
       {/* Footer section  */}
       <div className="w-full flex flex-col justify-center items-center mt-10">
          <div className="flex justify-center items-center gap-4">
            <div className="w-20 h-[1px] bg-black"></div>
            <p className="uppercase text-sm font-sans">Created by</p>
            <div className="w-20 h-[1px] bg-black"></div>
          </div>
           <p className="uppercase font-handwriting">❤️ Sibu Chanda ❤️</p>
        </div>
    </div>
  );
};

export default About;
