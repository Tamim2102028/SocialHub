export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isOnline: boolean;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}

export const mockConversations: Conversation[] = [
  {
    id: "1",
    user: {
      id: "1",
      name: "Sarah Wilson",
      username: "sarahw",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Wilson&background=3b82f6&color=fff&size=40",
      isOnline: true,
    },
    lastMessage: "Hey! How are you doing?",
    lastMessageTime: "2 min ago",
    unreadCount: 2,
    messages: [
      {
        id: "1",
        senderId: "1",
        content: "Hey! How are you doing?",
        timestamp: "10:30 AM",
        isRead: true,
      },
      {
        id: "2",
        senderId: "me",
        content: "Hi Sarah! I'm doing great, thanks for asking. How about you?",
        timestamp: "10:32 AM",
        isRead: true,
      },
      {
        id: "3",
        senderId: "1",
        content: "I'm good too! Working on some exciting projects lately.",
        timestamp: "10:35 AM",
        isRead: false,
      },
    ],
  },
  {
    id: "2",
    user: {
      id: "2",
      name: "Alex Chen",
      username: "alexc",
      avatar:
        "https://ui-avatars.com/api/?name=Alex+Chen&background=10b981&color=fff&size=40",
      isOnline: false,
    },
    lastMessage: "Thanks for the help with the React project!",
    lastMessageTime: "1 hour ago",
    unreadCount: 0,
    messages: [
      {
        id: "1",
        senderId: "2",
        content: "Thanks for the help with the React project!",
        timestamp: "9:15 AM",
        isRead: true,
      },
    ],
  },
  {
    id: "3",
    user: {
      id: "3",
      name: "Mike Johnson",
      username: "mikej",
      avatar:
        "https://ui-avatars.com/api/?name=Mike+Johnson&background=f59e0b&color=fff&size=40",
      isOnline: true,
    },
    lastMessage: "Are we still meeting tomorrow?",
    lastMessageTime: "3 hours ago",
    unreadCount: 1,
    messages: [
      {
        id: "1",
        senderId: "3",
        content: "Are we still meeting tomorrow?",
        timestamp: "Yesterday",
        isRead: false,
      },
    ],
  },
  {
    id: "4",
    user: {
      id: "4",
      name: "Emma Davis",
      username: "emmad",
      avatar:
        "https://ui-avatars.com/api/?name=Emma+Davis&background=8b5cf6&color=fff&size=40",
      isOnline: false,
    },
    lastMessage: "Great article! Really helpful.",
    lastMessageTime: "1 day ago",
    unreadCount: 0,
    messages: [
      {
        id: "1",
        senderId: "4",
        content: "Great article! Really helpful.",
        timestamp: "2 days ago",
        isRead: true,
      },
    ],
  },
];
