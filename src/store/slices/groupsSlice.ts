import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  mockMyGroups,
  mockSuggestedGroups,
  type Group,
} from "../../components/Groups/dummyData/groupsData";

interface GroupsState {
  myGroups: Group[];
  suggestedGroups: Group[];
  loading: boolean;
  error: string | null;
  joinedGroups: number[]; // Array of group IDs user has joined
}

const initialState: GroupsState = {
  myGroups: mockMyGroups,
  suggestedGroups: mockSuggestedGroups,
  loading: false,
  error: null,
  joinedGroups: mockMyGroups.map((group) => group.id), // Initially joined groups
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    // Fetch groups
    fetchGroupsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchGroupsSuccess: (
      state,
      action: PayloadAction<{
        myGroups: Group[];
        suggestedGroups: Group[];
      }>
    ) => {
      state.myGroups = action.payload.myGroups;
      state.suggestedGroups = action.payload.suggestedGroups;
      state.loading = false;
      state.error = null;
    },
    fetchGroupsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Join group
    joinGroup: (state, action: PayloadAction<number>) => {
      const groupId = action.payload;

      // Add to joined groups if not already joined
      if (!state.joinedGroups.includes(groupId)) {
        state.joinedGroups.push(groupId);
      }

      // Move from suggested to my groups
      const groupIndex = state.suggestedGroups.findIndex(
        (g) => g.id === groupId
      );
      if (groupIndex !== -1) {
        const group = state.suggestedGroups[groupIndex];
        state.suggestedGroups.splice(groupIndex, 1);
        state.myGroups.push({
          ...group,
          members: group.members + 1,
        });
      }
    },

    // Leave group
    leaveGroup: (state, action: PayloadAction<number>) => {
      const groupId = action.payload;

      // Remove from joined groups
      state.joinedGroups = state.joinedGroups.filter((id) => id !== groupId);

      // Move from my groups to suggested
      const groupIndex = state.myGroups.findIndex((g) => g.id === groupId);
      if (groupIndex !== -1) {
        const group = state.myGroups[groupIndex];
        state.myGroups.splice(groupIndex, 1);
        state.suggestedGroups.push({
          ...group,
          members: Math.max(0, group.members - 1),
        });
      }
    },

    // Create new group
    createGroup: (state, action: PayloadAction<Group>) => {
      state.myGroups.unshift(action.payload);
      state.joinedGroups.push(action.payload.id);
    },

    // Update group info
    updateGroup: (
      state,
      action: PayloadAction<{
        groupId: number;
        updates: Partial<Group>;
      }>
    ) => {
      const { groupId, updates } = action.payload;

      // Update in my groups
      const myGroupIndex = state.myGroups.findIndex((g) => g.id === groupId);
      if (myGroupIndex !== -1) {
        state.myGroups[myGroupIndex] = {
          ...state.myGroups[myGroupIndex],
          ...updates,
        };
      }

      // Update in suggested groups
      const suggestedGroupIndex = state.suggestedGroups.findIndex(
        (g) => g.id === groupId
      );
      if (suggestedGroupIndex !== -1) {
        state.suggestedGroups[suggestedGroupIndex] = {
          ...state.suggestedGroups[suggestedGroupIndex],
          ...updates,
        };
      }
    },

    // Update member count
    updateMemberCount: (
      state,
      action: PayloadAction<{
        groupId: number;
        count: number;
      }>
    ) => {
      const { groupId, count } = action.payload;

      // Update in my groups
      const myGroup = state.myGroups.find((g) => g.id === groupId);
      if (myGroup) {
        myGroup.members = count;
      }

      // Update in suggested groups
      const suggestedGroup = state.suggestedGroups.find(
        (g) => g.id === groupId
      );
      if (suggestedGroup) {
        suggestedGroup.members = count;
      }
    },

    // Clear error
    clearGroupsError: (state) => {
      state.error = null;
    },
  },
});

export const {
  fetchGroupsStart,
  fetchGroupsSuccess,
  fetchGroupsFailure,
  joinGroup,
  leaveGroup,
  createGroup,
  updateGroup,
  updateMemberCount,
  clearGroupsError,
} = groupsSlice.actions;

export default groupsSlice.reducer;
