import type { SearchPerson } from "./dummyData/searchData";
import React from "react";
import { mockSearchResults } from "./dummyData/searchData";
import FriendCard from "../../utils/FriendCard";
import type { Friend } from "../Friends/dummyData/friendsData";

interface PeopleResultsProps {
  isVisible: boolean;
}

const PeopleResults: React.FC<PeopleResultsProps> = ({ isVisible }) => {
  if (!isVisible) return null;



  // Map search people to FriendCard's Friend type
  const universities = [
    "New York University",
    "Stanford University",
    "University of Texas",
    "University of Washington",
    "Harvard University",
    "MIT",
    "Oxford University",
    "Cambridge University"
  ];
  const roles: Friend["role"][] = ["student", "teacher"];
  const mapPersonToFriend = (person: SearchPerson, idx: number): Friend => ({
    id: String(idx),
    name: person.name,
    username: person.username.replace(/^@/, ""),
    avatar: typeof person.avatar === "string" && person.avatar.startsWith("http")
      ? person.avatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=3b82f6&color=fff&size=60`,
    mutualFriends: Math.floor(Math.random() * 20) + 1,
    university: universities[idx % universities.length],
    role: roles[idx % roles.length],
  });

  // Mock logic to assign relation type
  const getRelationType = (idx: number): "friend" | "request" | "suggestion" | "search" => {
    if (idx % 4 === 0) return "friend"; // every 4th is friend
    if (idx % 4 === 1) return "request"; // every 4th+1 is request
    if (idx % 4 === 2) return "suggestion"; // every 4th+2 is suggestion
    return "search"; // rest are just search
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-900">People</h2>
      <div className="space-y-4">
        {mockSearchResults.people.map((person, idx) => (
          <FriendCard
            key={idx}
            friend={mapPersonToFriend(person, idx)}
            type={getRelationType(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleResults;
