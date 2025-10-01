import React from "react";
import { mockSearchResults } from "./dummyData/searchData";

interface PeopleResultsProps {
  isVisible: boolean;
}

const PeopleResults: React.FC<PeopleResultsProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  const handleFollow = (username: string) => {
    // TODO: Implement follow logic
    console.log("Following user:", username);
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-900">People</h2>
      <div className="space-y-4">
        {mockSearchResults.people.map((person, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{person.avatar}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.username}</p>
                <p className="text-xs text-gray-500">
                  {person.followers} followers
                </p>
              </div>
            </div>
            <button
              onClick={() => handleFollow(person.username)}
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleResults;
