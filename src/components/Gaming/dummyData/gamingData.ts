// Gaming Data Types
export interface Game {
  name: string;
  players: string;
  image: string;
}

export interface GamingActivity {
  user: string;
  activity: string;
  game: string;
  time: string;
  avatar: string;
}

export interface GamingStats {
  gamesPlayed: number;
  achievements: number;
  gamingFriends: number;
  winStreak: number;
}

// Mock Gaming Data
export const mockPopularGames: Game[] = [
  { name: "Valorant", players: "2.3M", image: "🎯" },
  { name: "League of Legends", players: "1.8M", image: "⚔️" },
  { name: "CS2", players: "1.5M", image: "🔫" },
  { name: "Fortnite", players: "1.2M", image: "🏗️" },
  { name: "Minecraft", players: "980K", image: "🧱" },
  { name: "Apex Legends", players: "750K", image: "🎮" },
  { name: "PUBG", players: "650K", image: "🪂" },
  { name: "Rocket League", players: "540K", image: "⚽" },
];

export const mockGamingActivity: GamingActivity[] = [
  {
    user: "Alex Johnson",
    activity: "achieved rank Diamond in",
    game: "Valorant",
    time: "2 hours ago",
    avatar: "🎯",
  },
  {
    user: "Sarah Wilson",
    activity: "completed achievement in",
    game: "Minecraft",
    time: "4 hours ago",
    avatar: "🧱",
  },
  {
    user: "Mike Chen",
    activity: "started playing",
    game: "CS2",
    time: "6 hours ago",
    avatar: "🔫",
  },
];

export const mockGamingStats: GamingStats = {
  gamesPlayed: 42,
  achievements: 156,
  gamingFriends: 28,
  winStreak: 12,
};
