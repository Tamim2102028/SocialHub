import React from "react";

const UniversityNoticeBoard: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">Notice Board</h2>
      <ul className="space-y-3">
        <li className="rounded bg-blue-50 p-3">
          <span className="font-semibold">[01 Oct 2025]</span> Midterm exam
          schedule published.
        </li>
        <li className="rounded bg-green-50 p-3">
          <span className="font-semibold">[28 Sep 2025]</span> New library books
          available.
        </li>
        <li className="rounded bg-yellow-50 p-3">
          <span className="font-semibold">[25 Sep 2025]</span> Registration
          deadline extended.
        </li>
        <li className="rounded bg-red-50 p-3">
          <span className="font-semibold">[20 Sep 2025]</span> Campus
          maintenance on 5th Oct.
        </li>
      </ul>
    </div>
  );
};

export default UniversityNoticeBoard;
