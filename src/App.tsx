import React from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import Sidebar from "./layout/Sidebar";
import SidebarRight from "./layout/SidebarRight";
import MainContent from "./layout/MainContent";

const App: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const isAuthPage = ["/login", "/register"].includes(location.pathname);

  // For non-authenticated users or auth pages, don't show right sidebar
  const showRightSidebar = isAuthenticated || !isAuthPage;

  return (
    <div className="grid h-screen grid-cols-[16rem_1fr_auto] overflow-hidden">
      {/* Left Sidebar - Navigation */}
      <div className="h-full overflow-y-auto border-r border-gray-500 bg-white">
        <Sidebar />
      </div>

      {/* Main Content - Middle Column */}
      <div className="h-full overflow-y-auto">
        <div className="mx-20">
          <MainContent />
        </div>
      </div>

      {/* Right Sidebar - Trending/Quick Links */}
      {showRightSidebar && (
        <div className="h-full w-80 overflow-y-auto border-l border-gray-500 bg-white">
          <SidebarRight />
        </div>
      )}
    </div>
  );
};

export default App;
