import React from "react";
import { Routes, Route } from "react-router-dom";
import UniversityNavbar from "../components/University/UniversityNavbar";
import UniversityHeader from "../components/University/Universityheader";
import AcademicTimeline from "./University/AcademicTimeline";
import CRCorner from "./University/CRCorner";
import UniversityDashboard from "./University/Dashboard";
import UniversityEvents from "./University/Events";
import UniversityMarketplace from "./University/Marketplace";
import UniversityMore from "./University/More";
import UniversityNoticeBoard from "./University/NoticeBoard";
import TeachersCorner from "./University/TeachersCorner";
import NotFound from "./Fallbacks/NotFound";

const University: React.FC = () => {
  return (
    <>
      <UniversityHeader />
      <UniversityNavbar />
      <div>
        <Routes>
          <Route index element={<UniversityDashboard />} />
          <Route path="dashboard" element={<UniversityDashboard />} />
          <Route path="noticeboard" element={<UniversityNoticeBoard />} />
          <Route path="academictimeline" element={<AcademicTimeline />} />
          <Route path="crcorner" element={<CRCorner />} />
          <Route path="events" element={<UniversityEvents />} />
          <Route path="marketplace" element={<UniversityMarketplace />} />
          <Route path="teacherscorner" element={<TeachersCorner />} />
          <Route path="more" element={<UniversityMore />} />
          {/* Default route: show 404 not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default University;
