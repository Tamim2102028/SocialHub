// Helper to get the current user id (for demo, just returns a fixed id, but in real app, get from auth)
export const getCurrentUserId = (): string => {
  // For demo, treat id '1' as the current user
  return "1";
};
export interface UserData {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  university: string;
  friends: string[];
  pendingRequests?: string[];
}

export interface PostData {
  id: string;
  content: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  image?: string;
}

export interface PublicFileItem {
  id: string;
  name: string;
  type: "folder" | "file";
  size?: string;
  createdAt: string;
  fileType?: string;
  isPublic: boolean;
  description?: string;
  downloads?: number;
}

// All users data as an array of user objects (Mongoose style)
export const allUsersData: UserData[] = [
  {
    id: "1",
    name: "Tamim Ikbal (1/20)",
    username: "tamim_ikbal",
    avatar:
      "https://ui-avatars.com/api/?name=Tamim+Ikbal&background=3b82f6&color=fff&size=150",
    bio: "User 1 bio",
    university: "University 1",
    friends: ["2", "3", "5"],
    pendingRequests: ["1", "4"],
  },
  {
    id: "2",
    name: "Sarah Wilson (2/20)",
    username: "sarahw",
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Wilson&background=3b82f6&color=fff&size=150",
    bio: "User 2 bio",
    university: "University 2",
    friends: ["1", "3"],
    pendingRequests: ["5"],
  },
  {
    id: "3",
    name: "Alex Chen (3/20)",
    username: "alexc",
    avatar:
      "https://ui-avatars.com/api/?name=Alex+Chen&background=10b981&color=fff&size=150",
    bio: "User 3 bio",
    university: "University 3",
    friends: ["1", "2"],
    pendingRequests: [],
  },
  {
    id: "4",
    name: "Mike Johnson (4/20)",
    username: "mikej",
    avatar:
      "https://ui-avatars.com/api/?name=Mike+Johnson&background=f59e0b&color=fff&size=150",
    bio: "User 4 bio",
    university: "University 4",
    friends: ["5"],
    pendingRequests: [],
  },
  {
    id: "5",
    name: "Emma Davis (5/20)",
    username: "emmad",
    avatar:
      "https://ui-avatars.com/api/?name=Emma+Davis&background=ef4444&color=fff&size=150",
    bio: "User 5 bio",
    university: "University 5",
    friends: ["4"],
    pendingRequests: [],
  },
  {
    id: "6",
    name: "Alex Johnson (6/20)",
    username: "alexj",
    avatar:
      "https://ui-avatars.com/api/?name=Alex+Johnson&background=f39c12&color=fff&size=150",
    bio: "User 6 bio",
    university: "University 6",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "7",
    name: "Emma Wilson (7/20)",
    username: "emmaw",
    avatar:
      "https://ui-avatars.com/api/?name=Emma+Wilson&background=9b59b6&color=fff&size=150",
    bio: "User 7 bio",
    university: "University 7",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "8",
    name: "James Kim (8/20)",
    username: "jamesk",
    avatar:
      "https://ui-avatars.com/api/?name=James+Kim&background=34495e&color=fff&size=150",
    bio: "User 8 bio",
    university: "University 8",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "9",
    name: "Sarah Kim (9/20)",
    username: "sarahk",
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Kim&background=9b59b6&color=fff&size=150",
    bio: "User 9 bio",
    university: "University 9",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "10",
    name: "Rachel Kim (10/20)",
    username: "rachelk",
    avatar:
      "https://ui-avatars.com/api/?name=Rachel+Kim&background=9b59b6&color=fff&size=150",
    bio: "User 10 bio",
    university: "University 10",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "11",
    name: "John Smith (11/20)",
    username: "johns",
    avatar:
      "https://ui-avatars.com/api/?name=John+Smith&background=1abc9c&color=fff&size=150",
    bio: "User 11 bio",
    university: "University 11",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "12",
    name: "Linda Lee (12/20)",
    username: "lindal",
    avatar:
      "https://ui-avatars.com/api/?name=Linda+Lee&background=2ecc71&color=fff&size=150",
    bio: "User 12 bio",
    university: "University 12",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "13",
    name: "David Brown (13/20)",
    username: "davidb",
    avatar:
      "https://ui-avatars.com/api/?name=David+Brown&background=3498db&color=fff&size=150",
    bio: "User 13 bio",
    university: "University 13",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "14",
    name: "Sophia Miller (14/20)",
    username: "sophiam",
    avatar:
      "https://ui-avatars.com/api/?name=Sophia+Miller&background=9b59b6&color=fff&size=150",
    bio: "User 14 bio",
    university: "University 14",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "15",
    name: "William Garcia (15/20)",
    username: "williamg",
    avatar:
      "https://ui-avatars.com/api/?name=William+Garcia&background=e67e22&color=fff&size=150",
    bio: "User 15 bio",
    university: "University 15",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "16",
    name: "Olivia Martinez (16/20)",
    username: "oliviam",
    avatar:
      "https://ui-avatars.com/api/?name=Olivia+Martinez&background=e74c3c&color=fff&size=150",
    bio: "User 16 bio",
    university: "University 16",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "17",
    name: "Benjamin Lee (17/20)",
    username: "benjaminl",
    avatar:
      "https://ui-avatars.com/api/?name=Benjamin+Lee&background=34495e&color=fff&size=150",
    bio: "User 17 bio",
    university: "University 17",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "18",
    name: "Mia Clark (18/20)",
    username: "miac",
    avatar:
      "https://ui-avatars.com/api/?name=Mia+Clark&background=16a085&color=fff&size=150",
    bio: "User 18 bio",
    university: "University 18",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "19",
    name: "Elijah Walker (19/20)",
    username: "elijahw",
    avatar:
      "https://ui-avatars.com/api/?name=Elijah+Walker&background=27ae60&color=fff&size=150",
    bio: "User 19 bio",
    university: "University 19",
    friends: [],
    pendingRequests: [],
  },
  {
    id: "20",
    name: "Ava Hall (20/20)",
    username: "avah",
    avatar:
      "https://ui-avatars.com/api/?name=Ava+Hall&background=2980b9&color=fff&size=150",
    bio: "User 20 bio",
    university: "University 20",
    friends: [],
    pendingRequests: [],
  },
];

export const allUsersPosts: Record<string, PostData[]> = {
  "current-user": [
    {
      id: "cu1",
      content:
        "Just submitted my final project for Computer Science course! Feeling excited about the results 🎓💻",
      author: {
        name: "John Doe",
        username: "john_doe",
        avatar:
          "https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=150",
      },
      timestamp: "2h",
      likes: 25,
      comments: 8,
      shares: 3,
      isLiked: true,
    },
    {
      id: "cu2",
      content:
        "Study group session was amazing today! Learned so much about algorithms and data structures 📚",
      author: {
        name: "John Doe",
        username: "john_doe",
        avatar:
          "https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=150",
      },
      timestamp: "1d",
      likes: 18,
      comments: 5,
      shares: 2,
      isLiked: false,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
    },
    {
      id: "cu3",
      content:
        "Beautiful campus life at university! Love the atmosphere here 🏫✨",
      author: {
        name: "John Doe",
        username: "john_doe",
        avatar:
          "https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=150",
      },
      timestamp: "3d",
      likes: 42,
      comments: 12,
      shares: 6,
      isLiked: false,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    },
  ],
  "2": [
    {
      id: "sw1",
      content:
        "Just launched my new portfolio website! The design process was challenging but so rewarding 🚀✨",
      author: {
        name: "Sarah Wilson",
        username: "sarahw",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Wilson&background=3b82f6&color=fff&size=150",
      },
      timestamp: "4h",
      likes: 67,
      comments: 15,
      shares: 8,
      isLiked: false,
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    },
    {
      id: "sw2",
      content:
        "Coffee and code - the perfect combination for a productive Sunday morning! ☕👩‍💻",
      author: {
        name: "Sarah Wilson",
        username: "sarahw",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Wilson&background=3b82f6&color=fff&size=150",
      },
      timestamp: "2d",
      likes: 34,
      comments: 7,
      shares: 3,
      isLiked: true,
    },
    {
      id: "sw3",
      content:
        "Excited to start my internship at a top tech company! Can't wait to learn and grow 🌟",
      author: {
        name: "Sarah Wilson",
        username: "sarahw",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Wilson&background=3b82f6&color=fff&size=150",
      },
      timestamp: "5d",
      likes: 89,
      comments: 23,
      shares: 12,
      isLiked: false,
    },
  ],
  "3": [
    {
      id: "ac1",
      content:
        "Working on a fascinating ML project that analyzes social media sentiment. The results are mind-blowing! 🤖📊",
      author: {
        name: "Alex Chen",
        username: "alexc",
        avatar:
          "https://ui-avatars.com/api/?name=Alex+Chen&background=10b981&color=fff&size=150",
      },
      timestamp: "6h",
      likes: 156,
      comments: 28,
      shares: 15,
      isLiked: true,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    },
    {
      id: "ac2",
      content:
        "Beautiful sunset at the beach today! Nature never fails to amaze me 🌅 Taking a break from coding",
      author: {
        name: "Alex Chen",
        username: "alexc",
        avatar:
          "https://ui-avatars.com/api/?name=Alex+Chen&background=10b981&color=fff&size=150",
      },
      timestamp: "1d",
      likes: 78,
      comments: 12,
      shares: 5,
      isLiked: false,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    },
    {
      id: "ac3",
      content:
        "Just published a research paper on neural networks! Grateful for my amazing team 📝🧠",
      author: {
        name: "Alex Chen",
        username: "alexc",
        avatar:
          "https://ui-avatars.com/api/?name=Alex+Chen&background=10b981&color=fff&size=150",
      },
      timestamp: "4d",
      likes: 234,
      comments: 45,
      shares: 32,
      isLiked: true,
    },
  ],
  "4": [
    {
      id: "mj1",
      content:
        "Building an awesome React component library! TypeScript makes everything so much better 🛠️⚛️",
      author: {
        name: "Mike Johnson",
        username: "mikej",
        avatar:
          "https://ui-avatars.com/api/?name=Mike+Johnson&background=f59e0b&color=fff&size=150",
      },
      timestamp: "3h",
      likes: 92,
      comments: 18,
      shares: 11,
      isLiked: false,
    },
    {
      id: "mj2",
      content:
        "Open source contribution feels amazing! Just merged my first PR to a major project 🎉",
      author: {
        name: "Mike Johnson",
        username: "mikej",
        avatar:
          "https://ui-avatars.com/api/?name=Mike+Johnson&background=f59e0b&color=fff&size=150",
      },
      timestamp: "2d",
      likes: 67,
      comments: 14,
      shares: 8,
      isLiked: true,
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop",
    },
    {
      id: "mj3",
      content:
        "Tech blogging has been such a rewarding journey. Sharing knowledge with the community! ✍️💡",
      author: {
        name: "Mike Johnson",
        username: "mikej",
        avatar:
          "https://ui-avatars.com/api/?name=Mike+Johnson&background=f59e0b&color=fff&size=150",
      },
      timestamp: "6d",
      likes: 134,
      comments: 26,
      shares: 19,
      isLiked: false,
    },
  ],
  "5": [
    {
      id: "ed1",
      content:
        "Just finished designing a mobile app interface! User research really paid off 📱🎨",
      author: {
        name: "Emma Davis",
        username: "emmad",
        avatar:
          "https://ui-avatars.com/api/?name=Emma+Davis&background=ef4444&color=fff&size=150",
      },
      timestamp: "5h",
      likes: 145,
      comments: 22,
      shares: 16,
      isLiked: true,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    },
    {
      id: "ed2",
      content:
        "Working remotely from Bali today! Digital nomad life is incredible 🌴💻",
      author: {
        name: "Emma Davis",
        username: "emmad",
        avatar:
          "https://ui-avatars.com/api/?name=Emma+Davis&background=ef4444&color=fff&size=150",
      },
      timestamp: "3d",
      likes: 189,
      comments: 31,
      shares: 24,
      isLiked: false,
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
    },
    {
      id: "ed3",
      content:
        "User-centered design is everything! Just completed a usability study with amazing insights 🔍👥",
      author: {
        name: "Emma Davis",
        username: "emmad",
        avatar:
          "https://ui-avatars.com/api/?name=Emma+Davis&background=ef4444&color=fff&size=150",
      },
      timestamp: "7d",
      likes: 98,
      comments: 17,
      shares: 9,
      isLiked: true,
    },
  ],
  "28": [
    {
      id: "aj1",
      content:
        "Sharing my latest side project: A React component library built with TypeScript and Storybook! 🎨📦",
      author: {
        name: "Alex Johnson",
        username: "alexj",
        avatar:
          "https://ui-avatars.com/api/?name=Alex+Johnson&background=f39c12&color=fff&size=150",
      },
      timestamp: "2h",
      likes: 156,
      comments: 34,
      shares: 21,
      isLiked: false,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    },
    {
      id: "aj2",
      content:
        "Building scalable systems is my passion! Just implemented a microservices architecture 🏗️⚡",
      author: {
        name: "Alex Johnson",
        username: "alexj",
        avatar:
          "https://ui-avatars.com/api/?name=Alex+Johnson&background=f39c12&color=fff&size=150",
      },
      timestamp: "1d",
      likes: 89,
      comments: 16,
      shares: 11,
      isLiked: true,
    },
    {
      id: "aj3",
      content:
        "Code review sessions with the team are always enlightening! Learning never stops 🔍💡",
      author: {
        name: "Alex Johnson",
        username: "alexj",
        avatar:
          "https://ui-avatars.com/api/?name=Alex+Johnson&background=f39c12&color=fff&size=150",
      },
      timestamp: "4d",
      likes: 67,
      comments: 12,
      shares: 7,
      isLiked: false,
    },
  ],
  "32": [
    {
      id: "ew1",
      content:
        "PSA: Remember to use React.memo() wisely! Just because a component can be memoized doesn't mean it should be 🤔⚛️",
      author: {
        name: "Emma Wilson",
        username: "emmaw",
        avatar:
          "https://ui-avatars.com/api/?name=Emma+Wilson&background=9b59b6&color=fff&size=150",
      },
      timestamp: "4h",
      likes: 189,
      comments: 25,
      shares: 18,
      isLiked: true,
    },
    {
      id: "ew2",
      content:
        "Performance optimization is an art! Just reduced bundle size by 40% using code splitting 🚀📦",
      author: {
        name: "Emma Wilson",
        username: "emmaw",
        avatar:
          "https://ui-avatars.com/api/?name=Emma+Wilson&background=9b59b6&color=fff&size=150",
      },
      timestamp: "2d",
      likes: 234,
      comments: 31,
      shares: 27,
      isLiked: false,
    },
    {
      id: "ew3",
      content:
        "Clean code principles never go out of style! Writing maintainable React components ✨🧹",
      author: {
        name: "Emma Wilson",
        username: "emmaw",
        avatar:
          "https://ui-avatars.com/api/?name=Emma+Wilson&background=9b59b6&color=fff&size=150",
      },
      timestamp: "5d",
      likes: 145,
      comments: 19,
      shares: 14,
      isLiked: true,
    },
  ],
  "154": [
    {
      id: "jk1",
      content:
        "Solidity gas optimization tips thread 🧵: Use events instead of storage for data you don't need to query ⛽🔧",
      author: {
        name: "James Kim",
        username: "jamesk",
        avatar:
          "https://ui-avatars.com/api/?name=James+Kim&background=34495e&color=fff&size=150",
      },
      timestamp: "3h",
      likes: 167,
      comments: 29,
      shares: 22,
      isLiked: false,
    },
    {
      id: "jk2",
      content:
        "Web3 development is the future! Building decentralized applications that truly matter 🌐⛓️",
      author: {
        name: "James Kim",
        username: "jamesk",
        avatar:
          "https://ui-avatars.com/api/?name=James+Kim&background=34495e&color=fff&size=150",
      },
      timestamp: "1d",
      likes: 98,
      comments: 17,
      shares: 13,
      isLiked: true,
    },
    {
      id: "jk3",
      content:
        "Smart contract security is paramount! Always audit your code thoroughly 🔒🛡️",
      author: {
        name: "James Kim",
        username: "jamesk",
        avatar:
          "https://ui-avatars.com/api/?name=James+Kim&background=34495e&color=fff&size=150",
      },
      timestamp: "6d",
      likes: 156,
      comments: 23,
      shares: 18,
      isLiked: false,
    },
  ],
  "145": [
    {
      id: "sk1",
      content:
        "Email marketing isn't dead! Just hit 47% open rate and 12% CTR with a B2B SaaS client 📧📈",
      author: {
        name: "Sarah Kim",
        username: "sarahk",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Kim&background=9b59b6&color=fff&size=150",
      },
      timestamp: "2h",
      likes: 234,
      comments: 56,
      shares: 41,
      isLiked: true,
    },
    {
      id: "sk2",
      content:
        "Growth hacking strategies that actually work! Sharing my latest case study 🚀📊",
      author: {
        name: "Sarah Kim",
        username: "sarahk",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Kim&background=9b59b6&color=fff&size=150",
      },
      timestamp: "3d",
      likes: 189,
      comments: 34,
      shares: 28,
      isLiked: false,
    },
    {
      id: "sk3",
      content:
        "B2B marketing requires a different approach. It's all about building relationships and trust 🤝💼",
      author: {
        name: "Sarah Kim",
        username: "sarahk",
        avatar:
          "https://ui-avatars.com/api/?name=Sarah+Kim&background=9b59b6&color=fff&size=150",
      },
      timestamp: "5d",
      likes: 167,
      comments: 28,
      shares: 19,
      isLiked: true,
    },
  ],
  "56": [
    {
      id: "rk1",
      content:
        "UX research findings: Users make decisions in the first 3 seconds! First impressions matter 👀⏰",
      author: {
        name: "Rachel Kim",
        username: "rachelk",
        avatar:
          "https://ui-avatars.com/api/?name=Rachel+Kim&background=9b59b6&color=fff&size=150",
      },
      timestamp: "4h",
      likes: 145,
      comments: 22,
      shares: 17,
      isLiked: false,
    },
    {
      id: "rk2",
      content:
        "Design systems are a game-changer! Consistency across products improves user experience 🎨⚙️",
      author: {
        name: "Rachel Kim",
        username: "rachelk",
        avatar:
          "https://ui-avatars.com/api/?name=Rachel+Kim&background=9b59b6&color=fff&size=150",
      },
      timestamp: "2d",
      likes: 198,
      comments: 31,
      shares: 24,
      isLiked: true,
    },
    {
      id: "rk3",
      content:
        "Human-centered design is not just a buzzword. It's about truly understanding user needs 💭❤️",
      author: {
        name: "Rachel Kim",
        username: "rachelk",
        avatar:
          "https://ui-avatars.com/api/?name=Rachel+Kim&background=9b59b6&color=fff&size=150",
      },
      timestamp: "7d",
      likes: 123,
      comments: 18,
      shares: 12,
      isLiked: false,
    },
  ],
};

export const allUsersPublicFolders: Record<string, PublicFileItem[]> = {
  "current-user": [
    {
      id: "pf_cu1",
      name: "CS Final Project Resources",
      type: "folder",
      createdAt: "2025-09-20T10:00:00Z",
      isPublic: true,
      description:
        "All resources and code for my Computer Science final project",
      downloads: 45,
    },
    {
      id: "pf_cu2",
      name: "Study Notes Collection",
      type: "folder",
      createdAt: "2025-09-18T14:30:00Z",
      isPublic: true,
      description: "Comprehensive study notes for various CS courses",
      downloads: 78,
    },
  ],
  "2": [
    {
      id: "pf_sw1",
      name: "Web Development Portfolio",
      type: "folder",
      createdAt: "2025-09-21T09:15:00Z",
      isPublic: true,
      description: "Complete portfolio website source code and assets",
      downloads: 156,
    },
    {
      id: "pf_sw2",
      name: "UI/UX Design Resources",
      type: "folder",
      createdAt: "2025-09-19T16:45:00Z",
      isPublic: true,
      description: "Design templates, color palettes, and UI components",
      downloads: 89,
    },
    {
      id: "pf_sw3",
      name: "Frontend Interview Prep",
      type: "folder",
      createdAt: "2025-09-17T11:20:00Z",
      isPublic: true,
      description:
        "Questions, answers, and coding challenges for frontend interviews",
      downloads: 234,
    },
  ],
  "3": [
    {
      id: "pf_ac1",
      name: "Machine Learning Projects",
      type: "folder",
      createdAt: "2025-09-22T08:30:00Z",
      isPublic: true,
      description: "Complete ML projects with datasets and jupyter notebooks",
      downloads: 298,
    },
    {
      id: "pf_ac2",
      name: "Data Science Resources",
      type: "folder",
      createdAt: "2025-09-20T13:45:00Z",
      isPublic: true,
      description: "Python scripts, libraries, and data analysis tools",
      downloads: 167,
    },
  ],
  "4": [
    {
      id: "pf_mj1",
      name: "React Component Library",
      type: "folder",
      createdAt: "2025-09-21T15:20:00Z",
      isPublic: true,
      description: "Custom React components with TypeScript and Storybook",
      downloads: 445,
    },
    {
      id: "pf_mj2",
      name: "Open Source Contributions",
      type: "folder",
      createdAt: "2025-09-19T10:30:00Z",
      isPublic: true,
      description:
        "Code snippets and contributions to various open source projects",
      downloads: 123,
    },
  ],
  "5": [
    {
      id: "pf_ed1",
      name: "Design System Templates",
      type: "folder",
      createdAt: "2025-09-20T12:00:00Z",
      isPublic: true,
      description: "Complete design system with components and guidelines",
      downloads: 267,
    },
    {
      id: "pf_ed2",
      name: "Mobile App UI Designs",
      type: "folder",
      createdAt: "2025-09-18T09:45:00Z",
      isPublic: true,
      description: "High-fidelity mobile app designs and prototypes",
      downloads: 189,
    },
  ],
  "28": [
    {
      id: "pf_aj1",
      name: "Microservices Architecture",
      type: "folder",
      createdAt: "2025-09-21T14:15:00Z",
      isPublic: true,
      description: "Complete microservices setup with Docker and Kubernetes",
      downloads: 356,
    },
  ],
  "32": [
    {
      id: "pf_ew1",
      name: "React Performance Guide",
      type: "folder",
      createdAt: "2025-09-20T11:30:00Z",
      isPublic: true,
      description: "Performance optimization techniques and code examples",
      downloads: 278,
    },
  ],
  "154": [
    {
      id: "pf_jk1",
      name: "Solidity Smart Contracts",
      type: "folder",
      createdAt: "2025-09-19T16:00:00Z",
      isPublic: true,
      description: "Optimized smart contracts with security best practices",
      downloads: 167,
    },
  ],
  "145": [
    {
      id: "pf_sk1",
      name: "Digital Marketing Templates",
      type: "folder",
      createdAt: "2025-09-21T10:45:00Z",
      isPublic: true,
      description: "Email marketing templates and growth hacking strategies",
      downloads: 234,
    },
  ],
  "56": [
    {
      id: "pf_rk1",
      name: "UX Research Methods",
      type: "folder",
      createdAt: "2025-09-18T15:30:00Z",
      isPublic: true,
      description: "User research templates, surveys, and analysis tools",
      downloads: 145,
    },
  ],
};

// Helper function to get user data by ID
export const getUserById = (userId: string): UserData | null => {
  return allUsersData.find((user) => user.id === userId) || null;
};

// Helper function to get posts by user ID
export const getPostsByUserId = (userId: string): PostData[] => {
  return allUsersPosts[userId] || [];
};

// Helper function to get public folders by user ID
export const getPublicFoldersByUserId = (userId: string): PublicFileItem[] => {
  return allUsersPublicFolders[userId] || [];
};
