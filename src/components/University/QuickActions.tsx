import React from "react";
import { mockQuickActions } from "./dummyData/universityData";

const QuickActions: React.FC = () => {
  const handleActionClick = (actionName: string) => {
    // TODO: Implement quick action logic
    console.log("Executing action:", actionName);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {mockQuickActions.map((action) => (
          <button
            key={action.name}
            onClick={() => handleActionClick(action.name)}
            className={`flex flex-col items-center space-y-2 rounded-lg p-4 text-white transition-all hover:scale-105 ${action.color}`}
          >
            <span className="text-2xl">{action.icon}</span>
            <span className="text-sm font-medium">{action.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
