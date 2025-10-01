import React from "react";

interface GameSelectionMenuProps {
  onGameSelect: (game: "math" | "sudoku" | "academic_arena") => void;
}

const GameSelectionMenu: React.FC<GameSelectionMenuProps> = ({
  onGameSelect,
}) => {
  const games = [
    {
      id: "math" as const,
      icon: "🧮",
      name: "Math Competition",
      description:
        "Challenge others in fast-paced math problems and climb the leaderboard.",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: "sudoku" as const,
      icon: "🧩",
      name: "Sudoku Solver",
      description:
        "Test your logical thinking with classic Sudoku puzzles of varying difficulty.",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      id: "academic_arena" as const,
      icon: "🎓",
      name: "Academic Arena",
      description:
        "University students create questions, college students solve them. Dual-role gameplay.",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Choose a Game</h2>
        <p className="mt-2 text-gray-600">
          Select your preferred game mode and start competing!
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => onGameSelect(game.id)}
            className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            {/* Game Icon */}
            <div
              className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${game.color} text-3xl text-white transition-colors group-hover:scale-110`}
            >
              {game.icon}
            </div>

            {/* Game Info */}
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {game.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {game.description}
              </p>
            </div>

            {/* Play Button */}
            <div className="mt-6">
              <div
                className={`inline-flex items-center rounded-lg ${game.color} ${game.hoverColor} px-4 py-2 text-sm font-medium text-white transition-colors`}
              >
                <span className="mr-2">🎮</span>
                Play Now
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-gray-50 p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">1,234</div>
          <div className="text-sm text-gray-600">Total Players</div>
        </div>
        <div className="rounded-lg bg-gray-50 p-4 text-center">
          <div className="text-2xl font-bold text-green-600">5,678</div>
          <div className="text-sm text-gray-600">Games Played</div>
        </div>
        <div className="rounded-lg bg-gray-50 p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">89</div>
          <div className="text-sm text-gray-600">Online Now</div>
        </div>
      </div>
    </div>
  );
};

export default GameSelectionMenu;
