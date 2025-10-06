import React, { useState } from "react";
import {
  FaSearch,
  FaPaperPlane,
  FaEllipsisV,
  FaPhone,
  FaVideo,
} from "react-icons/fa";
import {
  mockConversations,
  mockMessages,
} from "../components/Messages/dummyData/messagesData";

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<string>("1");
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle send message logic here
      setMessageText("");
    }
  };

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedConv = mockConversations.find(
    (c) => c.id === selectedConversation
  );

  return (
    <div className="flex h-[calc(100vh-88px)] overflow-hidden rounded-lg bg-white shadow-sm">
      {/* Conversations List */}
      <div className="flex w-80 flex-col border-r border-gray-200">
        {/* Search */}
        <div className="flex h-15 items-center border-b border-gray-200 px-4">
          <div className="relative w-full">
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              className={`flex cursor-pointer items-center gap-3 border-b border-gray-100 p-4 transition-colors hover:bg-gray-50 ${
                selectedConversation === conv.id ? "bg-blue-50" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={conv.avatar}
                  alt={conv.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                {conv.online && (
                  <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                )}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{conv.name}</h3>
                  <span className="text-xs text-gray-500">{conv.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm text-gray-600">
                    {conv.lastMessage}
                  </p>
                  {conv.unread && (
                    <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        {selectedConv && (
          <div className="flex h-15 items-center justify-between border-b border-gray-200 px-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={selectedConv.avatar}
                  alt={selectedConv.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                {selectedConv.online && (
                  <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {selectedConv.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedConv.online ? "Active now" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-blue-600">
                <FaPhone className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                <FaVideo className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                <FaEllipsisV className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="space-y-4">
            {mockMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-md rounded-2xl px-4 py-2 ${
                    msg.sender === "me"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`mt-1 text-xs ${
                      msg.sender === "me" ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={!messageText.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:bg-gray-300"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
