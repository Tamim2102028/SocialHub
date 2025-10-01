import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaLock, FaGlobe } from "react-icons/fa";

interface Group {
  id: number;
  name: string;
  members: number;
  isPrivate: boolean;
  coverImage: string;
  lastActivity?: string;
  category?: string;
}

interface GroupCardProps {
  group: Group;
  showJoinButton?: boolean;
}

const GroupCard: React.FC<GroupCardProps> = ({
  group,
  showJoinButton = false,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/groups/${group.id}`);
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking join button
    // Handle join logic here
    console.log("Joining group:", group.name);
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={group.coverImage}
          alt={group.name}
          className="h-40 w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          {group.isPrivate ? (
            <div className="bg-opacity-75 flex items-center gap-1 rounded-full bg-gray-800 px-2 py-1 text-xs text-white">
              <FaLock size={10} />
              Private
            </div>
          ) : group.category ? (
            <div className="bg-opacity-75 rounded-full bg-blue-600 px-2 py-1 text-xs text-white">
              {group.category}
            </div>
          ) : (
            <div className="bg-opacity-75 flex items-center gap-1 rounded-full bg-green-600 px-2 py-1 text-xs text-white">
              <FaGlobe size={10} />
              Public
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {group.name}
        </h3>
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
          <FaUsers size={14} />
          <span>{group.members.toLocaleString()} members</span>
        </div>
        {group.lastActivity && (
          <p className="text-sm text-gray-500">
            Last activity: {group.lastActivity}
          </p>
        )}
        {showJoinButton && (
          <button
            onClick={handleJoinClick}
            className="mt-3 w-full rounded-lg bg-blue-100 px-4 py-2 text-blue-700 transition-colors hover:bg-blue-200"
          >
            Join Group
          </button>
        )}
      </div>
    </div>
  );
};

export default GroupCard;
