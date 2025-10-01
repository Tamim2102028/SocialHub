import React from "react";

const AcademicTimeline: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Academic Timeline
      </h2>
      <ol className="relative ml-4 border-l border-gray-300">
        <li className="mb-8 ml-6">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-blue-600"></div>
          <time className="mb-1 text-sm leading-none font-normal text-gray-400">
            01 Sep 2025
          </time>
          <p className="text-base font-semibold text-gray-900">
            Semester Begins
          </p>
        </li>
        <li className="mb-8 ml-6">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-green-600"></div>
          <time className="mb-1 text-sm leading-none font-normal text-gray-400">
            10 Oct 2025
          </time>
          <p className="text-base font-semibold text-gray-900">Midterm Exams</p>
        </li>
        <li className="mb-8 ml-6">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-yellow-600"></div>
          <time className="mb-1 text-sm leading-none font-normal text-gray-400">
            20 Dec 2025
          </time>
          <p className="text-base font-semibold text-gray-900">Final Exams</p>
        </li>
        <li className="ml-6">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-red-600"></div>
          <time className="mb-1 text-sm leading-none font-normal text-gray-400">
            01 Jan 2026
          </time>
          <p className="text-base font-semibold text-gray-900">
            Semester Break
          </p>
        </li>
      </ol>
    </div>
  );
};

export default AcademicTimeline;
