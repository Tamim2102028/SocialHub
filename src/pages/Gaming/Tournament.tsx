import React from "react";
import { useAppSelector } from "../../store/hooks";
import DailyXPClaim from "../../components/Gaming/Tournament/DailyXPClaim.tsx";
import TournamentStatus from "../../components/Gaming/Tournament/TournamentStatus.tsx";
import RegisterTournament from "../../components/Gaming/Tournament/RegisterTournament.tsx";
import TournamentBracket from "../../components/Gaming/Tournament/TournamentBracket.tsx";
import PrizeSelection from "../../components/Gaming/Tournament/PrizeSelection.tsx";
import TournamentHistory from "../../components/Gaming/Tournament/TournamentHistory.tsx";

const Tournament: React.FC = () => {
  const { currentTournament, userXP, userRegistered, isWinner } =
    useAppSelector((state) => state.tournament);

  return (
    <div className="space-y-6">
      {/* Daily XP Claim Section - Always visible at top */}
      <DailyXPClaim />

      {/* Tournament Status Banner */}
      <TournamentStatus
        status={currentTournament.status}
        currentRound={currentTournament.currentRound}
        startDate={currentTournament.startDate}
      />

      {/* Registration Phase */}
      {currentTournament.status === "registration" && !userRegistered && (
        <RegisterTournament
          entryFee={50}
          userXP={userXP}
          registeredCount={currentTournament.registeredPlayers.length}
          maxPlayers={64}
        />
      )}

      {/* Active Tournament - Show Bracket */}
      {(currentTournament.status === "active" ||
        currentTournament.status === "ended") && (
        <TournamentBracket
          bracket={currentTournament.bracket}
          currentRound={currentTournament.currentRound}
        />
      )}

      {/* Winner Prize Selection */}
      {isWinner && currentTournament.status === "ended" && (
        <PrizeSelection prizePool={currentTournament.prizePool} />
      )}

      {/* Tournament History */}
      <TournamentHistory />
    </div>
  );
};

export default Tournament;
