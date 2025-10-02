import React, { useState } from "react";
import {
  FaPoll,
  FaComments,
  FaPlus,
  FaBullhorn,
  FaFile,
  FaTimes,
} from "react-icons/fa";

interface Poll {
  id: number;
  question: string;
  options: { id: number; text: string; votes: number }[];
  totalVotes: number;
}

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  postedBy: string;
  hasFile?: boolean;
  fileName?: string;
}

const CRCorner: React.FC = () => {
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  const polls: Poll[] = [
    {
      id: 1,
      question: "Do you support the new midterm exam schedule?",
      options: [
        { id: 1, text: "Yes, it works for me", votes: 45 },
        { id: 2, text: "No, needs adjustment", votes: 23 },
        { id: 3, text: "Neutral/Don't care", votes: 12 },
      ],
      totalVotes: 80,
    },
  ];

  const announcements: Announcement[] = [
    {
      id: 1,
      title: "Class Representative Meeting",
      content:
        "All CRs are requested to attend the monthly meeting in Room 301.",
      date: "Oct 5, 2025",
      postedBy: "Tamim Ahmed (CR)",
    },
    {
      id: 2,
      title: "Circuit Analysis Notes - Shared by Sir",
      content:
        "Our professor has shared the complete lecture notes for Circuit Analysis. Download and study before the midterm exam.",
      date: "Oct 3, 2025",
      postedBy: "Sadia Rahman (CR)",
      hasFile: true,
      fileName: "Circuit_Analysis_Notes.pdf",
    },
    {
      id: 3,
      title: "Assignment Deadline Extended",
      content:
        "Good news! The CSE 305 assignment deadline has been extended to Oct 15. Make sure to submit on time.",
      date: "Oct 2, 2025",
      postedBy: "Tamim Ahmed (CR)",
    },
  ];

  const handleVote = (_pollId: number, optionId: number) => {
    setSelectedPoll(optionId);
    setHasVoted(true);
  };

  const handleSendFeedback = () => {
    if (feedback.trim()) {
      alert("Feedback sent successfully!");
      setFeedback("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
  };

  const handleCreatePost = () => {
    if (postTitle.trim() && postContent.trim()) {
      alert("Announcement posted successfully!");
      setPostTitle("");
      setPostContent("");
      setAttachedFile(null);
      setShowCreatePost(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">CR Corner</h1>
          <p className="mt-2 text-lg text-gray-600">
            Connect with your Class Representative and participate in class
            decisions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column - Announcements and Create Post */}
          <div className="space-y-6 lg:col-span-1">
            {/* Create Announcement Button */}
            <button
              onClick={() => setShowCreatePost(!showCreatePost)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-4 font-semibold text-blue-600 transition-colors hover:border-blue-400 hover:bg-blue-100"
            >
              <FaPlus className="h-5 w-5" />
              Create Announcement
            </button>

            {/* Create Post Form */}
            {showCreatePost && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-600">
                    <FaBullhorn className="h-5 w-5" />
                    <h3 className="text-lg font-bold text-gray-900">
                      New Announcement
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Announcement Title"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />

                  <textarea
                    placeholder="Write your announcement here..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />

                  {/* File Attachment */}
                  {attachedFile ? (
                    <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-50 p-3">
                      <div className="flex items-center gap-2">
                        <FaFile className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-700">
                          {attachedFile.name}
                        </span>
                      </div>
                      <button
                        onClick={handleRemoveFile}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTimes className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 p-3 transition-colors hover:border-blue-400 hover:bg-blue-50">
                      <FaFile className="h-4 w-4 text-gray-600" />
                      <span className="text-sm text-gray-600">
                        Attach file (Notes, Assignment, etc.)
                      </span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
                      />
                    </label>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowCreatePost(false)}
                      className="flex-1 rounded-lg border border-gray-300 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCreatePost}
                      disabled={!postTitle.trim() || !postContent.trim()}
                      className="flex-1 rounded-lg bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* CR Announcements */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-blue-600">
                <FaBullhorn className="h-5 w-5" />
                <h2 className="text-xl font-bold text-gray-900">
                  Announcements
                </h2>
              </div>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:shadow-md"
                  >
                    <h4 className="mb-1 font-semibold text-gray-900">
                      {announcement.title}
                    </h4>
                    <p className="mb-2 text-sm text-gray-700">
                      {announcement.content}
                    </p>

                    {/* File Attachment Display */}
                    {announcement.hasFile && (
                      <div className="mb-2 flex items-center gap-2 rounded bg-blue-100 px-3 py-2">
                        <FaFile className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">
                          {announcement.fileName}
                        </span>
                        <button className="ml-auto text-xs font-semibold text-blue-600 hover:text-blue-800">
                          Download
                        </button>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{announcement.postedBy}</span>
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Polls and Feedback */}
          <div className="space-y-6 lg:col-span-2">
            {/* Active Poll */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-blue-600">
                <FaPoll className="h-5 w-5" />
                <h2 className="text-xl font-bold text-gray-900">Active Poll</h2>
              </div>

              {polls.map((poll) => (
                <div key={poll.id}>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    {poll.question}
                  </h3>

                  <div className="space-y-3">
                    {poll.options.map((option) => {
                      const percentage = (
                        (option.votes / poll.totalVotes) *
                        100
                      ).toFixed(1);
                      const isSelected = selectedPoll === option.id;

                      return (
                        <button
                          key={option.id}
                          onClick={() =>
                            !hasVoted && handleVote(poll.id, option.id)
                          }
                          disabled={hasVoted}
                          className={`relative w-full overflow-hidden rounded-lg border p-4 text-left transition-all ${
                            isSelected
                              ? "border-blue-500 bg-blue-50"
                              : hasVoted
                                ? "cursor-not-allowed border-gray-200 bg-gray-50"
                                : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50"
                          }`}
                        >
                          <div
                            className="absolute top-0 left-0 h-full bg-blue-100 transition-all"
                            style={{
                              width: hasVoted ? `${percentage}%` : "0%",
                            }}
                          />
                          <div className="relative flex items-center justify-between">
                            <span className="font-medium text-gray-900">
                              {option.text}
                            </span>
                            {hasVoted && (
                              <span className="text-sm font-semibold text-blue-600">
                                {percentage}% ({option.votes})
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {hasVoted && (
                    <div className="mt-4 rounded-lg bg-green-50 p-3 text-center">
                      <p className="text-sm font-medium text-green-700">
                        ✓ Thank you for voting! Total votes: {poll.totalVotes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Feedback Section */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-blue-600">
                <FaComments className="h-5 w-5" />
                <h2 className="text-xl font-bold text-gray-900">
                  Send Feedback to CR
                </h2>
              </div>

              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows={5}
                placeholder="Share your concerns, suggestions, or feedback with the CR..."
              />

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Your feedback will be sent anonymously
                </p>
                <button
                  onClick={handleSendFeedback}
                  disabled={!feedback.trim()}
                  className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRCorner;
