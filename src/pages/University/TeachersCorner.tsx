import React from "react";

const TeachersCorner: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Teachers' Corner
      </h2>
      <div className="mb-4">
        <h3 className="mb-2 font-semibold">Faculty Profiles</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 rounded bg-blue-50 p-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-700">
              SR
            </div>
            <div>
              <div className="font-medium">Sadia Rahman</div>
              <div className="text-xs text-gray-500">Lecturer, CSE</div>
            </div>
          </li>
          <li className="flex items-center gap-3 rounded bg-green-50 p-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-200 font-bold text-green-700">
              MA
            </div>
            <div>
              <div className="font-medium">Md. Asif</div>
              <div className="text-xs text-gray-500">
                Assistant Professor, EEE
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Office Hours</h3>
        <ul className="ml-6 list-disc text-gray-700">
          <li>Sadia Rahman: Sun, Tue 10am-12pm</li>
          <li>Md. Asif: Mon, Wed 2pm-4pm</li>
        </ul>
      </div>
    </div>
  );
};

export default TeachersCorner;
