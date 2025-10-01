import React from "react";
import GroupsHeader from "../components/Groups/GroupsHeader";
import MyGroups from "../components/Groups/MyGroups";
import SuggestedGroups from "../components/Groups/SuggestedGroups";
import { useAppSelector } from "../store/hooks";

const Groups: React.FC = () => {
  /**
   * 🔄 REAL BACKEND INTEGRATION NOTES:
   *
   * In production, these would be API calls with loading states:
   * - Dispatch fetchGroupsStart() on component mount
   * - Handle loading and error states
   * - Update groups data via Redux actions
   *
   * useEffect(() => {
   *   const fetchGroups = async () => {
   *     try {
   *       dispatch(fetchGroupsStart());
   *       const response = await api.getGroups();
   *       dispatch(fetchGroupsSuccess(response.data));
   *     } catch (error) {
   *       dispatch(fetchGroupsFailure(error.message));
   *     }
   *   };
   *   fetchGroups();
   * }, [dispatch]);
   *
   * PERFORMANCE CONSIDERATIONS:
   * - Pagination for large groups lists
   * - Virtual scrolling for better performance
   * - Lazy loading for group images
   * - Caching frequently accessed groups
   * - Optimistic updates for join/leave actions
   *
   * LOADING PERFORMANCE FACTORS:
   * - Number of groups
   * - Image optimization
   * - Database queries
   * - User's network speed
   */

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
