

import React from "react";
import companyLogo from "../assets/cloud12.jpg";
const First = () => {
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-white to-gray-100 p-6 rounded-lg shadow-md  justify-between items-start md:flex md:flex-row">
      {/* Left Section - Company Logo */}
      <div className="flex items-center space-x-4">
        <img src={companyLogo} alt="Upwork Logo" className="w-16" />
      </div>

      {/* Middle Section - Job Title and Description */}
      <div className="flex-1 space-y-2 md:flex md:items-center md:justify-center md:flex-col">
        <h2 className="text-xl font-semibold text-gray-900">
          Web Developer Intern
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          <li>Full-Stack Development</li>
          <li>API Integration</li>
          <li>Collaborative Projects</li>
          <li>Technical Learning</li>
        </ul>
      </div>

      {/* Right Section - Dates */}
      <div className="text-gray-500 text-sm pt-3">
        <span>Jul 2023 - Sep 2023 </span>
      </div>
    </div>
  );
};

export default First;
