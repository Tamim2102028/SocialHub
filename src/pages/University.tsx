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

// More pages imports
import CareerServices from "./University/More/CareerServices";
import Clubs from "./University/More/Clubs";
import CourseMaterials from "./University/More/CourseMaterials";
import ClassSchedule from "./University/More/ClassSchedule";
import Results from "./University/More/Results";
import Classmates from "./University/More/Classmates";
import LibraryPortal from "./University/More/LibraryPortal";
import StudentPortal from "./University/More/StudentPortal";
import FacultyDirectory from "./University/More/FacultyDirectory";
import ELearning from "./University/More/ELearning";
import UniversityNews from "./University/More/UniversityNews";
import FinancialAid from "./University/More/FinancialAid";
import AlumniNetwork from "./University/More/AlumniNetwork";
import CampusMap from "./University/More/CampusMap";
import SportsFacilities from "./University/More/SportsFacilities";
import HealthServices from "./University/More/HealthServices";
import BusSchedule from "./University/More/BusSchedule";
import ITSupport from "./University/More/ITSupport";

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
          {/* More section routes */}
          <Route path="more/clubs" element={<Clubs />} />{" "}
          <Route path="more/career-services" element={<CareerServices />} />
          <Route path="more/course-materials" element={<CourseMaterials />} />
          <Route path="more/class-schedule" element={<ClassSchedule />} />
          <Route path="more/results" element={<Results />} />
          <Route path="more/classmates" element={<Classmates />} />
          <Route path="more/library-portal" element={<LibraryPortal />} />
          <Route path="more/student-portal" element={<StudentPortal />} />
          <Route path="more/faculty-directory" element={<FacultyDirectory />} />
          <Route path="more/e-learning" element={<ELearning />} />
          <Route path="more/university-news" element={<UniversityNews />} />
          <Route path="more/financial-aid" element={<FinancialAid />} />
          <Route path="more/alumni-network" element={<AlumniNetwork />} />
          <Route path="more/campus-map" element={<CampusMap />} />
          <Route path="more/sports-facilities" element={<SportsFacilities />} />
          <Route path="more/health-services" element={<HealthServices />} />
          <Route path="more/bus-schedule" element={<BusSchedule />} />
          <Route path="more/it-support" element={<ITSupport />} />
          {/* Default route: show 404 not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default University;
