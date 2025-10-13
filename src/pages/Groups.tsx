import React, { useMemo, useState } from "react";
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

  const [activeTab, setActiveTab] = useState("my");

  const tabs = [
    { key: "my", label: "My Groups" },
    { key: "university", label: "University Groups" },
    { key: "career", label: "Career Groups" },
    { key: "suggested", label: "Suggested Groups" },
  ];

  return (
    <>
      <GroupsHeader />
      {/* Tabs */}
      <div className="flex gap-2.5 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`border-b-2 px-4 py-2 font-semibold transition-colors duration-150 ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "my" && <MyGroups groups={myGroups} />}
      {activeTab === "university" && (
        <UniversityGroups
          groups={universityGroups}
          universityName={userUniversityName}
        />
      )}
      {activeTab === "career" && <CareerGroups groups={careerGroups} />}
      {activeTab === "suggested" && (
        <SuggestedGroups groups={suggestedGroups} />
      )}
    </>
  );
};

export default Groups;
