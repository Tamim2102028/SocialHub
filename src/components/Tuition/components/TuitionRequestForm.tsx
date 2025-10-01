import React from "react";

interface TuitionRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

const TuitionRequestForm: React.FC<TuitionRequestFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(new FormData(e.currentTarget));
  };

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Post Tuition Request</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subjects (comma separated)
            </label>
            <input
              type="text"
              name="subjects"
              placeholder="Physics, Math, Chemistry"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <select
              name="level"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              required
            >
              <option value="">Select Level</option>
              <option value="HSC 1st Year">HSC 1st Year</option>
              <option value="HSC 2nd Year">HSC 2nd Year</option>
              <option value="SSC">SSC</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Dhanmondi, Dhaka"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary (per month)
            </label>
            <input
              type="number"
              name="salary"
              placeholder="5000"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mode
            </label>
            <select
              name="mode"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tutor Gender Preference
            </label>
            <select
              name="tutorGender"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="Any">Any</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred University (optional)
            </label>
            <input
              type="text"
              name="preferredUniversity"
              placeholder="BUET, DU, etc."
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Describe your requirements..."
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Post Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TuitionRequestForm;
