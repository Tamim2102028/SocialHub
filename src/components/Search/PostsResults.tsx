import React from "react";
import { mockSearchResults } from "./dummyData/searchData";

interface PostsResultsProps {
  isVisible: boolean;
}

const PostsResults: React.FC<PostsResultsProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  const handleLike = (postIndex: number) => {
    // TODO: Implement like logic
    console.log("Liking post:", postIndex);
  };

  const handleComment = (postIndex: number) => {
    // TODO: Implement comment logic
    console.log("Commenting on post:", postIndex);
  };

  const handleShare = (postIndex: number) => {
    // TODO: Implement share logic
    console.log("Sharing post:", postIndex);
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-900">Posts</h2>
      <div className="space-y-4">
        {mockSearchResults.posts.map((post, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-center space-x-3">
              <div className="text-2xl">👤</div>
              <div>
                <h3 className="font-semibold text-gray-900">{post.user}</h3>
                <p className="text-xs text-gray-500">{post.time} ago</p>
              </div>
            </div>
            <p className="mb-3 text-gray-800">{post.content}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button
                onClick={() => handleLike(index)}
                className="transition-colors hover:text-red-500"
              >
                ❤️ {post.likes} likes
              </button>
              <button
                onClick={() => handleComment(index)}
                className="transition-colors hover:text-blue-500"
              >
                💬 Comments
              </button>
              <button
                onClick={() => handleShare(index)}
                className="transition-colors hover:text-green-500"
              >
                📤 Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsResults;
