// Tournament Dummy Data

export interface Player {
  id: string;
  name: string;
  avatar: string;
  xp: number;
  rank: number;
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
  currentRound: "round1" | "round2" | "qf" | "sf" | "final";
  registeredPlayers: Player[];
  bracket: Match[];
  prizePool: Prize[];
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
    registeredPlayers: samplePlayers.slice(0, 48),
    bracket: [],
    prizePool: defaultPrizePool,
  },
  {
    id: "tournament-999",
    status: "ended",
    startDate: "2025-09-28",
    currentRound: "final",
    registeredPlayers: samplePlayers.slice(0, 32),
    bracket: [],
    prizePool: defaultPrizePool,
  },
];

// ==================== TOURNAMENT CONSTANTS ====================

export const TOURNAMENT_CONSTANTS = {
  ENTRY_FEE: 50, // XP
  MAX_PLAYERS: 64,
  DAILY_XP_REWARD: 10,
  NEW_USER_BONUS: 250,
  ACTIVE_HOURS: {
    START: 14, // 2 PM
    END: 2, // 2 AM (next day)
  },
  ROUNDS: [
    { id: "round1", name: "Round 1", day: "Saturday" },
    { id: "round2", name: "Round 2", day: "Sunday" },
    { id: "qf", name: "Quarter Finals", day: "Monday" },
    { id: "sf", name: "Semi Finals", day: "Tuesday-Wednesday" },
    { id: "final", name: "Finals", day: "Thursday" },
  ],
  TOURNAMENT_RULES: [
    "Match time: 2 PM - 2 AM daily",
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
