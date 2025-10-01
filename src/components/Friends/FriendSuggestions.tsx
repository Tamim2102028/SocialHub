import React from "react";
import { useAppSelector } from "../../store/hooks";
import { mockFriendSuggestions, type Friend } from "./dummyData/friendsData";
import FriendCard from "./FriendCard";

const FriendSuggestions: React.FC = () => {
  const searchQuery = useAppSelector((state) => state.ui.friends.searchQuery);

  const filteredSuggestions = mockFriendSuggestions.filter(
    (suggestion: Friend) =>
      suggestion.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddFriend = (id: string) => {
    // TODO: Implement add friend logic
    console.log("Adding friend:", id);
  };

  if (filteredSuggestions.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">
          {searchQuery
            ? "No friend suggestions found matching your search."
            : "No friend suggestions available."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredSuggestions.map((suggestion: Friend) => (
        <FriendCard
          key={suggestion.id}
          friend={suggestion}
          type="suggestion"
          onAddFriend={handleAddFriend}
        />
      ))}
    </div>
  );
};

export default FriendSuggestions;
