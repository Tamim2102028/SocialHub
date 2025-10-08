import React from "react";
import ProfilePostCard from "./ProfilePostCard";
import type { PostData } from "./data/allUsersData";

interface ProfilePostsProps {
  posts: PostData[];
  isOwnProfile: boolean;
}

const ProfilePosts: React.FC<ProfilePostsProps> = ({ posts, isOwnProfile }) => {
  return (
    <>
      {/* Posts Header */}
      <div className="mb-5 flex items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          {isOwnProfile ? "Your Posts" : "Posts"}
        </h2>
      </div>

      {/* Posts List */}
      {posts.length > 0 ? (
        <div className="space-y-4">
          {posts.map((post) => (
            <ProfilePostCard
              key={post.id}
              post={{
                id: post.id,
                content: post.content,
                author: post.author,
                timestamp: post.timestamp,
                likes: post.likes,
                comments: post.comments,
                shares: post.shares,
                isLiked: post.isLiked,
                image: post.image,
              }}
              isOwnProfile={isOwnProfile}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center shadow">
          <p className="text-gray-500">
            {isOwnProfile
              ? "You haven't posted anything yet."
              : "No posts to show."}
          </p>
        </div>
      )}
    </>
  );
};

export default ProfilePosts;
