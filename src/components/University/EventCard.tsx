import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import type { Event } from "./dummyData/universityData";

interface EventCardProps {
  event: Event;
  onClick?: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const getEventTypeStyles = (type: string) => {
    switch (type) {
      case "exam":
        return "bg-red-100 text-red-800";
      case "assignment":
        return "bg-yellow-100 text-yellow-800";
      case "lecture":
        return "bg-blue-100 text-blue-800";
      case "test":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  const handleClick = () => {
    onClick?.(event);
  };

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-center space-x-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex-shrink-0">
        <FaCalendarAlt className="h-5 w-5 text-blue-600" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{event.title}</h3>
        <p className="text-sm text-gray-600">
          {event.date} • {event.time}
        </p>
        <p className="text-sm text-gray-500">{event.location}</p>
      </div>
      <div>
        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${getEventTypeStyles(
            event.type
          )}`}
        >
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
