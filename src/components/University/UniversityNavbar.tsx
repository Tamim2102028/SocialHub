import React, { useState } from "react";
import {
  FaBuilding,
  FaCalendarAlt,
  FaClipboardList,
  FaClock,
  FaBullhorn,
  FaFolder,
  FaTag,
  FaEllipsisH,
} from "react-icons/fa";

const UniversityNavbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: FaBuilding },
    { id: "events", label: "Events", icon: FaCalendarAlt },
    { id: "notice", label: "Notice Board", icon: FaClipboardList },
    { id: "timeline", label: "Academic Timeline", icon: FaClock },
    { id: "cr-corner", label: "CR Corner", icon: FaBullhorn },
    { id: "teachers", label: "Teachers' Corner", icon: FaFolder },
    { id: "marketplace", label: "Marketplace", icon: FaTag },
    { id: "more", label: "More", icon: FaEllipsisH },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    console.log("Navigating to:", itemId);
  };

  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="space-y-2">
        {/* First Row */}
        <div className="grid grid-cols-4 gap-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`flex flex-col items-center rounded-lg p-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <Icon className="mb-1 h-5 w-5" />
                <span className="text-center text-xs font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-4 gap-2">
          {navItems.slice(4, 8).map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`flex flex-col items-center rounded-lg p-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <Icon className="mb-1 h-5 w-5" />
                <span className="text-center text-xs font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UniversityNavbar;
