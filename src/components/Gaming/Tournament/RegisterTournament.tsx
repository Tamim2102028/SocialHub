import React from "react";
import { FaTrophy, FaUsers, FaCoins, FaCheckCircle } from "react-icons/fa";
import { useAppDispatch } from "../../../store/hooks";
import { registerForTournament } from "../../../store/slices/tournamentSlice.ts";

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

  const canRegister = userXP >= entryFee;
  const isFull = registeredCount >= maxPlayers;

  const handleRegister = () => {
    if (canRegister && !isFull) {
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
        {!canRegister && (
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
          disabled={!canRegister || isFull}
          className={`w-full rounded-lg py-3 font-semibold text-white shadow transition-all ${
            canRegister && !isFull
              ? "bg-blue-600 hover:bg-blue-700 active:scale-95"
              : "cursor-not-allowed bg-gray-400"
          }`}
        >
          {canRegister && !isFull ? (
            <span className="flex items-center justify-center gap-2">
              <FaCheckCircle />
              Register Now ({entryFee} XP)
            </span>
          ) : isFull ? (
            "Tournament Full"
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
