// Search Data Types
export interface SearchPerson {
  name: string;
  username: string;
  followers: string;
  avatar: string;
}

export interface SearchPost {
  user: string;
  content: string;
  likes: number;
  time: string;
}

export interface SearchHashtag {
  tag: string;
  posts: string;
}

export interface SearchResults {
  people: SearchPerson[];
  posts: SearchPost[];
  hashtags: SearchHashtag[];
}

// Mock Search Data
export const mockSearchResults: SearchResults = {
  people: [
    {
      name: "Alex Johnson",
      username: "@alex_j",
      followers: "2.3K",
      avatar: "👤",
    },
    {
      name: "Sarah Wilson",
      username: "@sarah_w",
      followers: "1.8K",
      avatar: "👤",
    },
    {
      name: "Mike Chen",
      username: "@mike_c",
      followers: "950",
      avatar: "👤",
    },
  ],
  posts: [
    {
      user: "Emma Davis",
      content: "Beautiful sunset at the beach 🌅",
      likes: 45,
      time: "2h",
    },
    {
      user: "John Smith",
      content: "Just finished my new project! 🚀",
      likes: 32,
      time: "4h",
    },
    {
      user: "Lisa Park",
      content: "Coffee and coding session ☕💻",
      likes: 28,
      time: "6h",
    },
  ],
  hashtags: [
    { tag: "#photography", posts: "12.3K posts" },
    { tag: "#travel", posts: "8.7K posts" },
    { tag: "#coding", posts: "5.2K posts" },
    { tag: "#food", posts: "4.1K posts" },
  ],
};
