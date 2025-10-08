// Tournament Dummy Data

// ==================== UNIVERSITY DATA ====================

export interface University {
  id: string;
  name: string;
  shortName: string;
  category: "engineering" | "general" | "medical" | "other";
  logo?: string;
}

export const universities: University[] = [
  // Engineering Universities
  {
    id: "buet",
    name: "Bangladesh University of Engineering and Technology",
    shortName: "BUET",
    category: "engineering",
  },
  {
    id: "cuet",
    name: "Chittagong University of Engineering & Technology",
    shortName: "CUET",
    category: "engineering",
  },
  {
    id: "ruet",
    name: "Rajshahi University of Engineering & Technology",
    shortName: "RUET",
    category: "engineering",
  },
  {
    id: "kuet",
    name: "Khulna University of Engineering & Technology",
    shortName: "KUET",
    category: "engineering",
  },
  {
    id: "duet",
    name: "Dhaka University of Engineering & Technology",
    shortName: "DUET",
    category: "engineering",
  },

  // General Universities
  {
    id: "du",
    name: "University of Dhaka",
    shortName: "DU",
    category: "general",
  },
  {
    id: "cu",
    name: "University of Chittagong",
    shortName: "CU",
    category: "general",
  },
  {
    id: "ru",
    name: "University of Rajshahi",
    shortName: "RU",
    category: "general",
  },
  {
    id: "ju",
    name: "Jahangirnagar University",
    shortName: "JU",
    category: "general",
  },
];

export interface Player {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  rank: number;
  universityId?: string; // Added university tracking
}

export interface Match {
  id: string;
  round: string;
  player1: Player;
  player2: Player;
  winner: string | null;
  player1Score: number;
  player2Score: number;
  scheduledTime: string;
  status: "upcoming" | "live" | "completed";
}

export interface Prize {
  id: number;
  type: "buffet" | "masallah" | "pizza" | "cash";
  name: string;
  value: number;
  description: string;
  location?: string;
  note?: string;
}

export interface Tournament {
  id: string;
  status: "registration" | "active" | "ended";
  startDate: string;
  currentRound: "round-96" | "round-24" | "round-3" | "finals";
  currentDay?: number; // Track current day (1-7)
  registeredPlayers: Player[];
  bracket: Match[];
  prizePool: Prize[];
  universityId?: string;
}

// ==================== PRIZE POOL ====================

export const defaultPrizePool: Prize[] = [
  {
    id: 1,
    type: "buffet",
    name: "Star Kabab Buffet",
    value: 500,
    description: "Full buffet for 1 person",
    location: "Near Campus",
  },
  {
    id: 2,
    type: "masallah",
    name: "Masallah Kabab Treat",
    value: 300,
    description: "2 persons special",
    location: "Shahbag",
  },
  {
    id: 3,
    type: "pizza",
    name: "Pizza Treat",
    value: 400,
    description: "Large pizza + drinks",
    location: "Pizza Hut",
  },
  {
    id: 4,
    type: "cash",
    name: "Cash Prize (bKash)",
    value: 400,
    description: "Instant bKash transfer",
    note: "⚠️ 20% less value than treats",
  },
];

// ==================== SAMPLE PLAYERS ====================

export const samplePlayers: Player[] = [
  {
    id: "player-001",
    name: "Tamim Ahmed",
    avatar:
      "https://ui-avatars.com/api/?name=Tamim+Ahmed&background=3b82f6&color=fff",
    xp: 1250,
    rank: 1,
  },
  {
    id: "player-002",
    name: "Rafiq Hassan",
    avatar:
      "https://ui-avatars.com/api/?name=Rafiq+Hassan&background=10b981&color=fff",
    xp: 1180,
    rank: 2,
  },
  {
    id: "player-003",
    name: "Sakib Khan",
    avatar:
      "https://ui-avatars.com/api/?name=Sakib+Khan&background=f59e0b&color=fff",
    xp: 1120,
    rank: 3,
  },
  {
    id: "player-004",
    name: "Mehedi Hasan",
    avatar:
      "https://ui-avatars.com/api/?name=Mehedi+Hasan&background=ef4444&color=fff",
    xp: 1090,
    rank: 4,
  },
  {
    id: "player-005",
    name: "Labib Rahman",
    avatar:
      "https://ui-avatars.com/api/?name=Labib+Rahman&background=8b5cf6&color=fff",
    xp: 1050,
    rank: 5,
  },
  {
    id: "player-006",
    name: "Fahim Islam",
    avatar:
      "https://ui-avatars.com/api/?name=Fahim+Islam&background=ec4899&color=fff",
    xp: 1020,
    rank: 6,
  },
  {
    id: "player-007",
    name: "Rafi Ahmed",
    avatar:
      "https://ui-avatars.com/api/?name=Rafi+Ahmed&background=06b6d4&color=fff",
    xp: 990,
    rank: 7,
  },
  {
    id: "player-008",
    name: "Shanto Khan",
    avatar:
      "https://ui-avatars.com/api/?name=Shanto+Khan&background=14b8a6&color=fff",
    xp: 950,
    rank: 8,
  },
];

// ==================== SAMPLE MATCHES ====================

export const sampleMatches: Match[] = [
  // Round 1 - Sample matches
  {
    id: "match-001",
    round: "round1",
    player1: samplePlayers[0],
    player2: samplePlayers[7],
    winner: samplePlayers[0].id,
    player1Score: 85,
    player2Score: 72,
    scheduledTime: "2025-10-11T14:00:00",
    status: "completed",
  },
  {
    id: "match-002",
    round: "round1",
    player1: samplePlayers[1],
    player2: samplePlayers[6],
    winner: samplePlayers[1].id,
    player1Score: 88,
    player2Score: 79,
    scheduledTime: "2025-10-11T14:30:00",
    status: "completed",
  },
  {
    id: "match-003",
    round: "round1",
    player1: samplePlayers[2],
    player2: samplePlayers[5],
    winner: null,
    player1Score: 0,
    player2Score: 0,
    scheduledTime: "2025-10-11T15:00:00",
    status: "upcoming",
  },
  {
    id: "match-004",
    round: "round1",
    player1: samplePlayers[3],
    player2: samplePlayers[4],
    winner: null,
    player1Score: 0,
    player2Score: 0,
    scheduledTime: "2025-10-11T15:30:00",
    status: "upcoming",
  },

  // Quarter Finals - Sample
  {
    id: "match-qf-001",
    round: "qf",
    player1: samplePlayers[0],
    player2: samplePlayers[1],
    winner: null,
    player1Score: 0,
    player2Score: 0,
    scheduledTime: "2025-10-13T18:00:00",
    status: "upcoming",
  },
];

// ==================== PAST TOURNAMENTS ====================

export const pastTournaments: Tournament[] = [
  {
    id: "tournament-000",
    status: "ended",
    startDate: "2025-10-05",
    currentRound: "finals",
    currentDay: 7,
    registeredPlayers: samplePlayers.slice(0, 48),
    bracket: [],
    prizePool: defaultPrizePool,
  },
  {
    id: "tournament-999",
    status: "ended",
    startDate: "2025-09-28",
    currentRound: "finals",
    currentDay: 7,
    registeredPlayers: samplePlayers.slice(0, 32),
    bracket: [],
    prizePool: defaultPrizePool,
  },
];

// ==================== TOURNAMENT CONSTANTS ====================

export const TOURNAMENT_CONSTANTS = {
  ENTRY_FEE: 50, // XP

  // Qualification Numbers (Simple Structure)
  ROUND_96: 96, // Top 96 after Day 1-3
  ROUND_24: 24, // Top 24 after Day 4-5
  ROUND_3: 3, // Top 3 after Day 6 (per university)

  // XP System
  DAILY_XP_REWARD: 10,
  NEW_USER_BONUS: 250,

  // Match Timing
  ACTIVE_HOURS: {
    START: 12, // 12 PM (Noon)
    END: 0, // 12 AM (Midnight)
  },

  // Weekly Tournament Schedule (7 Days)
  ROUNDS: [
    {
      id: "round-96",
      name: "Round of 96",
      days: "Day 1-3 (Sat-Mon)",
      description: "University-level competition. Top 96 advance.",
    },
    {
      id: "round-24",
      name: "Round of 24",
      days: "Day 4-5 (Tue-Wed)",
      description: "96 players compete. Top 24 advance.",
    },
    {
      id: "round-3",
      name: "Round of 3",
      days: "Day 6 (Thu)",
      description: "24 players compete. Top 3 from each university advance.",
    },
    {
      id: "finals",
      name: "Grand Finals",
      days: "Day 7 (Fri)",
      description: "3 players from each university compete for ultimate glory!",
    },
  ],

  TOURNAMENT_RULES: [
    "🗓️ Single Week Tournament (Saturday to Friday)",
    "⏰ Match time: 12 PM - 12 AM daily",
    "",
    "📍 Day 1-3: University matches → Top 96 qualify",
    "📍 Day 4-5: Round of 96 → Top 24 qualify",
    "📍 Day 6: Round of 24 → Top 3 per university qualify",
    "📍 Day 7: Grand Finals (3 players × All universities)",
    "",
    "⚡ Must be online during your match time",
    "⏱️ 5 minutes response time or auto-forfeit",
    "🎮 Best of 1 game per match",
    "🏆 Higher score wins, tie = sudden death round",
  ],
};

// ==================== HELPER FUNCTIONS ====================

export const getNextSaturday = (): string => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7;
  const nextSaturday = new Date(today);
  nextSaturday.setDate(today.getDate() + daysUntilSaturday);
  return nextSaturday.toISOString().split("T")[0];
};

export const formatTournamentDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Get current active round based on tournament start date and current date
export const getCurrentRound = (
  startDate: string
): "round-96" | "round-24" | "round-3" | "finals" | null => {
  // Parse dates at midnight to avoid time zone issues
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate days since tournament start
  const daysSinceStart = Math.floor(
    (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysSinceStart < 0) {
    // Tournament hasn't started yet
    return null;
  } else if (daysSinceStart >= 0 && daysSinceStart <= 2) {
    // Day 1-3: Saturday, Sunday, Monday
    return "round-96";
  } else if (daysSinceStart >= 3 && daysSinceStart <= 4) {
    // Day 4-5: Tuesday, Wednesday
    return "round-24";
  } else if (daysSinceStart === 5) {
    // Day 6: Thursday
    return "round-3";
  } else if (daysSinceStart === 6) {
    // Day 7: Friday
    return "finals";
  } else {
    // Tournament ended
    return null;
  }
};

export const getTournamentSchedule = (startDate: string) => {
  const start = new Date(startDate);
  const schedule: Array<{
    round: string;
    name: string;
    date: string;
    days: string;
    description: string;
  }> = [];

  TOURNAMENT_CONSTANTS.ROUNDS.forEach((round) => {
    const matchDate = new Date(start);

    if (round.id === "round-96") {
      // Day 1-3: Round of 96
      matchDate.setDate(start.getDate());
      schedule.push({
        round: round.id,
        name: round.name,
        date: matchDate.toISOString().split("T")[0],
        days: round.days,
        description: round.description,
      });
    } else if (round.id === "round-24") {
      // Day 4-5: Round of 24
      matchDate.setDate(start.getDate() + 3);
      schedule.push({
        round: round.id,
        name: round.name,
        date: matchDate.toISOString().split("T")[0],
        days: round.days,
        description: round.description,
      });
    } else if (round.id === "round-3") {
      // Day 6: Round of 3
      matchDate.setDate(start.getDate() + 5);
      schedule.push({
        round: round.id,
        name: round.name,
        date: matchDate.toISOString().split("T")[0],
        days: round.days,
        description: round.description,
      });
    } else if (round.id === "finals") {
      // Day 7: Grand Finals
      matchDate.setDate(start.getDate() + 6);
      schedule.push({
        round: round.id,
        name: round.name,
        date: matchDate.toISOString().split("T")[0],
        days: round.days,
        description: round.description,
      });
    }
  });

  return schedule;
};
