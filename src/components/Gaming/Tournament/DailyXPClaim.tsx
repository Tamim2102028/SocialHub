import React, { useState, useEffect } from "react";
import { FaGift, FaClock } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { claimDailyXP } from "../../../store/slices/tournamentSlice.ts";

const DailyXPClaim: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userXP, lastClaimDate } = useAppSelector((state) => state.tournament);

  const [canClaim, setCanClaim] = useState(false);
  const [timeUntilMidnight, setTimeUntilMidnight] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);

  // Check if user can claim today
  useEffect(() => {
    const checkClaimAvailability = () => {
      const today = new Date().toDateString();
      const lastClaim = lastClaimDate
        ? new Date(lastClaimDate).toDateString()
        : null;

      // Can claim if never claimed OR last claim was not today
      setCanClaim(!lastClaim || lastClaim !== today);
    };

    checkClaimAvailability();
    // Check every minute in case they're waiting for midnight
    const interval = setInterval(checkClaimAvailability, 60000);
    return () => clearInterval(interval);
  }, [lastClaimDate]);

  // Calculate time until midnight
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      const diff = midnight.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeUntilMidnight(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClaim = () => {
    dispatch(claimDailyXP());
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow">
      {/* Animation Overlay */}
      {showAnimation && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-green-500/10 backdrop-blur-sm">
          <div className="animate-bounce text-5xl font-bold text-green-600">
            +10 XP!
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-6">
        {/* Left Side - Claim Info */}
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2">
            <FaGift className="text-xl text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">
              Daily XP Claim
            </h3>
          </div>

          {canClaim ? (
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Claim your daily{" "}
                <span className="font-semibold text-blue-600">10 XP</span>{" "}
                reward!
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FaClock />
                <span>Expires at midnight ({timeUntilMidnight} remaining)</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm font-medium text-green-600">
                ✅ Already claimed today!
              </p>
              <div className="rounded-lg bg-blue-50 px-3 py-2">
                <p className="text-xs text-gray-600">
                  Next claim available in:
                </p>
                <p className="text-lg font-bold text-blue-600">
                  {timeUntilMidnight}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className="h-30 w-px bg-gray-500"></div>

        {/* Right Side - Action Button or XP Display */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={handleClaim}
            disabled={!canClaim}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white shadow transition-all ${
              canClaim
                ? "bg-blue-600 hover:bg-blue-700 active:scale-95"
                : "cursor-not-allowed bg-gray-400 opacity-60"
            }`}
          >
            <FaGift />
            Claim 10 XP
          </button>

          {/* Current XP Display */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2">
            <p className="text-xs text-gray-500">Your XP</p>
            <p className="text-xl font-bold text-gray-800">{userXP}</p>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      {canClaim && (
        <div className="mt-4 rounded border border-orange-200 bg-orange-50 px-4 py-2 text-center">
          <p className="text-xs text-orange-700">
            ⚠️ Claim expires at midnight. Don't miss your daily reward!
          </p>
        </div>
      )}
    </div>
  );
};

export default DailyXPClaim;
