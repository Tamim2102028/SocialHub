import React, { useMemo } from "react";
import GroupsHeader from "../components/Groups/GroupsHeader";
import MyGroups from "../components/Groups/MyGroups";
import SuggestedGroups from "../components/Groups/SuggestedGroups";
import CareerGroups from "../components/Groups/CareerGroups";
import UniversityGroups from "../components/Groups/UniversityGroups";
import { getUniversityGroups, groupsData } from "../data/groupsData";
import { getCurrentUserId, usersData } from "../data/userData";

const Groups: React.FC = () => {
  // Get current user
  const currentUserId = getCurrentUserId();
  const currentUser = usersData.find((u) => u.id === currentUserId);
  const userUniversityName = currentUser?.university?.name || "";

  // Compute myGroups, suggestedGroups, careerGroups for the current user
  const myGroups = useMemo(() => {
    if (!currentUser) return [];
    return groupsData.filter((g) =>
      currentUser.joinedGroups.includes(g.groupId)
    );
  }, [currentUser]);

  const suggestedGroups = useMemo(() => {
    if (!currentUser) return [];
    return groupsData.filter(
      (g) => !currentUser.joinedGroups.includes(g.groupId) && g.isActive
    );
  }, [currentUser]);

  const careerGroups = useMemo(() => {
    return groupsData.filter((g) => g.category === "career" && g.isActive);
  }, []);

  // Get university groups for current user's university
  const universityGroups = useMemo(() => {
    if (!userUniversityName) return [];
    return getUniversityGroups(userUniversityName);
  }, [userUniversityName]);

  return (
    <>
      <GroupsHeader />
      <MyGroups groups={myGroups} />
      {universityGroups.length > 0 && (
        <UniversityGroups
          groups={universityGroups}
          universityName={userUniversityName}
        />
      )}
      <CareerGroups groups={careerGroups} />
      <SuggestedGroups groups={suggestedGroups} />
    </>
  );
};

export default Groups;
