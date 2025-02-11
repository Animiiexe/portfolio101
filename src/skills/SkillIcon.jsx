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
      <div className="w-full max-w-[1440px] mx-auto text-gray-500 font-semibold space-y-8">

        {/* Frontend Skills */}
        <SkillCategory title="Frontend">
          <Skill img={reactIcon} name="React.js" />
          <Skill img={javaScriptIcon} name="JavaScript" />
          <Skill img={tailwindIcon} name="TailwindCSS" />
          <Skill img={bootstrapIcon} name="Bootstrap" />
          <Skill img="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" name="Sass" />
        </SkillCategory>

        {/* Backend Skills */}
        <SkillCategory title="Backend">
          <Skill img={expressIcon} name="Express.js" />
          <Skill img={NodejsIcon} name="Node.js" />
          <Skill img={mongodbIcon} name="MongoDB" />
        </SkillCategory>

        <SkillCategory title="Tools">
          <Skill img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwNwDUq_S0U6wDzS60c45kVK5zpxF-03wsQ&s" name="Vercel" />
          <Skill img={gitIcon} name="Git" />
          <Skill img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacDoTjTBt08VHjGkG4zTMHjMwNOD_Q-1BSQ&s" name="Netlify" />
          <Skill img={githubIcon} name="GitHub" />
        </SkillCategory>


        {/* Design */}
        <SkillCategory title="Design">
          <Skill img={figmaIcon} name="Figma" />
          <Skill img={canva} name="Canva" />
          <Skill img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" name="Lightroom" />
        </SkillCategory>

      </div>
    </div>
  );
};

// Reusable Skill Category Component (Flexbox)
const SkillCategory = ({ title, children }) => (
  <div>
    <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
    <div className="flex flex-wrap justify-center gap-8">{children}</div>
  </div>
);

// Reusable Skill Component
const Skill = ({ img, name }) => (
  <div className="flex flex-col items-center">
    <img src={img} alt={name} className="w-[74px] h-[66px]" />
    <p className="mt-2 text-center">{name}</p>
  </div>
);

export default SkillIcon;
