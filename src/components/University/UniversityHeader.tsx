import React from "react";
import { FaUniversity } from "react-icons/fa";

const UniversityHeader: React.FC = () => {
  return (
    <div>
      <div className="mb-4 flex items-center space-x-3">
        <FaUniversity className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">University Hub</h1>
      </div>
      <p className="text-gray-600">
        Your academic journey starts here. Connect with classmates, track
        courses, and stay updated!
      </p>
    </div>
  );
};

export default UniversityHeader;
