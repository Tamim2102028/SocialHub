import React from "react";
import { FaTrophy, FaClock, FaUsers } from "react-icons/fa";

interface TournamentStatusProps {
  status: "registration" | "active" | "ended";
  currentRound: "university" | "inter-university" | "qf" | "sf" | "final";
  phase: "university-level" | "inter-university-final";
  startDate: string;
  userUniversityName?: string;
}

const TournamentStatus: React.FC<TournamentStatusProps> = ({
  status,
  currentRound,
  phase,
  startDate,
  userUniversityName,
}) => {
  const getStatusText = () => {
    if (status === "registration") {
      return "Registration Open";
    }
    if (status === "active") {
      if (phase === "university-level") {
        return `University Round - ${getRoundName()}`;
      } else {
        return `Inter-University Final - ${getRoundName()}`;
      }
    }
    return "Tournament Ended";
  };

  const getRoundName = () => {
    switch (currentRound) {
      case "university":
        return "University Round";
      case "inter-university":
        return "Inter-University";
      case "qf":
        return "Quarter Finals";
      case "sf":
        return "Semi Finals";
      case "final":
        return "Grand Finals";
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="overflow-hidden rounded-lg border bg-blue-100 p-3 shadow">
      <div className="flex items-center justify-between">
        {/* Left Side - Status */}
        <div className="flex items-center gap-4">
          <FaTrophy className="text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">{getStatusText()}</h2>
            <p className="mt-1 text-sm opacity-90">
              {phase === "university-level" && userUniversityName
                ? `${userUniversityName} Tournament`
                : "Inter-University Championship"}
            </p>
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="text-right">
          {status === "registration" && (
            <div className="space-y-2">
              <div className="flex items-center justify-end gap-2">
                <FaClock />
                <span className="text-sm">Starts: {formatDate(startDate)}</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <FaUsers />
                <span className="text-sm">Entry: 50 XP</span>
              </div>
            </div>
          )}

          {status === "active" && (
            <div className="space-y-2">
              <div className="rounded-lg bg-white/20 px-4 py-2 backdrop-blur-sm">
                <p className="text-xs opacity-90">Active Time</p>
                <p className="text-lg font-bold">2 PM - 2 AM</p>
              </div>
            </div>
          )}

          {status === "ended" && (
            <div className="rounded-lg bg-white/20 px-4 py-2 backdrop-blur-sm">
              <p className="text-sm">Check results below</p>
            </div>
          )}
        </div>
      </div>

      {/* Tournament Schedule */}
      {status === "registration" && (
        <div className="mt-5 space-y-3">
          {/* Phase Information */}
          <div className="rounded border border-white/100 bg-white/50 p-3">
            <h3 className="mb-2 font-semibold">📅 Tournament Structure</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-blue-600">Phase 1:</span>
                <span>
                  University Round (Sat-Mon) - Top 10 players from each
                  university advance
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-green-600">Phase 2:</span>
                <span>
                  Inter-University Final (Tue-Fri) - All university champions
                  compete
                </span>
              </div>
            </div>
          </div>

          {/* Match Schedule */}
          <div className="grid grid-cols-5 gap-2 rounded border border-white/100 bg-white/50 p-3">
            <div className="text-center">
              <p className="text-xs opacity-90">Sat-Mon</p>
              <p className="text-sm font-semibold">University</p>
            </div>
            <div className="text-center">
              <p className="text-xs opacity-90">Tue</p>
              <p className="text-sm font-semibold">Inter-Uni</p>
            </div>
            <div className="text-center">
              <p className="text-xs opacity-90">Wed</p>
              <p className="text-sm font-semibold">QF</p>
            </div>
            <div className="text-center">
              <p className="text-xs opacity-90">Thu</p>
              <p className="text-sm font-semibold">SF</p>
            </div>
            <div className="text-center">
              <p className="text-xs opacity-90">Fri</p>
              <p className="text-sm font-semibold">Finals</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TournamentStatus;
