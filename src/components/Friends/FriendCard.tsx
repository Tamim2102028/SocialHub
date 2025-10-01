import React from "react";
import { FaUserPlus, FaComment, FaCheck, FaTimes } from "react-icons/fa";
import type { Friend, FriendRequest } from "./dummyData/friendsData";

interface FriendCardProps {
  friend: Friend | FriendRequest;
  type: "friend" | "request" | "suggestion";
  onAcceptRequest?: (id: string) => void;
  onRejectRequest?: (id: string) => void;
  onAddFriend?: (id: string) => void;
}

const FriendCard: React.FC<FriendCardProps> = ({
  friend,
  type,
  onAcceptRequest,
  onRejectRequest,
  onAddFriend,
}) => {
  const isFriend = (friend: Friend | FriendRequest): friend is Friend => {
    return "isOnline" in friend;
  };

  const renderActions = () => {
    if (type === "friend") {
      return (
        <button className="flex items-center rounded-lg bg-blue-100 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-200">
          <FaComment className="mr-2" />
          Message
        </button>
      );
    }

    if (type === "request") {
      return (
        <div className="flex space-x-2">
          <button
            onClick={() => onAcceptRequest?.(friend.id)}
            className="flex items-center rounded-lg bg-green-100 px-3 py-2 text-green-600 transition-colors hover:bg-green-200"
          >
            <FaCheck className="mr-1" />
            Accept
          </button>
          <button
            onClick={() => onRejectRequest?.(friend.id)}
            className="flex items-center rounded-lg bg-red-100 px-3 py-2 text-red-600 transition-colors hover:bg-red-200"
          >
            <FaTimes className="mr-1" />
            Decline
          </button>
        </div>
      );
    }

    if (type === "suggestion") {
      return (
        <button
          onClick={() => onAddFriend?.(friend.id)}
          className="flex items-center rounded-lg bg-blue-100 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-200"
        >
          <FaUserPlus className="mr-2" />
          Add Friend
        </button>
      );
    }

    return null;
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src={friend.avatar}
          alt={friend.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{friend.name}</h3>
          {friend.mutualFriends && (
            <p className="text-sm text-gray-500">
              {friend.mutualFriends} mutual friends
            </p>
          )}
          {isFriend(friend) && friend.university && (
            <p className="text-sm text-gray-500">
              {friend.university}
              {friend.role
                ? ` - ${friend.role === "student" ? "Student" : "Teacher"}`
                : ""}
            </p>
          )}
        </div>
        {renderActions()}
      </div>
    </div>
  );
};

export default FriendCard;
