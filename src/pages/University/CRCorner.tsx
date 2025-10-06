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
    <div className="space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">CR Corner</h1>
        <p className="mt-1 text-gray-600">
          Connect with your Class Representative and participate in class
          decisions
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* Left Column - Announcements */}
        <div className="space-y-4 lg:col-span-2">
          {/* Create Announcement Button */}
          <button
            onClick={() => setShowCreatePost(!showCreatePost)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-3 text-sm font-semibold text-blue-600 transition-colors hover:border-blue-400 hover:bg-blue-100"
          >
            <FaPlus className="h-4 w-4" />
            Create Announcement
          </button>

          {/* Create Post Form */}
          {showCreatePost && (
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaBullhorn className="h-4 w-4 text-blue-600" />
                  <h3 className="text-base font-semibold text-gray-900">
                    New Announcement
                  </h3>
                </div>
                <button
                  onClick={() => setShowCreatePost(false)}
                  className="rounded p-1 text-gray-500 hover:bg-gray-100"
                >
                  <FaTimes className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Announcement Title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />

                <textarea
                  placeholder="Write your announcement here..."
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  rows={3}
                  className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />

                {/* File Attachment */}
                {attachedFile ? (
                  <div className="flex items-center justify-between rounded-md border border-gray-300 bg-gray-50 p-2">
                    <div className="flex items-center gap-2">
                      <FaFile className="h-3 w-3 text-blue-600" />
                      <span className="text-xs text-gray-700">
                        {attachedFile.name}
                      </span>
                    </div>
                    <button
                      onClick={handleRemoveFile}
                      className="rounded p-1 text-red-500 hover:bg-red-50"
                    >
                      <FaTimes className="h-3 w-3" />
                    </button>
                  </div>
                ) : (
                  <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-dashed border-gray-300 p-2 transition-colors hover:border-blue-400 hover:bg-blue-50">
                    <FaFile className="h-3 w-3 text-gray-600" />
                    <span className="text-xs text-gray-600">
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

                <div className="flex gap-2">
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="flex-1 rounded-md border border-gray-300 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreatePost}
                    disabled={!postTitle.trim() || !postContent.trim()}
                    className="flex-1 rounded-md bg-blue-600 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CR Announcements */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <FaBullhorn className="h-4 w-4 text-blue-600" />
              <h2 className="text-base font-semibold text-gray-900">
                Announcements
              </h2>
            </div>
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="rounded-md border border-gray-200 bg-gray-50 p-3 transition-shadow hover:shadow-sm"
                >
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">
                    {announcement.title}
                  </h4>
                  <p className="mb-2 text-xs leading-relaxed text-gray-700">
                    {announcement.content}
                  </p>

                  {/* File Attachment Display */}
                  {announcement.hasFile && (
                    <div className="mb-2 flex items-center justify-between rounded bg-blue-50 px-2 py-1.5">
                      <div className="flex items-center gap-1.5">
                        <FaFile className="h-3 w-3 text-blue-600" />
                        <span className="text-xs font-medium text-blue-700">
                          {announcement.fileName}
                        </span>
                      </div>
                      <button className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                        Download
                      </button>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium">{announcement.postedBy}</span>
                    <span>{announcement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Polls and Feedback */}
        <div className="space-y-4 lg:col-span-3">
          {/* Active Poll */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <FaPoll className="h-4 w-4 text-blue-600" />
              <h2 className="text-base font-semibold text-gray-900">
                Active Poll
              </h2>
            </div>

            {polls.map((poll) => (
              <div key={poll.id}>
                <h3 className="mb-3 text-sm font-medium text-gray-900">
                  {poll.question}
                </h3>

                <div className="space-y-2">
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
                        className={`relative w-full overflow-hidden rounded-md border p-3 text-left transition-all ${
                          isSelected
                            ? "border-blue-500 bg-blue-50"
                            : hasVoted
                              ? "cursor-not-allowed border-gray-200 bg-gray-50"
                              : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50"
                        }`}
                      >
                        <div
                          className="absolute top-0 left-0 h-full bg-blue-100 transition-all duration-300"
                          style={{
                            width: hasVoted ? `${percentage}%` : "0%",
                          }}
                        />
                        <div className="relative flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">
                            {option.text}
                          </span>
                          {hasVoted && (
                            <span className="text-xs font-semibold text-blue-600">
                              {percentage}% ({option.votes})
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {hasVoted && (
                  <div className="mt-3 rounded-md bg-green-50 p-2 text-center">
                    <p className="text-xs font-medium text-green-700">
                      ✓ Thank you for voting! Total votes: {poll.totalVotes}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Feedback Section */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <FaComments className="h-4 w-4 text-blue-600" />
              <h2 className="text-base font-semibold text-gray-900">
                Send Feedback to CR
              </h2>
            </div>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full resize-none rounded-md border border-gray-300 p-3 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              rows={4}
              placeholder="Share your concerns, suggestions, or feedback with the CR..."
            />

            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Your feedback will be sent anonymously
              </p>
              <button
                onClick={handleSendFeedback}
                disabled={!feedback.trim()}
                className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRCorner;
