import React, { useEffect } from "react";
import { FaTrophy, FaCoins, FaCheckCircle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  registerForTournament,
  setUserUniversity,
} from "../../../store/slices/tournamentSlice.ts";

interface RegisterTournamentProps {
  entryFee: number;
  userXP: number;
  registeredCount: number;
  maxPlayers: number;
  isRegistered: boolean;
}

const RegisterTournament: React.FC<RegisterTournamentProps> = ({
  entryFee,
  userXP,
  registeredCount,
  maxPlayers,
  isRegistered,
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

  const handleRegister = () => {
    if (canRegister && !isFull && hasUniversity) {
      dispatch(registerForTournament());
    }
  };

  return (
    <div className="space-y-3 rounded-lg border border-gray-200 bg-white p-5 shadow">
      {/* Header with Stats */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            {isRegistered
              ? "Tournament Registration"
              : "Register for Tournament"}
          </h3>
          <p className="text-sm text-gray-600">
            {isRegistered
              ? "You're all set! Get ready for the competition!"
              : "Compete against the best players and win amazing prizes!"}
          </p>
        </div>
        <div className="ml-4 flex gap-3">
          <div className="rounded-lg border border-gray-200 bg-yellow-50 px-4 py-2 text-center">
            <FaCoins className="mx-auto mb-1 text-xl text-yellow-600" />
            <p className="text-xs text-gray-500">Entry Fee</p>
            <p className="font-bold text-gray-800">{entryFee} XP</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-orange-50 px-4 py-2 text-center">
            <FaTrophy className="mx-auto mb-1 text-xl text-orange-600" />
            <p className="text-xs text-gray-500">Your XP</p>
            <p className="font-bold text-gray-800">{userXP} XP</p>
          </div>
        </div>
      </div>

      {/* Registration Status / Button */}
      {isRegistered ? (
        // Registration Success Message
        <div className="space-y-3">
          <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-3xl text-green-600" />
              <div className="flex-1">
                <h4 className="text-lg font-bold text-green-900">
                  Registration Successful!
                </h4>
                <p className="mt-1 text-sm text-green-700">
                  You've successfully registered for the tournament. Check the
                  schedule below for match timings.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Registration Button Section
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
      )}
    </div>
  );
};

export default RegisterTournament;
