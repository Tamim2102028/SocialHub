import React, { useState, useMemo } from "react";

type FilterType = "all" | "math" | "sudoku" | "arena";
type TimeFilter = "daily" | "weekly" | "monthly" | "all-time";

interface Player {
  id: number;
  name: string;
  score: number;
  game: "math" | "sudoku" | "arena";
  level: number;
  winRate: number;
  achievements: number;
  lastActive: string;
  avatar: string;
}

const Leaderboard: React.FC = () => {
  const [gameFilter, setGameFilter] = useState<FilterType>("all");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("weekly");

  const players: Player[] = useMemo(
    () => [
      {
        id: 1,
        name: "MathWizard",
        score: 2450,
        game: "math",
        level: 15,
        winRate: 92,
        achievements: 12,
        lastActive: "2 hours ago",
        avatar: "🧙‍♂️",
      },
      {
        id: 2,
        name: "SudokuMaster",
        score: 2380,
        game: "sudoku",
        level: 18,
        winRate: 88,
        achievements: 15,
        lastActive: "1 hour ago",
        avatar: "🏆",
      },
      {
        id: 3,
        name: "ArenaChamp",
        score: 2290,
        game: "arena",
        level: 12,
        winRate: 85,
        achievements: 9,
        lastActive: "3 hours ago",
        avatar: "⚡",
      },
      {
        id: 4,
        name: "QuickSolver",
        score: 2180,
        game: "math",
        level: 13,
        winRate: 89,
        achievements: 8,
        lastActive: "30 min ago",
        avatar: "🚀",
      },
      {
        id: 5,
        name: "PuzzleKing",
        score: 2050,
        game: "sudoku",
        level: 16,
        winRate: 91,
        achievements: 11,
        lastActive: "1 day ago",
        avatar: "👑",
      },
      {
        id: 6,
        name: "BrainStorm",
        score: 1980,
        game: "arena",
        level: 11,
        winRate: 83,
        achievements: 7,
        lastActive: "4 hours ago",
        avatar: "🧠",
      },
      {
        id: 7,
        name: "SpeedRunner",
        score: 1890,
        game: "math",
        level: 10,
        winRate: 87,
        achievements: 6,
        lastActive: "5 hours ago",
        avatar: "💨",
      },
      {
        id: 8,
        name: "LogicLord",
        score: 1820,
        game: "sudoku",
        level: 14,
        winRate: 94,
        achievements: 10,
        lastActive: "2 days ago",
        avatar: "🎯",
      },
    ],
    []
  );

  const gameFilterOptions = [
    { value: "all", label: "All Games", icon: "🎮" },
    { value: "math", label: "Math Competition", icon: "🔢" },
    { value: "sudoku", label: "Sudoku", icon: "🧩" },
    { value: "arena", label: "Academic Arena", icon: "🎓" },
  ];

  const timeFilterOptions = [
    { value: "daily", label: "Today" },
    { value: "weekly", label: "This Week" },
    { value: "monthly", label: "This Month" },
    { value: "all-time", label: "All Time" },
  ];

  const filteredPlayers = useMemo(() => {
    let filtered = players;

    if (gameFilter !== "all") {
      filtered = filtered.filter((player) => player.game === gameFilter);
    }

    // Sort by score descending
    return filtered.sort((a, b) => b.score - a.score);
  }, [gameFilter, players]);

  const getGameColor = (game: string) => {
    switch (game) {
      case "math":
        return "bg-green-100 text-green-800";
      case "sudoku":
        return "bg-blue-100 text-blue-800";
      case "arena":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      // case 1:
      //   return "🥇";
      // case 2:
      //   return "🥈";
      // case 3:
      //   return "🥉";
      default:
        return `#${rank}`;
    }
  };

  return (
    <>
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">🏆 Leaderboard</h2>
        <p className="mt-1 text-gray-600">
          Compete with players and climb the rankings
        </p>
      </div>

      {/* Filters */}
      <div className=" grid grid-cols-2 gap-3">
        {/* Game Filter */}
        <div className="rounded-lg bg-gray-50 p-4 border">
          <h3 className="mb-3 text-base font-semibold text-gray-900">
            Filter by Game
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {gameFilterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setGameFilter(option.value as FilterType)}
                className={`rounded-lg border-2 p-2 text-sm font-medium transition-colors ${
                  gameFilter === option.value
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="mb-1 text-base">{option.icon}</div>
                  <div className="text-xs">{option.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div className="rounded-lg bg-gray-50 p-4 border">
          <h3 className="mb-3 text-base font-semibold text-gray-900">
            Time Period
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {timeFilterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setTimeFilter(option.value as TimeFilter)}
                className={`rounded-lg border-2 p-2 text-sm font-medium transition-colors ${
                  timeFilter === option.value
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className=" rounded-lg bg-gray-50 py-3 border">
        <h3 className="mb-4 text-center text-lg font-bold text-gray-900">
          Top Performers
        </h3>
        <div className="flex justify-center items-end space-x-6">
          {filteredPlayers.slice(0, 3).map((player, index) => (
            <div key={player.id} className="text-center">
              <div
                className={`mb-2 ${index === 0 ? "order-2 transform scale-105" : index === 1 ? "order-1" : "order-3"}`}
              >
                <div className="text-3xl mb-2">{player.avatar}</div>
                <div className="font-bold text-gray-900 text-sm">
                  {player.name}
                </div>
                <div className="text-xs text-gray-600">
                  Level {player.level}
                </div>
                <div className="mt-1 text-xl">{getRankBadge(index + 1)}</div>
                <div className="mt-1 font-semibold text-orange-600 text-sm">
                  {player.score.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Rankings Table */}
      <div className="rounded-lg bg-white border overflow-hidden">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-gray-900">
              Full Rankings ({filteredPlayers.length} players)
            </h3>
            <div className="text-xs text-gray-600">
              Showing{" "}
              {gameFilter === "all"
                ? "All Games"
                : gameFilterOptions.find((g) => g.value === gameFilter)
                    ?.label}{" "}
              • {timeFilterOptions.find((t) => t.value === timeFilter)?.label}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Game
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Level
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Win Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPlayers.map((player, index) => (
                <tr
                  key={player.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-base font-bold text-gray-900">
                      {getRankBadge(index + 1)}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-xl mr-3">{player.avatar}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {player.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getGameColor(player.game)}`}
                    >
                      {player.game.charAt(0).toUpperCase() +
                        player.game.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">
                      {player.score.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{player.level}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {player.winRate}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPlayers.length === 0 && (
          <div className="p-12 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <div className="text-lg font-medium text-gray-900 mb-2">
              No players found
            </div>
            <div className="text-gray-600">
              Try adjusting your filters to see more results.
            </div>
          </div>
        )}
      </div>

      {/* Your Rank Card */}
      <div className=" rounded-lg bg-gray-800 p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-base font-semibold">Your Current Rank</div>
            <div className="text-2xl font-bold">#15</div>
            <div className="text-orange-100 text-sm">
              Keep playing to climb higher!
            </div>
          </div>
          <div className="text-right">
            <div className="text-orange-100 text-sm">Your Score</div>
            <div className="text-xl font-bold">1,650</div>
            <div className="text-xs text-orange-100">+120 this week</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
