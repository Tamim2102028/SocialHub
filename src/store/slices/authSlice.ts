import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getUserById } from "../../data/userData";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bio?: string;
  location?: string;
  website?: string;
  coverPhoto?: string;
  university?: string; // University name
  universityId?: string; // University ID for tournament matching
  followers: number;
  following: number;
  postsCount: number;
  joinedDate: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Get current user data from userData.ts
const getCurrentUser = (): User | null => {
  const userData = getUserById("1"); // Current user ID
  if (!userData) return null;
  
  return {
    id: userData.id,
    name: userData.name,
    username: userData.username,
    email: "demo@socialhub.com", // Since email is not in userData.ts
    avatar: userData.avatar,
    bio: userData.bio,
    university: typeof userData.university === 'string' 
      ? userData.university 
      : userData.university.name,
    followers: 150, // These could be calculated from friends array
    following: userData.friends.length,
    postsCount: 25, // This could be calculated from posts
    joinedDate: "2024-01-01",
  };
};

const initialState: AuthState = {
  isAuthenticated: true, // Set to true for development
  user: getCurrentUser(),
  token: "demo-token",
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    updateFollowersCount: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.followers = action.payload;
      }
    },
    updateFollowingCount: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.following = action.payload;
      }
    },
    updatePostsCount: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.postsCount = action.payload;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  login,
  loginFailure,
  logout,
  updateProfile,
  updateFollowersCount,
  updateFollowingCount,
  updatePostsCount,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;
