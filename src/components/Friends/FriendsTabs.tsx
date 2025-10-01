import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setFriendsActiveTab } from "../../store/slices/uiSlice";

const FriendsTabs: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.ui.friends.activeTab);

  const tabs = [
    { id: "friends", label: "All Friends" },
    { id: "requests", label: "Friend Requests" },
    { id: "suggestions", label: "Suggestions" },
  ] as const;

  return (
    <div className="mb-6 border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => dispatch(setFriendsActiveTab(tab.id))}
            className={`border-b-2 px-1 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default FriendsTabs;
