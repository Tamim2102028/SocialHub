import React from "react";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

interface MessageBubbleProps {
  message: Message;
  isOwnMessage: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isOwnMessage,
}) => {
  return (
    <div className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${
          isOwnMessage ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <p
          className={`mt-1 text-xs ${
            isOwnMessage ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {message.timestamp}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
