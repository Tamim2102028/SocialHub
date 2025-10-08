import React from "react";
import { FaTrophy, FaClock, FaUsers } from "react-icons/fa";

interface TournamentStatusProps {
  status: "registration" | "active" | "ended";
  currentRound: "round1" | "round2" | "qf" | "sf" | "final";
  startDate: string;
}

const TournamentStatus: React.FC<TournamentStatusProps> = ({
  status,
  currentRound,
  startDate,
}) => {
  const getStatusText = () => {
    switch (status) {
      case "registration":
        return "Registration Open";
      case "active":
        return `Live Tournament - ${getRoundName()}`;
      case "ended":
        return "Tournament Ended";
    }
  };

  const getRoundName = () => {
    switch (currentRound) {
      case "round1":
        return "Round 1";
      case "round2":
        return "Round 2";
      case "qf":
        return "Quarter Finals";
      case "sf":
        return "Semi Finals";
      case "final":
        return "Finals";
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
            <p className="mt-1 text-sm opacity-90">Weekly Gaming Tournament</p>
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
        <div className="mt-5 grid grid-cols-6 gap-2 rounded border border-white/100 bg-white/50 p-3">
          <div className="text-center">
            <p className="text-xs opacity-90">Sat</p>
            <p className="text-sm font-semibold">Round 1</p>
          </div>
          <div className="text-center">
            <p className="text-xs opacity-90">Sun</p>
            <p className="text-sm font-semibold">Round 2</p>
          </div>
          <div className="text-center">
            <p className="text-xs opacity-90">Mon</p>
            <p className="text-sm font-semibold">QF</p>
          </div>
          <div className="text-center">
            <p className="text-xs opacity-90">Tue</p>
            <p className="text-sm font-semibold">SF 1</p>
          </div>
          <div className="text-center">
            <p className="text-xs opacity-90">Wed</p>
            <p className="text-sm font-semibold">SF 2</p>
          </div>
          <div className="text-center">
            <p className="text-xs opacity-90">Thu</p>
            <p className="text-sm font-semibold">Finals</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TournamentStatus;
