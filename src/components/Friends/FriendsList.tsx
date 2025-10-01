import React from "react";
import { useAppSelector } from "../../store/hooks";
import { mockFriends, type Friend } from "./dummyData/friendsData";
import FriendCard from "./FriendCard";

const FriendsList: React.FC = () => {
  const searchQuery = useAppSelector((state) => state.ui.friends.searchQuery);

  const filteredFriends = mockFriends.filter((friend: Friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredFriends.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">
          {searchQuery
            ? "No friends found matching your search."
            : "No friends yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredFriends.map((friend: Friend) => (
        <FriendCard key={friend.id} friend={friend} type="friend" />
      ))}
    </div>
  );
};

export default FriendsList;
