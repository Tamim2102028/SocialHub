import React, { useMemo } from "react";
import { achievementsData } from "../../components/Gaming/data/achievementsData";

const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categoryFilters = [
    { value: "all", label: "All Categories", icon: "🎮" },
    { value: "math", label: "Math", icon: "🔢" },
    { value: "sudoku", label: "Sudoku", icon: "🧩" },
    { value: "arena", label: "Arena", icon: "🎓" },
    { value: "general", label: "General", icon: "⭐" },
  ];

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === "all") {
      return achievementsData;
    }
    return achievementsData.filter(
      (achievement) => achievement.category === selectedCategory
    );
  }, [selectedCategory]);

  const stats = useMemo(() => {
    const unlocked = achievementsData.filter((a) => a.isUnlocked).length;
    const total = achievementsData.length;
    const totalXP = achievementsData
      .filter((a) => a.isUnlocked)
      .reduce((sum, a) => sum + a.xpReward, 0);
    return { unlocked, total, totalXP };
  }, []);

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
    <div className="space-y-5">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">🏅 Achievements</h2>
        <p className="mt-1 text-gray-600">
          Track your progress and unlock rewards
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 text-center shadow-sm">
          <div className="text-3xl font-bold text-green-600">
            {stats.unlocked}
          </div>
          <div className="text-sm text-gray-600">Achievements Unlocked</div>
          <div className="mt-1 text-xs text-gray-500">
            of {stats.total} total
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 text-center shadow-sm">
          <div className="text-3xl font-bold text-blue-600">
            {Math.round((stats.unlocked / stats.total) * 100)}%
          </div>
          <div className="text-sm text-gray-600">Completion Rate</div>
          <div className="mt-1 text-xs text-gray-500">Keep going!</div>
        </div>
        <div className="rounded-lg bg-white p-6 text-center shadow-sm">
          <div className="text-3xl font-bold text-purple-600">
            {stats.totalXP}
          </div>
          <div className="text-sm text-gray-600">XP Earned</div>
          <div className="mt-1 text-xs text-gray-500">from achievements</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Filter by Category
        </h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
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
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
                  className={`text-xs font-medium tracking-wide uppercase ${getRarityTextColor(achievement.rarity)}`}
                >
                  {achievement.rarity}
                </div>
                {achievement.isUnlocked && (
                  <div className="mt-1 text-xs text-gray-500">
                    {achievement.unlockedDate}
                  </div>
                )}
              </div>
            </div>

            {/* Achievement Content */}
            <div className="mb-4">
              <h3
                className={`mb-2 text-lg font-bold ${achievement.isUnlocked ? "text-gray-900" : "text-gray-600"}`}
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
                <div className="h-2 overflow-hidden rounded-full bg-gray-200">
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
        <div className="py-12 text-center">
          <div className="mb-4 text-4xl">🎮</div>
          <div className="mb-2 text-lg font-medium text-gray-900">
            No achievements found
          </div>
          <div className="text-gray-600">
            Try selecting a different category.
          </div>
        </div>
      )}

      {/* Motivation Section */}
      <div className="rounded-lg bg-gray-600 p-5 text-white">
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold">
            Keep Playing to Unlock More! 🚀
          </h3>
          <p className="mb-4 text-indigo-100">
            You're {stats.total - stats.unlocked} achievements away from
            becoming a gaming legend!
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-4">
              <div className="text-lg font-semibold">Next Goal</div>
              <div className="text-sm text-indigo-100">
                Complete 3 more achievements
              </div>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <div className="text-lg font-semibold">Potential XP</div>
              <div className="text-sm text-indigo-100">
                {achievementsData
                  .filter((a) => !a.isUnlocked)
                  .reduce((sum, a) => sum + a.xpReward, 0)}{" "}
                XP available
              </div>
            </div>
            <div className="rounded-lg bg-white/10 p-4">
              <div className="text-lg font-semibold">Current Streak</div>
              <div className="text-sm text-indigo-100">5 days playing 🔥</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
