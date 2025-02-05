import React from "react";
import FirstProject from "./First-p/FirstProject";
import SecondProject from "./Second-p/SecondProject";
import ThirdProject from "./Third-p/ThirdProject";
const Work = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-10  md:pl-28 md:pr-28">
        <div className="items-center flex justify-center font-semibold">
          <h1 className="bg-blue-600 text-white w-[125px] h-[28px] justify-center items-center flex size-3 md:w-[200px] md:h-[50px] md:text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:scale-105 hover:shadow-xl">
            Work
          </h1>
        </div>
        <div className="space-y-28">
          <div className="md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12 ">
           <ThirdProject/>
          </div>
          <div className="md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12 ">
          <FirstProject />
          </div>
          <div className="md:flex md:text-2xl md:gap-5 md:flex-col border border-3 rounded-lg shadow-xl mt-12 ">
          <SecondProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
