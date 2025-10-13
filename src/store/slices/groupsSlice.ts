import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface GroupsState {
  loading: boolean;
  error: string | null;
}

const initialState: GroupsState = {
  loading: false,
  error: null,
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    // Only loading and error for now
    fetchGroupsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchGroupsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearGroupsError: (state) => {
      state.error = null;
    },
  },
});

export const { fetchGroupsStart, fetchGroupsFailure, clearGroupsError } =
  groupsSlice.actions;
export default groupsSlice.reducer;
