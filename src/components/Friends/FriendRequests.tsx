import React from "react";
import { useAppSelector } from "../../store/hooks";
import { mockFriendRequests } from "./dummyData/friendsData";
import FriendCard from "../../utils/FriendCard";

const FriendRequests: React.FC = () => {
  const searchQuery = useAppSelector((state) => state.ui.friends.searchQuery);

  const filteredRequests = mockFriendRequests.filter((request) =>
    request.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAcceptRequest = (id: string) => {
    // TODO: Implement accept friend request logic
    console.log("Accepting friend request:", id);
  };

  const handleRejectRequest = (id: string) => {
    // TODO: Implement reject friend request logic
    console.log("Rejecting friend request:", id);
  };

  if (filteredRequests.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-700">
          {searchQuery
            ? "No friend requests found matching your search."
            : "No pending friend requests."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredRequests.map((request) => (
        <FriendCard
          key={request.id}
          friend={request}
          type="request"
          onAcceptRequest={handleAcceptRequest}
          onRejectRequest={handleRejectRequest}
        />
      ))}
    </div>
  );
};

export default FriendRequests;
