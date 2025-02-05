
import First from "./First";
import Second from "./Second"

const Experience = () => {
  return (
    <div className="mt-36 pl-8 pr-8">
    <div className="items-center flex justify-center font-semibold ">
        <h1 className="bg-blue-600 text-white w-[125px] h-[28px] justify-center items-center flex size-3 md:w-[200px] md:h-[50px] md:text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:scale-105 hover:shadow-xl">
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
