import React from "react";
import { useAppSelector } from "../../store/hooks";
import { allUsersData, getCurrentUserId } from "../../data/publicFilesData";
import FriendCard from "./FriendCard";

const FriendsList: React.FC = () => {
  const searchQuery = useAppSelector((state) => state.ui.friends.searchQuery);

  // Use getCurrentUserId() for current user.
  const currentUser = allUsersData.find((u) => u.id === getCurrentUserId());
  const friends =
    currentUser?.friends
      ?.map((id) => allUsersData.find((u) => u.id === id))
      .filter((f): f is import("../../data/publicFilesData").UserData =>
        Boolean(f)
      ) || [];
  const filteredFriends = friends.filter((friend) =>
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
      {filteredFriends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} type="friend" />
      ))}
    </div>
  );
};

export default FriendsList;
