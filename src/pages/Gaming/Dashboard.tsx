import React from "react";
import { useAppSelector } from "../../store/hooks";
import DailyXPClaim from "../../components/Gaming/Dashboard/DailyXPClaim";
import RegisterTournament from "../../components/Gaming/Dashboard/RegisterTournament";
import PrizePool from "../../components/Gaming/Dashboard/PrizePool";
import TournamentSchedule from "../../components/Gaming/Dashboard/TournamentSchedule";
import TournamentRules from "../../components/Gaming/Dashboard/TournamentRules";
import { TOURNAMENT_CONSTANTS } from "../../components/Gaming/data/tournamentData";

const Dashboard: React.FC = () => {
  const { currentTournament, userXP, userRegistered } = useAppSelector(
    (state) => state.tournament
  );

  return (
    <div className="space-y-5">
      {/* Registration Component - Always show during registration phase */}
      {currentTournament.status === "registration" && (
        <RegisterTournament
          entryFee={TOURNAMENT_CONSTANTS.ENTRY_FEE}
          userXP={userXP}
          registeredCount={currentTournament.registeredPlayers.length}
          maxPlayers={500}
          isRegistered={userRegistered}
        />
      )}

      {/* Prize Pool Card - After Registration */}
      <PrizePool />

      {/* Tournament Schedule Card */}
      <TournamentSchedule startDate={currentTournament.startDate} />

      {/* Tournament Rules Card */}
      <TournamentRules />

      {/* Daily XP Claim - At Bottom */}
      <DailyXPClaim />
    </div>
  );
};

export default Dashboard;
