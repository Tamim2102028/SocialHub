import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setSelectedConversation } from "../store/slices/uiSlice";
import {
  FaFire,
  FaHashtag,
  FaUsers,
  FaCalendarAlt,
  FaBirthdayCake,
  FaGlobe,
  FaChevronRight,
  FaSearch,
  FaComments,
  FaEllipsisH,
} from "react-icons/fa";
import {
  mockTrendingTopics,
  mockSuggestedConnections,
  mockUpcomingEvents,
} from "./dummyData/rightSidebarData";
import { mockConversations } from "../components/Messages/dummyData/messagesData";

const SidebarRight: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const selectedConversation = useAppSelector(
    (state) => state.ui.messages.selectedConversation
  );
  const isMessagesPage = location.pathname === "/messages";

  const trendingTopics = mockTrendingTopics;
  const suggestedConnections = mockSuggestedConnections;
  const upcomingEvents = mockUpcomingEvents;

  const quickLinks = [
    { name: "Developer Tools", icon: FaGlobe },
    { name: "Community Guidelines", icon: FaUsers },
    { name: "Help Center", icon: FaGlobe },
    { name: "Privacy Policy", icon: FaGlobe },
  ];

  const handleSelectConversation = (conversationId: string) => {
    dispatch(setSelectedConversation(conversationId));
  };

  const formatTime = (timeStr: string) => {
    // Simple time formatting
    if (timeStr.includes("min")) return timeStr.replace(" ago", "");
    if (timeStr.includes("hour")) return timeStr.replace(" ago", "");
    if (timeStr.includes("day")) return timeStr.replace(" ago", "");
    return timeStr;
  };

  const filteredConversations = mockConversations.filter((conv) =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show messenger-style user list for Messages page
  if (isMessagesPage) {
    return (
      <div className="flex h-full flex-col bg-white">
        {/* Header */}
        <div className="border-b border-gray-200 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">Chats</h1>
            <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
              <FaEllipsisH className="h-4 w-4" />
            </button>
          </div>

          {/* Search Box */}
          <div className="relative">
            <FaSearch className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-gray-100 py-2 pr-4 pl-10 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conv) => (
            <div
              key={conv.id}
              className={`cursor-pointer border-b border-gray-100 p-3 transition-all hover:bg-gray-50 ${
                selectedConversation === conv.id
                  ? "border-l-4 border-l-blue-500 bg-blue-50"
                  : ""
              }`}
              onClick={() => handleSelectConversation(conv.id)}
            >
              <div className="flex items-center space-x-3">
                {/* Avatar with online status */}
                <div className="relative flex-shrink-0">
                  <img
                    src={conv.user.avatar}
                    alt={conv.user.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  {conv.user.isOnline && (
                    <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
                  )}
                </div>

                {/* Message info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="truncate text-sm font-semibold text-gray-900">
                      {conv.user.name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {formatTime(conv.lastMessageTime)}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center justify-between">
                    <p className="max-w-[180px] truncate text-sm text-gray-600">
                      {conv.lastMessage}
                    </p>
                    {conv.unreadCount > 0 && (
                      <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
                        {conv.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="space-y-2">
            <button className="flex w-full items-center space-x-3 rounded-lg p-2 text-left text-sm hover:bg-gray-100">
              <FaComments className="h-4 w-4 text-blue-500" />
              <span className="text-gray-700">New Group Chat</span>
            </button>
            <button className="flex w-full items-center space-x-3 rounded-lg p-2 text-left text-sm hover:bg-gray-100">
              <FaUsers className="h-4 w-4 text-green-500" />
              <span className="text-gray-700">Find Friends</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full space-y-6 overflow-y-auto p-4">
      {/* Trending Topics */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-100 p-4">
          <div className="flex items-center">
            <FaFire className="mr-2 h-5 w-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-900">
              Trending Now
            </h2>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {trendingTopics.map((topic, index) => (
            <div
              key={index}
              className="cursor-pointer p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <FaHashtag className="mr-1 h-3 w-3 text-blue-500" />
                    <span className="font-medium text-gray-900">
                      {topic.hashtag}
                    </span>
                    {topic.trending && (
                      <FaFire className="ml-2 h-3 w-3 text-orange-500" />
                    )}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{topic.posts}</p>
                </div>
                <FaChevronRight className="h-3 w-3 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 p-3">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Show more trends
          </button>
        </div>
      </div>

      {/* Suggested Connections */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-100 p-4">
          <div className="flex items-center">
            <FaUsers className="mr-2 h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-900">
              Who to follow
            </h2>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {suggestedConnections.map((person, index) => (
            <div key={index} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="h-10 w-10 rounded-full bg-gray-300"
                  />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        {person.name}
                      </p>
                      {person.isVerified && (
                        <div className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
                          <span className="text-xs text-white">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">@{person.username}</p>
                    <p className="text-xs text-gray-400">
                      {person.mutualConnections} mutual connections
                    </p>
                  </div>
                </div>
                <button className="rounded-full bg-blue-600 px-4 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 p-3">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Show more suggestions
          </button>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-100 p-4">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 h-5 w-5 text-green-500" />
            <h2 className="text-lg font-semibold text-gray-900">
              Upcoming Events
            </h2>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="cursor-pointer p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-12 w-12 rounded-lg bg-gray-300 object-cover"
                />
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {event.title}
                  </p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                  <p className="text-xs text-gray-400">
                    {event.attendees} attendees
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 p-3">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Discover more events
          </button>
        </div>
      </div>

      {/* Birthdays */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-100 p-4">
          <div className="flex items-center">
            <FaBirthdayCake className="mr-2 h-5 w-5 text-pink-500" />
            <h2 className="text-lg font-semibold text-gray-900">Birthdays</h2>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <img
              src="https://ui-avatars.com/api/?name=Alex+Johnson&background=3b82f6&color=fff&size=32"
              alt="Birthday person"
              className="h-8 w-8 rounded-full bg-gray-300"
            />
            <div className="ml-3">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Alex Thompson</span> and{" "}
                <span className="font-medium">2 others</span> have birthdays
                today
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-100 p-4">
          <h2 className="text-lg font-semibold text-gray-900">Quick Links</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center px-4 py-3 transition-colors hover:bg-gray-50"
            >
              <link.icon className="mr-3 h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">{link.name}</span>
              <FaChevronRight className="ml-auto h-3 w-3 text-gray-400" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <div className="space-y-2 text-xs text-gray-500">
          <p>© 2025 Bidda. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
            <a href="#" className="hover:text-gray-700">
              Cookies
            </a>
            <a href="#" className="hover:text-gray-700">
              Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
