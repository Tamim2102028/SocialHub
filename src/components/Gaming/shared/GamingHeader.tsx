import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GamingHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <div className="flex items-center space-x-3">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Gaming Hub</h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-3">
        <button
          onClick={() => navigate("/gaming/dashboard")}
          className={`cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            isActive("/gaming/dashboard") ||
            (isActive("/gaming") && location.pathname === "/gaming")
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-500 hover:text-black"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/gaming/tournament")}
          className={`cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            isActive("/gaming/tournament")
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-500 hover:text-black"
          }`}
        >
          Tournament
        </button>
        <button
          onClick={() => navigate("/gaming/play")}
          className={`cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            isActive("/gaming/play")
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-500 hover:text-black"
          }`}
        >
          Play
        </button>
        <button
          onClick={() => navigate("/gaming/leaderboard")}
          className={`cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            isActive("/gaming/leaderboard")
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-500 hover:text-black"
          }`}
        >
          Leaderboard
        </button>
        <button
          onClick={() => navigate("/gaming/achievements")}
          className={`cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            isActive("/gaming/achievements")
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-500 hover:text-black"
          }`}
        >
          Achievements
        </button>
      </div>
    </div>
  );
};

export default GamingHeader;
