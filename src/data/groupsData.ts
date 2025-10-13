export interface UniversityInfo {
  name: string;
  department?: string;
  section?: string;
  subSection?: string;
}

export interface Group {
  groupId: string;
  name: string;
  description: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  members: string[];
  admins: string[];
  privacy: "public" | "private" | "closed";
  category: "university" | "career" | "hsc" | "normal";
  memberCount: number;
  postCount: number;
  coverImage?: string;
  profileImage?: string;
  rules?: string[];
  isActive: boolean;
  university?: UniversityInfo;
}

export const groupsData: Group[] = [
  {
    groupId: "g7",
    name: "Matha Mota Group",
    description:
      "A group for matha mota (thick-headed) friends to hang out and share fun!",
    createdBy: "1",
    createdAt: "2025-10-13T10:00:00Z",
    updatedAt: "2025-10-13T10:00:00Z",
    members: ["1", "2", "7", "9"],
    admins: ["1"],
    privacy: "public",
    category: "normal",
    memberCount: 4,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    rules: ["No serious talk allowed!", "Fun only"],
    isActive: true,
  },
  // BUET University Groups (Arch, ChE, EEE)
  // Architecture (Arch)
  {
    groupId: "g21",
    name: "BUET - Architecture (Arch) - Section A - Subsection 1",
    description: "Architecture (Arch) group for BUET, Section A, Subsection 1",
    createdBy: "1",
    createdAt: "2023-01-01T10:00:00Z",
    updatedAt: "2025-10-01T12:00:00Z",
    members: [],
    admins: ["1"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    rules: [
      "Only for Architecture (Arch) students of BUET, Section A, Subsection 1",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Architecture (Arch)",
      section: "A",
      subSection: "1",
    },
  },
  {
    groupId: "g22",
    name: "BUET - Architecture (Arch) - Section A - Subsection 2",
    description: "Architecture (Arch) group for BUET, Section A, Subsection 2",
    createdBy: "1",
    createdAt: "2023-01-01T10:00:00Z",
    updatedAt: "2025-10-01T12:00:00Z",
    members: [],
    admins: ["1"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    rules: [
      "Only for Architecture (Arch) students of BUET, Section A, Subsection 2",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Architecture (Arch)",
      section: "A",
      subSection: "2",
    },
  },
  {
    groupId: "g23",
    name: "BUET - Architecture (Arch) - Section B - Subsection 1",
    description: "Architecture (Arch) group for BUET, Section B, Subsection 1",
    createdBy: "1",
    createdAt: "2023-01-01T10:00:00Z",
    updatedAt: "2025-10-01T12:00:00Z",
    members: [],
    admins: ["1"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    rules: [
      "Only for Architecture (Arch) students of BUET, Section B, Subsection 1",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Architecture (Arch)",
      section: "B",
      subSection: "1",
    },
  },
  {
    groupId: "g24",
    name: "BUET - Architecture (Arch) - Section B - Subsection 2",
    description: "Architecture (Arch) group for BUET, Section B, Subsection 2",
    createdBy: "1",
    createdAt: "2023-01-01T10:00:00Z",
    updatedAt: "2025-10-01T12:00:00Z",
    members: [],
    admins: ["1"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    rules: [
      "Only for Architecture (Arch) students of BUET, Section B, Subsection 2",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Architecture (Arch)",
      section: "B",
      subSection: "2",
    },
  },
  // Chemical Engineering (ChE)
  {
    groupId: "g25",
    name: "BUET - Chemical Engineering (ChE) - Section A - Subsection 1",
    description:
      "Chemical Engineering (ChE) group for BUET, Section A, Subsection 1",
    createdBy: "2",
    createdAt: "2023-01-02T10:00:00Z",
    updatedAt: "2025-10-02T12:00:00Z",
    members: [],
    admins: ["2"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    rules: [
      "Only for Chemical Engineering (ChE) students of BUET, Section A, Subsection 1",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Chemical Engineering (ChE)",
      section: "A",
      subSection: "1",
    },
  },
  {
    groupId: "g26",
    name: "BUET - Chemical Engineering (ChE) - Section A - Subsection 2",
    description:
      "Chemical Engineering (ChE) group for BUET, Section A, Subsection 2",
    createdBy: "2",
    createdAt: "2023-01-02T10:00:00Z",
    updatedAt: "2025-10-02T12:00:00Z",
    members: [],
    admins: ["2"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    rules: [
      "Only for Chemical Engineering (ChE) students of BUET, Section A, Subsection 2",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Chemical Engineering (ChE)",
      section: "A",
      subSection: "2",
    },
  },
  {
    groupId: "g27",
    name: "BUET - Chemical Engineering (ChE) - Section B - Subsection 1",
    description:
      "Chemical Engineering (ChE) group for BUET, Section B, Subsection 1",
    createdBy: "2",
    createdAt: "2023-01-02T10:00:00Z",
    updatedAt: "2025-10-02T12:00:00Z",
    members: [],
    admins: ["2"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    rules: [
      "Only for Chemical Engineering (ChE) students of BUET, Section B, Subsection 1",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Chemical Engineering (ChE)",
      section: "B",
      subSection: "1",
    },
  },
  {
    groupId: "g28",
    name: "BUET - Chemical Engineering (ChE) - Section B - Subsection 2",
    description:
      "Chemical Engineering (ChE) group for BUET, Section B, Subsection 2",
    createdBy: "2",
    createdAt: "2023-01-02T10:00:00Z",
    updatedAt: "2025-10-02T12:00:00Z",
    members: [],
    admins: ["2"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop",
    rules: [
      "Only for Chemical Engineering (ChE) students of BUET, Section B, Subsection 2",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Chemical Engineering (ChE)",
      section: "B",
      subSection: "2",
    },
  },
  // Electrical & Electronic Engineering (EEE)
  {
    groupId: "g29",
    name: "BUET - Electrical & Electronic Engineering (EEE) - Section A - Subsection 1",
    description:
      "Electrical & Electronic Engineering (EEE) group for BUET, Section A, Subsection 1",
    createdBy: "3",
    createdAt: "2023-01-03T10:00:00Z",
    updatedAt: "2025-10-03T12:00:00Z",
    members: [],
    admins: ["3"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop",
    rules: [
      "Only for Electrical & Electronic Engineering (EEE) students of BUET, Section A, Subsection 1",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Electrical & Electronic Engineering (EEE)",
      section: "A",
      subSection: "1",
    },
  },
  {
    groupId: "g30",
    name: "BUET - Electrical & Electronic Engineering (EEE) - Section A - Subsection 2",
    description:
      "Electrical & Electronic Engineering (EEE) group for BUET, Section A, Subsection 2",
    createdBy: "3",
    createdAt: "2023-01-03T10:00:00Z",
    updatedAt: "2025-10-03T12:00:00Z",
    members: [],
    admins: ["3"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop",
    rules: [
      "Only for Electrical & Electronic Engineering (EEE) students of BUET, Section A, Subsection 2",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Electrical & Electronic Engineering (EEE)",
      section: "A",
      subSection: "2",
    },
  },
  {
    groupId: "g31",
    name: "BUET - Electrical & Electronic Engineering (EEE) - Section B - Subsection 1",
    description:
      "Electrical & Electronic Engineering (EEE) group for BUET, Section B, Subsection 1",
    createdBy: "3",
    createdAt: "2023-01-03T10:00:00Z",
    updatedAt: "2025-10-03T12:00:00Z",
    members: [],
    admins: ["3"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop",
    rules: [
      "Only for Electrical & Electronic Engineering (EEE) students of BUET, Section B, Subsection 1",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Electrical & Electronic Engineering (EEE)",
      section: "B",
      subSection: "1",
    },
  },
  {
    groupId: "g32",
    name: "BUET - Electrical & Electronic Engineering (EEE) - Section B - Subsection 2",
    description:
      "Electrical & Electronic Engineering (EEE) group for BUET, Section B, Subsection 2",
    createdBy: "3",
    createdAt: "2023-01-03T10:00:00Z",
    updatedAt: "2025-10-03T12:00:00Z",
    members: [],
    admins: ["3"],
    privacy: "public",
    category: "university",
    memberCount: 0,
    postCount: 0,
    coverImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=400&fit=crop",
    rules: [
      "Only for Electrical & Electronic Engineering (EEE) students of BUET, Section B, Subsection 2",
    ],
    isActive: true,
    university: {
      name: "Bangladesh University of Engineering and Technology (BUET)",
      department: "Electrical & Electronic Engineering (EEE)",
      section: "B",
      subSection: "2",
    },
  },

  // Career Groups
  {
    groupId: "g9",
    name: "Career - Government Jobs",
    description: "Group for government job seekers",
    createdBy: "9",
    createdAt: "2025-02-04T10:00:00Z",
    updatedAt: "2025-07-04T12:00:00Z",
    members: ["9", "10", "11"],
    admins: ["9"],
    privacy: "public",
    category: "career",
    memberCount: 3,
    postCount: 7,
    coverImage:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    rules: ["Government job discussions only"],
    isActive: true,
  },
  {
    groupId: "g10",
    name: "Career - Freelancing",
    description: "Freelancing and remote work group",
    createdBy: "10",
    createdAt: "2025-02-05T10:00:00Z",
    updatedAt: "2025-07-05T12:00:00Z",
    members: ["10", "11", "12"],
    admins: ["10"],
    privacy: "public",
    category: "career",
    memberCount: 3,
    postCount: 6,
    coverImage:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=400&fit=crop",
    rules: ["Freelancing and remote work only"],
    isActive: true,
  },

  // HSC Groups
  {
    groupId: "g11",
    name: "HSC Science Batch 2025",
    description: "Science batch group for HSC 2025",
    createdBy: "11",
    createdAt: "2025-03-01T10:00:00Z",
    updatedAt: "2025-08-01T12:00:00Z",
    members: ["11", "12", "13"],
    admins: ["11"],
    privacy: "public",
    category: "hsc",
    memberCount: 3,
    postCount: 9,
    coverImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop",
    rules: ["Only for HSC science students"],
    isActive: true,
  },
  {
    groupId: "g12",
    name: "HSC Commerce Batch 2025",
    description: "Commerce batch group for HSC 2025",
    createdBy: "12",
    createdAt: "2025-03-02T10:00:00Z",
    updatedAt: "2025-08-02T12:00:00Z",
    members: ["12", "13", "14"],
    admins: ["12"],
    privacy: "public",
    category: "hsc",
    memberCount: 3,
    postCount: 8,
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    rules: ["Only for HSC commerce students"],
    isActive: true,
  },
  {
    groupId: "g13",
    name: "HSC Arts Batch 2025",
    description: "Arts batch group for HSC 2025",
    createdBy: "13",
    createdAt: "2025-03-03T10:00:00Z",
    updatedAt: "2025-08-03T12:00:00Z",
    members: ["13", "14", "15"],
    admins: ["13"],
    privacy: "public",
    category: "hsc",
    memberCount: 3,
    postCount: 7,
    coverImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
    rules: ["Only for HSC arts students"],
    isActive: true,
  },
  {
    groupId: "g14",
    name: "HSC English Club",
    description: "English club for HSC students",
    createdBy: "14",
    createdAt: "2025-03-04T10:00:00Z",
    updatedAt: "2025-08-04T12:00:00Z",
    members: ["14", "15", "16"],
    admins: ["14"],
    privacy: "public",
    category: "hsc",
    memberCount: 3,
    postCount: 6,
    coverImage:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=400&fit=crop",
    rules: ["English club activities"],
    isActive: true,
  },
  {
    groupId: "g15",
    name: "HSC Debate Club",
    description: "Debate club for HSC students",
    createdBy: "15",
    createdAt: "2025-03-05T10:00:00Z",
    updatedAt: "2025-08-05T12:00:00Z",
    members: ["15", "16", "17"],
    admins: ["15"],
    privacy: "public",
    category: "hsc",
    memberCount: 3,
    postCount: 5,
    coverImage:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=400&fit=crop",
    rules: ["Debate club activities"],
    isActive: true,
  },

  // Normal Groups
  {
    groupId: "g16",
    name: "Book Lovers",
    description: "Group for book lovers and readers",
    createdBy: "16",
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-09-01T12:00:00Z",
    members: ["16", "17", "18"],
    admins: ["16"],
    privacy: "public",
    category: "normal",
    memberCount: 3,
    postCount: 10,
    coverImage:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=400&fit=crop",
    rules: ["Book discussions only"],
    isActive: true,
  },
  {
    groupId: "g17",
    name: "Movie Fans",
    description: "Group for movie lovers and fans",
    createdBy: "17",
    createdAt: "2025-04-02T10:00:00Z",
    updatedAt: "2025-09-02T12:00:00Z",
    members: ["17", "18", "19"],
    admins: ["17"],
    privacy: "public",
    category: "normal",
    memberCount: 3,
    postCount: 8,
    coverImage:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
    rules: ["Movie discussions only"],
    isActive: true,
  },
  {
    groupId: "g18",
    name: "Travel Buddies",
    description: "Group for travel lovers and explorers",
    createdBy: "18",
    createdAt: "2025-04-03T10:00:00Z",
    updatedAt: "2025-09-03T12:00:00Z",
    members: ["18", "19", "20"],
    admins: ["18"],
    privacy: "public",
    category: "normal",
    memberCount: 3,
    postCount: 7,
    coverImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
    rules: ["Travel stories and tips"],
    isActive: true,
  },
  {
    groupId: "g19",
    name: "Foodies",
    description: "Group for food lovers and cooking enthusiasts",
    createdBy: "19",
    createdAt: "2025-04-04T10:00:00Z",
    updatedAt: "2025-09-04T12:00:00Z",
    members: ["19", "20", "1"],
    admins: ["19"],
    privacy: "public",
    category: "normal",
    memberCount: 3,
    postCount: 6,
    coverImage:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=400&fit=crop",
    rules: ["Food and cooking only"],
    isActive: true,
  },
  {
    groupId: "g20",
    name: "Fitness Freaks",
    description: "Group for fitness and health enthusiasts",
    createdBy: "20",
    createdAt: "2025-04-05T10:00:00Z",
    updatedAt: "2025-09-05T12:00:00Z",
    members: ["20", "1", "2"],
    admins: ["20"],
    privacy: "public",
    category: "normal",
    memberCount: 3,
    postCount: 5,
    coverImage:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
    rules: ["Fitness and health only"],
    isActive: true,
  },
];

export const getGroupById = (groupId: string): Group | undefined => {
  return groupsData.find((group) => group.groupId === groupId);
};

export const getGroupsByUserId = (userId: string): Group[] => {
  return groupsData.filter((group) => group.members.includes(userId));
};

export const getGroupsByAdmin = (userId: string): Group[] => {
  return groupsData.filter((group) => group.admins.includes(userId));
};

export const getPublicGroups = (): Group[] => {
  return groupsData.filter(
    (group) => group.privacy === "public" && group.isActive
  );
};

export const searchGroups = (query: string): Group[] => {
  const lowercaseQuery = query.toLowerCase();
  return groupsData.filter(
    (group) =>
      group.name.toLowerCase().includes(lowercaseQuery) ||
      group.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Get university groups by university name
export const getUniversityGroups = (universityName: string): Group[] => {
  return groupsData.filter(
    (group) =>
      group.category === "university" &&
      group.university?.name === universityName &&
      group.isActive
  );
};

// Get all university groups
export const getAllUniversityGroups = (): Group[] => {
  return groupsData.filter(
    (group) => group.category === "university" && group.isActive
  );
};
