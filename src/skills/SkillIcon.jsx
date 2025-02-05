
import React from "react";
import reactIcon from "../assets/icon-react.svg";
import expressIcon from "../assets/express2.png";
import NodejsIcon from "../assets/icon-nodejs.svg";
import gitIcon from "../assets/icon-git.svg";
import javaScriptIcon from "../assets/javscript.svg";
import mongodbIcon from "../assets/icon-mongodb.svg";
import figmaIcon from "../assets/icon-figma.svg";
import tailwindIcon from "../assets/icon-tailwindcss.svg";
import githubIcon from "../assets/github.png";
import bootstrapIcon from "../assets/bootstrap.png";
import canva from "../assets/canva-icon.svg";

const SkillIcon = () => {
  return (
    <div className="pt-10">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-3 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:max-w-[1440px] text-gray-500 font-semibold">
        <div className="flex flex-col items-center">
          <img src={reactIcon} alt="React Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">React.js</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src={expressIcon} alt="Second Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Express.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={NodejsIcon} alt="Third Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={gitIcon} alt="Fourth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={javaScriptIcon}
            alt="Fifth Icon"
            className="w-auto h-auto"
          />
          <p className="mt-2 text-center">Javascript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={mongodbIcon} alt="Fifth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={figmaIcon} alt="Fifth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">Figma</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src={tailwindIcon} alt="Fifth Icon" className="w-auto h-auto" />
          <p className="mt-2 text-center">TailwindCSS</p>
        </div>  
        <div className="flex flex-col items-center">
          <img
            src={githubIcon}
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Github</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img
            src={bootstrapIcon}
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg"
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Lightroom</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Sass</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={canva}
            alt="Fifth Icon"
            className="w-[74px] h-[66px]"
          />
          <p className="mt-2 text-center">Canva</p>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
