import React from "react";
import UniversityHeader from "../components/University/UniversityHeader";
import CurrentCourses from "../components/University/CurrentCourses";
import UpcomingEvents from "../components/University/UpcomingEvents";
import QuickActions from "../components/University/QuickActions";

const University: React.FC = () => {
  return (
    <>
      <UniversityHeader />
      <CurrentCourses />
      <UpcomingEvents />
      <QuickActions />
    </>
  );
};

export default University;
