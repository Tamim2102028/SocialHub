import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBackOutline, IoEllipsisHorizontal } from "react-icons/io5";
import {
  FaUsers,
  FaLock,
  FaGlobe,
  FaUserPlus,
  FaUserMinus,
  FaSearch,
  FaImage,
  FaVideo,
  FaSmile,
  FaThumbsUp,
  FaComment,
  FaShare,
} from "react-icons/fa";
import { allMockGroups } from "./dummyData/groupsData";
import type { Group } from "./dummyData/groupsData";

const GroupDetail: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  const [group, setGroup] = useState<Group | null>(null);
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * 🔄 REAL BACKEND INTEGRATION NOTES:
     *
     * In production, this would be replaced with actual API calls:
     *
     * const fetchGroupDetails = async () => {
     *   try {
     *     setLoading(true);
     *     const response = await fetch(`/api/groups/${groupId}`, {
     *       headers: { 'Authorization': `Bearer ${token}` }
     *     });
     *
     *     if (!response.ok) throw new Error('Group not found');
     *
     *     const groupData = await response.json();
     *     const membershipStatus = await fetch(`/api/groups/${groupId}/membership`);
     *
     *     setGroup(groupData);
     *     setIsJoined(membershipStatus.isMember);
     *   } catch (error) {
     *     console.error('Failed to fetch group:', error);
     *     setGroup(null);
     *   } finally {
     *     setLoading(false);
     *   }
     * };
     *
     * Expected API Response:
     * {
     *   id: number,
     *   name: string,
     *   description: string,
     *   members: number,
     *   isPrivate: boolean,
     *   coverImage: string,
     *   category: string,
     *   rules: string[],
     *   tags: string[],
     *   createdAt: string,
     *   admin: { id, name, avatar },
     *   posts: number,
     *   lastActivity: string
     * }
     *
     * Loading time: 200-1500ms depending on:
     * - Network speed
     * - Server response time
     * - Database query complexity
     * - Image loading
     */

    // CURRENT: Simulate API call with setTimeout (for demo purposes)
    setLoading(true);
    setTimeout(() => {
      const foundGroup = allMockGroups.find(
        (g) => g.id === parseInt(groupId || "0")
      );
      setGroup(foundGroup || null);
      setIsJoined(Math.random() > 0.5); // Random join status for demo
      setLoading(false);
    }, 800); // Simulates realistic API delay
  }, [groupId]);

  const handleBack = () => {
    navigate("/groups");
  };

  const handleJoinToggle = () => {
    /**
     * 🔄 REAL BACKEND INTEGRATION NOTES:
     *
     * In production, this would be:
     *
     * const toggleMembership = async () => {
     *   try {
     *     setLoading(true);
     *
     *     const endpoint = isJoined
     *       ? `/api/groups/${groupId}/leave`
     *       : `/api/groups/${groupId}/join`;
     *
     *     const response = await fetch(endpoint, {
     *       method: 'POST',
     *       headers: {
     *         'Authorization': `Bearer ${token}`,
     *         'Content-Type': 'application/json'
     *       }
     *     });
     *
     *     if (response.ok) {
     *       setIsJoined(!isJoined);
     *       // Update member count
     *       setGroup(prev => prev ? {
     *         ...prev,
     *         members: prev.members + (isJoined ? -1 : 1)
     *       } : null);
     *
     *       // Show success notification
     *       toast.success(isJoined ? 'Left group successfully' : 'Joined group successfully');
     *     }
     *   } catch (error) {
     *     toast.error('Failed to update membership');
     *   } finally {
     *     setLoading(false);
     *   }
     * };
     *
     * Expected scenarios:
     * - Private group: May require approval
     * - Public group: Instant join
     * - Admin approval: Pending status
     * - Banned user: Error response
     */

    // CURRENT: Simple toggle for demo
    setIsJoined(!isJoined);
    // Here you would typically call an API to join/leave the group
  };

  if (loading) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="text-gray-600">Loading group details...</p>
        </div>
      </div>
    );
  }

  if (!group) {
    return (
      <div className="flex min-h-96 flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Group Not Found</h2>
        <p className="text-gray-600">
          The group you're looking for doesn't exist.
        </p>
        <button
          onClick={handleBack}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <IoArrowBackOutline />
          Back to Groups
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Back Button */}
      <div className="border-b border-gray-200 bg-white px-4 py-3">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
        >
          <IoArrowBackOutline className="h-5 w-5" />
          Back to Groups
        </button>
      </div>

      {/* Group Cover & Header */}
      <div className="border-b border-gray-200 bg-white">
        {/* Cover Photo */}
        <div className="relative h-80 w-full">
          <img
            src={group.coverImage}
            alt={group.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="mb-2 text-4xl font-bold text-white">{group.name}</h1>
            <div className="flex items-center gap-4 text-sm text-white/90">
              <div className="flex items-center gap-1">
                {group.isPrivate ? (
                  <FaLock className="text-sm" />
                ) : (
                  <FaGlobe className="text-sm" />
                )}
                <span>{group.isPrivate ? "Private" : "Public"} group</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <FaUsers className="text-sm" />
                <span>{group.members.toLocaleString()} members</span>
              </div>
            </div>
          </div>
        </div>

        {/* Group Actions Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handleJoinToggle}
                className={`rounded-lg px-6 py-2 text-sm font-semibold transition-all ${
                  isJoined
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {isJoined ? (
                  <>
                    <FaUserMinus className="mr-2 inline" />
                    Joined
                  </>
                ) : (
                  <>
                    <FaUserPlus className="mr-2 inline" />
                    Join Group
                  </>
                )}
              </button>
              <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-300">
                Invite
              </button>
              <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-300">
                <FaSearch className="mr-2 inline" />
                Search
              </button>
            </div>
            <button className="rounded-lg bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-gray-300">
              <IoEllipsisHorizontal className="text-lg" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-t border-gray-200">
          <div className="px-6">
            <div className="flex gap-8">
              <button className="border-b-2 border-blue-600 py-4 font-semibold text-blue-600">
                Discussion
              </button>
              <button className="py-4 font-semibold text-gray-600 hover:text-gray-900">
                Members
              </button>
              <button className="py-4 font-semibold text-gray-600 hover:text-gray-900">
                About
              </button>
              <button className="py-4 font-semibold text-gray-600 hover:text-gray-900">
                Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-6">
        {/* Create Post */}
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <img
              src="https://ui-avatars.com/api/?name=You&background=3b82f6&color=fff"
              alt="Your avatar"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Write something..."
                className="w-full rounded-full border-0 bg-gray-100 px-4 py-3 text-sm placeholder-gray-500 transition-colors focus:bg-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 border-t border-gray-200 pt-2">
            <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-green-600">
              <FaImage className="text-green-500" />
              <span className="text-sm font-medium">Photo/Video</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600">
              <FaVideo className="text-blue-500" />
              <span className="text-sm font-medium">Live Video</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-yellow-600">
              <FaSmile className="text-yellow-500" />
              <span className="text-sm font-medium">Feeling/Activity</span>
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {group.recentPosts && group.recentPosts.length > 0 ? (
            group.recentPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                {/* Post Header */}
                <div className="p-4 pb-0">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900">
                          {post.author.name}
                        </p>
                        {post.author.role && (
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                              post.author.role === "admin"
                                ? "bg-red-100 text-red-700"
                                : post.author.role === "moderator"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {post.author.role}
                          </span>
                        )}
                        {post.isPinned && (
                          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                            📌 Pinned
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <button className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
                      <IoEllipsisHorizontal />
                    </button>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-4 py-3">
                  <p className="leading-relaxed text-gray-800">
                    {post.content}
                  </p>
                  {post.images && post.images.length > 0 && (
                    <div className="mt-3 overflow-hidden rounded-lg">
                      {post.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt="Post image"
                          className="h-80 w-full object-cover"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between border-t border-gray-100 px-4 py-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-600">👍</span>
                    <span>{post.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{post.comments} comments</span>
                    <span>12 shares</span>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="grid grid-cols-3 gap-1 border-t border-gray-100 px-4 py-2">
                  <button
                    className={`flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-colors ${
                      post.isLiked
                        ? "text-blue-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <FaThumbsUp
                      className={post.isLiked ? "text-blue-600" : ""}
                    />
                    Like
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100">
                    <FaComment />
                    Comment
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100">
                    <FaShare />
                    Share
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
              <p className="text-gray-500">
                No posts yet. Be the first to share something!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
