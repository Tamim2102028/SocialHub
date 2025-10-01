import React from "react";

const CRCorner: React.FC = () => {
  return (
    <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">CR Corner</h2>
      <div className="mb-4">
        <h3 className="mb-1 font-semibold">Current CR</h3>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-700">
            TA
          </div>
          <div>
            <div className="font-medium">Tamim Ahmed</div>
            <div className="text-xs text-gray-500">CSE, 3rd Year</div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="mb-1 font-semibold">Quick Poll</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="poll"
              id="yes"
              className="accent-blue-600"
            />
            <label htmlFor="yes">Yes, I support the new exam schedule</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="poll"
              id="no"
              className="accent-blue-600"
            />
            <label htmlFor="no">No, I want changes</label>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-1 font-semibold">Feedback to CR</h3>
        <textarea
          className="w-full rounded border p-2 text-sm"
          rows={2}
          placeholder="Write your feedback..."
        ></textarea>
        <button className="mt-2 rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700">
          Send
        </button>
      </div>
    </div>
  );
};

export default CRCorner;
