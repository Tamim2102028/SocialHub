import React, { useState } from "react";
import {
  FaHeart,
  FaShare,
  FaEllipsisH,
  FaRegHeart,
  FaRegComment,
} from "react-icons/fa";
import type { PostData } from "./dummyData/allUsersData";

interface ProfilePostsProps {
  posts: PostData[];
  isOwnProfile: boolean;
}

const ProfilePosts: React.FC<ProfilePostsProps> = ({ posts, isOwnProfile }) => {
  const [commentBoxStates, setCommentBoxStates] = useState<
    Record<string, boolean>
  >({});

  const handleLike = (postId: string) => {
    console.log("Liking post:", postId);
  };

  const toggleCommentBox = (postId: string) => {
    setCommentBoxStates((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleShare = (postId: string) => {
    console.log("Sharing post:", postId);
  };

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
        posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-gray-400 bg-white shadow"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full bg-gray-300"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {post.author.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    @{post.author.username} • {post.timestamp}
                  </p>
                </div>
              </div>

              <div className="relative">
                <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                  <FaEllipsisH size={16} />
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="whitespace-pre-wrap text-gray-900">
                {post.content}
              </p>
            </div>

            {/* Post Image */}
            {post.image && (
              <div className="px-4 pb-3">
                <img
                  src={post.image}
                  alt="Post content"
                  className="h-auto max-h-96 w-full rounded-lg object-cover"
                />
              </div>
            )}

            {/* Post Stats */}
            <div className="border-t border-gray-100 px-4 py-2">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-100 px-4 py-3">
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center justify-center space-x-2 rounded-lg px-3 py-2 transition-colors ${
                    post.isLiked
                      ? "bg-red-50 text-red-600 hover:bg-red-100"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {post.isLiked ? (
                    <FaHeart size={18} />
                  ) : (
                    <FaRegHeart size={18} />
                  )}
                  <span className="text-sm font-medium">Like</span>
                </button>

                <button
                  onClick={() => toggleCommentBox(post.id)}
                  className={`flex items-center justify-center space-x-2 rounded-lg px-3 py-2 transition-colors ${
                    commentBoxStates[post.id]
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FaRegComment size={18} />
                  <span className="text-sm font-medium">Comment</span>
                </button>

                <button
                  onClick={() => handleShare(post.id)}
                  className="flex items-center justify-center space-x-2 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <FaShare size={18} />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>

            {/* Quick Comment Input - Show only when comment button is clicked */}
            {commentBoxStates[post.id] && (
              <div className="border-t border-gray-100 px-4 pb-4">
                <div className="mt-3 flex items-center space-x-3">
                  <img
                    src={post.author.avatar}
                    alt="Your avatar"
                    className="h-8 w-8 rounded-full bg-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        ))
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
