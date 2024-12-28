

import React from "react";
import companyLogo from "../assets/pinnacle.jpg";
const First = () => {
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-white to-gray-100 p-6 rounded-lg shadow-md  justify-between items-start md:flex md:flex-row mb-10">
      {/* Left Section - Company Logo */}
      <div className="flex items-center space-x-4">
        <img src={companyLogo} alt="logo" className="w-16" />
      </div>

      {/* Middle Section - Job Title and Description */}
      <div className="flex-1 space-y-2 md:flex md:items-center md:justify-center md:flex-col">
        <h2 className="text-xl font-semibold text-gray-900">
          Web Developer Intern
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Front-end Development</li>
          <li>Collaborative Projects</li>
          <li>Handled multiple projects</li>
          <li>Technical Learning</li>
        </ul>
      </div>

      {/* Right Section - Dates */}
      <div className="text-gray-500 text-sm pt-3">
        <span>Mar 2024 - April 2024</span>
      </div>
    </div>
  );
};

export default First;
