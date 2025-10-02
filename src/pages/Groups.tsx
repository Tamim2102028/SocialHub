import React from "react";
import GroupsHeader from "../components/Groups/GroupsHeader";
import MyGroups from "../components/Groups/MyGroups";
import SuggestedGroups from "../components/Groups/SuggestedGroups";
import { useAppSelector } from "../store/hooks";

const Groups: React.FC = () => {
  // Get groups data from Redux store
  const { myGroups, suggestedGroups, loading, error } = useAppSelector(
    (state) => state.groups
  );

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-lg text-gray-600">Loading groups...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <GroupsHeader />
      <MyGroups groups={myGroups} />
      <SuggestedGroups groups={suggestedGroups} />
    </>
  );
};

export default Groups;
