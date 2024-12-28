import React from "react";
import First from "./First";
import Second from "./Second"

const Experience = () => {
  return (
    <div className="mt-36 pl-8 pr-8">
    <div className="items-center flex justify-center font-semibold ">
        <h1 className="p-2 border  rounded-xl bg-slate-200 text-black w-[115px] h-[28px] justify-center items-center flex size-3  md:w-[200px] md:h-[50px] md:text-xl md:rounded-full">
          Experience
        </h1>
      </div>

    <div className="w-full justify-center items-center  mt-16 md:pl-96 md:pr-96 ">
      <First />
      <Second/>
    </div>
    </div>
  );
};

export default Experience;
