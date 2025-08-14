import React from "react";

const SkillText = () => {
  return (
    <div className="pt-3">
      <div className="flex flex-col items-center justify-center font-sans">
        <h2 className="text-4xl md:text-5xl font-bold mt-16 mb-4 text-center">
          Tech <span className="bg-clip-text text-blue-600">Stack</span>
        </h2>

        <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto leading-relaxed">
          The skills, tools and technologies I am{" "}
          <span className="text-blue-500 font-medium">really good at</span>
        </p>
      </div>
    </div>
  );
};

export default SkillText;
