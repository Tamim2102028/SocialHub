import React from "react";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

interface MessageInputProps {
  newMessage: string;
  onNewMessageChange: (message: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
  onEmojiClick?: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  newMessage,
  onNewMessageChange,
  onSendMessage,
  onEmojiClick,
}) => {
  return (
    <div className="border-t border-gray-200 p-4">
      <form onSubmit={onSendMessage} className="flex items-center space-x-3">
        <button
          type="button"
          onClick={onEmojiClick}
          className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <FaSmile size={20} />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => onNewMessageChange(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!newMessage.trim()}
          className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaPaperPlane size={16} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
