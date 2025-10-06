export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  online?: boolean;
}

export interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  time: string;
}

export const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Rahul Ahmed",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "Assignment submit korlam!",
    time: "2m",
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "Tanvir Khan",
    avatar: "https://i.pravatar.cc/150?img=13",
    lastMessage: "Class kobe hobe?",
    time: "15m",
    online: true,
  },
  {
    id: "3",
    name: "Sabbir Hossain",
    avatar: "https://i.pravatar.cc/150?img=33",
    lastMessage: "Thanks for your help!",
    time: "1h",
  },
  {
    id: "4",
    name: "Nasir Uddin",
    avatar: "https://i.pravatar.cc/150?img=17",
    lastMessage: "Notes ta share korba?",
    time: "3h",
  },
  {
    id: "5",
    name: "Farhan Islam",
    avatar: "https://i.pravatar.cc/150?img=15",
    lastMessage: "Okay, see you tomorrow",
    time: "1d",
  },
  {
    id: "6",
    name: "Mehedi Hasan",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Exam er preparation kemon cholse?",
    time: "2d",
    unread: 1,
  },
  {
    id: "7",
    name: "Arif Rahman",
    avatar: "https://i.pravatar.cc/150?img=14",
    lastMessage: "Group study korba?",
    time: "3d",
    online: true,
  },
  {
    id: "8",
    name: "Imran Khan",
    avatar: "https://i.pravatar.cc/150?img=20",
    lastMessage: "Lab report complete korso?",
    time: "4d",
  },
  {
    id: "9",
    name: "Shakil Islam",
    avatar: "https://i.pravatar.cc/150?img=18",
    lastMessage: "Presentation slides ready?",
    time: "5d",
    unread: 3,
  },
  {
    id: "10",
    name: "Karim Uddin",
    avatar: "https://i.pravatar.cc/150?img=22",
    lastMessage: "Tiffin e dekha hobe",
    time: "1w",
  },
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
