import React from "react";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setSelectedConversation,
  setSearchQuery,
} from "../../store/slices/messagesSlice";
import { mockConversations } from "./dummyData/messagesData";

const ConversationList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedConversation, searchQuery } = useAppSelector(
    (state) => state.messages
  );

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex w-70 flex-col border-r border-gray-200">
      {/* Search */}
      <div className="flex h-15 items-center border-b border-gray-200 px-4">
        <div className="relative w-full">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => dispatch(setSelectedConversation(conv.id))}
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
                  <span className="ml-2 flex min-w-[20px] items-center justify-center rounded-full bg-blue-600 px-0.5 py-0.5 text-xs text-white">
                    {conv.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
