import React from "react";
import { useAppSelector } from "../../store/hooks";
import TournamentBracket from "../../components/Gaming/Tournament/TournamentBracket.tsx";
import TournamentHistory from "../../components/Gaming/Tournament/TournamentHistory.tsx";

const Tournament: React.FC = () => {
  const { currentTournament } = useAppSelector((state) => state.tournament);

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-6">
        <h1 className="text-3xl font-bold text-gray-900">Tournament Arena</h1>
        <p className="mt-2 text-gray-600">
          View match brackets, schedules, and tournament history
        </p>
      </div>

      {/* Tournament Bracket - Always show */}
      <TournamentBracket
        bracket={currentTournament.bracket}
        currentRound={currentTournament.currentRound}
      />

      {/* Tournament History */}
      <TournamentHistory />
    </div>
  );
};

export default Tournament;
