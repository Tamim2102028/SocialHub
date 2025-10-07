import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaUser,
  FaUsers,
  FaCog,
  FaBell,
  FaVideo,
  FaLayerGroup,
  FaFolder,
  FaStore,
  FaChalkboardTeacher,
  FaSchool,
  FaEllipsisH,
} from "react-icons/fa";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { prefetchRoute } from "../routes/prefetch";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navigationItems = [
    {
      icon: FaLayerGroup,
      label: "Groups",
      path: "/groups",
      active: location.pathname === "/groups",
    },
    {
      icon: FaBell,
      label: "Notifications",
      path: "/notifications",
      active: location.pathname === "/notifications",
      badge: 5,
    },
    {
      icon: FaFolder,
      label: "Files & Archive",
      path: "/files",
      active: location.pathname === "/files",
    },
    {
      icon: FaSchool,
      label: "ClassRoom",
      path: "/classroom",
      active: location.pathname === "/classroom",
    },
    {
      icon: FaStore,
      label: "Student Store",
      path: "/store",
      active: location.pathname === "/store",
    },
    {
      icon: FaChalkboardTeacher,
      label: "Tuition",
      path: "/tuition",
      active: location.pathname === "/tuition",
    },
    {
      icon: FaUsers,
      label: "Friends",
      path: "/friends",
      active: location.pathname === "/friends",
    },
    {
      icon: FaVideo,
      label: "Videos",
      path: "/videos",
      active: location.pathname === "/videos",
    },
    {
      icon: FaUser,
      label: "Profile",
      path: "/profile",
      active: location.pathname === "/profile",
    },
    {
      icon: FaEllipsisH,
      label: "More",
      path: "/more",
      active: location.pathname === "/more",
    },
    {
      icon: FaCog,
      label: "Settings",
      path: "/settings",
      active: location.pathname === "/settings",
    },
  ];

  return (
    <div className="flex h-full flex-col">
      {/* Logo/Brand */}
      <div className="flex items-center justify-between border-b border-gray-400 px-3 py-5">
        <NavLink to="/">
          <div className="flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              B
            </div>
            <span className="ml-2.5 text-xl font-bold text-gray-900">
              SocialHub
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/gaming"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600"
        >
          <IoExtensionPuzzleOutline className="h-5 w-5" />
        </NavLink>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-1">
          {navigationItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onMouseEnter={() => prefetchRoute(item.path)}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                item.active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center">
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`rounded-full px-2 py-1 text-xs font-bold ${
                    item.active
                      ? "bg-white text-blue-600"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
