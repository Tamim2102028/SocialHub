import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string;
  email: string;
  bio: string;
  avatar: string;
  username?: string;
  university?: string;
}

const initialState: ProfileState = {
  name: "Tamim Ikbal",
  email: "tamim@example.com",
  bio: "Web Developer and Open Source Enthusiast | Love to build amazing web applications.",
  avatar: "https://picsum.photos/200/300",
  username: "tamim_ikbal",
  university: "XYZ University",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile(state, action: PayloadAction<Partial<ProfileState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
