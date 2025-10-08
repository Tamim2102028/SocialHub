import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { TOURNAMENT_CONSTANTS, getCurrentRound } from "../data/tournamentData";

interface TournamentScheduleProps {
  startDate: string;
}

const TournamentSchedule: React.FC<TournamentScheduleProps> = ({
  startDate,
}) => {
  // Get current active round based on date
  const activeRound = getCurrentRound(startDate);

  return (
    <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <FaCalendarAlt className="text-2xl text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">Tournament Schedule</h3>
      </div>

      <div className="space-y-3">
        {TOURNAMENT_CONSTANTS.ROUNDS.map((round, index) => {
          const isActive = activeRound === round.id;

          return (
            <div
              key={round.id}
              className={`rounded-lg border-l-4 p-4 transition-all ${
                isActive
                  ? "border-green-600 bg-green-50 shadow-md"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${
                        isActive ? "bg-green-600" : "bg-blue-600"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <h4
                      className={`font-semibold ${
                        isActive ? "text-green-900" : "text-gray-900"
                      }`}
                    >
                      {round.name}
                    </h4>
                  </div>
                  <p
                    className={`mt-2 text-sm ${
                      isActive ? "text-green-700" : "text-gray-600"
                    }`}
                  >
                    {round.description}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {round.days}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TournamentSchedule;
