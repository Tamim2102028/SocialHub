import React, { useState } from "react";
import GameSelectionMenu from "../components/Gaming/Play/GameSelectionMenu.tsx";
import MathCompetition from "../components/Gaming/Play/MathCompetition.tsx";
import Sudoku from "../components/Gaming/Play/Sudoku.tsx";
import AcademicArena from "../components/Gaming/Play/AcademicArena.tsx";
import Leaderboard from "../components/Gaming/Leaderboard.tsx";
import Achievements from "../components/Gaming/Achievements.tsx";

type ActiveTab = "play" | "leaderboard" | "achievements";
type ActiveGame = "menu" | "math" | "sudoku" | "academic_arena";

const Gaming: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("play");
  const [activeGame, setActiveGame] = useState<ActiveGame>("menu");

  // Disable other tabs when playing a game
  const isGameActive = activeGame !== "menu";

  const handleTabChange = (tab: ActiveTab) => {
    if (!isGameActive) {
      setActiveTab(tab);
    }
  };

  const handleGameSelect = (game: ActiveGame) => {
    setActiveGame(game);
  };

  const handleBackToMenu = () => {
    setActiveGame("menu");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "play":
        switch (activeGame) {
          case "menu":
            return <GameSelectionMenu onGameSelect={handleGameSelect} />;
          case "math":
            return <MathCompetition onBackToMenu={handleBackToMenu} />;
          case "sudoku":
            return <Sudoku onBackToMenu={handleBackToMenu} />;
          case "academic_arena":
            return <AcademicArena onBackToMenu={handleBackToMenu} />;
          default:
            return <GameSelectionMenu onGameSelect={handleGameSelect} />;
        }
      case "leaderboard":
        return <Leaderboard />;
      case "achievements":
        return <Achievements />;
      default:
        return <GameSelectionMenu onGameSelect={handleGameSelect} />;
    }
  };

  return (
    <>
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Gaming Hub</h1>
        <p className="mt-2 text-lg text-gray-600">
          Compete, climb the ranks, and earn achievements.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-3">
        <button
          onClick={() => handleTabChange("play")}
          className={`cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === "play"
              ? "bg-blue-600 text-white"
              : "border text-gray-500 hover:text-black"
          }`}
        >
          Play
        </button>
        <button
          onClick={() => handleTabChange("leaderboard")}
          disabled={isGameActive}
          className={`cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === "leaderboard" && !isGameActive
              ? "bg-blue-600 text-white"
              : isGameActive
                ? "cursor-not-allowed text-gray-300"
                : "border text-gray-500 hover:text-black"
          }`}
        >
          Leaderboard
        </button>
        <button
          onClick={() => handleTabChange("achievements")}
          disabled={isGameActive}
          className={`cursor-pointer rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === "achievements" && !isGameActive
              ? "bg-blue-600 text-white"
              : isGameActive
                ? "cursor-not-allowed text-gray-300"
                : "border text-gray-500 hover:text-black"
          }`}
        >
          Achievements
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3">{renderTabContent()}</div>
    </>
  );
};

export default Gaming;
