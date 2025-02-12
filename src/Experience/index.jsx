import First from "./First";
import Second from "./Second";

const Experience = () => {
  return (
    <div className="mt-24 px-6 md:px-16 lg:px-32">
      {/* Section Title */}
      <div className="flex justify-center font-semibold">
        <h1 className="bg-blue-600 text-white w-[125px] h-[28px] flex items-center justify-center md:w-[200px] md:h-[50px] md:text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:scale-105 hover:shadow-xl">
          Experience
        </h1>
      </div>

      {/* Experience List */}
      <div className="mt-16 max-w-3xl mx-auto space-y-6">
        <First />
        <Second />
      </div>
    </div>
  );
};

export default Experience;
