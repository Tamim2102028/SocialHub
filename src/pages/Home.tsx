import React from "react";
import { useAppSelector } from "../store/hooks";
import PostCard from "../utils/PostCard";
import CreatePost from "../components/Home/CreatePost";
import LoadingSkeleton from "../components/Home/LoadingSkeleton";

const Home: React.FC = () => {
  const { posts, loading } = useAppSelector((state) => state.posts);

  if (loading) {
    return (
      <>
        {/* Create Post Section */}
        <CreatePost />

        {/* Loading skeleton */}
        <LoadingSkeleton />
      </>
    );
  }

  return (
    <>
      {/* Create Post Section */}
      <CreatePost />

      {/* Feed Header */}
      <h2 className="text-xl font-semibold text-gray-900">Latest Posts</h2>

      {/* Posts List */}
      <div className="space-y-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center">
        <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50">
          Load more posts
        </button>
      </div>
    </>
  );
};

export default Home;
