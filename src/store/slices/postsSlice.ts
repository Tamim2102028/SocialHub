import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockPosts, type Post } from "../../components/Home/data/feedData";

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  createPostLoading: boolean;
}

const initialState: PostsState = {
  posts: mockPosts,
  loading: false,
  error: null,
  createPostLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Fetch posts
    fetchPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create post
    createPostStart: (state) => {
      state.createPostLoading = true;
      state.error = null;
    },
    createPostSuccess: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
      state.createPostLoading = false;
      state.error = null;
    },
    createPostFailure: (state, action: PayloadAction<string>) => {
      state.createPostLoading = false;
      state.error = action.payload;
    },

    // Like/Unlike post
    toggleLikePost: (state, action: PayloadAction<string>) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        if (post.isLiked) {
          post.likes -= 1;
          post.isLiked = false;
        } else {
          post.likes += 1;
          post.isLiked = true;
        }
      }
    },

    // Bookmark/Unbookmark post
    toggleBookmarkPost: (state, action: PayloadAction<string>) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.isBookmarked = !post.isBookmarked;
      }
    },

    // Update comment count
    updateCommentCount: (
      state,
      action: PayloadAction<{ postId: string; count: number }>
    ) => {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        post.comments = action.payload.count;
      }
    },

    // Update share count
    updateShareCount: (
      state,
      action: PayloadAction<{ postId: string; count: number }>
    ) => {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        post.shares = action.payload.count;
      }
    },

    // Delete post
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },

    // Clear error
    clearPostsError: (state) => {
      state.error = null;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure,
  toggleLikePost,
  toggleBookmarkPost,
  updateCommentCount,
  updateShareCount,
  deletePost,
  clearPostsError,
} = postsSlice.actions;

export default postsSlice.reducer;
