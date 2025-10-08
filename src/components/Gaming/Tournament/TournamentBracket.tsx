import React from "react";

interface Match {
  id: string;
  round: string;
  player1: { name: string; avatar: string };
  player2: { name: string; avatar: string };
  winner: string | null;
  player1Score: number;
  player2Score: number;
  status: "upcoming" | "live" | "completed";
}

interface TournamentBracketProps {
  bracket: Match[];
  currentRound: string;
}

const TournamentBracket: React.FC<TournamentBracketProps> = ({
  bracket,
  currentRound,
}) => {
  return (
    <div className="rounded-lg border bg-white p-6 shadow">
      <h3 className="mb-4 text-xl font-bold text-gray-800">
        🏆 Tournament Bracket
      </h3>

      {/* Coming Soon Placeholder */}
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-gray-50 p-12 text-center">
        <p className="mb-2 text-6xl">🚧</p>
        <h4 className="mb-2 text-2xl font-bold text-gray-700">
          Bracket Coming Soon
        </h4>
        <p className="text-gray-600">
          Tournament bracket visualization will be displayed here
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Current Round: <span className="font-bold">{currentRound}</span>
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Total Matches: <span className="font-bold">{bracket.length}</span>
        </p>
      </div>

      {/* Mock bracket structure hint */}
      <div className="mt-6 rounded-lg bg-blue-50 p-4">
        <p className="text-sm font-semibold text-blue-800">
          📋 Bracket Structure:
        </p>
        <div className="mt-2 grid grid-cols-6 gap-2 text-center text-xs text-blue-700">
          <div>
            <p className="font-bold">Round 1</p>
            <p>32 matches</p>
          </div>
          <div>
            <p className="font-bold">Round 2</p>
            <p>16 matches</p>
          </div>
          <div>
            <p className="font-bold">Quarter</p>
            <p>8 matches</p>
          </div>
          <div>
            <p className="font-bold">Semi 1</p>
            <p>2 matches</p>
          </div>
          <div>
            <p className="font-bold">Semi 2</p>
            <p>2 matches</p>
          </div>
          <div>
            <p className="font-bold">Finals</p>
            <p>1 match</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentBracket;
