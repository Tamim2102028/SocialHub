import React from "react";

const UniversityEvents: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">Upcoming Events</h2>
      <ul className="divide-y divide-gray-200">
        <li className="py-3">
          <div className="font-semibold">Science Fair 2025</div>
          <div className="text-sm text-gray-500">
            15 Oct 2025 | Main Auditorium
          </div>
          <div className="text-gray-700">
            Showcase your projects and win prizes!
          </div>
        </li>
        <li className="py-3">
          <div className="font-semibold">Cultural Night</div>
          <div className="text-sm text-gray-500">22 Oct 2025 | Open Stage</div>
          <div className="text-gray-700">
            Music, dance, and drama performances by students.
          </div>
        </li>
        <li className="py-3">
          <div className="font-semibold">Career Seminar</div>
          <div className="text-sm text-gray-500">
            30 Oct 2025 | Seminar Hall
          </div>
          <div className="text-gray-700">
            Meet industry experts and get career advice.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UniversityEvents;
