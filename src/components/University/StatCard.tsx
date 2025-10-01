import React from "react";
import type { IconType } from "react-icons";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: IconType;
  gradient: string;
  textColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  gradient,
  textColor,
}) => {
  return (
    <div className={`rounded-lg ${gradient} p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={textColor}>{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Icon className="h-8 w-8" />
      </div>
    </div>
  );
};

export default StatCard;
