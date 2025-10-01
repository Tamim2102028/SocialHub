import React from "react";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isOnline: boolean;
}

interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}

interface ChatAreaProps {
  conversation: Conversation | null;
  newMessage: string;
  onNewMessageChange: (message: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
  onPhoneCall?: () => void;
  onVideoCall?: () => void;
  onMenuClick?: () => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  conversation,
  newMessage,
  onNewMessageChange,
  onSendMessage,
  onPhoneCall,
  onVideoCall,
  onMenuClick,
}) => {
  if (!conversation) {
    return (
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="mb-4 text-6xl text-gray-300">💬</div>
            <p className="text-gray-500">
              Select a conversation to start messaging
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <ChatHeader
        user={conversation.user}
        onPhoneCall={onPhoneCall}
        onVideoCall={onVideoCall}
        onMenuClick={onMenuClick}
      />

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {conversation.messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwnMessage={message.senderId === "me"}
          />
        ))}
      </div>

      <MessageInput
        newMessage={newMessage}
        onNewMessageChange={onNewMessageChange}
        onSendMessage={onSendMessage}
      />
    </div>
  );
};

export default ChatArea;
