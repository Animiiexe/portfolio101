import Third from "./Third";

const Experience = () => {
  return (
    <div className="mt-24 px-6 md:px-16 lg:px-32">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center font-sans">
        <h2 className="text-4xl md:text-5xl font-bold mt-16 mb-4 text-center">
          Work{" "}
          <span className=" text-blue-600 hover:text-blue-700 transition-colors duration-300">
            Experience
          </span>
        </h2>

        <div className="w-16 h-1 bg-blue-500 mb-6 rounded-full"></div>
      </div>

      {/* Experience List */}
      <div className="mt-16 max-w-3xl mx-auto space-y-6">
        <Third />
      </div>
    </div>
  );
};

export default Experience;
