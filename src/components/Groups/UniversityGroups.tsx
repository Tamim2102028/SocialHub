import React from "react";
import GroupCard from "./GroupCard";
import { FaUniversity } from "react-icons/fa";
import type { Group } from "../../data/groupsData";

interface UniversityGroupsProps {
  groups: Group[];
  universityName: string;
}

const UniversityGroups: React.FC<UniversityGroupsProps> = ({
  groups,
  universityName,
}) => {
  if (groups.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-600">
          <FaUniversity className="text-xl text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {universityName} Groups
          </h2>
          <p className="text-sm text-gray-600">
            Connect with your university community and join study, club, and
            interest groups
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <GroupCard key={group.groupId} group={group} showJoinButton={true} />
        ))}
      </div>
    </div>
  );
};

export default UniversityGroups;
