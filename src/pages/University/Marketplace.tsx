import React from "react";

const UniversityMarketplace: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Student Marketplace
      </h2>
      <div className="mb-4">
        <h3 className="mb-2 font-semibold">Buy & Sell</h3>
        <ul className="space-y-2">
          <li className="flex justify-between rounded bg-blue-50 p-2">
            <span>Data Structures Book</span>
            <span className="font-semibold text-blue-700">৳350</span>
          </li>
          <li className="flex justify-between rounded bg-green-50 p-2">
            <span>Class Notes (CSE 220)</span>
            <span className="font-semibold text-green-700">৳100</span>
          </li>
          <li className="flex justify-between rounded bg-yellow-50 p-2">
            <span>Scientific Calculator</span>
            <span className="font-semibold text-yellow-700">৳500</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Post an Item</h3>
        <input
          className="mb-2 w-full rounded border p-2"
          placeholder="Item name"
        />
        <input className="mb-2 w-full rounded border p-2" placeholder="Price" />
        <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Post
        </button>
      </div>
    </div>
  );
};

export default UniversityMarketplace;
