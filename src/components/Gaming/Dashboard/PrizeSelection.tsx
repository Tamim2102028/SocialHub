import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useAppDispatch } from "../../../store/hooks";
import { selectPrize } from "../../../store/slices/tournamentSlice.ts";

interface Prize {
  id: number;
  type: "buffet" | "masallah" | "pizza" | "cash";
  name: string;
  value: number;
  description: string;
  location?: string;
  note?: string;
}

interface PrizeSelectionProps {
  prizePool: Prize[];
}

const PrizeSelection: React.FC<PrizeSelectionProps> = ({ prizePool }) => {
  const dispatch = useAppDispatch();
  const [selectedPrizeId, setSelectedPrizeId] = useState<number | null>(null);

  const handleSelectPrize = (prize: Prize) => {
    setSelectedPrizeId(prize.id);
    dispatch(selectPrize(prize));
  };

  const getPrizeColor = (type: string) => {
    switch (type) {
      case "buffet":
        return "border-yellow-300 bg-yellow-50 hover:bg-yellow-100";
      case "masallah":
        return "border-orange-300 bg-orange-50 hover:bg-orange-100";
      case "pizza":
        return "border-red-300 bg-red-50 hover:bg-red-100";
      case "cash":
        return "border-green-300 bg-green-50 hover:bg-green-100";
      default:
        return "border-gray-300 bg-gray-50 hover:bg-gray-100";
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-2xl font-semibold text-gray-800">
          🎉 Congratulations, Champion! 🎉
        </h3>
        <p className="text-gray-600">Select your prize below:</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {prizePool.map((prize) => (
          <div
            key={prize.id}
            onClick={() => handleSelectPrize(prize)}
            className={`cursor-pointer rounded-lg border p-4 transition-all ${getPrizeColor(prize.type)} ${
              selectedPrizeId === prize.id
                ? "ring-2 ring-blue-500 ring-offset-1"
                : ""
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="mb-1 text-lg font-bold text-gray-800">
                  {prize.name}
                </h4>
                <p className="mb-2 text-sm text-gray-600">
                  {prize.description}
                </p>
                {prize.location && (
                  <p className="text-xs text-gray-500">📍 {prize.location}</p>
                )}
                {prize.note && (
                  <p className="mt-2 text-xs font-medium text-orange-600">
                    {prize.note}
                  </p>
                )}
              </div>
              <div className="ml-4 text-right">
                <p className="text-2xl font-bold text-gray-800">
                  {prize.value} TK
                </p>
                {selectedPrizeId === prize.id && (
                  <FaCheckCircle className="mt-2 text-2xl text-green-500" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPrizeId && (
        <div className="mt-6">
          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white shadow transition-all hover:bg-blue-700">
            Confirm Selection
          </button>
          <p className="mt-2 text-center text-xs text-gray-500">
            ⏰ You have 48 hours to claim your prize
          </p>
        </div>
      )}

      <div className="mt-6 rounded border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm font-semibold text-blue-800">
          📋 Prize Claim Process:
        </p>
        <ul className="mt-2 space-y-1 text-xs text-blue-700">
          <li>• Select your preferred prize above</li>
          <li>• Contact admin within 48 hours</li>
          <li>• Provide your bKash number (for cash)</li>
          <li>• Or schedule treat redemption date</li>
        </ul>
      </div>
    </div>
  );
};

export default PrizeSelection;
