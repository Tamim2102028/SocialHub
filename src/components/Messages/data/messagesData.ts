import { usersData, getCurrentUserId } from "../../../data/userData";

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  online?: boolean;
  type: "direct" | "group" | "university" | "global"; // Message type
  category?: string; // For university groups: "departmental" | "section" | "hall"
  subCategory?: string; // For sections: "A", "B", "C" or "A1", "A2"
}

export interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  time: string;
}

// Generate direct messages from current user's friends
const currentUserId = getCurrentUserId();
const currentUser = usersData.find((u) => u.id === currentUserId);
const friendIds = currentUser?.friends || [];

export const directMessages: Conversation[] = friendIds
  .map((friendId, index) => {
    const friend = usersData.find((u) => u.id === friendId);
    if (!friend) return null;

    const sampleMessages = [
      "Hey! How are you?",
      "Thanks for your help!",
      "See you tomorrow!",
      "Let's catch up soon",
      "Got your message",
      "That sounds great!",
      "I'll be there",
    ];

    const times = ["2m", "15m", "1h", "3h", "5h", "1d", "2d"];

    return {
      id: `dm-${friendId}`,
      name: friend.name,
      avatar: friend.avatar,
      lastMessage: sampleMessages[index % sampleMessages.length],
      time: times[index % times.length],
      unread: index % 3 === 0 ? Math.floor(Math.random() * 5) + 1 : undefined,
      online: index % 2 === 0,
      type: "direct" as const,
    };
  })
  .filter((conv) => conv !== null) as Conversation[];

// Group Chats (User Created Groups)
export const groupChats: Conversation[] = [
  {
    id: "gc-1",
    name: "Study Squad",
    avatar: "https://placehold.co/150x150/3b82f6/ffffff?text=SS",
    lastMessage: "Tomorrow's quiz preparation?",
    time: "5m",
    unread: 5,
    type: "group",
  },
  {
    id: "gc-2",
    name: "Project Team A",
    avatar: "https://placehold.co/150x150/10b981/ffffff?text=PT",
    lastMessage: "Meeting at 3 PM",
    time: "30m",
    unread: 2,
    type: "group",
  },
];

// University Groups
export const universityGroups: Conversation[] = [
  {
    id: "ug-dept-1",
    name: "CSE Department",
    avatar: "https://placehold.co/150x150/8b5cf6/ffffff?text=CSE",
    lastMessage: "Seminar tomorrow at 10 AM",
    time: "10m",
    unread: 3,
    type: "university",
    category: "departmental",
  },
  {
    id: "ug-sec-a",
    name: "CSE Section A",
    avatar: "https://placehold.co/150x150/f59e0b/ffffff?text=A",
    lastMessage: "Class postponed to 2 PM",
    time: "20m",
    unread: 7,
    type: "university",
    category: "section",
    subCategory: "A",
  },
];

// Global Chats
export const globalChats: Conversation[] = [
  {
    id: "global-1",
    name: "Bangladesh Students",
    avatar: "https://placehold.co/150x150/ef4444/ffffff?text=BD",
    lastMessage: "Anyone going to the book fair?",
    time: "5m",
    unread: 15,
    type: "global",
  },
  {
    id: "global-2",
    name: "Tech Enthusiasts BD",
    avatar: "https://placehold.co/150x150/06b6d4/ffffff?text=Tech",
    lastMessage: "New programming contest announced",
    time: "20m",
    unread: 8,
    type: "global",
  },
];

// All conversations combined
export const mockConversations: Conversation[] = [
  ...directMessages,
  ...groupChats,
  ...universityGroups,
  ...globalChats,
];

export const mockMessages: Message[] = [
  {
    id: "1",
    text: "Hey! Assignment er deadline kobe?",
    sender: "other",
    time: "10:30 AM",
  },
  {
    id: "2",
    text: "Friday, 5 PM porjonto",
    sender: "me",
    time: "10:32 AM",
  },
  {
    id: "3",
    text: "Okay thanks! Tumi submit korso?",
    sender: "other",
    time: "10:33 AM",
  },
  {
    id: "4",
    text: "Hae, ajke submit korlam",
    sender: "me",
    time: "10:35 AM",
  },
  {
    id: "5",
    text: "Assignment submit korlam!",
    sender: "other",
    time: "10:45 AM",
  },
];
