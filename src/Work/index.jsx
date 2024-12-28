import React from "react";
import FirstProject from "./First-p/FirstProject";
import SecondProject from "./Second-p/SecondProject";
import ThirdProject from "./Third-p/ThirdProject";
const Work = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-10  md:pl-28 md:pr-28">
        <div className="items-center flex justify-center font-semibold">
          <h1 className="p-2 border text-black  rounded-xl bg-slate-200 w-[115px] h-[28px] justify-center items-center flex size-3  md:w-[200px] md:h-[50px] md:text-xl md:rounded-full mb-8">
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
