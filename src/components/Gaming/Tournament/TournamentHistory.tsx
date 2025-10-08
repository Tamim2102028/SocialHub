import React from "react";
import { FaTrophy, FaCalendar } from "react-icons/fa";

const TournamentHistory: React.FC = () => {
  // Mock data for past tournaments
  const pastTournaments = [
    {
      id: "tournament-000",
      date: "October 1-6, 2025",
      winner: "Tamim Ahmed",
      participants: 48,
      prize: "Buffet Treat",
    },
    // More tournaments will be added from Redux state
  ];

  return (
    <div className="rounded-lg border bg-white p-6 shadow">
      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-800">
        <FaTrophy className="text-yellow-500" />
        Tournament History
      </h3>

      {pastTournaments.length === 0 ? (
        <div className="flex min-h-[200px] items-center justify-center rounded-lg bg-gray-50 p-8 text-center">
          <div>
            <p className="mb-2 text-4xl">📜</p>
            <p className="text-gray-600">No past tournaments yet</p>
            <p className="mt-1 text-sm text-gray-500">
              Be part of the first tournament!
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {pastTournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="flex items-center justify-between rounded-lg border bg-gray-50 p-4 transition-all hover:bg-gray-100"
            >
              <div className="flex items-center gap-4">
                <FaCalendar className="text-2xl text-blue-500" />
                <div>
                  <p className="font-bold text-gray-800">{tournament.date}</p>
                  <p className="text-sm text-gray-600">
                    {tournament.participants} participants
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Champion:</p>
                <p className="font-bold text-gray-800">{tournament.winner}</p>
                <p className="text-xs text-green-600">{tournament.prize}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TournamentHistory;
