import React from "react";
import { useAppSelector } from "../../store/hooks";
import { FaTrophy, FaCoins, FaChartLine } from "react-icons/fa";
import DailyXPClaim from "../../components/Gaming/Dashboard/DailyXPClaim";
import RegisterTournament from "../../components/Gaming/Dashboard/RegisterTournament";
import TournamentStatus from "../../components/Gaming/Dashboard/TournamentStatus";
import PrizeSelection from "../../components/Gaming/Dashboard/PrizeSelection";
import { TOURNAMENT_CONSTANTS } from "../../components/Gaming/data/tournamentData";

const Dashboard: React.FC = () => {
  const { currentTournament, userXP, userRegistered, isWinner } =
    useAppSelector((state) => state.tournament);
  const user = useAppSelector((state) => state.auth.user);

  const quickStats = [
    {
      icon: <FaCoins className="text-2xl text-yellow-600" />,
      label: "Your XP",
      value: userXP,
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: <FaTrophy className="text-2xl text-blue-600" />,
      label: "Global Rank",
      value: "#42",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <FaChartLine className="text-2xl text-green-600" />,
      label: "Matches Played",
      value: "0",
      color: "bg-green-50 border-green-200",
    },
  ];

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-6">
        <h1 className="text-3xl font-bold text-gray-900">Gaming Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back, {user?.name}! Track your progress and compete.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {quickStats.map((stat, index) => (
          <div key={index} className={`rounded-lg border p-5 ${stat.color}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Tournament Section */}
      <div className="space-y-5">
        {/* Tournament Status Card */}
        <TournamentStatus
          status={currentTournament.status}
          currentRound={currentTournament.currentRound}
          phase={currentTournament.phase}
          startDate={currentTournament.startDate}
        />

        {/* Registration Component */}
        {currentTournament.status === "registration" && !userRegistered && (
          <RegisterTournament
            entryFee={TOURNAMENT_CONSTANTS.ENTRY_FEE}
            userXP={userXP}
            registeredCount={currentTournament.registeredPlayers.length}
            maxPlayers={TOURNAMENT_CONSTANTS.MAX_PLAYERS_PER_UNIVERSITY}
          />
        )}

        {/* Prize Selection for Winners */}
        {currentTournament.status === "ended" && isWinner && (
          <PrizeSelection prizePool={currentTournament.prizePool} />
        )}
      </div>

      {/* Daily XP Claim - At Bottom */}
      <DailyXPClaim />
    </div>
  );
};

export default Dashboard;
