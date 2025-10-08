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
  currentRound: "university" | "inter-university" | "qf" | "sf" | "final";
  phase: "university-level" | "inter-university-final"; // Added phase tracking
  registeredPlayers: Player[];
  bracket: Match[];
  prizePool: Prize[];
  universityId?: string; // For university-specific tournaments
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
    currentRound: "final",
    phase: "inter-university-final",
    registeredPlayers: samplePlayers.slice(0, 48),
    bracket: [],
    prizePool: defaultPrizePool,
  },
  {
    id: "tournament-999",
    status: "ended",
    startDate: "2025-09-28",
    currentRound: "final",
    phase: "inter-university-final",
    registeredPlayers: samplePlayers.slice(0, 32),
    bracket: [],
    prizePool: defaultPrizePool,
  },
];

// ==================== TOURNAMENT CONSTANTS ====================

export const TOURNAMENT_CONSTANTS = {
  ENTRY_FEE: 50, // XP
  MAX_PLAYERS: 64,
  MAX_PLAYERS_PER_UNIVERSITY: 64, // Each university can have up to 64 players
  INTER_UNIVERSITY_QUALIFIERS: 10, // Top 10 from each university qualify for inter-university
  DAILY_XP_REWARD: 10,
  NEW_USER_BONUS: 250,
  ACTIVE_HOURS: {
    START: 14, // 2 PM
    END: 2, // 2 AM (next day)
  },
  ROUNDS: [
    { id: "university", name: "University Round", day: "Saturday-Monday" },
    { id: "inter-university", name: "Inter-University Round", day: "Tuesday" },
    { id: "qf", name: "Quarter Finals", day: "Wednesday" },
    { id: "sf", name: "Semi Finals", day: "Thursday" },
    { id: "final", name: "Grand Finals", day: "Friday" },
  ],
  TOURNAMENT_PHASES: [
    {
      phase: "university-level",
      description: "Each university has their own tournament. Top 10 advance.",
      duration: "3 days",
    },
    {
      phase: "inter-university-final",
      description:
        "Top 10 players from each university compete for the ultimate prize.",
      duration: "3 days",
    },
  ],
  TOURNAMENT_RULES: [
    "Match time: 2 PM - 2 AM daily",
    "Phase 1: University-level tournament (Top 10 qualify)",
    "Phase 2: Inter-university final (All top 10s compete)",
    "Must be online during your match time",
    "5 minutes response time or auto-forfeit",
    "Best of 1 game per match",
    "Higher score wins, tie = sudden death",
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

export const getTournamentSchedule = (startDate: string) => {
  const start = new Date(startDate);
  const schedule: Array<{
    round: string;
    name: string;
    date: string;
    day: string;
  }> = [];

  TOURNAMENT_CONSTANTS.ROUNDS.forEach((round, index) => {
    const matchDate = new Date(start);
    if (round.id === "sf") {
      // Semi Finals span 2 days
      matchDate.setDate(start.getDate() + index);
      schedule.push({
        round: round.id,
        name: round.name,
        date: matchDate.toISOString().split("T")[0],
        day: "Tuesday",
      });
      matchDate.setDate(start.getDate() + index + 1);
      schedule.push({
        round: round.id,
        name: round.name,
        date: matchDate.toISOString().split("T")[0],
        day: "Wednesday",
      });
    } else {
      matchDate.setDate(start.getDate() + index);
      schedule.push({
        round: round.id,
        name: round.name,
        date: matchDate.toISOString().split("T")[0],
        day: round.day,
      });
    }
  });

  return schedule;
};
