import React from "react";
import { mockEvents, type Event } from "./dummyData/universityData";
import EventCard from "./EventCard";

const UpcomingEvents: React.FC = () => {
  const handleEventClick = (event: Event) => {
    // TODO: Implement event details logic
    console.log("Opening event details:", event.title);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
      <div className="space-y-4">
        {mockEvents.map((event, index) => (
          <EventCard key={index} event={event} onClick={handleEventClick} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
