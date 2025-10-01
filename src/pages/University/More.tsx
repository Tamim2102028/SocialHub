import React from "react";
import { NavLink } from "react-router-dom";

const UniversityMore: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">More Features</h2>
      <ul className="ml-6 list-disc space-y-2 text-gray-700">
        <li>
          <NavLink to="/university/club" className="text-blue-600 hover:underline">
            Clubs & Societies
          </NavLink>
        </li>
        <li>
          <NavLink to="/university/scholarships" className="text-blue-600 hover:underline">
            Scholarship Info
          </NavLink>
        </li>
        <li>
          <NavLink to="/university/transport" className="text-blue-600 hover:underline">
            Transport Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/university/canteen" className="text-blue-600 hover:underline">
            Canteen Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/university/faq" className="text-blue-600 hover:underline">
            FAQ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UniversityMore;
