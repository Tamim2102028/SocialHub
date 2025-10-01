import React from "react";
import { mockCourses } from "./dummyData/universityData";
import CourseCard from "./CourseCard";

const CurrentCourses: React.FC = () => {
  const handleCourseClick = (courseCode: string) => {
    // TODO: Implement course navigation logic
    console.log("Navigating to course:", courseCode);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Current Courses</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockCourses.map((course) => (
          <CourseCard
            key={course.code}
            course={course}
            onClick={handleCourseClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;
