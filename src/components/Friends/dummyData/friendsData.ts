// Friends Data Types
export interface Friend {
  id: string;
  name: string;
  username: string;
  avatar: string;
  mutualFriends: number;
  isOnline?: boolean;
  university: string;
  role: "student" | "teacher";
  requestDate?: string;
}

// Mock Friends Data
export const mockFriends: Friend[] = [
  {
    id: "1",
    name: "Sarah Wilson",
    username: "sarahw",
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Wilson&background=3b82f6&color=fff&size=60",
    mutualFriends: 12,
    isOnline: true,
    university: "New York University",
    role: "student",
  },
  {
    id: "2",
    name: "Alex Chen",
    username: "alexc",
    avatar:
      "https://ui-avatars.com/api/?name=Alex+Chen&background=10b981&color=fff&size=60",
    mutualFriends: 8,
    isOnline: false,
    university: "Stanford University",
    role: "teacher",
  },
  {
    id: "3",
    name: "Mike Johnson",
    username: "mikej",
    avatar:
      "https://ui-avatars.com/api/?name=Mike+Johnson&background=f59e0b&color=fff&size=60",
    mutualFriends: 15,
    isOnline: true,
    university: "University of Texas",
    role: "student",
  },
  {
    id: "4",
    name: "Emma Davis",
    username: "emmad",
    avatar:
      "https://ui-avatars.com/api/?name=Emma+Davis&background=ef4444&color=fff&size=60",
    mutualFriends: 6,
    isOnline: false,
    university: "University of Washington",
    role: "student",
  },
  {
    id: "5",
    name: "David Lee",
    username: "davidl",
    avatar:
      "https://ui-avatars.com/api/?name=David+Lee&background=8b5cf6&color=fff&size=60",
    mutualFriends: 20,
    isOnline: true,
    university: "UCLA",
    role: "teacher",
  },
  {
    id: "6",
    name: "Jessica Brown",
    username: "jessicab",
    avatar:
      "https://ui-avatars.com/api/?name=Jessica+Brown&background=ec4899&color=fff&size=60",
    mutualFriends: 9,
    isOnline: false,
    university: "University of Chicago",
    role: "student",
  },
];

export const mockFriendRequests: Friend[] = [
  {
    id: "1",
    name: "John Smith",
    username: "johns",
    avatar:
      "https://ui-avatars.com/api/?name=John+Smith&background=06b6d4&color=fff&size=60",
    mutualFriends: 5,
    requestDate: "2 days ago",
    university: "Harvard University",
    role: "student",
  },
  {
    id: "2",
    name: "Lisa Wang",
    username: "lisaw",
    avatar:
      "https://ui-avatars.com/api/?name=Lisa+Wang&background=84cc16&color=fff&size=60",
    mutualFriends: 3,
    requestDate: "1 week ago",
    university: "MIT",
    role: "teacher",
  },
];

export const mockFriendSuggestions: Friend[] = [
  {
    id: "7",
    name: "Ryan Garcia",
    username: "ryang",
    avatar:
      "https://ui-avatars.com/api/?name=Ryan+Garcia&background=f97316&color=fff&size=60",
    mutualFriends: 4,
    isOnline: false,
    university: "University of Miami",
    role: "student",
  },
  {
    id: "8",
    name: "Sophia Martinez",
    username: "sophiam",
    avatar:
      "https://ui-avatars.com/api/?name=Sophia+Martinez&background=a855f7&color=fff&size=60",
    mutualFriends: 7,
    isOnline: true,
    university: "University of Denver",
    role: "teacher",
  },
  {
    id: "9",
    name: "Kevin Park",
    username: "kevinp",
    avatar:
      "https://ui-avatars.com/api/?name=Kevin+Park&background=14b8a6&color=fff&size=60",
    mutualFriends: 11,
    isOnline: true,
    university: "Portland State University",
    role: "student",
  },
];
