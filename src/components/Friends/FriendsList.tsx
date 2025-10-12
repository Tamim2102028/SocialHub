import React from "react";
import { useAppSelector } from "../../store/hooks";
import { mockFriends, type Friend } from "./data/friendsData";
import FriendCard from "./FriendCard";

const FriendsList: React.FC = () => {
  const searchQuery = useAppSelector((state) => state.ui.friends.searchQuery);

  const filteredFriends = mockFriends.filter((friend: Friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredFriends.length === 0) {
    return (
      <div>
        <p className="py-8 text-center text-gray-500">
          {searchQuery
            ? "No friends found matching your search."
            : "No friends yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredFriends.map((friend: Friend) => (
        <FriendCard key={friend.userId} friend={friend} type="friend" />
      ))}
    </div>
  );
};

export default FriendsList;
