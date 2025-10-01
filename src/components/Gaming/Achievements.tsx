import React, { useMemo } from "react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: "math" | "sudoku" | "arena" | "general";
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
  unlockedDate?: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  xpReward: number;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = useMemo(
    () => [
      {
        id: 1,
        title: "First Steps",
        description: "Complete your first math competition",
        icon: "🏁",
        category: "math",
        progress: 1,
        maxProgress: 1,
        isUnlocked: true,
        unlockedDate: "2024-01-15",
        rarity: "common",
        xpReward: 50,
      },
      {
        id: 2,
        title: "Speed Demon",
        description: "Answer 10 math questions in under 30 seconds",
        icon: "⚡",
        category: "math",
        progress: 7,
        maxProgress: 10,
        isUnlocked: false,
        rarity: "rare",
        xpReward: 150,
      },
      {
        id: 3,
        title: "Sudoku Novice",
        description: "Complete your first Sudoku puzzle",
        icon: "🧩",
        category: "sudoku",
        progress: 1,
        maxProgress: 1,
        isUnlocked: true,
        unlockedDate: "2024-01-20",
        rarity: "common",
        xpReward: 50,
      },
      {
        id: 4,
        title: "Master Solver",
        description: "Complete 50 Sudoku puzzles",
        icon: "🏆",
        category: "sudoku",
        progress: 23,
        maxProgress: 50,
        isUnlocked: false,
        rarity: "epic",
        xpReward: 300,
      },
      {
        id: 5,
        title: "Academic Warrior",
        description: "Win 10 Academic Arena challenges",
        icon: "⚔️",
        category: "arena",
        progress: 4,
        maxProgress: 10,
        isUnlocked: false,
        rarity: "rare",
        xpReward: 200,
      },
      {
        id: 6,
        title: "Perfect Score",
        description: "Score 100% in any competition",
        icon: "💯",
        category: "general",
        progress: 1,
        maxProgress: 1,
        isUnlocked: true,
        unlockedDate: "2024-01-25",
        rarity: "epic",
        xpReward: 250,
      },
      {
        id: 7,
        title: "Dedication",
        description: "Play games for 7 consecutive days",
        icon: "🔥",
        category: "general",
        progress: 5,
        maxProgress: 7,
        isUnlocked: false,
        rarity: "rare",
        xpReward: 180,
      },
      {
        id: 8,
        title: "Gaming Legend",
        description: "Reach level 20 in any game",
        icon: "👑",
        category: "general",
        progress: 15,
        maxProgress: 20,
        isUnlocked: false,
        rarity: "legendary",
        xpReward: 500,
      },
      {
        id: 9,
        title: "Quick Thinker",
        description: "Complete 5 Easy Sudokus in under 3 minutes each",
        icon: "💨",
        category: "sudoku",
        progress: 2,
        maxProgress: 5,
        isUnlocked: false,
        rarity: "rare",
        xpReward: 120,
      },
      {
        id: 10,
        title: "Math Genius",
        description: "Answer 100 math questions correctly",
        icon: "🧠",
        category: "math",
        progress: 67,
        maxProgress: 100,
        isUnlocked: false,
        rarity: "epic",
        xpReward: 280,
      },
    ],
    []
  );

  const categoryFilters = [
    { value: "all", label: "All Categories", icon: "🎮" },
    { value: "math", label: "Math", icon: "🔢" },
    { value: "sudoku", label: "Sudoku", icon: "🧩" },
    { value: "arena", label: "Arena", icon: "🎓" },
    { value: "general", label: "General", icon: "⭐" },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === "all") {
      return achievements;
    }
    return achievements.filter(
      (achievement) => achievement.category === selectedCategory
    );
  }, [achievements, selectedCategory]);

  const stats = useMemo(() => {
    const unlocked = achievements.filter((a) => a.isUnlocked).length;
    const total = achievements.length;
    const totalXP = achievements
      .filter((a) => a.isUnlocked)
      .reduce((sum, a) => sum + a.xpReward, 0);
    return { unlocked, total, totalXP };
  }, [achievements]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "border-gray-300 bg-gray-50";
      case "rare":
        return "border-blue-300 bg-blue-50";
      case "epic":
        return "border-purple-300 bg-purple-50";
      case "legendary":
        return "border-yellow-300 bg-yellow-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "text-gray-600";
      case "rare":
        return "text-blue-600";
      case "epic":
        return "text-purple-600";
      case "legendary":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const getProgressPercentage = (progress: number, maxProgress: number) => {
    return Math.min((progress / maxProgress) * 100, 100);
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">🏅 Achievements</h2>
          <p className="mt-2 text-gray-600">
            Track your progress and unlock rewards
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600">
              {stats.unlocked}
            </div>
            <div className="text-sm text-gray-600">Achievements Unlocked</div>
            <div className="mt-1 text-xs text-gray-500">
              of {stats.total} total
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600">
              {Math.round((stats.unlocked / stats.total) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Completion Rate</div>
            <div className="mt-1 text-xs text-gray-500">Keep going!</div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-purple-600">
              {stats.totalXP}
            </div>
            <div className="text-sm text-gray-600">XP Earned</div>
            <div className="mt-1 text-xs text-gray-500">from achievements</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Filter by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {categoryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedCategory(filter.value)}
                className={`rounded-lg border-2 p-3 text-sm font-medium transition-colors ${
                  selectedCategory === filter.value
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="mb-1 text-lg">{filter.icon}</div>
                  <div>{filter.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`rounded-lg border-2 p-6 shadow-sm transition-all duration-200 ${
                achievement.isUnlocked
                  ? `${getRarityColor(achievement.rarity)} hover:shadow-md`
                  : "border-gray-200 bg-gray-50 opacity-75"
              }`}
            >
              {/* Achievement Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="text-right">
                  <div
                    className={`text-xs font-medium uppercase tracking-wide ${getRarityTextColor(achievement.rarity)}`}
                  >
                    {achievement.rarity}
                  </div>
                  {achievement.isUnlocked && (
                    <div className="text-xs text-gray-500 mt-1">
                      {achievement.unlockedDate}
                    </div>
                  )}
                </div>
              </div>

              {/* Achievement Content */}
              <div className="mb-4">
                <h3
                  className={`text-lg font-bold mb-2 ${achievement.isUnlocked ? "text-gray-900" : "text-gray-600"}`}
                >
                  {achievement.title}
                </h3>
                <p
                  className={`text-sm ${achievement.isUnlocked ? "text-gray-700" : "text-gray-500"}`}
                >
                  {achievement.description}
                </p>
              </div>

              {/* Progress Bar */}
              {!achievement.isUnlocked && (
                <div className="mb-4">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-600">
                      {achievement.progress}/{achievement.maxProgress}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                      style={{
                        width: `${getProgressPercentage(achievement.progress, achievement.maxProgress)}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* XP Reward */}
              <div className="flex items-center justify-between">
                <div
                  className={`text-sm ${achievement.isUnlocked ? "text-green-600" : "text-gray-600"}`}
                >
                  {achievement.isUnlocked ? "✅ Unlocked" : "🔒 Locked"}
                </div>
                <div className="flex items-center text-sm text-yellow-600">
                  <span className="mr-1">⭐</span>
                  <span>{achievement.xpReward} XP</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🎮</div>
            <div className="text-lg font-medium text-gray-900 mb-2">
              No achievements found
            </div>
            <div className="text-gray-600">
              Try selecting a different category.
            </div>
          </div>
        )}

        {/* Motivation Section */}
        <div className="mt-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Keep Playing to Unlock More! 🚀
            </h3>
            <p className="text-indigo-100 mb-4">
              You're {stats.total - stats.unlocked} achievements away from
              becoming a gaming legend!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-semibold">Next Goal</div>
                <div className="text-sm text-indigo-100">
                  Complete 3 more achievements
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-semibold">Potential XP</div>
                <div className="text-sm text-indigo-100">
                  {achievements
                    .filter((a) => !a.isUnlocked)
                    .reduce((sum, a) => sum + a.xpReward, 0)}{" "}
                  XP available
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-lg font-semibold">Current Streak</div>
                <div className="text-sm text-indigo-100">5 days playing 🔥</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
