import React, { useEffect } from "react";
import {
  FaTrophy,
  FaUsers,
  FaCoins,
  FaCheckCircle,
  FaUniversity,
} from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  registerForTournament,
  setUserUniversity,
} from "../../../store/slices/tournamentSlice.ts";
import { universities } from "../dummyData/tournamentData";

interface RegisterTournamentProps {
  entryFee: number;
  userXP: number;
  registeredCount: number;
  maxPlayers: number;
}

const RegisterTournament: React.FC<RegisterTournamentProps> = ({
  entryFee,
  userXP,
  registeredCount,
  maxPlayers,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const userUniversityId = useAppSelector(
    (state) => state.tournament.userUniversityId
  );

  // Set user's university from their profile on component mount
  useEffect(() => {
    if (user?.universityId && !userUniversityId) {
      dispatch(setUserUniversity(user.universityId));
    }
  }, [user, userUniversityId, dispatch]);

  const canRegister = userXP >= entryFee;
  const isFull = registeredCount >= maxPlayers;
  const hasUniversity = !!user?.universityId;

  // Get user's university details
  const userUniversity = universities.find(
    (uni) => uni.id === user?.universityId
  );

  const handleRegister = () => {
    if (canRegister && !isFull && hasUniversity) {
      dispatch(registerForTournament());
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          Register for Tournament
        </h3>
        <p className="text-sm text-gray-600">
          Compete against the best players and win amazing prizes!
        </p>
      </div>

      {/* Registration Stats */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <FaCoins className="mx-auto mb-2 text-2xl text-yellow-600" />
          <p className="text-xs text-gray-500">Entry Fee</p>
          <p className="text-lg font-semibold text-gray-800">{entryFee} XP</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <FaUsers className="mx-auto mb-2 text-2xl text-blue-600" />
          <p className="text-xs text-gray-500">Registered</p>
          <p className="text-lg font-semibold text-gray-800">
            {registeredCount}/{maxPlayers}
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <FaTrophy className="mx-auto mb-2 text-2xl text-orange-600" />
          <p className="text-xs text-gray-500">Your XP</p>
          <p className="text-lg font-semibold text-gray-800">{userXP} XP</p>
        </div>
      </div>

      {/* Prize Pool Preview */}
      <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
        <h4 className="mb-3 text-center font-semibold text-blue-800">
          🏆 Tournament Structure
        </h4>
        <div className="space-y-2 text-sm text-blue-700">
          <p className="font-medium">Phase 1: University Round (3 days)</p>
          <p className="ml-4 text-xs">
            • Compete within your university
            <br />• Top 10 players advance to next phase
          </p>
          <p className="mt-2 font-medium">
            Phase 2: Inter-University Final (3 days)
          </p>
          <p className="ml-4 text-xs">
            • All university champions compete
            <br />• Grand prize for ultimate winner
          </p>
        </div>
      </div>

      {/* User's University Display */}
      {hasUniversity && userUniversity ? (
        <div className="mb-6 rounded-lg border-2 border-green-200 bg-green-50 p-4">
          <div className="flex items-center gap-3">
            <FaUniversity className="text-2xl text-green-600" />
            <div className="flex-1">
              <p className="text-xs text-green-600">You'll compete for</p>
              <p className="font-bold text-green-800">
                {userUniversity.shortName}
              </p>
              <p className="text-xs text-green-700">{userUniversity.name}</p>
            </div>
            <div className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
              ✓ Verified
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6 rounded-lg border-2 border-red-200 bg-red-50 p-4">
          <div className="flex items-center gap-3">
            <FaUniversity className="text-2xl text-red-600" />
            <div className="flex-1">
              <p className="font-bold text-red-800">University Not Set</p>
              <p className="text-xs text-red-700">
                Please update your profile with university information to
                register
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Prize Pool Preview */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow">
        <h4 className="mb-3 text-center font-bold text-gray-800">
          🎁 Prize Pool 🎁
        </h4>
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="rounded bg-yellow-50 py-2">
            <p className="font-bold text-yellow-700">1st Place</p>
            <p className="text-gray-600">Buffet Treat</p>
            <p className="font-semibold text-yellow-600">500 TK Value</p>
          </div>
          <div className="rounded bg-gray-50 py-2">
            <p className="font-bold text-gray-700">2nd Place</p>
            <p className="text-gray-600">Masallah Kabab</p>
            <p className="font-semibold text-gray-600">300 TK Value</p>
          </div>
          <div className="rounded bg-orange-50 py-2">
            <p className="font-bold text-orange-700">3rd Place</p>
            <p className="text-gray-600">Pizza Treat</p>
            <p className="font-semibold text-orange-600">400 TK Value</p>
          </div>
          <div className="rounded bg-green-50 py-2">
            <p className="font-bold text-green-700">Cash Option</p>
            <p className="text-gray-600">bKash</p>
            <p className="font-semibold text-green-600">Available</p>
          </div>
        </div>
      </div>

      {/* Registration Button */}
      <div className="space-y-3">
        {!hasUniversity && (
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-center">
            <p className="text-sm font-medium text-orange-700">
              ⚠️ University information required to register
            </p>
            <p className="mt-1 text-xs text-orange-600">
              Update your profile with your university details
            </p>
          </div>
        )}

        {!canRegister && hasUniversity && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-center">
            <p className="text-sm font-medium text-red-700">
              ❌ Insufficient XP! You need {entryFee - userXP} more XP to
              register.
            </p>
            <p className="mt-1 text-xs text-red-600">
              Claim daily XP or play games to earn more!
            </p>
          </div>
        )}

        {isFull && (
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 text-center">
            <p className="text-sm font-medium text-orange-700">
              ⚠️ Tournament is full! Registration closed.
            </p>
          </div>
        )}

        <button
          onClick={handleRegister}
          disabled={!canRegister || isFull || !hasUniversity}
          className={`w-full rounded-lg py-3 font-semibold text-white shadow transition-all ${
            canRegister && !isFull && hasUniversity
              ? "bg-blue-600 hover:bg-blue-700 active:scale-95"
              : "cursor-not-allowed bg-gray-400"
          }`}
        >
          {canRegister && !isFull && hasUniversity ? (
            <span className="flex items-center justify-center gap-2">
              <FaCheckCircle />
              Register Now ({entryFee} XP)
            </span>
          ) : isFull ? (
            "Tournament Full"
          ) : !hasUniversity ? (
            "University Required"
          ) : (
            "Insufficient XP"
          )}
        </button>

        {canRegister && !isFull && (
          <p className="text-center text-xs text-gray-500">
            💡 Entry fee is non-refundable once tournament starts
          </p>
        )}
      </div>

      {/* Tournament Rules */}
      <div className="mt-6 rounded-lg bg-blue-50 p-4">
        <h4 className="mb-2 font-bold text-blue-800">📋 Tournament Rules</h4>
        <ul className="space-y-1 text-xs text-blue-700">
          <li>• Match time: 2 PM - 2 AM daily</li>
          <li>• Phase 1: University-level matches (Top 10 advance)</li>
          <li>• Phase 2: Inter-university championship</li>
          <li>• Must be online during your match time</li>
          <li>• 5 minutes response time or auto-forfeit</li>
          <li>• Best of 1 game per match</li>
          <li>• Higher score wins, tie = sudden death</li>
        </ul>
      </div>
    </div>
  );
};

export default RegisterTournament;
