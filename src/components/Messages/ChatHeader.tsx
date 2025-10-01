import React from "react";
import { FaPhone, FaVideo, FaEllipsisV } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isOnline: boolean;
}

interface ChatHeaderProps {
  user: User;
  onPhoneCall?: () => void;
  onVideoCall?: () => void;
  onMenuClick?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  user,
  onPhoneCall,
  onVideoCall,
  onMenuClick,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 p-4">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-10 w-10 rounded-full bg-gray-300"
          />
          {user.isOnline && (
            <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-500">
            {user.isOnline ? "Online" : "Last seen 2 hours ago"}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onPhoneCall}
          className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <FaPhone size={16} />
        </button>
        <button
          onClick={onVideoCall}
          className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <FaVideo size={16} />
        </button>
        <button
          onClick={onMenuClick}
          className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <FaEllipsisV size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
