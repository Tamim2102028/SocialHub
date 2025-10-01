import React from "react";
import { FaSearch } from "react-icons/fa";

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
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversation?: string;
  onSelectConversation: (conversationId: string) => void;
  onSearch?: (query: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  selectedConversation,
  onSelectConversation,
  onSearch,
}) => {
  return (
    <div className="flex w-1/3 flex-col border-r border-gray-300">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <h1 className="mb-3 text-xl font-bold text-gray-900">Messages</h1>
        <div className="relative">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
            className={`cursor-pointer border-b border-gray-100 p-4 transition-colors hover:bg-gray-50 ${
              selectedConversation === conversation.id
                ? "border-r-2 border-r-blue-500 bg-blue-50"
                : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="h-12 w-12 rounded-full bg-gray-300"
                />
                {conversation.user.isOnline && (
                  <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate font-semibold text-gray-900">
                    {conversation.user.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {conversation.lastMessageTime}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm text-gray-600">
                    {conversation.lastMessage}
                  </p>
                  {conversation.unreadCount > 0 && (
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
