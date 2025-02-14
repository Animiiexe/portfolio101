import React from "react";
import companyLogo from "../assets/pinnacle.jpg";

const First = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Section - Company Logo */}
      <div className="flex items-center justify-center md:w-1/5">
        <img src={companyLogo} alt="Company Logo" className="w-16 h-16 object-cover rounded-full shadow-md" />
      </div>

      {/* Middle Section - Job Title and Description */}
      <div className="flex-1 text-center text-gray-400 md:text-left">
        <h2 className="text-xl font-bold">Web Developer Intern</h2>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Developed interactive front-end components</li>
          <li>Collaborated on team-based projects</li>
          <li>Managed and optimized multiple projects</li>
          <li>Enhanced technical skills & learning</li>
        </ul>
      </div>

      {/* Right Section - Dates */}
      <div className="text-gray-600 text-sm md:w-1/5 text-center md:text-right">
        <span className="px-2 py-1 bg-gray-200 rounded-lg shadow-sm">Mar 2024-Apr 2024</span>
      </div>
    </div>
  );
};

export default First;
